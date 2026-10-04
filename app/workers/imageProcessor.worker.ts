interface ProcessRequest {
  id: number;
  imageUrl: string;
  width: number;
  height: number;
  originalWidth?: number;
  originalHeight?: number;
  format: string;
  quality: number;
  targetSizeKb?: number | null;
  strip?: { lines: string[]; heightPct: number } | null;
  backgroundColor: string;
  rotation: number;
  crop: { x: number; y: number; width: number; height: number } | null;
  textOverlays: Array<{
    x: number;
    y: number;
    rotation: number;
    fontFamily?: string;
    fontWeight?: string;
    fontSize: number;
    color: string;
    align: CanvasTextAlign;
    text: string;
  }>;
}

// Above this many source pixels we avoid keeping the full-size bitmap resident
// (a 48MP bitmap is ~190MB — enough to kill a low-end phone tab).
const BIG_IMAGE_PIXELS = 16_000_000;
// Release big cached bitmaps after the worker has been idle.
const RELEASE_BITMAP_PIXELS = 8_000_000;
const MAX_OUTPUT_SIDE = 16384;
const MAX_OUTPUT_PIXELS = 100_000_000;
const HIGH_QUALITY_SMOOTHING_MAX_PIXELS = 8_000_000;
const IDLE_CLEANUP_MS = 3000;
const MIN_SEARCH_QUALITY = 0.05;
const MAX_SEARCH_QUALITY = 0.95;
const SEARCH_STEPS = 6;

/**
 * Encodes the canvas. With a size budget (JPEG/WebP only) it finds the highest quality that fits:
 * try the ceiling first (often already small enough), then the floor (to detect an impossible
 * budget), then bisect.
 */
async function encode(
  canvas: OffscreenCanvas,
  format: string,
  quality: number,
  targetBytes: number | null,
): Promise<{ blob: Blob; usedQuality: number; targetMet: boolean | undefined }> {
  if (!targetBytes || format === 'image/png') {
    const blob = await canvas.convertToBlob({ type: format, quality: quality / 100 });
    return { blob, usedQuality: Math.round(quality), targetMet: undefined };
  }

  let best = await canvas.convertToBlob({ type: format, quality: MAX_SEARCH_QUALITY });
  if (best.size <= targetBytes) {
    return { blob: best, usedQuality: Math.round(MAX_SEARCH_QUALITY * 100), targetMet: true };
  }

  let lo = MIN_SEARCH_QUALITY;
  let hi = MAX_SEARCH_QUALITY;
  let bestQuality = MIN_SEARCH_QUALITY;
  const floor = await canvas.convertToBlob({ type: format, quality: lo });
  if (floor.size > targetBytes) {
    // Even the lowest quality is too big at these dimensions.
    return { blob: floor, usedQuality: Math.round(lo * 100), targetMet: false };
  }
  best = floor;

  for (let i = 0; i < SEARCH_STEPS; i++) {
    const mid = (lo + hi) / 2;
    const candidate = await canvas.convertToBlob({ type: format, quality: mid });
    if (candidate.size <= targetBytes) {
      best = candidate;
      bestQuality = mid;
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return { blob: best, usedQuality: Math.max(1, Math.round(bestQuality * 100)), targetMet: true };
}

let cache: { key: string; bitmap: ImageBitmap } | null = null;
let cachedCanvas: OffscreenCanvas | null = null;
let cachedCtx: OffscreenCanvasRenderingContext2D | null = null;
let cleanupTimer: ReturnType<typeof setTimeout> | null = null;

// Only the most recent request matters: while one is being rendered, newer requests
// replace each other so the worker never wastes time on stale slider positions and
// never mutates the shared canvas concurrently.
let busy = false;
let pending: ProcessRequest | null = null;

function releaseBitmap() {
  if (cache) {
    cache.bitmap.close();
    cache = null;
  }
}

async function getBitmap(req: ProcessRequest, targetW: number, targetH: number): Promise<ImageBitmap> {
  const { imageUrl, originalWidth = 0, originalHeight = 0, crop } = req;
  const hasCrop = !!(crop && crop.width > 0 && crop.height > 0);
  const isBig = originalWidth * originalHeight > BIG_IMAGE_PIXELS;
  // For very large sources, decode straight to the output size instead of full resolution.
  const decodeReduced =
    isBig && !hasCrop && targetW > 0 && targetH > 0 && targetW < originalWidth && targetH < originalHeight;

  const key = decodeReduced ? `${imageUrl}|${targetW}x${targetH}` : imageUrl;
  if (cache && cache.key === key) return cache.bitmap;

  releaseBitmap();
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const bitmap = decodeReduced
    ? await createImageBitmap(blob, { resizeWidth: targetW, resizeHeight: targetH, resizeQuality: 'high' })
    : await createImageBitmap(blob);
  cache = { key, bitmap };
  return bitmap;
}

async function processRequest(req: ProcessRequest) {
  const { id, width, height, format, quality, targetSizeKb, backgroundColor, rotation, crop, textOverlays, strip } = req;

  try {
    const naturalW = req.originalWidth || 0;
    const naturalH = req.originalHeight || 0;
    const finalWidth = width > 0 ? width : naturalW;
    const finalHeight = height > 0 ? height : naturalH;

    const img = await getBitmap(req, finalWidth, finalHeight);

    const outW = finalWidth > 0 ? finalWidth : img.width;
    const outH = finalHeight > 0 ? finalHeight : img.height;

    const isRotated90 = rotation === 90 || rotation === 270;
    const canvasWidth = Math.max(1, Math.round(isRotated90 ? outH : outW));
    // Height of the photo area (after rotation); the optional strip is added below it.
    const contentHeight = Math.max(1, Math.round(isRotated90 ? outW : outH));
    const stripHeight = strip ? Math.max(1, Math.round((contentHeight * strip.heightPct) / 100)) : 0;
    const canvasHeight = contentHeight + stripHeight;

    if (
      canvasWidth > MAX_OUTPUT_SIDE ||
      canvasHeight > MAX_OUTPUT_SIDE ||
      canvasWidth * canvasHeight > MAX_OUTPUT_PIXELS
    ) {
      throw new Error('Output dimensions are too large for this device');
    }

    if (!cachedCanvas) {
      cachedCanvas = new OffscreenCanvas(canvasWidth, canvasHeight);
      cachedCtx = cachedCanvas.getContext('2d');
    } else {
      cachedCanvas.width = canvasWidth;
      cachedCanvas.height = canvasHeight;
    }
    const ctx = cachedCtx;
    if (!ctx) throw new Error('OffscreenCanvas context unavailable');

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = canvasWidth * canvasHeight <= HIGH_QUALITY_SMOOTHING_MAX_PIXELS ? 'high' : 'medium';

    // Background
    if (backgroundColor && backgroundColor !== 'transparent') {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    } else if (format === 'image/jpeg') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    // Draw image
    ctx.save();
    ctx.translate(canvasWidth / 2, contentHeight / 2);
    ctx.rotate((rotation * Math.PI) / 180);

    let srcX = 0, srcY = 0, srcW = img.width, srcH = img.height;
    if (crop && crop.width > 0 && crop.height > 0) {
      srcX = crop.x;
      srcY = crop.y;
      srcW = crop.width;
      srcH = crop.height;
    }

    ctx.drawImage(img, srcX, srcY, srcW, srcH, -outW / 2, -outH / 2, outW, outH);
    ctx.restore();

    // Text overlays
    if (Array.isArray(textOverlays)) {
      for (const overlay of textOverlays) {
        ctx.save();
        const x = (overlay.x / 100) * canvasWidth;
        const y = (overlay.y / 100) * contentHeight;
        ctx.translate(x, y);
        ctx.rotate((overlay.rotation * Math.PI) / 180);
        const safeFontFamily = (overlay.fontFamily || 'sans-serif').replace(/var\([^)]+\)/g, 'sans-serif');
        ctx.font = `${overlay.fontWeight || 'normal'} ${overlay.fontSize}px ${safeFontFamily}`;
        ctx.fillStyle = overlay.color;
        ctx.textAlign = overlay.align;
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 1;
        const lines = overlay.text.split('\n');
        const lineHeight = overlay.fontSize * 1.25;
        const totalHeight = lines.length * lineHeight;
        lines.forEach((line: string, i: number) => {
          ctx.fillText(line, 0, (i * lineHeight) - (totalHeight / 2) + lineHeight / 2);
        });
        ctx.restore();
      }
    }

    // White Name & DOB/DOP strip under photo
    if (strip && Array.isArray(strip.lines) && strip.lines.length > 0 && stripHeight > 0) {
      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, contentHeight, canvasWidth, stripHeight);

      // Clean divider line between photo and strip
      ctx.strokeStyle = '#d4d4d8';
      ctx.lineWidth = Math.max(1, Math.round(canvasWidth / 600));
      ctx.beginPath();
      ctx.moveTo(0, contentHeight);
      ctx.lineTo(canvasWidth, contentHeight);
      ctx.stroke();

      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const lineCount = strip.lines.length;
      const availableH = (stripHeight * 0.75) / lineCount;
      const fontSize = Math.max(10, Math.min(Math.round(availableH * 0.75), Math.round(canvasWidth * 0.055)));
      ctx.font = `bold ${fontSize}px sans-serif`;

      const centerY = contentHeight + stripHeight / 2;
      const lineSpacing = fontSize * 1.3;
      const totalBlock = (lineCount - 1) * lineSpacing;

      strip.lines.forEach((line: string, idx: number) => {
        const y = centerY - totalBlock / 2 + idx * lineSpacing;
        ctx.fillText(line, canvasWidth / 2, y);
      });
      ctx.restore();
    }

    const targetBytes = targetSizeKb && targetSizeKb > 0 ? Math.round(targetSizeKb * 1024) : null;
    const { blob: outBlob, usedQuality, targetMet } = await encode(cachedCanvas, format, quality, targetBytes);
    self.postMessage({
      id,
      success: true,
      blob: outBlob,
      width: canvasWidth,
      height: canvasHeight,
      usedQuality,
      targetMet,
    });
  } catch (error) {
    console.error('Worker error:', error);
    // A failed decode may have left a bad cache entry behind.
    releaseBitmap();
    self.postMessage({ id, success: false, error: error instanceof Error ? error.message : String(error) });
  }
}

async function drain() {
  busy = true;
  try {
    while (pending) {
      const next = pending;
      pending = null;
      await processRequest(next);
    }
  } finally {
    busy = false;
  }

  // Free pixel buffers once idle.
  cleanupTimer = setTimeout(() => {
    cleanupTimer = null;
    if (cachedCanvas) {
      cachedCanvas.width = 1;
      cachedCanvas.height = 1;
    }
    if (cache && cache.bitmap.width * cache.bitmap.height > RELEASE_BITMAP_PIXELS) {
      releaseBitmap();
    }
  }, IDLE_CLEANUP_MS);
}

self.onmessage = (e: MessageEvent<ProcessRequest>) => {
  if (cleanupTimer) {
    clearTimeout(cleanupTimer);
    cleanupTimer = null;
  }
  pending = e.data;
  if (!busy) void drain();
};

export {};

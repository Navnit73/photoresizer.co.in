/**
 * Image pipeline for the PAN card and signature resizers.
 *
 * Everything runs on small canvases (outputs are at most ~1000 px), so per-pixel work stays
 * well under a frame even on low-end phones.
 */

import { loadImage, type CropAreaPercent } from '../passport_photo/imageUtils';

export type InkColor = 'original' | 'black' | 'blue';

export interface Adjustments {
  /** -50..50 */
  brightness: number;
  /** -50..50 */
  contrast: number;
  /** Signature only: whiten paper and deepen ink. 0 = off, 100 = strongest. */
  clean: number;
  ink: InkColor;
}

export const DEFAULT_PHOTO_ADJUST: Adjustments = { brightness: 0, contrast: 0, clean: 0, ink: 'original' };
export const DEFAULT_SIGN_ADJUST: Adjustments = { brightness: 0, contrast: 0, clean: 60, ink: 'black' };

export interface EncodeResult {
  blob: Blob;
  url: string;
  bytes: number;
  quality: number;
  /** True when filler bytes were added to reach the minimum size. */
  padded: boolean;
  fitsMax: boolean;
  fitsMin: boolean;
}

/**
 * KB limits are interpreted the strict way on both ends, so the file passes whether a portal
 * counts 1 KB as 1000 or 1024 bytes.
 */
export const maxBytesFor = (kb: number) => Math.floor(kb * 1000);
export const minBytesFor = (kb: number) => Math.ceil(kb * 1024);

function canvasToBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error('Your browser could not encode this image.'))),
      'image/jpeg',
      quality,
    );
  });
}

/** Rotates an image by a multiple of 90° and returns a new JPEG blob URL. */
export async function rotateImage(src: string, degrees: 90 | -90): Promise<{ url: string; width: number; height: number }> {
  const img = await loadImage(src);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalHeight;
  canvas.height = img.naturalWidth;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Your browser could not process this image.');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((degrees * Math.PI) / 180);
  ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
  const blob = await canvasToBlob(canvas, 0.95);
  return { url: URL.createObjectURL(blob), width: canvas.width, height: canvas.height };
}

const luminance = (r: number, g: number, b: number) => 0.299 * r + 0.587 * g + 0.114 * b;

function lumaOf(data: Uint8ClampedArray, w: number, h: number): Float32Array {
  const out = new Float32Array(w * h);
  for (let i = 0, p = 0; p < out.length; i += 4, p++) out[p] = luminance(data[i], data[i + 1], data[i + 2]);
  return out;
}

/**
 * Estimates the brightness of the bare paper under every pixel. Phone photos of a signature are
 * never evenly lit (one side darker, a hand shadow), so ink has to be judged against the paper
 * *around* it rather than one global level. Paper is the brightest thing in any small block, so
 * we take per-block maxima, grow them over thick strokes, and interpolate smoothly.
 */
function paperMap(luma: Float32Array, w: number, h: number, block: number): Float32Array {
  const bw = Math.ceil(w / block);
  const bh = Math.ceil(h / block);
  const bmax = new Float32Array(bw * bh);
  for (let y = 0; y < h; y++) {
    const row = Math.floor(y / block) * bw;
    for (let x = 0; x < w; x++) {
      const k = row + Math.floor(x / block);
      const v = luma[y * w + x];
      if (v > bmax[k]) bmax[k] = v;
    }
  }
  // 3×3 dilation so a block fully covered by a thick marker stroke borrows nearby paper.
  const grown = new Float32Array(bw * bh);
  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      let m = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const yy = by + dy;
          const xx = bx + dx;
          if (yy >= 0 && yy < bh && xx >= 0 && xx < bw) m = Math.max(m, bmax[yy * bw + xx]);
        }
      }
      grown[by * bw + bx] = m;
    }
  }
  // Bilinear interpolation between block centres.
  const out = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const fy = Math.min(bh - 1, Math.max(0, (y + 0.5) / block - 0.5));
    const y0 = Math.floor(fy);
    const y1 = Math.min(bh - 1, y0 + 1);
    const ty = fy - y0;
    for (let x = 0; x < w; x++) {
      const fx = Math.min(bw - 1, Math.max(0, (x + 0.5) / block - 0.5));
      const x0 = Math.floor(fx);
      const x1 = Math.min(bw - 1, x0 + 1);
      const tx = fx - x0;
      const top = grown[y0 * bw + x0] * (1 - tx) + grown[y0 * bw + x1] * tx;
      const bot = grown[y1 * bw + x0] * (1 - tx) + grown[y1 * bw + x1] * tx;
      out[y * w + x] = Math.max(1, top * (1 - ty) + bot * ty);
    }
  }
  return out;
}

/**
 * Finds the signature's ink and returns a new image cropped to it, centred on white paper at the
 * requested aspect ratio with a comfortable margin. Returns null when no clear ink is found.
 */
export async function autoFitSignature(
  src: string,
  aspect: number,
): Promise<{ url: string; width: number; height: number } | null> {
  const img = await loadImage(src);
  const scale = Math.min(1, 600 / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const probe = document.createElement('canvas');
  probe.width = w;
  probe.height = h;
  const pctx = probe.getContext('2d', { willReadFrequently: true });
  if (!pctx) return null;
  pctx.fillStyle = '#ffffff';
  pctx.fillRect(0, 0, w, h);
  pctx.drawImage(img, 0, 0, w, h);
  const { data } = pctx.getImageData(0, 0, w, h);
  const luma = lumaOf(data, w, h);
  const paper = paperMap(luma, w, h, Math.max(8, Math.round(Math.max(w, h) / 30)));

  // Ink = clearly darker than the paper right around it.
  // Count ink pixels per row/column, ignoring a thin border where paper edges and shadows live.
  const border = Math.round(Math.min(w, h) * 0.02);
  const rows = new Uint32Array(h);
  const cols = new Uint32Array(w);
  let inkPixels = 0;
  for (let y = border; y < h - border; y++) {
    for (let x = border; x < w - border; x++) {
      const p = y * w + x;
      if (luma[p] < paper[p] * 0.7 && paper[p] - luma[p] > 30) {
        rows[y]++;
        cols[x]++;
        inkPixels++;
      }
    }
  }
  if (inkPixels < 20) return null; // nothing that looks like a pen stroke
  // A row/column only counts as ink if it carries more than speckle noise.
  const minRow = Math.max(1, Math.round(w * 0.004));
  const minCol = Math.max(1, Math.round(h * 0.004));
  let top = rows.findIndex((c) => c >= minRow);
  let left = cols.findIndex((c) => c >= minCol);
  let bottom = h - 1 - [...rows].reverse().findIndex((c) => c >= minRow);
  let right = w - 1 - [...cols].reverse().findIndex((c) => c >= minCol);
  if (top < 0 || left < 0 || bottom <= top || right <= left) return null;

  // Back to full-resolution coordinates.
  top /= scale;
  left /= scale;
  bottom = (bottom + 1) / scale;
  right = (right + 1) / scale;
  let boxW = right - left;
  let boxH = bottom - top;

  // Margin, then grow the short side to match the output aspect ratio.
  const margin = 0.12;
  boxW *= 1 + margin * 2;
  boxH *= 1 + margin * 2;
  if (boxW / boxH > aspect) boxH = boxW / aspect;
  else boxW = boxH * aspect;
  const cx = (left + right) / 2;
  const cy = (top + bottom) / 2;

  const longEdge = Math.min(1600, Math.max(boxW, boxH));
  const outScale = longEdge / Math.max(boxW, boxH);
  const out = document.createElement('canvas');
  out.width = Math.max(1, Math.round(boxW * outScale));
  out.height = Math.max(1, Math.round(boxH * outScale));
  const octx = out.getContext('2d');
  if (!octx) return null;
  octx.fillStyle = '#ffffff';
  octx.fillRect(0, 0, out.width, out.height);
  octx.imageSmoothingQuality = 'high';
  octx.drawImage(
    img,
    (-(cx - boxW / 2)) * outScale,
    (-(cy - boxH / 2)) * outScale,
    img.naturalWidth * outScale,
    img.naturalHeight * outScale,
  );
  const blob = await canvasToBlob(out, 0.95);
  return { url: URL.createObjectURL(blob), width: out.width, height: out.height };
}

function applyAdjustments(ctx: CanvasRenderingContext2D, w: number, h: number, kind: 'photo' | 'signature', adj: Adjustments) {
  const needsPhoto = adj.brightness !== 0 || adj.contrast !== 0;
  const needsClean = kind === 'signature' && (adj.clean > 0 || adj.ink !== 'original');
  if (!needsPhoto && !needsClean) return;

  const image = ctx.getImageData(0, 0, w, h);
  const d = image.data;

  if (needsPhoto) {
    const b = adj.brightness * 2.55 * 0.8;
    const c = adj.contrast * 2.55;
    const f = (259 * (c + 255)) / (255 * (259 - c));
    for (let i = 0; i < d.length; i += 4) {
      d[i] = f * (d[i] - 128) + 128 + b;
      d[i + 1] = f * (d[i + 1] - 128) + 128 + b;
      d[i + 2] = f * (d[i + 2] - 128) + 128 + b;
    }
  }

  if (needsClean) {
    const luma = lumaOf(d, w, h);
    const paper = paperMap(luma, w, h, Math.max(6, Math.round(Math.min(w, h) / 5)));
    const s = adj.clean / 100;
    // v = brightness relative to local paper: 1 is bare paper, ink sits well below.
    // Above `hi` becomes pure white, below `lo` becomes full-strength ink.
    const hi = 1 - 0.22 * s;
    const lo = Math.min(hi - 0.1, 0.2 + 0.35 * s);
    const inkRGB = adj.ink === 'blue' ? [16, 42, 140] : [0, 0, 0];
    for (let i = 0, p = 0; i < d.length; i += 4, p++) {
      const v = luma[p] / paper[p];
      // 0 = full ink, 1 = clean paper
      const o = Math.min(1, Math.max(0, (v - lo) / Math.max(0.01, hi - lo)));
      if (adj.ink === 'original') {
        d[i] += (255 - d[i]) * o;
        d[i + 1] += (255 - d[i + 1]) * o;
        d[i + 2] += (255 - d[i + 2]) * o;
      } else {
        d[i] = inkRGB[0] + (255 - inkRGB[0]) * o;
        d[i + 1] = inkRGB[1] + (255 - inkRGB[1]) * o;
        d[i + 2] = inkRGB[2] + (255 - inkRGB[2]) * o;
      }
    }
  }
  ctx.putImageData(image, 0, 0);
}

/** Draws the cropped area at the exact output size on white, then applies adjustments. */
export async function renderDoc(opts: {
  src: string;
  area: CropAreaPercent;
  width: number;
  height: number;
  kind: 'photo' | 'signature';
  adjust: Adjustments;
}): Promise<HTMLCanvasElement> {
  const img = await loadImage(opts.src);
  const canvas = document.createElement('canvas');
  canvas.width = opts.width;
  canvas.height = opts.height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('Your browser could not process this image.');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, opts.width, opts.height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Map the crop rectangle (which may extend past the image when zoomed out) onto the canvas.
  const ax = (opts.area.x / 100) * img.naturalWidth;
  const ay = (opts.area.y / 100) * img.naturalHeight;
  const aw = (opts.area.width / 100) * img.naturalWidth;
  const ah = (opts.area.height / 100) * img.naturalHeight;
  const sx = opts.width / aw;
  const sy = opts.height / ah;

  // Large downscales look soft and aliased in one step; halve first, then draw.
  let source: CanvasImageSource = img;
  let srcW = img.naturalWidth;
  let srcH = img.naturalHeight;
  while (sx * (img.naturalWidth / srcW) < 0.5 && srcW > 2) {
    const half = document.createElement('canvas');
    half.width = Math.max(1, Math.round(srcW / 2));
    half.height = Math.max(1, Math.round(srcH / 2));
    const hctx = half.getContext('2d');
    if (!hctx) break;
    hctx.imageSmoothingQuality = 'high';
    hctx.drawImage(source, 0, 0, half.width, half.height);
    source = half;
    srcW = half.width;
    srcH = half.height;
  }
  ctx.drawImage(source, -ax * sx, -ay * sy, img.naturalWidth * sx, img.naturalHeight * sy);

  applyAdjustments(ctx, opts.width, opts.height, opts.kind, opts.adjust);
  return canvas;
}

// ── JPEG byte surgery ───────────────────────────────────────────────────────

/** Writes the DPI into the JFIF header (adds one if the browser omitted it). */
function withDpi(bytes: Uint8Array, dpi: number): Uint8Array {
  const d = Math.max(1, Math.min(65535, Math.round(dpi)));
  const isJfif =
    bytes[2] === 0xff && bytes[3] === 0xe0 &&
    bytes[6] === 0x4a && bytes[7] === 0x46 && bytes[8] === 0x49 && bytes[9] === 0x46 && bytes[10] === 0x00;
  if (isJfif) {
    const out = bytes.slice();
    out[13] = 1; // units: dots per inch
    out[14] = d >> 8;
    out[15] = d & 0xff;
    out[16] = d >> 8;
    out[17] = d & 0xff;
    return out;
  }
  const app0 = new Uint8Array([
    0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x01,
    d >> 8, d & 0xff, d >> 8, d & 0xff, 0x00, 0x00,
  ]);
  const out = new Uint8Array(bytes.length + app0.length);
  out.set(bytes.subarray(0, 2), 0);
  out.set(app0, 2);
  out.set(bytes.subarray(2), 2 + app0.length);
  return out;
}

/**
 * Grows a JPEG to `targetBytes` with comment (COM) segments placed after the header. Decoders
 * skip comments, so the picture is untouched; this only exists because many exam portals reject
 * files *below* a minimum size, and tiny signatures compress far below it.
 */
function padTo(bytes: Uint8Array, targetBytes: number): Uint8Array {
  let missing = targetBytes - bytes.length;
  if (missing <= 0) return bytes;
  const segments: Uint8Array[] = [];
  const text = new TextEncoder().encode('PhotoResizer.co.in ');
  while (missing > 0) {
    const payload = Math.max(1, Math.min(65533, missing - 4));
    const seg = new Uint8Array(payload + 4);
    seg[0] = 0xff;
    seg[1] = 0xfe;
    seg[2] = (payload + 2) >> 8;
    seg[3] = (payload + 2) & 0xff;
    for (let i = 0; i < payload; i++) seg[4 + i] = text[i % text.length];
    segments.push(seg);
    missing -= seg.length;
  }
  // Insert after SOI + APP0 (JFIF header must stay first).
  const app0Len = bytes[2] === 0xff && bytes[3] === 0xe0 ? 2 + ((bytes[4] << 8) | bytes[5]) : 0;
  const at = 2 + app0Len;
  const total = segments.reduce((n, s) => n + s.length, 0);
  const out = new Uint8Array(bytes.length + total);
  out.set(bytes.subarray(0, at), 0);
  let pos = at;
  for (const s of segments) {
    out.set(s, pos);
    pos += s.length;
  }
  out.set(bytes.subarray(at), pos);
  return out;
}

/**
 * Encodes the canvas as the highest-quality JPEG that fits under `maxKB`, writes the DPI, and,
 * when `padToMin` is on, tops the file up to `minKB`.
 */
export async function encodeToRange(
  canvas: HTMLCanvasElement,
  { minKB, maxKB, dpi, padToMin }: { minKB: number; maxKB: number; dpi: number; padToMin: boolean },
): Promise<EncodeResult> {
  const maxBytes = maxBytesFor(maxKB);
  const minBytes = minKB > 0 ? minBytesFor(minKB) : 0;
  const HEADER_SLACK = 20; // the APP0 we may add

  const sizeAt = async (q: number) => {
    const blob = await canvasToBlob(canvas, q);
    return { blob, q };
  };

  let best = await sizeAt(0.95);
  if (best.blob.size + HEADER_SLACK > maxBytes) {
    // Binary search the highest quality that still fits.
    let lo = 0.05;
    let hi = 0.95;
    let found: { blob: Blob; q: number } | null = null;
    for (let i = 0; i < 8; i++) {
      const mid = (lo + hi) / 2;
      const attempt = await sizeAt(mid);
      if (attempt.blob.size + HEADER_SLACK <= maxBytes) {
        found = attempt;
        lo = mid;
      } else {
        hi = mid;
      }
    }
    best = found ?? (await sizeAt(0.05));
  }

  let bytes: Uint8Array = withDpi(new Uint8Array(await best.blob.arrayBuffer()), dpi);
  let padded = false;
  if (padToMin && minBytes > 0 && bytes.length < minBytes && minBytes <= maxBytes) {
    // Land comfortably inside the range rather than on its edge.
    const target = Math.min(maxBytes - 512, minBytes + Math.max(512, Math.round((maxBytes - minBytes) * 0.25)));
    bytes = padTo(bytes, Math.max(minBytes, target));
    padded = true;
  }

  const blob = new Blob([bytes as BlobPart], { type: 'image/jpeg' });
  return {
    blob,
    url: URL.createObjectURL(blob),
    bytes: blob.size,
    quality: Math.round(best.q * 100),
    padded,
    fitsMax: blob.size <= maxBytes,
    fitsMin: minBytes === 0 || blob.size >= minBytes,
  };
}

export function formatKB(bytes: number): string {
  const kb = bytes / 1024;
  return kb < 10 ? `${kb.toFixed(1)} KB` : `${Math.round(kb)} KB`;
}

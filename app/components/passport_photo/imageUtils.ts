/**
 * Image helpers for the passport photo tool.
 *
 * Phone photos are often 12–50 MP. Feeding those straight into the cropper or the
 * background-removal model is what made the page freeze (and crash on iOS), so every
 * upload is first reduced to a "working" image that is still far larger than any
 * passport output.
 */

/** Longest edge of the image the cropper works on. Passport outputs top out near 1062 px. */
const WORKING_MAX_EDGE = 2000;
/** Longest edge sent to the background-removal model (it infers at 1024 px internally). */
const BG_REMOVAL_MAX_EDGE = 1280;

export interface WorkingImage {
  url: string;
  width: number;
  height: number;
}

/** Crop rectangle in percentages of the image (react-easy-crop's `croppedArea`). */
export interface CropAreaPercent {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      if (!img.naturalWidth || !img.naturalHeight) {
        reject(new Error('This image appears to be empty.'));
        return;
      }
      resolve(img);
    };
    img.onerror = () =>
      reject(new Error('This photo format is not supported by your browser. Please use a JPG or PNG.'));
    img.src = src;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('Could not encode the image.'))),
      type,
      quality,
    );
  });
}

function drawScaled(img: HTMLImageElement, maxEdge: number, background?: string): HTMLCanvasElement {
  const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth, img.naturalHeight));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Your browser could not process this image.');
  ctx.imageSmoothingQuality = 'high';
  if (background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas;
}

/** Decodes an upload and returns a screen-friendly JPEG copy (or the original if already small). */
export async function prepareWorkingImage(file: File): Promise<WorkingImage> {
  const originalUrl = URL.createObjectURL(file);
  try {
    const img = await loadImage(originalUrl);
    const longEdge = Math.max(img.naturalWidth, img.naturalHeight);
    if (longEdge <= WORKING_MAX_EDGE && file.type === 'image/jpeg') {
      return { url: originalUrl, width: img.naturalWidth, height: img.naturalHeight };
    }
    // White fill so transparent PNGs don't turn black once flattened to JPEG.
    const canvas = drawScaled(img, WORKING_MAX_EDGE, '#ffffff');
    const blob = await canvasToBlob(canvas, 'image/jpeg', 0.92);
    URL.revokeObjectURL(originalUrl);
    return { url: URL.createObjectURL(blob), width: canvas.width, height: canvas.height };
  } catch (err) {
    URL.revokeObjectURL(originalUrl);
    throw err;
  }
}

/** Smaller copy of the working image for the ML model — keeps memory and main-thread work down. */
export async function makeBgRemovalInput(src: string): Promise<Blob> {
  const img = await loadImage(src);
  const canvas = drawScaled(img, BG_REMOVAL_MAX_EDGE);
  return canvasToBlob(canvas, 'image/jpeg', 0.95);
}

interface RenderOptions {
  /** Working image URL (full detail). */
  src: string;
  /** Background-removed cut-out, possibly at a lower resolution; used as an alpha mask. */
  maskSrc?: string | null;
  area: CropAreaPercent;
  width: number;
  height: number;
  bgColor: string;
  maxBytes: number;
}

/**
 * Renders the final passport photo at exact pixel dimensions and re-encodes with
 * decreasing JPEG quality until it fits the size limit. Dimensions are never changed,
 * because passport portals reject photos with the wrong pixel size.
 */
export async function renderPassportPhoto({
  src,
  maskSrc,
  area,
  width,
  height,
  bgColor,
  maxBytes,
}: RenderOptions): Promise<File> {
  const [img, mask] = await Promise.all([loadImage(src), maskSrc ? loadImage(maskSrc) : null]);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Your browser could not process this image.');
  ctx.imageSmoothingQuality = 'high';

  const rect = (el: HTMLImageElement) =>
    [
      (area.x / 100) * el.naturalWidth,
      (area.y / 100) * el.naturalHeight,
      (area.width / 100) * el.naturalWidth,
      (area.height / 100) * el.naturalHeight,
    ] as const;

  if (mask) {
    // Draw the cut-out's alpha, then paint the sharp full-resolution pixels through it,
    // then put the plain background colour behind everything.
    ctx.drawImage(mask, ...rect(mask), 0, 0, width, height);
    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(img, ...rect(img), 0, 0, width, height);
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, ...rect(img), 0, 0, width, height);
  }

  let blob = await canvasToBlob(canvas, 'image/jpeg', 0.92);
  for (let quality = 0.85; blob.size > maxBytes && quality >= 0.4; quality -= 0.08) {
    blob = await canvasToBlob(canvas, 'image/jpeg', quality);
  }
  return new File([blob], 'passport_photo.jpg', { type: 'image/jpeg' });
}

/** Lets React paint (e.g. a spinner) before starting work that may block the main thread. */
export function nextPaint(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

import { isLowEndDevice } from './device';

export interface PreparedImage {
  /** Blob URL of the full-resolution original (used for export / processing). */
  url: string;
  /** Blob URL of a screen-sized proxy used for on-screen display (may equal `url`). */
  previewUrl: string;
  width: number;
  height: number;
}

const MAX_PREVIEW_DIMENSION = 1600;
const MAX_PREVIEW_DIMENSION_LOW_END = 1100;

function loadDimensions(url: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;
      // Drop the reference so the browser can release decoded pixels.
      img.onload = null;
      img.onerror = null;
      img.src = '';
      if (!width || !height) reject(new Error('Image has no dimensions'));
      else resolve({ width, height });
    };
    img.onerror = () => reject(new Error('Could not load image'));
    img.src = url;
  });
}

/**
 * Builds a downscaled proxy so a 12–50MP photo is never decoded by an <img>
 * just to be shown in a ~800px wide workspace (that costs 50–200MB on phones).
 * Returns null when the image is already small enough or the proxy fails.
 */
async function createPreviewUrl(file: Blob, width: number, height: number): Promise<string | null> {
  const maxDim = isLowEndDevice() ? MAX_PREVIEW_DIMENSION_LOW_END : MAX_PREVIEW_DIMENSION;
  const longSide = Math.max(width, height);
  if (longSide <= maxDim) return null;

  const scale = maxDim / longSide;
  const w = Math.max(1, Math.round(width * scale));
  const h = Math.max(1, Math.round(height * scale));

  try {
    let bitmap: ImageBitmap;
    try {
      // Decode directly at the reduced size where supported (much cheaper).
      bitmap = await createImageBitmap(file, { resizeWidth: w, resizeHeight: h, resizeQuality: 'medium' });
    } catch {
      bitmap = await createImageBitmap(file);
    }

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      bitmap.close();
      return null;
    }
    ctx.drawImage(bitmap, 0, 0, w, h);
    bitmap.close();

    const hasAlpha = file.type === 'image/png' || file.type === 'image/webp';
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, hasAlpha ? 'image/webp' : 'image/jpeg', 0.85),
    );
    // Release the canvas backing store immediately.
    canvas.width = 0;
    canvas.height = 0;

    return blob ? URL.createObjectURL(blob) : null;
  } catch {
    return null;
  }
}

/** Creates the blob URLs + dimensions the editor needs for a freshly picked file. */
export async function prepareImage(file: File | Blob): Promise<PreparedImage> {
  const url = URL.createObjectURL(file);
  try {
    const { width, height } = await loadDimensions(url);
    const previewUrl = (await createPreviewUrl(file, width, height)) ?? url;
    return { url, previewUrl, width, height };
  } catch (error) {
    URL.revokeObjectURL(url);
    throw error;
  }
}

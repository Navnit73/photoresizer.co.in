let cachedImageUrl: string | null = null;
let cachedImageBitmap: ImageBitmap | null = null;
let cachedCanvas: OffscreenCanvas | null = null;
let cachedCtx: OffscreenCanvasRenderingContext2D | null = null;
let cleanupTimer: any = null;

self.onmessage = async (e) => {
  if (cleanupTimer) {
    clearTimeout(cleanupTimer);
    cleanupTimer = null;
  }

  const {
    imageUrl, width, height, format, quality,
    backgroundColor, rotation, crop, textOverlays
  } = e.data;

  try {
    let img: ImageBitmap;
    if (cachedImageUrl === imageUrl && cachedImageBitmap) {
      img = cachedImageBitmap;
    } else {
      if (cachedImageBitmap) {
        cachedImageBitmap.close();
      }
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      img = await createImageBitmap(blob);
      cachedImageUrl = imageUrl;
      cachedImageBitmap = img;
    }

    const finalWidth = width > 0 ? width : img.width;
    const finalHeight = height > 0 ? height : img.height;

    const isRotated90 = rotation === 90 || rotation === 270;
    const canvasWidth = isRotated90 ? finalHeight : finalWidth;
    const canvasHeight = isRotated90 ? finalWidth : finalHeight;

    if (!cachedCanvas) {
      cachedCanvas = new OffscreenCanvas(canvasWidth, canvasHeight);
      cachedCtx = cachedCanvas.getContext('2d');
    } else {
      cachedCanvas.width = canvasWidth;
      cachedCanvas.height = canvasHeight;
    }
    const ctx = cachedCtx;
    if (!ctx) throw new Error('OffscreenCanvas context unavailable');

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
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate((rotation * Math.PI) / 180);

    let srcX = 0, srcY = 0, srcW = img.width, srcH = img.height;
    if (crop && crop.width > 0 && crop.height > 0) {
      srcX = crop.x;
      srcY = crop.y;
      srcW = crop.width;
      srcH = crop.height;
    }

    ctx.drawImage(img, srcX, srcY, srcW, srcH, -finalWidth / 2, -finalHeight / 2, finalWidth, finalHeight);
    ctx.restore();

    // Text overlays
    for (const overlay of textOverlays) {
      ctx.save();
      const x = (overlay.x / 100) * canvasWidth;
      const y = (overlay.y / 100) * canvasHeight;
      ctx.translate(x, y);
      ctx.rotate((overlay.rotation * Math.PI) / 180);
      ctx.globalAlpha = overlay.opacity / 100;
      ctx.font = `${overlay.fontWeight} ${overlay.fontSize}px ${overlay.fontFamily}`;
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

    const outBlob = await cachedCanvas!.convertToBlob({ type: format, quality: quality / 100 });
    self.postMessage({ success: true, blob: outBlob, width: canvasWidth, height: canvasHeight });

    // Free pixel buffer memory if inactive for 3 seconds
    cleanupTimer = setTimeout(() => {
      if (cachedCanvas) {
        cachedCanvas.width = 1;
        cachedCanvas.height = 1;
      }
    }, 3000);
  } catch (error) {
    console.error('Worker error:', error);
    self.postMessage({ success: false, error: error instanceof Error ? error.message : String(error) });
  }
};

export {};

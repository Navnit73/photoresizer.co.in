import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { BgJob } from '../types';

/**
 * Applies the selected background color to the transparent image result
 * and exports it to the selected format using an off-screen canvas.
 */
export const applyBackgroundToImage = async (
  resultUrl: string,
  backgroundColor: string,
  exportFormat: 'image/png' | 'image/webp'
): Promise<Blob> => {
  // If transparent PNG, just fetch the blob
  if (backgroundColor === 'transparent' && exportFormat === 'image/png') {
    const response = await fetch(resultUrl);
    return await response.blob();
  }

  // Otherwise, draw on canvas
  return new Promise<Blob>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return reject(new Error('Failed to get 2D context'));

      if (backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to generate Blob from canvas'));
      }, exportFormat, 1.0);
    };
    img.onerror = () => reject(new Error('Failed to load image onto canvas'));
    img.src = resultUrl;
  });
};

/**
 * Applies formatting and downloads a single processed image.
 */
export const downloadProcessedImage = async (
  url: string,
  filename: string,
  bgColor: string,
  format: 'image/png' | 'image/webp'
) => {
  try {
    const blob = await applyBackgroundToImage(url, bgColor, format);
    const blobUrl = URL.createObjectURL(blob);
    
    const ext = format === 'image/webp' ? 'webp' : 'png';
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename.replace(/\.[^/.]+$/, "") + `_edited.${ext}`;
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error('Failed to download individual image', err);
  }
};

/**
 * Creates a ZIP archive of all completed jobs, applying the chosen background and format to each.
 */
export const createZipArchive = async (
  completedJobs: BgJob[],
  backgroundColor: string,
  exportFormat: 'image/png' | 'image/webp'
) => {
  const zip = new JSZip();
  
  const promises = completedJobs.map(async (job) => {
    if (!job.resultUrl) return;
    const finalBlob = await applyBackgroundToImage(job.resultUrl, backgroundColor, exportFormat);
    const ext = exportFormat === 'image/webp' ? 'webp' : 'png';
    const baseName = job.fileName.replace(/\.[^/.]+$/, "");
    zip.file(`${baseName}_nobg.${ext}`, finalBlob);
  });

  await Promise.all(promises);

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'pixelcraft_bg_removed.zip');
};

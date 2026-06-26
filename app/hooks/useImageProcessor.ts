import { useEffect, useRef } from 'react';
import { useEditor } from '../components/editor/EditorContext';

export function useImageProcessor() {
  const {
    imageFile, imageUrl, width, height, format, quality,
    backgroundColor, rotation, crop, textOverlays,
    setLivePreview, setIsProcessing,
  } = useEditor();

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL('../workers/imageProcessor.worker.ts', import.meta.url));
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!imageFile || !imageUrl) {
      setLivePreview({ url: null, sizeKb: 0, width: 0, height: 0 });
      isFirstLoad.current = true;
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    // No debounce on first load — process immediately
    const delay = isFirstLoad.current ? 0 : 16;
    isFirstLoad.current = false;

    debounceTimer.current = setTimeout(() => {
      processImage();
    }, delay);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl, width, height, format, quality, backgroundColor, rotation, crop, textOverlays]);

  const processImage = () => {
    if (!imageUrl || !workerRef.current) return;
    setIsProcessing(true);

    workerRef.current.onmessage = (e) => {
      const data = e.data;
      if (data.success) {
        const { blob, width: outWidth, height: outHeight } = data;
        const url = URL.createObjectURL(blob);
        const sizeKb = parseFloat((blob.size / 1024).toFixed(1));
        setLivePreview({ url, sizeKb, width: outWidth, height: outHeight });
      } else {
        console.error('Image processing worker error:', data.error);
      }
      setIsProcessing(false);
    };

    workerRef.current.postMessage({
      imageUrl, width, height, format, quality,
      backgroundColor, rotation, crop, textOverlays
    });
  };
}
import { useEffect, useRef, startTransition, useCallback } from 'react';
import { useEditor } from '../components/editor/EditorContext';

export function useImageProcessor() {
  const {
    imageFile, imageUrl, width, height, format, quality,
    backgroundColor, rotation, crop, textOverlays,
    setLivePreview, setIsProcessing,
  } = useEditor();

  const workerRef = useRef<Worker | null>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const isFirstLoad = useRef(true);
  const activeUrlRef = useRef<string | null>(null);
  const requestIdRef = useRef(0);

  // Clean up previous blob URLs
  const revokeActiveUrl = useCallback(() => {
    if (activeUrlRef.current) {
      URL.revokeObjectURL(activeUrlRef.current);
      activeUrlRef.current = null;
    }
  }, []);

  // Initialize web worker once
  useEffect(() => {
    const worker = new Worker(new URL('../workers/imageProcessor.worker.ts', import.meta.url));
    workerRef.current = worker;

    worker.onmessage = (e: MessageEvent) => {
      const data = e.data;
      // Discard responses from older/stale requests
      if (data.id !== requestIdRef.current) return;

      if (data.success) {
        const { blob, width: outWidth, height: outHeight } = data;
        const url = URL.createObjectURL(blob);
        
        revokeActiveUrl();
        activeUrlRef.current = url;

        const sizeKb = parseFloat((blob.size / 1024).toFixed(1));
        startTransition(() => {
          setLivePreview({ url, sizeKb, width: outWidth, height: outHeight });
          setIsProcessing(false);
        });
      } else {
        console.error('Image processing worker error:', data.error);
        startTransition(() => {
          setIsProcessing(false);
        });
      }
    };

    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, [revokeActiveUrl, setIsProcessing, setLivePreview]);

  // Clean up object URL on unmount
  useEffect(() => {
    return () => {
      revokeActiveUrl();
    };
  }, [revokeActiveUrl]);

  const processImage = useCallback(() => {
    if (!imageUrl || !workerRef.current) return;

    requestIdRef.current += 1;
    const currentId = requestIdRef.current;

    startTransition(() => {
      setIsProcessing(true);
    });

    workerRef.current.postMessage({
      id: currentId,
      imageUrl, width, height, format, quality,
      backgroundColor, rotation, crop, textOverlays
    });
  }, [imageUrl, width, height, format, quality, backgroundColor, rotation, crop, textOverlays, setIsProcessing]);

  useEffect(() => {
    if (!imageFile || !imageUrl) {
      revokeActiveUrl();
      setLivePreview({ url: null, sizeKb: 0, width: 0, height: 0 });
      isFirstLoad.current = true;
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    // No debounce on first load — process immediately; debounce subsequent changes by 200ms
    const delay = isFirstLoad.current ? 0 : 200;
    isFirstLoad.current = false;

    debounceTimer.current = setTimeout(() => {
      processImage();
    }, delay);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [imageFile, imageUrl, processImage, revokeActiveUrl, setLivePreview]);
}
import { useEffect, useRef, startTransition, useCallback } from 'react';
import { useEditor, getStripLines } from '../components/editor/EditorContext';
import { isLowEndDevice } from '../utils/device';
import { isChunkLoadError, reloadForStaleDeploy } from '../utils/staleDeploy';

const DEBOUNCE_MS = 200;
const DEBOUNCE_MS_LOW_END = 450;

export function useImageProcessor() {
  const {
    imageFile, imageUrl, width, height, originalWidth, originalHeight,
    format, quality, targetSizeKb, backgroundColor, rotation, crop, textOverlays,
    strip, setLivePreview, setIsProcessing,
  } = useEditor();

  const workerRef = useRef<Worker | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  // Initialize web worker once. All dependencies are referentially stable,
  // so the worker (and its decoded-bitmap cache) lives for the editor's lifetime.
  useEffect(() => {
    const worker = new Worker(new URL('../workers/imageProcessor.worker.ts', import.meta.url));
    workerRef.current = worker;

    worker.onmessage = (e: MessageEvent) => {
      const data = e.data;
      // Discard responses from older/stale requests
      if (data.id !== requestIdRef.current) return;

      if (data.success) {
        const { blob, width: outWidth, height: outHeight, usedQuality, targetMet } = data;
        const url = URL.createObjectURL(blob);

        revokeActiveUrl();
        activeUrlRef.current = url;

        const sizeKb = parseFloat((blob.size / 1024).toFixed(1));
        startTransition(() => {
          setLivePreview({
            url, sizeKb, width: outWidth, height: outHeight,
            usedQuality, targetMet, sizeBytes: blob.size,
          });
          setIsProcessing(false);
        });
      } else {
        console.error('Image processing worker error:', data.error);
        startTransition(() => {
          setIsProcessing(false);
        });
      }
    };

    // Fires when the worker script itself fails to load (usually its chunk is gone after a
    // redeploy, or the network dropped). Without this the editor spins forever and the
    // error surfaces as an uncaught NetworkError.
    worker.onerror = (e: ErrorEvent) => {
      e.preventDefault();
      console.error('Image processing worker failed:', e.message);
      startTransition(() => {
        setIsProcessing(false);
      });
      // A missing bootstrap script yields an event with no message.
      if (!e.message || isChunkLoadError(e.message)) reloadForStaleDeploy();
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

    setIsProcessing(true);

    const stripPayload = strip?.enabled
      ? { lines: getStripLines(strip), heightPct: strip.heightPct || 16 }
      : null;

    workerRef.current.postMessage({
      id: currentId,
      imageUrl, width, height, originalWidth, originalHeight, format, quality, targetSizeKb,
      backgroundColor, rotation, crop, textOverlays, strip: stripPayload,
    });
  }, [imageUrl, width, height, originalWidth, originalHeight, format, quality, targetSizeKb, backgroundColor, rotation, crop, textOverlays, strip, setIsProcessing]);

  useEffect(() => {
    if (!imageFile || !imageUrl) {
      revokeActiveUrl();
      setLivePreview({ url: null, sizeKb: 0, width: 0, height: 0 });
      isFirstLoad.current = true;
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    // No debounce on first load — process immediately; debounce subsequent changes
    // (longer on low-end devices so slider drags don't queue up heavy re-encodes).
    const delay = isFirstLoad.current ? 0 : isLowEndDevice() ? DEBOUNCE_MS_LOW_END : DEBOUNCE_MS;
    isFirstLoad.current = false;

    debounceTimer.current = setTimeout(() => {
      processImage();
    }, delay);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [imageFile, imageUrl, processImage, revokeActiveUrl, setLivePreview]);
}
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { removeBackground, Config } from '@imgly/background-removal';
import { BgJob } from '../types';

/**
 * Model options (from @imgly/background-removal docs):
 *   'isnet_quint8' — ~40 MB, 8-bit quantized, fastest, slight edge artifacts on hair/fur
 *   'isnet_fp16'   — ~80 MB, half-precision, DEFAULT, best quality/speed balance
 *   'isnet'        — full precision, largest, rarely needed
 *
 * We use 'isnet_fp16' (the library default) for best quality.
 * Users who want speed-over-quality can be offered 'isnet_quint8'.
 */
const BG_REMOVAL_MODEL: Config['model'] = 'isnet_fp16';

/**
 * We serialize processing (CONCURRENCY = 1) because the ONNX runtime
 * loads one WASM/GPU context and running two removeBackground() calls
 * concurrently on the same context causes them to block each other anyway,
 * producing no real speed gain while doubling memory pressure and often
 * crashing on low-RAM mobile devices. True parallelism would require
 * spawning separate Web Workers, which is outside this hook's scope.
 */
const CONCURRENCY = 1;

// Tracks jobs that have been claimed by a worker to prevent double-processing
// across async gaps (Set is mutation-safe for a ref).
const claimedIds = new Set<string>();

export function useBgRemovalManager() {
  const [jobs, setJobs] = useState<BgJob[]>([]);
  const jobsRef = useRef<BgJob[]>([]);

  const [isProcessingQueue, setIsProcessingQueue] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [exportFormat, setExportFormat] = useState<'image/png' | 'image/webp'>('image/png');

  const processingRef = useRef(false);
  const cancelRef = useRef(false);

  // Keep ref in sync so async callbacks always read the latest jobs
  useEffect(() => {
    jobsRef.current = jobs;
  }, [jobs]);

  // ─── Helpers ────────────────────────────────────────────────────────────────

  const patchJob = (id: string, patch: Partial<BgJob>) =>
    setJobs(prev => prev.map(j => (j.id === id ? { ...j, ...patch } : j)));

  // ─── Public API ─────────────────────────────────────────────────────────────

  const addJobs = useCallback((files: File[]) => {
    const newJobs: BgJob[] = files.map(file => ({
      id: `job-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      file,
      fileName: file.name,
      originalUrl: URL.createObjectURL(file),
      resultUrl: null,
      status: 'queued' as const,
      progress: 0,
    }));

    cancelRef.current = false; // Allow queue to resume after a cancel

    setJobs(prev => {
      const updated = [...prev, ...newJobs];
      // Auto-select first image only if nothing is selected yet
      if (!prev.length && updated.length > 0) {
        setSelectedJobId(updated[0].id);
      }
      return updated;
    });
  }, []); // no deps — intentionally stable

  const removeJob = useCallback((id: string) => {
    claimedIds.delete(id);
    setJobs(prev => {
      const job = prev.find(j => j.id === id);
      if (job) {
        URL.revokeObjectURL(job.originalUrl);
        if (job.resultUrl) URL.revokeObjectURL(job.resultUrl);
      }
      return prev.filter(j => j.id !== id);
    });
    setSelectedJobId(prev => (prev === id ? null : prev));
  }, []);

  const clearAll = useCallback(() => {
    cancelRef.current = true;
    processingRef.current = false;
    claimedIds.clear();
    setJobs(prev => {
      prev.forEach(job => {
        URL.revokeObjectURL(job.originalUrl);
        if (job.resultUrl) URL.revokeObjectURL(job.resultUrl);
      });
      return [];
    });
    setSelectedJobId(null);
    setIsProcessingQueue(false);
  }, []);

  const cancelQueue = useCallback(() => {
    cancelRef.current = true;
    claimedIds.clear();
    setJobs(prev =>
      prev.map(j =>
        j.status === 'processing' || j.status === 'queued'
          ? { ...j, status: 'error', progress: 0, errorMessage: 'Cancelled' }
          : j
      )
    );
    setIsProcessingQueue(false);
    processingRef.current = false;
  }, []);

  // ─── Core Processing ────────────────────────────────────────────────────────

  const processJob = useCallback(async (jobId: string, originalUrl: string): Promise<void> => {
    if (cancelRef.current) return;

    patchJob(jobId, { status: 'processing', progress: 5 });

    // Smooth fake-progress animation while ONNX inference runs
    let fakeProgress = 5;
    const progressTimer = setInterval(() => {
      // Slow down as we approach 90 to avoid "stuck at 90%" feeling
      const step = fakeProgress < 60 ? 4 + Math.random() * 5 : 1 + Math.random() * 2;
      fakeProgress = Math.min(fakeProgress + step, 90);
      setJobs(prev =>
        prev.map(j =>
          j.id === jobId && j.status === 'processing'
            ? { ...j, progress: fakeProgress }
            : j
        )
      );
    }, 300);

    try {
      /**
       * Config reference (from @imgly/background-removal):
       *
       *   model:  'isnet' | 'isnet_fp16' | 'isnet_quint8'
       *           Default = 'isnet_fp16'. Do NOT pass 'small' or 'medium' —
       *           those are alias strings from the node package only and will
       *           silently fall back or error in the browser package.
       *
       *   device: 'cpu' | 'gpu'
       *           'gpu' uses WebGPU when available (much faster on supported
       *           browsers); falls back to CPU automatically.
       *
       *   output.format: must be 'image/png' for transparency support.
       *                  We always export PNG here; the final format conversion
       *                  (webp etc.) is handled in bgRemovalUtils at download time.
       *
       *   output.quality: 0–1, applies to lossy formats only (jpeg/webp).
       *                   For PNG (lossless) this has no effect.
       *
       *   output.type: 'foreground' keeps the subject, removes bg.
       *
       *   proxyToWorker: true  — runs inference in a Web Worker so the main
       *                          thread (and UI) stays responsive.
       */
      const config: Config = {
        publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/',
        model: BG_REMOVAL_MODEL,
        output: {
          format: 'image/png', // always PNG internally; conversion at download time
          quality: 1.0,
        },
        proxyToWorker: true,
      };

      const blob = await removeBackground(originalUrl, config);

      clearInterval(progressTimer);

      if (cancelRef.current) {
        URL.revokeObjectURL(URL.createObjectURL(blob)); // cleanup unused blob
        return;
      }

      const resultUrl = URL.createObjectURL(blob);

      setJobs(prev =>
        prev.map(j =>
          j.id === jobId ? { ...j, status: 'done', resultUrl, progress: 100 } : j
        )
      );

      // Auto-advance preview to the just-completed image if the currently
      // selected image is still queued/processing (i.e. not yet interesting)
      setSelectedJobId(prev => {
        const sel = jobsRef.current.find(j => j.id === prev);
        if (!sel || sel.status === 'queued' || sel.status === 'processing') {
          return jobId;
        }
        return prev;
      });
    } catch (err) {
      clearInterval(progressTimer);
      const message = err instanceof Error ? err.message : 'Unknown error';
      console.error(`[BgRemoval] Failed job ${jobId}:`, err);
      setJobs(prev =>
        prev.map(j =>
          j.id === jobId
            ? { ...j, status: 'error', progress: 0, errorMessage: message }
            : j
        )
      );
    } finally {
      claimedIds.delete(jobId);
    }
  }, []);

  const processQueue = useCallback(async () => {
    if (processingRef.current) return;
    processingRef.current = true;
    setIsProcessingQueue(true);

    /**
     * Single worker loop. We intentionally keep CONCURRENCY = 1 because:
     * 1. The ONNX/WASM runtime is single-context — two concurrent calls
     *    serialize internally anyway, wasting memory.
     * 2. On mobile, running two large WASM heap allocations simultaneously
     *    frequently triggers OOM crashes.
     *
     * To add real concurrency in the future, spawn N Web Workers each with
     * their own removeBackground import (separate WASM context).
     */
    const runWorker = async () => {
      while (!cancelRef.current) {
        // Atomically claim the next unclaimed queued job
        const nextJob = jobsRef.current.find(
          j => j.status === 'queued' && !claimedIds.has(j.id)
        );
        if (!nextJob) break;

        // Claim before any await to prevent double-pickup
        claimedIds.add(nextJob.id);

        await processJob(nextJob.id, nextJob.originalUrl);
      }
    };

    const workers = Array.from({ length: CONCURRENCY }, runWorker);
    await Promise.all(workers);

    processingRef.current = false;
    setIsProcessingQueue(false);
  }, [processJob]);

  // ─── Auto-trigger ───────────────────────────────────────────────────────────

  useEffect(() => {
    const hasUnclaimed = jobs.some(
      j => j.status === 'queued' && !claimedIds.has(j.id)
    );
    if (hasUnclaimed && !processingRef.current && !cancelRef.current) {
      processQueue();
    }
  // Re-check whenever the job list changes (add, status flip, cancel)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs]);

  // ─── Return ─────────────────────────────────────────────────────────────────

  return {
    jobs,
    isProcessingQueue,
    selectedJobId,
    setSelectedJobId,
    backgroundColor,
    setBackgroundColor,
    exportFormat,
    setExportFormat,
    addJobs,
    removeJob,
    clearAll,
    processQueue,
    cancelQueue,
  };
}
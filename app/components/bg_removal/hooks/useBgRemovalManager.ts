'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Config } from '@imgly/background-removal';
import { BgJob } from '../types';

/**
 * Model options (from @imgly/background-removal docs):
 *   'isnet_quint8' — ~40 MB, 8-bit quantized, fastest, slight edge artifacts on hair/fur
 *   'isnet_fp16'   — ~80 MB, half-precision, DEFAULT, best quality/speed balance
 *   'isnet'        — full precision, largest, rarely needed
 *
 * We use 'isnet_fp16' (the library default) for best quality.
 */
const BG_REMOVAL_MODEL: Config['model'] = 'isnet_fp16';

const CONCURRENCY = 1;

export function useBgRemovalManager() {
  const [jobs, setJobs] = useState<BgJob[]>([]);
  const jobsRef = useRef<BgJob[]>([]);

  const [isProcessingQueue, setIsProcessingQueue] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [exportFormat, setExportFormat] = useState<'image/png' | 'image/webp'>('image/png');

  const processingRef = useRef(false);
  const cancelRef = useRef(false);
  const claimedIdsRef = useRef<Set<string>>(new Set());

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
  }, []);

  const removeJob = useCallback((id: string) => {
    claimedIdsRef.current.delete(id);
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
    claimedIdsRef.current.clear();
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
    claimedIdsRef.current.clear();
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

    let fakeProgress = 5;
    const progressTimer = setInterval(() => {
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
      const config: Config = {
        publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/',
        model: BG_REMOVAL_MODEL,
        output: {
          format: 'image/png',
          quality: 1.0,
        },
        proxyToWorker: true,
      };

      const { removeBackground } = await import('@imgly/background-removal');
      const blob = await removeBackground(originalUrl, config);

      clearInterval(progressTimer);

      if (cancelRef.current) {
        return;
      }

      const resultUrl = URL.createObjectURL(blob);

      setJobs(prev =>
        prev.map(j =>
          j.id === jobId ? { ...j, status: 'done', resultUrl, progress: 100 } : j
        )
      );

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
      claimedIdsRef.current.delete(jobId);
    }
  }, []);

  const processQueue = useCallback(async () => {
    if (processingRef.current) return;
    processingRef.current = true;
    setIsProcessingQueue(true);

    const runWorker = async () => {
      while (!cancelRef.current) {
        const nextJob = jobsRef.current.find(
          j => j.status === 'queued' && !claimedIdsRef.current.has(j.id)
        );
        if (!nextJob) break;

        claimedIdsRef.current.add(nextJob.id);
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
      j => j.status === 'queued' && !claimedIdsRef.current.has(j.id)
    );
    if (hasUnclaimed && !processingRef.current && !cancelRef.current) {
      processQueue();
    }
  }, [jobs, processQueue]);

  // ─── Unmount Cleanup ────────────────────────────────────────────────────────

  useEffect(() => {
    return () => {
      jobsRef.current.forEach(job => {
        if (job.originalUrl) URL.revokeObjectURL(job.originalUrl);
        if (job.resultUrl) URL.revokeObjectURL(job.resultUrl);
      });
    };
  }, []);

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
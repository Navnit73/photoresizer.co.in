'use client';

import React, { useState } from 'react';
import { useBgRemoval } from './BgRemovalContext';
import { DownloadCloud, Trash2, Loader2, Sparkles, XCircle, CheckCircle } from 'lucide-react';
import { createZipArchive } from './utils/bgRemovalUtils';

export default function BgRemoverHeader() {
  const { jobs, clearAll, isProcessingQueue, cancelQueue, backgroundColor, exportFormat } = useBgRemoval();
  const [isZipping, setIsZipping] = useState(false);

  const completedJobs = jobs.filter(j => j.status === 'done' && j.resultUrl);
  const processingJobs = jobs.filter(j => j.status === 'processing');
  const totalJobs = jobs.length;
  const completedCount = completedJobs.length;
  const globalProgress = totalJobs > 0 ? (completedCount / totalJobs) * 100 : 0;

  const handleDownloadAll = async () => {
    if (!completedJobs.length) return;
    setIsZipping(true);
    try {
      await createZipArchive(completedJobs, backgroundColor, exportFormat);
    } catch {
      alert('Failed to generate ZIP.');
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="flex-shrink-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">

      {/* Main header bar */}
      <header className="flex items-center justify-between px-4 sm:px-5 h-13 py-3">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-lime-600 flex items-center justify-center">
            <Sparkles size={15} className="text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-sm font-black text-slate-800 dark:text-slate-100 leading-tight tracking-tight">BG Remover</h1>
            <p className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold leading-tight uppercase tracking-widest">Local · Private · Fast</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {totalJobs > 0 && !isProcessingQueue && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-red-500 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <Trash2 size={13} />
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}

          {isProcessingQueue && (
            <button
              onClick={cancelQueue}
              className="flex items-center gap-1.5 text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors px-3 py-1.5 rounded-lg"
            >
              <XCircle size={13} />
              <span className="hidden xs:inline">Cancel</span>
            </button>
          )}

          {totalJobs > 0 && (
            <button
              onClick={handleDownloadAll}
              disabled={completedJobs.length === 0 || isZipping}
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-lime-600 hover:bg-lime-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all px-3 sm:px-4 py-1.5 rounded-lg active:scale-95"
            >
              {isZipping ? <Loader2 size={13} className="animate-spin" /> : <DownloadCloud size={13} />}
              <span className="hidden sm:inline">
                {isZipping ? 'Zipping…' : `Download${completedCount > 1 ? ` (${completedCount})` : ''}`}
              </span>
            </button>
          )}
        </div>
      </header>

      {/* Progress Bar — only when jobs exist */}
      {totalJobs > 0 && (
        <div className="px-4 sm:px-5 pb-3 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {isProcessingQueue ? (
                <>
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    Processing {processingJobs.length > 0 ? `· ${processingJobs[0]?.progress ? Math.round(processingJobs[0].progress) + '%' : ''}` : ''}
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle size={11} className="text-emerald-500" strokeWidth={2.5} />
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">All done</span>
                </>
              )}
            </div>
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 tabular-nums">
              {completedCount}<span className="font-medium text-slate-300 dark:text-slate-600">/{totalJobs}</span>
            </span>
          </div>

          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-out ${isProcessingQueue ? 'bg-lime-500' : 'bg-emerald-500'}`}
              style={{ width: `${globalProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
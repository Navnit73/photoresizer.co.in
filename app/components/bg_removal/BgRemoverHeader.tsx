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
      alert('Failed to generate ZIP archive.');
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="flex-shrink-0 bg-[#FFFFFF] border-b border-[#E4E4E7]">
      {/* Main header bar */}
      <header className="flex items-center justify-between px-4 sm:px-5 h-14">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A]">
            <Sparkles size={16} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-[#18181B] leading-tight">AI Background Remover</h2>
            <p className="text-[10px] text-[#71717A] font-medium leading-tight">100% Client-Side • Private</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {totalJobs > 0 && !isProcessingQueue && (
            <button
              type="button"
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs font-medium text-[#71717A] hover:text-[#DC2626] transition-colors px-2.5 py-1.5 rounded-xl hover:bg-[#FAFAFA]"
            >
              <Trash2 size={13} />
              <span className="hidden sm:inline">Clear All</span>
            </button>
          )}

          {isProcessingQueue && (
            <button
              type="button"
              onClick={cancelQueue}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#DC2626] bg-red-50 hover:bg-red-100 transition-colors px-3 py-1.5 rounded-xl"
            >
              <XCircle size={13} />
              <span className="hidden xs:inline">Cancel</span>
            </button>
          )}

          {totalJobs > 0 && (
            <button
              type="button"
              onClick={handleDownloadAll}
              disabled={completedJobs.length === 0 || isZipping}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#FFFFFF] bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-40 disabled:cursor-not-allowed transition-colors px-3.5 sm:px-4 py-2 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.98]"
            >
              {isZipping ? <Loader2 size={13} className="animate-spin" /> : <DownloadCloud size={13} />}
              <span className="hidden sm:inline">
                {isZipping ? 'Creating ZIP...' : `Download All (${completedCount})`}
              </span>
            </button>
          )}
        </div>
      </header>

      {/* Progress Bar */}
      {totalJobs > 0 && (
        <div className="px-4 sm:px-5 pb-2.5 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {isProcessingQueue ? (
                <>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <span className="text-[11px] font-medium text-[#52525B]">
                    Processing {processingJobs.length > 0 && processingJobs[0]?.progress ? `(${Math.round(processingJobs[0].progress)}%)` : ''}
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle size={12} className="text-[#16A34A]" />
                  <span className="text-[11px] font-medium text-[#15803D]">Complete</span>
                </>
              )}
            </div>
            <span className="text-[11px] font-medium text-[#71717A] tabular-nums">
              {completedCount}/{totalJobs}
            </span>
          </div>

          <div className="w-full h-1.5 bg-[#F4F4F5] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out bg-[#16A34A]"
              style={{ width: `${globalProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
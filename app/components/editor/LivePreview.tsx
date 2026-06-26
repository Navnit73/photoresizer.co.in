'use client';

import React, { useState } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useEditor } from './EditorContext';
import { useImageProcessor } from '../../hooks/useImageProcessor';
import { Download, Eye, Check, X } from 'lucide-react';

export default function LivePreview() {
  const { t } = useTranslation();
  const { livePreview, isProcessing, format, quality, imageFile, fileName, setFileName, setFormat, setQuality } = useEditor();
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [localName, setLocalName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  useImageProcessor();

  const ext = format === 'image/jpeg' ? 'jpg' : format === 'image/png' ? 'png' : 'webp';

  const openDownloadModal = () => {
    setLocalName(fileName);
    setShowDownloadModal(true);
  };

  const handleDownload = () => {
    if (!livePreview.url) return;
    const name = (localName.trim() || 'edited-image');
    setFileName(name);
    const a = document.createElement('a');
    a.href = livePreview.url;
    a.download = `${name}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setShowDownloadModal(false);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <aside className="w-full flex-1 flex flex-col bg-bg-card/80 backdrop-blur-md shadow-sm border border-border-subtle rounded-xl overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border-subtle bg-bg-input flex-shrink-0">
        <Eye size={13} className="text-accent-main flex-shrink-0" />
        <div role="heading" aria-level={2} className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          {t.livePreview}
        </div>
        {isProcessing && (
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-3 h-3 border-2 border-accent-main border-t-transparent rounded-full animate-spin flex-shrink-0" />
            <span className="text-[10px] text-text-muted hidden sm:inline">Processing…</span>
          </div>
        )}
      </div>

      {/* Preview image — flex-1 so it fills remaining space */}
      <div className="flex-1 flex items-center justify-center p-3 min-h-0 bg-[conic-gradient(#e4e4e7_25%,transparent_25%,transparent_75%,#e4e4e7_75%,#e4e4e7),conic-gradient(#e4e4e7_25%,#f4f4f5_25%,#f4f4f5_75%,#e4e4e7_75%,#e4e4e7)] dark:bg-[conic-gradient(#27272a_25%,transparent_25%,transparent_75%,#27272a_75%,#27272a),conic-gradient(#27272a_25%,#3f3f46_25%,#3f3f46_75%,#27272a_75%,#27272a)] bg-[length:14px_14px] bg-[position:0_0,7px_7px] relative overflow-hidden">
        {!imageFile ? (
          <div className="text-center">
            <Eye size={24} className="mx-auto text-text-muted opacity-40 mb-2" />
            <span className="text-xs text-text-muted">{t.noImageLoaded}</span>
          </div>
        ) : isProcessing && !livePreview.url ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-7 h-7 border-2 border-accent-main border-t-transparent rounded-full animate-spin" />
            <span className="text-[10px] text-text-muted">Rendering…</span>
          </div>
        ) : livePreview.url ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={livePreview.url}
              alt={t.livePreview}
              className="max-w-full max-h-full object-contain"
            />
            {/* Subtle processing overlay — keeps showing last frame while updating */}
            {isProcessing && (
              <div className="absolute inset-0 flex items-center justify-center bg-bg-card/40 backdrop-blur-[1px]">
                <div className="w-5 h-5 border-2 border-accent-main border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        ) : null}
      </div>

      {/* Stats + Download — always at bottom, never scrolls away */}
      {imageFile && livePreview.width > 0 && (
        <div className="flex-shrink-0 p-3 space-y-2.5 border-t border-border-subtle bg-bg-card">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="bg-bg-input rounded-lg p-2 text-center">
              <div className="text-[9px] text-text-muted mb-0.5 font-medium">W</div>
              <div className="text-[11px] font-bold text-text-main leading-tight">{livePreview.width}px</div>
            </div>
            <div className="bg-bg-input rounded-lg p-2 text-center">
              <div className="text-[9px] text-text-muted mb-0.5 font-medium">H</div>
              <div className="text-[11px] font-bold text-text-main leading-tight">{livePreview.height}px</div>
            </div>
            <div className="bg-accent-muted rounded-lg p-2 text-center">
              <div className="text-[9px] text-accent-main/70 mb-0.5 font-medium">Size</div>
              <div className="text-[11px] font-bold text-accent-main leading-tight">{livePreview.sizeKb}KB</div>
            </div>
          </div>

          {/* Format badge */}
          <div className="flex items-center justify-between text-[11px] border border-border-subtle rounded-lg px-2.5 py-1.5">
            <span className="text-text-muted">Format</span>
            <span className="font-bold text-text-main uppercase bg-bg-input px-2 py-0.5 rounded text-[10px]">
              {format.split('/')[1]}
            </span>
          </div>

          {/* Download button */}
          <button
            onClick={openDownloadModal}
            disabled={!livePreview.url || isProcessing}
            className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
              downloaded
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                : 'bg-accent-main hover:bg-accent-hover text-white shadow-md shadow-accent-main/20 hover:shadow-lg hover:shadow-accent-main/30 active:scale-[0.98]'
            }`}
          >
            {downloaded ? (
              <><Check size={15} /> Saved!</>
            ) : (
              <><Download size={15} /> Download</>
            )}
          </button>
        </div>
      )}

      {/* Download modal */}
      {showDownloadModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4"
          onClick={() => setShowDownloadModal(false)}
        >
          <div
            className="w-full max-w-sm bg-bg-card rounded-2xl shadow-2xl border border-border-subtle p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-text-main">Save Image</h3>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="p-1 rounded-lg hover:bg-bg-input text-text-muted hover:text-text-main transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-text-muted mb-1.5 block">File name</label>
                <div className="flex items-center border border-border-subtle rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-accent-main">
                  <input
                    type="text"
                    aria-label="File name"
                    value={localName}
                    onChange={(e) => setLocalName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleDownload()}
                    placeholder="edited-image"
                    autoFocus
                    className="flex-1 bg-transparent px-3 py-2.5 text-sm focus:outline-none text-text-main"
                  />
                  <span className="px-3 py-2.5 text-xs text-text-muted bg-bg-input border-l border-border-subtle font-mono">.{ext}</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-text-muted mb-1.5 block">Format</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: 'JPG', value: 'image/jpeg' as const },
                    { label: 'PNG', value: 'image/png' as const },
                    { label: 'WEBP', value: 'image/webp' as const },
                  ].map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFormat(f.value)}
                      className={`py-2 text-xs font-bold rounded-lg border-2 transition-colors ${
                        format === f.value
                          ? 'border-accent-main bg-accent-muted text-accent-main'
                          : 'border-border-subtle text-text-muted hover:border-accent-main/50'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {format !== 'image/png' && (
                <div>
                  <div className="flex justify-between mb-1.5">
                    <label className="text-xs font-semibold text-text-muted">Quality</label>
                    <span className="text-xs font-bold text-accent-main">{quality}%</span>
                  </div>
                  <input
                    type="range" min="1" max="100" value={quality}
                    aria-label="Image quality"
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="w-full accent-accent-main"
                  />
                </div>
              )}

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => setShowDownloadModal(false)}
                  className="flex-1 py-2.5 text-sm font-semibold bg-bg-input text-text-main rounded-xl transition-colors border border-border-subtle"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 py-2.5 text-sm font-semibold bg-accent-main hover:bg-accent-hover text-white rounded-xl transition-all shadow-md shadow-accent-main/20 flex items-center justify-center gap-1.5 active:scale-[0.98]"
                >
                  <Download size={14} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
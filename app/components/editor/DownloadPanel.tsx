"use client";

import React, { useEffect, useRef, useState } from "react";
import { useEditor } from "./EditorContext";
import { useImageProcessor } from "../../hooks/useImageProcessor";
import { triggerHaptic } from "../../utils/haptics";
import {
  Download,
  CircleCheck,
  TriangleAlert,
  LoaderCircle,
  Gauge,
} from "lucide-react";

export function formatBytes(bytes: number): string {
  if (!bytes || bytes < 0) return "0 KB";
  if (bytes < 1024 * 1024) {
    const kb = bytes / 1024;
    return `${kb < 10 ? kb.toFixed(1) : Math.round(kb)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

const PRESETS = [
  { id: "high", label: "High quality", hint: "Looks identical", quality: 90 },
  { id: "balanced", label: "Balanced", hint: "Great for web", quality: 75 },
  { id: "small", label: "Smallest", hint: "Max compression", quality: 50 },
] as const;

const TARGET_CHIPS = [20, 50, 100, 200, 500];
const MIN_TARGET_KB = 5;
const MAX_TARGET_KB = 20000;

interface DownloadSummary {
  name: string;
  from: number;
  to: number;
}

export default function DownloadPanel() {
  const {
    imageFile,
    livePreview,
    isProcessing,
    format,
    fileName,
    setFileName,
    quality,
    setQuality,
    targetSizeKb,
    setTargetSizeKb,
    setFormat,
    width,
    height,
    setWidth,
    setHeight,
    originalFileSize,
  } = useEditor();

  useImageProcessor();

  const [downloaded, setDownloaded] = useState<DownloadSummary | null>(null);
  const [targetText, setTargetText] = useState<string | null>(null);
  const bannerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (bannerTimer.current) clearTimeout(bannerTimer.current);
    };
  }, []);

  if (!imageFile) return null;

  const isPng = format === "image/png";
  const ext = format === "image/jpeg" ? "jpg" : format === "image/png" ? "png" : "webp";
  const outBytes = livePreview.sizeBytes ?? Math.round(livePreview.sizeKb * 1024);
  const hasResult = !!livePreview.url && outBytes > 0;

  const savedPct =
    originalFileSize > 0 && hasResult ? Math.round((1 - outBytes / originalFileSize) * 100) : null;
  const barPct =
    originalFileSize > 0 && hasResult ? Math.max(3, Math.min(100, (outBytes / originalFileSize) * 100)) : 100;

  const activePreset = targetSizeKb !== null ? "target" : PRESETS.find((p) => p.quality === quality)?.id ?? "custom";
  const targetMissed = targetSizeKb !== null && !isProcessing && livePreview.targetMet === false;

  const handleDownload = () => {
    if (!livePreview.url) return;
    triggerHaptic('success');
    const name = fileName.trim() || "photoresizer";
    setFileName(name);
    const a = document.createElement("a");
    a.href = livePreview.url;
    a.download = `${name}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setDownloaded({ name: `${name}.${ext}`, from: originalFileSize, to: outBytes });
    if (bannerTimer.current) clearTimeout(bannerTimer.current);
    bannerTimer.current = setTimeout(() => setDownloaded(null), 9000);
  };

  const commitTarget = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    setTargetText(digits);
    const n = parseInt(digits, 10);
    if (n >= MIN_TARGET_KB) setTargetSizeKb(Math.min(MAX_TARGET_KB, n));
  };

  const shrinkDimensions = () => {
    setWidth(Math.max(1, Math.round(width * 0.8)));
    setHeight(Math.max(1, Math.round(height * 0.8)));
  };

  const downloadDisabled = !livePreview.url || isProcessing;

  return (
    <>
      <div className="flex flex-col gap-4 p-4 bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        {/* Compression controls */}
        <section aria-labelledby="compress-heading">
          <div className="flex items-center gap-2 mb-2.5">
            <Gauge size={15} className="text-[#16A34A]" aria-hidden="true" />
            <h3 id="compress-heading" className="text-sm font-semibold text-[#18181B]">
              Compress before download
            </h3>
          </div>

          <div role="radiogroup" aria-label="Compression level" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PRESETS.map((p) => {
              const active = activePreset === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  disabled={isPng}
                  onClick={() => {
                    triggerHaptic('light');
                    setQuality(p.quality);
                  }}
                  className={`min-h-[52px] px-3 py-2 text-left rounded-xl border transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                    active
                      ? "border-[#16A34A] bg-[#F0FDF4]"
                      : "border-[#E4E4E7] bg-[#FFFFFF] hover:border-[#BBF7D0] hover:bg-[#FAFAFA]"
                  }`}
                >
                  <span className={`block text-xs font-semibold ${active ? "text-[#15803D]" : "text-[#18181B]"}`}>
                    {p.label}
                  </span>
                  <span className="block text-[11px] text-[#71717A]">{p.hint}</span>
                </button>
              );
            })}
            <button
              type="button"
              role="radio"
              aria-checked={activePreset === "target"}
              disabled={isPng}
              onClick={() => {
                triggerHaptic('light');
                if (targetSizeKb === null) {
                  setTargetText(null);
                  setTargetSizeKb(100);
                }
              }}
              className={`min-h-[52px] px-3 py-2 text-left rounded-xl border transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                activePreset === "target"
                  ? "border-[#16A34A] bg-[#F0FDF4]"
                  : "border-[#E4E4E7] bg-[#FFFFFF] hover:border-[#BBF7D0] hover:bg-[#FAFAFA]"
              }`}
            >
              <span
                className={`block text-xs font-semibold ${
                  activePreset === "target" ? "text-[#15803D]" : "text-[#18181B]"
                }`}
              >
                Target size
              </span>
              <span className="block text-[11px] text-[#71717A]">Fit a KB limit</span>
            </button>
          </div>

          {isPng && (
            <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-[#52525B] bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl px-3 py-2">
              <span>PNG is lossless, so it can&apos;t be compressed by quality.</span>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setFormat("image/jpeg");
                }}
                className="font-semibold text-[#15803D] hover:underline"
              >
                Switch to JPG
              </button>
              <span aria-hidden="true">or</span>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setFormat("image/webp");
                }}
                className="font-semibold text-[#15803D] hover:underline"
              >
                WEBP
              </button>
            </div>
          )}

          {targetSizeKb !== null && !isPng && (
            <div className="mt-3 p-3 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4]">
              <div className="flex flex-wrap items-center gap-2">
                <label htmlFor="target-size-input" className="text-xs font-semibold text-[#15803D]">
                  Make it under
                </label>
                <div className="flex items-center bg-[#FFFFFF] border border-[#BBF7D0] rounded-lg px-2.5 h-10 focus-within:ring-2 focus-within:ring-[#DCFCE7]">
                  <input
                    id="target-size-input"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={targetText ?? String(targetSizeKb)}
                    onChange={(e) => commitTarget(e.target.value)}
                    onBlur={() => setTargetText(null)}
                    className="w-16 bg-transparent text-sm font-semibold text-[#18181B] focus:outline-none"
                    aria-label="Target file size in kilobytes"
                  />
                  <span className="text-xs font-semibold text-[#71717A]">KB</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {TARGET_CHIPS.map((kb) => (
                    <button
                      key={kb}
                      type="button"
                      onClick={() => {
                        triggerHaptic('light');
                        setTargetText(null);
                        setTargetSizeKb(kb);
                      }}
                      className={`h-9 min-w-[48px] px-2.5 text-xs font-semibold rounded-lg border transition-colors ${
                        targetSizeKb === kb
                          ? "bg-[#16A34A] border-[#16A34A] text-white"
                          : "bg-[#FFFFFF] border-[#BBF7D0] text-[#15803D] hover:bg-[#DCFCE7]"
                      }`}
                    >
                      {kb} KB
                    </button>
                  ))}
                </div>
              </div>
              {!targetMissed && livePreview.usedQuality !== undefined && hasResult && (
                <p className="mt-2 text-[11px] text-[#15803D]">
                  Auto-picked quality {livePreview.usedQuality}% to fit your limit.
                </p>
              )}
            </div>
          )}

          {targetMissed && (
            <div
              role="alert"
              className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-[#92400E] bg-[#FFFBEB] border border-[#FDE68A] rounded-xl px-3 py-2"
            >
              <TriangleAlert size={14} aria-hidden="true" />
              <span>
                Can&apos;t get under {targetSizeKb} KB at {livePreview.width}×{livePreview.height}px.
              </span>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('medium');
                  shrinkDimensions();
                }}
                className="font-semibold text-[#B45309] hover:underline"
              >
                Shrink size by 20%
              </button>
            </div>
          )}
        </section>

        <hr className="border-[#F4F4F5]" />

        {/* Result summary */}
        <section aria-label="Compression result" aria-live="polite">
          <div className="flex items-end justify-between gap-3 mb-2">
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-[#71717A] uppercase tracking-wide">Your download</p>
              <p className="flex items-baseline gap-2 flex-wrap">
                {originalFileSize > 0 && (
                  <>
                    <span className="text-sm text-[#71717A] line-through decoration-[#A1A1AA]">
                      {formatBytes(originalFileSize)}
                    </span>
                    <span aria-hidden="true" className="text-[#A1A1AA]">→</span>
                  </>
                )}
                <span className="text-xl font-bold text-[#18181B] tabular-nums">
                  {hasResult ? formatBytes(outBytes) : "…"}
                </span>
                {isProcessing && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#16A34A]">
                    <LoaderCircle size={13} className="animate-spin" aria-hidden="true" />
                    Compressing
                  </span>
                )}
              </p>
            </div>
            {savedPct !== null && !isProcessing && (
              <span
                className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold border ${
                  savedPct > 0
                    ? "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]"
                    : "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]"
                }`}
              >
                {savedPct > 0 ? `${savedPct}% smaller` : `${Math.abs(savedPct)}% larger`}
              </span>
            )}
          </div>

          {originalFileSize > 0 && (
            <div className="h-2 rounded-full bg-[#F4F4F5] overflow-hidden" aria-hidden="true">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  savedPct !== null && savedPct <= 0 ? "bg-[#F59E0B]" : "bg-[#16A34A]"
                } ${isProcessing ? "opacity-50" : ""}`}
                style={{ width: `${barPct}%` }}
              />
            </div>
          )}

          {savedPct !== null && savedPct <= 0 && !isProcessing && (
            <p className="mt-1.5 text-[11px] text-[#B45309]">
              This is bigger than your original. Pick Balanced or Smallest, or use JPG/WEBP.
            </p>
          )}

          <div className="flex items-center gap-2 flex-wrap mt-3">
            <span className="flex items-center h-7 px-2.5 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] text-[#52525B] text-xs font-medium">
              {livePreview.width || width} × {livePreview.height || height} px
            </span>
            <span className="flex items-center h-7 px-2.5 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] text-[#71717A] uppercase text-xs font-semibold">
              {ext}
            </span>
            {!isPng && (
              <span className="flex items-center h-7 px-2.5 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] text-[#52525B] text-xs font-medium">
                Quality {livePreview.usedQuality ?? quality}%
              </span>
            )}
          </div>
        </section>

        {downloaded && (
          <div
            role="status"
            className="flex items-start gap-2.5 px-3.5 py-3 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
          >
            <CircleCheck size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs leading-relaxed">
              <p className="font-semibold">Downloaded {downloaded.name}</p>
              {downloaded.from > 0 && downloaded.to < downloaded.from ? (
                <p>
                  You saved {formatBytes(downloaded.from - downloaded.to)} (
                  {Math.round((1 - downloaded.to / downloaded.from) * 100)}% smaller): {formatBytes(downloaded.from)} →{" "}
                  {formatBytes(downloaded.to)}.
                </p>
              ) : (
                <p>File size: {formatBytes(downloaded.to)}.</p>
              )}
            </div>
          </div>
        )}

        {/* Filename + desktop download button */}
        <div className="hidden lg:flex flex-col gap-3 pt-1">
          <div>
            <label htmlFor="filename-input" className="text-xs font-semibold text-[#18181B] mb-1.5 block">
              File Name
            </label>
            <div className="flex items-center w-full bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] px-3.5 h-12 focus-within:border-[#16A34A] focus-within:ring-2 focus-within:ring-[#DCFCE7] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <input
                id="filename-input"
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="photoresizer-output"
                aria-label="File name"
                className="flex-1 w-0 bg-transparent text-sm font-semibold text-[#18181B] focus:outline-none placeholder:text-[#A1A1AA] h-full"
              />
              <span className="flex-shrink-0 text-xs text-[#52525B] font-mono font-bold bg-[#F4F4F5] px-2.5 py-1 rounded-md border border-[#E4E4E7] ml-2">
                .{ext}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            disabled={downloadDisabled}
            className="w-full flex items-center justify-center gap-2 px-6 h-12 text-sm font-bold bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.99] text-[#FFFFFF] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          >
            <Download size={18} aria-hidden="true" />
            <span>Download{hasResult ? ` · ${formatBytes(outBytes)}` : ""}</span>
          </button>
        </div>
      </div>

      {/* Mobile sticky action bar: the primary action is always one thumb-tap away. */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-[#FFFFFF]/95 backdrop-blur border-t border-[#E4E4E7] px-3 pt-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center gap-3 max-w-[640px] mx-auto">
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-base font-bold text-[#18181B] tabular-nums truncate">
              {isProcessing ? "Compressing…" : hasResult ? formatBytes(outBytes) : "…"}
            </p>
            <p className="text-[11px] text-[#71717A] truncate">
              {savedPct !== null && savedPct > 0 && !isProcessing
                ? `${savedPct}% smaller than ${formatBytes(originalFileSize)}`
                : `${livePreview.width || width}×${livePreview.height || height} · ${ext.toUpperCase()}`}
            </p>
          </div>
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloadDisabled}
            className="flex items-center justify-center gap-2 px-6 h-12 text-sm font-semibold bg-[#16A34A] active:bg-[#15803D] text-[#FFFFFF] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-colors active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          >
            <Download size={18} aria-hidden="true" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </>
  );
}
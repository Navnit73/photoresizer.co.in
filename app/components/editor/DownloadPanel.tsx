"use client";

import React from "react";
import { useEditor } from "./EditorContext";
import { useImageProcessor } from "../../hooks/useImageProcessor";
import { Download } from "lucide-react";

export default function DownloadPanel() {
  const { imageFile, livePreview, isProcessing, format, fileName, setFileName } =
    useEditor();

  useImageProcessor();

  if (!imageFile) return null;

  const ext =
    format === "image/jpeg" ? "jpg" : format === "image/png" ? "png" : "webp";

  const handleDownload = () => {
    if (!livePreview.url) return;
    const name = fileName.trim() || "PhotoResizer";
    setFileName(name);
    const a = document.createElement("a");
    a.href = livePreview.url;
    a.download = `${name}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 px-3 py-2">

      {/* Meta chips */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
        <span className="flex items-center justify-center min-w-[72px] h-7 px-2.5 rounded-md border  bg-blue-100 text-blue-700  dark:bg-blue-900/40 dark:border-blue-800/60 dark:text-blue-300 text-[11px] sm:text-xs ">
        Width:  {livePreview.width}
        </span>
          <span className="flex items-center justify-center min-w-[72px] h-7 px-2.5 rounded-md border  bg-green-100 text-green-700  dark:bg-blue-900/40 dark:border-blue-800/60 dark:text-blue-300 text-[11px] sm:text-xs ">
        Height: {livePreview.height}
        </span>
        <span className="flex items-center justify-center min-w-[64px] h-7 px-2.5 rounded-md border  bg-red-200   dark:bg-emerald-900/40 dark:border-emerald-800/60 dark:text-emerald-300 text-[11px] sm:text-xs ">
          {livePreview.sizeKb} KB
        </span>
        <span className="flex items-center justify-center min-w-[48px] h-7 px-2.5 rounded-md border  bg-purple-100 text-purple-700  uppercase dark:bg-purple-900/40 dark:border-purple-800/60 dark:text-purple-300 text-[11px] sm:text-xs ">
          {ext}
        </span>
        {isProcessing && (
          <span className="animate-pulse text-accent-main text-xs font-medium ml-1">
            Processing…
          </span>
        )}
      </div>

      {/* Filename + Download — inline, compact */}
      <div className="flex items-center gap-0 rounded-lg border border-border-subtle overflow-hidden w-full sm:w-auto focus-within:ring-1 focus-within:ring-accent-main flex-shrink-0">
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="filename"
          className="flex-1 w-0 sm:w-44 bg-bg-input px-2.5 py-1.5 text-sm focus:outline-none text-text-main"
        />
        <span className="px-2 py-1.5 text-xs text-text-muted bg-bg-root border-l border-border-subtle font-mono whitespace-nowrap">
          .{ext}
        </span>
        <button
          onClick={handleDownload}
          disabled={!livePreview.url || isProcessing}
          className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-semibold bg-accent-main hover:bg-accent-hover text-white border-l border-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          <Download size={14} />
          <span>Download</span>
        </button>
      </div>

    </div>
  );
}
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
        <span className="flex items-center justify-center min-w-[72px] h-7 px-2.5 rounded-md border bg-neutral-100 dark:bg-neutral-800 border-transparent text-neutral-700 dark:text-neutral-300 text-[11px] sm:text-xs">
          Width: {livePreview.width}
        </span>
        <span className="flex items-center justify-center min-w-[72px] h-7 px-2.5 rounded-md border bg-neutral-100 dark:bg-neutral-800 border-transparent text-neutral-700 dark:text-neutral-300 text-[11px] sm:text-xs">
          Height: {livePreview.height}
        </span>
        <span className="flex items-center justify-center min-w-[64px] h-7 px-2.5 rounded-md border bg-neutral-100 dark:bg-neutral-800 border-transparent text-neutral-700 dark:text-neutral-300 text-[11px] sm:text-xs font-semibold">
          {livePreview.sizeKb} KB
        </span>
        <span className="flex items-center justify-center min-w-[48px] h-7 px-2.5 rounded-md border bg-neutral-100 dark:bg-neutral-800 border-transparent text-neutral-700 dark:text-neutral-300 uppercase text-[11px] sm:text-xs font-semibold">
          {ext}
        </span>
        {isProcessing && (
          <span className="animate-pulse text-neutral-500 text-xs font-medium ml-1">
            Processing…
          </span>
        )}
      </div>

      {/* Filename + Download — inline, compact */}
      <div className="flex items-center gap-0 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden w-full sm:w-auto focus-within:ring-1 focus-within:ring-neutral-400 flex-shrink-0 bg-white dark:bg-neutral-900">
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="filename"
          className="flex-1 w-0 sm:w-44 bg-transparent px-2.5 py-1.5 text-sm focus:outline-none text-neutral-900 dark:text-neutral-100"
        />
        <span className="px-2 py-1.5 text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-800 border-l border-neutral-200 dark:border-neutral-800 font-mono whitespace-nowrap">
          .{ext}
        </span>
        <button
          onClick={handleDownload}
          disabled={!livePreview.url || isProcessing}
          className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 border-l border-neutral-900 dark:border-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          <Download size={14} />
          <span>Download</span>
        </button>
      </div>

    </div>
  );
}
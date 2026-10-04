"use client";

import React from "react";
import { useEditor } from "./EditorContext";
import { useImageProcessor } from "../../hooks/useImageProcessor";
import { Download, Check } from "lucide-react";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function DownloadPanel() {
  const { imageFile, livePreview, isProcessing, format, fileName, setFileName } =
    useEditor();
  const { t } = useTranslation();

  useImageProcessor();

  if (!imageFile) return null;

  const ext =
    format === "image/jpeg" ? "jpg" : format === "image/png" ? "png" : "webp";

  const handleDownload = () => {
    if (!livePreview.url) return;
    const name = fileName.trim() || "photoresizer";
    setFileName(name);
    const a = document.createElement("a");
    a.href = livePreview.url;
    a.download = `${name}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)]">

      {/* Meta Chips */}
      <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
        <span className="flex items-center justify-center h-8 px-3 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] text-[#52525B] text-xs font-medium">
          Width: <strong className="ml-1 text-[#18181B]">{livePreview.width}px</strong>
        </span>
        <span className="flex items-center justify-center h-8 px-3 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] text-[#52525B] text-xs font-medium">
          Height: <strong className="ml-1 text-[#18181B]">{livePreview.height}px</strong>
        </span>
        <span className="flex items-center justify-center h-8 px-3 rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] text-xs font-bold">
          {livePreview.sizeKb} KB
        </span>
        <span className="flex items-center justify-center h-8 px-2.5 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] text-[#71717A] uppercase text-xs font-semibold">
          {ext}
        </span>
        {isProcessing && (
          <span className="animate-pulse text-[#16A34A] text-xs font-semibold ml-1">
            Processing...
          </span>
        )}
      </div>

      {/* Filename + Primary Download Button */}
      <div className="flex items-center gap-2.5 w-full sm:w-auto flex-shrink-0">
        
        {/* Filename Input */}
        <div className="flex items-center flex-1 sm:w-44 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] px-3 py-2 focus-within:border-[#16A34A] focus-within:ring-2 focus-within:ring-[#DCFCE7] transition-all">
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="File name"
            className="flex-1 w-0 bg-transparent text-xs font-medium text-[#18181B] focus:outline-none"
          />
          <span className="text-xs text-[#71717A] font-mono">
            .{ext}
          </span>
        </div>

        {/* Primary Download Button */}
        <button
          type="button"
          onClick={handleDownload}
          disabled={!livePreview.url || isProcessing}
          className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
        >
          <Download size={14} />
          <span>Download Image</span>
        </button>

      </div>

    </div>
  );
}
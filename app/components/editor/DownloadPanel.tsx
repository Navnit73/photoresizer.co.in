"use client";

import React from "react";
import { useEditor } from "./EditorContext";
import { useImageProcessor } from "../../hooks/useImageProcessor";
import { Download } from "lucide-react";
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
    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 px-4 py-3 bg-white dark:bg-slate-900 border border-[#dddddd] dark:border-slate-800 rounded-2xl shadow-sm font-['Airbnb_Cereal_VF',Circular,sans-serif]">

      {/* Meta chips (Airbnb pill style) */}
      <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
        <span className="flex items-center justify-center h-8 px-3 rounded-full border border-[#dddddd] dark:border-slate-700 bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-slate-200 text-xs font-semibold">
          {t.width}: {livePreview.width}px
        </span>
        <span className="flex items-center justify-center h-8 px-3 rounded-full border border-[#dddddd] dark:border-slate-700 bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-slate-200 text-xs font-semibold">
          {t.height}: {livePreview.height}px
        </span>
        <span className="flex items-center justify-center h-8 px-3.5 rounded-full border border-[#ff385c]/30 bg-[#ff385c]/10 text-[#ff385c] text-xs font-bold">
          {livePreview.sizeKb} KB
        </span>
        <span className="flex items-center justify-center h-8 px-3 rounded-full border border-[#dddddd] dark:border-slate-700 bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-slate-200 uppercase text-xs font-bold">
          {ext}
        </span>
        {isProcessing && (
          <span className="animate-pulse text-[#ff385c] text-xs font-bold ml-1">
            {t.processing}
          </span>
        )}
      </div>

      {/* Filename + Airbnb Rausch Download Button */}
      <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0">
        
        {/* Filename Input Pill */}
        <div className="flex items-center flex-1 sm:w-48 bg-[#f7f7f7] dark:bg-slate-800 rounded-full border border-[#dddddd] dark:border-slate-700 px-3 py-1.5 focus-within:border-[#222222] dark:focus-within:border-white transition-colors">
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder={t.fileNamePlaceholder}
            className="flex-1 w-0 bg-transparent text-xs font-semibold focus:outline-none text-[#222222] dark:text-white"
          />
          <span className="text-xs text-[#6a6a6a] dark:text-slate-400 font-mono">
            .{ext}
          </span>
        </div>

        {/* Signature Rausch Download Button ({colors.primary} #ff385c) */}
        <button
          onClick={handleDownload}
          disabled={!livePreview.url || isProcessing}
          className="flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          <Download size={15} />
          <span>{t.downloadImage}</span>
        </button>

      </div>

    </div>
  );
}
"use client";

import React, {
  useState,
  useCallback,
} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useDropzone } from "react-dropzone";
import {
  UploadCloud,
  Zap,
  Sparkles,
  CheckCircle2,
  Lock,
  FileCheck2,
} from "lucide-react";

const loadPhotoEditor = () => import("../../components/editor/PhotoEditor");

const EditorFallback = () => (
  <div className="w-full min-h-[600px] flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-slate-600 dark:text-slate-300 font-semibold">
      Loading Exam Photo Editor Workspace...
    </p>
  </div>
);

const PhotoEditor = dynamic(loadPhotoEditor, {
  ssr: false,
  loading: () => <EditorFallback />,
});

const QUICK_EXAM_PRESETS = [
  { name: "SSC (20–50 KB)", href: "/ssc-photo-resizer", badge: "Popular" },
  { name: "UPSC (20–300 KB)", href: "/upsc-photo-size", badge: "OTR" },
  { name: "IBPS Signature (10–20 KB)", href: "/signature-resize-ibps", badge: "Bank" },
  { name: "50 KB Photo", href: "/reduce-photo-size-50kb", badge: "Universal" },
  { name: "20 KB Signature", href: "/resize-photo-20kb", badge: "Sign" },
  { name: "CTET Exam", href: "/ctet-photo-resizer", badge: "CBSE" },
  { name: "RRB Railway", href: "/rrb-alp-photo-resizer", badge: "Govt" },
  { name: "Army Agniveer", href: "/army-agniveer-photo-resizer", badge: "Defence" },
];

export default function HeroUploader() {
  const [hasUploadedImage, setHasUploadedImage] = useState(false);

  const handleUserInteraction = useCallback(() => {
    loadPhotoEditor();
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      loadPhotoEditor();
      setHasUploadedImage(true);
      const event = new CustomEvent("hero-file-drop", {
        detail: { files: acceptedFiles },
      });
      window.dispatchEvent(event);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    multiple: false,
    noClick: false,
  });

  const showHero = !hasUploadedImage;

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO SECTION — shown before upload
      ══════════════════════════════════════════ */}
      {showHero && (
        <div>
          <section className="hero-gradient-bg relative overflow-hidden rounded-none md:rounded-3xl md:mx-4 md:mt-4">
            <div className="relative z-10 px-6 sm:px-8 lg:px-14 py-10 md:py-14 lg:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* ── LEFT COLUMN: Marketing Copy ── */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 shadow-sm">
                    <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
                    <span>Free Online Exam Photo &amp; Signature Resizer 2026–2027</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-slate-900 dark:text-white mb-4">
                    Resize Photos &amp; Signatures for{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-300 bg-clip-text text-transparent">
                      Govt &amp; Competitive Exams
                    </span>
                  </h1>

                  {/* Subheadline */}
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    Easily adjust dimensions, aspect ratios, and compress image size to exact KB limits for <strong>SSC, UPSC, IBPS, RRB, CTET, NEET, Police &amp; State PSC forms</strong>. 100% free, form-compliant, and processed locally in your browser.
                  </p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>Exact 20KB / 50KB Limits</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>Zero Server Uploads</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>No Quality Loss</span>
                    </div>
                  </div>

                  {/* Quick Preset Pills */}
                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
                      <Zap size={13} className="text-amber-500" />
                      <span>Direct Exam Presets:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_EXAM_PRESETS.map((preset) => (
                        <Link
                          key={preset.name}
                          href={preset.href}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700 shadow-sm transition-all hover:scale-[1.02] hover:border-blue-400"
                        >
                          <span>{preset.name}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                            {preset.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── RIGHT COLUMN: Upload Zone ── */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
                  <div className="w-full max-w-md">
                    {/* Tab Switcher */}
                    <div className="flex p-1 bg-slate-200/80 dark:bg-slate-800/80 rounded-2xl border border-slate-300 dark:border-slate-700 mb-4 shadow-sm">
                      <button
                        className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-sm flex items-center justify-center gap-1.5"
                        aria-label="Exam Photo Editor Tab"
                      >
                        <FileCheck2 size={16} />
                        <span>Exam Resizer</span>
                      </button>
                      <Link
                        href="/remove-background"
                        className="flex-1 text-center py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                      >
                        🤖 Bulk BG Remover
                      </Link>
                    </div>

                    {/* Upload Card */}
                    <div
                      {...getRootProps({
                        onMouseEnter: handleUserInteraction,
                        onTouchStart: handleUserInteraction,
                      })}
                      className={`hero-upload-zone relative cursor-pointer rounded-2xl border-2 border-dashed p-7 sm:p-9 bg-white dark:bg-slate-900 transition-all ${
                        isDragActive
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 scale-[1.01]"
                          : "border-slate-300 dark:border-slate-700 hover:border-blue-500 shadow-lg shadow-slate-200/50 dark:shadow-none"
                      }`}
                    >
                      <input
                        {...getInputProps()}
                        aria-label="Upload Exam Photo or Signature"
                      />

                      <div className="relative flex flex-col items-center text-center">
                        {/* Upload Icon */}
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                          <UploadCloud size={32} />
                        </div>

                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {isDragActive
                            ? "Drop your exam photo/signature here!"
                            : "Upload Photo or Signature"}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 max-w-xs">
                          Drag &amp; drop your passport photo, signature, or declaration. Instant local resizing.
                        </p>

                        {/* CTA Button */}
                        <button
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/20 mb-4 transition-transform active:scale-95"
                          aria-label="Select photo from computer or phone"
                        >
                          <UploadCloud size={16} />
                          Select Image to Resize
                        </button>

                        {/* Format Badges */}
                        <div className="flex items-center gap-1.5 flex-wrap justify-center">
                          {["JPG / JPEG", "PNG", "WEBP"].map((fmt) => (
                            <span
                              key={fmt}
                              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-[10px] font-bold tracking-wide"
                            >
                              {fmt}
                            </span>
                          ))}
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            • Max 30MB
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Privacy note */}
                    <div className="flex items-center justify-center gap-2 mt-3.5 px-3">
                      <Lock
                        size={13}
                        className="text-emerald-600 dark:text-emerald-400 flex-shrink-0"
                      />
                      <span className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        <strong>100% Client-Side Privacy:</strong> Your photo never touches a remote server.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ══════════════════════════════════════════
          EDITOR — shown after upload
      ══════════════════════════════════════════ */}
      {!showHero && (
        <div className="p-4 md:p-8">
          <div className="block min-h-[600px] sm:min-h-[800px]">
            <PhotoEditor />
          </div>
        </div>
      )}
    </>
  );
}

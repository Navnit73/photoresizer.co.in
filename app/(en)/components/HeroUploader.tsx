"use client";

import React, { useState, useCallback, useEffect, startTransition } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useDropzone } from "react-dropzone";
import {
  UploadCloud,
  Shield,
  Zap,
  Sparkles,
  Image,
  Layers,
  Type,
  ArrowRight,
} from "lucide-react";

const loadPhotoEditor = () => import("../../components/editor/PhotoEditor");

const EditorFallback = () => (
  <div className="w-full min-h-[600px] flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-slate-600 dark:text-slate-300 font-semibold">Loading Editor Workspace...</p>
  </div>
);

const PhotoEditor = dynamic(loadPhotoEditor, {
  ssr: false,
  loading: () => <EditorFallback />,
});

export default function HeroUploader() {
  const [hasUploadedImage, setHasUploadedImage] = useState(false);

  const handleUserInteraction = useCallback(() => {
    loadPhotoEditor();
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      loadPhotoEditor();
      (window as any).__HERO_DROPPED_FILES__ = acceptedFiles;
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
            <div className="relative z-10 px-6 sm:px-8 lg:px-16 py-10 md:py-16 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* ── LEFT COLUMN: Marketing Copy ── */}
                <div className="max-w-xl order-2 lg:order-1">
                  {/* Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-5">
                    Edit Photos{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      Instantly
                    </span>
                    <br />
                    <span className="text-slate-800 dark:text-slate-200">
                      Right in Your Browser
                    </span>
                  </h1>

                  {/* Subheadline */}
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 max-w-md">
                    Resize, compress, remove backgrounds, and add text — all
                    powered by on-device AI. Your photos never leave your
                    device.
                  </p>
                </div>

                {/* ── RIGHT COLUMN: Upload Zone ── */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                  <div className="w-full max-w-md">
                    {/* Tab Switcher */}
                    <div className="flex p-1 bg-slate-200/80 dark:bg-slate-800/80 rounded-2xl border border-slate-300 dark:border-slate-700 mb-5 shadow-sm">
                      <button
                        className="flex-1 py-2.5 px-4 text-sm font-semibold rounded-xl bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-sm"
                        aria-label="Photo Editor Tab"
                      >
                        ✨ Photo Editor
                      </button>
                      <Link
                        href="/remove-background"
                        className="flex-1 text-center py-2.5 px-4 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
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
                      className={`hero-upload-zone relative cursor-pointer rounded-2xl border-2 border-dashed p-8 sm:p-10 bg-white dark:bg-slate-900 ${
                        isDragActive
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40"
                          : "border-slate-300 dark:border-slate-700 hover:border-blue-500"
                      }`}
                    >
                      <input {...getInputProps()} aria-label="File Upload Input" />

                      <div className="relative flex flex-col items-center text-center">
                        {/* Upload Icon */}
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-blue-600 text-white">
                          <UploadCloud size={32} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {isDragActive
                            ? "Drop your image here!"
                            : "Upload Your Photo"}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-xs">
                          Drag & drop your image here, or click to browse.
                          Editing starts immediately.
                        </p>

                        {/* CTA Button */}
                        <button 
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md mb-5"
                          aria-label="Choose image to upload"
                        >
                          <UploadCloud size={16} />
                          Choose Image
                        </button>

                        {/* Format Badges */}
                        <div className="flex items-center gap-2">
                          {["JPG", "PNG", "WEBP"].map((fmt) => (
                            <span
                              key={fmt}
                              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-[10px] font-bold tracking-wide"
                            >
                              {fmt}
                            </span>
                          ))}
                          <span className="text-[10px] text-slate-600 dark:text-slate-400 ml-1">
                            up to 30MB
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Privacy note */}
                    <div className="flex items-center justify-center gap-2 mt-4 px-4">
                      <Shield
                        size={14}
                        className="text-emerald-600 dark:text-emerald-400 flex-shrink-0"
                      />
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Your images are processed locally. Nothing is uploaded
                        to any server.
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


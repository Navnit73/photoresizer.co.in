"use client";

import React, { useState, useCallback } from "react";
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

const EditorFallback = () => (
  <div className="w-full min-h-[600px] flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-slate-500 dark:text-slate-400 font-semibold">Loading Editor Workspace...</p>
  </div>
);

const PhotoEditor = dynamic(() => import("../../components/editor/PhotoEditor"), {
  ssr: false,
  loading: () => <EditorFallback />,
});
const BgRemoverApp = dynamic(
  () => import("../../components/bg_removal/BgRemoverApp"),
  { ssr: false, loading: () => <EditorFallback /> },
);

const TRUST_BADGES = [
  { icon: Shield, label: "100% Private", desc: "Nothing leaves your browser" },
  { icon: Zap, label: "Instant Processing", desc: "No server wait times" },
  { icon: Sparkles, label: "Completely Free", desc: "No watermarks or limits" },
];

const TOOL_FEATURES = [
  { icon: Image, label: "Resize & Crop" },
  { icon: Layers, label: "Remove Background" },
  { icon: Type, label: "Text & Watermark" },
];

export default function HeroUploader() {
  const [activeTab, setActiveTab] = useState<"editor" | "bg_remover">("editor");
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      setIsTransitioning(true);
      // Small delay for smooth transition
      setTimeout(() => {
        setHasUploadedImage(true);
        // Dispatch a custom event so the PhotoEditor's OriginalWorkspace can pick up the file
        const event = new CustomEvent("hero-file-drop", {
          detail: { files: acceptedFiles },
        });
        window.dispatchEvent(event);
      }, 100);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    multiple: false,
    noClick: false,
  });

  const showHero = !hasUploadedImage && activeTab === "editor";

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO SECTION — shown before upload
      ══════════════════════════════════════════ */}
      {showHero && (
        <div
          className={`transition-all duration-500 ${isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
        >
          <section className="hero-gradient-bg relative overflow-hidden rounded-none md:rounded-3xl md:mx-4 md:mt-4">
            {/* Dot grid overlay */}
            <div className="hero-dots absolute inset-0 pointer-events-none" />

            {/* Floating decorative shapes */}
            <div className="absolute top-20 left-[10%] w-16 h-16 rounded-2xl bg-blue-500/10 dark:bg-blue-400/5 hero-float-1 blur-sm pointer-events-none" />
            <div className="absolute top-40 right-[15%] w-12 h-12 rounded-full bg-violet-500/10 dark:bg-violet-400/5 hero-float-2 blur-sm pointer-events-none" />
            <div className="absolute bottom-32 left-[20%] w-10 h-10 rounded-xl bg-emerald-500/8 dark:bg-emerald-400/5 hero-float-3 blur-sm pointer-events-none" />
            <div className="absolute top-12 right-[35%] w-8 h-8 rounded-full bg-pink-500/8 dark:bg-pink-400/5 hero-float-2 pointer-events-none" />
            <div className="absolute bottom-20 right-[8%] w-14 h-14 rounded-2xl bg-amber-500/8 dark:bg-amber-400/5 hero-float-1 blur-sm pointer-events-none" />

            <div className="relative z-10 px-6 sm:px-8 lg:px-16 py-14 md:py-20 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* ── LEFT COLUMN: Marketing Copy ── */}
                <div className="max-w-xl order-2 lg:order-1">
                  {/* Badge */}
                  <div className="hero-fade-in hero-fade-in-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Trusted by 1M+ users worldwide
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="hero-fade-in hero-fade-in-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-5">
                    Edit Photos{" "}
                    <span className="text-accent-main">
                      Instantly
                    </span>
                    <br />
                    <span className="text-slate-700 dark:text-slate-300">
                      Right in Your Browser
                    </span>
                  </h1>

                  {/* Subheadline */}
                  <p className="hero-fade-in hero-fade-in-delay-2 text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-md">
                    Resize, compress, remove backgrounds, and add text — all
                    powered by on-device AI. Your photos never leave your
                    device.
                  </p>

                  {/* Trust Badges */}
                  <div className="hero-fade-in hero-fade-in-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {TRUST_BADGES.map(({ icon: Icon, label, desc }) => (
                      <div
                        key={label}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/[0.06] backdrop-blur-sm hover:bg-white/70 dark:hover:bg-white/[0.06] transition-all duration-300 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon
                            size={16}
                            className="text-accent-main"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                            {label}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-500 leading-tight mt-0.5">
                            {desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tool features row */}
                  <div className="hero-fade-in hero-fade-in-delay-4 flex flex-wrap items-center gap-2">
                    {TOOL_FEATURES.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/50 text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        <Icon size={12} />
                        {label}
                      </span>
                    ))}
                    <Link
                      href="/tools"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      40+ more tools <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* ── RIGHT COLUMN: Upload Zone ── */}
                <div className="hero-fade-in hero-fade-in-delay-3 flex justify-center lg:justify-end order-1 lg:order-2">
                  <div className="w-full max-w-md">
                    {/* Tab Switcher */}
                    <div className="flex p-1 bg-white/40 dark:bg-white/[0.04] rounded-2xl border border-white/50 dark:border-white/[0.08] backdrop-blur-sm mb-5 shadow-sm">
                      <button
                        onClick={() => setActiveTab("editor")}
                        className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
                          activeTab === "editor"
                            ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                        }`}
                        aria-label="Photo Editor Tab"
                      >
                        ✨ Photo Editor
                      </button>
                      <Link
                        href="/remove-background"
                        className="flex-1 text-center py-2.5 px-4 text-sm font-semibold rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                      >
                        🤖 Bulk BG Remover
                      </Link>
                    </div>

                    {/* Upload Card */}
                    <div
                      {...getRootProps()}
                      className={`hero-upload-zone relative cursor-pointer rounded-2xl border-2 border-dashed p-8 sm:p-10 transition-all duration-300 backdrop-blur-md ${
                        isDragActive
                          ? "border-blue-500 bg-blue-50/80 dark:bg-blue-500/10 scale-[1.02]"
                          : "border-slate-300/60 dark:border-slate-600/40 bg-white/60 dark:bg-white/[0.03] hover:border-blue-400/60 dark:hover:border-blue-500/40 hover:bg-white/80 dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <input {...getInputProps()} aria-label="File Upload Input" />

                      {/* Shimmer strip */}
                      <div className="hero-shimmer absolute inset-0 rounded-2xl pointer-events-none" />

                      <div className="relative flex flex-col items-center text-center">
                        {/* Upload Icon */}
                        <div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                            isDragActive
                              ? "bg-blue-500 shadow-xl shadow-blue-500/30 scale-110"
                              : "bg-gradient-to-br from-blue-500 to-sky-600 shadow-lg shadow-blue-500/20"
                          }`}
                        >
                          <UploadCloud size={36} className="text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                          {isDragActive
                            ? "Drop your image here!"
                            : "Upload Your Photo"}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs">
                          Drag & drop your image here, or click to browse.
                          Editing starts immediately.
                        </p>

                        {/* CTA Button */}
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] mb-5">
                          <UploadCloud size={16} />
                          Choose Image
                        </button>

                        {/* Format Badges */}
                        <div className="flex items-center gap-2">
                          {["JPG", "PNG", "WEBP"].map((fmt) => (
                            <span
                              key={fmt}
                              className="px-2.5 py-1 bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400 rounded-md text-[10px] font-bold tracking-wide"
                            >
                              {fmt}
                            </span>
                          ))}
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 ml-1">
                            up to 30MB
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Privacy note */}
                    <div className="flex items-center justify-center gap-2 mt-4 px-4">
                      <Shield
                        size={12}
                        className="text-emerald-500 flex-shrink-0"
                      />
                      <span className="text-[11px] text-slate-400 dark:text-slate-500">
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
          EDITOR — shown after upload or for bg_remover tab
      ══════════════════════════════════════════ */}
      <div className={`${!showHero ? "block" : "hidden"} p-4 md:p-8`}>
        <div
          className={
            activeTab === "editor"
              ? "block min-h-[600px] sm:min-h-[800px]"
              : "hidden"
          }
        >
          <PhotoEditor />
        </div>
        <div
          className={
            activeTab === "bg_remover"
              ? "block min-h-[600px] sm:min-h-[800px]"
              : "hidden"
          }
        >
          <BgRemoverApp />
        </div>
      </div>
    </>
  );
}

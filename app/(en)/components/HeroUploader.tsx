"use client";

import React, { useState, useCallback, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  UploadCloud,
  ShieldCheck,
  Zap,
  Lock,
  Sparkles
} from "lucide-react";
import { AdBanner } from "../../../components/AdBanner";

const loadPhotoEditor = () => import("../../components/editor/PhotoEditor");

const EditorFallback = () => (
  <div className="w-full min-h-[600px] flex flex-col items-center justify-center bg-[#FFFFFF] rounded-2xl border border-[#E4E4E7]">
    <div className="w-9 h-9 border-3 border-[#16A34A] border-t-transparent rounded-full animate-spin mb-3"></div>
    <p className="text-sm text-[#52525B] font-medium">
      Loading workspace...
    </p>
  </div>
);

const PhotoEditor = dynamic(loadPhotoEditor, {
  ssr: false,
  loading: () => <EditorFallback />,
});

const QUICK_PRESETS = [
  { name: "SSC (20–50 KB)", href: "/ssc-photo-resizer", badge: "India" },
  { name: "UPSC (20–300 KB)", href: "/upsc-photo-size", badge: "India" },
  { name: "US Passport (2×2 in)", href: "/passport-photo-maker", badge: "US" },
  { name: "UK Passport (35×45 mm)", href: "/passport-photo-maker", badge: "UK" },
  { name: "Compress to 50KB", href: "/reduce-photo-size-50kb", badge: "Utility" },
  { name: "IBPS Signature", href: "/signature-resize-ibps", badge: "Sign" },
];

interface HeroUploaderProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

export default function HeroUploader({
  title = "Resize Your Exam Photo Online",
  subtitle = "Resize, crop and prepare your photo for applications, exams and official documents.",
  badgeText = "Fast • Simple • 100% Private",
}: HeroUploaderProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleEditorLoad = (e: Event) => {
      const customEvent = e as CustomEvent<{ loaded: boolean }>;
      if (customEvent.detail && typeof customEvent.detail.loaded === "boolean") {
        setHasUploadedImage(customEvent.detail.loaded);
        if (!customEvent.detail.loaded) {
          setUploadedFile(null);
        }
      }
    };
    window.addEventListener("editor-file-loaded", handleEditorLoad);
    return () => window.removeEventListener("editor-file-loaded", handleEditorLoad);
  }, []);

  const handleUserInteraction = useCallback(() => {
    loadPhotoEditor();
  }, []);

  const handleFiles = useCallback((files: FileList | File[]) => {
    const fileList = Array.from(files);
    if (fileList.length > 0) {
      const file = fileList[0];
      if (typeof window !== "undefined") {
        (window as any).__PENDING_HERO_FILES__ = fileList;
      }
      setUploadedFile(file);
      setHasUploadedImage(true);
      loadPhotoEditor();

      const event = new CustomEvent("hero-file-drop", {
        detail: { files: fileList },
      });
      window.dispatchEvent(event);
      setTimeout(() => {
        window.dispatchEvent(event);
      }, 60);
      setTimeout(() => {
        window.dispatchEvent(event);
      }, 250);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  const showHero = !hasUploadedImage;

  return (
    <>
      {showHero && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            
            {/* Header Content */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              {/* Small green badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-semibold mb-4">
                <Sparkles size={13} className="text-[#16A34A]" />
                <span>{badgeText}</span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#18181B] leading-[1.15] mb-3.5">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="text-base text-[#52525B] leading-[1.6]">
                {subtitle}
              </p>
            </div>

            {/* Main Upload Box */}
            <div className="max-w-2xl mx-auto">
              <div
                onClick={() => fileInputRef.current?.click()}
                onMouseEnter={handleUserInteraction}
                onTouchStart={handleUserInteraction}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    fileInputRef.current?.click();
                  }
                }}
                className={`cursor-pointer p-8 sm:p-12 text-center rounded-xl transition-all duration-150 border-2 border-dashed ${
                  isDragActive
                    ? "border-[#16A34A] bg-[#DCFCE7] scale-[1.01]"
                    : "border-[#BBF7D0] bg-[#F0FDF4] hover:border-[#16A34A] hover:bg-[#DCFCE7]"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleInputChange}
                  className="hidden"
                  aria-label="Upload Photo"
                />

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A] shadow-[0_1px_2px_rgba(0,0,0,0.04)] mb-3.5">
                    <UploadCloud size={24} />
                  </div>

                  <p className="text-lg sm:text-xl font-semibold text-[#18181B] mb-2">
                    {isDragActive ? "Drop your image here" : "Upload your photo"}
                  </p>

                  {/* Primary Upload CTA Button */}
                  <span
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] text-sm font-semibold rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] my-3 transition-colors active:scale-[0.98]"
                  >
                    Upload Photo
                  </span>

                  <p className="text-xs sm:text-sm text-[#52525B] mb-4">
                    or drag &amp; drop your image here
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#71717A]">
                    <span className="font-semibold text-[#52525B]">JPG • PNG • WEBP</span>
                    <span>•</span>
                    <span>Max 30MB</span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators below upload */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#52525B]">
                <div className="flex items-center gap-1.5">
                  <Lock size={13} className="text-[#16A34A]" />
                  <span>100% Client-Side Private</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap size={13} className="text-[#16A34A]" />
                  <span>Instant Local Processing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#16A34A]" />
                  <span>No Account Required</span>
                </div>
              </div>

              {/* Quick Presets Bar */}
              <div className="mt-8 pt-6 border-t border-[#E4E4E7]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#71717A] uppercase tracking-wider">
                    Quick Exam &amp; Size Presets:
                  </span>
                  <Link href="/tools" className="text-xs font-semibold text-[#16A34A] hover:text-[#15803D]">
                    All tools &rarr;
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {QUICK_PRESETS.map((preset) => (
                    <Link
                      key={preset.name}
                      href={preset.href}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#FFFFFF] hover:bg-[#F0FDF4] text-[#18181B] hover:text-[#15803D] border border-[#E4E4E7] hover:border-[#BBF7D0] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors"
                    >
                      <span>{preset.name}</span>
                      <span className="text-[10px] bg-[#F4F4F5] text-[#71717A] px-1.5 py-0.5 rounded-md font-semibold">
                        {preset.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Below-the-upload ad: never competes with the upload CTA */}
            <AdBanner placement="heroBelow" className="max-w-[970px] mx-auto mt-8" />
          </div>
        </section>
      )}

      {/* Editor view after file upload */}
      {!showHero && (
        <div className="py-2 sm:py-4 px-2 sm:px-4 lg:px-6 w-full max-w-[1720px] mx-auto">
          <div className="min-h-[560px]">
            <PhotoEditor initialFile={uploadedFile} />
          </div>

          {/* Below-the-tool ad: well separated from the Download button */}
          <AdBanner placement="toolBelow" className="max-w-[970px] mx-auto mt-10" />
        </div>
      )}
    </>
  );
}

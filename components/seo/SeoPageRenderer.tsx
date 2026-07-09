'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { SeoPage, Language } from '../../lib/types/seo';
import { Breadcrumb } from './Breadcrumb';
import { SeoSection } from './SeoSection';
import { FAQ } from './FAQ';
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from '../../lib/schema';
import Script from 'next/script';
import Link from 'next/link';
import { useDropzone } from "react-dropzone";
import { UploadCloud, Shield, Zap, Sparkles, Image, Layers, Type, ArrowRight } from "lucide-react";

import PhotoEditor from '../../app/components/editor/PhotoEditor';
import PassportMakerApp from '../../app/components/passport_photo/PassportMakerApp';
import BgRemoverApp from '../../app/components/bg_removal/BgRemoverApp';

import { enPages } from '../../content/en-pages';
import { dePages } from '../../content/de-pages';
import { frPages } from '../../content/fr-pages';
import { esPages } from '../../content/es-pages';

interface Props {
  page: SeoPage;
  lang: Language;
}

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

export function SeoPageRenderer({ page, lang }: Props) {
  const initialTab = page.showTool === 'bg-remover' ? 'bg_remover' : 'editor';
  const [activeTab, setActiveTab] = useState<"editor" | "bg_remover">(initialTab);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Original listener for hero file drop
    const handleHeroDrop = (e: Event) => {
      const customEvent = e as CustomEvent<{ files: File[] }>;
      if (customEvent.detail?.files?.length > 0) {
        setIsTransitioning(true);
        setTimeout(() => {
          setHasUploadedImage(true);
        }, 300);
      }
    };
    window.addEventListener("hero-file-drop", handleHeroDrop);

    // New listener for editor state (so the hero hides/shows automatically)
    const handleEditorLoad = (e: Event) => {
      const customEvent = e as CustomEvent<{ loaded: boolean }>;
      setIsTransitioning(true);
      setTimeout(() => {
        setHasUploadedImage(customEvent.detail.loaded);
      }, 300);
    };
    window.addEventListener("editor-file-loaded", handleEditorLoad);

    return () => {
      window.removeEventListener("hero-file-drop", handleHeroDrop);
      window.removeEventListener("editor-file-loaded", handleEditorLoad);
    };
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setHasUploadedImage(true);
        const event = new CustomEvent("hero-file-drop", { detail: { files: acceptedFiles } });
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

  const showHero = !hasUploadedImage;

  const faqSchema = generateFAQSchema(page);
  const breadcrumbSchema = generateBreadcrumbSchema(page, lang);
  const webPageSchema = generateWebPageSchema(page, lang);

  const pagesMap = {
    en: enPages,
    de: dePages,
    fr: frPages,
    es: esPages,
  };

  const allPages = pagesMap[lang] || enPages;
  const relatedPages = allPages
    .filter(p => p.showTool === page.showTool && p.slug !== page.slug)
    .slice(0, 8);

  return (
    <main className="w-full pb-8 md:pb-12 bg-bg-root transition-colors duration-300">
      {/* JSON-LD Structured Data */}
      <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="max-w-[1400px] mx-auto">
        {/* ══════════════════════════════════════════
            HERO SECTION — shown before upload
        ══════════════════════════════════════════ */}
        {showHero && (
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
            <section className="hero-gradient-bg relative overflow-hidden rounded-none md:rounded-3xl md:mx-4 md:mt-4">
              {/* Dot grid overlay */}
              <div className="hero-dots absolute inset-0 pointer-events-none opacity-20" />

              <div className="relative z-10 px-6 sm:px-8 lg:px-16 py-14 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                  {/* ── LEFT COLUMN: Marketing Copy ── */}
                  <div className="max-w-xl order-2 lg:order-1">
                    <div className="hero-fade-in hero-fade-in-delay-1 mb-4">
                      <Breadcrumb page={page} lang={lang} />
                    </div>

                    {/* Headline */}
                    <h1 className="hero-fade-in hero-fade-in-delay-1 text-4xl sm:text-5xl lg:text-[3.0rem] font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-5">
                      {page.h1}
                    </h1>

                    {/* Subheadline */}
                    {page.subtitle && (
                      <p className="hero-fade-in hero-fade-in-delay-2 text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-md">
                        {page.subtitle}
                      </p>
                    )}

                    {/* Trust Badges Removed */}

                    {/* Tool features row Removed */}
                  </div>

                  {/* ── RIGHT COLUMN: Upload Zone ── */}
                  <div className="hero-fade-in hero-fade-in-delay-3 flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="w-full max-w-md">
                      {/* Upload Card */}
                      <div
                        {...getRootProps()}
                        className={`hero-upload-zone relative cursor-pointer rounded-2xl border-2 border-dashed p-8 sm:p-10 transition-all duration-300 backdrop-blur-md ${
                          isDragActive
                            ? "border-pink-600 bg-blue-50/80 dark:bg-blue-500/10 scale-[1.02]"
                            : "border-pink-600 dark:border-pink-600/60 bg-white/60 dark:bg-white/[0.03] hover:border-pink-500 hover:bg-white/80 dark:hover:bg-white/[0.05]"
                        }`}
                      >
                        <input {...getInputProps()} />

                        {/* Shimmer strip removed */}

                        <div className="relative flex flex-col items-center text-center">
                          {/* Upload Icon */}
                          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                            isDragActive
                              ? "bg-blue-500 shadow-xl shadow-blue-500/30 scale-110"
                              : "bg-gradient-to-br from-blue-500 to-sky-600 shadow-lg shadow-blue-500/20"
                          }`}>
                            <UploadCloud size={36} className="text-white" />
                          </div>

                          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                            {isDragActive ? "Drop your image here!" : "Upload Your Photo"}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs">
                            Drag & drop your image here, or click to browse. Editing starts immediately.
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
                        <Shield size={12} className="text-emerald-500 flex-shrink-0" />
                        <span className="text-[11px] text-slate-400 dark:text-slate-500">
                          Your images are processed locally. Nothing is uploaded to any server.
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
        <div className={`${!showHero ? 'block' : 'hidden'} p-4 md:p-8`}>
          {/* Header area when editor is active */}
          <header className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold tracking-tight text-text-main">
                  {page.h1}
                </h1>
              </div>
              <p className="text-sm text-text-muted">
                {page.subtitle}
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex p-1 bg-bg-card rounded-xl border border-border-subtle shadow-sm w-full md:w-auto self-start">
              <button
                onClick={() => setActiveTab("editor")}
                className={`flex-1 md:w-36 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "editor"
                    ? "bg-accent-main text-white shadow-md"
                    : "text-text-muted hover:text-text-main hover:bg-bg-input"
                }`}
              >
                Photo Editor
              </button>
              <button
                onClick={() => setActiveTab("bg_remover")}
                className={`flex-1 md:w-44 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "bg_remover"
                    ? "bg-lime-600 dark:bg-lime-500 text-white shadow-md"
                    : "text-text-muted hover:text-text-main hover:bg-bg-input block"
                }`}
              >
                Bulk BG Remover
              </button>
            </div>
          </header>

          <div className={activeTab === "editor" ? "block min-h-[600px] sm:min-h-[800px]" : "hidden"}>
            {page.showTool === 'photo-editor' && <PhotoEditor />}
            {page.showTool === 'passport-maker' && <PassportMakerApp />}
            {/* If the tool is normally background remover, but they are in editor tab, show PhotoEditor since BgRemoverApp is separate? 
                Actually let's just render the tool that is supposed to be here if it's photo-editor or passport-maker.
                If it's bg-remover, we should probably render BgRemoverApp.
            */}
            {(page.showTool === 'bg-remover' || !['photo-editor', 'passport-maker', 'bg-remover'].includes(page.showTool as string)) && <PhotoEditor />}
          </div>
          <div className={activeTab === "bg_remover" ? "block min-h-[600px] sm:min-h-[800px]" : "hidden"}>
            <BgRemoverApp />
          </div>
        </div>

      </div>

      {/* Bottom SEO Content - Constrained Width */}
      <div className="max-w-5xl mx-auto px-4 mt-16">
        {page.sections && page.sections.length > 0 && (
          <div className="flex flex-col gap-8 mb-16">
            {page.sections.map((section, idx) => (
              <SeoSection key={idx} section={section} />
            ))}
          </div>
        )}

        {/* FAQ */}
        <FAQ faq={page.faq || []} />

        {/* Related Tools Internal Linking */}
        {relatedPages.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 not-prose mb-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedPages.map((relatedPage) => (
                <Link 
                  key={relatedPage.slug} 
                  href={`/${lang === 'en' ? '' : lang + '/'}${relatedPage.slug}`}
                  className="group flex flex-col p-5 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {relatedPage.h1}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 flex-1">
                    {relatedPage.metaDescription}
                  </p>
                  <div className="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Use Tool →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

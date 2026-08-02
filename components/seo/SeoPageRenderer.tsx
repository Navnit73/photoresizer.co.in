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
import { UploadCloud, Shield, ArrowRight } from "lucide-react";
import { useTranslation } from '../../app/hooks/useTranslation';

import PhotoEditor from '../../app/components/editor/PhotoEditor';
import PassportMakerApp from '../../app/components/passport_photo/PassportMakerApp';
import BgRemoverApp from '../../app/components/bg_removal/BgRemoverApp';
import { AdBanner } from '../AdBanner';

import { enPages } from '../../content/en-pages';
import { dePages } from '../../content/de-pages';
import { frPages } from '../../content/fr-pages';
import { esPages } from '../../content/es-pages';
import { ptPages } from '../../content/pt-pages';

interface Props {
  page: SeoPage;
  lang: Language;
}

export function SeoPageRenderer({ page, lang }: Props) {
  const { t } = useTranslation();
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

    // Listener for editor state
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
    pt: ptPages,
  };

  const allPages = pagesMap[lang] || enPages;
  const relatedPages = allPages
    .filter(p => p.showTool === page.showTool && p.slug !== page.slug)
    .slice(0, 8);

  return (
    <main className="w-full pb-8 md:pb-12 bg-white dark:bg-[#121212] text-[#222222] dark:text-[#f1f1f1] font-['Airbnb_Cereal_VF',Circular,sans-serif] transition-colors duration-300">
      {/* JSON-LD Structured Data */}
      <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        {/* ══════════════════════════════════════════
            HERO SECTION (Airbnb Design Specification)
        ══════════════════════════════════════════ */}
        {showHero && (
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
            <section className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-[#dddddd] dark:border-slate-800 shadow-sm mt-4 p-6 sm:p-10 lg:p-14">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                {/* ── LEFT COLUMN: Marketing Copy ── */}
                <div className="max-w-xl order-2 lg:order-1">
                  <div className="mb-4">
                    <Breadcrumb page={page} lang={lang} />
                  </div>

                  {/* Airbnb Display Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight leading-[1.2] text-[#222222] dark:text-white mb-4">
                    {page.h1}
                  </h1>

                  {/* Subheadline */}
                  {page.subtitle && (
                    <p className="text-base text-[#6a6a6a] dark:text-slate-400 leading-[1.5] mb-6 max-w-md">
                      {page.subtitle}
                    </p>
                  )}

                  {/* Trust indicator badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 text-xs font-semibold text-[#222222] dark:text-white">
                    <Shield size={14} className="text-[#ff385c]" />
                    <span>{t.browserPrivacyBadge}</span>
                  </div>
                </div>

                {/* ── RIGHT COLUMN: Airbnb Style Upload Card ── */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                  <div className="w-full max-w-md">
                    <div
                      {...getRootProps()}
                      className={`relative cursor-pointer rounded-3xl border-2 border-dashed p-8 sm:p-10 transition-all duration-300 ${
                        isDragActive
                          ? "border-[#ff385c] bg-[#ff385c]/5 scale-[1.02]"
                          : "border-[#ff385c] dark:border-[#ff385c]/60 bg-[#f7f7f7] dark:bg-slate-900/60 hover:border-[#e00b41] hover:shadow-md"
                      }`}
                    >
                      <input {...getInputProps()} />

                      <div className="relative flex flex-col items-center text-center">
                        {/* Rausch Icon Circle */}
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                          isDragActive
                            ? "bg-[#ff385c] text-white shadow-lg scale-110"
                            : "bg-[#ff385c] text-white shadow-sm"
                        }`}>
                          <UploadCloud size={30} />
                        </div>

                        <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-2">
                          {isDragActive ? t.dropPhotoHere : t.uploadYourPhoto}
                        </h3>
                        <p className="text-xs text-[#6a6a6a] dark:text-slate-400 mb-6 max-w-xs leading-[1.5]">
                          {t.heroDragDropSub}
                        </p>

                        {/* Signature Rausch Button ({colors.primary} #ff385c) */}
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff385c] hover:bg-[#e00b41] text-white text-xs font-bold rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] mb-5">
                          <UploadCloud size={16} />
                          <span>{t.selectImage}</span>
                        </button>

                        {/* Format Badges */}
                        <div className="flex items-center gap-2">
                          {["JPG", "PNG", "WEBP"].map((fmt) => (
                            <span
                              key={fmt}
                              className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 text-[#222222] dark:text-white rounded-full text-[10px] font-bold"
                            >
                              {fmt}
                            </span>
                          ))}
                          <span className="text-[10px] text-[#6a6a6a] dark:text-slate-400 font-medium ml-1">
                            {t.upTo30MB}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Privacy Note */}
                    <div className="flex items-center justify-center gap-1.5 mt-3 text-center">
                      <Shield size={12} className="text-[#ff385c]" />
                      <span className="text-[11px] text-[#6a6a6a] dark:text-slate-400 font-medium">
                        {t.noServerUploadPrivacy}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}

        {/* ══════════════════════════════════════════
            EDITOR CONTAINER — shown after upload
        ══════════════════════════════════════════ */}
        <div className={`${!showHero ? 'block' : 'hidden'} py-4`}>
          {/* Header area when editor is active */}
          <header className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold tracking-tight text-[#222222] dark:text-white">
                {page.h1}
              </h2>
              <p className="text-xs text-[#6a6a6a] dark:text-slate-400">
                {page.subtitle}
              </p>
            </div>

            {/* Tab Switcher (Airbnb Pill Style) */}
            <div className="flex p-1 bg-[#f7f7f7] dark:bg-slate-800 rounded-full border border-[#dddddd] dark:border-slate-700 w-full md:w-auto self-start">
              <button
                onClick={() => setActiveTab("editor")}
                className={`flex-1 md:w-36 py-2 px-4 text-xs font-bold rounded-full transition-all ${
                  activeTab === "editor"
                    ? "bg-[#ff385c] text-white shadow-sm"
                    : "text-[#6a6a6a] dark:text-slate-400 hover:text-[#222222] dark:hover:text-white"
                }`}
              >
                {t.photoEditorTab}
              </button>
              <button
                onClick={() => setActiveTab("bg_remover")}
                className={`flex-1 md:w-44 py-2 px-4 text-xs font-bold rounded-full transition-all ${
                  activeTab === "bg_remover"
                    ? "bg-[#222222] dark:bg-white text-white dark:text-[#222222] shadow-sm"
                    : "text-[#6a6a6a] dark:text-slate-400 hover:text-[#222222] dark:hover:text-white"
                }`}
              >
                {t.bgRemoverTab}
              </button>
            </div>
          </header>

          <div className={activeTab === "editor" ? "block min-h-[600px] sm:min-h-[800px]" : "hidden"}>
            {page.showTool === 'photo-editor' && <PhotoEditor />}
            {page.showTool === 'passport-maker' && <PassportMakerApp />}
            {(page.showTool === 'bg-remover' || !['photo-editor', 'passport-maker', 'bg-remover'].includes(page.showTool as string)) && <PhotoEditor />}
          </div>
          <div className={activeTab === "bg_remover" ? "block min-h-[600px] sm:min-h-[800px]" : "hidden"}>
            <BgRemoverApp />
          </div>
        </div>

      </div>

      {/* Bottom SEO Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        {page.sections && page.sections.length > 0 && (
          <div className="flex flex-col gap-8 mb-16">
            {page.sections.map((section, idx) => (
              <SeoSection key={idx} section={section} />
            ))}
          </div>
        )}

        {/* FAQ */}
        <FAQ faq={page.faq || []} />

        {/* Related Tools Internal Linking ({component.property-card} photo-first style) */}
        {relatedPages.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#dddddd] dark:border-slate-800 not-prose mb-12">
            <h3 className="text-xl font-bold mb-6 text-[#222222] dark:text-white">{t.relatedTools}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedPages.map((relatedPage) => (
                <Link 
                  key={relatedPage.slug} 
                  href={`/${lang === 'en' ? '' : lang + '/'}${relatedPage.slug}`}
                  className="group flex flex-col p-5 bg-white dark:bg-slate-900 rounded-2xl border border-[#dddddd] dark:border-slate-800 hover:border-[#ff385c] hover:shadow-md transition-all duration-200"
                >
                  <h4 className="font-bold text-xs text-[#222222] dark:text-white group-hover:text-[#ff385c] transition-colors line-clamp-2">
                    {relatedPage.h1}
                  </h4>
                  <p className="text-[11px] text-[#6a6a6a] dark:text-slate-400 mt-2 line-clamp-2 flex-1">
                    {relatedPage.metaDescription}
                  </p>
                  <div className="mt-3 text-xs font-bold text-[#ff385c] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>{t.useTool}</span>
                    <ArrowRight size={12} />
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

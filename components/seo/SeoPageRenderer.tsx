'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { UploadCloud, ShieldCheck, ArrowRight, Zap, Sparkles } from "lucide-react";
import { SeoPage, Language } from '../../lib/types/seo';
import { Breadcrumb } from './Breadcrumb';
import { SeoSection } from './SeoSection';
import { FAQ } from './FAQ';
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from '../../lib/schema';
import type { Region } from '../../app/components/passport_photo/PassportCropper';
import { AdBanner } from '../AdBanner';
import { openFilePicker } from '../../app/utils/filePicker';

const PhotoEditor = dynamic(() => import('../../app/components/editor/PhotoEditor'), {
  ssr: false,
  loading: () => <div className="min-h-[450px] flex items-center justify-center text-sm text-[#71717A]">Loading editor...</div>,
});

const PassportMakerApp = dynamic(() => import('../../app/components/passport_photo/PassportMakerApp'), {
  ssr: false,
  loading: () => <div className="min-h-[450px] flex items-center justify-center text-sm text-[#71717A]">Loading passport maker...</div>,
});

const BgRemoverApp = dynamic(() => import('../../app/components/bg_removal/BgRemoverApp'), {
  ssr: false,
  loading: () => <div className="min-h-[450px] flex items-center justify-center text-sm text-[#71717A]">Loading background remover...</div>,
});

/** Pre-selects the passport size that matches a country-specific landing page. */
function passportRegionForSlug(slug: string): Region | undefined {
  if (slug.startsWith('us-')) return 'US';
  if (slug.startsWith('uk-')) return 'UK';
  if (slug.startsWith('india-')) return 'IN_PASSPORT';
  if (slug.includes('schengen')) return 'EU';
  return undefined;
}

export interface RelatedPageLink {
  slug: string;
  h1: string;
  metaDescription: string;
}

interface Props {
  page: SeoPage;
  lang: Language;
  relatedPages?: RelatedPageLink[];
}

const PASSPORT_RESOURCES = [
  { href: 'https://www.pixpassport.com', label: 'PixPassport – Online Passport Photo Maker', title: 'PixPassport – online passport photo maker' },
  { href: 'https://www.pixpassport.com/icao-standard-photograph', label: 'ICAO Standard Photograph Guide & Requirements', title: 'ICAO standard passport photograph guide' },
  { href: 'https://pixpassport.uk/', label: 'PixPassport UK – Passport Photo Tools', title: 'PixPassport UK – passport photo tools' },
  { href: 'https://pixpassport.uk/tool/uk-passport-photo', label: 'UK Passport Photo Maker (Free Online)', title: 'Make a UK passport photo online' },
  { href: 'https://pixpassport.uk/tool/digital-passport-photo', label: 'Digital Passport Photo Creator', title: 'Create a digital passport photo online' },
  { href: 'https://pixpassport.uk/tool/take-a-passport-photo-on-iphone', label: 'How to Take a Passport Photo on iPhone', title: 'How to take a passport photo on iPhone' },
];

export function SeoPageRenderer({ page, lang, relatedPages = [] }: Props) {
  const initialTab = page.showTool === 'bg-remover' ? 'bg_remover' : 'editor';
  const [activeTab, setActiveTab] = useState<"editor" | "bg_remover">(initialTab);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleHeroDrop = (e: Event) => {
      const customEvent = e as CustomEvent<{ files: File[] }>;
      if (customEvent.detail?.files?.length > 0) {
        setUploadedFile(customEvent.detail.files[0]);
        setHasUploadedImage(true);
      }
    };
    window.addEventListener("hero-file-drop", handleHeroDrop);

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

    return () => {
      window.removeEventListener("hero-file-drop", handleHeroDrop);
      window.removeEventListener("editor-file-loaded", handleEditorLoad);
    };
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
      const event = new CustomEvent("hero-file-drop", { detail: { files: fileList } });
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

  const faqSchema = generateFAQSchema(page);
  const breadcrumbSchema = generateBreadcrumbSchema(page, lang);
  const webPageSchema = generateWebPageSchema(page, lang);

  return (
    <main className="w-full bg-[#FFFFFF] text-[#18181B] pb-12">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className={!showHero ? "w-full max-w-[1720px] mx-auto px-2 sm:px-4 lg:px-6" : "max-w-[1200px] mx-auto px-4 sm:px-6"}>
        
        {/* Breadcrumb Navigation */}
        <div className="pt-6 pb-2">
          <Breadcrumb page={page} lang={lang} />
        </div>

        {/* ══════════════════════════════════════════
            HERO / HEADER SECTION (Before Upload)
        ══════════════════════════════════════════ */}
        {showHero && (
          <section className="py-6 md:py-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-semibold mb-3.5">
                <Sparkles size={13} className="text-[#16A34A]" />
                <span>Free Online Utility • 100% Private</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#18181B] leading-[1.15] mb-3">
                {page.h1}
              </h1>

              {/* Subtitle */}
              {page.subtitle && (
                <p className="text-base text-[#52525B] leading-[1.6]">
                  {page.subtitle}
                </p>
              )}
            </div>

            {/* Standard Upload Box */}
            <div className="max-w-2xl mx-auto">
              <div
                onClick={() => openFilePicker(() => fileInputRef.current?.click())}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openFilePicker(() => fileInputRef.current?.click());
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

              {/* Trust Indicators */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#52525B]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#16A34A]" />
                  <span>100% Client-Side Private</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap size={13} className="text-[#16A34A]" />
                  <span>Instant Local Processing</span>
                </div>
              </div>
            </div>

            {/* Below-the-upload ad: never competes with the upload CTA */}
            <AdBanner placement="heroBelow" className="max-w-[970px] mx-auto mt-8" />
          </section>
        )}

        {/* ══════════════════════════════════════════
            EDITOR CONTAINER — rendered strictly only after user upload
        ══════════════════════════════════════════ */}
        {!showHero && (
          <div className="py-4">
            <header className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E4E4E7]">
              <div>
                <h2 className="text-lg font-bold text-[#18181B]">
                  {page.h1}
                </h2>
                {page.subtitle && (
                  <p className="text-xs text-[#71717A]">
                    {page.subtitle}
                  </p>
                )}
              </div>

              {/* Mode Switcher */}
              <div className="flex p-1 bg-[#FAFAFA] rounded-xl border border-[#E4E4E7] self-start">
                <button
                  onClick={() => setActiveTab("editor")}
                  className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === "editor"
                      ? "bg-[#16A34A] text-[#FFFFFF]"
                      : "text-[#52525B] hover:text-[#18181B]"
                  }`}
                >
                  Editor
                </button>
                <button
                  onClick={() => setActiveTab("bg_remover")}
                  className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === "bg_remover"
                      ? "bg-[#16A34A] text-[#FFFFFF]"
                      : "text-[#52525B] hover:text-[#18181B]"
                  }`}
                >
                  BG Remover
                </button>
              </div>
            </header>

            <div className="min-h-[600px]">
              {activeTab === "editor" ? (
                page.showTool === 'passport-maker' ? (
                  <PassportMakerApp initialFile={uploadedFile} defaultRegion={passportRegionForSlug(page.slug)} />
                ) : page.showTool === 'bg-remover' ? (
                  <BgRemoverApp />
                ) : (
                  <PhotoEditor initialFile={uploadedFile} />
                )
              ) : (
                <BgRemoverApp />
              )}
            </div>

            {/* Below-the-tool ad: well separated from the Download button */}
            <AdBanner placement="toolBelow" className="max-w-[970px] mx-auto mt-10" />
          </div>
        )}

      </div>

      {/* Bottom SEO Content Sections */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 mt-16">
        {page.sections && page.sections.length > 0 && (
          <div className="flex flex-col gap-6 mb-14">
            {page.sections.map((section, idx) => (
              <React.Fragment key={idx}>
                <SeoSection section={section} />
                {/* In-content ad after the 2nd section (only on longer pages) */}
                {idx === 1 && (page.sections?.length ?? 0) > 3 && (
                  <AdBanner placement="inContent" className="my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* FAQ Section */}
        <FAQ faq={page.faq || []} />

        {/* Helpful passport photo resources (passport pages only) */}
        {page.showTool === 'passport-maker' && (
          <aside className="mt-12 p-6 rounded-xl border border-[#E4E4E7] bg-[#FAFAFA]">
            <h3 className="text-lg font-semibold mb-2 text-[#18181B]">
              Helpful Passport Photo Resources
            </h3>
            <p className="text-sm text-[#52525B] mb-4">
              Want to double-check the official rules or try another passport photo tool? These guides are genuinely useful:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
              {PASSPORT_RESOURCES.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener"
                    title={r.title}
                    className="text-[#16A34A] hover:text-[#15803D] font-medium underline-offset-2 hover:underline transition-colors"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* End-of-content ad, before related links */}
        <AdBanner placement="contentEnd" className="mt-12" />

        {/* Related Tools */}
        {relatedPages.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#E4E4E7]">
            <h3 className="text-lg font-semibold mb-5 text-[#18181B]">
              Related Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedPages.map((relatedPage) => (
                <Link 
                  key={relatedPage.slug} 
                  href={`/${relatedPage.slug}`}
                  className="p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] hover:border-[#BBF7D0] hover:bg-[#F0FDF4] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h4 className="font-semibold text-sm text-[#18181B] group-hover:text-[#15803D] transition-colors line-clamp-2">
                      {relatedPage.h1}
                    </h4>
                    <p className="text-xs text-[#52525B] mt-2 line-clamp-2">
                      {relatedPage.metaDescription}
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-semibold text-[#16A34A] flex items-center gap-1">
                    <span>Use Tool</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
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

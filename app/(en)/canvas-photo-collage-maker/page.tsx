import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StickyToolNav from '@/components/canvas-collage/StickyToolNav';

import FAQAccordion from '@/components/canvas-collage/FAQAccordion';
import { enPages } from '@/content/en-pages';
import { generateSeoMetadata } from '@/lib/seo';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';

// Dynamically import heavy interactive tools
const CollageMakerTool = dynamic(() => import('@/components/canvas-collage/CollageMakerTool'), {
  loading: () => (
    <div className="w-full h-[600px] bg-slate-100 dark:bg-slate-800 animate-pulse rounded-3xl flex items-center justify-center">
      <p className="text-slate-500 font-medium">Loading Collage Maker...</p>
    </div>
  ),
});

const PosterPrintTool = dynamic(() => import('@/components/canvas-collage/PosterPrintTool'), {
  loading: () => (
    <div className="w-full h-[600px] bg-slate-100 dark:bg-slate-800 animate-pulse rounded-3xl mt-20 flex items-center justify-center">
      <p className="text-slate-500 font-medium">Loading Poster Splitter...</p>
    </div>
  ),
});

// Find the page content
const pageIndex = enPages.findIndex(p => p.slug === 'canvas-photo-collage-maker');
const pageData = enPages[pageIndex];

export function generateMetadata(): Metadata {
  return generateSeoMetadata(pageData, 'en', pageIndex);
}

export default function CanvasPhotoCollageMakerPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';
  
  // Custom schema generation for the tools
  const toolsSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Canvas Photo Collage Maker',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Free Poster Splitter',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    }
  ];

  const faqSchema = generateFAQSchema(pageData);
  const breadcrumbSchema = generateBreadcrumbSchema(pageData, 'en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* ═══ Premium Hero Header ═══ */}
      <div className="hero-gradient-bg relative overflow-hidden">
        {/* Dot grid overlay */}
        <div className="hero-dots absolute inset-0 pointer-events-none" />

        {/* Floating decorative shapes */}
        <div className="absolute top-10 left-[6%] w-16 h-16 rounded-2xl bg-blue-500/10 dark:bg-blue-400/5 hero-float-1 blur-sm pointer-events-none" />
        <div className="absolute top-6 right-[10%] w-12 h-12 rounded-full bg-violet-500/10 dark:bg-violet-400/5 hero-float-2 blur-sm pointer-events-none" />
        <div className="absolute bottom-10 left-[18%] w-10 h-10 rounded-xl bg-emerald-500/8 dark:bg-emerald-400/5 hero-float-3 blur-sm pointer-events-none" />
        <div className="absolute bottom-8 right-[25%] w-14 h-14 rounded-2xl bg-pink-500/8 dark:bg-pink-400/5 hero-float-1 blur-sm pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-14 md:py-20 lg:py-24 text-center">
          {/* Badge */}
          <div className="hero-fade-in hero-fade-in-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Free &amp; No Sign-Up Required
            </span>
          </div>

          <h1 className="hero-fade-in hero-fade-in-delay-1 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            <span className="text-slate-900 dark:text-white">Canvas Photo </span>
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              Collage Maker
            </span>
          </h1>

          <p className="hero-fade-in hero-fade-in-delay-2 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
            Design stunning canvas collages from your favorite memories or split images into poster-sized prints. All free, all in your browser.
          </p>

          <div className="hero-fade-in hero-fade-in-delay-3 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#collage-maker"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold rounded-xl transition-all text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Start a Collage
            </Link>
            <Link 
              href="#poster-splitter"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/70 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.1] text-slate-800 dark:text-white font-bold rounded-xl transition-all border border-white/60 dark:border-white/[0.12] text-lg backdrop-blur-sm hover:-translate-y-0.5"
            >
              Make a Poster
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="hero-fade-in hero-fade-in-delay-4 flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-white/[0.04] border border-white/60 dark:border-white/[0.08] backdrop-blur-sm text-xs font-medium text-slate-600 dark:text-slate-400">
              🔒 100% Private
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-white/[0.04] border border-white/60 dark:border-white/[0.08] backdrop-blur-sm text-xs font-medium text-slate-600 dark:text-slate-400">
              ⚡ Instant Processing
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-white/[0.04] border border-white/60 dark:border-white/[0.08] backdrop-blur-sm text-xs font-medium text-slate-600 dark:text-slate-400">
              ✨ Completely Free
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-4 py-8 md:py-12">

        <StickyToolNav />

        <CollageMakerTool />
        
        <PosterPrintTool />

        <FAQAccordion faq={pageData.faq} />

        {/* Related Tools Section */}
        <section className="my-16 border-t border-slate-200 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Related Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/" className="group flex flex-col p-6 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Free Photo Resizer</h3>
              <p className="text-sm text-slate-500 mt-2 flex-1">Resize images instantly without uploading to a server.</p>
              <div className="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Use Tool →
              </div>
            </Link>
            <Link href="/passport-photo-maker" className="group flex flex-col p-6 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Passport Photo Maker</h3>
              <p className="text-sm text-slate-500 mt-2 flex-1">Create perfectly sized passport and ID photos for any country.</p>
              <div className="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Use Tool →
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

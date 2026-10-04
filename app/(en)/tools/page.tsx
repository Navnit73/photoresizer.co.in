import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { enPages } from '../../../content/en-pages';
import { Scissors, Sliders, Minimize2, Sparkles, ArrowRight } from 'lucide-react';

import { BASE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: "All Free Online Photo & Image Editing Tools | PhotoResizer",
  description: "Explore our complete suite of free, private, browser-based online photo editing tools. Resize, compress, crop, and convert images instantly.",
  alternates: {
    canonical: `${BASE_URL}/tools`,
    languages: {
      'en-IN': `${BASE_URL}/tools`,
      'x-default': `${BASE_URL}/tools`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "All Free Online Photo & Image Editing Tools | PhotoResizer",
    description: "Explore our complete suite of free, private, browser-based online photo editing tools.",
    url: `${BASE_URL}/tools`,
    locale: "en_IN",
    type: "website",
    siteName: "PhotoResizer",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PhotoResizer Free Online Photo Editing Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "All Free Online Photo & Image Editing Tools | PhotoResizer",
    description: "Explore our complete suite of free, private, browser-based online photo editing tools.",
    images: ['/og-image.png'],
  },
};

export default function ToolsPage() {
  const validPages = enPages.filter(page => !['how-to-use', 'contact', 'terms', 'privacy', 'about'].includes(page.slug));

  const toolsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All Free Image Tools",
    "description": "Explore our complete collection of secure, browser-based image editing utilities. No downloads or sign-ups required.",
    "url": `${BASE_URL}/tools`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": validPages.map((page, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${BASE_URL}/${page.slug}`
      }))
    }
  };

  return (
    <main className="w-full bg-[#FFFFFF] text-[#18181B] pb-16">
      <Script id="tools-collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }} />

      {/* Hero Header */}
      <div className="py-12 md:py-16 border-b border-[#E4E4E7] bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-semibold mb-4 mx-auto">
            <Sparkles size={13} className="text-[#16A34A]" />
            <span>{validPages.length}+ Free Utilities Available</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-[1.15] mb-3">
            All Free Image Tools
          </h1>

          <p className="text-base text-[#52525B] max-w-xl mx-auto leading-relaxed">
            Fast, private, and browser-based photo utilities for resizing, compressing, cropping, and document formatting.
          </p>

          {/* Quick trust metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#71717A] mt-6">
            <span>✓ 100% Private (No Cloud Uploads)</span>
            <span>✓ Exact Pixel &amp; KB Target Limits</span>
            <span>✓ No Registration Required</span>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {validPages.map((page) => {
            const isPassport = page.showTool === 'passport-maker';
            const isBgRemover = page.showTool === 'bg-remover';
            const Icon = isPassport ? Scissors : (isBgRemover ? Sparkles : (page.slug.includes('compress') || page.slug.includes('reduce') ? Minimize2 : Sliders));

            return (
              <Link 
                key={page.slug} 
                href={`/${page.slug}`}
                className="group flex flex-col justify-between p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] hover:border-[#BBF7D0] hover:bg-[#F0FDF4] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-150"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A] mb-3.5 group-hover:bg-[#DCFCE7] transition-colors">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-base font-semibold text-[#18181B] group-hover:text-[#15803D] mb-1.5 leading-snug transition-colors line-clamp-2">
                    {page.h1}
                  </h2>
                  <p className="text-xs text-[#52525B] line-clamp-3 leading-relaxed">
                    {page.metaDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F4F4F5] flex items-center justify-between text-xs font-semibold text-[#16A34A] group-hover:text-[#15803D]">
                  <span>Open Tool</span>
                  <ArrowRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

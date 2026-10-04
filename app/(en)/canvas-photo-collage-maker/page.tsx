import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StickyToolNav from '@/components/canvas-collage/StickyToolNav';
import FAQAccordion from '@/components/canvas-collage/FAQAccordion';
import { enPages } from '@/content/en-pages';
import { generateSeoMetadata } from '@/lib/seo';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

const CollageMakerTool = dynamic(() => import('@/components/canvas-collage/CollageMakerTool'), {
  loading: () => (
    <div className="w-full h-[600px] bg-[#FAFAFA] border border-[#E4E4E7] rounded-2xl flex items-center justify-center">
      <p className="text-sm text-[#71717A] font-medium">Loading Collage Maker...</p>
    </div>
  ),
});

const PosterPrintTool = dynamic(() => import('@/components/canvas-collage/PosterPrintTool'), {
  loading: () => (
    <div className="w-full h-[600px] bg-[#FAFAFA] border border-[#E4E4E7] rounded-2xl mt-12 flex items-center justify-center">
      <p className="text-sm text-[#71717A] font-medium">Loading Poster Splitter...</p>
    </div>
  ),
});

const pageIndex = enPages.findIndex(p => p.slug === 'canvas-photo-collage-maker');
const pageData = enPages[pageIndex] || {
  slug: 'canvas-photo-collage-maker',
  h1: 'Canvas Photo Collage Maker & Poster Splitter',
  metaTitle: 'Free Canvas Photo Collage Maker & Poster Print Splitter | PhotoResizer',
  metaDescription: 'Create custom canvas photo collages and split posters into high-resolution multi-page prints. 100% free, private, and in-browser.',
  sections: [],
  faq: []
};

export function generateMetadata(): Metadata {
  return generateSeoMetadata(pageData, 'en');
}

export default function CanvasPhotoCollageMakerPage() {
  const faqSchema = pageData ? generateFAQSchema(pageData) : null;
  const breadcrumbSchema = pageData ? generateBreadcrumbSchema(pageData, 'en') : null;

  return (
    <div className="bg-[#FFFFFF] text-[#18181B] pb-16">
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

      {/* Hero Header */}
      <div className="py-12 md:py-16 border-b border-[#E4E4E7] bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-semibold mb-4 mx-auto">
            <Sparkles size={13} className="text-[#16A34A]" />
            <span>Free &amp; 100% Private In-Browser Tool</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-[1.15] mb-3">
            Canvas Photo Collage Maker
          </h1>

          <p className="text-base text-[#52525B] leading-relaxed max-w-2xl mx-auto mb-6">
            Design photo collages from your favorite memories or split images into poster-sized grid prints. 100% free with no server uploads.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link 
              href="#collage-maker"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold rounded-xl transition-colors text-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              Start Collage Maker
            </Link>
            <Link 
              href="#poster-splitter"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#18181B] font-semibold rounded-xl transition-colors border border-[#E4E4E7] text-sm"
            >
              Split into Poster Print
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8">
        <StickyToolNav />

        <div id="collage-maker" className="pt-4">
          <CollageMakerTool />
        </div>
        
        <div id="poster-splitter" className="pt-8">
          <PosterPrintTool />
        </div>

        {pageData.faq && pageData.faq.length > 0 && (
          <div className="max-w-3xl mx-auto mt-16">
            <FAQAccordion faq={pageData.faq} />
          </div>
        )}

        {/* Related Tools Section */}
        <section className="mt-16 border-t border-[#E4E4E7] pt-12">
          <h2 className="text-xl font-bold text-[#18181B] mb-6 text-center">Related Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <Link href="/" className="group flex flex-col p-5 bg-[#FFFFFF] rounded-2xl border border-[#E4E4E7] hover:border-[#BBF7D0] hover:bg-[#F0FDF4] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors">
              <h3 className="font-semibold text-base text-[#18181B] group-hover:text-[#15803D] transition-colors">Free Photo Resizer</h3>
              <p className="text-xs text-[#52525B] mt-1.5 flex-1">Resize images instantly without uploading to a server.</p>
              <div className="mt-3 text-xs font-semibold text-[#16A34A] flex items-center gap-1">
                <span>Use Tool</span>
                <ArrowRight size={12} />
              </div>
            </Link>
            <Link href="/passport-photo-maker" className="group flex flex-col p-5 bg-[#FFFFFF] rounded-2xl border border-[#E4E4E7] hover:border-[#BBF7D0] hover:bg-[#F0FDF4] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors">
              <h3 className="font-semibold text-base text-[#18181B] group-hover:text-[#15803D] transition-colors">Passport Photo Maker</h3>
              <p className="text-xs text-[#52525B] mt-1.5 flex-1">Create perfectly sized passport and ID photos for India, US &amp; UK.</p>
              <div className="mt-3 text-xs font-semibold text-[#16A34A] flex items-center gap-1">
                <span>Use Tool</span>
                <ArrowRight size={12} />
              </div>
            </Link>
            <Link href="/compress-image" className="group flex flex-col p-5 bg-[#FFFFFF] rounded-2xl border border-[#E4E4E7] hover:border-[#BBF7D0] hover:bg-[#F0FDF4] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors">
              <h3 className="font-semibold text-base text-[#18181B] group-hover:text-[#15803D] transition-colors">Photo Compressor</h3>
              <p className="text-xs text-[#52525B] mt-1.5 flex-1">Reduce image file size to exact KB limits.</p>
              <div className="mt-3 text-xs font-semibold text-[#16A34A] flex items-center gap-1">
                <span>Use Tool</span>
                <ArrowRight size={12} />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

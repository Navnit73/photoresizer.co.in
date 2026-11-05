import { use } from 'react';
import { notFound } from 'next/navigation';
import { enPages } from '../../../content/en-pages';
import { SeoPageRenderer } from '../../../components/seo/SeoPageRenderer';
import { generateSeoMetadata } from '../../../lib/seo';

export async function generateStaticParams() {
  return enPages
    .filter((page) => page.slug !== 'canvas-photo-collage-maker')
    .map((page) => ({
      slug: [page.slug],
    }));
}

type Params = Promise<{ slug: string[] }>;

/** Hand-picked related tools for pages whose tool type has too few siblings. */
const RELATED_BY_SLUG: Record<string, string[]> = {
  'pan-card-photo-resizer': [
    'signature-resizer',
    'passport-size-photo-maker',
    'photo-resizer',
    'compress-image',
    'reduce-photo-size-50kb',
    'voter-id-photo-size-reducer',
  ],
  'signature-resizer': [
    'pan-card-photo-resizer',
    'signature-resize-ibps',
    'resize-left-thumb-impression-ibps',
    'ibps-handwritten-declaration-resizer',
    'ssc-cgl-signature-resizer',
    'upsc-cse-signature-resizer',
  ],
};

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const pageIndex = enPages.findIndex(p => p.slug === slugPath);
  const page = enPages[pageIndex];

  if (!page) {
    return {};
  }

  return generateSeoMetadata(page, 'en');
}

export default function EnglishSeoPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const slugPath = slug.join('/');
  const page = enPages.find(p => p.slug === slugPath);

  if (!page) {
    notFound();
  }

  const curated = RELATED_BY_SLUG[page.slug];
  const relatedPages = (curated
    ? curated.map(s => enPages.find(p => p.slug === s)).filter((p): p is (typeof enPages)[number] => !!p)
    : enPages.filter(p => p.showTool === page.showTool && p.slug !== page.slug)
  )
    .slice(0, 8)
    .map(p => ({
      slug: p.slug,
      h1: p.h1,
      metaDescription: p.metaDescription,
    }));

  return <SeoPageRenderer page={page} lang="en" relatedPages={relatedPages} />;
}

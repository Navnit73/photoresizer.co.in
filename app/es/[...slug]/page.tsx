import { use } from 'react';
import { notFound } from 'next/navigation';
import { esPages } from '../../../content/es-pages';
import { SeoPageRenderer } from '../../../components/seo/SeoPageRenderer';
import { generateSeoMetadata } from '../../../lib/seo';

export async function generateStaticParams() {
  return esPages.map((page) => ({
    slug: [page.slug],
  }));
}

type Params = Promise<{ slug: string[] }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const pageIndex = esPages.findIndex(p => p.slug === slugPath);
  const page = esPages[pageIndex];

  if (!page) {
    return {};
  }

  return generateSeoMetadata(page, 'es', pageIndex);
}

export default function SpanishSeoPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const slugPath = slug.join('/');
  const page = esPages.find(p => p.slug === slugPath);

  if (!page) {
    notFound();
  }

  return <SeoPageRenderer page={page} lang="es" />;
}

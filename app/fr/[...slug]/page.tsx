import { use } from 'react';
import { notFound } from 'next/navigation';
import { frPages } from '../../../content/fr-pages';
import { SeoPageRenderer } from '../../../components/seo/SeoPageRenderer';
import { generateSeoMetadata } from '../../../lib/seo';

export async function generateStaticParams() {
  return frPages.map((page) => ({
    slug: [page.slug],
  }));
}

type Params = Promise<{ slug: string[] }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const pageIndex = frPages.findIndex(p => p.slug === slugPath);
  const page = frPages[pageIndex];

  if (!page) {
    return {};
  }

  return generateSeoMetadata(page, 'fr', pageIndex);
}

export default function FrenchSeoPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const slugPath = slug.join('/');
  const page = frPages.find(p => p.slug === slugPath);

  if (!page) {
    notFound();
  }

  return <SeoPageRenderer page={page} lang="fr" />;
}

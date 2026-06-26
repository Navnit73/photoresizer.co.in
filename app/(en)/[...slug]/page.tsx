import { use } from 'react';
import { notFound } from 'next/navigation';
import { enPages } from '../../../content/en-pages';
import { SeoPageRenderer } from '../../../components/seo/SeoPageRenderer';
import { generateSeoMetadata } from '../../../lib/seo';

export async function generateStaticParams() {
  return enPages.map((page) => ({
    slug: [page.slug],
  }));
}

type Params = Promise<{ slug: string[] }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const pageIndex = enPages.findIndex(p => p.slug === slugPath);
  const page = enPages[pageIndex];

  if (!page) {
    return {};
  }

  return generateSeoMetadata(page, 'en', pageIndex);
}

export default function EnglishSeoPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const slugPath = slug.join('/');
  const page = enPages.find(p => p.slug === slugPath);

  if (!page) {
    notFound();
  }

  return <SeoPageRenderer page={page} lang="en" />;
}

import { use } from 'react';
import { notFound } from 'next/navigation';
import { dePages } from '../../../content/de-pages';
import { SeoPageRenderer } from '../../../components/seo/SeoPageRenderer';
import { generateSeoMetadata } from '../../../lib/seo';

export async function generateStaticParams() {
  return dePages.map((page) => ({
    slug: [page.slug],
  }));
}

type Params = Promise<{ slug: string[] }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const pageIndex = dePages.findIndex(p => p.slug === slugPath);
  const page = dePages[pageIndex];

  if (!page) {
    return {};
  }

  return generateSeoMetadata(page, 'de', pageIndex);
}

export default function GermanSeoPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const slugPath = slug.join('/');
  const page = dePages.find(p => p.slug === slugPath);

  if (!page) {
    notFound();
  }

  return <SeoPageRenderer page={page} lang="de" />;
}

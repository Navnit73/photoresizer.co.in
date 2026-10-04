import { notFound } from 'next/navigation';
import { ptPages } from '../../../content/pt-pages';
import { SeoPageRenderer } from '../../../components/seo/SeoPageRenderer';
import { generateSeoMetadata } from '../../../lib/seo';

export async function generateStaticParams() {
  return ptPages.map((page) => ({
    slug: [page.slug],
  }));
}

type Params = Promise<{ slug: string[] }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const page = ptPages.find(p => p.slug === slugPath);

  if (!page) {
    return {};
  }

  return generateSeoMetadata(page, 'pt');
}

export default async function PortugueseSeoPage({ params }: { params: Params }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const page = ptPages.find(p => p.slug === slugPath);

  if (!page) {
    notFound();
  }

  const relatedPages = ptPages
    .filter(p => p.showTool === page.showTool && p.slug !== page.slug)
    .slice(0, 8)
    .map(p => ({
      slug: p.slug,
      h1: p.h1,
      metaDescription: p.metaDescription,
    }));

  return <SeoPageRenderer page={page} lang="pt" relatedPages={relatedPages} />;
}

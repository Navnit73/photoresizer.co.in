import { Metadata } from 'next';
import { SeoPage, Language, HreflangMap } from './types/seo';
import { enPages } from '../content/en-pages';
import { dePages } from '../content/de-pages';
import { frPages } from '../content/fr-pages';
import { esPages } from '../content/es-pages';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

export function getHreflangMap(pageIndex: number): HreflangMap {
  // Graceful fallback if a translation is missing
  const enUrl = enPages[pageIndex] ? `${baseUrl}/${enPages[pageIndex].slug}` : baseUrl;
  const deUrl = dePages[pageIndex] ? `${baseUrl}/de/${dePages[pageIndex].slug}` : `${baseUrl}/de`;
  const frUrl = frPages[pageIndex] ? `${baseUrl}/fr/${frPages[pageIndex].slug}` : `${baseUrl}/fr`;
  const esUrl = esPages[pageIndex] ? `${baseUrl}/es/${esPages[pageIndex].slug}` : `${baseUrl}/es`;

  return {
    'en': enUrl,
    'de': deUrl,
    'fr': frUrl,
    'es': esUrl,
  };
}

export function generateSeoMetadata(page: SeoPage, lang: Language, pageIndex: number): Metadata {
  const hreflangs = getHreflangMap(pageIndex);
  const currentUrl = hreflangs[lang];
  
  const languages: Record<string, string> = {};
  for (const [l, url] of Object.entries(hreflangs)) {
    languages[l] = url;
  }
  languages['x-default'] = hreflangs['en'];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: currentUrl,
      languages: languages,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: currentUrl,
      locale: lang,
      type: 'website',
      images: [
        {
          url: '/icon.svg',
          width: 800,
          height: 600,
          alt: page.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: ['/icon.svg'],
    }
  };
}

import { Metadata } from 'next';
import { SeoPage, Language, HreflangMap } from './types/seo';
import { enPages } from '../content/en-pages';
import { dePages } from '../content/de-pages';
import { frPages } from '../content/fr-pages';
import { esPages } from '../content/es-pages';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

export function getHreflangMap(page: SeoPage): HreflangMap {
  const key = page.translationKey;
  
  // Find matching pages by translationKey. If no key or no match, fallback to home URL.
  const enMatch = key ? enPages.find(p => p.translationKey === key) : null;
  const deMatch = key ? dePages.find(p => p.translationKey === key) : null;
  const frMatch = key ? frPages.find(p => p.translationKey === key) : null;
  const esMatch = key ? esPages.find(p => p.translationKey === key) : null;

  const enUrl = enMatch ? `${baseUrl}/${enMatch.slug}` : baseUrl;
  const deUrl = deMatch ? `${baseUrl}/de/${deMatch.slug}` : `${baseUrl}/de`;
  const frUrl = frMatch ? `${baseUrl}/fr/${frMatch.slug}` : `${baseUrl}/fr`;
  const esUrl = esMatch ? `${baseUrl}/es/${esMatch.slug}` : `${baseUrl}/es`;

  return {
    'en': enUrl,
    'de': deUrl,
    'fr': frUrl,
    'es': esUrl,
  };
}

export function generateSeoMetadata(page: SeoPage, lang: Language): Metadata {
  const hreflangs = getHreflangMap(page);
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

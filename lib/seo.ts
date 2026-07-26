import { Metadata } from 'next';
import { SeoPage, Language, HreflangMap } from './types/seo';
import { enPages } from '../content/en-pages';
import { dePages } from '../content/de-pages';
import { frPages } from '../content/fr-pages';
import { esPages } from '../content/es-pages';
import { ptPages } from '../content/pt-pages';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

export function getHreflangMap(page: SeoPage): HreflangMap {
  const key = page.translationKey;
  const map: HreflangMap = {};
  
  if (!key) {
    return map;
  }

  const enMatch = enPages.find(p => p.translationKey === key);
  const deMatch = dePages.find(p => p.translationKey === key);
  const frMatch = frPages.find(p => p.translationKey === key);
  const esMatch = esPages.find(p => p.translationKey === key);
  const ptMatch = ptPages.find(p => p.translationKey === key);

  if (enMatch) map['en'] = `${baseUrl}/${enMatch.slug}`;
  if (deMatch) map['de'] = `${baseUrl}/de/${deMatch.slug}`;
  if (frMatch) map['fr'] = `${baseUrl}/fr/${frMatch.slug}`;
  if (esMatch) map['es'] = `${baseUrl}/es/${esMatch.slug}`;
  if (ptMatch) map['pt'] = `${baseUrl}/pt/${ptMatch.slug}`;

  return map;
}

export function generateSeoMetadata(page: SeoPage, lang: Language): Metadata {
  const hreflangs = getHreflangMap(page);
  const currentUrl = hreflangs[lang] || (lang === 'en' ? `${baseUrl}/${page.slug}` : `${baseUrl}/${lang}/${page.slug}`);
  
  const languages: Record<string, string> = {};
  for (const [l, url] of Object.entries(hreflangs)) {
    languages[l] = url;
  }
  if (hreflangs['en']) {
    languages['x-default'] = hreflangs['en'];
  } else if (currentUrl) {
    languages['x-default'] = currentUrl;
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: currentUrl,
      languages: Object.keys(languages).length > 0 ? languages : undefined,
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

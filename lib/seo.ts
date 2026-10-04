import { Metadata } from 'next';
import { SeoPage, Language, HreflangMap } from './types/seo';

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

export const ROOT_HREFLANGS: HreflangMap = {
  'en-IN': `${BASE_URL}/`,
  'x-default': `${BASE_URL}/`,
};

export function getRegionalHreflangMap(slug: string = '', _lang?: Language): HreflangMap {
  const cleanSlug = slug.trim().replace(/^\/+|\/+$/g, '');

  if (!cleanSlug) {
    return { ...ROOT_HREFLANGS };
  }

  const canonicalPageUrl = `${BASE_URL}/${cleanSlug}`;
  return {
    'en-IN': canonicalPageUrl,
    'x-default': canonicalPageUrl,
  };
}

export function getHreflangMap(page: SeoPage, lang: Language = 'en-in'): HreflangMap {
  return getRegionalHreflangMap(page.slug, lang);
}

export function generateSeoMetadata(page: SeoPage, lang: Language = 'en-in'): Metadata {
  const hreflangs = getHreflangMap(page, lang);
  const cleanSlug = page.slug ? page.slug.trim().replace(/^\/+|\/+$/g, '') : '';
  const currentUrl = cleanSlug ? `${BASE_URL}/${cleanSlug}` : `${BASE_URL}/`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: currentUrl,
      languages: hreflangs,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: currentUrl,
      siteName: 'PhotoResizer',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: page.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

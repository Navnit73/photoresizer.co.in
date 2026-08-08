import { Metadata } from 'next';
import { SeoPage, Language, HreflangMap } from './types/seo';
import { enPages } from '../content/en-pages';
import { dePages } from '../content/de-pages';
import { frPages } from '../content/fr-pages';
import { esPages } from '../content/es-pages';
import { ptPages } from '../content/pt-pages';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

const PRIMARY_TRANSLATION_MAP: Record<string, Partial<Record<Language, string>>> = {
  'photo-resizer': { en: 'photo-resizer', de: 'foto-verkleinern', fr: 'redimensionner-photo', es: 'redimensionar-foto', pt: 'foto-enem-online-gratis' },
  'passport-photo-maker': { en: 'passport-photo-maker', de: 'passfoto-ersteller', fr: 'photo-identite-en-ligne', es: 'creador-foto-pasaporte' },
  'compress-image': { en: 'compress-image', de: 'bild-komprimieren', fr: 'compresser-photo', pt: 'comprimir-foto' },
  'remove-background': { en: 'remove-background', de: 'hintergrund-entfernen' },
  'how-to-use': { en: 'how-to-use', de: 'anleitung', es: 'como-usar' },
  'contact': { en: 'contact', de: 'kontakt', fr: 'contact', es: 'contacto' },
  'terms': { en: 'terms', de: 'agb', fr: 'conditions', es: 'terminos' },
  'privacy': { en: 'privacy', de: 'datenschutz', fr: 'confidentialite', es: 'privacidad' },
  'crop-image': { de: 'bild-zuschneiden', pt: 'cortar-imagem' }
};

export function getHreflangMap(page: SeoPage, lang: Language = 'en'): HreflangMap {
  const map: HreflangMap = {};
  const pageSlug = page.slug;

  // 1. Current page URL is ALWAYS the self-referencing URL for current language
  if (lang === 'en') {
    map['en'] = pageSlug ? `${baseUrl}/${pageSlug}` : `${baseUrl}`;
  } else {
    map[lang] = pageSlug ? `${baseUrl}/${lang}/${pageSlug}` : `${baseUrl}/${lang}`;
  }

  // 2. Cross-language lookup ONLY if page is a primary translation page
  const key = page.translationKey;
  if (key && PRIMARY_TRANSLATION_MAP[key]) {
    const mapping = PRIMARY_TRANSLATION_MAP[key];
    if (mapping[lang] === pageSlug) {
      if (mapping.en) map['en'] = mapping.en ? `${baseUrl}/${mapping.en}` : `${baseUrl}`;
      if (mapping.de) map['de'] = mapping.de ? `${baseUrl}/de/${mapping.de}` : `${baseUrl}/de`;
      if (mapping.fr) map['fr'] = mapping.fr ? `${baseUrl}/fr/${mapping.fr}` : `${baseUrl}/fr`;
      if (mapping.es) map['es'] = mapping.es ? `${baseUrl}/es/${mapping.es}` : `${baseUrl}/es`;
      if (mapping.pt) map['pt'] = mapping.pt ? `${baseUrl}/pt/${mapping.pt}` : `${baseUrl}/pt`;
    }
  }

  // 3. Set x-default to English version if available, otherwise current language URL
  if (map['en']) {
    map['x-default'] = map['en'];
  } else {
    map['x-default'] = map[lang];
  }

  return map;
}

export function generateSeoMetadata(page: SeoPage, lang: Language): Metadata {
  const hreflangs = getHreflangMap(page, lang);
  const currentUrl = lang === 'en'
    ? (page.slug ? `${baseUrl}/${page.slug}` : `${baseUrl}`)
    : (page.slug ? `${baseUrl}/${lang}/${page.slug}` : `${baseUrl}/${lang}`);
  
  const languages: Record<string, string> = { ...hreflangs };

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


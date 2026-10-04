import { SeoPage, Language } from './types/seo';
import { BASE_URL } from './seo';

export function generateFAQSchema(page: SeoPage) {
  if (!page.faq || page.faq.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

const homeNames: Record<Language, string> = {
  en: 'Home',
  'en-in': 'Home',
  hi: 'होम',
};

export function generateBreadcrumbSchema(page: SeoPage, lang: Language = 'en-in') {
  const cleanSlug = page.slug ? page.slug.trim().replace(/^\/+|\/+$/g, '') : '';
  const homeUrl = `${BASE_URL}/`;
  const pageUrl = cleanSlug ? `${BASE_URL}/${cleanSlug}` : homeUrl;

  const items: Array<{ '@type': string; position: number; name: string; item: string }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: homeNames[lang] || 'Home',
      item: homeUrl,
    },
  ];

  if (cleanSlug && cleanSlug !== 'tools') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Tools',
      item: `${BASE_URL}/tools`,
    });
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: page.h1,
      item: pageUrl,
    });
  } else if (cleanSlug === 'tools') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Tools',
      item: `${BASE_URL}/tools`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function generateWebPageSchema(page: SeoPage, lang: Language = 'en-in') {
  const cleanSlug = page.slug ? page.slug.trim().replace(/^\/+|\/+$/g, '') : '';
  const pageUrl = cleanSlug ? `${BASE_URL}/${cleanSlug}` : `${BASE_URL}/`;
  const isApp = page.structuredDataOverrides?.webPageType === 'WebApplication' || Boolean(page.showTool);
  const schemaLang = lang === 'hi' ? 'hi' : 'en-IN';

  if (isApp) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      '@id': `${pageUrl}#webapp`,
      name: page.h1 || page.metaTitle,
      url: pageUrl,
      description: page.metaDescription,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any (Web Browser)',
      inLanguage: schemaLang,
      browserRequirements: 'Requires HTML5 Canvas and JavaScript support.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PhotoResizer',
        url: BASE_URL,
      },
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl,
    inLanguage: schemaLang,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: 'PhotoResizer',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PhotoResizer',
      url: BASE_URL,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'PhotoResizer',
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.svg`,
    description: 'Free, secure, and private browser-based image resizing and compression platform.',
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'PhotoResizer',
    url: `${BASE_URL}/`,
    description: 'Free online photo resizer, signature compressor, and exam passport photo maker.',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/tools?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

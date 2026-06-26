import { SeoPage, Language } from './types/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

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

export function generateBreadcrumbSchema(page: SeoPage, lang: Language) {
  const actualPrefix = lang === 'en' ? '' : `/${lang}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}${actualPrefix}`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.h1,
        item: `${baseUrl}${actualPrefix}/${page.slug}`
      }
    ]
  };
}

export function generateWebPageSchema(page: SeoPage, lang: Language) {
  const type = page.structuredDataOverrides?.webPageType || 'WebPage';
  const orgName = page.structuredDataOverrides?.organizationName || 'photoresizer';
  
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: page.metaTitle,
    description: page.metaDescription,
    publisher: {
      '@type': 'Organization',
      name: orgName,
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PhotoResizerAI',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: []
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PhotoResizerAI',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/tools?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'photoresizer',
    url: baseUrl,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires HTML5 and WebAssembly support (Chrome, Firefox, Safari, Edge).',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'photoresizer',
    url: baseUrl,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };
}

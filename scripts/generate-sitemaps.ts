import fs from 'fs';
import path from 'path';
import { enPages } from '../content/en-pages';
import { dePages } from '../content/de-pages';
import { frPages } from '../content/fr-pages';
import { esPages } from '../content/es-pages';
import { programmaticPages } from '../content/programmatic-pages';
import { getHreflangMap } from '../lib/seo';
import { SeoPage } from '../lib/types/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

type UrlObj = {
  url: string;
  changeFrequency: string;
  priority: number;
  hreflangs?: Record<string, string>;
};

function generateXml(urlObjs: UrlObj[]) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  for (const obj of urlObjs) {
    xml += `  <url>\n`;
    xml += `    <loc>${obj.url}</loc>\n`;
    xml += `    <changefreq>${obj.changeFrequency}</changefreq>\n`;
    xml += `    <priority>${obj.priority}</priority>\n`;
    if (obj.hreflangs) {
      for (const [lang, href] of Object.entries(obj.hreflangs)) {
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>\n`;
      }
      // Add x-default pointing to English
      if (obj.hreflangs['en']) {
         xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${obj.hreflangs['en']}"/>\n`;
      }
    }
    xml += `  </url>\n`;
  }
  xml += `</urlset>`;
  return xml;
}

const rootHreflangs = {
  en: `${baseUrl}/`,
  de: `${baseUrl}/de`,
  fr: `${baseUrl}/fr`,
  es: `${baseUrl}/es`,
};

async function main() {
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate EN (main)
  const enUrls: UrlObj[] = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1, hreflangs: rootHreflangs },
    ...enPages.map((p) => ({
      url: `${baseUrl}/${p.slug}`,
      changeFrequency: 'weekly',
      priority: 0.8,
      hreflangs: getHreflangMap(p)
    })),
    ...programmaticPages.map((p) => ({
      url: `${baseUrl}/${p.slug}`,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  ];
  fs.writeFileSync(path.join(publicDir, 'sitemap_main.xml'), generateXml(enUrls));

  // Generate DE
  const deUrls: UrlObj[] = [
    { url: `${baseUrl}/de`, changeFrequency: 'weekly', priority: 0.9, hreflangs: rootHreflangs },
    ...dePages.map((p) => ({
      url: `${baseUrl}/de/${p.slug}`,
      changeFrequency: 'weekly',
      priority: 0.8,
      hreflangs: getHreflangMap(p)
    })),
  ];
  fs.writeFileSync(path.join(publicDir, 'sitemap_de.xml'), generateXml(deUrls));

  // Generate FR
  const frUrls: UrlObj[] = [
    { url: `${baseUrl}/fr`, changeFrequency: 'weekly', priority: 0.9, hreflangs: rootHreflangs },
    ...frPages.map((p) => ({
      url: `${baseUrl}/fr/${p.slug}`,
      changeFrequency: 'weekly',
      priority: 0.8,
      hreflangs: getHreflangMap(p)
    })),
  ];
  fs.writeFileSync(path.join(publicDir, 'sitemap_fr.xml'), generateXml(frUrls));

  // Generate ES
  const esUrls: UrlObj[] = [
    { url: `${baseUrl}/es`, changeFrequency: 'weekly', priority: 0.9, hreflangs: rootHreflangs },
    ...esPages.map((p) => ({
      url: `${baseUrl}/es/${p.slug}`,
      changeFrequency: 'weekly',
      priority: 0.8,
      hreflangs: getHreflangMap(p)
    })),
  ];
  fs.writeFileSync(path.join(publicDir, 'sitemap_es.xml'), generateXml(esUrls));

  // Generate robots.txt
  const robotsTxt = `User-Agent: *\nAllow: /\nDisallow: /private/\nDisallow: /api/\n\nSitemap: ${baseUrl}/sitemap_main.xml\nSitemap: ${baseUrl}/sitemap_de.xml\nSitemap: ${baseUrl}/sitemap_fr.xml\nSitemap: ${baseUrl}/sitemap_es.xml\n`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

  console.log('Successfully generated sitemaps and robots.txt in public/');
}

main();

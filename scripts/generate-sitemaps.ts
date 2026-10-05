import fs from 'fs';
import path from 'path';
import { enPages } from '../content/en-pages';
import { getRegionalHreflangMap, ROOT_HREFLANGS, BASE_URL } from '../lib/seo';

const todayIso = new Date().toISOString().split('T')[0];

type UrlObj = {
  url: string;
  changeFrequency: string;
  priority: number;
  lastmod?: string;
  hreflangs?: Record<string, string>;
};

function getExistingLastmodMap(sitemapPath: string): Map<string, string> {
  const map = new Map<string, string>();
  if (!fs.existsSync(sitemapPath)) return map;

  try {
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    const urlRegex = /<url>([\s\S]*?)<\/url>/g;
    let match: RegExpExecArray | null;
    while ((match = urlRegex.exec(content)) !== null) {
      const block = match[1];
      const locMatch = block.match(/<loc>(.*?)<\/loc>/);
      const lastmodMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);
      if (locMatch && lastmodMatch) {
        map.set(locMatch[1].trim(), lastmodMatch[1].trim());
      }
    }
  } catch (err) {
    console.warn('Could not read existing sitemap_main.xml for lastmod preservation:', err);
  }

  return map;
}

function generateXml(urlObjs: UrlObj[]) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  for (const obj of urlObjs) {
    xml += `  <url>\n`;
    xml += `    <loc>${obj.url}</loc>\n`;
    xml += `    <lastmod>${obj.lastmod || todayIso}</lastmod>\n`;
    xml += `    <changefreq>${obj.changeFrequency}</changefreq>\n`;
    xml += `    <priority>${obj.priority.toFixed(1)}</priority>\n`;
    if (obj.hreflangs) {
      for (const [lang, href] of Object.entries(obj.hreflangs)) {
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>\n`;
      }
    }
    xml += `  </url>\n`;
  }
  xml += `</urlset>`;
  return xml;
}

async function main() {
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapMainPath = path.join(publicDir, 'sitemap_main.xml');
  const existingLastmodMap = getExistingLastmodMap(sitemapMainPath);

  // Remove obsolete dead sitemaps if present
  const obsoleteSitemaps = ['sitemap_es.xml', 'sitemap_fr.xml', 'sitemap_de.xml', 'sitemap_pt.xml'];
  for (const oldFile of obsoleteSitemaps) {
    const fullOldPath = path.join(publicDir, oldFile);
    if (fs.existsSync(fullOldPath)) {
      fs.unlinkSync(fullOldPath);
      console.log(`Removed obsolete sitemap: ${oldFile}`);
    }
  }

  // Deduplicate all URLs by clean canonical URL
  const seenUrls = new Set<string>();
  const allUrls: UrlObj[] = [];

  const addUrl = (entry: UrlObj) => {
    if (!seenUrls.has(entry.url)) {
      seenUrls.add(entry.url);
      allUrls.push(entry);
    }
  };

  // 1. Root Homepage
  const rootUrl = `${BASE_URL}/`;
  addUrl({
    url: rootUrl,
    changeFrequency: 'daily',
    priority: 1.0,
    lastmod: existingLastmodMap.get(rootUrl) || todayIso,
    hreflangs: ROOT_HREFLANGS,
  });

  // 2. Main Tools Listing Page
  const toolsUrl = `${BASE_URL}/tools`;
  addUrl({
    url: toolsUrl,
    changeFrequency: 'weekly',
    priority: 0.9,
    lastmod: existingLastmodMap.get(toolsUrl) || todayIso,
    hreflangs: getRegionalHreflangMap('tools'),
  });

  // 3. All Tool / Exam / Utility Pages from enPages (which includes all content + programmatic pages)
  for (const p of enPages) {
    const cleanSlug = p.slug.trim().replace(/^\/+|\/+$/g, '');
    if (!cleanSlug) continue;

    const pageUrl = `${BASE_URL}/${cleanSlug}`;
    addUrl({
      url: pageUrl,
      changeFrequency: 'weekly',
      priority: 0.8,
      lastmod: p.lastmod || existingLastmodMap.get(pageUrl) || todayIso,
      hreflangs: getRegionalHreflangMap(cleanSlug, 'en'),
    });
  }

  // Generate sitemap_main.xml with all canonical URLs
  fs.writeFileSync(sitemapMainPath, generateXml(allUrls));

  // Determine latest lastmod for index sitemap
  const latestLastmod =
    allUrls
      .map((u) => u.lastmod)
      .filter((d): d is string => Boolean(d))
      .sort()
      .pop() || todayIso;

  // Generate Master sitemap.xml Index
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <sitemap>\n` +
    `    <loc>${BASE_URL}/sitemap_main.xml</loc>\n` +
    `    <lastmod>${latestLastmod}</lastmod>\n` +
    `  </sitemap>\n` +
    `</sitemapindex>\n`;
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndexXml);

  // Generate robots.txt
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Host
Host: photoresizer.co.in

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

  console.log(`Successfully generated clean sitemaps (${allUrls.length} URLs) and robots.txt in public/`);
}

main();


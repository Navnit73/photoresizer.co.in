import fs from 'fs';
import path from 'path';
import { BASE_URL } from '../lib/seo';

const INDEXNOW_KEY = '87c7eb880c3d48abb5c0816bdff809c4';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';
const MAX_URLS_PER_REQUEST = 10000;

function getSitemapUrls(sitemapPath: string): string[] {
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urls: string[] = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = locRegex.exec(content)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

async function submit(urlList: string[]) {
  const host = new URL(BASE_URL).host;
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
    signal: AbortSignal.timeout(15000),
  });
  const body = await res.text();
  return { status: res.status, body };
}

async function main() {
  if (process.env.INDEXNOW_SKIP === '1') {
    console.log('IndexNow: skipped (INDEXNOW_SKIP=1)');
    return;
  }

  const sitemapPath = path.join(__dirname, '../public/sitemap_main.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.warn('IndexNow: public/sitemap_main.xml not found, nothing to submit');
    return;
  }

  const urls = getSitemapUrls(sitemapPath);
  if (urls.length === 0) {
    console.warn('IndexNow: no URLs found in sitemap_main.xml');
    return;
  }

  for (let i = 0; i < urls.length; i += MAX_URLS_PER_REQUEST) {
    const batch = urls.slice(i, i + MAX_URLS_PER_REQUEST);
    const { status, body } = await submit(batch);
    if (status === 200 || status === 202) {
      console.log(`IndexNow: submitted ${batch.length} URLs (HTTP ${status})`);
    } else {
      console.warn(`IndexNow: submission failed (HTTP ${status}) ${body}`);
    }
  }
}

// Never fail the build because of IndexNow
main().catch((err) => {
  console.warn('IndexNow: submission error:', err);
});

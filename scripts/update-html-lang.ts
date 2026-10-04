import fs from 'fs';
import path from 'path';

function minifyHtmlFile(filePath: string, lang?: string) {
  if (!fs.existsSync(filePath) || !filePath.endsWith('.html')) return;

  const originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;

  // 1. Update lang attribute if language specified
  if (lang && content.includes('lang="en"')) {
    content = content.replace(/lang="en"/g, `lang="${lang}"`);
  }

  // 2. Minify <script type="application/ld+json">...</script> blocks
  content = content.replace(/<script([^>]*type=[\"']application\/ld\+json[\"'][^>]*)>([\s\S]*?)<\/script>/gi, (match, attrs, innerContent) => {
    try {
      const minifiedJson = JSON.stringify(JSON.parse(innerContent.trim()));
      return `<script${attrs}>${minifiedJson}</script>`;
    } catch {
      return match;
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function processDirectory(directory: string, lang?: string) {
  if (!fs.existsSync(directory)) return;

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath, lang);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      minifyHtmlFile(fullPath, lang);
    }
  }
}

function main() {
  const outDir = path.join(process.cwd(), 'out');
  
  if (!fs.existsSync(outDir)) {
    console.warn("Could not find out/ directory. Did you build the project first?");
    return;
  }

  console.log("Minifying inline JSON-LD scripts and ensuring lang='en-IN' across generated HTML...");

  // Process all HTML files across out/
  processDirectory(outDir, 'en-IN');

  console.log("Successfully minified HTML scripts and ensured lang='en-IN'.");
}

main();

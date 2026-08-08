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
    } catch (e) {
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

  console.log("Minifying inline scripts and updating lang attributes in generated HTML...");

  // Process all HTML files in root out/
  processDirectory(outDir);

  // Update language attributes for specific localized routes
  processDirectory(path.join(outDir, 'de'), 'de');
  minifyHtmlFile(path.join(outDir, 'de.html'), 'de');
  
  processDirectory(path.join(outDir, 'fr'), 'fr');
  minifyHtmlFile(path.join(outDir, 'fr.html'), 'fr');
  
  processDirectory(path.join(outDir, 'es'), 'es');
  minifyHtmlFile(path.join(outDir, 'es.html'), 'es');

  processDirectory(path.join(outDir, 'pt'), 'pt');
  minifyHtmlFile(path.join(outDir, 'pt.html'), 'pt');

  console.log("Successfully minified HTML scripts and updated lang attributes.");
}

main();

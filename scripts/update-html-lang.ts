import fs from 'fs';
import path from 'path';

function updateLang(directory: string, lang: string) {
  if (!fs.existsSync(directory)) {
    console.log(`Directory not found: ${directory}, skipping.`);
    return;
  }

  const files = fs.readdirSync(directory, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      updateLang(fullPath, lang);
    } else if (file.isFile() && fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Simple string replacement: replace lang="en" with lang="de"
      if (content.includes('lang="en"')) {
        content = content.replace(/lang="en"/g, `lang="${lang}"`);
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

function updateLangFile(filePath: string, lang: string) {
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile() && filePath.endsWith('.html')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('lang="en"')) {
      content = content.replace(/lang="en"/g, `lang="${lang}"`);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

function main() {
  const outDir = path.join(process.cwd(), 'out');
  
  if (!fs.existsSync(outDir)) {
    console.warn("Could not find out/ directory. Did you build the project first?");
    return;
  }

  console.log("Updating lang attributes in generated HTML...");

  // Update DE
  updateLang(path.join(outDir, 'de'), 'de');
  updateLangFile(path.join(outDir, 'de.html'), 'de');
  
  // Update FR
  updateLang(path.join(outDir, 'fr'), 'fr');
  updateLangFile(path.join(outDir, 'fr.html'), 'fr');
  
  // Update ES
  updateLang(path.join(outDir, 'es'), 'es');
  updateLangFile(path.join(outDir, 'es.html'), 'es');

  console.log("Successfully updated lang attributes.");
}

main();

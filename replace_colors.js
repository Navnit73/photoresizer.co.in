const fs = require('fs');
const files = [
  'app/(en)/page.tsx',
  'app/(en)/tools/page.tsx',
  'app/(en)/canvas-photo-collage-maker/page.tsx',
  'components/seo/SeoPageRenderer.tsx',
  'components/seo/FAQ.tsx',
  'components/seo/SeoSection.tsx',
  'components/seo/Breadcrumb.tsx',
  'content/en-pages.ts',
  'content/de-pages.ts',
  'content/fr-pages.ts',
  'content/es-pages.ts',
  'scripts/generate-missing-pages.ts'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the gradients first
  content = content.replace(/from-indigo-600 via-violet-600 to-purple-600/g, 'from-blue-600 via-sky-500 to-cyan-500');
  content = content.replace(/from-indigo-400 via-violet-400 to-purple-400/g, 'from-blue-400 via-sky-400 to-cyan-400');
  content = content.replace(/from-indigo-(\S+) to-violet-(\S+)/g, 'from-blue-$1 to-sky-$2');
  content = content.replace(/hover:from-indigo-(\S+) hover:to-violet-(\S+)/g, 'hover:from-blue-$1 hover:to-sky-$2');
  
  // Replace standalone classes
  content = content.replace(/text-indigo/g, 'text-blue');
  content = content.replace(/bg-indigo/g, 'bg-blue');
  content = content.replace(/border-indigo/g, 'border-blue');
  content = content.replace(/shadow-indigo/g, 'shadow-blue');
  content = content.replace(/ring-indigo/g, 'ring-blue');
  
  fs.writeFileSync(file, content);
});
console.log('done');

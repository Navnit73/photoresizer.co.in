import fs from 'fs';
import path from 'path';

// Generate 55 pages to hit 100+ total
const newPagesData = [
  // Image Resize & KB Reduction variations
  ...[15, 25, 30, 40, 60, 75, 80, 90, 120, 150, 250, 300, 400, 500, 1000].map(kb => ({
    slug: `resize-image-to-${kb}kb`,
    title: `Resize Image to ${kb}KB Online Free — Fast & Private`,
    desc: `Easily resize your image to exactly ${kb}KB online. Free, secure, and private browser-based compression tool. No uploads required.`,
    h1: `Resize Image to ${kb}KB`,
    tool: 'photo-editor'
  })),
  
  // Image dimension specific
  ...['1920x1080', '1280x720', '1080x1080', '800x600', '1024x768', '256x256'].map(dim => ({
    slug: `resize-image-to-${dim}`,
    title: `Resize Image to ${dim} Pixels Free Online`,
    desc: `Easily resize your image to exactly ${dim} pixels online. Maintain quality with our free, secure, and private browser-based tool.`,
    h1: `Resize Image to ${dim}`,
    tool: 'photo-editor'
  })),

  // Crop Image variations
  { slug: "crop-image", title: "Crop Image Online Free — Fast Photo Cropper", desc: "Easily crop images and photos online. Free, fast, and private image cropper. No uploads required.", h1: "Crop Image Online Free", tool: "photo-editor" },
  { slug: "crop-photo", title: "Crop Photo Online — Free Picture Cropping Tool", desc: "Crop photos easily in your browser. Trim borders, focus on subjects, and export instantly for free.", h1: "Crop Photo Online", tool: "photo-editor" },
  { slug: "crop-picture", title: "Crop Picture Online Free", desc: "Quickly crop pictures online without losing quality. 100% private and secure browser-based tool.", h1: "Crop Picture Online", tool: "photo-editor" },
  { slug: "crop-image-to-circle", title: "Crop Image to Circle Online Free", desc: "Crop your image into a perfect circle for profile pictures and avatars. Fast, free, and completely private.", h1: "Crop Image to Circle", tool: "photo-editor" },
  
  // Background Remover variations
  { slug: "remove-bg", title: "Remove BG Online Free — AI Background Eraser", desc: "Remove bg from images instantly using our free AI background eraser. 100% private processing in your browser.", h1: "Remove BG Online Free", tool: "bg-remover" },
  { slug: "transparent-background-maker", title: "Transparent Background Maker — Make Image Transparent", desc: "Make any image background transparent online for free. Instantly remove backgrounds securely in your browser.", h1: "Transparent Background Maker", tool: "bg-remover" },
  { slug: "cut-out-image", title: "Cut Out Image Online Free", desc: "Cut out subjects from images instantly with our AI cutout tool. Fast, free, and secure.", h1: "Cut Out Image Online", tool: "bg-remover" },
  { slug: "white-background-maker", title: "White Background Maker for Photos", desc: "Add a solid white background to any photo instantly. Perfect for e-commerce, ID photos, and passports.", h1: "White Background Maker", tool: "bg-remover" },

  // Passport & ID variations
  ...['Canada', 'Australia', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'South-Africa', 'Spain', 'Italy'].map(country => ({
    slug: `passport-photo-maker-${country.toLowerCase()}`,
    title: `${country} Passport Photo Maker Online Free`,
    desc: `Create an official ${country} passport photo online for free. Automatically crops to standard government dimensions. 100% private.`,
    h1: `${country} Passport Photo Maker`,
    tool: 'passport-maker'
  })),

  // Compress Image variations
  { slug: "compress-image", title: "Compress Image Online Free — No Quality Loss", desc: "Compress images online without losing quality. Fast, free, and secure. Your photos never leave your device.", h1: "Compress Image Online Free", tool: "photo-editor" },
  { slug: "compress-photo", title: "Compress Photo Free Online Tool", desc: "Reduce photo file sizes instantly. Compress photos securely in your browser with no file uploads.", h1: "Compress Photo Online", tool: "photo-editor" },
  { slug: "compress-jpeg", title: "Compress JPEG Online Free", desc: "Easily compress JPEG images to smaller sizes. Perfect for web optimization and email attachments.", h1: "Compress JPEG Online", tool: "photo-editor" },
  { slug: "compress-png", title: "Compress PNG Online Free", desc: "Reduce PNG file sizes while retaining transparency and quality. Fast, free browser-based compression.", h1: "Compress PNG Online", tool: "photo-editor" }
];

const newPagesString = newPagesData.map(page => `
  {
    slug: "${page.slug}",
    metaTitle: "${page.title}",
    metaDescription: "${page.desc}",
    h1: "${page.h1}",
    showTool: "${page.tool}",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle: "Instantly ${page.h1.toLowerCase()} with our free, secure, and private browser-based tool. No uploads required.",
    sections: [
      {
        heading: "How to ${page.h1}",
        content: \`
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Welcome to our free online tool to <strong>\${"${page.h1.toLowerCase()}"}</strong>. You can process your images instantly, directly in your web browser. This means unparalleled speed and complete privacy—your files are never uploaded to any remote server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">100% Private</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">All processing happens inside your browser. Your photos never touch our servers.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Instant Results</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Process images in under a second. No waiting for uploads or server queues.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">High Quality</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Export crystal clear images without any watermarks or hidden fees.</p>
    </div>
  </div>
</div>\`
      }
    ],
    faq: [
      {
        question: "Is this tool completely free to use?",
        answer: "Yes, our online tool is 100% free with no hidden charges, watermarks, or signup requirements."
      },
      {
        question: "Are my photos uploaded to a server?",
        answer: "Never. All image processing happens locally within your web browser using HTML5 Canvas and WebAssembly. Your photos never leave your device."
      },
      {
        question: "What image formats are supported?",
        answer: "We support all standard formats including JPG, JPEG, PNG, WEBP, and GIF."
      }
    ]
  }`).join(",\n");

const filePath = path.join(process.cwd(), 'content/en-pages.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the closing array bracket with the new items
content = content.replace(/\];\s*$/, '  ,' + newPagesString + '\n];\n');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully appended 50+ new SEO landing pages to en-pages.ts');

import { SeoPage } from "../lib/types/seo";
import { programmaticPages } from "./programmatic-pages";

export const enPages: SeoPage[] = [
  // ─────────────────────────────────────────────
  // HOMEPAGE / PHOTO RESIZER
  // ─────────────────────────────────────────────
  {
    slug: "photo-resizer",
    metaTitle: "Free Online Photo Resizer — Resize Images Instantly, No Upload",
    metaDescription:
      "Resize photos online free in seconds. Change dimensions, reduce file size, maintain quality. Browser-based — your images never leave your device. No signup required.",
    h1: "Free Online Photo Resizer",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize any photo instantly — change dimensions, reduce file size, and keep quality sharp. 100% free, 100% private.",
    sections: [
      {
        heading: "Why Our Photo Resizer Stands Apart",
        content: `
<div class="space-y-8 not-prose">

  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Whether you need to shrink a photo for a job application portal, resize a picture for social media, or reduce file size before emailing — our free online photo resizer handles it all in seconds. No account. No watermark. No server upload. Just fast, private, browser-based image resizing that works on any device.
  </p>

  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">100% Private</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">All processing happens inside your browser. Your photos never touch our servers — not even for a millisecond.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Instant Results</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Resize in under a second. No waiting for uploads, no queues, no slow server-side processing.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">All Formats</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Supports JPG, JPEG, PNG, GIF, WEBP, AVIF — resize and convert between formats in one step.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">What You Can Do With Our Photo Resizer</h3>
    </div>
    <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
      <ul class="p-6 space-y-3">
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Resize photo to exact pixel dimensions (width × height)</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Reduce file size to a target KB or MB</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Resize image in centimeters with DPI control</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Lock aspect ratio to avoid distortion</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Convert between JPG, PNG, WEBP, GIF formats</li>
      </ul>
      <ul class="p-6 space-y-3">
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Resize for Instagram, Twitter, Facebook in one click</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Make passport and ID photos with correct dimensions</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Rotate, flip, and apply basic filters</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Adjust quality slider for fine-tuned compression</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Preview before/after — download with zero watermark</li>
      </ul>
    </div>
  </div>

  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize a Photo — 3 Simple Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Your Photo</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400">Drag and drop or click to select. Supports JPG, PNG, GIF, WEBP up to 50MB.</p>
        </div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set Your Options</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400">Enter target dimensions, pick a preset, or set a KB target. Choose output format.</p>
        </div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download Instantly</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400">Click Download. Your resized photo saves directly to your device — no signup needed.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
    <h3 class="text-lg font-bold text-amber-900 dark:text-amber-400 mb-3">Common Photo Resizing Use Cases</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📋</span><span><strong>Government Forms:</strong> UPSC, SSC, bank applications require photos under 50KB or 100KB</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📱</span><span><strong>Social Media:</strong> Instagram, Twitter, Facebook each have specific dimension requirements</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🛂</span><span><strong>Passport & Visa:</strong> Official documents need exact pixel dimensions and file size</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">💼</span><span><strong>Job Applications:</strong> Most HR portals cap profile photos at 100KB–200KB</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🌐</span><span><strong>Web & Blogs:</strong> Optimized images load faster and improve Core Web Vitals scores</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📧</span><span><strong>Email Attachments:</strong> Reduce large photos before sending to avoid bounced emails</span></div>
    </div>
  </div>

  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Supported File Formats</h3>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700">
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Format</th>
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Input</th>
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Output</th>
            <th class="text-left py-2 font-semibold text-slate-700 dark:text-slate-300">Best For</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">JPG / JPEG</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 text-slate-500 dark:text-slate-400">Photos, small file size</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">PNG</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 text-slate-500 dark:text-slate-400">Graphics, transparency</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">WEBP</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 text-slate-500 dark:text-slate-400">Web images, best compression</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">GIF</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 text-slate-500 dark:text-slate-400">Animations, simple graphics</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">AVIF</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 pr-4 text-emerald-600">✓</td><td class="py-2 text-slate-500 dark:text-slate-400">Modern browsers, smallest size</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Is this photo resizer really free?",
        answer:
          "Yes, 100% free with no hidden charges, no watermarks, and no signup. You can resize unlimited photos without creating an account.",
      },
      {
        question: "Do my photos get uploaded to a server?",
        answer:
          "Never. All image processing happens entirely inside your web browser using the HTML5 Canvas API. Your photos never leave your device, which means complete privacy and instant processing.",
      },
      {
        question: "What is the maximum photo size I can resize?",
        answer:
          "You can upload images up to 50MB. For very large files, processing may take a couple of seconds but everything still runs locally in your browser.",
      },
      {
        question: "Can I resize photos on my phone?",
        answer:
          "Yes. Our photo resizer is fully mobile-responsive and works on iOS Safari, Android Chrome, and all modern mobile browsers — no app download needed.",
      },
      {
        question: "How do I resize a photo without losing quality?",
        answer:
          "Use the quality slider (set to 85–95 for minimal loss) and avoid enlarging photos beyond their original resolution. Reducing dimensions while keeping quality high is the best approach.",
      },
      {
        question:
          "Can I convert my photo to a different format while resizing?",
        answer:
          "Yes. You can change from JPG to PNG, PNG to WEBP, or any supported format combination in the same step as resizing.",
      },
    ],
  },

  {
    slug: "passport-photo-maker",
    metaTitle: "Free Passport Photo Maker — Correct Size for Any Country",
    metaDescription:
      "Create passport photos online free. Auto-correct dimensions for US, UK, India, EU, China and 20+ countries. White background, JPEG output, instant download.",
    h1: "Free Passport Photo Maker",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Create perfectly sized passport and ID photos for any country — cropped, formatted, and ready to print or upload.",
    sections: [
      {
        heading: "Official Passport Photo Dimensions by Country",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Getting a passport photo rejected because of the wrong dimensions or background is frustrating — and costly. Our free passport photo maker automatically applies the exact specifications required by each country's government, so your photo is accepted first time.
  </p>

  <div class="p-5 bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 rounded-r-xl">
    <div class="flex items-start gap-3">
      <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <p class="text-sm text-green-800 dark:text-green-300"><strong>All processing is local.</strong> Your photo is never uploaded to any server. It is cropped and formatted entirely within your browser for complete privacy.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="font-bold text-slate-900 dark:text-white">Passport Photo Size Requirements by Country</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700/50">
          <tr>
            <th class="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Country</th>
            <th class="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Size (mm)</th>
            <th class="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Pixels (300dpi)</th>
            <th class="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Background</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30"><td class="px-4 py-3 font-medium text-slate-900 dark:text-white">🇺🇸 United States</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">51 × 51 mm</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">600 × 600 px</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">White</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30"><td class="px-4 py-3 font-medium text-slate-900 dark:text-white">🇬🇧 United Kingdom</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">35 × 45 mm</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">413 × 531 px</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">Light grey / white</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30"><td class="px-4 py-3 font-medium text-slate-900 dark:text-white">🇮🇳 India</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">35 × 45 mm</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">413 × 531 px</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">White</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30"><td class="px-4 py-3 font-medium text-slate-900 dark:text-white">🇪🇺 European Union</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">35 × 45 mm</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">413 × 531 px</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">White / off-white</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30"><td class="px-4 py-3 font-medium text-slate-900 dark:text-white">🇨🇳 China</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">33 × 48 mm</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">390 × 567 px</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">White</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30"><td class="px-4 py-3 font-medium text-slate-900 dark:text-white">🇨🇦 Canada</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">50 × 70 mm</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">590 × 826 px</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">White</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30"><td class="px-4 py-3 font-medium text-slate-900 dark:text-white">🇦🇺 Australia</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">35 × 45 mm</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">413 × 531 px</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">White / light grey</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30"><td class="px-4 py-3 font-medium text-slate-900 dark:text-white">🇩🇪 Germany</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">35 × 45 mm</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">413 × 531 px</td><td class="px-4 py-3 text-slate-600 dark:text-slate-400">Light grey</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Common Reasons Passport Photos Get Rejected</h3>
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900">
        <span class="text-red-500 text-lg flex-shrink-0">✗</span>
        <div>
          <h4 class="font-semibold text-red-900 dark:text-red-400 text-sm">Wrong dimensions</h4>
          <p class="text-xs text-red-700 dark:text-red-300 mt-1">Even 1mm off can cause rejection. Always use the exact country specifications.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900">
        <span class="text-red-500 text-lg flex-shrink-0">✗</span>
        <div>
          <h4 class="font-semibold text-red-900 dark:text-red-400 text-sm">Non-white background</h4>
          <p class="text-xs text-red-700 dark:text-red-300 mt-1">Most countries require a plain white or light grey background. Use our tool to set it correctly.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900">
        <span class="text-red-500 text-lg flex-shrink-0">✗</span>
        <div>
          <h4 class="font-semibold text-red-900 dark:text-red-400 text-sm">File too large or too small</h4>
          <p class="text-xs text-red-700 dark:text-red-300 mt-1">Online portals often require files between 20KB and 300KB. Use our KB resizer to hit the target.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900">
        <span class="text-red-500 text-lg flex-shrink-0">✗</span>
        <div>
          <h4 class="font-semibold text-red-900 dark:text-red-400 text-sm">Wrong JPEG format</h4>
          <p class="text-xs text-red-700 dark:text-red-300 mt-1">Most government portals accept only JPEG. Our tool always outputs JPEG for passport photos.</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the standard passport photo dimensions?",
        answer:
          "It depends on the country. The most common size is 35×45mm (used by UK, India, EU, Australia). The US requires 51×51mm (2×2 inches). China uses 33×48mm. Always check your country's official requirements.",
      },
      {
        question: "Can I make a passport photo at home?",
        answer:
          "Yes. Take a photo against a plain white wall in good natural light, then use our passport photo maker to crop and resize it to the exact dimensions. Save money compared to a photo studio.",
      },
      {
        question: "What background color is required for passport photos?",
        answer:
          "Most countries require a plain white or very light grey background. The subject's face must be clearly visible against it. Our tool lets you set a white background automatically.",
      },
      {
        question: "How many passport photos can I make for free?",
        answer:
          "Unlimited. There are no daily limits, no credits to buy, and no account required. Make as many passport photos as you need.",
      },
      {
        question: "What file format should a passport photo be?",
        answer:
          "Almost all government portals and embassies require JPEG/JPG format. Our passport photo maker always outputs a JPEG file.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // HOW TO USE
  // ─────────────────────────────────────────────
  {
    slug: "how-to-use",
    metaTitle: "How to Use — photoresizer Guide",
    metaDescription:
      "Step-by-step guide to using photoresizer. Learn to resize images, reduce file size, create passport photos, and more — all for free in your browser.",
    h1: "How to Use photoresizer",
    sections: [
      {
        heading: "Complete Guide to Resizing & Editing Images",
        content: `
<div class="space-y-10 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    photoresizer is a collection of free, browser-based image tools. Every tool works without any server upload — your files stay on your device at all times. This guide walks you through everything you can do, step by step.
  </p>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Step 1 — Upload Your Image</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Click the upload area or drag and drop your image file directly onto it. We support JPG, JPEG, PNG, GIF, WEBP, and AVIF files up to 50MB. Your file loads instantly — no waiting for an upload to complete because nothing is sent to a server.</p>
    </div>
    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Step 2 — Configure the Sidebar</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">The right sidebar contains all your controls. Set your target width and height in pixels, choose a preset (Instagram, Passport, etc.), set a KB target, adjust quality, choose the output format, rotate or flip the image, and apply basic filters like brightness and contrast.</p>
    </div>
    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center mb-4 text-violet-600 dark:text-violet-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Step 3 — Preview Live Changes</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">The canvas area shows a live preview of your image as you adjust settings. You can see the before and after side-by-side using the comparison slider. The stats bar shows the original and estimated output file size so you know exactly what you're getting before you download.</p>
    </div>
    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Step 4 — Download Your Image</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Click the Download button and your resized image is saved directly to your device. The filename includes the new dimensions for easy reference. No watermarks are added, no account is required, and there are no download limits.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="font-bold text-slate-900 dark:text-white">Sidebar Controls — What Each Setting Does</h3>
    </div>
    <div class="divide-y divide-slate-100 dark:divide-slate-700/50">
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-slate-900 dark:text-white text-sm">Width &amp; Height</div>
        <div class="text-sm text-slate-600 dark:text-slate-400">Enter your target pixel dimensions. Toggle the lock icon to maintain the original aspect ratio automatically.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-slate-900 dark:text-white text-sm">Quality Slider</div>
        <div class="text-sm text-slate-600 dark:text-slate-400">Controls JPEG compression level. 85–95 is ideal for photos you want to look good. Lower values reduce file size more aggressively.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-slate-900 dark:text-white text-sm">Target KB</div>
        <div class="text-sm text-slate-600 dark:text-slate-400">Enter a specific file size in KB. Our binary search algorithm automatically finds the quality level that hits your target within 1KB.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-slate-900 dark:text-white text-sm">Format</div>
        <div class="text-sm text-slate-600 dark:text-slate-400">Convert between JPG, PNG, WEBP, GIF, and AVIF. WEBP gives the smallest file at good quality; PNG is best when you need transparency.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-slate-900 dark:text-white text-sm">Presets</div>
        <div class="text-sm text-slate-600 dark:text-slate-400">One-click dimension presets for Instagram, Twitter, Facebook, passport photos, print sizes (A4, 4×6), and common web resolutions.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-slate-900 dark:text-white text-sm">Filters</div>
        <div class="text-sm text-slate-600 dark:text-slate-400">Adjust brightness, contrast, and saturation with sliders. Changes apply to the canvas in real time so you can see the effect instantly.</div>
      </div>
    </div>
  </div>

  <div class="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Browser Compatibility</h3>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div class="text-center p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="text-2xl mb-1">🌐</div>
        <div class="font-semibold text-sm text-slate-900 dark:text-white">Chrome 90+</div>
        <div class="text-xs text-emerald-600">Fully supported</div>
      </div>
      <div class="text-center p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="text-2xl mb-1">🦊</div>
        <div class="font-semibold text-sm text-slate-900 dark:text-white">Firefox 88+</div>
        <div class="text-xs text-emerald-600">Fully supported</div>
      </div>
      <div class="text-center p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="text-2xl mb-1">🧭</div>
        <div class="font-semibold text-sm text-slate-900 dark:text-white">Safari 14+</div>
        <div class="text-xs text-emerald-600">Fully supported</div>
      </div>
      <div class="text-center p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="text-2xl mb-1">🔷</div>
        <div class="font-semibold text-sm text-slate-900 dark:text-white">Edge 90+</div>
        <div class="text-xs text-emerald-600">Fully supported</div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CONTACT
  // ─────────────────────────────────────────────
  {
    slug: "contact",
    metaTitle: "Contact Us — photoresizer Support",
    metaDescription:
      "Get in touch with the photoresizer team. Report bugs, request features, or ask questions about our free online image tools.",
    h1: "Contact Us",
    sections: [
      {
        heading: "Get in Touch With Our Team",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    We're a small team dedicated to building the best free image tools on the web. If you've found a bug, have a feature request, or just need help resizing an image — we want to hear from you.
  </p>

  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900 text-center">
      <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="font-bold text-slate-900 dark:text-white mb-1">Email Support</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">For general questions and bug reports</p>
      <a href="mailto:usvisaphotoai@gmail.com" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">usvisaphotoai@gmail.com</a>
    </div>
    <div class="p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900 text-center">
      <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-600 dark:text-emerald-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="font-bold text-slate-900 dark:text-white mb-1">Response Time</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">We aim to reply within</p>
      <span class="text-sm font-semibold text-emerald-700 dark:text-emerald-400">24–48 business hours</span>
    </div>
    <div class="p-6 bg-violet-50 dark:bg-violet-900/10 rounded-2xl border border-violet-100 dark:border-violet-900 text-center">
      <div class="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-violet-600 dark:text-violet-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
      </div>
      <h3 class="font-bold text-slate-900 dark:text-white mb-1">Feature Requests</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">We love user suggestions</p>
      <a href="mailto:usvisaphotoai@gmail.com" class="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline">usvisaphotoai@gmail.com</a>
    </div>
  </div>

  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Before You Write to Us — Quick Self-Help</h3>
    <div class="space-y-3">
      <div class="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
        <span class="text-blue-500 font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
        <div>
          <p class="text-sm font-medium text-slate-900 dark:text-white">My image looks blurry after resizing</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Try keeping the quality slider above 80 and avoid enlarging images beyond their original resolution. Upscaling always reduces sharpness.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
        <span class="text-blue-500 font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
        <div>
          <p class="text-sm font-medium text-slate-900 dark:text-white">The file is not reaching my KB target</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">PNG files cannot always be reduced to very small KB sizes because PNG uses lossless compression. Try switching to JPEG or WEBP format.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
        <span class="text-blue-500 font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
        <div>
          <p class="text-sm font-medium text-slate-900 dark:text-white">My passport photo was rejected</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Check that you selected the correct country in the passport photo maker. Also ensure the background is plain white with no shadows.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="p-6 bg-slate-900 dark:bg-slate-700 rounded-2xl text-center">
    <h3 class="text-lg font-bold text-white mb-2">Send Us a Message</h3>
    <p class="text-sm text-slate-400 mb-5">Include your browser name, operating system, and a description of the issue. Screenshots are very helpful.</p>
    <a href="mailto:usvisaphotoai@gmail.com" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      Email Support Team
    </a>
  </div>
</div>`,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // TERMS
  // ─────────────────────────────────────────────
  {
    slug: "terms",
    metaTitle: "Terms & Conditions — photoresizer",
    metaDescription:
      "Terms and conditions for using photoresizer. Read our usage policy, limitations, and user responsibilities.",
    h1: "Terms & Conditions",
    sections: [
      {
        heading: "Terms of Use",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">Last updated: January 2025. Please read these terms carefully before using photoresizer. By accessing our tools, you agree to be bound by these terms.</p>

  <div class="space-y-4">
    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
        Acceptance of Terms
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed ml-11">By accessing and using photoresizer ("the Service"), you confirm that you are at least 13 years of age, have read and understood these Terms, and agree to be bound by them. If you are using the Service on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
        Description of Service
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed ml-11">photoresizer provides free, browser-based image editing tools including photo resizing, compression, format conversion, and passport photo creation. All processing occurs client-side in the user's browser. We do not store, process, or transmit user images on our servers.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
        Acceptable Use
      </h3>
      <div class="ml-11 space-y-2">
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">You may use our Service for personal and commercial image editing. You may NOT use the Service to:</p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1">
          <li class="flex items-start gap-2"><span class="text-red-500 flex-shrink-0">✗</span> Process images containing illegal content, including child exploitation material</li>
          <li class="flex items-start gap-2"><span class="text-red-500 flex-shrink-0">✗</span> Attempt to reverse-engineer or compromise our web application</li>
          <li class="flex items-start gap-2"><span class="text-red-500 flex-shrink-0">✗</span> Use automated scripts or bots to scrape or abuse the Service</li>
          <li class="flex items-start gap-2"><span class="text-red-500 flex-shrink-0">✗</span> Violate any applicable local, national, or international law</li>
        </ul>
      </div>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
        Intellectual Property
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed ml-11">You retain full ownership of all images you process using our Service. We claim no intellectual property rights over your content. The photoresizer software, design, and branding are our intellectual property and may not be copied or reproduced without permission.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
        Service Availability &amp; Disclaimer
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed ml-11">Our tools are provided "as is" and "as available" without warranty of any kind. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice. We are not liable for any loss or damage arising from your use of, or inability to use, the Service.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
        Changes to Terms
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed ml-11">We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes your acceptance of the revised Terms. We recommend reviewing this page periodically.</p>
    </div>
  </div>

  <div class="p-5 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
    <p class="text-sm text-slate-600 dark:text-slate-400">Questions about these Terms? Contact us at <a href="mailto:usvisaphotoai@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">usvisaphotoai@gmail.com</a></p>
  </div>
</div>`,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PRIVACY POLICY
  // ─────────────────────────────────────────────
  {
    slug: "privacy",
    metaTitle: "Privacy Policy — photoresizer",
    metaDescription:
      "Privacy policy for photoresizer. All image processing is 100% local in your browser. We never upload, store, or share your photos.",
    h1: "Privacy Policy",
    sections: [
      {
        heading: "How We Protect Your Privacy",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">Last updated: January 2025. Your privacy is fundamental to how we built photoresizer. This policy explains exactly what data we collect (very little), what we don't collect (your images), and how we use information.</p>

  <div class="grid md:grid-cols-2 gap-5">
    <div class="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 rounded-r-2xl">
      <h3 class="text-base font-bold text-green-900 dark:text-green-400 mb-3 flex items-center gap-2">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        100% Local Image Processing
      </h3>
      <p class="text-sm text-green-800 dark:text-green-300 leading-relaxed">Every image operation — resizing, compression, format conversion, cropping — happens entirely within your web browser using the HTML5 Canvas API and JavaScript. <strong>Your images are never transmitted to, or stored on, any server we operate or control.</strong> Not even temporarily. We are technically incapable of seeing your photos.</p>
    </div>
    <div class="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-2xl">
      <h3 class="text-base font-bold text-blue-900 dark:text-blue-400 mb-3 flex items-center gap-2">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Minimal Data Collection
      </h3>
      <p class="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">We use anonymous, aggregated analytics (Google Analytics 4) to understand how people use our tools. This includes page views, browser type, and country. We do not collect names, email addresses, or any personally identifiable information unless you contact us directly.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="font-bold text-slate-900 dark:text-white">Data We Collect vs. Data We Do Not Collect</h3>
    </div>
    <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
      <div class="p-6">
        <h4 class="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2"><span class="text-emerald-500">✓</span> We Collect (anonymised)</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Page views and session duration</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Browser type and version</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Country (not city or IP address)</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Device type (mobile/desktop)</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Referral source (how you found us)</li>
        </ul>
      </div>
      <div class="p-6">
        <h4 class="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2"><span class="text-red-500">✗</span> We Never Collect</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Your images, photos, or files</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Your name or email address</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Your IP address (GA4 anonymises this)</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> EXIF metadata from your images</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-slate-400">·</span> Payment or financial information</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="space-y-4">
    <div class="p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
      <h3 class="font-semibold text-slate-900 dark:text-white mb-2">Cookies</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We use only necessary and analytics cookies. Google Analytics 4 sets cookies (_ga, _ga_*) that persist for up to 2 years. These help us understand aggregate usage patterns. You can disable cookies at any time in your browser settings without affecting your ability to use our tools.</p>
    </div>
    <div class="p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
      <h3 class="font-semibold text-slate-900 dark:text-white mb-2">Your Rights (GDPR &amp; CCPA)</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">If you are in the EU or California, you have rights including the right to access data we hold about you, request deletion, and opt out of analytics tracking. Since we collect very little identifiable data, most requests can be fulfilled by simply disabling cookies. Contact usvisaphotoai@gmail.com for any data requests.</p>
    </div>
    <div class="p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
      <h3 class="font-semibold text-slate-900 dark:text-white mb-2">Third-Party Services</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We use Google Analytics 4 for anonymous usage statistics. Our site is hosted on Vercel/Netlify, which may log standard server access logs (IP addresses, request timestamps) for security purposes. These logs are not used for advertising or profiling.</p>
    </div>
  </div>

  <div class="p-5 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
    <p class="text-sm text-slate-600 dark:text-slate-400">Privacy questions? Email <a href="mailto:usvisaphotoai@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">usvisaphotoai@gmail.com</a> — we aim to respond within 5 business days.</p>
  </div>
</div>`,
      },
    ],
  },

  {
    slug: "ssc-photo-resizer",
    metaTitle:
      "SSC Photo Resizer 2027 — Resize Photo & Signature for SSC Forms",
    metaDescription:
      "Resize your photo and signature for SSC CGL, CHSL, MTS, CPO and all SSC exams in 2027. Meet exact KB and pixel requirements instantly. Free, private, no upload.",
    h1: "SSC Photo Resizer 2027",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your photo and signature to SSC's exact specifications — pixel dimensions, file size in KB — in seconds. Free, browser-based, no data sent to any server.",
    sections: [
      {
        heading: "Why Use Our SSC Photo Resizer in 2027?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Every SSC exam in 2027 — CGL, CHSL, MTS, CPO, JE, Stenographer, GD Constable — requires applicants to upload a photo and signature within strict size limits. A photo that is even 1 KB over the limit will cause the form to reject your submission. Our SSC Photo Resizer ensures your image meets every requirement without any guesswork.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Exact SSC Specs</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Pre-loaded with 2027 SSC photo (20–50 KB, 100×120 px) and signature (10–20 KB, 140×60 px) requirements for all exams.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">100% Private</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Processing happens entirely in your browser. Your photo and signature never leave your device — complete privacy guaranteed.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Instant Output</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Resize and download in under 3 seconds. No waiting, no queues, no server round-trips — works even on slow mobile data.</p>
    </div>
  </div>
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">SSC 2027 Photo & Signature Requirements</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700">
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Parameter</th>
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Photo</th>
            <th class="text-left py-2 font-semibold text-slate-700 dark:text-slate-300">Signature</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">File Size</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20 KB – 50 KB</td><td class="py-2 text-slate-600 dark:text-slate-400">10 KB – 20 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">Dimensions</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">100 × 120 pixels</td><td class="py-2 text-slate-600 dark:text-slate-400">140 × 60 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">Format</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">JPG / JPEG</td><td class="py-2 text-slate-600 dark:text-slate-400">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-slate-900 dark:text-white">Background</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">White / light</td><td class="py-2 text-slate-600 dark:text-slate-400">White</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize Your SSC Photo — 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Your Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Drag and drop your passport-style photo or signature image. Supports JPG and PNG up to 50 MB.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Select SSC Preset</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose the SSC Photo or SSC Signature preset. Dimensions and KB limits are auto-filled for 2027 requirements.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Upload</h4><p class="text-sm text-slate-600 dark:text-slate-400">Click Download. The file is ready to upload directly on the SSC official portal — no further editing needed.</p></div>
      </div>
    </div>
  </div>
  <div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
    <h3 class="text-lg font-bold text-amber-900 dark:text-amber-400 mb-3">SSC Exams Covered in 2027</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📋</span><span><strong>SSC CGL 2027:</strong> Combined Graduate Level — photo 20–50 KB, signature 10–20 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📋</span><span><strong>SSC CHSL 2027:</strong> Combined Higher Secondary Level — same photo/signature specs</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📋</span><span><strong>SSC MTS 2027:</strong> Multi Tasking Staff — JPG format, white background required</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📋</span><span><strong>SSC CPO 2027:</strong> Central Police Organisation — strict pixel and KB compliance</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📋</span><span><strong>SSC JE 2027:</strong> Junior Engineer — technical exam with standard photo rules</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📋</span><span><strong>SSC GD Constable 2027:</strong> Paramilitary recruitment with biometric-grade photo specs</span></div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the SSC photo size requirements in 2027?",
        answer:
          "For most SSC exams in 2027, the photo must be between 20 KB and 50 KB in JPG format with dimensions of 100×120 pixels. The signature must be between 10 KB and 20 KB at 140×60 pixels. Always verify on the official SSC notification before submitting.",
      },
      {
        question: "Can I use this tool for both SSC CGL and SSC CHSL?",
        answer:
          "Yes. Both SSC CGL and SSC CHSL follow the same photo and signature size guidelines in 2027. Our tool works for all SSC exam categories with a single preset.",
      },
      {
        question: "Will my photo or signature be stored on your server?",
        answer:
          "Never. All resizing happens inside your browser using the HTML5 Canvas API. Nothing is uploaded or stored — your documents remain completely private.",
      },
      {
        question:
          "My photo is 2 MB from my phone camera. Can I resize it down to 50 KB?",
        answer:
          "Yes. Our tool can compress and resize a large camera photo down to the required 20–50 KB range while maintaining acceptable quality for government portals.",
      },
      {
        question: "What format should the SSC photo be in?",
        answer:
          "JPG (JPEG) format is required for SSC exam photos and signatures. Our tool exports in JPG by default when you use the SSC preset.",
      },
      {
        question: "Is this tool free for SSC form filling?",
        answer:
          "Yes — completely free. No registration, no watermark, no hidden charges. You can resize unlimited photos and signatures for any SSC exam at no cost.",
      },
    ],
  },

  {
    slug: "upsc-photo-size",
    metaTitle: "UPSC Photo Size 2027 — Resize Photo & Signature for UPSC Forms",
    metaDescription:
      "Resize your photo and signature to UPSC's exact 2027 specifications. Free browser-based tool — no upload, no signup. Covers CSE, CDS, NDA, CAPF and all UPSC exams.",
    h1: "UPSC Photo Size Resizer 2027",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Get your photo and signature pixel-perfect for UPSC 2027 applications. Free, instant, private — processed entirely in your browser.",
    sections: [
      {
        heading: "UPSC Photo & Signature Size Requirements 2027",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    UPSC is among the most competitive examinations in India, and even a small error in your application — such as an oversized photo — can lead to rejection. In 2027, UPSC continues to enforce strict photo and signature upload rules across CSE, CDS, NDA/NA, CAPF, CMS, IES/ISS, and all other examinations. Our free tool ensures your files are compliant before you hit Submit.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">2027 Specs Built In</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Pre-loaded presets for UPSC CSE, CDS, NDA, CAPF and more — photo 300×400 px, 20–300 KB; signature 20–300 KB.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Zero Data Risk</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">UPSC applicants handle sensitive ID documents. Our tool never uploads anything — every operation runs locally in your browser.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">All UPSC Exams</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">One tool covers CSE (IAS/IPS/IFS), CDS, NDA, CAPF, CMS, IES, ESE, CGGE, CISF AC, SO/Steno and more.</p>
    </div>
  </div>
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">UPSC 2027 Photo & Signature Specifications</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700">
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Exam</th>
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Photo Size</th>
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Signature Size</th>
            <th class="text-left py-2 font-semibold text-slate-700 dark:text-slate-300">Format</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">UPSC CSE</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20–300 KB, 300×400 px</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20–300 KB</td><td class="py-2 text-slate-600 dark:text-slate-400">JPG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">UPSC CDS</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20–300 KB, 300×400 px</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20–300 KB</td><td class="py-2 text-slate-600 dark:text-slate-400">JPG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">UPSC NDA/NA</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20–300 KB, 300×400 px</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20–300 KB</td><td class="py-2 text-slate-600 dark:text-slate-400">JPG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">UPSC CAPF</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20–300 KB, 300×400 px</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20–300 KB</td><td class="py-2 text-slate-600 dark:text-slate-400">JPG</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Steps to Resize Your UPSC Photo</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Photo or Signature</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your recent passport-style photo or hand-written signature scan from your device.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Choose UPSC Preset</h4><p class="text-sm text-slate-600 dark:text-slate-400">Pick your specific exam from the preset list. Width, height and KB range are applied automatically.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Submit</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download the compliant file and upload it on the UPSC OTR or exam-specific portal without any issues.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the UPSC photo size requirement in 2027?",
        answer:
          "For UPSC CSE and most other UPSC exams in 2027, the photo should be in JPG format, between 20 KB and 300 KB, with dimensions of 300×400 pixels. The signature must also be JPG, between 20 KB and 300 KB. Always confirm with the specific exam notification.",
      },
      {
        question: "Does this tool work for UPSC CSE (IAS) applications?",
        answer:
          "Yes. Our tool is pre-configured with the UPSC CSE 2027 specifications. Upload your photo, select the UPSC CSE preset, and download a compliant file ready for the official UPSC portal.",
      },
      {
        question: "Can I resize the signature image too?",
        answer:
          "Yes. The tool handles both photos and signature images. Select the 'Signature' preset after uploading your handwritten signature scan to get the correct dimensions and file size.",
      },
      {
        question: "Is the tool free?",
        answer:
          "Yes — completely free, with no account required, no watermarks, and no restrictions on the number of images you can resize.",
      },
      {
        question: "What background colour should a UPSC photo have?",
        answer:
          "UPSC requires a white or light-coloured background for all passport-style photographs. The photo should show a clear frontal face without sunglasses or head coverings (except for religious reasons).",
      },
      {
        question: "Will the resized image be accepted on the UPSC OTR portal?",
        answer:
          "Our tool produces files that match UPSC's stated requirements. However, always double-check the latest notification on upsc.gov.in, as specifications can be updated before each exam cycle.",
      },
    ],
  },

  {
    slug: "reduce-photo-size-50kb",
    metaTitle:
      "Reduce Photo Size to 50KB Free Online 2027 — No Upload Required",
    metaDescription:
      "Compress any photo to exactly 50KB or under in seconds. Free, browser-based, no server upload. Perfect for government forms, job portals, and exam applications in 2027.",
    h1: "Reduce Photo Size to 50KB — Free Online Tool 2027",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Compress your photo to under 50KB instantly — no upload, no signup, no watermark. Works on any device.",
    sections: [
      {
        heading: "How to Reduce a Photo to 50KB Without Losing Quality",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Hundreds of government portals, competitive exam forms, and job application sites in India and globally impose a strict 50 KB file-size limit on uploaded photos. Our free online tool lets you compress any JPEG, PNG, or WEBP image down to 50 KB or less — while preserving as much visual quality as the compression allows — right inside your browser. Nothing is sent to a server, nothing is stored, and no account is needed.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Target KB Control</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Type "50" in the target size field and the tool automatically finds the right quality setting to hit that exact limit.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">100% Private</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Your photo is processed using the browser's built-in Canvas API — never uploaded to any server, ensuring total privacy.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Quality Preview</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">See the compressed result before downloading. Adjust the quality slider if you want a slightly larger or smaller output.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Reduce to 50KB in 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Your Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Click or drag to upload any JPG, PNG, or WEBP image — even a 5 MB phone photo works fine.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set Target to 50 KB</h4><p class="text-sm text-slate-600 dark:text-slate-400">Enter 50 in the target file size box. The tool will auto-calculate the optimal quality setting to meet that limit.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download Compressed Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Preview and download. The output file will be 50 KB or slightly under — ready for any portal or form.</p></div>
      </div>
    </div>
  </div>
  <div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
    <h3 class="text-lg font-bold text-amber-900 dark:text-amber-400 mb-3">Where Is a 50 KB Photo Limit Common in 2027?</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📋</span><span><strong>SSC Exams:</strong> SSC CGL, CHSL, MTS and CPO portals cap photo uploads at 50 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🏦</span><span><strong>Bank Exams:</strong> IBPS, SBI, and RBI application portals often require photos under 50 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🚂</span><span><strong>Railways:</strong> RRB NTPC, Group D, and ALP portals commonly specify a 50 KB limit</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🎓</span><span><strong>Entrance Exams:</strong> JEE, NEET, CUET and state CET forms routinely set 50 KB ceilings</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">💼</span><span><strong>Job Portals:</strong> NCS, state employment exchanges and private portals restrict profile photos to 50 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🌐</span><span><strong>E-Governance:</strong> DigiLocker uploads and Aadhaar-linked services often enforce 50 KB file limits</span></div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "How do I reduce a photo to exactly 50KB?",
        answer:
          "Upload your photo, enter '50' in the target KB field, and click Resize/Compress. The tool runs a binary-search quality algorithm to land as close to — and under — 50 KB as possible while keeping the image clear.",
      },
      {
        question:
          "Will the photo still look good after being compressed to 50KB?",
        answer:
          "For standard passport-size photos (100×120 px to 300×400 px), 50 KB is more than enough to maintain acceptable clarity. Larger images at 50 KB will look more compressed, so resize the dimensions first if needed.",
      },
      {
        question: "What formats are supported?",
        answer:
          "JPG, JPEG, PNG, WEBP, GIF and AVIF can all be uploaded. The output is typically JPEG, which achieves the smallest file size at the best quality for photos.",
      },
      {
        question: "Can I reduce a photo to 20KB or 100KB with this tool?",
        answer:
          "Yes. The target size field accepts any value — type 20 for a 20 KB output or 100 for 100 KB. The tool adapts the quality setting accordingly.",
      },
      {
        question: "Is it safe to use for government form photos?",
        answer:
          "Yes. All processing is done locally in your browser; your image is never transmitted to any server. The output JPG file will match the specifications of most government and exam portals.",
      },
      {
        question:
          "Why does my 5MB phone photo look fine but the portal rejects it?",
        answer:
          "Most government portals enforce both a pixel dimension limit and a file-size limit. Even if the photo looks good, a 5 MB file far exceeds the 50 KB cap. Use our tool to compress it before uploading.",
      },
    ],
  },

  {
    slug: "signature-resize-ibps",
    metaTitle:
      "IBPS Signature Resize 2027 — Resize Signature for IBPS PO, Clerk, SO",
    metaDescription:
      "Resize your signature image to IBPS 2027 requirements — 10 KB to 20 KB, 140×60 pixels, JPG format. Free, instant, browser-based. No upload to servers.",
    h1: "IBPS Signature Resizer 2027",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your handwritten signature to exact IBPS specifications for PO, Clerk, SO and RRB exams in 2027. Free and instant.",
    sections: [
      {
        heading: "IBPS Signature Size Requirements & How to Resize",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    The Institute of Banking Personnel Selection (IBPS) requires all applicants to upload a scanned signature image that meets very specific dimensions and file-size constraints. In 2027, the signature must be between 10 KB and 20 KB, with dimensions of 140×60 pixels, saved as a JPEG file. Our free resizer handles all of this automatically — just upload your signature scan and download a portal-ready file in seconds.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Signature Optimised</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Special preset for IBPS signatures: 140×60 px, 10–20 KB, white background, JPG output — ready in one click.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Private & Secure</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Your signature scan never leaves your device. Browser-only processing means zero data leakage.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">All IBPS Exams</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Works for IBPS PO, Clerk, SO, RRB PO and RRB Clerk — all use the same signature upload requirements.</p>
    </div>
  </div>
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">IBPS 2027 Upload Requirements</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700">
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Document</th>
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">Dimensions</th>
            <th class="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">File Size</th>
            <th class="text-left py-2 font-semibold text-slate-700 dark:text-slate-300">Format</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Photo</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">200 × 230 pixels</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">20 KB – 50 KB</td><td class="py-2 text-slate-600 dark:text-slate-400">JPG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Signature</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">140 × 60 pixels</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">10 KB – 20 KB</td><td class="py-2 text-slate-600 dark:text-slate-400">JPG</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Resize Your IBPS Signature in 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Scan Your Signature</h4><p class="text-sm text-slate-600 dark:text-slate-400">Sign on white paper with a black or dark blue pen, then scan or photograph it clearly. Upload the image here.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Apply IBPS Signature Preset</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select the IBPS Signature preset — 140×60 px and 10–20 KB are applied automatically.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Upload to IBPS</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download the resized signature file and upload it on the IBPS registration portal without rejection.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the IBPS signature size in 2027?",
        answer:
          "IBPS requires the signature image to be between 10 KB and 20 KB, with dimensions of 140 pixels wide and 60 pixels tall, saved as a JPEG file on a white background.",
      },
      {
        question: "How do I scan my signature for IBPS?",
        answer:
          "Sign on plain white paper with a dark ink pen. Photograph it in good lighting or use a scanner app on your phone. Crop out any extra white space, then upload the image to this tool to resize it to IBPS specifications.",
      },
      {
        question: "Can I use this for IBPS PO and IBPS Clerk?",
        answer:
          "Yes. IBPS PO, IBPS Clerk, IBPS SO, IBPS RRB PO and IBPS RRB Clerk all use the same signature upload requirements — 140×60 px, 10–20 KB, JPG.",
      },
      {
        question: "What if my signature file is too large?",
        answer:
          "Upload it here and select the IBPS Signature preset. The tool will reduce both the pixel dimensions and file size to bring it within the 10–20 KB range.",
      },
      {
        question: "Can I also resize my IBPS photo with this tool?",
        answer:
          "Yes. Switch to the IBPS Photo preset (200×230 px, 20–50 KB) after uploading your passport photo. Both documents can be prepared in the same session.",
      },
      {
        question: "Is the resized signature accepted on ibps.in?",
        answer:
          "Our output matches IBPS's stated specifications. However, always verify the latest requirements in the official IBPS notification before submitting, as minor changes may occur each cycle.",
      },
    ],
  },

  {
    slug: "jpeg-to-jpg",
    metaTitle: "JPEG to JPG Converter Free Online 2027 — Instant, No Upload",
    metaDescription:
      "Convert JPEG to JPG online free in 2027. Rename or re-export your image instantly in the browser — no file upload, no account needed. Works on any device.",
    h1: "JPEG to JPG Converter — Free Online 2027",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Convert or rename JPEG images to JPG instantly. Browser-based, free, private — no upload, no watermark.",
    sections: [
      {
        heading: "What Is the Difference Between JPEG and JPG?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    JPEG and JPG are technically the same image format — JPEG stands for Joint Photographic Experts Group, and JPG is simply the three-character file extension used by older Windows systems that couldn't handle four-character extensions. Today both extensions refer to the identical compressed image format. However, many government portals, exam forms, and upload systems in 2027 specifically require a <strong>.jpg</strong> extension and will reject <strong>.jpeg</strong> files even though the image data is identical. Our converter renames or re-exports the file with the correct .jpg extension instantly.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Instant Conversion</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Upload your .jpeg file and download a .jpg in under one second. No quality loss, no re-encoding unless you change settings.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">No Server Upload</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Conversion happens in your browser — your original photo is never sent to any external server or stored anywhere.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Resize While Converting</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Optionally adjust dimensions and file size during conversion — great for exam portals that need both the right extension and the right KB limit.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Convert JPEG to JPG in 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Your JPEG</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select any .jpeg or .jpg image from your device — up to 50 MB supported.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Select JPG as Output</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose JPG as the output format. Optionally resize or compress at the same time.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download as .jpg</h4><p class="text-sm text-slate-600 dark:text-slate-400">Your file downloads with the .jpg extension — accepted by all portals that require JPG specifically.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Is JPEG the same as JPG?",
        answer:
          "Yes — JPEG and JPG are the exact same image format. JPG is a shortened version of the JPEG extension used by older Windows systems. The image data and quality are identical regardless of which extension is used.",
      },
      {
        question: "Why does a portal reject my .jpeg file but accept .jpg?",
        answer:
          "Some older portal validation scripts only check for the string '.jpg' rather than accepting both extensions. Converting the file so it downloads with the .jpg extension resolves this immediately.",
      },
      {
        question: "Will quality be affected when converting JPEG to JPG?",
        answer:
          "No quality loss occurs when only changing the extension. If you additionally resize or compress the image, some quality reduction may occur, but you can control this with the quality slider.",
      },
      {
        question: "Can I batch-convert multiple JPEG files to JPG?",
        answer:
          "Currently the tool handles one file at a time. For bulk conversion, you can process each file sequentially without any file-count limit.",
      },
      {
        question: "Does this work on mobile?",
        answer:
          "Yes. The converter is fully mobile-responsive and works on iOS Safari, Android Chrome, and other modern mobile browsers without any app installation.",
      },
      {
        question: "Is this converter free?",
        answer:
          "Completely free — no account, no watermark, no file limit. Convert as many JPEG files to JPG as you need at zero cost.",
      },
    ],
  },

  {
    slug: "compress-image",
    metaTitle:
      "Compress Image Free Online 2027 — Reduce File Size Without Losing Quality",
    metaDescription:
      "Compress JPG, PNG, WEBP and GIF images free online in 2027. Reduce file size by up to 90% with no visible quality loss. Browser-based — images never uploaded to servers.",
    h1: "Free Image Compressor 2027 — Compress Images Online",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Compress any image by up to 90% — no quality loss, no upload to servers, no signup. Works on all formats and all devices.",
    sections: [
      {
        heading: "Why Compress Images in 2027?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Large image files slow down websites, clog email inboxes, fail government portal upload limits, and consume unnecessary mobile data. Image compression reduces file size by removing redundant pixel information and applying smart encoding — often by 60–90% — with little or no perceptible quality difference. Our free browser-based compressor handles JPG, PNG, WEBP, GIF and AVIF images instantly, all without sending your files to any server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Up to 90% Smaller</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Smart compression removes invisible data and optimises encoding — dramatically reducing size with minimal visual impact.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Private & Offline-Capable</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">100% browser-based processing. Your images never leave your device — ideal for sensitive documents and personal photos.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">All Major Formats</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress JPG, PNG, WEBP, GIF and AVIF. Convert between formats in the same step to get even better compression ratios.</p>
    </div>
  </div>
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-0">Compression Options Available</h3>
    </div>
    <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
      <ul class="p-6 space-y-3">
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Quality slider (1–100) for fine-grained control</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Target file size in KB — tool finds optimal quality automatically</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Resize dimensions alongside compression in one pass</li>
      </ul>
      <ul class="p-6 space-y-3">
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Convert PNG to JPG for dramatically smaller outputs</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Before/after preview with exact KB comparison shown</li>
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 mt-0.5 flex-shrink-0">✓</span> Download compressed file with no watermark</li>
      </ul>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "How much can I compress an image without losing quality?",
        answer:
          "For JPEG photos, reducing quality to 75–85% typically cuts file size by 50–70% with no visible difference to the naked eye. PNG files with few colours can sometimes be compressed by 80% or more by converting to JPG.",
      },
      {
        question:
          "What is the difference between lossy and lossless compression?",
        answer:
          "Lossy compression (used for JPG) permanently removes some image data to achieve smaller sizes. Lossless compression (used for PNG) reduces size without removing any data. Our tool uses lossy JPEG compression by default for the best size-to-quality ratio.",
      },
      {
        question: "Can I compress a PNG image?",
        answer:
          "Yes. You can compress PNG directly, or convert it to JPG for a much smaller output (since JPG is lossy and typically 3–5× smaller than PNG for the same photo).",
      },
      {
        question: "Does compressing an image reduce its pixel dimensions?",
        answer:
          "Only if you choose to resize it. Compression and resizing are two separate operations — you can compress without changing pixel dimensions, or do both at the same time.",
      },
      {
        question: "Is this tool free for unlimited images?",
        answer:
          "Yes — completely free with no account required, no watermarks and no cap on the number of images you can compress.",
      },
      {
        question: "Will compressed images load faster on my website?",
        answer:
          "Significantly faster. A 2 MB image compressed to 200 KB loads 10× faster, which also improves Google Core Web Vitals scores and reduces bandwidth costs.",
      },
    ],
  },

  {
    slug: "jpg-to-png",
    metaTitle: "JPG to PNG Converter Free Online 2027 — No Upload, Instant",
    metaDescription:
      "Convert JPG to PNG online free in 2027. Get transparent-background PNG from any JPG instantly. Browser-based — your images never leave your device. No signup.",
    h1: "JPG to PNG Converter — Free Online 2027",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Convert any JPG image to PNG format instantly. Free, private, no server upload. Supports transparency and lossless output.",
    sections: [
      {
        heading: "When to Convert JPG to PNG",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    JPG is great for photographs because it achieves small file sizes through lossy compression. PNG, on the other hand, supports transparency (alpha channel), uses lossless compression, and maintains crisp edges — making it ideal for logos, screenshots, graphics, and images that need a transparent background. Our free tool converts JPG to PNG in your browser without any quality degradation beyond what already exists in the JPG.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Lossless PNG Output</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">The converted PNG retains all visible pixel data from your JPG — no further quality loss occurs during format conversion.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Transparency Support</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">PNG supports alpha channel transparency. Use our background remover alongside this converter to get a transparent PNG.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">No Server Upload</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Conversion runs in your browser using the Canvas API. Your original JPG is never transmitted to any server.</p>
    </div>
  </div>
  <div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
    <h3 class="text-lg font-bold text-amber-900 dark:text-amber-400 mb-3">JPG vs PNG — Which Format to Use?</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📸</span><span><strong>Use JPG for:</strong> Photographs, social media images, exam/form photos — smaller file size</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🖼️</span><span><strong>Use PNG for:</strong> Logos, screenshots, graphics, images needing transparent backgrounds</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">📏</span><span><strong>File Size:</strong> JPG is typically 3–5× smaller than PNG for the same photograph</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🔍</span><span><strong>Quality:</strong> PNG is lossless; JPG compresses by removing pixel data</span></div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Why would I convert JPG to PNG?",
        answer:
          "You would convert JPG to PNG when you need transparency support, lossless re-editing without further quality loss, or when a specific application requires PNG format.",
      },
      {
        question: "Does converting JPG to PNG improve quality?",
        answer:
          "No. Any quality loss that occurred when the JPG was originally saved is already baked in. Converting to PNG preserves what exists in the JPG without further loss, but it cannot recover lost data.",
      },
      {
        question: "Will the PNG file be larger than the JPG?",
        answer:
          "Yes, in most cases. PNG uses lossless compression and is typically 3–5× larger than the equivalent JPG. This is a trade-off for the lossless encoding and transparency support.",
      },
      {
        question: "Can I get a transparent background PNG from a JPG?",
        answer:
          "Converting JPG to PNG alone does not remove the background. Use our background remover tool first to make the background transparent, then the result will be a PNG with transparency.",
      },
      {
        question: "Is the converter free and unlimited?",
        answer:
          "Yes — free, no account needed, no watermarks, and no limit on the number of files you convert.",
      },
      {
        question: "Does this work on mobile phones?",
        answer:
          "Yes. The tool is mobile-responsive and works on all modern browsers including iOS Safari and Android Chrome.",
      },
    ],
  },

  {
    slug: "resize-photo-20kb",
    metaTitle: "Resize Photo to 20KB Free Online 2027 — Compress to Exact Size",
    metaDescription:
      "Reduce any photo to exactly 20KB or under in seconds. Free, browser-based — no upload, no signup. Ideal for SSC signatures, bank exam forms and government portals in 2027.",
    h1: "Resize Photo to 20KB — Free Online Tool 2027",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Compress your photo to 20KB or less instantly. Perfect for SSC signatures, IBPS forms, and any portal with a strict 20KB limit.",
    sections: [
      {
        heading: "How to Resize a Photo to 20KB",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    A 20 KB file size limit is most commonly found for signature images on government and exam portals in 2027 — including SSC, IBPS, SBI, RBI, and various state public service commission forms. Our free tool automatically calculates the correct JPEG quality setting needed to bring your image under 20 KB while keeping the signature or photo as clear as possible.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Precise 20 KB Target</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Enter 20 as your target and the tool binary-searches for the right quality to land just at or under 20 KB automatically.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">100% Private</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Browser-only processing — your signature or photo is never uploaded to any server or stored anywhere online.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Form-Ready Output</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">The output JPG file passes portal validation on SSC, IBPS, SBI, RRB and most state PSC application sites.</p>
    </div>
  </div>
  <div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
    <h3 class="text-lg font-bold text-amber-900 dark:text-amber-400 mb-3">Where Is a 20 KB Limit Required in 2027?</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">✍️</span><span><strong>SSC Signatures:</strong> All SSC exams require signature images between 10–20 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🏦</span><span><strong>IBPS Signatures:</strong> IBPS PO, Clerk, SO and RRB all cap signatures at 20 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🏛️</span><span><strong>State PSC Portals:</strong> Many state PSCs set 20 KB as the signature upper limit</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🚂</span><span><strong>RRB Portals:</strong> Railway Recruitment Board signature uploads are capped at 20 KB</span></div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "How do I reduce a photo to exactly 20KB?",
        answer:
          "Upload your photo, type '20' in the target size field, and click Resize. The tool automatically finds the JPEG quality setting that produces a file at or under 20 KB.",
      },
      {
        question: "Which exams require a 20KB signature?",
        answer:
          "SSC CGL, CHSL, MTS, CPO, JE and Stenographer all require signatures between 10–20 KB. IBPS PO, Clerk, SO and RRB exams also require signatures under 20 KB.",
      },
      {
        question: "Will my signature still be readable at 20KB?",
        answer:
          "Yes, for a small signature image (140×60 px), 20 KB is sufficient for a clear, readable output. The tool maximises quality within the size constraint.",
      },
      {
        question: "Can I also resize to 10KB or 30KB?",
        answer:
          "Yes. Enter any target value in KB — the tool adapts the quality setting to meet whatever target you set.",
      },
      {
        question: "Is this tool free?",
        answer: "Completely free — no account, no watermark, unlimited uses.",
      },
      {
        question: "Does it work on mobile?",
        answer:
          "Yes. Works on iOS Safari, Android Chrome and all modern mobile browsers — no app needed.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CANVAS PHOTO COLLAGE MAKER
  // ─────────────────────────────────────────────
  {
    slug: "canvas-photo-collage-maker",
    metaTitle: "Canvas Photo Collage Maker — Free Online Tool | photoresizer",
    metaDescription:
      "Turn your photos into a custom canvas print for free. Make a canvas collage or print a large photo on multiple pages. No signup required.",
    h1: "Canvas Photo Collage Maker — Turn Your Photos into a Custom Canvas Print",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "",
        content: ``, // We'll manage the main content in the component itself as it's highly custom.
      },
    ],
    faq: [
      {
        question: "How do I print a photo on multiple pages?",
        answer:
          "Our free poster splitter tool lets you upload any image and split it across multiple pages (A4, Letter, Legal). Just upload your picture, set your desired scale or final size, and download a ready-to-print PDF. No need to download any software.",
      },
      {
        question:
          "Can I print a picture on multiple pages using a regular home printer?",
        answer:
          "Yes! When you split an image using our tool, it generates a tiled PDF. You can print this directly from your computer using a standard home printer and tape the pages together to create a large poster.",
      },
      {
        question:
          "How to print an image on multiple pages without losing quality?",
        answer:
          "To ensure your image stays sharp, start with the highest resolution photo possible. Our poster printing tool preserves the original quality and splits the high-res image into a PDF without adding unnecessary compression.",
      },
      {
        question: "What size canvas should I use for a photo collage?",
        answer:
          "For a 4-photo collage, an 8x10 or 11x14 canvas works well. For larger collages (9-16 photos), consider a 16x20 or 20x24 canvas so each picture is large enough to see clearly.",
      },
      {
        question: "How do I make a canvas photo collage maker for free?",
        answer:
          "You can use our free canvas collage maker above. Just upload your photos, choose a layout, drag and drop to arrange them, and download the finished design. You can then print it yourself or order a canvas print online.",
      },
      {
        question: "Is there a printable 4x6 photo template I can use?",
        answer:
          "Yes, our tool includes a free printable 4x6 photo template layout option, which makes it easy to arrange multiple 4x6 pictures on a larger canvas or split a large photo into 4x6 sections.",
      },
      {
        question: "How to split a picture into multiple pages for printing?",
        answer:
          "Select the 'Print Photo on Multiple Pages' tool above, upload your picture, choose your paper size, and click download. It will automatically slice your image into perfectly sized sections.",
      },
    ],
  },

  {
    slug: "passport-photo-maker-2026",
    metaTitle:
      "Free Passport Photo Maker 2026 — Make Passport Photos Online Instantly",
    metaDescription:
      "Create compliant passport photos online free in 2026. Crop to exact dimensions, set white background, download print-ready JPG. No upload to servers. Works on all devices.",
    h1: "Free Online Passport Photo Maker 2026",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Make a compliant passport photo in 60 seconds — correct crop, white background, exact pixel size. Free, private, no watermark.",
    sections: [
      {
        heading: "How to Make a Passport Photo Online for Free",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Professional passport photo printing can cost ₹100–₹300 at a studio. Our free online passport photo maker lets you create a government-compliant passport photo from any smartphone selfie or portrait photo — with the correct dimensions, aspect ratio, and white background — in under a minute. All processing happens in your browser; your photo is never uploaded to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Country Presets 2026</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">India (35×45mm), USA (2×2in), UK (35×45mm), Schengen, Canada, Australia — exact dimensions per official 2026 specs.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Auto White Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Automatically replace or clean up backgrounds to the required plain white colour without a background-removal subscription.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Print-Ready Output</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Download a print-ready JPG or a 4-up print sheet with four passport photos on a 4×6 inch layout, ready for any photo printer.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Make Your Passport Photo in 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Your Portrait</h4><p class="text-sm text-slate-600 dark:text-slate-400">Take a clear selfie or use any recent portrait photo. Face should be centred with even lighting and plain background.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Choose Country Preset</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your target country — dimensions, resolution and file-size requirements are automatically applied.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Print</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download the single photo or a 4-up print sheet. Print at any photo shop or home printer for an instant passport photo.</p></div>
      </div>
    </div>
  </div>
  <div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
    <h3 class="text-lg font-bold text-amber-900 dark:text-amber-400 mb-3">Passport Photo Requirements by Country (2026)</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🇮🇳</span><span><strong>India:</strong> 35×45 mm, white background, face 70–80% of frame, recent 6 months</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🇺🇸</span><span><strong>USA:</strong> 2×2 inch (51×51 mm), white/off-white background, neutral expression</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🇬🇧</span><span><strong>UK:</strong> 35×45 mm, light grey or cream background, 29–34 mm face height</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🇪🇺</span><span><strong>Schengen:</strong> 35×45 mm, white background, 32–36 mm face height</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🇨🇦</span><span><strong>Canada:</strong> 50×70 mm, white background, 31–36 mm face height</span></div>
      <div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">🇦🇺</span><span><strong>Australia:</strong> 35×45 mm, plain light background, neutral expression</span></div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Can I make a passport photo from a selfie?",
        answer:
          "Yes. Upload a clear selfie with your face directly facing the camera, good lighting, and a plain background. The tool will crop, resize and adjust it to passport photo specifications.",
      },
      {
        question: "Is the output accepted by passport authorities?",
        answer:
          "Our tool produces photos that meet the official dimensional requirements for each country. However, final acceptance depends on photo quality, expression, lighting and recency — factors beyond the tool's control. Always check the latest requirements from your country's passport authority.",
      },
      {
        question: "How do I print the passport photo?",
        answer:
          "Download the 4-up print sheet (four photos on a 4×6 inch canvas) and print it at any photo printing shop, pharmacy printer, or your home inkjet printer on glossy photo paper.",
      },
      {
        question: "Does it work for visa photos too?",
        answer:
          "Yes. Select the country or visa type from the presets — Schengen visa, US visa, UK visa — and the correct specifications are applied automatically.",
      },
      {
        question: "Is it free?",
        answer:
          "Completely free — no signup, no watermark, no hidden fees. You can make and download as many passport photos as you need.",
      },
      {
        question: "Will my photo be stored or shared?",
        answer:
          "Never. All photo processing happens inside your browser. Your portrait photo is never sent to any server, stored anywhere, or shared with third parties.",
      },
    ],
  },

  {
    slug: "passport-size-photo-maker",
    metaTitle: "Passport Size Photo Maker Free 2026 — Online, No Signup",
    metaDescription:
      "Make passport size photos free online in 2026. Correct dimensions, white background, print-ready output. Browser-based — no server upload, works on mobile and desktop.",
    h1: "Free Passport Size Photo Maker Online (2026) — Any Country, Instant Download",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Create passport size photos online in seconds — correct crop, white background, right file size. 100% free. No signup. No watermark.",
    sections: [
      {
        heading: "What Is a Passport Size Photo?",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    A <strong>passport size photo</strong> is a standardised small portrait photograph required for identity documents, visa applications, government exam forms, job applications, and institutional ID cards. Every country defines its own exact dimensions, background colour, and resolution — our free online tool applies all of these automatically, right inside your browser. No file is ever uploaded to a server.
  </p>
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    The most widely required passport photo size in India and across South Asia is <strong>35 × 45 mm</strong> — roughly 413 × 531 pixels at 300 DPI — with a plain white background. For US passports, the required size is a 2 × 2 inch (51 × 51 mm) square. Our maker supports all major country formats in a single click.
  </p>
</div>`,
      },
      {
        heading: "Passport Size Photo Dimensions by Country (2026)",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    Use the table below to confirm the correct size before you download. Our tool presets all of these — just select your country from the dropdown.
  </p>
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Standard Passport Photo Sizes — Quick Reference</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700">
            <th class="text-left py-2 pr-4 font-semibold">Country / Document</th>
            <th class="text-left py-2 pr-4 font-semibold">Size (mm)</th>
            <th class="text-left py-2 pr-4 font-semibold">Pixels @ 300 DPI</th>
            <th class="text-left py-2 font-semibold">Background</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">India — Passport / Visa</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">35 × 45</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">413 × 531</td><td class="py-2 text-slate-600 dark:text-slate-400">White</td></tr>
          <tr><td class="py-2 pr-4 font-medium">USA — Passport / Green Card</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">51 × 51</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">600 × 600</td><td class="py-2 text-slate-600 dark:text-slate-400">White / off-white</td></tr>
          <tr><td class="py-2 pr-4 font-medium">UK — Passport</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">35 × 45</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">413 × 531</td><td class="py-2 text-slate-600 dark:text-slate-400">Light grey / cream</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Schengen Visa (EU)</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">35 × 45</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">413 × 531</td><td class="py-2 text-slate-600 dark:text-slate-400">White</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Canada — Passport</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">50 × 70</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">590 × 826</td><td class="py-2 text-slate-600 dark:text-slate-400">White</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Australia — Passport</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">35 × 45</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">413 × 531</td><td class="py-2 text-slate-600 dark:text-slate-400">White / light grey</td></tr>
          <tr><td class="py-2 pr-4 font-medium">India — Govt Exam / NID</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">25 × 35</td><td class="py-2 pr-4 text-slate-600 dark:text-slate-400">295 × 413</td><td class="py-2 text-slate-600 dark:text-slate-400">White</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <p class="text-sm text-slate-500 dark:text-slate-400">
    ℹ️ Always cross-check with the official application instructions for your specific document — requirements can change without notice.
  </p>
</div>`,
      },
      {
        heading: "How to Make a Passport Size Photo Online — Step by Step",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    Creating a passport photo takes under two minutes. Follow these six steps:
  </p>
  <ol class="space-y-3 text-slate-700 dark:text-slate-300 list-none pl-0">
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">1</span>
      <div><strong>Upload your photo</strong> — tap "Upload Photo" or drag and drop any JPEG, PNG, or HEIC image taken on your phone or camera. No account or login is needed.</div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">2</span>
      <div><strong>Select your country or document type</strong> — choose from the preset list (India Passport, US Passport, Schengen Visa, etc.) or enter custom dimensions in mm or pixels.</div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">3</span>
      <div><strong>Crop and position your face</strong> — use the crop handles so your face fills 70–80% of the frame. Eyes should be level with the upper third of the image.</div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">4</span>
      <div><strong>Clean up the background</strong> — toggle "White Background" to automatically brighten and neutralise imperfect backgrounds. For a full AI background removal, use our dedicated background remover first.</div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">5</span>
      <div><strong>Preview and adjust</strong> — review the live preview at 100% zoom. Adjust brightness or contrast if needed to meet the "clear and natural skin tone" requirement.</div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">6</span>
      <div><strong>Download your photo</strong> — choose a single image or the ready-to-print 4×6 inch sheet (4 photos arranged for home or shop printing). Both are watermark-free.</div>
    </li>
  </ol>
</div>`,
      },
      {
        heading: "Tips for Taking the Perfect Passport Photo at Home",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    A good source photo makes cropping and background removal much easier. Follow these tips before you upload:
  </p>
  <ul class="space-y-2 text-slate-700 dark:text-slate-300">
    <li class="flex gap-2 items-start"><span class="text-blue-500 font-bold mt-0.5">✓</span><span><strong>Use a plain white or light-coloured wall</strong> as your backdrop. Avoid patterned wallpaper, doors, or outdoor backgrounds.</span></li>
    <li class="flex gap-2 items-start"><span class="text-blue-500 font-bold mt-0.5">✓</span><span><strong>Shoot in natural daylight</strong> — face a window but don't let sunlight fall directly on your face. Avoid harsh shadows or flash.</span></li>
    <li class="flex gap-2 items-start"><span class="text-blue-500 font-bold mt-0.5">✓</span><span><strong>Look directly at the camera</strong> with a neutral expression and mouth closed. Both eyes must be open and clearly visible.</span></li>
    <li class="flex gap-2 items-start"><span class="text-blue-500 font-bold mt-0.5">✓</span><span><strong>Remove glasses</strong> — most countries now prohibit tinted or clear glasses in passport photos.</span></li>
    <li class="flex gap-2 items-start"><span class="text-blue-500 font-bold mt-0.5">✓</span><span><strong>Keep hair away from your face</strong> — the full face, forehead, and chin must be visible.</span></li>
    <li class="flex gap-2 items-start"><span class="text-blue-500 font-bold mt-0.5">✓</span><span><strong>Use portrait mode or a standard camera</strong> — avoid ultra-wide lenses that distort facial proportions.</span></li>
    <li class="flex gap-2 items-start"><span class="text-blue-500 font-bold mt-0.5">✓</span><span><strong>Wear everyday clothing</strong> in a colour that contrasts with the white background. Avoid white or very light tops.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why Use Our Passport Photo Maker?",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    Compared to going to a photo studio or paying for app subscriptions, our tool is faster, cheaper, and just as accurate:
  </p>
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
      <div class="font-semibold text-slate-900 dark:text-white mb-1">🆓 Completely Free</div>
      <div class="text-sm text-slate-600 dark:text-slate-400">No payment, no subscription, no hidden upsells. Download unlimited photos at no cost.</div>
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
      <div class="font-semibold text-slate-900 dark:text-white mb-1">🔒 Private & Secure</div>
      <div class="text-sm text-slate-600 dark:text-slate-400">All processing happens locally in your browser. Your photo never leaves your device.</div>
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
      <div class="font-semibold text-slate-900 dark:text-white mb-1">📐 Pixel-Perfect Dimensions</div>
      <div class="text-sm text-slate-600 dark:text-slate-400">Presets for 50+ countries. Output at exactly the required pixel size and DPI — no guessing.</div>
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
      <div class="font-semibold text-slate-900 dark:text-white mb-1">🖨️ Print-Ready Output</div>
      <div class="text-sm text-slate-600 dark:text-slate-400">Download a 4-up layout on a standard 4×6 inch sheet — ready to print at home or any shop.</div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the passport size photo size in India?",
        answer:
          "In India, a passport size photo must be 35 mm wide × 45 mm tall. At 300 DPI, this equals 413 × 531 pixels. The background must be plain white, the face should be clearly visible, and the head (top of hair to chin) should occupy 70–80% of the frame height. These specifications apply to Indian passport, visa, and most government exam applications.",
      },
      {
        question: "Is this passport photo maker really free?",
        answer:
          "Yes — 100% free with no watermark, no signup, and no usage limits. You can create and download as many passport photos as you need at no cost.",
      },
      {
        question: "Can I use my smartphone camera to take the photo?",
        answer:
          "Absolutely. A modern smartphone camera produces more than enough resolution. Stand against a plain white or light wall in good natural lighting, look straight at the camera with a neutral expression, and take the shot in portrait orientation. Then upload it here for precise cropping and resizing.",
      },
      {
        question: "How do I print the passport photo at home?",
        answer:
          "Download the 4-up print sheet (four passport photos arranged on a single page) and print it on 4×6 inch glossy photo paper using any inkjet or laser printer. You can also email the file to an online printing service or take it to a local print shop.",
      },
      {
        question:
          "Will the photo be accepted for Indian government exams like UPSC, SSC, or bank PO?",
        answer:
          "Our maker outputs photos that meet the stated dimension requirements published by major Indian government exam portals (413×531 px, white background, JPEG format). Always verify the exact pixel count and maximum file size in KB from the specific exam notification, as individual portals occasionally specify stricter limits.",
      },
      {
        question:
          "Does this tool remove or change the background automatically?",
        answer:
          "Yes. The built-in background clean-up feature lightens and whitens imperfect backgrounds to meet the white background requirement for most countries. If your background is heavily patterned or coloured, use our dedicated AI Background Remover tool first, then return here to crop to passport size.",
      },
      {
        question: "Is my photo uploaded to any server?",
        answer:
          "No. All processing — cropping, resizing, background cleanup — runs entirely in your browser using client-side JavaScript. Your photo is never sent to any server, which means complete privacy and instant results even on a slow connection.",
      },
      {
        question:
          "Can I create passport photos for countries other than India?",
        answer:
          "Yes. The tool includes presets for over 50 countries, including the USA (2×2 inch), UK (35×45 mm), Canada (50×70 mm), Australia (35×45 mm), and all Schengen visa countries. Simply select the destination country from the dropdown before downloading.",
      },
    ],
  },

  {
    slug: "us-passport-photo-maker",
    metaTitle: "US Passport Photo Maker Free 2026 — 2x2 Inch, White Background",
    metaDescription:
      "Create a compliant US passport photo free online in 2026. 2×2 inch (51×51mm), white background, correct face size. No server upload. Instant download.",
    h1: "US Passport Photo Maker — Free Online 2026",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Generate a US State Department-compliant 2×2 inch passport photo in seconds. Free, private, print-ready.",
    sections: [
      {
        heading: "US Passport Photo Requirements 2026",
        content: `<div class="space-y-8 not-prose"><p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">The US State Department requires all passport photos to be exactly 2×2 inches (51×51 mm) with a white or off-white background. The head must be between 1 inch and 1⅜ inches tall (25–35 mm), centred in the frame. Our free tool enforces all these specifications so your photo will not be rejected at the post office, acceptance facility, or US Embassy.</p><div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"><div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80"><h3 class="text-base font-bold text-slate-900 dark:text-white">Official US Passport Photo Specs 2026</h3></div><div class="overflow-x-auto p-6"><table class="w-full text-sm"><thead><tr class="border-b border-slate-200 dark:border-slate-700"><th class="text-left py-2 pr-4 font-semibold">Requirement</th><th class="text-left py-2 font-semibold">Specification</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-700/50"><tr><td class="py-2 pr-4 font-medium">Photo Size</td><td class="py-2 text-slate-600 dark:text-slate-400">2 × 2 inches (51 × 51 mm)</td></tr><tr><td class="py-2 pr-4 font-medium">Head Size</td><td class="py-2 text-slate-600 dark:text-slate-400">1 – 1⅜ inches from chin to top of head</td></tr><tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-slate-600 dark:text-slate-400">Plain white or off-white</td></tr><tr><td class="py-2 pr-4 font-medium">Expression</td><td class="py-2 text-slate-600 dark:text-slate-400">Neutral, both eyes open and looking at camera</td></tr><tr><td class="py-2 pr-4 font-medium">Recency</td><td class="py-2 text-slate-600 dark:text-slate-400">Taken within the last 6 months</td></tr><tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-slate-600 dark:text-slate-400">Colour JPEG, printed on photo-quality paper</td></tr></tbody></table></div></div></div>`,
      },
    ],
    faq: [
      {
        question: "What are US passport photo requirements in 2026?",
        answer:
          "The photo must be 2×2 inches (51×51 mm), colour JPEG on white or off-white background, with your head occupying 1 to 1⅜ inches of the frame, taken within the last 6 months, with a neutral expression and both eyes open.",
      },
      {
        question: "Can I take my own US passport photo at home?",
        answer:
          "Yes. Use a smartphone camera against a white wall in good even lighting. Avoid shadows, glasses, and hats. Upload the photo here to crop and resize it to the exact 2×2 inch specification.",
      },
      {
        question: "How do I print a 2×2 inch passport photo?",
        answer:
          "Download the 2-up or 4-up print sheet and print on 4×6 inch glossy photo paper. Many pharmacies and office supply stores accept the digital file for same-day printing.",
      },
      {
        question: "Are glasses allowed in US passport photos?",
        answer:
          "As of 2016, the US State Department no longer accepts passport photos with glasses, even prescription glasses. The photo must show your bare face.",
      },
      {
        question: "Is this free?",
        answer:
          "Yes — completely free with no signup, no watermark, no photo limits.",
      },
      {
        question: "Does the tool work for US visa photos too?",
        answer:
          "Yes. US visa photos use the same 2×2 inch specification as US passport photos.",
      },
    ],
  },

  {
    slug: "uk-passport-photo-maker",
    metaTitle: "UK Passport Photo Maker Free 2026 — 35x45mm, Correct Specs",
    metaDescription:
      "Make a compliant UK passport photo free online in 2026. 35×45mm, light grey or cream background, correct face height. Browser-based, no upload. Instant download.",
    h1: "UK Passport Photo Maker — Free Online 2026",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Create an HMPO-compliant 35×45 mm UK passport photo instantly. Free, private, no watermark.",
    sections: [
      {
        heading: "UK Passport Photo Requirements 2026",
        content: `<div class="space-y-8 not-prose"><p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">UK passport photos must meet His Majesty's Passport Office (HMPO) standards. The photo is 35×45 mm with the face taking up 29–34 mm of the height. The background must be plain light grey or cream — not white. Our free tool applies all UK-specific requirements and guides you through correct cropping to avoid rejection.</p><div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"><div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80"><h3 class="text-base font-bold text-slate-900 dark:text-white">HMPO UK Passport Photo Specs 2026</h3></div><div class="overflow-x-auto p-6"><table class="w-full text-sm"><thead><tr class="border-b border-slate-200 dark:border-slate-700"><th class="text-left py-2 pr-4 font-semibold">Requirement</th><th class="text-left py-2 font-semibold">Specification</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-700/50"><tr><td class="py-2 pr-4 font-medium">Photo Size</td><td class="py-2 text-slate-600 dark:text-slate-400">35 × 45 mm</td></tr><tr><td class="py-2 pr-4 font-medium">Face Height</td><td class="py-2 text-slate-600 dark:text-slate-400">29–34 mm (chin to crown)</td></tr><tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-slate-600 dark:text-slate-400">Plain light grey or cream (not white)</td></tr><tr><td class="py-2 pr-4 font-medium">Expression</td><td class="py-2 text-slate-600 dark:text-slate-400">Neutral, mouth closed, eyes open</td></tr><tr><td class="py-2 pr-4 font-medium">Recency</td><td class="py-2 text-slate-600 dark:text-slate-400">Taken within the last month</td></tr></tbody></table></div></div></div>`,
      },
    ],
    faq: [
      {
        question: "What is the UK passport photo background colour?",
        answer:
          "UK passport photos must have a plain light grey or cream background — not white. This distinguishes them from most other countries' requirements.",
      },
      {
        question: "How tall should the face be in a UK passport photo?",
        answer:
          "The face (chin to crown of head) must be between 29 mm and 34 mm within the 45 mm height of the photo.",
      },
      {
        question: "Can I take a UK passport photo on my phone?",
        answer:
          "Yes, but ensure consistent, shadow-free lighting, a plain light grey/cream background, and that your face is fully visible. Upload the result here to resize and crop correctly.",
      },
      {
        question: "Does the tool support digital UK passport applications?",
        answer:
          "Yes. You can download a digital JPG that meets HMPO's digital submission specifications for online passport renewals.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes — completely free, no account, no watermark.",
      },
      {
        question: "Are glasses allowed in UK passport photos?",
        answer:
          "Glasses are generally not recommended and may cause rejection if they create reflections or obscure the eyes. Check the latest HMPO guidelines at gov.uk for current rules.",
      },
    ],
  },

  {
    slug: "india-passport-photo-maker",
    metaTitle:
      "India Passport Photo Maker Free 2026 — 35x45mm White Background",
    metaDescription:
      "Create India passport photos free online in 2026. 35×45mm, plain white background, JPG. No upload needed. Download print-ready file instantly. No signup.",
    h1: "India Passport Photo Maker — Free Online 2026",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Make MEA-compliant Indian passport photos instantly — 35×45 mm, white background, print-ready. Free and private.",
    sections: [
      {
        heading: "Indian Passport Photo Requirements 2026",
        content: `<div class="space-y-8 not-prose"><p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">The Ministry of External Affairs (MEA) and Passport Seva Kendra require passport photographs to be 35×45 mm with a plain white background, sharp focus, and the face occupying 70–80% of the frame. Photos must be recent (within the last 6 months), in colour, and submitted as a high-resolution JPEG. Our tool makes it easy to create, crop, and download compliant photos without visiting a studio.</p><div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6"><h3 class="text-lg font-bold text-amber-900 dark:text-amber-400 mb-3">Indian Passport Photo Checklist 2026</h3><div class="grid sm:grid-cols-2 gap-3"><div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">✅</span><span>Size: 35mm × 45mm (width × height)</span></div><div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">✅</span><span>Background: Plain white only</span></div><div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">✅</span><span>Face: 70–80% of frame, centred, front-facing</span></div><div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">✅</span><span>Expression: Neutral, eyes fully open</span></div><div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">✅</span><span>Recency: Taken within last 6 months</span></div><div class="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"><span class="mt-1">✅</span><span>No spectacles, no coloured contact lenses</span></div></div></div></div>`,
      },
    ],
    faq: [
      {
        question: "What is the size of an Indian passport photo in 2026?",
        answer:
          "An Indian passport photo must be 35 mm wide and 45 mm tall. At 300 DPI, this equals approximately 413×531 pixels.",
      },
      {
        question: "Can I wear glasses in an Indian passport photo?",
        answer:
          "No. As per MEA guidelines, spectacles are not allowed in Indian passport photos.",
      },
      {
        question: "Can I use this for Passport Seva Kendra (PSK) applications?",
        answer:
          "Yes. The tool produces photos meeting PSK digital submission requirements. Always verify the latest requirements on passportindia.gov.in before submitting.",
      },
      {
        question: "Can I also use the photo for Indian visa applications?",
        answer:
          "Yes. Most Indian visa forms — including e-Visa and sticker visa applications — accept the same 35×45 mm white-background photo.",
      },
      {
        question: "Is it free?",
        answer: "Completely free — no account, no watermark, no photo limit.",
      },
      {
        question: "How do I print the photo?",
        answer:
          "Download the print sheet and print at any photo studio, or order online print delivery. Print on glossy photo paper and cut to 35×45 mm.",
      },
    ],
  },

  {
    slug: "remove-background",
    metaTitle:
      "Remove Background Free Online 2026 — Instant AI Background Remover",
    metaDescription:
      "Remove image background free online in 2026. AI-powered, instant results, transparent PNG output. No upload to servers. Works on photos, logos, and product images.",
    h1: "Free Background Remover 2026 — Remove Image Background Online",
    showTool: "bg-remover",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Remove any image background instantly with AI. Get a transparent PNG in seconds — free, private, no signup.",
    sections: [
      {
        heading: "AI-Powered Background Removal — Free & Private",
        content: `<div class="space-y-8 not-prose"><p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Whether you need to cut out a product photo for e-commerce, create a transparent logo PNG, prepare a passport photo with a new background, or remove a cluttered backdrop from a portrait, our free background remover uses AI to detect and separate the subject from the background in seconds. Everything runs in your browser — your photos never leave your device.</p><div class="grid md:grid-cols-3 gap-5"><div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800"><h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">AI Precision Cutout</h3><p class="text-sm text-slate-600 dark:text-slate-400">Smart AI detects edges — even fine hair strands — and creates a clean transparent cutout without manual masking.</p></div><div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800"><h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Transparent PNG Output</h3><p class="text-sm text-slate-600 dark:text-slate-400">Download a clean transparent PNG with no background — paste it on any colour, texture, or new background image.</p></div><div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800"><h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Instant & Free</h3><p class="text-sm text-slate-600 dark:text-slate-400">No subscription, no credits, no upload queue. Remove backgrounds from unlimited images — free, instantly, forever.</p></div></div></div>`,
      },
    ],
    faq: [
      {
        question: "Is this background remover really free?",
        answer:
          "Yes — 100% free with no account, no credits system, no watermark, and no limit on the number of images you can process.",
      },
      {
        question: "Does it work on hair and complex edges?",
        answer:
          "Yes. The AI model handles fine hair strands, fur, and intricate edges with high accuracy. Very complex images may occasionally need minor manual touch-up.",
      },
      {
        question: "What output format is the background-removed image?",
        answer:
          "The output is a PNG file with a transparent alpha channel — the standard format for images with transparent backgrounds.",
      },
      {
        question: "Can I replace the background with a new colour or image?",
        answer:
          "Yes. After removing the background, you can fill it with white, any solid colour, or a custom background image before downloading.",
      },
      {
        question: "Is it safe to use for sensitive photos?",
        answer:
          "Yes — all processing runs locally in your browser. Your photo is never transmitted to any server.",
      },
      {
        question: "Does it work for logo background removal?",
        answer:
          "Yes. Upload a logo JPG or PNG and the tool will remove the white or coloured background, producing a transparent PNG suitable for web and print use.",
      },
    ],
  },

  {
    slug: "free-background-remover",
    metaTitle:
      "Free Background Remover 2026 — Remove Image Background Instantly",
    metaDescription:
      "Remove photo background free in 2026. AI cutout, transparent PNG, no watermark, no upload to servers. Works for photos, logos, and product images on any device.",
    h1: "Free Background Remover — 2026",
    showTool: "bg-remover",

    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "AI background removal — transparent PNG in seconds. Free, private, zero watermark.",
    sections: [
      {
        heading: "Remove Any Background for Free",
        content: `<div class="space-y-6 not-prose"><p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Our free background remover uses on-device AI to cut out people, products, logos and objects from any photo in seconds. No subscription, no credits — just upload and download a clean transparent PNG. Works on desktop and mobile, with all processing staying entirely within your browser.</p><div class="grid md:grid-cols-3 gap-5"><div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800"><h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Subjects Supported</h3><p class="text-sm text-slate-600 dark:text-slate-400">People, animals, products, vehicles, logos — the AI handles a wide range of subject types with clean edge detection.</p></div><div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800"><h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Replace Background</h3><p class="text-sm text-slate-600 dark:text-slate-400">After removal, add a white, coloured, or custom image background before downloading — all in one step.</p></div><div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800"><h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">No Upload Ever</h3><p class="text-sm text-slate-600 dark:text-slate-400">100% browser-based processing — your image data never leaves your device at any point in the process.</p></div></div></div>`,
      },
    ],
    faq: [
      {
        question: "Is the background remover free?",
        answer:
          "Yes — completely free, unlimited images, no account required, no watermarks added.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "JPG, PNG, WEBP, and GIF files up to 50 MB can be uploaded. The output is always a transparent PNG.",
      },
      {
        question: "Can I remove the background from a product photo?",
        answer:
          "Yes. Product photo background removal for e-commerce platforms (Amazon, Flipkart, Shopify) is one of the most common use cases. The AI produces a clean white or transparent background.",
      },
      {
        question: "Does it handle complex backgrounds?",
        answer:
          "Yes. The AI model works well on both simple solid-colour backgrounds and complex cluttered backgrounds.",
      },
      {
        question: "Is my photo safe?",
        answer:
          "Completely. No image data is sent to any server — all processing happens in your browser.",
      },
      {
        question: "Can I add a new background after removal?",
        answer:
          "Yes. After removing the background you can fill it with white, a colour, or upload a custom background image.",
      },
    ],
  },

  {
    slug: "ctet-photo-resizer",
    metaTitle: "CTET Photo Resizer 2027 — Resize Image Online Free, No Upload",
    metaDescription:
      "Resize your CTET 2027 exam photo online free. Instantly set dimensions, file size & background as per CBSE CTET guidelines. No upload, private, works on mobile.",
    h1: "CTET Photo Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize photo for CTET 2027 exactly as per CBSE requirements. Instant browser-based resizer — private, free, no watermark.",
    sections: [
      {
        heading: "What Are the CTET 2027 Photo Requirements?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For CTET 2027 (Central Teacher Eligibility Test), CBSE has specific photo requirements that all candidates must follow. The photograph must be a recent passport-size color photo taken against a white or light-colored background. The minimum dimensions should be 200 x 200 pixels, and the file size must be between 10 KB and 200 KB. The photo should be in JPG/JPEG format with a clear, front-facing view of your face. The CTET photo resizer helps you meet all these requirements instantly without uploading your image to any server. All processing happens in your browser, ensuring complete privacy and security of your personal photograph.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Dimensions: 200x200 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Minimum required dimensions for CTET 2027 photo. Tool automatically resizes to meet this specification.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">File Size: 10-200 KB</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress your photo to meet CTET file size requirements while maintaining quality.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">White/Light Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Background should be plain white or light-colored. Tool helps adjust lighting if needed.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize CTET Photo Online — 3 Simple Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your recent passport-size color photo from device gallery.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set CTET Specifications</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x200 pixels, set file size between 10-200 KB, adjust quality.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Upload</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized JPG and upload to CTET 2027 application portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the CTET 2027 photo size requirement?",
        answer:
          "CBSE requires CTET 2027 photo to be minimum 200x200 pixels, file size between 10-200 KB, in JPG/JPEG format with white or light background.",
      },
      {
        question: "Can I resize an existing photo for CTET 2027?",
        answer:
          "Yes, you can resize any existing passport-size photo to meet CTET 2027 specifications using this tool, provided the original photo meets basic quality standards.",
      },
      {
        question: "Is my CTET photo data safe?",
        answer:
          "Absolutely. The tool processes your photo entirely in your browser. No photo is ever uploaded to any server or stored anywhere.",
      },
      {
        question: "What if my CTET photo is too large in file size?",
        answer:
          "Use the file size compression slider to reduce your photo to under 200 KB while keeping it above 10 KB minimum. The tool shows real-time file size.",
      },
      {
        question: "Does CTET require a specific background color?",
        answer:
          "CTET requires a white or light-colored background. This tool can help adjust brightness and contrast to make your photo compliant.",
      },
    ],
  },
  {
    slug: "voter-id-photo-size-reducer",
    metaTitle: "Voter ID Photo Size Reducer 2027 — Compress Photo Online Free",
    metaDescription:
      "Reduce voter ID photo size online for 2027 elections. Compress image to under 50 KB, adjust dimensions as per ECI guidelines. Free, private, browser-based.",
    h1: "Voter ID Photo Size Reducer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Reduce voter ID photo size as per ECI 2027 guidelines. Compress to exact KB requirements instantly — no upload, 100% private.",
    sections: [
      {
        heading: "What Are the Voter ID Photo Size Requirements for 2027?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For Voter ID applications and updates in 2027, the Election Commission of India (ECI) has specific photo requirements. The photograph must be a recent passport-size color photo with a plain white background. The maximum file size should be under 50 KB, with dimensions typically around 200 x 230 pixels. The photo should clearly show your face from front with a neutral expression. The voter ID photo size reducer helps you compress your image to meet these exact requirements while maintaining acceptable quality. All processing occurs in your browser, ensuring your personal photo remains private and secure without any server upload.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max File Size: 50 KB</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress your voter ID photo to under 50 KB while maintaining clear visibility of your face.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Dimensions: 200x230 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Recommended dimensions for voter ID photo that work perfectly with ECI portal upload requirements.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Plain White Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">White or light background required for ECI compliance. Tool helps adjust background lighting.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Reduce Voter ID Photo Size in 3 Easy Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your passport-size photo from device or take a new photo with camera.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set Voter ID Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x230 pixels, set max file size to 50 KB, adjust quality slider.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Upload</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download reduced photo and upload to voter ID application or correction portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the maximum voter ID photo file size for 2027?",
        answer:
          "ECI typically requires voter ID photos to be under 50 KB. Some states may allow up to 100 KB, but 50 KB is the recommended maximum for smooth upload.",
      },
      {
        question: "Can I reduce an existing photo for voter ID?",
        answer:
          "Yes, you can reduce the size of any existing JPEG/PNG photo to meet voter ID requirements. The tool handles compression and resizing automatically.",
      },
      {
        question: "Is my photo safe during compression?",
        answer:
          "Yes, the tool works entirely in your browser. Your photo never leaves your device, ensuring complete privacy and security.",
      },
      {
        question: "What dimensions should my voter ID photo be?",
        answer:
          "The recommended dimensions are 200 x 230 pixels. This ensures your photo displays correctly on the ECI portal and printed voter ID card.",
      },
      {
        question: "Does the tool work on mobile phones?",
        answer:
          "Yes, the voter ID photo size reducer is fully responsive and works seamlessly on Android, iOS, and all modern mobile browsers.",
      },
    ],
  },
  {
    slug: "rrb-alp-photo-resizer",
    metaTitle: "RRB ALP Photo Resizer 2027 — Resize Image Online Free",
    metaDescription:
      "Resize RRB ALP 2027 exam photo online free. Set dimensions & file size as per RRB guidelines. No upload, private, instant download.",
    h1: "RRB ALP Photo Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize photo for RRB ALP 2027 exactly as per Railway Recruitment Board specifications. Browser-based, free, no upload.",
    sections: [
      {
        heading: "What Are the RRB ALP 2027 Photo Requirements?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For RRB ALP 2027 (Railway Recruitment Board Assistant Loco Pilot), candidates must upload a photograph meeting specific criteria. The photo should be a recent passport-size color photograph with a white background. The dimensions should be approximately 200 x 230 pixels with a file size between 30 KB and 70 KB. The image must be in JPG/JPEG format with clear facial features visible. Additionally, candidates need to ensure the photo is not older than 30 days from the application date. The RRB ALP photo resizer helps you meet all these requirements instantly with no server upload, ensuring your personal data stays private.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x230 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard RRB ALP photo dimensions for 2027 cycle. Tool auto-adjusts to match this requirement.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">30-70 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress photo to meet RRB ALP file size requirements while retaining quality.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">White Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">RRB requires white or very light background. Tool helps optimize background lighting.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize RRB ALP Photo — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Your Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your passport-size photo from device gallery or take a new photo.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set RRB ALP Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x230 pixels, target 30-70 KB file size, adjust as needed.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Apply</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized JPG and upload to RRB ALP 2027 application portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the RRB ALP 2027 photo specifications?",
        answer:
          "RRB ALP 2027 requires 200x230 pixel photo, 30-70 KB file size, JPG format with white background and clear face visibility.",
      },
      {
        question: "Can I use a mobile photo for RRB ALP?",
        answer:
          "Yes, you can take a photo with your mobile phone and then resize it using this tool to meet RRB ALP specifications.",
      },
      {
        question: "Is my RRB ALP photo data secure?",
        answer:
          "Yes, all processing happens in your browser. Your photo never leaves your device, ensuring complete privacy.",
      },
      {
        question: "What if my photo is older than 30 days?",
        answer:
          "RRB ALP requires a recent photo not older than 30 days. You should take a fresh photo before resizing and applying.",
      },
      {
        question: "Does RRB ALP require a signature as well?",
        answer:
          "Yes, RRB ALP also requires a signature in specified dimensions. We have separate tools for signature resizing as well.",
      },
    ],
  },
  {
    slug: "resize-photo-driving-license-sarathi",
    metaTitle:
      "Resize Photo for Driving License Sarathi 2027 — Free Online Tool",
    metaDescription:
      "Resize driving license photo for Sarathi 2027 portal. Set dimensions & file size as per RTO requirements. Free, private, no upload needed.",
    h1: "Resize Photo for Driving License Sarathi 2027 — Free Online",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize photo for driving license application on Sarathi portal 2027. Exact RTO specifications — instant, private, no watermark.",
    sections: [
      {
        heading:
          "What Are the Driving License Photo Requirements on Sarathi Portal?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For applying for a driving license through the Sarathi portal in 2027, you need to upload a passport-size photograph meeting specific RTO requirements. The photo should be a recent color photograph with a white or light background, clear front-facing view with neutral expression. The dimensions typically need to be around 200 x 230 pixels with a maximum file size of 50 KB. The image must be in JPG/JPEG format. The Sarathi portal, managed by the Ministry of Road Transport and Highways (MoRTH), has strict validation for photo uploads. Our tool helps you resize your photo to meet these exact specifications without uploading your image to any server, ensuring your personal data stays private.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x230 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard driving license photo dimensions for Sarathi portal upload in 2027.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 50 KB</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">File size must be under 50 KB for smooth upload to Sarathi portal.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">White/Light Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">RTO requires plain white or light background for driving license photo.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize Driving License Photo for Sarathi — 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your passport-size photo from device gallery.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set Sarathi Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x230 pixels, target under 50 KB, adjust quality slider.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Upload</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized JPG and upload to Sarathi driving license application.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "What are the driving license photo size requirements for Sarathi portal?",
        answer:
          "Sarathi portal requires 200x230 pixel photo with max 50 KB file size, JPG format with white or light background.",
      },
      {
        question: "Can I use a selfie for driving license photo?",
        answer:
          "Yes, but ensure it's a clear front-facing photo with white background, neutral expression, and proper lighting.",
      },
      {
        question: "Is my photo data safe when resizing?",
        answer:
          "Yes, the tool works entirely in your browser. No photo upload to any server, complete privacy maintained.",
      },
      {
        question: "What if my photo file is too large?",
        answer:
          "Use the compression slider to reduce file size. The tool shows real-time file size so you can stay under 50 KB.",
      },
      {
        question: "Does this work for both learner and permanent license?",
        answer:
          "Yes, the same photo specifications apply for both learner's license and permanent driving license on Sarathi portal.",
      },
    ],
  },
  {
    slug: "afcat-photo-resizer",
    metaTitle: "AFCAT Photo Resizer 2027 — Resize Image Online Free",
    metaDescription:
      "Resize AFCAT 2027 exam photo online free. Set dimensions & file size as per IAF requirements. No upload, private, instant download.",
    h1: "AFCAT Photo Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize photo for AFCAT 2027 as per Indian Air Force specifications. Instant browser-based tool — free, private, no upload.",
    sections: [
      {
        heading: "What Are the AFCAT 2027 Photo Requirements?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For AFCAT 2027 (Air Force Common Admission Test), candidates must upload a photograph adhering to Indian Air Force specifications. The photo should be a recent passport-size color photograph with a plain white background. The recommended dimensions are approximately 200 x 230 pixels with a maximum file size of 50 KB. The image format must be JPG/JPEG. The photo should clearly show your face with a neutral expression, and you should not be wearing any headgear except for religious reasons. The AFCAT photo resizer helps you instantly resize your photo to meet all these requirements with no server upload, keeping your data completely private.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x230 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard AFCAT photo dimensions for 2027 cycle. Tool auto-adjusts to match.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 50 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress photo to under 50 KB while maintaining clear facial features.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">White Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">IAF requires plain white background with clear front-facing view.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize AFCAT Photo — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your passport-size photo from device gallery.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set AFCAT Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x230 pixels, target under 50 KB, adjust quality.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Apply</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized JPG and upload to AFCAT 2027 application portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the AFCAT 2027 photo specifications?",
        answer:
          "AFCAT 2027 requires 200x230 pixel photo, max 50 KB file size, JPG format with plain white background and clear face view.",
      },
      {
        question: "Can I wear glasses in my AFCAT photo?",
        answer:
          "It's recommended to remove glasses for the photo unless medically required, as clear facial features are important for identification.",
      },
      {
        question: "Is my AFCAT photo data secure?",
        answer:
          "Yes, the tool processes your image entirely in your browser. No photo upload to any server ensures complete privacy.",
      },
      {
        question: "What if my photo is from an older application?",
        answer:
          "AFCAT requires a recent photo. You should take a fresh photo not older than 30 days for the application.",
      },
      {
        question: "Does AFCAT require a signature too?",
        answer:
          "Yes, AFCAT also requires a signature upload. You can use our signature resizer tool for that requirement.",
      },
    ],
  },
  {
    slug: "ssc-photo-resizer-2027",
    metaTitle: "SSC Photo Resizer 2027 — Resize Image Online Free",
    metaDescription:
      "Resize SSC 2027 exam photo online free. Set dimensions & file size as per Staff Selection Commission guidelines. No upload, private.",
    h1: "SSC Photo Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize photo for SSC exams 2027 as per SSC guidelines. Instant browser-based tool — free, private, no watermark.",
    sections: [
      {
        heading: "What Are the SSC 2027 Photo Requirements?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For all SSC (Staff Selection Commission) exams in 2027, candidates must upload a photograph meeting specific requirements. The photo should be a recent passport-size color photograph with a white background. The dimensions must be approximately 200 x 230 pixels with a maximum file size of 50 KB. The image format should be JPG/JPEG. The photo should clearly show your face with a neutral expression, and you should not be wearing any cap or dark glasses. The SSC photo resizer helps you instantly resize your photo to meet these requirements, with all processing done in your browser for complete privacy.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x230 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard SSC photo dimensions applicable for all SSC exams in 2027.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 50 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">SSC requires photo under 50 KB. Tool helps compress while maintaining quality.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">White Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">SSC requires plain white background with clear front-facing view.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize SSC Photo — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Your Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your passport-size color photo from device.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set SSC Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x230 pixels, target under 50 KB, adjust quality slider.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Apply</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized JPG and upload to SSC exam application portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the SSC 2027 photo specifications?",
        answer:
          "SSC requires 200x230 pixel photo, max 50 KB file size, JPG format with plain white background and clear facial features.",
      },
      {
        question: "Can I use a mobile photo for SSC application?",
        answer:
          "Yes, you can take a photo with your mobile and resize it using this tool to meet SSC specifications.",
      },
      {
        question: "Is my SSC photo data secure?",
        answer:
          "Yes, all processing happens in your browser. Your photo never leaves your device, ensuring complete privacy.",
      },
      {
        question: "What if my photo is already resized?",
        answer:
          "You can still use the tool to verify and adjust the dimensions and file size to exactly match SSC requirements.",
      },
      {
        question: "Does SSC require a signature as well?",
        answer:
          "Yes, SSC applications also require a signature in specified dimensions. We have a separate signature resizer tool available.",
      },
    ],
  },
  {
    slug: "csir-net-signature-resizer",
    metaTitle: "CSIR NET Signature Resizer 2027 — Resize Signature Online Free",
    metaDescription:
      "Resize CSIR NET 2027 signature online free. Set dimensions & file size as per CSIR guidelines. No upload, private, instant download.",
    h1: "CSIR NET Signature Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize signature for CSIR NET 2027 exactly as per CSIR specifications. Browser-based, free, no upload needed.",
    sections: [
      {
        heading: "What Are the CSIR NET 2027 Signature Requirements?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For CSIR NET (Council of Scientific & Industrial Research National Eligibility Test) 2027, candidates must upload a scanned signature meeting specific requirements. The signature should be in black or blue ink on white paper, scanned at proper resolution. The dimensions should be approximately 200 x 50 pixels with a maximum file size of 30 KB. The format must be JPG/JPEG or PNG. The signature should be clear and match the candidate's usual signature. The CSIR NET signature resizer helps you instantly resize your signature to meet these requirements with no server upload, ensuring complete privacy and security.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x50 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard CSIR NET signature dimensions for 2027. Tool auto-adjusts to match.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 30 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress signature to under 30 KB while maintaining clarity.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Black or Blue Ink</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Signature should be in black or blue ink on white paper for best scanning results.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize CSIR NET Signature — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Signature</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your scanned signature image from device.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set CSIR Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x50 pixels, target under 30 KB, adjust quality.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Upload</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized signature and upload to CSIR NET application.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the CSIR NET 2027 signature specifications?",
        answer:
          "CSIR NET requires 200x50 pixel signature, max 30 KB file size, JPG/PNG format in black or blue ink on white paper.",
      },
      {
        question: "Can I use a digital signature for CSIR NET?",
        answer:
          "No, CSIR NET requires a handwritten signature that is scanned and uploaded. Digital signatures are not accepted.",
      },
      {
        question: "Is my signature data secure?",
        answer:
          "Yes, the tool works entirely in your browser. Your signature never leaves your device, ensuring complete privacy.",
      },
      {
        question: "What if my signature file is too large?",
        answer:
          "Use the compression slider to reduce file size. The tool shows real-time file size to stay under 30 KB.",
      },
      {
        question: "Does CSIR NET require a photo too?",
        answer:
          "Yes, CSIR NET also requires a photo in specified dimensions. Use our photo resizer tool for that requirement.",
      },
    ],
  },
  {
    slug: "army-agniveer-photo-resizer",
    metaTitle: "Army Agniveer Photo Resizer 2027 — Resize Image Online Free",
    metaDescription:
      "Resize Army Agniveer 2027 photo online free. Set dimensions & file size as per Indian Army requirements. No upload, private.",
    h1: "Army Agniveer Photo Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize photo for Army Agniveer 2027 as per Indian Army specifications. Instant tool — free, private, no upload.",
    sections: [
      {
        heading: "What Are the Army Agniveer 2027 Photo Requirements?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For Army Agniveer 2027 recruitment, candidates must upload a photograph meeting Indian Army specifications. The photo should be a recent passport-size color photograph with a plain white background. The dimensions should be approximately 200 x 230 pixels with a maximum file size of 50 KB. The image format must be JPG/JPEG. The photo should clearly show your face with a neutral expression. You should not be wearing any cap, dark glasses, or uniform. The Army Agniveer photo resizer helps you instantly resize your photo to meet all these requirements, with all processing done in your browser for complete privacy.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x230 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard Army Agniveer photo dimensions for 2027 recruitment cycle.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 50 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress photo to under 50 KB while maintaining clear facial features.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">White Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Indian Army requires plain white background with clear front-facing view.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize Army Agniveer Photo — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your passport-size photo from device gallery.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set Agniveer Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x230 pixels, target under 50 KB, adjust quality.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Apply</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized JPG and upload to Army Agniveer application portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the Army Agniveer 2027 photo specifications?",
        answer:
          "Army Agniveer requires 200x230 pixel photo, max 50 KB file size, JPG format with plain white background and clear face view.",
      },
      {
        question: "Can I wear uniform in my Agniveer photo?",
        answer:
          "No, you should wear civilian clothes for the photo. Wearing uniform or cap is not allowed for the photograph.",
      },
      {
        question: "Is my photo data secure?",
        answer:
          "Yes, all processing happens in your browser. Your photo never leaves your device, ensuring complete privacy.",
      },
      {
        question: "What if my photo is from an older application?",
        answer:
          "You should take a fresh photo for Army Agniveer 2027 application as it requires a recent photograph.",
      },
      {
        question: "Does Army Agniveer require a signature?",
        answer:
          "Yes, the application also requires a signature. Use our signature resizer tool for that requirement.",
      },
    ],
  },
  {
    slug: "ibps-handwritten-declaration-resizer",
    metaTitle: "IBPS Handwritten Declaration Resizer 2027 — Resize Online Free",
    metaDescription:
      "Resize IBPS handwritten declaration 2027 online free. Set dimensions & file size as per IBPS guidelines. No upload, private.",
    h1: "IBPS Handwritten Declaration Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize handwritten declaration for IBPS 2027 as per IBPS specifications. Instant browser-based tool — free, private.",
    sections: [
      {
        heading:
          "What Are the IBPS Handwritten Declaration Requirements for 2027?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For IBPS (Institute of Banking Personnel Selection) exams in 2027, candidates must upload a handwritten declaration meeting specific requirements. The declaration should be written in the candidate's own handwriting in English or Hindi on a white paper. The text is: \"I, [Candidate Name], hereby declare that all the information submitted by me in the application form is correct, true, and valid. I will present the supporting documents as and when required.\" The dimensions should be approximately 200 x 50 pixels with a maximum file size of 30 KB. The format must be JPG/JPEG. The IBPS handwritten declaration resizer helps you instantly resize your declaration to meet these requirements with no server upload.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x50 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard IBPS handwritten declaration dimensions for 2027 applications.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 30 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress declaration to under 30 KB while maintaining readability.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Handwritten on White Paper</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Declaration must be handwritten in English or Hindi on white paper.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize IBPS Handwritten Declaration — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Write Declaration</h4><p class="text-sm text-slate-600 dark:text-slate-400">Write the declaration in your own handwriting on white paper.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload & Set Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Upload scanned declaration, choose 200x50 pixels, target under 30 KB.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Upload</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized declaration and upload to IBPS application portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the IBPS handwritten declaration text?",
        answer:
          "The text is: 'I, [Candidate Name], hereby declare that all the information submitted by me in the application form is correct, true, and valid. I will present the supporting documents as and when required.'",
      },
      {
        question: "What are the IBPS declaration specifications?",
        answer:
          "IBPS requires 200x50 pixel handwritten declaration, max 30 KB file size, JPG format in English or Hindi.",
      },
      {
        question: "Is my declaration data secure?",
        answer:
          "Yes, the tool works entirely in your browser. Your declaration never leaves your device, ensuring complete privacy.",
      },
      {
        question: "Can I type the declaration instead of handwriting?",
        answer:
          "No, IBPS specifically requires a handwritten declaration. Typed declarations will be rejected during verification.",
      },
      {
        question: "What if my declaration file is too large?",
        answer:
          "Use the compression slider to reduce file size. The tool shows real-time file size to stay under 30 KB.",
      },
    ],
  },
  {
    slug: "resize-left-thumb-impression-ibps",
    metaTitle: "Resize Left Thumb Impression IBPS 2027 — Online Free Tool",
    metaDescription:
      "Resize left thumb impression for IBPS 2027 online free. Set dimensions & file size as per IBPS guidelines. No upload, private.",
    h1: "Resize Left Thumb Impression IBPS 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize left thumb impression for IBPS 2027 as per IBPS specifications. Instant tool — free, private, no upload.",
    sections: [
      {
        heading:
          "What Are the IBPS Left Thumb Impression Requirements for 2027?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For IBPS (Institute of Banking Personnel Selection) exams in 2027, candidates must upload a left thumb impression meeting specific requirements. The left thumb impression should be taken on a white paper using black or blue ink pad. The dimensions should be approximately 200 x 200 pixels with a maximum file size of 30 KB. The format must be JPG/JPEG. The impression should be clear with proper visibility of the thumb print patterns. The left thumb impression is used for identity verification during the examination process. Our tool helps you resize your thumb impression to meet these requirements with no server upload.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x200 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard IBPS left thumb impression dimensions for 2027 applications.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 30 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress thumb impression to under 30 KB while maintaining clarity.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Left Thumb Only</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Only left thumb impression is accepted. Right thumb or other fingers will be rejected.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize Left Thumb Impression — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Take Thumb Impression</h4><p class="text-sm text-slate-600 dark:text-slate-400">Take left thumb impression on white paper using black/blue ink.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload & Set Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Upload scanned impression, choose 200x200 pixels, target under 30 KB.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Upload</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized image and upload to IBPS application portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Which thumb impression is required for IBPS?",
        answer:
          "IBPS requires the left thumb impression only. Make sure you use the left thumb for the impression.",
      },
      {
        question: "What are the IBPS left thumb impression specifications?",
        answer:
          "IBPS requires 200x200 pixel left thumb impression, max 30 KB file size, JPG format with black or blue ink on white paper.",
      },
      {
        question: "Is my thumb impression data secure?",
        answer:
          "Yes, the tool works entirely in your browser. Your thumb impression never leaves your device, ensuring complete privacy.",
      },
      {
        question: "Can I use color ink for thumb impression?",
        answer:
          "Use black or blue ink pad only. Color inks may not be accepted by the IBPS system.",
      },
      {
        question: "What if my thumb impression file is too large?",
        answer:
          "Use the compression slider to reduce file size. The tool shows real-time file size to stay under 30 KB.",
      },
    ],
  },
  {
    slug: "uksssc-photo-resizer",
    metaTitle: "UKSSSC Photo Resizer 2027 — Resize Image Online Free",
    metaDescription:
      "Resize UKSSSC 2027 exam photo online free. Set dimensions & file size as per Uttarakhand Subordinate Service Selection Commission guidelines. No upload.",
    h1: "UKSSSC Photo Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize photo for UKSSSC 2027 as per UKSSSC specifications. Instant browser-based tool — free, private, no upload.",
    sections: [
      {
        heading: "What Are the UKSSSC 2027 Photo Requirements?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For UKSSSC (Uttarakhand Subordinate Service Selection Commission) exams in 2027, candidates must upload a photograph meeting specific requirements. The photo should be a recent passport-size color photograph with a plain white background. The dimensions should be approximately 200 x 230 pixels with a maximum file size of 50 KB. The image format must be JPG/JPEG. The photo should clearly show your face with a neutral expression. You should not be wearing any cap or dark glasses. The UKSSSC photo resizer helps you instantly resize your photo to meet these requirements with no server upload.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x230 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard UKSSSC photo dimensions for 2027 exams. Tool auto-adjusts to match.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 50 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress photo to under 50 KB while maintaining clear facial features.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">White Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">UKSSSC requires plain white background with clear front-facing view.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize UKSSSC Photo — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Your Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your passport-size color photo from device.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set UKSSSC Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x230 pixels, target under 50 KB, adjust quality slider.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Apply</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized JPG and upload to UKSSSC exam application portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the UKSSSC 2027 photo specifications?",
        answer:
          "UKSSSC requires 200x230 pixel photo, max 50 KB file size, JPG format with plain white background and clear facial features.",
      },
      {
        question: "Can I use a mobile photo for UKSSSC application?",
        answer:
          "Yes, you can take a photo with your mobile and resize it using this tool to meet UKSSSC specifications.",
      },
      {
        question: "Is my photo data secure?",
        answer:
          "Yes, all processing happens in your browser. Your photo never leaves your device, ensuring complete privacy.",
      },
      {
        question: "What if my photo is already resized?",
        answer:
          "You can still use the tool to verify and adjust the dimensions and file size to exactly match UKSSSC requirements.",
      },
      {
        question: "Does UKSSSC require a signature as well?",
        answer:
          "Yes, UKSSSC applications also require a signature in specified dimensions. Use our signature resizer tool for that.",
      },
    ],
  },
  {
    slug: "karnataka-police-photo-resizer",
    metaTitle: "Karnataka Police Photo Resizer 2027 — Resize Image Online Free",
    metaDescription:
      "Resize Karnataka Police 2027 recruitment photo online free. Set dimensions & file size as per KSP guidelines. No upload, private.",
    h1: "Karnataka Police Photo Resizer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize photo for Karnataka Police 2027 as per KSP specifications. Instant tool — free, private, no upload.",
    sections: [
      {
        heading: "What Are the Karnataka Police 2027 Photo Requirements?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    For Karnataka Police (KSP) recruitment in 2027, candidates must upload a photograph meeting specific requirements. The photo should be a recent passport-size color photograph with a plain white or light background. The dimensions should be approximately 200 x 230 pixels with a maximum file size of 50 KB. The image format must be JPG/JPEG. The photo should clearly show your face with a neutral expression. You should not be wearing any cap, dark glasses, or uniform. The Karnataka Police photo resizer helps you instantly resize your photo to meet these requirements with no server upload.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div class="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">200x230 Pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Standard Karnataka Police photo dimensions for 2027 recruitment.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Max 50 KB File Size</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Compress photo to under 50 KB while maintaining clear facial features.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <div class="w-11 h-11 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">White/Light Background</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">KSP requires plain white or light background with clear front-facing view.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Resize Karnataka Police Photo — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Upload Photo</h4><p class="text-sm text-slate-600 dark:text-slate-400">Select your passport-size photo from device gallery.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Set KSP Specs</h4><p class="text-sm text-slate-600 dark:text-slate-400">Choose 200x230 pixels, target under 50 KB, adjust quality.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-slate-900 dark:text-white mb-1">Download & Apply</h4><p class="text-sm text-slate-600 dark:text-slate-400">Download resized JPG and upload to Karnataka Police recruitment portal.</p></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the Karnataka Police 2027 photo specifications?",
        answer:
          "Karnataka Police requires 200x230 pixel photo, max 50 KB file size, JPG format with plain white/light background and clear face view.",
      },
      {
        question: "Can I wear uniform in my KSP photo?",
        answer:
          "No, you should wear civilian clothes for the photo. Wearing uniform or cap is not allowed for the photograph.",
      },
      {
        question: "Is my photo data secure?",
        answer:
          "Yes, all processing happens in your browser. Your photo never leaves your device, ensuring complete privacy.",
      },
      {
        question: "What if my photo is from an older application?",
        answer:
          "You should take a fresh photo for Karnataka Police recruitment as it requires a recent photograph.",
      },
      {
        question: "Does KSP require a signature?",
        answer:
          "Yes, the application also requires a signature. Use our signature resizer tool for that requirement.",
      },
    ],
  },
  ...programmaticPages,
];

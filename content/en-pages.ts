import { SeoPage } from "../lib/types/seo";
import { programmaticPages } from "./programmatic-pages";

export const enPages: SeoPage[] = [
  // ─────────────────────────────────────────────
  // HOMEPAGE / PHOTO RESIZER
  // ─────────────────────────────────────────────
  {
    slug: "photo-resizer",
    translationKey: "photo-resizer",
    metaTitle: "Resize Image Online – Free Photo Resizer & Image Resizer",
    metaDescription:
      "Resize image online with our free photo resizer. Use this image resizer JPEG tool and image converter into KB to hit exact sizes. No signup, 100% private.",
    h1: "Resize Image Online With a Free Photo Resizer",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize any image online in seconds. Change dimensions, convert to an exact KB size, and keep every photo sharp. 100% free and 100% private.",
    sections: [
      {
        heading: "Resize Image Online in Seconds",
        content: `
<div class="space-y-8 not-prose">

  <p class="text-lg text-[#52525B] leading-relaxed">
    Need to resize an image online without installing software? This photo resizer changes dimensions, file size, and format right inside your browser. You create no account, you see no watermark, and you upload nothing to a server. Open the tool, choose your size, and download your file instantly.
  </p>

  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">100% Private</h3>
      <p class="text-sm text-[#52525B]">Your browser processes every photo. Your files never touch our servers, so nobody else can see them.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Instant Results</h3>
      <p class="text-sm text-[#52525B]">Resize in under a second. You skip upload queues and slow server processing.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">All Major Formats</h3>
      <p class="text-sm text-[#52525B]">Resize and convert JPG, JPEG, PNG, GIF, WEBP, and AVIF in a single step.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Use This Image Resizer",
        content: `
<div class="space-y-6 not-prose">

  <h3 class="text-xl font-bold text-[#18181B]">Resize a Photo in 3 Simple Steps</h3>

  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
      <div>
        <h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4>
        <p class="text-sm text-[#52525B]">Drag and drop your file or click to browse. The tool accepts JPG, PNG, GIF, and WEBP files up to 50MB.</p>
      </div>
    </div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
      <div>
        <h4 class="font-semibold text-[#18181B] mb-1">Set Your Options</h4>
        <p class="text-sm text-[#52525B]">Enter exact dimensions, pick a preset, or type a target size in KB. Then choose your output format.</p>
      </div>
    </div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
      <div>
        <h4 class="font-semibold text-[#18181B] mb-1">Download Instantly</h4>
        <p class="text-sm text-[#52525B]">Preview the result, then click Download. Your resized photo saves straight to your device.</p>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-bold text-[#18181B]">What This Photo Resizer Can Do</h3>

  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E4E4E7]">
      <ul class="p-6 space-y-3">
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Resize to exact pixel dimensions (width × height)</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Reduce file size to a target KB or MB</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Resize in centimeters with DPI control</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Lock the aspect ratio to avoid distortion</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Convert between JPG, PNG, WEBP, and GIF</li>
      </ul>
      <ul class="p-6 space-y-3">
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Resize for Instagram, Twitter, and Facebook in one click</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Create passport and ID photos at the correct size</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Rotate, flip, and apply basic filters</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Fine-tune compression with a quality slider</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Compare before and after, then download with no watermark</li>
      </ul>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Image Resizer JPEG: Shrink Photos Without Losing Quality",
        content: `
<div class="space-y-6 not-prose">

  <p class="text-base text-[#52525B] leading-relaxed">
    JPEG remains the most common photo format, so most people need an image resizer JPEG tool more than any other. This tool resizes JPG and JPEG files while it protects sharpness, color, and detail.
  </p>

  <h3 class="text-xl font-bold text-[#18181B]">Best Settings for JPEG Resizing</h3>

  <div class="grid sm:grid-cols-2 gap-4">
    <div class="p-5 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF]">
      <h4 class="font-semibold text-[#18181B] mb-1">Keep Quality at 85–95</h4>
      <p class="text-sm text-[#52525B]">This range cuts file size sharply while the human eye notices almost no difference.</p>
    </div>
    <div class="p-5 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF]">
      <h4 class="font-semibold text-[#18181B] mb-1">Never Enlarge Beyond the Original</h4>
      <p class="text-sm text-[#52525B]">Upscaling stretches pixels and blurs detail. Always shrink, never stretch.</p>
    </div>
    <div class="p-5 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF]">
      <h4 class="font-semibold text-[#18181B] mb-1">Lock the Aspect Ratio</h4>
      <p class="text-sm text-[#52525B]">Locking the ratio keeps faces and objects in proportion after you resize.</p>
    </div>
    <div class="p-5 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF]">
      <h4 class="font-semibold text-[#18181B] mb-1">Resize Once From the Original</h4>
      <p class="text-sm text-[#52525B]">Each JPEG save adds compression. Start from your original file every time.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Image Converter Into KB: Hit Any File Size Target",
        content: `
<div class="space-y-6 not-prose">

  <p class="text-base text-[#52525B] leading-relaxed">
    Many portals reject photos that exceed a strict limit. Our image converter into KB solves this problem. You type the size you need, and the tool compresses your photo to meet it.
  </p>

  <h3 class="text-xl font-bold text-[#18181B]">Convert Your Image to 20KB, 50KB, 100KB, or 200KB</h3>

  <p class="text-base text-[#52525B] leading-relaxed">
    Set your target in KB, and the tool adjusts quality and dimensions automatically. Check the preview, then download the file that fits.
  </p>

  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-6">
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[#E4E4E7]">
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Target Size</th>
            <th class="text-left py-2 font-semibold text-[#52525B]">Typical Use</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">20KB–50KB</td><td class="py-2 text-[#71717A]">Exam forms, signatures, small ID uploads</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">100KB</td><td class="py-2 text-[#71717A]">Job portals, bank applications</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">200KB–500KB</td><td class="py-2 text-[#71717A]">Profile photos, email attachments</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">1MB+</td><td class="py-2 text-[#71717A]">Blogs, web pages, high-quality sharing</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <h4 class="font-semibold text-[#18181B]">Pro Tip for Very Small Targets</h4>
  <p class="text-sm text-[#52525B]">For targets under 50KB, reduce the pixel dimensions first. Smaller dimensions let the tool keep higher quality at the same file size.</p>
</div>`,
      },
      {
        heading: "Common Photo Resizing Use Cases",
        content: `
<div class="space-y-6 not-prose">

  <p class="text-base text-[#52525B] leading-relaxed">
    People use this free image resizer for school, work, and social media every day. Pick your goal below.
  </p>

  <div class="bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-6">
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📋</span><span><strong>Government Forms:</strong> UPSC, SSC, and bank applications often require photos under 50KB or 100KB.</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📱</span><span><strong>Social Media:</strong> Instagram, Twitter, and Facebook each demand specific dimensions.</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🛂</span><span><strong>Passport and Visa:</strong> Official documents need exact pixel dimensions and file size.</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">💼</span><span><strong>Job Applications:</strong> Most HR portals cap profile photos at 100KB–200KB.</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🌐</span><span><strong>Web and Blogs:</strong> Lighter images load faster and improve Core Web Vitals.</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📧</span><span><strong>Email Attachments:</strong> Shrink large photos to avoid bounced messages.</span></div>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Supported Image Formats",
        content: `
<div class="space-y-6 not-prose">

  <p class="text-base text-[#52525B] leading-relaxed">
    This photo resizer reads and writes the formats below, so you can resize and convert at the same time.
  </p>

  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-6">
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[#E4E4E7]">
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Format</th>
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Input</th>
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Output</th>
            <th class="text-left py-2 font-semibold text-[#52525B]">Best For</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">JPG / JPEG</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 text-[#71717A]">Photos, small file size</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">PNG</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 text-[#71717A]">Graphics, transparency</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">WEBP</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 text-[#71717A]">Web images, strong compression</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">GIF</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 text-[#71717A]">Simple graphics</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">AVIF</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 pr-4 text-[#16A34A]">✓</td><td class="py-2 text-[#71717A]">Modern browsers, smallest size</td></tr>
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
          "Yes. The tool costs nothing, adds no watermarks, and needs no signup. You can resize unlimited images without creating an account.",
      },
      {
        question: "Do you upload my photos to a server?",
        answer:
          "No. Your browser processes every image locally with the HTML5 Canvas API. Your photos never leave your device, which protects your privacy and speeds up the result.",
      },
      {
        question: "How do I resize an image online without losing quality?",
        answer:
          "Set the quality slider between 85 and 95, lock the aspect ratio, and avoid enlarging the photo beyond its original resolution. Reducing dimensions while you keep quality high gives the sharpest result.",
      },
      {
        question: "Can this image converter into KB hit an exact file size?",
        answer:
          "Yes. Enter your target in KB, and the tool adjusts quality and dimensions to match it. For very small targets such as 20KB, lower the pixel dimensions first.",
      },
      {
        question: "What is the maximum file size I can resize?",
        answer:
          "You can upload images up to 50MB. Very large files may need a few extra seconds, but everything still runs on your device.",
      },
      {
        question: "Can I use this image resizer JPEG tool on my phone?",
        answer:
          "Yes. The tool works on iOS Safari, Android Chrome, and every modern mobile browser. You download no app.",
      },
      {
        question: "Can I convert formats while I resize?",
        answer:
          "Yes. Switch from JPG to PNG, PNG to WEBP, or any supported pair in the same step as resizing.",
      },
    ],
  },

  {
    slug: "passport-photo-maker",
    translationKey: "passport-photo-maker",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    Getting a passport photo rejected because of the wrong dimensions or background is frustrating — and costly. Our free passport photo maker automatically applies the exact specifications required by each country's government, so your photo is accepted first time.
  </p>

  <div class="p-5 bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-xl">
    <div class="flex items-start gap-3">
      <svg class="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <p class="text-sm text-[#15803D]"><strong>All processing is local.</strong> Your photo is never uploaded to any server. It is cropped and formatted entirely within your browser for complete privacy.</p>
    </div>
  </div>

  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <h3 class="font-bold text-[#18181B]">Passport Photo Size Requirements by Country</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-[#FAFAFA]">
          <tr>
            <th class="text-left px-4 py-3 font-semibold text-[#52525B]">Country</th>
            <th class="text-left px-4 py-3 font-semibold text-[#52525B]">Size (mm)</th>
            <th class="text-left px-4 py-3 font-semibold text-[#52525B]">Pixels (300dpi)</th>
            <th class="text-left px-4 py-3 font-semibold text-[#52525B]">Background</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr class="hover:bg-[#FAFAFA]"><td class="px-4 py-3 font-medium text-[#18181B]">🇺🇸 United States</td><td class="px-4 py-3 text-[#52525B]">51 × 51 mm</td><td class="px-4 py-3 text-[#52525B]">600 × 600 px</td><td class="px-4 py-3 text-[#52525B]">White</td></tr>
          <tr class="hover:bg-[#FAFAFA]"><td class="px-4 py-3 font-medium text-[#18181B]">🇬🇧 United Kingdom</td><td class="px-4 py-3 text-[#52525B]">35 × 45 mm</td><td class="px-4 py-3 text-[#52525B]">413 × 531 px</td><td class="px-4 py-3 text-[#52525B]">Light grey / white</td></tr>
          <tr class="hover:bg-[#FAFAFA]"><td class="px-4 py-3 font-medium text-[#18181B]">🇮🇳 India</td><td class="px-4 py-3 text-[#52525B]">35 × 45 mm</td><td class="px-4 py-3 text-[#52525B]">413 × 531 px</td><td class="px-4 py-3 text-[#52525B]">White</td></tr>
          <tr class="hover:bg-[#FAFAFA]"><td class="px-4 py-3 font-medium text-[#18181B]">🇪🇺 European Union</td><td class="px-4 py-3 text-[#52525B]">35 × 45 mm</td><td class="px-4 py-3 text-[#52525B]">413 × 531 px</td><td class="px-4 py-3 text-[#52525B]">White / off-white</td></tr>
          <tr class="hover:bg-[#FAFAFA]"><td class="px-4 py-3 font-medium text-[#18181B]">🇨🇳 China</td><td class="px-4 py-3 text-[#52525B]">33 × 48 mm</td><td class="px-4 py-3 text-[#52525B]">390 × 567 px</td><td class="px-4 py-3 text-[#52525B]">White</td></tr>
          <tr class="hover:bg-[#FAFAFA]"><td class="px-4 py-3 font-medium text-[#18181B]">🇨🇦 Canada</td><td class="px-4 py-3 text-[#52525B]">50 × 70 mm</td><td class="px-4 py-3 text-[#52525B]">590 × 826 px</td><td class="px-4 py-3 text-[#52525B]">White</td></tr>
          <tr class="hover:bg-[#FAFAFA]"><td class="px-4 py-3 font-medium text-[#18181B]">🇦🇺 Australia</td><td class="px-4 py-3 text-[#52525B]">35 × 45 mm</td><td class="px-4 py-3 text-[#52525B]">413 × 531 px</td><td class="px-4 py-3 text-[#52525B]">White / light grey</td></tr>
          <tr class="hover:bg-[#FAFAFA]"><td class="px-4 py-3 font-medium text-[#18181B]">🇩🇪 Germany</td><td class="px-4 py-3 text-[#52525B]">35 × 45 mm</td><td class="px-4 py-3 text-[#52525B]">413 × 531 px</td><td class="px-4 py-3 text-[#52525B]">Light grey</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">Common Reasons Passport Photos Get Rejected</h3>
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl border border-[#FEE2E2]">
        <span class="text-[#DC2626] text-lg flex-shrink-0">✗</span>
        <div>
          <h4 class="font-semibold text-[#991B1B] text-sm">Wrong dimensions</h4>
          <p class="text-xs text-[#B91C1C] mt-1">Even 1mm off can cause rejection. Always use the exact country specifications.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl border border-[#FEE2E2]">
        <span class="text-[#DC2626] text-lg flex-shrink-0">✗</span>
        <div>
          <h4 class="font-semibold text-[#991B1B] text-sm">Non-white background</h4>
          <p class="text-xs text-[#B91C1C] mt-1">Most countries require a plain white or light grey background. Use our tool to set it correctly.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl border border-[#FEE2E2]">
        <span class="text-[#DC2626] text-lg flex-shrink-0">✗</span>
        <div>
          <h4 class="font-semibold text-[#991B1B] text-sm">File too large or too small</h4>
          <p class="text-xs text-[#B91C1C] mt-1">Online portals often require files between 20KB and 300KB. Use our KB resizer to hit the target.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl border border-[#FEE2E2]">
        <span class="text-[#DC2626] text-lg flex-shrink-0">✗</span>
        <div>
          <h4 class="font-semibold text-[#991B1B] text-sm">Wrong JPEG format</h4>
          <p class="text-xs text-[#B91C1C] mt-1">Most government portals accept only JPEG. Our tool always outputs JPEG for passport photos.</p>
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
  // ABOUT US & EDITORIAL PROCESS
  // ─────────────────────────────────────────────
  {
    slug: "about",
    translationKey: "about",
    metaTitle: "About Us & Editorial Standards | PhotoResizer",
    metaDescription:
      "Learn about PhotoResizer, our 100% in-browser privacy-first architecture, editorial review standards, and recruitment preset verification process.",
    h1: "About PhotoResizer",
    structuredDataOverrides: { webPageType: "AboutPage" },
    subtitle:
      "Fast, accurate, and completely private image tools built for exam aspirants, job applicants, and professionals.",
    sections: [
      {
        heading: "Our Mission & Privacy-First Architecture",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-base text-[#52525B] leading-relaxed">
    PhotoResizer was founded to solve a critical, stressful problem faced by millions of job aspirants and document applicants: meeting strict, confusing photo and signature upload requirements (exact pixel dimensions, file size ceilings, and format constraints) without compromising privacy.
  </p>
  <div class="grid md:grid-cols-2 gap-5">
    <div class="p-6 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] shadow-sm">
      <h3 class="text-base font-bold text-[#18181B] mb-2">100% Client-Side Processing</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">
        Unlike traditional online image editors that upload your personal photographs, signatures, and ID cards to remote servers, PhotoResizer executes all image processing locally within your browser using modern WebAssembly, Web Workers, and HTML5 Canvas APIs. Your files never touch external servers or cloud storage.
      </p>
    </div>
    <div class="p-6 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] shadow-sm">
      <h3 class="text-base font-bold text-[#18181B] mb-2">Zero Data Retention</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">
        Because image manipulation occurs in your device's memory, we do not and cannot collect, store, or view your photos, signatures, thumb impressions, or biometric details.
      </p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Editorial Process & Official Notice Verification",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-base text-[#52525B] leading-relaxed">
    Every recruitment preset and dimension guideline published on PhotoResizer (including SSC, UPSC, IBPS, RRB, CTET, NEET, State PSCs, and Police boards) is manually verified against the latest official recruitment notifications (Centralized Employment Notices).
  </p>
  <ul class="space-y-3 text-sm text-[#52525B]">
    <li class="flex items-start gap-2.5">
      <span class="text-[#16A34A] font-bold">✓</span>
      <span><strong>Official Notification Cross-Referencing:</strong> Dimension limits, DPI requirements, acceptable background shades, and byte thresholds are extracted directly from authoritative recruitment bulletins.</span>
    </li>
    <li class="flex items-start gap-2.5">
      <span class="text-[#16A34A] font-bold">✓</span>
      <span><strong>Regular Cycle Audits:</strong> Exam boards frequently modify upload requirements between notification cycles. Our team reviews portal updates to adjust preset tolerances.</span>
    </li>
    <li class="flex items-start gap-2.5">
      <span class="text-[#16A34A] font-bold">✓</span>
      <span><strong>Feedback Loop:</strong> If an exam board updates guidelines mid-cycle, candidates can notify us via our contact channel for prompt preset adjustments.</span>
    </li>
  </ul>
</div>`,
      },
    ],
    faq: [
      {
        question: "Is PhotoResizer completely free?",
        answer:
          "Yes. All photo resizing, compression, cropping, signature enhancement, and preset tools are 100% free with no registration, no watermarks, and no usage limits.",
      },
      {
        question: "Do my photos get saved on your server?",
        answer:
          "No. All image processing is executed entirely in your local browser sandbox. No photo or signature data is ever uploaded or stored.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // HOW TO USE
  // ─────────────────────────────────────────────
  {
    slug: "how-to-use",
    translationKey: "how-to-use",
    metaTitle: "How to Use — photoresizer Guide",
    metaDescription:
      "Step-by-step guide to using photoresizer. Learn to resize images, reduce file size, create passport photos, and more — all for free in your browser.",
    h1: "How to Use photoresizer",
    sections: [
      {
        heading: "Complete Guide to Resizing & Editing Images",
        content: `
<div class="space-y-10 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    photoresizer is a collection of free, browser-based image tools. Every tool works without any server upload — your files stay on your device at all times. This guide walks you through everything you can do, step by step.
  </p>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 bg-[#FFFFFF] rounded-xl shadow-sm border border-[#E4E4E7]">
      <div class="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center mb-4 text-[#16A34A]">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
      </div>
      <h3 class="text-lg font-bold text-[#18181B] mb-2">Step 1 — Upload Your Image</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">Click the upload area or drag and drop your image file directly onto it. We support JPG, JPEG, PNG, GIF, WEBP, and AVIF files up to 50MB. Your file loads instantly — no waiting for an upload to complete because nothing is sent to a server.</p>
    </div>
    <div class="p-6 bg-[#FFFFFF] rounded-xl shadow-sm border border-[#E4E4E7]">
      <div class="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center mb-4 text-[#16A34A]">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
      </div>
      <h3 class="text-lg font-bold text-[#18181B] mb-2">Step 2 — Configure the Sidebar</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">The right sidebar contains all your controls. Set your target width and height in pixels, choose a preset (Instagram, Passport, etc.), set a KB target, adjust quality, choose the output format, rotate or flip the image, and apply basic filters like brightness and contrast.</p>
    </div>
    <div class="p-6 bg-[#FFFFFF] rounded-xl shadow-sm border border-[#E4E4E7]">
      <div class="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center mb-4 text-[#16A34A]">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
      </div>
      <h3 class="text-lg font-bold text-[#18181B] mb-2">Step 3 — Preview Live Changes</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">The canvas area shows a live preview of your image as you adjust settings. You can see the before and after side-by-side using the comparison slider. The stats bar shows the original and estimated output file size so you know exactly what you're getting before you download.</p>
    </div>
    <div class="p-6 bg-[#FFFFFF] rounded-xl shadow-sm border border-[#E4E4E7]">
      <div class="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center mb-4 text-[#16A34A]">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      </div>
      <h3 class="text-lg font-bold text-[#18181B] mb-2">Step 4 — Download Your Image</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">Click the Download button and your resized image is saved directly to your device. The filename includes the new dimensions for easy reference. No watermarks are added, no account is required, and there are no download limits.</p>
    </div>
  </div>

  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <h3 class="font-bold text-[#18181B]">Sidebar Controls — What Each Setting Does</h3>
    </div>
    <div class="divide-y divide-[#F4F4F5]">
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-[#18181B] text-sm">Width &amp; Height</div>
        <div class="text-sm text-[#52525B]">Enter your target pixel dimensions. Toggle the lock icon to maintain the original aspect ratio automatically.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-[#18181B] text-sm">Quality Slider</div>
        <div class="text-sm text-[#52525B]">Controls JPEG compression level. 85–95 is ideal for photos you want to look good. Lower values reduce file size more aggressively.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-[#18181B] text-sm">Target KB</div>
        <div class="text-sm text-[#52525B]">Enter a specific file size in KB. Our binary search algorithm automatically finds the quality level that hits your target within 1KB.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-[#18181B] text-sm">Format</div>
        <div class="text-sm text-[#52525B]">Convert between JPG, PNG, WEBP, GIF, and AVIF. WEBP gives the smallest file at good quality; PNG is best when you need transparency.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-[#18181B] text-sm">Presets</div>
        <div class="text-sm text-[#52525B]">One-click dimension presets for Instagram, Twitter, Facebook, passport photos, print sizes (A4, 4×6), and common web resolutions.</div>
      </div>
      <div class="px-6 py-4 flex gap-4">
        <div class="w-32 flex-shrink-0 font-semibold text-[#18181B] text-sm">Filters</div>
        <div class="text-sm text-[#52525B]">Adjust brightness, contrast, and saturation with sliders. Changes apply to the canvas in real time so you can see the effect instantly.</div>
      </div>
    </div>
  </div>

  <div class="p-6 bg-[#FAFAFA] rounded-xl border border-[#E4E4E7]">
    <h3 class="text-lg font-bold text-[#18181B] mb-4">Browser Compatibility</h3>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div class="text-center p-3 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="text-2xl mb-1">🌐</div>
        <div class="font-semibold text-sm text-[#18181B]">Chrome 90+</div>
        <div class="text-xs text-[#16A34A]">Fully supported</div>
      </div>
      <div class="text-center p-3 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="text-2xl mb-1">🦊</div>
        <div class="font-semibold text-sm text-[#18181B]">Firefox 88+</div>
        <div class="text-xs text-[#16A34A]">Fully supported</div>
      </div>
      <div class="text-center p-3 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="text-2xl mb-1">🧭</div>
        <div class="font-semibold text-sm text-[#18181B]">Safari 14+</div>
        <div class="text-xs text-[#16A34A]">Fully supported</div>
      </div>
      <div class="text-center p-3 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="text-2xl mb-1">🔷</div>
        <div class="font-semibold text-sm text-[#18181B]">Edge 90+</div>
        <div class="text-xs text-[#16A34A]">Fully supported</div>
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
    translationKey: "contact",
    metaTitle: "Contact Us — photoresizer Support",
    metaDescription:
      "Get in touch with the photoresizer team. Report bugs, request features, or ask questions about our free online image tools.",
    h1: "Contact Us",
    sections: [
      {
        heading: "Get in Touch With Our Team",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    We're a small team dedicated to building the best free image tools on the web. If you've found a bug, have a feature request, or just need help resizing an image — we want to hear from you.
  </p>

  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] text-center">
      <div class="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#16A34A]">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="font-bold text-[#18181B] mb-1">Developer &amp; Support</h3>
      <p class="text-sm text-[#71717A] mb-3">Navnit Rai • Direct Contact</p>
      <a href="mailto:navnitrai5389@gmail.com" class="text-sm font-medium text-[#16A34A] hover:underline block">navnitrai5389@gmail.com</a>
      <a href="tel:+917355087072" class="text-sm font-medium text-[#15803D] hover:underline block mt-1">+91 7355087072</a>
    </div>
    <div class="p-6 bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] text-center">
      <div class="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#16A34A]">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="font-bold text-[#18181B] mb-1">Response Time</h3>
      <p class="text-sm text-[#71717A] mb-3">We aim to reply within</p>
      <span class="text-sm font-semibold text-[#15803D]">24–48 business hours</span>
    </div>
    <div class="p-6 bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] text-center">
      <div class="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#16A34A]">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
      </div>
      <h3 class="font-bold text-[#18181B] mb-1">Feature Requests</h3>
      <p class="text-sm text-[#71717A] mb-3">We love user suggestions</p>
      <a href="mailto:navnitrai5389@gmail.com" class="text-sm font-medium text-[#16A34A] hover:underline">navnitrai5389@gmail.com</a>
    </div>
  </div>

  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-6">
    <h3 class="text-lg font-bold text-[#18181B] mb-4">Before You Write to Us — Quick Self-Help</h3>
    <div class="space-y-3">
      <div class="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-xl">
        <span class="text-[#16A34A] font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
        <div>
          <p class="text-sm font-medium text-[#18181B]">My image looks blurry after resizing</p>
          <p class="text-xs text-[#71717A] mt-1">Try keeping the quality slider above 80 and avoid enlarging images beyond their original resolution. Upscaling always reduces sharpness.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-xl">
        <span class="text-[#16A34A] font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
        <div>
          <p class="text-sm font-medium text-[#18181B]">The file is not reaching my KB target</p>
          <p class="text-xs text-[#71717A] mt-1">PNG files cannot always be reduced to very small KB sizes because PNG uses lossless compression. Try switching to JPEG or WEBP format.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-xl">
        <span class="text-[#16A34A] font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
        <div>
          <p class="text-sm font-medium text-[#18181B]">My passport photo was rejected</p>
          <p class="text-xs text-[#71717A] mt-1">Check that you selected the correct country in the passport photo maker. Also ensure the background is plain white with no shadows.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="p-6 bg-[#18181B] rounded-xl text-center">
    <h3 class="text-lg font-bold text-[#FFFFFF] mb-2">Send Us a Message</h3>
    <p class="text-sm text-[#71717A] mb-5">Include your browser name, operating system, and a description of the issue. Screenshots are very helpful.</p>
    <a href="mailto:usvisaphotoai@gmail.com" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] font-semibold rounded-xl transition-colors">
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
    translationKey: "terms",
    metaTitle: "Terms & Conditions — photoresizer",
    metaDescription:
      "Terms and conditions for using photoresizer. Read our usage policy, limitations, and user responsibilities.",
    h1: "Terms & Conditions",
    sections: [
      {
        heading: "Terms of Use",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-[#52525B] leading-relaxed">Last updated: January 2025. Please read these terms carefully before using photoresizer. By accessing our tools, you agree to be bound by these terms.</p>

  <div class="space-y-4">
    <div class="p-6 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="text-base font-bold text-[#18181B] mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
        Acceptance of Terms
      </h3>
      <p class="text-sm text-[#52525B] leading-relaxed ml-11">By accessing and using photoresizer ("the Service"), you confirm that you are at least 13 years of age, have read and understood these Terms, and agree to be bound by them. If you are using the Service on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.</p>
    </div>

    <div class="p-6 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="text-base font-bold text-[#18181B] mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
        Description of Service
      </h3>
      <p class="text-sm text-[#52525B] leading-relaxed ml-11">photoresizer provides free, browser-based image editing tools including photo resizing, compression, format conversion, and passport photo creation. All processing occurs client-side in the user's browser. We do not store, process, or transmit user images on our servers.</p>
    </div>

    <div class="p-6 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="text-base font-bold text-[#18181B] mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
        Acceptable Use
      </h3>
      <div class="ml-11 space-y-2">
        <p class="text-sm text-[#52525B] leading-relaxed">You may use our Service for personal and commercial image editing. You may NOT use the Service to:</p>
        <ul class="text-sm text-[#52525B] space-y-1">
          <li class="flex items-start gap-2"><span class="text-[#DC2626] flex-shrink-0">✗</span> Process images containing illegal content, including child exploitation material</li>
          <li class="flex items-start gap-2"><span class="text-[#DC2626] flex-shrink-0">✗</span> Attempt to reverse-engineer or compromise our web application</li>
          <li class="flex items-start gap-2"><span class="text-[#DC2626] flex-shrink-0">✗</span> Use automated scripts or bots to scrape or abuse the Service</li>
          <li class="flex items-start gap-2"><span class="text-[#DC2626] flex-shrink-0">✗</span> Violate any applicable local, national, or international law</li>
        </ul>
      </div>
    </div>

    <div class="p-6 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="text-base font-bold text-[#18181B] mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
        Intellectual Property
      </h3>
      <p class="text-sm text-[#52525B] leading-relaxed ml-11">You retain full ownership of all images you process using our Service. We claim no intellectual property rights over your content. The photoresizer software, design, and branding are our intellectual property and may not be copied or reproduced without permission.</p>
    </div>

    <div class="p-6 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="text-base font-bold text-[#18181B] mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
        Service Availability &amp; Disclaimer
      </h3>
      <p class="text-sm text-[#52525B] leading-relaxed ml-11">Our tools are provided "as is" and "as available" without warranty of any kind. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice. We are not liable for any loss or damage arising from your use of, or inability to use, the Service.</p>
    </div>

    <div class="p-6 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="text-base font-bold text-[#18181B] mb-3 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
        Changes to Terms
      </h3>
      <p class="text-sm text-[#52525B] leading-relaxed ml-11">We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes your acceptance of the revised Terms. We recommend reviewing this page periodically.</p>
    </div>
  </div>

  <div class="p-5 bg-[#FAFAFA] rounded-xl">
    <p class="text-sm text-[#52525B]">Questions about these Terms? Contact us at <a href="mailto:usvisaphotoai@gmail.com" class="text-[#16A34A] hover:underline font-medium">usvisaphotoai@gmail.com</a></p>
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
    translationKey: "privacy",
    metaTitle: "Privacy Policy — PhotoResizer Online",
    metaDescription:
      "Privacy policy for photoresizer. All image processing is 100% local in your browser. We never upload, store, or share your photos.",
    h1: "Privacy Policy",
    sections: [
      {
        heading: "How We Protect Your Privacy",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-[#52525B] leading-relaxed">Last updated: January 2025. Your privacy is fundamental to how we built photoresizer. This policy explains exactly what data we collect (very little), what we don't collect (your images), and how we use information.</p>

  <div class="grid md:grid-cols-2 gap-5">
    <div class="p-6 border-l-4 border-[#16A34A] bg-[#F0FDF4] rounded-r-xl">
      <h3 class="text-base font-bold text-[#18181B] mb-3 flex items-center gap-2">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        100% Local Image Processing
      </h3>
      <p class="text-sm text-[#15803D] leading-relaxed">Every image operation — resizing, compression, format conversion, cropping — happens entirely within your web browser using the HTML5 Canvas API and JavaScript. <strong>Your images are never transmitted to, or stored on, any server we operate or control.</strong> Not even temporarily. We are technically incapable of seeing your photos.</p>
    </div>
    <div class="p-6 border-l-4 border-[#16A34A] bg-[#F0FDF4] rounded-r-xl">
      <h3 class="text-base font-bold text-[#18181B] mb-3 flex items-center gap-2">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Minimal Data Collection
      </h3>
      <p class="text-sm text-[#15803D] leading-relaxed">We use anonymous, aggregated analytics (Google Analytics 4) to understand how people use our tools. This includes page views, browser type, and country. We do not collect names, email addresses, or any personally identifiable information unless you contact us directly.</p>
    </div>
  </div>

  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <h3 class="font-bold text-[#18181B]">Data We Collect vs. Data We Do Not Collect</h3>
    </div>
    <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E4E4E7]">
      <div class="p-6">
        <h4 class="font-semibold text-[#18181B] mb-3 text-sm flex items-center gap-2"><span class="text-[#16A34A]">✓</span> We Collect (anonymised)</h4>
        <ul class="space-y-2 text-sm text-[#52525B]">
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Page views and session duration</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Browser type and version</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Country (not city or IP address)</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Device type (mobile/desktop)</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Referral source (how you found us)</li>
        </ul>
      </div>
      <div class="p-6">
        <h4 class="font-semibold text-[#18181B] mb-3 text-sm flex items-center gap-2"><span class="text-[#DC2626]">✗</span> We Never Collect</h4>
        <ul class="space-y-2 text-sm text-[#52525B]">
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Your images, photos, or files</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Your name or email address</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Your IP address (GA4 anonymises this)</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> EXIF metadata from your images</li>
          <li class="flex items-start gap-2"><span class="mt-0.5 text-[#71717A]">·</span> Payment or financial information</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="space-y-4">
    <div class="p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="font-semibold text-[#18181B] mb-2">Cookies</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">We use only necessary and analytics cookies. Google Analytics 4 sets cookies (_ga, _ga_*) that persist for up to 2 years. These help us understand aggregate usage patterns. You can disable cookies at any time in your browser settings without affecting your ability to use our tools.</p>
    </div>
    <div class="p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="font-semibold text-[#18181B] mb-2">Your Rights (GDPR &amp; CCPA)</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">If you are in the EU or California, you have rights including the right to access data we hold about you, request deletion, and opt out of analytics tracking. Since we collect very little identifiable data, most requests can be fulfilled by simply disabling cookies. Contact usvisaphotoai@gmail.com for any data requests.</p>
    </div>
    <div class="p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <h3 class="font-semibold text-[#18181B] mb-2">Third-Party Services</h3>
      <p class="text-sm text-[#52525B] leading-relaxed">We use Google Analytics 4 for anonymous usage statistics. Our site is hosted on Vercel/Netlify, which may log standard server access logs (IP addresses, request timestamps) for security purposes. These logs are not used for advertising or profiling.</p>
    </div>
  </div>
</div>`,
      },
    ],
  },

  {
    slug: "ssc-photo-resizer",
    metaTitle: "SSC Photo Resizer — Resize Photo & Signature",
    metaDescription:
      "Resize your photo and signature for SSC exams. Meet exact KB and pixel requirements instantly. Free, private, no upload.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    Every SSC exam in 2027 — CGL, CHSL, MTS, CPO, JE, Stenographer, GD Constable — requires applicants to upload a photo and signature within strict size limits. A photo that is even 1 KB over the limit will cause the form to reject your submission. Our SSC Photo Resizer ensures your image meets every requirement without any guesswork.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Exact SSC Specs</h3>
      <p class="text-sm text-[#52525B]">Pre-loaded with 2027 SSC photo (20–50 KB, 100×120 px) and signature (10–20 KB, 140×60 px) requirements for all exams.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">100% Private</h3>
      <p class="text-sm text-[#52525B]">Processing happens entirely in your browser. Your photo and signature never leave your device — complete privacy guaranteed.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Instant Output</h3>
      <p class="text-sm text-[#52525B]">Resize and download in under 3 seconds. No waiting, no queues, no server round-trips — works even on slow mobile data.</p>
    </div>
  </div>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <h3 class="text-base font-bold text-[#18181B]">SSC 2027 Photo & Signature Requirements</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[#E4E4E7]">
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Parameter</th>
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Photo</th>
            <th class="text-left py-2 font-semibold text-[#52525B]">Signature</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">File Size</td><td class="py-2 pr-4 text-[#52525B]">20 KB – 50 KB</td><td class="py-2 text-[#52525B]">10 KB – 20 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">Dimensions</td><td class="py-2 pr-4 text-[#52525B]">100 × 120 pixels</td><td class="py-2 text-[#52525B]">140 × 60 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">Format</td><td class="py-2 pr-4 text-[#52525B]">JPG / JPEG</td><td class="py-2 text-[#52525B]">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium text-[#18181B]">Background</td><td class="py-2 pr-4 text-[#52525B]">White / light</td><td class="py-2 text-[#52525B]">White</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">How to Resize Your SSC Photo — 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Drag and drop your passport-style photo or signature image. Supports JPG and PNG up to 50 MB.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Select SSC Preset</h4><p class="text-sm text-[#52525B]">Choose the SSC Photo or SSC Signature preset. Dimensions and KB limits are auto-filled for 2027 requirements.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Download & Upload</h4><p class="text-sm text-[#52525B]">Click Download. The file is ready to upload directly on the SSC official portal — no further editing needed.</p></div>
      </div>
    </div>
  </div>
  <div class="bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-6">
    <h3 class="text-lg font-bold text-[#18181B] mb-3">SSC Exams Covered in 2027</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📋</span><span><strong>SSC CGL 2027:</strong> Combined Graduate Level — photo 20–50 KB, signature 10–20 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📋</span><span><strong>SSC CHSL 2027:</strong> Combined Higher Secondary Level — same photo/signature specs</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📋</span><span><strong>SSC MTS 2027:</strong> Multi Tasking Staff — JPG format, white background required</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📋</span><span><strong>SSC CPO 2027:</strong> Central Police Organisation — strict pixel and KB compliance</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📋</span><span><strong>SSC JE 2027:</strong> Junior Engineer — technical exam with standard photo rules</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📋</span><span><strong>SSC GD Constable 2027:</strong> Paramilitary recruitment with biometric-grade photo specs</span></div>
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
    metaTitle: "UPSC Photo Resizer — Resize Photo & Signature",
    metaDescription:
      "Resize your photo and signature to UPSC requirements. Free, browser-based tool — no upload, no signup. Covers all UPSC exams.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    UPSC is among the most competitive examinations in India, and even a small error in your application — such as an oversized photo — can lead to rejection. In 2027, UPSC continues to enforce strict photo and signature upload rules across CSE, CDS, NDA/NA, CAPF, CMS, IES/ISS, and all other examinations. Our free tool ensures your files are compliant before you hit Submit.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">2027 Specs Built In</h3>
      <p class="text-sm text-[#52525B]">Pre-loaded presets for UPSC CSE, CDS, NDA, CAPF and more — photo 300×400 px, 20–300 KB; signature 20–300 KB.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Zero Data Risk</h3>
      <p class="text-sm text-[#52525B]">UPSC applicants handle sensitive ID documents. Our tool never uploads anything — every operation runs locally in your browser.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">All UPSC Exams</h3>
      <p class="text-sm text-[#52525B]">One tool covers CSE (IAS/IPS/IFS), CDS, NDA, CAPF, CMS, IES, ESE, CGGE, CISF AC, SO/Steno and more.</p>
    </div>
  </div>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <h3 class="text-base font-bold text-[#18181B]">UPSC 2027 Photo & Signature Specifications</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[#E4E4E7]">
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Exam</th>
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Photo Size</th>
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Signature Size</th>
            <th class="text-left py-2 font-semibold text-[#52525B]">Format</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">UPSC CSE</td><td class="py-2 pr-4 text-[#52525B]">20–300 KB, 300×400 px</td><td class="py-2 pr-4 text-[#52525B]">20–300 KB</td><td class="py-2 text-[#52525B]">JPG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">UPSC CDS</td><td class="py-2 pr-4 text-[#52525B]">20–300 KB, 300×400 px</td><td class="py-2 pr-4 text-[#52525B]">20–300 KB</td><td class="py-2 text-[#52525B]">JPG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">UPSC NDA/NA</td><td class="py-2 pr-4 text-[#52525B]">20–300 KB, 300×400 px</td><td class="py-2 pr-4 text-[#52525B]">20–300 KB</td><td class="py-2 text-[#52525B]">JPG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">UPSC CAPF</td><td class="py-2 pr-4 text-[#52525B]">20–300 KB, 300×400 px</td><td class="py-2 pr-4 text-[#52525B]">20–300 KB</td><td class="py-2 text-[#52525B]">JPG</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">Steps to Resize Your UPSC Photo</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Photo or Signature</h4><p class="text-sm text-[#52525B]">Select your recent passport-style photo or hand-written signature scan from your device.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Choose UPSC Preset</h4><p class="text-sm text-[#52525B]">Pick your specific exam from the preset list. Width, height and KB range are applied automatically.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Download & Submit</h4><p class="text-sm text-[#52525B]">Download the compliant file and upload it on the UPSC OTR or exam-specific portal without any issues.</p></div>
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
    metaTitle: "Reduce Photo Size to 50KB Free Online",
    metaDescription:
      "Compress any photo to exactly 50KB or under in seconds. Free, browser-based, no server upload. Perfect for government forms and portals.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    Hundreds of government portals, competitive exam forms, and job application sites in India and globally impose a strict 50 KB file-size limit on uploaded photos. Our free online tool lets you compress any JPEG, PNG, or WEBP image down to 50 KB or less — while preserving as much visual quality as the compression allows — right inside your browser. Nothing is sent to a server, nothing is stored, and no account is needed.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Target KB Control</h3>
      <p class="text-sm text-[#52525B]">Type "50" in the target size field and the tool automatically finds the right quality setting to hit that exact limit.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">100% Private</h3>
      <p class="text-sm text-[#52525B]">Your photo is processed using the browser's built-in Canvas API — never uploaded to any server, ensuring total privacy.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Quality Preview</h3>
      <p class="text-sm text-[#52525B]">See the compressed result before downloading. Adjust the quality slider if you want a slightly larger or smaller output.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">Reduce to 50KB in 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Click or drag to upload any JPG, PNG, or WEBP image — even a 5 MB phone photo works fine.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Set Target to 50 KB</h4><p class="text-sm text-[#52525B]">Enter 50 in the target file size box. The tool will auto-calculate the optimal quality setting to meet that limit.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Download Compressed Photo</h4><p class="text-sm text-[#52525B]">Preview and download. The output file will be 50 KB or slightly under — ready for any portal or form.</p></div>
      </div>
    </div>
  </div>
  <div class="bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-6">
    <h3 class="text-lg font-bold text-[#18181B] mb-3">Where Is a 50 KB Photo Limit Common in 2027?</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📋</span><span><strong>SSC Exams:</strong> SSC CGL, CHSL, MTS and CPO portals cap photo uploads at 50 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🏦</span><span><strong>Bank Exams:</strong> IBPS, SBI, and RBI application portals often require photos under 50 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🚂</span><span><strong>Railways:</strong> RRB NTPC, Group D, and ALP portals commonly specify a 50 KB limit</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🎓</span><span><strong>Entrance Exams:</strong> JEE, NEET, CUET and state CET forms routinely set 50 KB ceilings</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">💼</span><span><strong>Job Portals:</strong> NCS, state employment exchanges and private portals restrict profile photos to 50 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🌐</span><span><strong>E-Governance:</strong> DigiLocker uploads and Aadhaar-linked services often enforce 50 KB file limits</span></div>
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
    metaTitle: "IBPS Signature Resize — IBPS PO & Clerk",
    metaDescription:
      "Resize your signature image to IBPS requirements — 10 KB to 20 KB, 140×60 pixels, JPG format. Free, instant, browser-based.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    The Institute of Banking Personnel Selection (IBPS) requires all applicants to upload a scanned signature image that meets very specific dimensions and file-size constraints. In 2027, the signature must be between 10 KB and 20 KB, with dimensions of 140×60 pixels, saved as a JPEG file. Our free resizer handles all of this automatically — just upload your signature scan and download a portal-ready file in seconds.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Signature Optimised</h3>
      <p class="text-sm text-[#52525B]">Special preset for IBPS signatures: 140×60 px, 10–20 KB, white background, JPG output — ready in one click.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Private & Secure</h3>
      <p class="text-sm text-[#52525B]">Your signature scan never leaves your device. Browser-only processing means zero data leakage.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">All IBPS Exams</h3>
      <p class="text-sm text-[#52525B]">Works for IBPS PO, Clerk, SO, RRB PO and RRB Clerk — all use the same signature upload requirements.</p>
    </div>
  </div>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <h3 class="text-base font-bold text-[#18181B]">IBPS 2027 Upload Requirements</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[#E4E4E7]">
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Document</th>
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">Dimensions</th>
            <th class="text-left py-2 pr-4 font-semibold text-[#52525B]">File Size</th>
            <th class="text-left py-2 font-semibold text-[#52525B]">Format</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Photo</td><td class="py-2 pr-4 text-[#52525B]">200 × 230 pixels</td><td class="py-2 pr-4 text-[#52525B]">20 KB – 50 KB</td><td class="py-2 text-[#52525B]">JPG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Signature</td><td class="py-2 pr-4 text-[#52525B]">140 × 60 pixels</td><td class="py-2 pr-4 text-[#52525B]">10 KB – 20 KB</td><td class="py-2 text-[#52525B]">JPG</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">Resize Your IBPS Signature in 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Scan Your Signature</h4><p class="text-sm text-[#52525B]">Sign on white paper with a black or dark blue pen, then scan or photograph it clearly. Upload the image here.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Apply IBPS Signature Preset</h4><p class="text-sm text-[#52525B]">Select the IBPS Signature preset — 140×60 px and 10–20 KB are applied automatically.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Download & Upload to IBPS</h4><p class="text-sm text-[#52525B]">Download the resized signature file and upload it on the IBPS registration portal without rejection.</p></div>
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
    metaTitle: "JPEG to JPG Converter Free Online",
    metaDescription:
      "Convert JPEG to JPG online free. Rename or re-export your image instantly in the browser — no file upload, no account needed.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    JPEG and JPG are technically the same image format — JPEG stands for Joint Photographic Experts Group, and JPG is simply the three-character file extension used by older Windows systems that couldn't handle four-character extensions. Today both extensions refer to the identical compressed image format. However, many government portals, exam forms, and upload systems in 2027 specifically require a <strong>.jpg</strong> extension and will reject <strong>.jpeg</strong> files even though the image data is identical. Our converter renames or re-exports the file with the correct .jpg extension instantly.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Instant Conversion</h3>
      <p class="text-sm text-[#52525B]">Upload your .jpeg file and download a .jpg in under one second. No quality loss, no re-encoding unless you change settings.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">No Server Upload</h3>
      <p class="text-sm text-[#52525B]">Conversion happens in your browser — your original photo is never sent to any external server or stored anywhere.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Resize While Converting</h3>
      <p class="text-sm text-[#52525B]">Optionally adjust dimensions and file size during conversion — great for exam portals that need both the right extension and the right KB limit.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">Convert JPEG to JPG in 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your JPEG</h4><p class="text-sm text-[#52525B]">Select any .jpeg or .jpg image from your device — up to 50 MB supported.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Select JPG as Output</h4><p class="text-sm text-[#52525B]">Choose JPG as the output format. Optionally resize or compress at the same time.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Download as .jpg</h4><p class="text-sm text-[#52525B]">Your file downloads with the .jpg extension — accepted by all portals that require JPG specifically.</p></div>
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
    translationKey: "compress-image",
    metaTitle: "Compress Image Free Online — Reduce File Size",
    metaDescription:
      "Compress JPG, PNG, WEBP images free online. Reduce file size by up to 90% without quality loss. Browser-based, 100% private.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    Large image files slow down websites, clog email inboxes, fail government portal upload limits, and consume unnecessary mobile data. Image compression reduces file size by removing redundant pixel information and applying smart encoding — often by 60–90% — with little or no perceptible quality difference. Our free browser-based compressor handles JPG, PNG, WEBP, GIF and AVIF images instantly, all without sending your files to any server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Up to 90% Smaller</h3>
      <p class="text-sm text-[#52525B]">Smart compression removes invisible data and optimises encoding — dramatically reducing size with minimal visual impact.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Private & Offline-Capable</h3>
      <p class="text-sm text-[#52525B]">100% browser-based processing. Your images never leave your device — ideal for sensitive documents and personal photos.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">All Major Formats</h3>
      <p class="text-sm text-[#52525B]">Compress JPG, PNG, WEBP, GIF and AVIF. Convert between formats in the same step to get even better compression ratios.</p>
    </div>
  </div>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <h3 class="text-base font-bold text-[#18181B] mb-0">Compression Options Available</h3>
    </div>
    <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E4E4E7]">
      <ul class="p-6 space-y-3">
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Quality slider (1–100) for fine-grained control</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Target file size in KB — tool finds optimal quality automatically</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Resize dimensions alongside compression in one pass</li>
      </ul>
      <ul class="p-6 space-y-3">
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Convert PNG to JPG for dramatically smaller outputs</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Before/after preview with exact KB comparison shown</li>
        <li class="flex items-start gap-3 text-sm text-[#52525B]"><span class="text-[#16A34A] mt-0.5 flex-shrink-0">✓</span> Download compressed file with no watermark</li>
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
    metaTitle: "JPG to PNG Converter Free Online",
    metaDescription:
      "Convert JPG to PNG online free. Get transparent-background PNG from any JPG instantly. Browser-based — no upload, no signup.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    JPG is great for photographs because it achieves small file sizes through lossy compression. PNG, on the other hand, supports transparency (alpha channel), uses lossless compression, and maintains crisp edges — making it ideal for logos, screenshots, graphics, and images that need a transparent background. Our free tool converts JPG to PNG in your browser without any quality degradation beyond what already exists in the JPG.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Lossless PNG Output</h3>
      <p class="text-sm text-[#52525B]">The converted PNG retains all visible pixel data from your JPG — no further quality loss occurs during format conversion.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Transparency Support</h3>
      <p class="text-sm text-[#52525B]">PNG supports alpha channel transparency. Use our background remover alongside this converter to get a transparent PNG.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">No Server Upload</h3>
      <p class="text-sm text-[#52525B]">Conversion runs in your browser using the Canvas API. Your original JPG is never transmitted to any server.</p>
    </div>
  </div>
  <div class="bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-6">
    <h3 class="text-lg font-bold text-[#18181B] mb-3">JPG vs PNG — Which Format to Use?</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📸</span><span><strong>Use JPG for:</strong> Photographs, social media images, exam/form photos — smaller file size</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🖼️</span><span><strong>Use PNG for:</strong> Logos, screenshots, graphics, images needing transparent backgrounds</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">📏</span><span><strong>File Size:</strong> JPG is typically 3–5× smaller than PNG for the same photograph</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🔍</span><span><strong>Quality:</strong> PNG is lossless; JPG compresses by removing pixel data</span></div>
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
    metaTitle: "Resize Photo to 20KB Free Online",
    metaDescription:
      "Reduce any photo to exactly 20KB or under in seconds. Free, browser-based — no upload, no signup. Ideal for signatures and bank forms.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    A 20 KB file size limit is most commonly found for signature images on government and exam portals in 2027 — including SSC, IBPS, SBI, RBI, and various state public service commission forms. Our free tool automatically calculates the correct JPEG quality setting needed to bring your image under 20 KB while keeping the signature or photo as clear as possible.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Precise 20 KB Target</h3>
      <p class="text-sm text-[#52525B]">Enter 20 as your target and the tool binary-searches for the right quality to land just at or under 20 KB automatically.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">100% Private</h3>
      <p class="text-sm text-[#52525B]">Browser-only processing — your signature or photo is never uploaded to any server or stored anywhere online.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Form-Ready Output</h3>
      <p class="text-sm text-[#52525B]">The output JPG file passes portal validation on SSC, IBPS, SBI, RRB and most state PSC application sites.</p>
    </div>
  </div>
  <div class="bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-6">
    <h3 class="text-lg font-bold text-[#18181B] mb-3">Where Is a 20 KB Limit Required in 2027?</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">✍️</span><span><strong>SSC Signatures:</strong> All SSC exams require signature images between 10–20 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🏦</span><span><strong>IBPS Signatures:</strong> IBPS PO, Clerk, SO and RRB all cap signatures at 20 KB</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🏛️</span><span><strong>State PSC Portals:</strong> Many state PSCs set 20 KB as the signature upper limit</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🚂</span><span><strong>RRB Portals:</strong> Railway Recruitment Board signature uploads are capped at 20 KB</span></div>
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
    metaTitle: "Canvas Photo Collage Maker — Free Online Tool",
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
    metaTitle: "Passport Photo Maker — Official Biometric Photos",
    metaDescription:
      "Create official passport photos online for any country. Automatic background removal, accurate head alignment, and print templates.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    Professional passport photo printing can cost ₹100–₹300 at a studio. Our free online passport photo maker lets you create a government-compliant passport photo from any smartphone selfie or portrait photo — with the correct dimensions, aspect ratio, and white background — in under a minute. All processing happens in your browser; your photo is never uploaded to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Country Presets 2026</h3>
      <p class="text-sm text-[#52525B]">India (35×45mm), USA (2×2in), UK (35×45mm), Schengen, Canada, Australia — exact dimensions per official 2026 specs.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Auto White Background</h3>
      <p class="text-sm text-[#52525B]">Automatically replace or clean up backgrounds to the required plain white colour without a background-removal subscription.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Print-Ready Output</h3>
      <p class="text-sm text-[#52525B]">Download a print-ready JPG or a 4-up print sheet with four passport photos on a 4×6 inch layout, ready for any photo printer.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">Make Your Passport Photo in 3 Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Portrait</h4><p class="text-sm text-[#52525B]">Take a clear selfie or use any recent portrait photo. Face should be centred with even lighting and plain background.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Choose Country Preset</h4><p class="text-sm text-[#52525B]">Select your target country — dimensions, resolution and file-size requirements are automatically applied.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Download & Print</h4><p class="text-sm text-[#52525B]">Download the single photo or a 4-up print sheet. Print at any photo shop or home printer for an instant passport photo.</p></div>
      </div>
    </div>
  </div>
  <div class="bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-6">
    <h3 class="text-lg font-bold text-[#18181B] mb-3">Passport Photo Requirements by Country (2026)</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🇮🇳</span><span><strong>India:</strong> 35×45 mm, white background, face 70–80% of frame, recent 6 months</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🇺🇸</span><span><strong>USA:</strong> 2×2 inch (51×51 mm), white/off-white background, neutral expression</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🇬🇧</span><span><strong>UK:</strong> 35×45 mm, light grey or cream background, 29–34 mm face height</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🇪🇺</span><span><strong>Schengen:</strong> 35×45 mm, white background, 32–36 mm face height</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🇨🇦</span><span><strong>Canada:</strong> 50×70 mm, white background, 31–36 mm face height</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">🇦🇺</span><span><strong>Australia:</strong> 35×45 mm, plain light background, neutral expression</span></div>
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
          "Download the 4-up print sheet (four passport photos arranged on a single page) and print it at any photo printing shop, pharmacy printer, or your home inkjet printer on glossy photo paper.",
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
    metaTitle: "Free Passport Photo Maker Online – Passport Size Photo",
    metaDescription:
      "Make a passport size photo online. Our passport photo maker online free tool crops, resizes, and prints for any country. No signup, no watermark.",
    h1: "Free Passport Photo Maker Online (2026): Passport Size Photo in Seconds",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Make a passport size photo in seconds. Get the correct crop, white background, and file size. 100% free, no signup, no watermark.",
    sections: [
      {
        heading: "What Is a Passport Size Photo?",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    A <strong>passport size photo</strong> is a standard small portrait that you submit for passports, visas, exam forms, job applications, and ID cards. Every country sets its own dimensions, background colour, and resolution. Our photo maker passport tool applies those rules for you, right inside your browser. You upload nothing to a server.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Need a quick passport size pic for an online form? Want a pass size photo maker that works on your phone? This passport photo maker online free tool handles both. Upload one image, pick your country, and download a print-ready passport size picture in under two minutes.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Size of Indian Passport Size Photo</h3>
  <p class="text-[#52525B] leading-relaxed">
    The size of Indian passport size photo is <strong>35 × 45 mm</strong>, which equals 413 × 531 pixels at 300 DPI. The background must be plain white. For US passports, the passport image size is a <strong>2 × 2 inch</strong> square (51 × 51 mm).
  </p>
</div>`,
      },
      {
        heading: "Passport Image Size by Country (2026)",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Check your passport size size before you download. Our photo passport size converter presets every format below. Select your country from the dropdown, and the tool sets the dimensions for you.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Passport Size Size Chart: Quick Reference</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[#E4E4E7]">
            <th class="text-left py-2 pr-4 font-semibold">Country / Document</th>
            <th class="text-left py-2 pr-4 font-semibold">Size (mm)</th>
            <th class="text-left py-2 pr-4 font-semibold">Pixels @ 300 DPI</th>
            <th class="text-left py-2 font-semibold">Background</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">India – Passport / Visa</td><td class="py-2 pr-4 text-[#52525B]">35 × 45</td><td class="py-2 pr-4 text-[#52525B]">413 × 531</td><td class="py-2 text-[#52525B]">White</td></tr>
          <tr><td class="py-2 pr-4 font-medium">USA – Passport / Green Card</td><td class="py-2 pr-4 text-[#52525B]">51 × 51</td><td class="py-2 pr-4 text-[#52525B]">600 × 600</td><td class="py-2 text-[#52525B]">White / off-white</td></tr>
          <tr><td class="py-2 pr-4 font-medium">UK – Passport</td><td class="py-2 pr-4 text-[#52525B]">35 × 45</td><td class="py-2 pr-4 text-[#52525B]">413 × 531</td><td class="py-2 text-[#52525B]">Light grey / cream</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Schengen Visa (EU)</td><td class="py-2 pr-4 text-[#52525B]">35 × 45</td><td class="py-2 pr-4 text-[#52525B]">413 × 531</td><td class="py-2 text-[#52525B]">White</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Canada – Passport</td><td class="py-2 pr-4 text-[#52525B]">50 × 70</td><td class="py-2 pr-4 text-[#52525B]">590 × 826</td><td class="py-2 text-[#52525B]">White</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Australia – Passport</td><td class="py-2 pr-4 text-[#52525B]">35 × 45</td><td class="py-2 pr-4 text-[#52525B]">413 × 531</td><td class="py-2 text-[#52525B]">White / light grey</td></tr>
          <tr><td class="py-2 pr-4 font-medium">India – Govt Exam / NID</td><td class="py-2 pr-4 text-[#52525B]">25 × 35</td><td class="py-2 pr-4 text-[#52525B]">295 × 413</td><td class="py-2 text-[#52525B]">White</td></tr>
          <tr><td class="py-2 pr-4 font-medium">India – Stamp Size Photo</td><td class="py-2 pr-4 text-[#52525B]">20 × 25</td><td class="py-2 pr-4 text-[#52525B]">236 × 295</td><td class="py-2 text-[#52525B]">White</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <p class="text-sm text-[#71717A]">
    ℹ️ Always confirm the size with the official instructions for your document. Requirements can change without notice.
  </p>
</div>`,
      },
      {
        heading: "How to Make a Passport Size Photo Online",
        content: `
<div class="space-y-4 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Photo Conversion to Passport Size in 6 Steps</h3>
  <p class="text-[#52525B] leading-relaxed">
    You can finish the whole process in under two minutes. Follow these steps:
  </p>
  <ol class="space-y-4 text-[#52525B] list-none pl-0">
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">1</span>
      <div><h4 class="font-semibold text-[#18181B]">Upload Your Photo</h4><p class="text-sm">Tap "Upload Photo" or drag in a JPEG, PNG, or HEIC image from your phone or camera. You need no account.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">2</span>
      <div><h4 class="font-semibold text-[#18181B]">Select Your Country or Document</h4><p class="text-sm">Choose a preset such as India Passport, US Passport, or Schengen Visa. You can also enter custom dimensions in mm or pixels.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">3</span>
      <div><h4 class="font-semibold text-[#18181B]">Crop and Position Your Face</h4><p class="text-sm">Drag the crop handles until your face fills 70–80% of the frame. Place your eyes in the upper third of the image.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">4</span>
      <div><h4 class="font-semibold text-[#18181B]">Clean Up the Background</h4><p class="text-sm">Switch on "White Background" to brighten and neutralise uneven walls. For a busy background, run our background remover first.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">5</span>
      <div><h4 class="font-semibold text-[#18181B]">Preview and Adjust</h4><p class="text-sm">Review the live preview at 100% zoom. Adjust brightness or contrast so your skin tone looks clear and natural.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">6</span>
      <div><h4 class="font-semibold text-[#18181B]">Download Your Photo</h4><p class="text-sm">Save a single image or a 4×6 inch print sheet with four photos. Both files carry no watermark.</p></div>
    </li>
  </ol>
</div>`,
      },
      {
        heading: "Stamp Size Photo: Size and How to Make One",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    A <strong>stamp size photo</strong> is smaller than a passport photo. Schools, colleges, and exam portals often ask for it on application forms and ID cards.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">What Is the Size of Stamp Size Photo?</h3>
  <p class="text-[#52525B] leading-relaxed">
    The size of stamp size photo is usually <strong>20 × 25 mm</strong> (2 × 2.5 cm). That equals 236 × 295 pixels at 300 DPI. Some forms use a different size, so read the instructions first. To make one, upload your photo and enter the custom dimensions in the tool. Then crop, preview, and download.
  </p>
</div>`,
      },
      {
        heading: "Print Passport Photo Online or at Home",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    You can print passport photo online through a printing service, or you can print at home. Our 4-up sheet works for both options.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">How to Print Passport Size Photo Sheets</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Download the 4×6 inch sheet.</strong> The tool arranges four photos on one page.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Choose glossy photo paper.</strong> Any inkjet or laser printer gives sharp results.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Print at 100% scale.</strong> Turn off "fit to page" so the size stays exact.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Use a local print shop if you prefer.</strong> Email or carry the file on a phone or USB drive.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Tips for the Perfect Passport Photo at Home",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    A good source photo makes every later step easier. Follow these tips before you upload.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Lighting, Pose, and Background</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Stand against a plain white or light wall.</strong> Avoid patterns, doors, and outdoor scenes.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Use natural daylight.</strong> Face a window, but keep direct sun off your face. Skip the flash.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Look straight at the camera.</strong> Keep a neutral expression, a closed mouth, and both eyes open.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Remove your glasses.</strong> Most countries now prohibit them in passport photos.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Keep hair off your face.</strong> Show your full forehead, face, and chin.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Wear a dark or mid-tone top.</strong> White clothing blends into a white background.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why Use Our Free Passport Photo Maker?",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Our tool beats a studio visit and paid apps on speed, cost, and accuracy.
  </p>
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h3 class="font-semibold text-[#18181B] mb-1">🆓 Completely Free</h3>
      <p class="text-sm text-[#52525B]">You pay nothing and see no upsells. Download unlimited photos.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h3 class="font-semibold text-[#18181B] mb-1">🔒 Private and Secure</h3>
      <p class="text-sm text-[#52525B]">Your browser processes everything. Your photo never leaves your device.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h3 class="font-semibold text-[#18181B] mb-1">📐 Pixel-Perfect Sizes</h3>
      <p class="text-sm text-[#52525B]">Presets cover 50+ countries. The tool outputs the exact pixel size and DPI.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h3 class="font-semibold text-[#18181B] mb-1">🖨️ Print-Ready Output</h3>
      <p class="text-sm text-[#52525B]">Download a 4-up layout on a standard 4×6 inch sheet.</p>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the size of passport size photo in India?",
        answer:
          "An Indian passport size photo measures 35 × 45 mm, or 413 × 531 pixels at 300 DPI. The background must be plain white. Your head, from hair top to chin, should fill 70–80% of the frame height.",
      },
      {
        question: "Can I get a passport photo online free?",
        answer:
          "Yes. This tool creates passport photos for free, with no watermark, no signup, and no usage limit. Make and download as many as you need.",
      },
      {
        question: "Is pas photo size the same as passport size?",
        answer:
          "Yes. People often search for pas photo size when they mean passport size. The standard is 35 × 45 mm for India, the UK, Schengen countries, and Australia. The US uses 51 × 51 mm.",
      },
      {
        question: "Can I use my smartphone to take the photo?",
        answer:
          "Yes. A modern phone camera gives enough resolution. Stand against a plain light wall in natural light, look straight ahead, and shoot in portrait mode. Then upload the image for precise cropping.",
      },
      {
        question: "Will the photo work for UPSC, SSC, or bank exam forms?",
        answer:
          "The tool outputs photos that match the dimensions most Indian exam portals publish: 413 × 531 px, white background, JPEG format. Always check the exact pixel count and maximum KB limit in your exam notification.",
      },
      {
        question: "Does the tool change the background automatically?",
        answer:
          "Yes. The background clean-up feature lightens and whitens uneven backgrounds. If your wall has a strong pattern or colour, use our AI background remover first. Then return here to crop.",
      },
      {
        question: "Does this tool upload my photo to a server?",
        answer:
          "No. Cropping, resizing, and background cleanup all run in your browser with client-side JavaScript. Your photo never leaves your device.",
      },
      {
        question: "Can I make passport photos for countries other than India?",
        answer:
          "Yes. The presets cover over 50 countries, including the USA (2 × 2 inch), UK (35 × 45 mm), Canada (50 × 70 mm), Australia (35 × 45 mm), and all Schengen countries. Select your destination before you download.",
      },
    ],
  },

  {
    slug: "us-passport-photo-maker",
    metaTitle: "US Passport Photo Maker 2x2 Inches Online",
    metaDescription:
      "Create a compliant US passport photo free online. 2×2 inch (51×51mm), white background, correct face size. Instant download.",
    h1: "US Passport Photo Maker — Free Online 2026",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Generate a US State Department-compliant 2×2 inch passport photo in seconds. Free, private, print-ready.",
    sections: [
      {
        heading: "US Passport Photo Requirements 2026",
        content: `<div class="space-y-8 not-prose"><p class="text-lg text-[#52525B] leading-relaxed">The US State Department requires all passport photos to be exactly 2×2 inches (51×51 mm) with a white or off-white background. The head must be between 1 inch and 1⅜ inches tall (25–35 mm), centred in the frame. Our free tool enforces all these specifications so your photo will not be rejected at the post office, acceptance facility, or US Embassy.</p><div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden"><div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]"><h3 class="text-base font-bold text-[#18181B]">Official US Passport Photo Specs 2026</h3></div><div class="overflow-x-auto p-6"><table class="w-full text-sm"><thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Requirement</th><th class="text-left py-2 font-semibold">Specification</th></tr></thead><tbody class="divide-y divide-[#F4F4F5]"><tr><td class="py-2 pr-4 font-medium">Photo Size</td><td class="py-2 text-[#52525B]">2 × 2 inches (51 × 51 mm)</td></tr><tr><td class="py-2 pr-4 font-medium">Head Size</td><td class="py-2 text-[#52525B]">1 – 1⅜ inches from chin to top of head</td></tr><tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-[#52525B]">Plain white or off-white</td></tr><tr><td class="py-2 pr-4 font-medium">Expression</td><td class="py-2 text-[#52525B]">Neutral, both eyes open and looking at camera</td></tr><tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">Colour JPEG, printed on photo-quality paper</td></tr></tbody></table></div></div></div>`,
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
    metaTitle: "UK Passport Photo Maker 35x45mm Online",
    metaDescription:
      "Make official UK passport photos 35x45mm online for free. Automatic background adjustment and compliant sizing.",
    h1: "UK Passport Photo Maker — Free Online 2026",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Create an HMPO-compliant 35×45 mm UK passport photo instantly. Free, private, no watermark.",
    sections: [
      {
        heading: "UK Passport Photo Requirements 2026",
        content: `<div class="space-y-8 not-prose"><p class="text-lg text-[#52525B] leading-relaxed">UK passport photos must meet His Majesty's Passport Office (HMPO) standards. The photo is 35×45 mm with the face taking up 29–34 mm of the height. The background must be plain light grey or cream — not white. Our free tool applies all UK-specific requirements and guides you through correct cropping to avoid rejection.</p><div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden"><div class="px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]"><h3 class="text-base font-bold text-[#18181B]">HMPO UK Passport Photo Specs 2026</h3></div><div class="overflow-x-auto p-6"><table class="w-full text-sm"><thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Requirement</th><th class="text-left py-2 font-semibold">Specification</th></tr></thead><tbody class="divide-y divide-[#F4F4F5]"><tr><td class="py-2 pr-4 font-medium">Photo Size</td><td class="py-2 text-[#52525B]">35 × 45 mm</td></tr><tr><td class="py-2 pr-4 font-medium">Face Height</td><td class="py-2 text-[#52525B]">29–34 mm (chin to crown)</td></tr><tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-[#52525B]">Plain light grey or cream (not white)</td></tr><tr><td class="py-2 pr-4 font-medium">Expression</td><td class="py-2 text-[#52525B]">Neutral, mouth closed, eyes open</td></tr><tr><td class="py-2 pr-4 font-medium">Recency</td><td class="py-2 text-[#52525B]">Taken within the last month</td></tr></tbody></table></div></div></div>`,
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
    metaTitle: "India Passport Photo Maker – Free 35×45 mm Photo Online",
    metaDescription:
      "Use this Indian passport photo maker to create 35×45 mm photos online free. White background, JPG, no upload. Also works for e-Visa and OCI photos.",
    h1: "India Passport Photo Maker: Free Online Tool (2026)",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Create passport size photo online India in seconds. Get an MEA-compliant 35×45 mm photo with a white background. Free, private, and print-ready.",
    sections: [
      {
        heading: "Indian Passport Photo Requirements 2026",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    Need an Indian passport photo maker that follows the rules? This tool lets you create an India passport photo online in under two minutes. You upload nothing to a server, and you pay nothing. The Ministry of External Affairs (MEA) and Passport Seva Kendra (PSK) require a <strong>35×45 mm</strong> photo with a plain white background, sharp focus, and a face that fills 70–80% of the frame.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Your photo must also be in colour, taken within the last 6 months, and saved as a high-resolution JPEG. At 300 DPI, the required size equals <strong>413 × 531 pixels</strong>.
  </p>
  <div class="bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-6">
    <h3 class="text-lg font-bold text-[#18181B] mb-3">Indian Passport Photo Checklist 2026</h3>
    <div class="grid sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">✅</span><span>Size: 35 mm × 45 mm (width × height)</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">✅</span><span>Background: plain white only</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">✅</span><span>Face: 70–80% of the frame, centred, front-facing</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">✅</span><span>Expression: neutral, with eyes fully open</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">✅</span><span>Recency: taken within the last 6 months</span></div>
      <div class="flex items-start gap-2 text-sm text-[#52525B]"><span class="mt-1">✅</span><span>No spectacles and no coloured contact lenses</span></div>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Make Your India Passport Size Photo Online",
        content: `<div class="space-y-6 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    This passport size photo maker India applicants rely on works on any phone or laptop. You can make an India passport size photo online free, with no account and no watermark.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Create Passport Size Photo Online India in 5 Steps</h3>
  <ol class="space-y-4 text-[#52525B] list-none pl-0">
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">1</span>
      <div><h4 class="font-semibold text-[#18181B]">Upload Your Photo</h4><p class="text-sm">Tap "Upload Photo" or drag in a JPEG, PNG, or HEIC image. A clear selfie against a plain wall works well.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">2</span>
      <div><h4 class="font-semibold text-[#18181B]">Choose the India Passport Size</h4><p class="text-sm">Select the India Passport preset (35×45 mm) from the list. The tool sets the correct pixel size and DPI.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">3</span>
      <div><h4 class="font-semibold text-[#18181B]">Crop and Centre Your Face</h4><p class="text-sm">Drag the handles until your face fills 70–80% of the frame. Keep your head straight and your eyes level.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">4</span>
      <div><h4 class="font-semibold text-[#18181B]">Clean Up the Background</h4><p class="text-sm">Switch on "White Background" to brighten and even out your wall. For a busy background, run our background remover first.</p></div>
    </li>
    <li class="flex gap-3 items-start">
      <span class="flex-shrink-0 w-7 h-7 rounded-full bg-[#16A34A] text-[#FFFFFF] text-sm font-bold flex items-center justify-center">5</span>
      <div><h4 class="font-semibold text-[#18181B]">Preview and Download</h4><p class="text-sm">Check the preview at 100% zoom, then download a single JPG or a print sheet. Neither file carries a watermark.</p></div>
    </li>
  </ol>
</div>`,
      },
      {
        heading: "Indian Visa Photo Online: e-Visa, Sticker Visa, and OCI",
        content: `<div class="space-y-6 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Visa photos follow different rules from passport photos. Use this tool to make an Indian visa photo online free, in the right size and format. Whether you search for an India visa online photo or an Indian visa photo online, the process stays the same: pick the size, crop, and download.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Indian Visa Photo Size Online Free: Quick Table</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[#E4E4E7]">
            <th class="text-left py-2 pr-4 font-semibold">Document</th>
            <th class="text-left py-2 pr-4 font-semibold">Size</th>
            <th class="text-left py-2 pr-4 font-semibold">Pixels @ 300 DPI</th>
            <th class="text-left py-2 font-semibold">Format</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Indian Passport (PSK)</td><td class="py-2 pr-4 text-[#52525B]">35 × 45 mm</td><td class="py-2 pr-4 text-[#52525B]">413 × 531</td><td class="py-2 text-[#52525B]">JPEG, white background</td></tr>
          <tr><td class="py-2 pr-4 font-medium">India e-Visa</td><td class="py-2 pr-4 text-[#52525B]">51 × 51 mm (2 × 2 in)</td><td class="py-2 pr-4 text-[#52525B]">600 × 600</td><td class="py-2 text-[#52525B]">JPEG, square, white background</td></tr>
          <tr><td class="py-2 pr-4 font-medium">India OCI</td><td class="py-2 pr-4 text-[#52525B]">51 × 51 mm (2 × 2 in)</td><td class="py-2 pr-4 text-[#52525B]">600 × 600</td><td class="py-2 text-[#52525B]">JPEG, square, white background</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <p class="text-sm text-[#71717A]">
    ℹ️ File-size limits differ by portal. Check the official instructions before you upload.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Evisa India Photo: Size and Format</h3>
  <p class="text-[#52525B] leading-relaxed">
    The Indian e-Visa portal asks for a square photo with a plain white background in JPEG format. Many applicants search for an India e visa passport photo and use the 35×45 mm size by mistake. The e-Visa photo must be square, so choose the 51 × 51 mm size or enter it as a custom size.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">India OCI Photo Online</h3>
  <p class="text-[#52525B] leading-relaxed">
    OCI applicants also upload a square photo with a white background. Create your India OCI photo online with the same 51 × 51 mm size. Then confirm the current pixel and file-size limits on the official OCI portal.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Planning to apply for an India visa online? Create your India visa photo online here, and download a file that fits the form.
  </p>
</div>`,
      },
      {
        heading: "Free Passport Photo Maker India: Why Use This Tool?",
        content: `<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Applicants who want a free passport size photo online India wide choose this tool for its speed and accuracy. You skip the studio queue and the extra fees.
  </p>
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h3 class="font-semibold text-[#18181B] mb-1">🆓 Completely Free</h3>
      <p class="text-sm text-[#52525B]">You pay nothing and see no upsells. Make unlimited photos.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h3 class="font-semibold text-[#18181B] mb-1">🔒 Private and Secure</h3>
      <p class="text-sm text-[#52525B]">Your browser processes every photo. Your image never leaves your device.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h3 class="font-semibold text-[#18181B] mb-1">✅ Rule-Based Sizes</h3>
      <p class="text-sm text-[#52525B]">Presets follow Indian passport and visa dimensions, so you avoid guesswork.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h3 class="font-semibold text-[#18181B] mb-1">🖨️ Print-Ready Output</h3>
      <p class="text-sm text-[#52525B]">Download a print sheet for any photo studio or home printer.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Common Photo Mistakes That Cause Rejection",
        content: `<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Officers reject photos for small, avoidable errors. Fix these issues before you submit your application.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Avoid These Six Errors</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Shadows on the face or wall.</strong> Face a window and keep the light even.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Spectacles or glare.</strong> Remove your glasses before you shoot.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>Off-white or patterned backgrounds.</strong> Use a plain white wall or the background clean-up option.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>A face that is too small or too large.</strong> Keep it within 70–80% of the frame.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>An old photo.</strong> Use a picture taken within the last 6 months.</span></li>
    <li class="flex gap-2 items-start"><span class="text-[#16A34A] font-bold mt-0.5">✓</span><span><strong>The wrong shape for visas.</strong> Use a square photo for e-Visa and OCI forms.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "How to Print Your Indian Passport Photo",
        content: `<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Download the print sheet and take it to any photo studio, or order online print delivery. For home printing, use glossy photo paper and print at 100% scale. Turn off "fit to page" so the size stays exact. Then cut each photo to 35×45 mm.
  </p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the size of an Indian passport photo in 2026?",
        answer:
          "An Indian passport photo must be 35 mm wide and 45 mm tall. At 300 DPI, this equals about 413 × 531 pixels.",
      },
      {
        question: "Can I wear glasses in an Indian passport photo?",
        answer:
          "No. MEA guidelines do not allow spectacles in Indian passport photos.",
      },
      {
        question:
          "Can I use this tool for Passport Seva Kendra (PSK) applications?",
        answer:
          "Yes. The tool produces photos that meet PSK digital submission requirements. Always check the latest rules on passportindia.gov.in before you submit.",
      },
      {
        question: "What size is the photo for an India e-Visa?",
        answer:
          "The e-Visa photo must be square, usually 51 × 51 mm (2 × 2 inches), with a plain white background in JPEG format. It differs from the 35×45 mm passport photo, so check the e-Visa portal for current file-size limits.",
      },
      {
        question: "Can I make an India OCI photo online with this tool?",
        answer:
          "Yes. Choose the square 51 × 51 mm size, keep the white background, and download a JPEG. Then confirm the current limits on the official OCI portal.",
      },
      {
        question: "Can I make an India passport photo online free?",
        answer:
          "Yes. The tool is completely free, with no account, no watermark, and no photo limit.",
      },
      {
        question: "Does the tool upload my photo to a server?",
        answer:
          "No. Your browser handles the cropping, resizing, and background clean-up. Your photo never leaves your device.",
      },
      {
        question: "How do I print the photo?",
        answer:
          "Download the print sheet and print it at any photo studio, or order online print delivery. For home printing, use glossy photo paper and cut each photo to 35×45 mm.",
      },
    ],
  },

  {
    slug: "remove-background",
    translationKey: "remove-background",
    metaTitle: "Free Background Remover — Remove BG Online",
    metaDescription:
      "Remove image background free online. AI-powered, instant results, transparent PNG output. No upload to servers. Works on photos, logos, and product images.",
    h1: "Free Background Remover 2026 — Remove Image Background Online",
    showTool: "bg-remover",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Remove any image background instantly with AI. Get a transparent PNG in seconds — free, private, no signup.",
    sections: [
      {
        heading: "AI-Powered Background Removal — Free & Private",
        content: `<div class="space-y-8 not-prose"><p class="text-lg text-[#52525B] leading-relaxed">Whether you need to cut out a product photo for e-commerce, create a transparent logo PNG, prepare a passport photo with a new background, or remove a cluttered backdrop from a portrait, our free background remover uses AI to detect and separate the subject from the background in seconds. Everything runs in your browser — your photos never leave your device.</p><div class="grid md:grid-cols-3 gap-5"><div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">AI Precision Cutout</h3><p class="text-sm text-[#52525B]">Smart AI detects edges — even fine hair strands — and creates a clean transparent cutout without manual masking.</p></div><div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">Transparent PNG Output</h3><p class="text-sm text-[#52525B]">Download a clean transparent PNG with no background — paste it on any colour, texture, or new background image.</p></div><div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">Instant & Free</h3><p class="text-sm text-[#52525B]">No subscription, no credits, no upload queue. Remove backgrounds from unlimited images — free, instantly, forever.</p></div></div></div>`,
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
    slug: "resize-photo-driving-license-sarathi",
    metaTitle: "Resize Photo Driving License Sarathi – Free DL Photo Resizer",
    metaDescription:
      "Use this DL photo resizer to meet Sarathi's 10–20 KB, 35×45 mm photo rules. A free driving license photo editor. Private, no upload, no watermark.",
    h1: "Resize Photo Driving License Sarathi: Free DL Photo Resizer (2027)",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Use this DL photo resizer to prepare your driving license Sarathi photo in seconds. Hit the exact RTO size and dimension rules. Instant, private, and watermark-free.",
    sections: [
      {
        heading: "Driving License Sarathi Photo Requirements",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    The Sarathi Parivahan portal, run by the Ministry of Road Transport and Highways (MoRTH), enforces strict photo upload rules. Your driving license Sarathi photo must be a recent, front-facing colour image on a plain white or light background. It must measure about <strong>35 × 45 mm</strong> (roughly 420 × 525 pixels) and weigh between <strong>10 KB and 20 KB</strong>.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    A file even 1 KB over the limit usually gets rejected. A file far below the range often looks blurry to the RTO officer. Our DL photo resizer crops and compresses your image in your browser, so it lands inside the correct range on the first try. You upload nothing to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">35 × 45 mm (~420 × 525 px)</h3>
      <p class="text-sm text-[#52525B]">Passport-style dimensions for the Sarathi photo upload.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Strictly 10–20 KB</h3>
      <p class="text-sm text-[#52525B]">The size window is narrow. Small files look blurry, and large files fail the upload.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">White or Light Background</h3>
      <p class="text-sm text-[#52525B]">The RTO wants a plain, evenly lit background with no shadows or patterns.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Photo Driving License Sarathi in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    You can resize photo driving license Sarathi applicants need in under a minute. Follow these steps.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Use the DL Photo Resizer Step by Step</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
      <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Pick a clear, front-facing photo from your gallery, or take a new one.</p></div>
    </div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
      <div><h4 class="font-semibold text-[#18181B] mb-1">Set the Sarathi Specs</h4><p class="text-sm text-[#52525B]">Enter 35 × 45 mm and a 10–20 KB target. The tool crops and compresses for you.</p></div>
    </div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
      <div><h4 class="font-semibold text-[#18181B] mb-1">Download and Upload</h4><p class="text-sm text-[#52525B]">Save the JPG, then upload it to your Sarathi application form.</p></div>
    </div>
  </div>
</div>`,
      },
      {
        heading: "A Driving License Photo Editor Built for Sarathi",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Generic apps ignore the RTO rules. This driving license photo editor gives you every control that Sarathi checks. You see the live file size as you work, so you never guess.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">What This DL Photo Resizer Does</h3>
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h4 class="font-semibold text-[#18181B] mb-1">✂️ Exact Cropping</h4>
      <p class="text-sm text-[#52525B]">Crop to the 35 × 45 mm ratio and keep your face centred.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h4 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h4>
      <p class="text-sm text-[#52525B]">Drag the compression slider and watch the KB value update instantly.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h4 class="font-semibold text-[#18181B] mb-1">🔒 Private Processing</h4>
      <p class="text-sm text-[#52525B]">Your browser handles every edit. Your photo never leaves your device.</p>
    </div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5">
      <h4 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h4>
      <p class="text-sm text-[#52525B]">You pay nothing and create no account. Edit as many photos as you need.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Photo Tips Before You Upload",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    A good source photo makes compression easier and keeps your face sharp at 10–20 KB. Follow these tips.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Lighting, Pose, and Background</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Stand against a plain white or light wall.</strong> Avoid doors, patterns, and outdoor scenes.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Face a window.</strong> Even daylight removes harsh shadows. Skip the flash.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Look straight at the camera.</strong> Keep a neutral expression and your eyes open.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Fill the frame.</strong> A tight crop keeps facial detail when the file shrinks.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use a recent photo.</strong> Old pictures can trigger a rejection at the RTO.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why Driving License Photos Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    A handful of avoidable errors cause most rejections on the Sarathi portal. Fix them now to save a second RTO visit or a resubmission delay.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">Five Common Errors</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file size outside the 10–20 KB range, even by 1 KB</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Wrong pixel dimensions or an incorrect aspect ratio</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A format other than JPG or JPEG</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A coloured, shadowed, or patterned background</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>An old, blurry, or low-contrast photo with an unclear face</span></li>
  </ul>
  <p class="text-[#52525B] leading-relaxed">
    Specifications can shift between notification cycles and states. Always confirm the current limits on sarathi.parivahan.gov.in before you submit.
  </p>
</div>`,
      },
      {
        heading: "Resize Your Signature for the Same Application",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Most Sarathi applications also ask for a scanned signature. Sign in black or blue ink on plain white paper, then photograph or scan it. The signature usually measures about 256 × 64 pixels and weighs 10–20 KB. Upload it to the same tool, set the size, and download the result.
  </p>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "What are the driving license photo size requirements on Sarathi?",
        answer:
          "The Sarathi portal asks for a photo of about 35 × 45 mm (roughly 420 × 525 pixels), compressed to 10–20 KB, in JPG format with a white or light background.",
      },
      {
        question: "How do I resize photo driving license Sarathi needs?",
        answer:
          "Upload your photo to the DL photo resizer, enter 35 × 45 mm, and set a 10–20 KB target. Then download the JPG and upload it to the Sarathi form.",
      },
      {
        question: "Can I use a selfie for my driving license photo?",
        answer:
          "Yes. The selfie must be clear and front-facing, with a plain white or light background, a neutral expression, and even lighting.",
      },
      {
        question:
          "Is my photo safe when I use this driving license photo editor?",
        answer:
          "Yes. The tool runs entirely in your browser. Your photo never reaches a server and stays on your device.",
      },
      {
        question: "What if my file is still too large after resizing?",
        answer:
          "Drag the compression slider lower. The tool shows the live file size, so you can land inside the 10–20 KB window.",
      },
      {
        question: "Does this work for both learner's and permanent licenses?",
        answer:
          "Yes. The same photo rules apply to a Learner's License (LL) and a Permanent Driving License (DL) on Sarathi.",
      },
      {
        question: "Do I need to resize my signature too?",
        answer:
          "Yes. Most applications need a scanned signature of about 256 × 64 pixels and 10–20 KB, signed in black or blue ink on white paper.",
      },
      {
        question: "Is this DL photo resizer free?",
        answer:
          "Yes. The tool is free, with no account, no watermark, and no photo limit.",
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
        content: `<div class="space-y-6 not-prose"><p class="text-lg text-[#52525B] leading-relaxed">Our free background remover uses on-device AI to cut out people, products, logos and objects from any photo in seconds. No subscription, no credits — just upload and download a clean transparent PNG. Works on desktop and mobile, with all processing staying entirely within your browser.</p><div class="grid md:grid-cols-3 gap-5"><div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">Subjects Supported</h3><p class="text-sm text-[#52525B]">People, animals, products, vehicles, logos — the AI handles a wide range of subject types with clean edge detection.</p></div><div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">Replace Background</h3><p class="text-sm text-[#52525B]">After removal, add a white, coloured, or custom image background before downloading — all in one step.</p></div><div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">No Upload Ever</h3><p class="text-sm text-[#52525B]">100% browser-based processing — your image data never leaves your device at any point in the process.</p></div></div></div>`,
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    For CTET 2027 (Central Teacher Eligibility Test), CBSE has specific photo requirements that all candidates must follow. The photograph must be a recent passport-size color photo taken against a white or light-colored background. The minimum dimensions should be 200 x 200 pixels, and the file size must be between 10 KB and 200 KB. The photo should be in JPG/JPEG format with a clear, front-facing view of your face. The CTET photo resizer helps you meet all these requirements instantly without uploading your image to any server. All processing happens in your browser, ensuring complete privacy and security of your personal photograph.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Dimensions: 200x200 Pixels</h3>
      <p class="text-sm text-[#52525B]">Minimum required dimensions for CTET 2027 photo. Tool automatically resizes to meet this specification.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">File Size: 10-200 KB</h3>
      <p class="text-sm text-[#52525B]">Compress your photo to meet CTET file size requirements while maintaining quality.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">White/Light Background</h3>
      <p class="text-sm text-[#52525B]">Background should be plain white or light-colored. Tool helps adjust lighting if needed.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">How to Resize CTET Photo Online — 3 Simple Steps</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Photo</h4><p class="text-sm text-[#52525B]">Select your recent passport-size color photo from device gallery.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Set CTET Specifications</h4><p class="text-sm text-[#52525B]">Choose 200x200 pixels, set file size between 10-200 KB, adjust quality.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Download & Upload</h4><p class="text-sm text-[#52525B]">Download resized JPG and upload to CTET 2027 application portal.</p></div>
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
      "Reduce your voter ID photo size online in 2027. Compress to under 50 KB, resize to ECI specifications, and download instantly. 100% free, private, and browser-based.",
    h1: "Voter ID Photo Size Reducer 2027 — Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Compress your voter ID photo to meet 2027 ECI guidelines in seconds. No uploads, no sign-up — everything happens privately in your browser.",
    sections: [
      {
        heading: "What Are the Voter ID Photo Size Requirements for 2027?",
        content: `
<div class="space-y-8 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    Every voter ID application or correction request submitted through the Election Commission of India's NVSP and Voter Helpline platforms requires a photo that meets strict technical specifications. Your photograph must be a recent, color, passport-style image with a plain white or light-colored background. The file size should stay under 50 KB, and the recommended dimensions are 200 x 230 pixels in JPEG format. Your face should be clearly visible, front-facing, with a neutral expression and no shadows, sunglasses, or caps. Photos that exceed the size limit or use the wrong dimensions are among the most common reasons voter ID applications get rejected or delayed. This tool compresses and resizes your photo to match these exact requirements, and because everything runs locally on your device, your photo is never uploaded to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Max File Size: 50 KB</h3>
      <p class="text-sm text-[#52525B]">Compress your photo below 50 KB without losing facial clarity, so the portal accepts it on the first try.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Dimensions: 200 x 230 Pixels</h3>
      <p class="text-sm text-[#52525B]">Resize automatically to the exact pixel ratio the ECI portal expects, with no manual cropping needed.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">Plain White Background</h3>
      <p class="text-sm text-[#52525B]">Brighten or adjust the background tone so it meets the plain-background rule before you submit.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Reduce Your Voter ID Photo Size in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    You do not need any design experience to prepare a compliant voter ID photo. Follow these three steps, and the tool handles the resizing, compression, and quality balancing for you.
  </p>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
      <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Choose an existing passport-style photo from your device, or capture a new one directly with your camera.</p></div>
    </div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
      <div><h4 class="font-semibold text-[#18181B] mb-1">Apply Voter ID Settings</h4><p class="text-sm text-[#52525B]">Select the 200 x 230 pixel preset, set the file size limit to 50 KB, and fine-tune quality with the slider.</p></div>
    </div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
      <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
      <div><h4 class="font-semibold text-[#18181B] mb-1">Download and Submit</h4><p class="text-sm text-[#52525B]">Download the compressed photo, then upload it directly to the voter registration or correction form.</p></div>
    </div>
  </div>
</div>`,
      },
      {
        heading:
          "Why Use an Online Voter ID Photo Size Reducer Instead of Other Apps",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Many people try to resize their voter ID photo using WhatsApp compression, screenshot tricks, or third-party mobile apps that demand storage permissions and account sign-ups. These methods often distort the aspect ratio, blur facial features, or strip image quality below acceptable levels. This tool avoids all of that by processing your image directly in your browser using client-side compression, so nothing is ever sent to a remote server.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    You get precise control over output size and dimensions, instant before-and-after previews, and no installation or registration. The result is a clean, ECI-compliant photo that uploads correctly the first time, saving you from repeated rejections during the application or correction process.
  </p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the maximum voter ID photo file size for 2027?",
        answer:
          "The ECI requires voter ID photos to stay under 50 KB for smooth upload on the NVSP and Voter Helpline portals. Keeping the file well below this limit reduces the chance of upload errors.",
      },
      {
        question:
          "Can I reduce the size of an existing photo for my voter ID application?",
        answer:
          "Yes. You can compress any existing JPEG or PNG photo to meet voter ID requirements. The tool automatically resizes and compresses it to fit the 200 x 230 pixel and 50 KB limits.",
      },
      {
        question: "Is my photo safe during compression?",
        answer:
          "Yes. The tool runs entirely in your browser, so your photo never leaves your device or gets uploaded to any server, keeping your personal data completely private.",
      },
      {
        question: "What dimensions should my voter ID photo be?",
        answer:
          "The recommended dimensions are 200 x 230 pixels. This size ensures your photo appears correctly on the ECI portal and prints clearly on the physical voter ID card.",
      },
      {
        question: "Does the tool work on mobile phones?",
        answer:
          "Yes. The voter ID photo size reducer is fully responsive and works smoothly on Android, iOS, and all modern mobile browsers without needing an app download.",
      },
      {
        question:
          "Will compressing my photo reduce its quality too much for approval?",
        answer:
          "No. The tool balances file size and visual clarity using smart compression, so your face remains clearly visible and recognizable even after reducing the file to under 50 KB.",
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
  <p class="text-lg text-[#52525B] leading-relaxed">
    For RRB ALP 2027 (Railway Recruitment Board Assistant Loco Pilot), candidates must upload a photograph meeting specific criteria. The photo should be a recent passport-size color photograph with a white background. The dimensions should be approximately 200 x 230 pixels with a file size between 30 KB and 70 KB. The image must be in JPG/JPEG format with clear facial features visible. Additionally, candidates need to ensure the photo is not older than 30 days from the application date. The RRB ALP photo resizer helps you meet all these requirements instantly with no server upload, ensuring your personal data stays private.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">200x230 Pixels</h3>
      <p class="text-sm text-[#52525B]">Standard RRB ALP photo dimensions for 2027 cycle. Tool auto-adjusts to match this requirement.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">30-70 KB File Size</h3>
      <p class="text-sm text-[#52525B]">Compress photo to meet RRB ALP file size requirements while retaining quality.</p>
    </div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]">
      <div class="w-11 h-11 bg-[#16A34A] rounded-xl flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-base font-bold text-[#18181B] mb-2">White Background</h3>
      <p class="text-sm text-[#52525B]">RRB requires white or very light background. Tool helps optimize background lighting.</p>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold text-[#18181B] mb-4">How to Resize RRB ALP Photo — Quick 3-Step Process</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Select your passport-size photo from device gallery or take a new photo.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Set RRB ALP Specs</h4><p class="text-sm text-[#52525B]">Choose 200x230 pixels, target 30-70 KB file size, adjust as needed.</p></div>
      </div>
      <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]">
        <div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
        <div><h4 class="font-semibold text-[#18181B] mb-1">Download & Apply</h4><p class="text-sm text-[#52525B]">Download resized JPG and upload to RRB ALP 2027 application portal.</p></div>
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
    slug: "afcat-photo-resizer",
    metaTitle: "AFCAT Photo Resizer 2027 – Resize Image Online Free",
    metaDescription:
      "Use this AFCAT photo resizer to meet IAF size rules: 200×230 px, under 50 KB, JPG. Resize image online free. Private, no upload, instant download.",
    h1: "AFCAT Photo Resizer 2027: Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your photo for AFCAT 2027 to Indian Air Force specifications. This browser-based tool is free, private, and needs no upload.",
    sections: [
      {
        heading: "AFCAT 2027 Photo Requirements",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    Applying for the Air Force Common Admission Test? This AFCAT photo resizer turns any picture into a compliant upload in seconds. The Indian Air Force (IAF) asks for a recent, colour, passport-size photograph on a plain white background. Your file must measure about <strong>200 × 230 pixels</strong>, weigh no more than <strong>50 KB</strong>, and use the <strong>JPG or JPEG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Look straight at the camera with a neutral expression. Skip headgear unless your religion requires it. The tool processes everything in your browser, so you upload nothing to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📐 200 × 230 Pixels</h3><p class="text-sm text-[#52525B]">The standard AFCAT photo size. The tool adjusts your image to match it.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📉 Maximum 50 KB</h3><p class="text-sm text-[#52525B]">Compress your photo under the limit and keep your face clear.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">⬜ White Background</h3><p class="text-sm text-[#52525B]">The IAF expects a plain white backdrop and a front-facing view.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">AFCAT Photo Size at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Specification</th><th class="text-left py-2 font-semibold">Requirement</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Dimensions</td><td class="py-2 text-[#52525B]">About 200 × 230 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">File size</td><td class="py-2 text-[#52525B]">Maximum 50 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-[#52525B]">Plain white</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Photo age</td><td class="py-2 text-[#52525B]">Recent, ideally within 30 days</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your AFCAT Photo in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Image Online for AFCAT in Under a Minute</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Select a passport-size photo from your gallery or camera roll.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Set the AFCAT Specs</h4><p class="text-sm text-[#52525B]">Enter 200 × 230 pixels, set a 50 KB limit, and adjust the quality slider.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Apply</h4><p class="text-sm text-[#52525B]">Save the JPG and upload it to the AFCAT 2027 application portal.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "Tips for a Clear AFCAT Photo",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">A sharp source photo survives compression far better than a blurry one. Prepare your picture with these tips before you resize.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Before You Take the Photo</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use a plain white wall.</strong> Avoid doors, posters, and outdoor scenes.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Face a window.</strong> Soft daylight removes harsh shadows. Skip the flash.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Look straight ahead.</strong> Keep your head level and your eyes open.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Remove headgear.</strong> Keep only religious headwear, and keep your face fully visible.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Take a fresh picture.</strong> Recruiters expect a recent photograph.</span></li>
  </ul>
  <h3 class="text-xl font-bold text-[#18181B]">While You Resize</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop tight.</strong> A closer crop keeps facial detail at 50 KB.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Lower quality in small steps.</strong> Stop as soon as the file drops under 50 KB.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Preview at full size.</strong> Check that your eyes and mouth look sharp.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why AFCAT Photos Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">Small errors cause most rejections. Fix them now and avoid a rushed correction near the deadline.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Six Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file larger than 50 KB</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>The wrong pixel dimensions or a stretched face</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A format other than JPG or JPEG</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A coloured, shadowed, or cluttered background</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Headgear or dark glasses that hide your face</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>An old or blurry photograph</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Specifications can change between notifications. Confirm the latest rules on the official AFCAT portal before you submit.</p>
</div>`,
      },
      {
        heading: "Why Use This AFCAT Photo Resizer?",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">Generic apps ignore exam rules. This tool gives you exact control over size, dimensions, and quality.</p>
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser handles every edit. Your photo never leaves your device.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">⚡ Instant Results</h3><p class="text-sm text-[#52525B]">Resize and compress in a second, with no upload queue.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h3><p class="text-sm text-[#52525B]">Watch the KB value update as you move the quality slider.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h3><p class="text-sm text-[#52525B]">You create no account and pay nothing. Resize as many photos as you need.</p></div>
  </div>
</div>`,
      },
      {
        heading: "Resize Your AFCAT Signature Too",
        content: `
<div class="space-y-3 not-prose">
  <p class="text-[#52525B] leading-relaxed">The AFCAT application also asks for a signature upload. Sign in black or blue ink on plain white paper, then photograph or scan it. Upload the image to this tool, apply the size shown in the official notification, and download the result. Keep the signature consistent with the one on your other documents.</p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the AFCAT 2027 photo specifications?",
        answer:
          "AFCAT 2027 asks for a recent colour photo of about 200 × 230 pixels, with a maximum size of 50 KB, in JPG format, on a plain white background.",
      },
      {
        question: "How do I resize my photo for AFCAT?",
        answer:
          "Upload your photo, enter 200 × 230 pixels, set a 50 KB limit, and download the JPG. Then upload it to the AFCAT application form.",
      },
      {
        question: "Can I wear glasses in my AFCAT photo?",
        answer:
          "Remove your glasses unless you need them for medical reasons. Clear facial features matter for identification.",
      },
      {
        question: "Is my AFCAT photo data secure?",
        answer:
          "Yes. The tool processes your image in your browser. Your photo never reaches a server.",
      },
      {
        question: "Can I use an older photo from a previous application?",
        answer:
          "No. AFCAT requires a recent photo. Use a fresh picture taken within the last 30 days.",
      },
      {
        question: "Does AFCAT require a signature too?",
        answer:
          "Yes. You must upload a signature as well. Use this tool to resize it to the size in the official notification.",
      },
      {
        question: "What if my file is still above 50 KB?",
        answer:
          "Lower the quality slider a little or crop closer to your face. The tool shows the live file size, so you can stop right below 50 KB.",
      },
      {
        question: "Does this AFCAT photo resizer work on mobile?",
        answer:
          "Yes. It works on Android, iOS, and desktop browsers. You install no app.",
      },
    ],
  },
  {
    slug: "ssc-photo-resizer-2027",
    metaTitle: "SSC Photo Resizer 2027 – Resize Image Online Free",
    metaDescription:
      "Use this SSC photo resizer to meet Staff Selection Commission rules: 200×230 px, under 50 KB, JPG. Resize image online free. Private, no upload.",
    h1: "SSC Photo Resizer 2027: Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your photo for SSC exams in 2027 to match Staff Selection Commission guidelines. This browser-based tool is free, private, and watermark-free.",
    sections: [
      {
        heading: "SSC 2027 Photo Requirements",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    Every SSC exam application, from CGL and CHSL to MTS and GD, asks for a photo that meets strict rules. This SSC photo resizer fits your picture to those rules in seconds. The Staff Selection Commission wants a recent, colour, passport-size photograph on a white background. Your file must measure about <strong>200 × 230 pixels</strong>, stay under <strong>50 KB</strong>, and use the <strong>JPG or JPEG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Show your full face with a neutral expression. Do not wear a cap or dark glasses. The tool works inside your browser, so your photo never reaches a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📐 200 × 230 Pixels</h3><p class="text-sm text-[#52525B]">The standard SSC photo size for 2027 applications.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📉 Maximum 50 KB</h3><p class="text-sm text-[#52525B]">Compress below the limit while your face stays sharp.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">⬜ White Background</h3><p class="text-sm text-[#52525B]">SSC expects a plain white backdrop and a front-facing view.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">SSC Photo Size at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Specification</th><th class="text-left py-2 font-semibold">Requirement</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Dimensions</td><td class="py-2 text-[#52525B]">About 200 × 230 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">File size</td><td class="py-2 text-[#52525B]">Maximum 50 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-[#52525B]">Plain white</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Colour</td><td class="py-2 text-[#52525B]">Recent colour photograph</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your SSC Photo in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Image Online for SSC in Under a Minute</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Choose a passport-size colour photo from your device.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Set the SSC Specs</h4><p class="text-sm text-[#52525B]">Enter 200 × 230 pixels, set a 50 KB limit, and tune the quality slider.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Apply</h4><p class="text-sm text-[#52525B]">Save the JPG and upload it to the SSC application portal.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "SSC Exams That Use These Photo Rules",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">The same photo workflow applies across the main SSC recruitment exams. Always check each notification, because individual exams can change the limits.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Popular SSC Exams</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>SSC CGL:</strong> Combined Graduate Level for Group B and C posts</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>SSC CHSL:</strong> Combined Higher Secondary Level for clerical posts</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>SSC MTS:</strong> Multi-Tasking Staff recruitment</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>SSC GD Constable:</strong> Central armed police force recruitment</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>SSC Stenographer:</strong> Grades C and D</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Tips for a Clear SSC Photo",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">A sharp source photo survives compression far better than a blurry one. Follow these tips.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Lighting, Pose, and Framing</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Stand against a white wall.</strong> Avoid patterns and clutter.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use natural daylight.</strong> Face a window and skip the flash.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Look at the camera.</strong> Keep a neutral expression and your eyes open.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Remove caps and dark glasses.</strong> Keep your forehead and eyes visible.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop tight.</strong> A closer crop preserves detail at 50 KB.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Match your other documents.</strong> Use a photo that looks like your ID proof.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why SSC Photos Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">Most rejections come from avoidable mistakes. Check this list before you upload.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Common Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file above 50 KB</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>The wrong dimensions or a stretched face</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A PNG or HEIC file instead of JPG</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A shadowed or coloured background</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A blurry or over-compressed image</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Rules can change between notifications. Confirm the latest limits on the official SSC portal.</p>
</div>`,
      },
      {
        heading: "Why Use This SSC Photo Resizer?",
        content: `
<div class="space-y-4 not-prose">
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser handles every edit. Your photo stays on your device.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">⚡ Instant Results</h3><p class="text-sm text-[#52525B]">Resize and compress in a second. You wait for no upload.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h3><p class="text-sm text-[#52525B]">See the KB value change as you drag the quality slider.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h3><p class="text-sm text-[#52525B]">You need no account and pay nothing.</p></div>
  </div>
  <p class="text-[#52525B] leading-relaxed">SSC applications also need a signature. Sign on plain white paper in black or blue ink, upload the scan here, and apply the size from the official notification.</p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the SSC 2027 photo specifications?",
        answer:
          "SSC asks for a recent colour photo of about 200 × 230 pixels, under 50 KB, in JPG format, on a plain white background.",
      },
      {
        question: "How do I resize my photo for an SSC application?",
        answer:
          "Upload your photo, enter 200 × 230 pixels, set a 50 KB limit, and download the JPG. Then upload it to the SSC form.",
      },
      {
        question: "Can I use a mobile photo for the SSC application?",
        answer:
          "Yes. Take a clear photo with your phone, then resize it here to meet the SSC rules.",
      },
      {
        question: "Is my SSC photo data secure?",
        answer:
          "Yes. All processing happens in your browser. Your photo never leaves your device.",
      },
      {
        question: "What if my photo is already resized?",
        answer:
          "Upload it anyway. The tool lets you verify and adjust the dimensions and file size to match the SSC rules exactly.",
      },
      {
        question: "Does SSC require a signature too?",
        answer:
          "Yes. SSC applications also ask for a signature. Resize it with this tool using the size from the official notification.",
      },
      {
        question: "Can I wear glasses or a cap in the SSC photo?",
        answer:
          "Do not wear a cap or dark glasses. Your full face must stay visible.",
      },
      {
        question: "Does this SSC photo resizer work on mobile?",
        answer:
          "Yes. It runs on Android, iOS, and desktop browsers. You install nothing.",
      },
    ],
  },
  {
    slug: "csir-net-signature-resizer",
    metaTitle: "CSIR NET Signature Resizer 2027 – Resize Signature Online",
    metaDescription:
      "Use this CSIR NET signature resizer to meet size rules: 200×50 px, under 30 KB, JPG or PNG. Resize signature online free. Private, no upload.",
    h1: "CSIR NET Signature Resizer 2027: Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your signature for CSIR NET 2027 to the official specifications. This browser-based tool is free, private, and needs no upload.",
    sections: [
      {
        heading: "CSIR NET 2027 Signature Requirements",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    The CSIR NET application asks for a clean, scanned signature. This CSIR NET signature resizer fits your scan to the rules in seconds. Sign in black or blue ink on plain white paper. Your file should measure about <strong>200 × 50 pixels</strong>, stay under <strong>30 KB</strong>, and use the <strong>JPG, JPEG, or PNG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    The signature must be clear and match your usual handwriting. The tool runs in your browser, so you upload nothing to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">✍️ 200 × 50 Pixels</h3><p class="text-sm text-[#52525B]">The standard CSIR NET signature size. The tool adjusts your scan to match.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📉 Maximum 30 KB</h3><p class="text-sm text-[#52525B]">Compress below the limit and keep every stroke readable.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">🖊️ Black or Blue Ink</h3><p class="text-sm text-[#52525B]">Dark ink on white paper gives the cleanest scan.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">CSIR NET Signature Size at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Specification</th><th class="text-left py-2 font-semibold">Requirement</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Dimensions</td><td class="py-2 text-[#52525B]">About 200 × 50 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">File size</td><td class="py-2 text-[#52525B]">Maximum 30 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">JPG / JPEG or PNG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Ink</td><td class="py-2 text-[#52525B]">Black or blue</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Paper</td><td class="py-2 text-[#52525B]">Plain white</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your CSIR NET Signature in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Signature Online in Under a Minute</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Signature</h4><p class="text-sm text-[#52525B]">Select the scanned or photographed signature from your device.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Set the CSIR Specs</h4><p class="text-sm text-[#52525B]">Enter 200 × 50 pixels, set a 30 KB limit, and adjust the quality slider.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Upload</h4><p class="text-sm text-[#52525B]">Save the file and upload it to the CSIR NET application.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "How to Create a Clean Signature Scan",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">A clean scan resizes better than a shadowy phone photo. Prepare your signature with these steps.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Before You Scan</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use plain white paper.</strong> Avoid lined or textured sheets.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Sign with a black or blue pen.</strong> A fine tip gives crisp lines.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Sign inside a box.</strong> Draw a wide rectangle and fill it, so you crop easily.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Light the page evenly.</strong> Photograph in daylight and avoid shadows.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Hold the camera straight.</strong> Shoot from directly above the paper.</span></li>
  </ul>
  <h3 class="text-xl font-bold text-[#18181B]">While You Resize</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop close to the ink.</strong> Remove empty margins so the strokes stay large.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Keep the 4:1 ratio.</strong> A 200 × 50 box needs a wide crop.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Preview the result.</strong> Make sure thin strokes remain visible.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why CSIR NET Signatures Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">Most problems come from the scan, not the form. Avoid these errors.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Common Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file larger than 30 KB</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A stretched signature caused by the wrong aspect ratio</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A typed or digital signature instead of a handwritten one</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Pale ink or a grey, shadowed background</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A signature that differs from your usual one</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Specifications can change. Confirm the latest limits on the official CSIR NET portal before you submit.</p>
</div>`,
      },
      {
        heading: "Why Use This CSIR NET Signature Resizer?",
        content: `
<div class="space-y-4 not-prose">
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser handles the edit. Your signature never leaves your device.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">⚡ Instant Results</h3><p class="text-sm text-[#52525B]">Resize and compress in a second, with no upload wait.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h3><p class="text-sm text-[#52525B]">Watch the KB value change as you move the quality slider.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h3><p class="text-sm text-[#52525B]">You need no account and pay nothing.</p></div>
  </div>
  <p class="text-[#52525B] leading-relaxed">CSIR NET also needs a photograph. Use the photo resizer on this site to match the size in the official notification.</p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the CSIR NET 2027 signature specifications?",
        answer:
          "CSIR NET asks for a signature of about 200 × 50 pixels, under 30 KB, in JPG or PNG format, signed in black or blue ink on white paper.",
      },
      {
        question: "How do I resize my signature for CSIR NET?",
        answer:
          "Upload your scanned signature, enter 200 × 50 pixels, set a 30 KB limit, and download the file. Then upload it to the application form.",
      },
      {
        question: "Can I use a digital signature for CSIR NET?",
        answer:
          "No. CSIR NET needs a handwritten signature that you scan and upload. Digital signatures do not qualify.",
      },
      {
        question: "Is my signature data secure?",
        answer:
          "Yes. The tool runs in your browser. Your signature never leaves your device.",
      },
      {
        question: "What if my signature file is too large?",
        answer:
          "Lower the quality slider or crop closer to the ink. The tool shows the live file size, so you can stop below 30 KB.",
      },
      {
        question: "Which ink colour works best for a CSIR NET signature?",
        answer:
          "Use black or blue ink. Both give strong contrast against white paper and scan clearly.",
      },
      {
        question: "Does CSIR NET require a photo too?",
        answer:
          "Yes. The application also asks for a photograph. Resize it with the photo resizer on this site.",
      },
      {
        question: "Does this tool work on mobile?",
        answer:
          "Yes. It works on Android, iOS, and desktop browsers. You install no app.",
      },
    ],
  },
  {
    slug: "army-agniveer-photo-resizer",
    metaTitle: "Army Agniveer Photo Resizer 2027 – Resize Image Online",
    metaDescription:
      "Use this Army Agniveer photo resizer to meet Indian Army rules: 200×230 px, under 50 KB, JPG. Resize image online free. Private, no upload.",
    h1: "Army Agniveer Photo Resizer 2027: Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your photo for Army Agniveer 2027 to Indian Army specifications. This tool is free, private, and needs no upload.",
    sections: [
      {
        heading: "Army Agniveer 2027 Photo Requirements",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    Applying for the Agnipath scheme? This Army Agniveer photo resizer fits your picture to the Indian Army rules in seconds. The Army asks for a recent, colour, passport-size photograph on a plain white background. Your file must measure about <strong>200 × 230 pixels</strong>, stay under <strong>50 KB</strong>, and use the <strong>JPG or JPEG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Show your face clearly with a neutral expression. Do not wear a cap, dark glasses, or a uniform. The tool processes your image in your browser, so you upload nothing to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📐 200 × 230 Pixels</h3><p class="text-sm text-[#52525B]">The standard Agniveer photo size for the 2027 cycle.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📉 Maximum 50 KB</h3><p class="text-sm text-[#52525B]">Compress below the limit while your face stays clear.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">⬜ White Background</h3><p class="text-sm text-[#52525B]">The Army expects a plain white backdrop and a front-facing view.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">Agniveer Photo Size at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Specification</th><th class="text-left py-2 font-semibold">Requirement</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Dimensions</td><td class="py-2 text-[#52525B]">About 200 × 230 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">File size</td><td class="py-2 text-[#52525B]">Maximum 50 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-[#52525B]">Plain white</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Clothing</td><td class="py-2 text-[#52525B]">Civilian clothes, no uniform or cap</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your Agniveer Photo in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Image Online for Agniveer in Under a Minute</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Select a passport-size photo from your gallery.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Set the Agniveer Specs</h4><p class="text-sm text-[#52525B]">Enter 200 × 230 pixels, set a 50 KB limit, and adjust quality.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Apply</h4><p class="text-sm text-[#52525B]">Save the JPG and upload it to the Army Agniveer portal.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "Tips for a Clear Agniveer Photo",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">Recruitment portals check photos closely, so a sharp, honest picture helps. Follow these tips.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Before You Take the Photo</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Wear a plain civilian shirt.</strong> Avoid uniforms, badges, and printed slogans.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Stand against a white wall.</strong> Keep shadows off the backdrop.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Face a window.</strong> Even daylight gives a natural skin tone.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Look straight ahead.</strong> Keep your head level and your mouth closed.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Take a new photo.</strong> The application needs a recent picture.</span></li>
  </ul>
  <h3 class="text-xl font-bold text-[#18181B]">While You Resize</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop tight.</strong> A closer crop keeps your features sharp at 50 KB.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Reduce quality in small steps.</strong> Stop when the file drops below 50 KB.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Preview at full size.</strong> Check your eyes before you download.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why Agniveer Photos Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">A rejected photo can delay your registration. Avoid these errors.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Common Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file larger than 50 KB</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Wrong dimensions or a stretched face</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A uniform, cap, or dark glasses</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A coloured or cluttered background</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>An old or blurry photograph</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Rules can change between rallies and notifications. Confirm the latest limits on the official Indian Army recruitment portal.</p>
</div>`,
      },
      {
        heading: "Why Use This Agniveer Photo Resizer?",
        content: `
<div class="space-y-4 not-prose">
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser handles every edit. Your photo never leaves your device.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">⚡ Instant Results</h3><p class="text-sm text-[#52525B]">Resize and compress in a second, with no upload queue.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h3><p class="text-sm text-[#52525B]">Watch the KB value change as you drag the quality slider.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h3><p class="text-sm text-[#52525B]">You need no account and pay nothing.</p></div>
  </div>
  <p class="text-[#52525B] leading-relaxed">The application also asks for a signature. Sign on plain white paper, upload the scan here, and apply the size from the official notification.</p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the Army Agniveer 2027 photo specifications?",
        answer:
          "Army Agniveer asks for a recent colour photo of about 200 × 230 pixels, under 50 KB, in JPG format, on a plain white background.",
      },
      {
        question: "How do I resize my photo for Agniveer?",
        answer:
          "Upload your photo, enter 200 × 230 pixels, set a 50 KB limit, and download the JPG. Then upload it to the application portal.",
      },
      {
        question: "Can I wear a uniform in my Agniveer photo?",
        answer:
          "No. Wear civilian clothes. The photograph must not show a uniform or cap.",
      },
      {
        question: "Is my photo data secure?",
        answer:
          "Yes. All processing happens in your browser. Your photo never leaves your device.",
      },
      {
        question: "Can I reuse a photo from an older application?",
        answer:
          "No. Take a fresh photo for the 2027 application, because the Army requires a recent photograph.",
      },
      {
        question: "Does Army Agniveer require a signature?",
        answer:
          "Yes. The application also asks for a signature. Resize it with this tool using the size in the official notification.",
      },
      {
        question: "What if my file stays above 50 KB?",
        answer:
          "Lower the quality slider a little or crop closer to your face. The live file size shows you when to stop.",
      },
      {
        question: "Does this tool work on a phone?",
        answer:
          "Yes. It works on Android, iOS, and desktop browsers. You install no app.",
      },
    ],
  },
  {
    slug: "ibps-handwritten-declaration-resizer",
    metaTitle: "IBPS Handwritten Declaration Resizer 2027 – Resize Online",
    metaDescription:
      "Use this IBPS handwritten declaration resizer to meet IBPS rules: 800×400 px, 50–100 KB, JPG. Resize declaration online free. Private, no upload.",
    h1: "IBPS Handwritten Declaration Resizer 2027: Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your handwritten declaration for IBPS 2027 to the official specifications. This browser-based tool is free, private, and needs no upload.",
    sections: [
      {
        heading: "IBPS Handwritten Declaration Requirements for 2027",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    IBPS asks every candidate to upload a handwritten declaration along with the photo, signature, and left thumb impression. This IBPS handwritten declaration resizer fits your scan to the rules in seconds. Write the text in English, in your own running handwriting, with a black pen on white paper. Your file should measure <strong>800 × 400 pixels</strong>, weigh between <strong>50 KB and 100 KB</strong>, and use the <strong>JPG or JPEG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    The tool runs in your browser, so you upload nothing to a server.
  </p>
  <h3 class="text-xl font-bold text-[#18181B]">The Declaration Text</h3>
  <div class="bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-6 text-[#52525B] leading-relaxed">
    “I, [Candidate Name], hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.”
  </div>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📐 800 × 400 Pixels</h3><p class="text-sm text-[#52525B]">The preferred IBPS declaration size.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📉 50–100 KB</h3><p class="text-sm text-[#52525B]">Keep the file inside this window and keep every word readable.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">🖊️ Black Pen, White Paper</h3><p class="text-sm text-[#52525B]">Write in English, in running handwriting, and avoid capital letters.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">Declaration Size at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Specification</th><th class="text-left py-2 font-semibold">Requirement</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Dimensions</td><td class="py-2 text-[#52525B]">800 × 400 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">File size</td><td class="py-2 text-[#52525B]">50 KB to 100 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Language</td><td class="py-2 text-[#52525B]">English, running handwriting</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Ink and paper</td><td class="py-2 text-[#52525B]">Black pen on white paper</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your IBPS Declaration in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Declaration Online in Under a Minute</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Write and Scan</h4><p class="text-sm text-[#52525B]">Write the declaration on white paper, then scan or photograph it.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Set the IBPS Specs</h4><p class="text-sm text-[#52525B]">Upload the image, enter 800 × 400 pixels, and target 50–100 KB.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Upload</h4><p class="text-sm text-[#52525B]">Save the JPG and upload it to the IBPS application portal.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "How to Write a Clean Declaration",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">A neat page scans better and survives compression. Prepare it with these steps.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Before You Scan</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use plain white paper.</strong> Avoid lined sheets.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Write with a black pen.</strong> Press evenly for dark, clear strokes.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use running handwriting.</strong> Do not write in capital letters.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Write your own name.</strong> Replace the placeholder with your full name.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Fill the 2:1 frame.</strong> Write in two or three lines so the text fills a wide crop.</span></li>
  </ul>
  <h3 class="text-xl font-bold text-[#18181B]">While You Resize</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop to a 2:1 ratio.</strong> That matches 800 × 400 pixels.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Stay above 50 KB.</strong> Over-compression blurs thin letters.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Preview at full size.</strong> Check every word before you download.</span></li>
  </ul>
  <p class="text-[#52525B] leading-relaxed"><strong>Cannot write?</strong> IBPS allows candidates who cannot write to type the declaration and add a left thumb impression below it. Then scan and upload it using the same specifications.</p>
</div>`,
      },
      {
        heading: "Why IBPS Declarations Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">Most rejections come from small, avoidable errors. Check this list first.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Common Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file outside the 50–100 KB range</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Text written in capital letters</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A typed declaration from a candidate who can write</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Text in a language other than English</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Faint ink, shadows, or cropped words</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Each IBPS notification can change the details. Confirm the latest rules on the official IBPS portal before you submit.</p>
</div>`,
      },
      {
        heading: "Why Use This IBPS Declaration Resizer?",
        content: `
<div class="space-y-4 not-prose">
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser handles the edit. Your declaration never leaves your device.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">⚡ Instant Results</h3><p class="text-sm text-[#52525B]">Resize and compress in a second, with no upload wait.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h3><p class="text-sm text-[#52525B]">Watch the KB value change as you move the quality slider.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h3><p class="text-sm text-[#52525B]">You need no account and pay nothing.</p></div>
  </div>
  <p class="text-[#52525B] leading-relaxed">You also need a photo, signature, and left thumb impression. Resize them with the other IBPS tools on this site.</p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What is the IBPS handwritten declaration text?",
        answer:
          "The text reads: “I, [Candidate Name], hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.”",
      },
      {
        question: "What are the IBPS declaration specifications?",
        answer:
          "IBPS asks for a handwritten declaration of 800 × 400 pixels, between 50 KB and 100 KB, in JPG format.",
      },
      {
        question: "Can I write the declaration in Hindi?",
        answer:
          "No. IBPS asks for the declaration in English. Write it in running handwriting with a black pen.",
      },
      {
        question: "Can I type the declaration instead of writing it?",
        answer:
          "Only candidates who cannot write may type it, and they must add a left thumb impression below the text. Everyone else must write it by hand.",
      },
      {
        question: "Can I use capital letters?",
        answer:
          "No. Write in running handwriting. Capital letters can lead to rejection.",
      },
      {
        question: "Is my declaration data secure?",
        answer:
          "Yes. The tool runs in your browser. Your declaration never leaves your device.",
      },
      {
        question: "What if my file is too large or too small?",
        answer:
          "Adjust the quality slider. The live file size shows you when the image lands between 50 KB and 100 KB.",
      },
      {
        question: "Does this tool work on mobile?",
        answer:
          "Yes. It works on Android, iOS, and desktop browsers. You install no app.",
      },
    ],
  },
  {
    slug: "resize-left-thumb-impression-ibps",
    metaTitle: "Resize Left Thumb Impression IBPS 2027 – Free Online Tool",
    metaDescription:
      "Resize left thumb impression for IBPS 2027: 240×240 px, 20–50 KB, JPG. Free, private tool with no upload. Download your compliant image instantly.",
    h1: "Resize Left Thumb Impression IBPS 2027: Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your left thumb impression for IBPS 2027 to the official specifications. This tool is free, private, and needs no upload.",
    sections: [
      {
        heading: "IBPS Left Thumb Impression Requirements for 2027",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    IBPS uses your left thumb impression to verify your identity. Use this tool to resize left thumb impression files for IBPS in seconds. Press your left thumb on a pad with black or blue ink, then stamp it on white paper. Your scan should measure <strong>240 × 240 pixels</strong>, weigh between <strong>20 KB and 50 KB</strong>, and use the <strong>JPG or JPEG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    The print must be clear and unsmudged. The tool runs in your browser, so you upload nothing to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📐 240 × 240 Pixels</h3><p class="text-sm text-[#52525B]">The preferred IBPS thumb impression size.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📉 20–50 KB</h3><p class="text-sm text-[#52525B]">Keep the file inside this window and keep the ridges visible.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">👍 Left Thumb</h3><p class="text-sm text-[#52525B]">Use your left thumb. Use the right only if you have no left thumb.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">Thumb Impression Size at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Specification</th><th class="text-left py-2 font-semibold">Requirement</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Dimensions</td><td class="py-2 text-[#52525B]">240 × 240 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">File size</td><td class="py-2 text-[#52525B]">20 KB to 50 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Ink</td><td class="py-2 text-[#52525B]">Black or blue ink pad</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Paper</td><td class="py-2 text-[#52525B]">Plain white</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your Thumb Impression in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Thumb Impression Online in Under a Minute</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Stamp and Scan</h4><p class="text-sm text-[#52525B]">Press your left thumb on white paper, then scan or photograph it.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Set the IBPS Specs</h4><p class="text-sm text-[#52525B]">Upload the image, enter 240 × 240 pixels, and target 20–50 KB.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Upload</h4><p class="text-sm text-[#52525B]">Save the JPG and upload it to the IBPS application portal.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "How to Take a Clear Thumb Impression",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">A clean print resizes well. A smudged one fails verification. Follow these tips.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Before You Scan</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Clean your thumb.</strong> Wipe off oil and dirt first.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use a fresh ink pad.</strong> Black or blue ink gives the best contrast.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Press once.</strong> Roll gently from edge to edge and avoid sliding.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Leave a margin.</strong> Stamp in the middle of a white square.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Let the ink dry.</strong> Wait before you touch or scan the page.</span></li>
  </ul>
  <h3 class="text-xl font-bold text-[#18181B]">While You Resize</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop to a square.</strong> A 1:1 ratio matches 240 × 240 pixels.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Centre the print.</strong> Leave a small border around the ridges.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Stay above 20 KB.</strong> Heavy compression erases fine ridge detail.</span></li>
  </ul>
  <p class="text-[#52525B] leading-relaxed"><strong>No left thumb?</strong> IBPS lets you use your right thumb. State this in your handwritten declaration.</p>
</div>`,
      },
      {
        heading: "Why Thumb Impressions Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">Most rejections trace back to the scan. Avoid these errors.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Common Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file outside the 20–50 KB range</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A smudged or faint print</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>The wrong finger, or the wrong hand without an explanation</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Coloured ink other than black or blue</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A stretched image caused by a non-square crop</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Each IBPS notification can change the details. Confirm the latest rules on the official IBPS portal.</p>
</div>`,
      },
      {
        heading: "Why Use This IBPS Thumb Impression Resizer?",
        content: `
<div class="space-y-4 not-prose">
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser handles the edit. Your fingerprint never leaves your device.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">⚡ Instant Results</h3><p class="text-sm text-[#52525B]">Resize and compress in a second, with no upload wait.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h3><p class="text-sm text-[#52525B]">Watch the KB value change as you move the quality slider.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h3><p class="text-sm text-[#52525B]">You need no account and pay nothing.</p></div>
  </div>
  <p class="text-[#52525B] leading-relaxed">You also need a photo, signature, and handwritten declaration. Resize them with the other IBPS tools on this site.</p>
</div>`,
      },
    ],
    faq: [
      {
        question: "Which thumb impression does IBPS require?",
        answer:
          "IBPS requires your left thumb impression. If you have no left thumb, you may use your right thumb and state this in your declaration.",
      },
      {
        question: "What are the IBPS left thumb impression specifications?",
        answer:
          "IBPS asks for a thumb impression of 240 × 240 pixels, between 20 KB and 50 KB, in JPG format, on white paper with black or blue ink.",
      },
      {
        question: "How do I resize my left thumb impression for IBPS?",
        answer:
          "Upload your scan, enter 240 × 240 pixels, target 20–50 KB, and download the JPG. Then upload it to the IBPS form.",
      },
      {
        question: "Is my thumb impression data secure?",
        answer:
          "Yes. The tool runs in your browser. Your thumb impression never leaves your device.",
      },
      {
        question: "Can I use coloured ink for the impression?",
        answer:
          "Use a black or blue ink pad only. Other colours may fail verification.",
      },
      {
        question: "What if my thumb impression file is too large?",
        answer:
          "Lower the quality slider a little. The live file size shows you when the image falls below 50 KB.",
      },
      {
        question: "What if the print looks smudged after resizing?",
        answer:
          "Retake the impression on a clean thumb and a fresh pad. A smudged original cannot be fixed by resizing.",
      },
      {
        question: "Does this tool work on mobile?",
        answer:
          "Yes. It works on Android, iOS, and desktop browsers. You install no app.",
      },
    ],
  },
  {
    slug: "uksssc-photo-resizer",
    metaTitle: "UKSSSC Photo Resizer 2027 – Resize Image Online Free",
    metaDescription:
      "Use this UKSSSC photo resizer to meet Uttarakhand SSSC rules: 200×230 px, under 50 KB, JPG. Resize image online free. Private, no upload.",
    h1: "UKSSSC Photo Resizer 2027: Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your photo for UKSSSC 2027 to the commission's specifications. This browser-based tool is free, private, and needs no upload.",
    sections: [
      {
        heading: "UKSSSC 2027 Photo Requirements",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    The Uttarakhand Subordinate Service Selection Commission (UKSSSC) checks every uploaded photo against fixed rules. This UKSSSC photo resizer fits your picture to those rules in seconds. The commission wants a recent, colour, passport-size photograph on a plain white background. Your file must measure about <strong>200 × 230 pixels</strong>, stay under <strong>50 KB</strong>, and use the <strong>JPG or JPEG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Show your face clearly with a neutral expression. Do not wear a cap or dark glasses. The tool runs in your browser, so you upload nothing to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📐 200 × 230 Pixels</h3><p class="text-sm text-[#52525B]">The standard UKSSSC photo size for 2027 exams.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📉 Maximum 50 KB</h3><p class="text-sm text-[#52525B]">Compress below the limit while your face stays sharp.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">⬜ White Background</h3><p class="text-sm text-[#52525B]">UKSSSC expects a plain white backdrop and a front-facing view.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">UKSSSC Photo Size at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Specification</th><th class="text-left py-2 font-semibold">Requirement</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Dimensions</td><td class="py-2 text-[#52525B]">About 200 × 230 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">File size</td><td class="py-2 text-[#52525B]">Maximum 50 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-[#52525B]">Plain white</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Colour</td><td class="py-2 text-[#52525B]">Recent colour photograph</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your UKSSSC Photo in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Image Online for UKSSSC in Under a Minute</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Choose a passport-size colour photo from your device.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Set the UKSSSC Specs</h4><p class="text-sm text-[#52525B]">Enter 200 × 230 pixels, set a 50 KB limit, and tune the quality slider.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Apply</h4><p class="text-sm text-[#52525B]">Save the JPG and upload it to the UKSSSC application portal.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "Tips for a Clear UKSSSC Photo",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">A sharp source photo survives compression far better than a blurry one. Follow these tips.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Lighting, Pose, and Framing</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Stand against a white wall.</strong> Avoid patterns and clutter.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use natural daylight.</strong> Face a window and skip the flash.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Look at the camera.</strong> Keep a neutral expression and your eyes open.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Remove caps and dark glasses.</strong> Keep your forehead and eyes visible.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop tight.</strong> A closer crop preserves detail at 50 KB.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Keep the photo recent.</strong> Use a picture that looks like you today.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why UKSSSC Photos Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">Most rejections come from avoidable mistakes. Check this list before you upload.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Common Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file above 50 KB</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>The wrong dimensions or a stretched face</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A PNG or HEIC file instead of JPG</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A shadowed or coloured background</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A blurry or over-compressed image</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Rules can change between notifications. Confirm the latest limits on the official UKSSSC portal.</p>
</div>`,
      },
      {
        heading: "Why Use This UKSSSC Photo Resizer?",
        content: `
<div class="space-y-4 not-prose">
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser handles every edit. Your photo stays on your device.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">⚡ Instant Results</h3><p class="text-sm text-[#52525B]">Resize and compress in a second, with no upload queue.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h3><p class="text-sm text-[#52525B]">See the KB value change as you drag the quality slider.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h3><p class="text-sm text-[#52525B]">You need no account and pay nothing.</p></div>
  </div>
  <p class="text-[#52525B] leading-relaxed">UKSSSC applications also need a signature. Sign on plain white paper in black or blue ink, upload the scan here, and apply the size from the official notification.</p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the UKSSSC 2027 photo specifications?",
        answer:
          "UKSSSC asks for a recent colour photo of about 200 × 230 pixels, under 50 KB, in JPG format, on a plain white background.",
      },
      {
        question: "How do I resize my photo for UKSSSC?",
        answer:
          "Upload your photo, enter 200 × 230 pixels, set a 50 KB limit, and download the JPG. Then upload it to the UKSSSC form.",
      },
      {
        question: "Can I use a mobile photo for the UKSSSC application?",
        answer:
          "Yes. Take a clear photo with your phone, then resize it here to meet the UKSSSC rules.",
      },
      {
        question: "Is my photo data secure?",
        answer:
          "Yes. All processing happens in your browser. Your photo never leaves your device.",
      },
      {
        question: "What if my photo is already resized?",
        answer:
          "Upload it anyway. The tool lets you verify and adjust the dimensions and file size to match the rules exactly.",
      },
      {
        question: "Does UKSSSC require a signature too?",
        answer:
          "Yes. UKSSSC applications also ask for a signature. Resize it with this tool using the size from the official notification.",
      },
      {
        question: "Can I wear glasses or a cap in the photo?",
        answer:
          "Do not wear a cap or dark glasses. Your full face must stay visible.",
      },
      {
        question: "Does this tool work on a phone?",
        answer:
          "Yes. It runs on Android, iOS, and desktop browsers. You install nothing.",
      },
    ],
  },
  {
    slug: "rrb-technician-exam-photo-resizer",
    metaTitle: "RRB Technician Photo Resizer 2027 – Photo & Signature",
    metaDescription:
      "Use this RRB Technician photo resizer to meet 2027 rules: 200×230 px photo, 20–50 KB, plus a 10–20 KB signature. Free, private, no upload.",
    h1: "RRB Technician Photo Resizer 2027: Photo and Signature Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your RRB Technician photo and signature to the 2027 application format. Everything runs privately in your browser, with no upload and no installation.",
    sections: [
      {
        heading: "RRB Technician Photo and Signature Requirements for 2027",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    The Railway Recruitment Board (RRB) sets strict photo and signature rules for the Technician application, and a small mismatch can block your submission. This RRB Technician photo resizer fits both files to the rules in one place. Your photo must be a recent colour, passport-style image on a plain light background. It should measure about <strong>200 × 230 pixels</strong>, weigh <strong>20 KB to 50 KB</strong>, and use the <strong>JPEG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Your signature needs a separate scan. Sign in black or dark blue ink on white paper, and keep the file between <strong>10 KB and 20 KB</strong>. The tool runs locally, so your documents never leave your browser.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📷 Photo: 20–50 KB</h3><p class="text-sm text-[#52525B]">Compress your photo into the approved range and keep your face clear.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📐 200 × 230 Pixels</h3><p class="text-sm text-[#52525B]">Match the pixel ratio the application portal expects.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">✍️ Signature: 10–20 KB</h3><p class="text-sm text-[#52525B]">Resize your scanned signature to the smaller file limit.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">RRB Technician Sizes at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Item</th><th class="text-left py-2 pr-4 font-semibold">Dimensions</th><th class="text-left py-2 pr-4 font-semibold">File Size</th><th class="text-left py-2 font-semibold">Format</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Photograph</td><td class="py-2 pr-4 text-[#52525B]">About 200 × 230 px</td><td class="py-2 pr-4 text-[#52525B]">20–50 KB</td><td class="py-2 text-[#52525B]">JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Signature</td><td class="py-2 pr-4 text-[#52525B]">As per notification</td><td class="py-2 pr-4 text-[#52525B]">10–20 KB</td><td class="py-2 text-[#52525B]">JPEG</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your RRB Technician Photo in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Photo and Signature Online in Minutes</h3>
  <p class="text-[#52525B] leading-relaxed">You need no design software. The tool handles resizing, compression, and format conversion for you.</p>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Upload Photo or Signature</h4><p class="text-sm text-[#52525B]">Select your passport-style photo or scanned signature.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Apply the RRB Settings</h4><p class="text-sm text-[#52525B]">Use 200 × 230 px and 20–50 KB for the photo, or 10–20 KB for the signature. Adjust the quality slider if needed.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Upload</h4><p class="text-sm text-[#52525B]">Save each file and upload it to the RRB application form.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "Tips for a Clear Photo and Signature",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">Good source files compress better. Prepare both images with these tips.</p>
  <h3 class="text-xl font-bold text-[#18181B]">For Your Photograph</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Use a plain light wall.</strong> Avoid shadows, patterns, and clutter.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Face a window.</strong> Even daylight gives a natural look. Skip the flash.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Look straight ahead.</strong> Keep a neutral expression and your eyes open.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop tight.</strong> A closer crop keeps detail inside the KB limit.</span></li>
  </ul>
  <h3 class="text-xl font-bold text-[#18181B]">For Your Signature</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Sign on plain white paper.</strong> Use a black or dark blue pen.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Photograph in even light.</strong> Shoot from directly above to avoid shadows.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop close to the ink.</strong> Remove empty margins so the strokes stay large.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why RRB Technician Uploads Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">Application portals reject files that fall outside the limits, and that can force you to restart the form. Avoid these errors.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Common Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A photo outside 20–50 KB, or a signature outside 10–20 KB</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Stretched images caused by the wrong aspect ratio</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A format other than JPEG</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A dark, shadowed, or cluttered photo background</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A faint, smudged, or typed signature</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Always check the latest official notification before you submit.</p>
</div>`,
      },
      {
        heading: "Why Candidates Prefer This RRB Photo Resizer",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">
    Many candidates try basic gallery editors or generic compression apps that miss the exact pixel and KB combination. Those tools often distort the face, blur the features, or leave the file too large. This resizer works around the RRB Technician rules instead.
  </p>
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser processes every file. Nothing reaches a server.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">👁️ Before and After Preview</h3><p class="text-sm text-[#52525B]">Compare the original and the result before you download.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Precise Size Control</h3><p class="text-sm text-[#52525B]">Watch the live KB value as you adjust quality.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📱 Mobile Friendly</h3><p class="text-sm text-[#52525B]">Work on Android, iOS, or desktop, even close to the deadline.</p></div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "What photo size does the RRB Technician application require?",
        answer:
          "RRB Technician applications generally ask for a photo between 20 KB and 50 KB, with dimensions around 200 × 230 pixels, in JPEG format. Check the latest official notification before you submit.",
      },
      {
        question: "What signature size does the RRB Technician form require?",
        answer:
          "The scanned signature should typically weigh between 10 KB and 20 KB. Sign in black or dark blue ink on plain white paper before you scan.",
      },
      {
        question: "Can I resize both my photo and signature here?",
        answer:
          "Yes. Use the tool once for the photo and once for the signature, and apply the matching size to each.",
      },
      {
        question: "Does the tool upload my files to a server?",
        answer:
          "No. Your browser processes everything. Your files stay on your device.",
      },
      {
        question: "Does the tool work on mobile phones?",
        answer:
          "Yes. It works on Android, iOS, and desktop browsers, so you can finish even close to the deadline.",
      },
      {
        question: "Will compression hurt my chances of approval?",
        answer:
          "Not if you compress carefully. Lower the quality in small steps and keep your face clearly visible while you meet the KB limit.",
      },
      {
        question: "What if my photo stays above 50 KB?",
        answer:
          "Crop closer to your face or lower the quality slightly. The live file size shows you when to stop.",
      },
      {
        question: "Is this RRB Technician photo resizer free?",
        answer:
          "Yes. It is free, with no account, no watermark, and no photo limit.",
      },
    ],
  },
  {
    slug: "karnataka-police-photo-resizer",
    metaTitle: "Karnataka Police Photo Resizer 2027 – Resize Image Online",
    metaDescription:
      "Use this Karnataka Police photo resizer to meet KSP rules: 200×230 px, under 50 KB, JPG. Resize image online free. Private, no upload.",
    h1: "Karnataka Police Photo Resizer 2027: Free Online Tool",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Resize your photo for Karnataka Police 2027 to KSP specifications. This tool is free, private, and needs no upload.",
    sections: [
      {
        heading: "Karnataka Police 2027 Photo Requirements",
        content: `
<div class="space-y-6 not-prose">
  <p class="text-lg text-[#52525B] leading-relaxed">
    Applying for Karnataka State Police (KSP) recruitment? This Karnataka Police photo resizer fits your picture to the portal rules in seconds. KSP asks for a recent, colour, passport-size photograph on a plain white or light background. Your file must measure about <strong>200 × 230 pixels</strong>, stay under <strong>50 KB</strong>, and use the <strong>JPG or JPEG</strong> format.
  </p>
  <p class="text-[#52525B] leading-relaxed">
    Show your face clearly with a neutral expression. Do not wear a cap, dark glasses, or a uniform. The tool processes your image in your browser, so you upload nothing to a server.
  </p>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📐 200 × 230 Pixels</h3><p class="text-sm text-[#52525B]">The standard KSP photo size for 2027 recruitment.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">📉 Maximum 50 KB</h3><p class="text-sm text-[#52525B]">Compress below the limit while your face stays clear.</p></div>
    <div class="p-6 rounded-xl border border-[#BBF7D0]"><h3 class="text-base font-bold text-[#18181B] mb-2">⬜ White or Light Background</h3><p class="text-sm text-[#52525B]">KSP expects a plain backdrop and a front-facing view.</p></div>
  </div>
  <h3 class="text-xl font-bold text-[#18181B]">Karnataka Police Photo Size at a Glance</h3>
  <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden">
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-[#E4E4E7]"><th class="text-left py-2 pr-4 font-semibold">Specification</th><th class="text-left py-2 font-semibold">Requirement</th></tr></thead>
        <tbody class="divide-y divide-[#F4F4F5]">
          <tr><td class="py-2 pr-4 font-medium">Dimensions</td><td class="py-2 text-[#52525B]">About 200 × 230 pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">File size</td><td class="py-2 text-[#52525B]">Maximum 50 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Format</td><td class="py-2 text-[#52525B]">JPG / JPEG</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Background</td><td class="py-2 text-[#52525B]">Plain white or light</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Clothing</td><td class="py-2 text-[#52525B]">Civilian clothes, no uniform or cap</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
      {
        heading: "How to Resize Your Karnataka Police Photo in 3 Steps",
        content: `
<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-[#18181B]">Resize Image Online for KSP in Under a Minute</h3>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div><h4 class="font-semibold text-[#18181B] mb-1">Upload Your Photo</h4><p class="text-sm text-[#52525B]">Select a passport-size photo from your gallery.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div><h4 class="font-semibold text-[#18181B] mb-1">Set the KSP Specs</h4><p class="text-sm text-[#52525B]">Enter 200 × 230 pixels, set a 50 KB limit, and adjust quality.</p></div></div>
    <div class="flex gap-4 p-5 bg-[#FFFFFF] rounded-xl border border-[#E4E4E7]"><div class="w-10 h-10 rounded-full bg-[#16A34A] text-[#FFFFFF] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div><h4 class="font-semibold text-[#18181B] mb-1">Download and Apply</h4><p class="text-sm text-[#52525B]">Save the JPG and upload it to the Karnataka Police recruitment portal.</p></div></div>
  </div>
</div>`,
      },
      {
        heading: "Tips for a Clear Karnataka Police Photo",
        content: `
<div class="space-y-5 not-prose">
  <p class="text-[#52525B] leading-relaxed">A sharp, honest picture helps your application move smoothly. Follow these tips.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Before You Take the Photo</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Wear a plain civilian shirt.</strong> Avoid uniforms, badges, and printed slogans.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Stand against a white or light wall.</strong> Keep shadows off the backdrop.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Face a window.</strong> Even daylight gives a natural skin tone.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Look straight ahead.</strong> Keep your head level and your mouth closed.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Take a new photo.</strong> The application needs a recent picture.</span></li>
  </ul>
  <h3 class="text-xl font-bold text-[#18181B]">While You Resize</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Crop tight.</strong> A closer crop keeps your features sharp at 50 KB.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Reduce quality in small steps.</strong> Stop when the file drops below 50 KB.</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span><strong>Preview at full size.</strong> Check your eyes before you download.</span></li>
  </ul>
</div>`,
      },
      {
        heading: "Why Karnataka Police Photos Get Rejected",
        content: `
<div class="space-y-4 not-prose">
  <p class="text-[#52525B] leading-relaxed">A rejected photo can delay your registration. Avoid these errors.</p>
  <h3 class="text-xl font-bold text-[#18181B]">Common Errors to Avoid</h3>
  <ul class="space-y-2 text-[#52525B]">
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A file larger than 50 KB</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>Wrong dimensions or a stretched face</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A uniform, cap, or dark glasses</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>A coloured or cluttered background</span></li>
    <li class="flex items-start gap-2"><span class="text-[#16A34A]">✓</span><span>An old or blurry photograph</span></li>
  </ul>
  <p class="text-sm text-[#71717A]">ℹ️ Rules can change between notifications. Confirm the latest limits on the official KSP recruitment portal.</p>
</div>`,
      },
      {
        heading: "Why Use This Karnataka Police Photo Resizer?",
        content: `
<div class="space-y-4 not-prose">
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🔒 Private by Design</h3><p class="text-sm text-[#52525B]">Your browser handles every edit. Your photo never leaves your device.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">⚡ Instant Results</h3><p class="text-sm text-[#52525B]">Resize and compress in a second, with no upload queue.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">📉 Live File Size</h3><p class="text-sm text-[#52525B]">Watch the KB value change as you drag the quality slider.</p></div>
    <div class="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] p-5"><h3 class="font-semibold text-[#18181B] mb-1">🆓 Free, No Watermark</h3><p class="text-sm text-[#52525B]">You need no account and pay nothing.</p></div>
  </div>
  <p class="text-[#52525B] leading-relaxed">The application also asks for a signature. Sign on plain white paper, upload the scan here, and apply the size from the official notification.</p>
</div>`,
      },
    ],
    faq: [
      {
        question: "What are the Karnataka Police 2027 photo specifications?",
        answer:
          "Karnataka Police asks for a recent colour photo of about 200 × 230 pixels, under 50 KB, in JPG format, on a plain white or light background.",
      },
      {
        question: "How do I resize my photo for KSP?",
        answer:
          "Upload your photo, enter 200 × 230 pixels, set a 50 KB limit, and download the JPG. Then upload it to the recruitment portal.",
      },
      {
        question: "Can I wear a uniform in my KSP photo?",
        answer:
          "No. Wear civilian clothes. The photograph must not show a uniform or cap.",
      },
      {
        question: "Is my photo data secure?",
        answer:
          "Yes. All processing happens in your browser. Your photo never leaves your device.",
      },
      {
        question: "Can I reuse a photo from an older application?",
        answer:
          "No. Take a fresh photo for the 2027 recruitment, because KSP requires a recent photograph.",
      },
      {
        question: "Does KSP require a signature?",
        answer:
          "Yes. The application also asks for a signature. Resize it with this tool using the size in the official notification.",
      },
      {
        question: "What if my file stays above 50 KB?",
        answer:
          "Lower the quality slider a little or crop closer to your face. The live file size shows you when to stop.",
      },
      {
        question: "Does this tool work on a phone?",
        answer:
          "Yes. It works on Android, iOS, and desktop browsers. You install no app.",
      },
    ],
  },
  ...programmaticPages,
];

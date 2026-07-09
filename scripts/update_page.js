const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/(en)/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');
const lines = content.split('\n');

// Find the index of the SEO CONTENT comment
const seoIndex = lines.findIndex(line => line.includes('SEO CONTENT'));

if (seoIndex === -1) {
  console.error("Could not find SEO CONTENT section");
  process.exit(1);
}

// Keep everything from seoIndex onwards
const staticContent = lines.slice(seoIndex - 1).join('\n');

// We also need the static arrays (homeFaqSchema, FEATURES, USE_CASES, COMPARISON) and CellIcon function.
// Let's grab them from the original content.

const newPageContent = `import React from "react";
import HeroUploader from "./components/HeroUploader";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is photoresizer really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our online photo editor is completely free to use. There are no hidden fees, no watermarks, and no premium subscriptions required to access core editing features.",
      },
    },
    {
      "@type": "Question",
      name: "Are my photos safe and private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. photoresizer utilizes cutting-edge WebAssembly technology, meaning all photo editing and background removal happens entirely inside your local browser. Your images are never uploaded to our servers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support bulk background removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Yes, switch to the "Bulk BG Remover" tab at the top of the page. You can drag and drop multiple images at once, and our AI will automatically remove the backgrounds in sequence.',
      },
    },
    {
      "@type": "Question",
      name: "What image formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support JPG, PNG, WEBP, BMP, and GIF files as input. You can export your edited images in JPG, PNG, or WEBP format.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a file size limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Since all processing happens in your browser, the practical limit is your device's RAM. Most modern devices handle images up to 20–30 MB without issue.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, photoresizer is fully responsive and works on smartphones and tablets. For complex editing tasks, a desktop browser provides a more comfortable experience.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the AI background remover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI model is trained on millions of images and handles complex edges like hair, fur, and transparent objects with high accuracy. For most subjects, the result is clean enough to use without manual touch-up.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No account is needed. Open the site, upload your photo, and start editing immediately. No sign-up, no login, no email required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I resize images to exact pixel dimensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The resize tool lets you set exact width and height in pixels, with optional aspect-ratio lock so your image never gets distorted.",
      },
    },
    {
      "@type": "Question",
      name: "What makes this different from Photoshop or Canva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike Photoshop, there is nothing to install and no subscription to pay. Unlike Canva, your images never leave your device — everything is processed locally. It is the fastest, most private way to do quick professional edits.",
      },
    },
  ],
};

const FEATURES = [
  {
    icon: "🖼️",
    title: "Resize & Crop",
    desc: "Set exact pixel dimensions, lock aspect ratio, or crop to any preset — social banners, passport photos, thumbnails, and more.",
  },
  {
    icon: "🤖",
    title: "AI Background Remover",
    desc: "One-click background removal powered by a WebAssembly AI model. Works on people, products, logos, and pets with sharp edge detection.",
  },
  {
    icon: "📦",
    title: "Image Compressor",
    desc: "Reduce file size without visible quality loss. Ideal for faster web pages, email attachments, and app uploads.",
  },
  {
    icon: "🎨",
    title: "Filters & Adjustments",
    desc: "Fine-tune brightness, contrast, saturation, and sharpness. Apply one-click filters for instant style transformations.",
  },
  {
    icon: "✏️",
    title: "Text & Watermark",
    desc: "Add custom text overlays or watermarks with full font, size, color, and opacity control.",
  },
  {
    icon: "🔄",
    title: "Format Converter",
    desc: "Convert between JPG, PNG, and WEBP in seconds. Perfect for optimizing images for web or print.",
  },
];

const USE_CASES = [
  {
    title: "E-commerce Sellers",
    desc: "Remove backgrounds from product photos and place them on clean white backgrounds — Amazon, Shopify, and eBay ready in seconds.",
    emoji: "🛒",
  },
  {
    title: "Social Media Managers",
    desc: "Resize images to exact platform specs: Instagram squares, Twitter banners, LinkedIn covers, and YouTube thumbnails.",
    emoji: "📱",
  },
  {
    title: "HR & Government Forms",
    desc: "Create passport-compliant photos with precise dimensions and white backgrounds for visa applications and ID cards.",
    emoji: "🪪",
  },
  {
    title: "Bloggers & Content Creators",
    desc: "Compress and optimize images for faster page load speeds without sacrificing visual quality.",
    emoji: "✍️",
  },
  {
    title: "Designers & Freelancers",
    desc: "Quickly prepare client assets — cut out logos, isolate subjects, and batch-process product images.",
    emoji: "🎨",
  },
  {
    title: "Students & Job Seekers",
    desc: "Prepare professional-looking profile photos and document images without expensive software.",
    emoji: "🎓",
  },
];

const COMPARISON = [
  {
    feature: "Free to use",
    us: true,
    photoshop: false,
    canva: "Partial",
    removebg: "Partial",
  },
  {
    feature: "No upload to servers",
    us: true,
    photoshop: true,
    canva: false,
    removebg: false,
  },
  {
    feature: "AI background removal",
    us: true,
    photoshop: true,
    canva: true,
    removebg: true,
  },
  {
    feature: "Bulk background removal",
    us: true,
    photoshop: false,
    canva: false,
    removebg: "Paid",
  },
  {
    feature: "Image compression",
    us: true,
    photoshop: true,
    canva: false,
    removebg: false,
  },
  {
    feature: "Passport photo maker",
    us: true,
    photoshop: false,
    canva: false,
    removebg: false,
  },
  {
    feature: "No account required",
    us: true,
    photoshop: false,
    canva: false,
    removebg: false,
  },
  {
    feature: "Works on mobile",
    us: true,
    photoshop: false,
    canva: true,
    removebg: true,
  },
  {
    feature: "Format conversion",
    us: true,
    photoshop: true,
    canva: "Partial",
    removebg: false,
  },
  {
    feature: "Text & watermarks",
    us: true,
    photoshop: true,
    canva: true,
    removebg: false,
  },
];

function CellIcon({ val }: { val: boolean | string }) {
  if (val === true)
    return (
      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
        ✓
      </span>
    );
  if (val === false)
    return <span className="text-red-400 font-bold text-lg">✗</span>;
  return <span className="text-amber-500 text-sm font-medium">{val}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-root font-sans transition-colors duration-300">
      <script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqSchema, null, 2),
        }}
      />
      <main className="max-w-[1400px] mx-auto">
        <HeroUploader />
${staticContent}
      </main>
    </div>
  );
}
`;

fs.writeFileSync(pagePath, newPageContent);
console.log("Updated page.tsx successfully!");

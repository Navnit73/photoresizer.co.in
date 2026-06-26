"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useDropzone } from "react-dropzone";
import {
  UploadCloud,
  Shield,
  Zap,
  Sparkles,
  Image,
  Layers,
  Type,
  ArrowRight,
} from "lucide-react";

const PhotoEditor = dynamic(() => import("../components/editor/PhotoEditor"), {
  ssr: false,
});
const BgRemoverApp = dynamic(
  () => import("../components/bg_removal/BgRemoverApp"),
  { ssr: false },
);

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

/* ══════════════════════════════════════════
   TRUST BADGES
   ══════════════════════════════════════════ */
const TRUST_BADGES = [
  { icon: Shield, label: "100% Private", desc: "Nothing leaves your browser" },
  { icon: Zap, label: "Instant Processing", desc: "No server wait times" },
  { icon: Sparkles, label: "Completely Free", desc: "No watermarks or limits" },
];

const TOOL_FEATURES = [
  { icon: Image, label: "Resize & Crop" },
  { icon: Layers, label: "Remove Background" },
  { icon: Type, label: "Text & Watermark" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"editor" | "bg_remover">("editor");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      setIsTransitioning(true);
      // Small delay for smooth transition
      setTimeout(() => {
        setHasUploadedImage(true);
        // Dispatch a custom event so the PhotoEditor's OriginalWorkspace can pick up the file
        const event = new CustomEvent("hero-file-drop", {
          detail: { files: acceptedFiles },
        });
        window.dispatchEvent(event);
      }, 100);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    multiple: false,
    noClick: false,
  });

  const showHero = !hasUploadedImage && activeTab === "editor";

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
        {/* ══════════════════════════════════════════
            HERO SECTION — shown before upload
        ══════════════════════════════════════════ */}
        {showHero && (
          <div
            className={`transition-all duration-500 ${isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
          >
            <section className="hero-gradient-bg relative overflow-hidden rounded-none md:rounded-3xl md:mx-4 md:mt-4">
              {/* Dot grid overlay */}
              <div className="hero-dots absolute inset-0 pointer-events-none" />

              {/* Floating decorative shapes */}
              <div className="absolute top-20 left-[10%] w-16 h-16 rounded-2xl bg-blue-500/10 dark:bg-blue-400/5 hero-float-1 blur-sm pointer-events-none" />
              <div className="absolute top-40 right-[15%] w-12 h-12 rounded-full bg-violet-500/10 dark:bg-violet-400/5 hero-float-2 blur-sm pointer-events-none" />
              <div className="absolute bottom-32 left-[20%] w-10 h-10 rounded-xl bg-emerald-500/8 dark:bg-emerald-400/5 hero-float-3 blur-sm pointer-events-none" />
              <div className="absolute top-12 right-[35%] w-8 h-8 rounded-full bg-pink-500/8 dark:bg-pink-400/5 hero-float-2 pointer-events-none" />
              <div className="absolute bottom-20 right-[8%] w-14 h-14 rounded-2xl bg-amber-500/8 dark:bg-amber-400/5 hero-float-1 blur-sm pointer-events-none" />

              <div className="relative z-10 px-6 sm:px-8 lg:px-16 py-14 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* ── LEFT COLUMN: Marketing Copy ── */}
                  <div className="max-w-xl order-2 lg:order-1">
                    {/* Badge */}
                    <div className="hero-fade-in hero-fade-in-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Trusted by 1M+ users worldwide
                      </span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-fade-in hero-fade-in-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-5">
                      Edit Photos{" "}
                      <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Instantly
                      </span>
                      <br />
                      <span className="text-slate-700 dark:text-slate-300">
                        Right in Your Browser
                      </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="hero-fade-in hero-fade-in-delay-2 text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-md">
                      Resize, compress, remove backgrounds, and add text — all
                      powered by on-device AI. Your photos never leave your
                      device.
                    </p>

                    {/* Trust Badges */}
                    <div className="hero-fade-in hero-fade-in-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                      {TRUST_BADGES.map(({ icon: Icon, label, desc }) => (
                        <div
                          key={label}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/[0.06] backdrop-blur-sm hover:bg-white/70 dark:hover:bg-white/[0.06] transition-all duration-300 group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-sky-500/10 dark:from-indigo-400/10 dark:to-violet-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon
                              size={16}
                              className="text-blue-600 dark:text-blue-400"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                              {label}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-500 leading-tight mt-0.5">
                              {desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tool features row */}
                    <div className="hero-fade-in hero-fade-in-delay-4 flex flex-wrap items-center gap-2">
                      {TOOL_FEATURES.map(({ icon: Icon, label }) => (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/50 text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          <Icon size={12} />
                          {label}
                        </span>
                      ))}
                      <Link
                        href="/tools"
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        40+ more tools <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* ── RIGHT COLUMN: Upload Zone ── */}
                  <div className="hero-fade-in hero-fade-in-delay-3 flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="w-full max-w-md">
                      {/* Tab Switcher */}
                      <div className="flex p-1 bg-white/40 dark:bg-white/[0.04] rounded-2xl border border-white/50 dark:border-white/[0.08] backdrop-blur-sm mb-5 shadow-sm">
                        <button
                          onClick={() => setActiveTab("editor")}
                          className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
                            activeTab === "editor"
                              ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md"
                              : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                          }`}
                        >
                          ✨ Photo Editor
                        </button>
                        <Link
                          href="/remove-background"
                          className="flex-1 text-center py-2.5 px-4 text-sm font-semibold rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                        >
                          🤖 Bulk BG Remover
                        </Link>
                      </div>

                      {/* Upload Card */}
                      <div
                        {...getRootProps()}
                        className={`hero-upload-zone relative cursor-pointer rounded-2xl border-2 border-dashed p-8 sm:p-10 transition-all duration-300 backdrop-blur-md ${
                          isDragActive
                            ? "border-blue-500 bg-blue-50/80 dark:bg-blue-500/10 scale-[1.02]"
                            : "border-slate-300/60 dark:border-slate-600/40 bg-white/60 dark:bg-white/[0.03] hover:border-blue-400/60 dark:hover:border-blue-500/40 hover:bg-white/80 dark:hover:bg-white/[0.05]"
                        }`}
                      >
                        <input {...getInputProps()} />

                        {/* Shimmer strip */}
                        <div className="hero-shimmer absolute inset-0 rounded-2xl pointer-events-none" />

                        <div className="relative flex flex-col items-center text-center">
                          {/* Upload Icon */}
                          <div
                            className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                              isDragActive
                                ? "bg-blue-500 shadow-xl shadow-blue-500/30 scale-110"
                                : "bg-gradient-to-br from-blue-500 to-sky-600 shadow-lg shadow-blue-500/20"
                            }`}
                          >
                            <UploadCloud size={36} className="text-white" />
                          </div>

                          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                            {isDragActive
                              ? "Drop your image here!"
                              : "Upload Your Photo"}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs">
                            Drag & drop your image here, or click to browse.
                            Editing starts immediately.
                          </p>

                          {/* CTA Button */}
                          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] mb-5">
                            <UploadCloud size={16} />
                            Choose Image
                          </button>

                          {/* Format Badges */}
                          <div className="flex items-center gap-2">
                            {["JPG", "PNG", "WEBP"].map((fmt) => (
                              <span
                                key={fmt}
                                className="px-2.5 py-1 bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400 rounded-md text-[10px] font-bold tracking-wide"
                              >
                                {fmt}
                              </span>
                            ))}
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 ml-1">
                              up to 30MB
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Privacy note */}
                      <div className="flex items-center justify-center gap-2 mt-4 px-4">
                        <Shield
                          size={12}
                          className="text-emerald-500 flex-shrink-0"
                        />
                        <span className="text-[11px] text-slate-400 dark:text-slate-500">
                          Your images are processed locally. Nothing is uploaded
                          to any server.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ══════════════════════════════════════════
            EDITOR — shown after upload or for bg_remover tab
        ══════════════════════════════════════════ */}
        <div className={`${!showHero ? "block" : "hidden"} p-4 md:p-8`}>
          {/* Header area when editor is active */}
          <header className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight text-text-main">
                PhotoResizerAI
              </h1>
            </div>

            {/* Tab Switcher */}
            <div className="flex p-1 bg-bg-card rounded-xl border border-border-subtle shadow-sm w-full md:w-auto self-start">
              <button
                onClick={() => setActiveTab("editor")}
                className={`flex-1 md:w-36 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "editor"
                    ? "bg-accent-main text-white shadow-md"
                    : "text-text-muted hover:text-text-main hover:bg-bg-input"
                }`}
              >
                Photo Editor
              </button>
              <Link
                href="/remove-background"
                className={`flex-1 text-center md:w-44 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "bg_remover"
                    ? "bg-blue-600 dark:bg-blue-500 text-white shadow-md"
                    : "text-text-muted hover:text-text-main hover:bg-bg-input block"
                }`}
              >
                Bulk BG Remover
              </Link>
            </div>
          </header>

          <div
            className={
              activeTab === "editor"
                ? "block min-h-[600px] sm:min-h-[800px]"
                : "hidden"
            }
          >
            <PhotoEditor />
          </div>
          <div
            className={
              activeTab === "bg_remover"
                ? "block min-h-[600px] sm:min-h-[800px]"
                : "hidden"
            }
          >
            <BgRemoverApp />
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SEO CONTENT
        ══════════════════════════════════════════ */}
        <section className="mt-16 max-w-5xl mx-auto px-4 md:px-0 space-y-20">
          {/* ── Intro ── */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              The Best Free Online Photo Editor — No Software, No Sign-Up
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              photoresizer is a zero-installation, zero-upload photo editor that
              runs entirely inside your browser. Using WebAssembly technology,
              every crop, resize, compression, and AI background removal
              operation happens locally on your device. Your photos never touch
              a server — not even ours.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you are an e-commerce seller preparing product photos, a
              job seeker making a passport picture, or a social media manager
              resizing banners for five platforms at once, photoresizer gives
              you professional-grade results in seconds — completely free, with
              no watermarks.
            </p>
          </div>

          {/* ── How to Use ── */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
              How to Edit Photos Online in 3 Steps
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Upload Your Image",
                  body: "Drag and drop a JPG, PNG, or WEBP file into the editor — or click to browse. No file size account gate.",
                },
                {
                  step: "2",
                  title: "Edit & Adjust",
                  body: "Crop, resize, compress, remove backgrounds, apply filters, add text, or convert the format. All tools are free and instant.",
                },
                {
                  step: "3",
                  title: "Download for Free",
                  body: "Save your finished photo in JPG, PNG, or WEBP. No watermark, no login, no credits needed.",
                },
              ].map(({ step, title, body }) => (
                <div
                  key={step}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden"
                >
                  <span className="absolute top-4 right-4 text-6xl font-black text-slate-100 dark:text-slate-700 select-none leading-none">
                    {step}
                  </span>
                  <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2 relative">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 relative">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Features ── */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-100">
              Everything You Need in One Free Tool
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Most free online editors lock key features behind a paywall.
              photoresizer gives you the full toolkit upfront — no tiers, no
              trial limits.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700"
                >
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Use Cases ── */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-100">
              Who Uses photoresizer?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Our tool is used by over a million people across dozens of
              professions. Here are the most common workflows.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {USE_CASES.map(({ emoji, title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Comparison Table ── */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-100">
              photoresizer vs. Photoshop, Canva &amp; remove.bg
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              See how we compare to the most popular photo editing and
              background removal tools on the market.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-4 font-semibold text-slate-700 dark:text-slate-300">
                      Feature
                    </th>
                    <th className="p-4 font-semibold text-blue-700 dark:text-blue-400">
                      photoresizer
                    </th>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">
                      Photoshop
                    </th>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">
                      Canva
                    </th>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">
                      remove.bg
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(
                    ({ feature, us, photoshop, canva, removebg }, i) => (
                      <tr
                        key={feature}
                        className={`border-t border-slate-100 dark:border-slate-700/60 ${i % 2 === 0 ? "bg-white dark:bg-slate-900/30" : "bg-slate-50/60 dark:bg-slate-800/20"}`}
                      >
                        <td className="p-4 text-slate-700 dark:text-slate-300">
                          {feature}
                        </td>
                        <td className="p-4 text-center">
                          <CellIcon val={us} />
                        </td>
                        <td className="p-4 text-center">
                          <CellIcon val={photoshop} />
                        </td>
                        <td className="p-4 text-center">
                          <CellIcon val={canva} />
                        </td>
                        <td className="p-4 text-center">
                          <CellIcon val={removebg} />
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* ───────────────── SEO CONTENT ───────────────── */}
          <section className="mt-16 max-w-5xl mx-auto px-4 md:px-0 space-y-16">
            {/* Intro */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Indian Exam Photo Resizer – Resize Photos for Government Exam
                Applications
              </h2>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Every Indian government examination has its own photograph
                requirements, including image dimensions, file size, aspect
                ratio, and format. Uploading an incorrect image may result in
                your application being rejected. Our
                <strong> Indian Exam Photo Resizer</strong> helps you resize,
                crop, and compress your passport-size photo according to
                official guidelines in just a few clicks.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you're applying for SSC, UPSC, Railway, Banking, Police,
                Defence, Teaching, or State Government jobs, our online tool
                lets you create a perfectly optimized exam photo without
                installing any software. Simply upload your image, choose the
                required dimensions or file size, and download your resized
                photo instantly.
              </p>
            </div>

            {/* Supported Exams */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                Supported Indian Government & Competitive Exams
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "SSC CGL",
                  "SSC CHSL",
                  "SSC MTS",
                  "SSC GD",
                  "SSC CPO",
                  "UPSC",
                  "NDA",
                  "CDS",
                  "CAPF",
                  "IBPS PO",
                  "IBPS Clerk",
                  "SBI PO",
                  "SBI Clerk",
                  "RRB NTPC",
                  "RRB Group D",
                  "Railway ALP",
                  "RBI Grade B",
                  "CTET",
                  "UGC NET",
                  "CSIR NET",
                  "NEET",
                  "JEE Main",
                  "CUET",
                  "GATE",
                  "CAT",
                  "CLAT",
                  "AFCAT",
                  "Agniveer",
                  "Indian Army",
                  "Delhi Police",
                  "State PSC",
                  "TET",
                  "High Court",
                  "District Court",
                ].map((exam) => (
                  <div
                    key={exam}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3"
                  >
                    <span className="font-medium text-slate-800 dark:text-white">
                      {exam} Photo Resizer
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                Features Built for Indian Exam Applications
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  "Resize photos to exact pixel dimensions.",
                  "Reduce photo size to 20KB, 50KB, 100KB or custom limits.",
                  "Crop passport-size photos accurately.",
                  "Maintain image quality after compression.",
                  "Supports JPG, JPEG, PNG and WEBP formats.",
                  "Works on desktop and mobile devices.",
                  "No registration or software installation required.",
                  "Fast download with optimized image quality.",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5"
                  >
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How To */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                How to Resize Your Exam Photo
              </h2>

              <div className="grid md:grid-cols-4 gap-5">
                {[
                  {
                    title: "Upload",
                    desc: "Upload your passport-size photograph.",
                  },
                  {
                    title: "Select Size",
                    desc: "Choose the required pixel dimensions or file size.",
                  },
                  {
                    title: "Resize",
                    desc: "Automatically crop and optimize your image.",
                  },
                  {
                    title: "Download",
                    desc: "Download the exam-ready photo instantly.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 relative"
                  >
                    <span className="absolute top-4 right-5 text-5xl font-black text-slate-100 dark:text-slate-700">
                      {index + 1}
                    </span>

                    <h3 className="font-semibold text-blue-600 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Why Use Our Indian Exam Photo Resizer?
              </h2>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Thousands of candidates lose valuable time because their
                photographs don't meet the upload requirements of government
                recruitment portals. Our tool automatically resizes your image
                while preserving clarity, helping you avoid upload errors and
                application rejection.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether your exam requires a 20KB, 50KB, or 100KB JPEG image or
                specific pixel dimensions, our editor makes the process quick,
                accurate, and hassle-free. It's the ideal solution for SSC,
                UPSC, Banking, Railway, Police, Defence, and State Government
                examinations.
              </p>
            </div>
          </section>

          {/* ── Why Us ── */}
          <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-slate-800/50 dark:to-slate-900/50 rounded-3xl p-8 border border-blue-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Why Privacy-First Photo Editing Matters
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Most online photo editors send your images to a remote server,
              process them, and send them back. That means a copy of your photo
              — which might contain personal information, proprietary product
              images, or confidential documents — exists on someone else&apos;s
              infrastructure, even briefly.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              photoresizer works differently. By running entirely in your
              browser using WebAssembly, we eliminate that risk entirely. No
              image data leaves your device at any point. This makes us the
              preferred choice for HR professionals processing ID photos, legal
              teams working with contract documents, and medical staff handling
              patient images.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The local-first approach also means there is zero latency waiting
              for a server response. Your edits are instant because the work
              happens on your own CPU and GPU.
            </p>
          </div>

          {/* ── FAQ ── */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {homeFaqSchema.mainEntity.map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-5 text-left gap-4"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </span>
                    <span
                      className={`flex-shrink-0 text-blue-600 dark:text-blue-400 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      ＋
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.acceptedAnswer.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100">
              Ready to Edit Your Photos?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              No account. No downloads. Start immediately — it&apos;s free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveTab("editor");
                  setHasUploadedImage(false);
                }}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-sky-600 rounded-xl shadow-lg shadow-blue-500/30 hover:from-blue-500 hover:to-sky-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                Open Photo Editor →
              </button>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Browse All 40+ Tools
              </Link>
            </div>
          </div>

          {/* ── Internal links: BG Removal ── */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">
              Background Removal Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["/remove-background", "Remove Background"],
                ["/free-background-remover", "Free Background Remover"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Internal links: Passport ── */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">
              Passport &amp; Visa Photo Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["/passport-photo-maker", "Passport Photo Maker"],
                ["/passport-size-photo-maker", "Passport Size Photo Maker"],
                ["/us-passport-photo-maker", "US Passport Photo Maker"],
                ["/uk-passport-photo-maker", "UK Passport Photo Maker"],
                ["/india-passport-photo-maker", "India Passport Photo Maker"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Internal links: Image Tools ── */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 pb-12">
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">
              Image Resizing &amp; Conversion Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["/photo-resizer", "Photo Resizer"],
                ["/compress-image", "Compress Image"],
                ["/jpeg-to-jpg", "JPEG to JPG"],
                ["/jpg-to-png", "JPG to PNG"],
                ["/reduce-photo-size-50kb", "Reduce Photo Size 50KB"],
                ["/resize-photo-20kb", "Resize Photo 20KB"],
                ["/ssc-photo-resizer", "SSC Photo Resizer"],
                ["/upsc-photo-size", "UPSC Photo Size"],
                ["/signature-resize-ibps", "IBPS Signature Resize"],
                ["/canvas-photo-collage-maker", "Canvas Photo Collage Maker"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

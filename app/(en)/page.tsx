import React from "react";
import Link from "next/link";
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
                <details
                  key={i}
                  className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="w-full flex justify-between items-center p-5 cursor-pointer list-none gap-4">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </span>
                    <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 transition-transform duration-200 group-open:rotate-45">
                      ＋
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.acceptedAnswer.text}
                  </div>
                </details>
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
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-sky-600 rounded-xl shadow-lg shadow-blue-500/30 hover:from-blue-500 hover:to-sky-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                Open Photo Editor →
              </a>
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

          {/* ── International Passport Tools ── */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 pb-12">
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">
              International Passport & Visa Photo Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["https://www.pixpassport.com", "PixPassport AI Photo Maker"],
                ["https://www.pixpassport.com/germany-passport-photo-editor", "Germany Passport Photo Editor"],
                ["https://www.pixpassport.com/china-visa-photo-editor", "China Visa Photo Editor"],
                ["https://www.pixpassport.com/de/biometrisches-passbild", "Biometrisches Passbild (Germany)"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

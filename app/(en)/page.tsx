import React from "react";
import Link from "next/link";
import HeroUploader from "./components/HeroUploader";
import { Metadata } from "next";
import {
  ShieldCheck,
  Sliders,
  Maximize,
  Sparkles,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileSignature,
  Calendar,
  Award,
} from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/`,
    languages: {
      en: `${baseUrl}/`,
      de: `${baseUrl}/de`,
      fr: `${baseUrl}/fr`,
      es: `${baseUrl}/es`,
      pt: `${baseUrl}/pt`,
      'x-default': `${baseUrl}/`,
    },
  },
  openGraph: {
    locale: 'en_US',
  },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I resize a photo and signature for government exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your photo or signature image into our free editor. Select the exam preset (such as SSC, UPSC, IBPS, or RRB) or enter the required width and height in pixels and adjust the target file size (e.g., 20KB or 50KB). The tool automatically resizes and compresses your file to meet official portal guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "What are the standard photo and signature size requirements for SSC exams in 2026–2027?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For SSC exams (CGL, CHSL, MTS, CPO, GD, JE), the photograph must be in JPEG/JPG format between 20 KB and 50 KB with dimensions of 200×230 pixels (approx. 3.5 cm width × 4.5 cm height) on a plain white or light background. The signature must be between 10 KB and 20 KB with dimensions of 140×60 pixels.",
      },
    },
    {
      "@type": "Question",
      name: "What are the photo and signature upload rules for UPSC CSE and NDA/CDS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For UPSC One Time Registration (OTR) and exams like CSE, CDS, NDA, and CAPF, the photograph must be in JPG format between 20 KB and 300 KB with minimum dimensions of 350×350 pixels (or 300×400 pixels). The signature must also be in JPG format between 20 KB and 300 KB with minimum dimensions of 350×350 pixels.",
      },
    },
    {
      "@type": "Question",
      name: "How can I reduce my photo size to exactly 20KB or 50KB without losing clarity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our intelligent compression algorithm uses WebAssembly to balance resolution and JPEG quality. It reduces file size to below the specified 20 KB or 50 KB threshold while keeping facial features, signatures, and stamps sharp and legible.",
      },
    },
    {
      "@type": "Question",
      name: "How do I resize handwritten declarations and left thumb impressions for IBPS and SBI banking exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For IBPS and SBI exams, the handwritten declaration must be 200×50 pixels (between 20 KB and 50 KB) and the left thumb impression must be 200×200 pixels (between 20 KB and 50 KB). You can use our specialized IBPS declaration and thumb impression presets to prepare them in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add Name and Date of Photo (DOP) on my exam photograph?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Switch to the 'Text' tab in our editor to add your candidate name and the date of the photograph taken at the bottom of the portrait, as required by SSC, State PSC, and military recruitment notifications.",
      },
    },
    {
      "@type": "Question",
      name: "Why do government exam application portals reject uploaded photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common rejection reasons are: (1) file size exceeding maximum limits (e.g., 50.1 KB for a 50 KB limit), (2) incorrect aspect ratio causing image distortion, (3) dark or patterned background, (4) blurry or inverted signature, and (5) wrong file format (.png or .jpeg when only .jpg is allowed). Our tool ensures all these parameters are strictly compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Are my confidential documents and admit card photos safe and private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100%. All image cropping, resizing, background removal, and compression happen entirely inside your local web browser. Your photos, signatures, and ID cards are never uploaded to any remote server or stored in any database.",
      },
    },
    {
      "@type": "Question",
      name: "Is this exam photo resizer tool completely free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our exam photo and signature resizer is 100% free with no registration, no watermarks, and no limits on the number of photos or signatures you can process.",
      },
    },
  ],
};

const EXAM_CATEGORIES = [
  {
    title: "SSC Examinations",
    icon: "🏛️",
    badge: "Most Popular",
    desc: "CGL, CHSL, MTS, GD Constable, CPO, JE & Stenographer exams.",
    specs: "Photo: 20–50 KB (200×230 px) • Sign: 10–20 KB (140×60 px)",
    links: [
      { name: "SSC Photo Resizer", href: "/ssc-photo-resizer" },
      { name: "SSC 2027 Guidelines", href: "/ssc-photo-resizer-2027" },
    ],
  },
  {
    title: "UPSC & Civil Services",
    icon: "⚖️",
    badge: "Official OTR",
    desc: "CSE Prelims/Mains, NDA, CDS, CAPF, CMS, IES & OTR portal.",
    specs: "Photo: 20–300 KB (350×350 px min) • Sign: 20–300 KB",
    links: [
      { name: "UPSC Photo & Sign Resizer", href: "/upsc-photo-size" },
    ],
  },
  {
    title: "Banking & Insurance",
    icon: "🏦",
    badge: "IBPS / SBI",
    desc: "IBPS PO, Clerk, SO, RRB, SBI PO/Clerk, RBI Grade B & NICL AO.",
    specs: "Photo: 20–50 KB • Sign: 10–20 KB • Thumb & Declaration: 20–50 KB",
    links: [
      { name: "IBPS Signature Resize", href: "/signature-resize-ibps" },
      { name: "IBPS Declaration Resizer", href: "/ibps-handwritten-declaration-resizer" },
      { name: "Left Thumb Impression", href: "/resize-left-thumb-impression-ibps" },
    ],
  },
  {
    title: "Railways Recruitment (RRB)",
    icon: "🚆",
    badge: "RRB NTPC & ALP",
    desc: "RRB ALP, Technician, NTPC, Group D & RPF Constable/SI.",
    specs: "Photo: 30–70 KB (35×45 mm) • Sign: 30–70 KB (JPG)",
    links: [
      { name: "RRB ALP Photo Resizer", href: "/rrb-alp-photo-resizer" },
      { name: "RRB Technician Resizer", href: "/rrb-technician-exam-photo-resizer" },
    ],
  },
  {
    title: "Teaching & Entrance Exams",
    icon: "🎓",
    badge: "NTA / CBSE",
    desc: "CTET, CSIR NET, UGC NET, NEET UG, JEE Main, CUET & GATE.",
    specs: "Photo: 10–200 KB • Signature: 4–30 KB • White Background",
    links: [
      { name: "CTET Photo Resizer", href: "/ctet-photo-resizer" },
      { name: "CSIR NET Signature Resizer", href: "/csir-net-signature-resizer" },
    ],
  },
  {
    title: "Police & Defence Recruitment",
    icon: "👮",
    badge: "Army & Police",
    desc: "Indian Army Agniveer, AFCAT, Delhi Police, Karnataka Police & CAPF.",
    specs: "Photo: 20–50 KB • Sign: 10–20 KB • Clear Headshot",
    links: [
      { name: "Army Agniveer Resizer", href: "/army-agniveer-photo-resizer" },
      { name: "AFCAT Photo Resizer", href: "/afcat-photo-resizer" },
      { name: "Karnataka Police Resizer", href: "/karnataka-police-photo-resizer" },
    ],
  },
  {
    title: "State PSC & Subordinate Boards",
    icon: "📄",
    badge: "State Exams",
    desc: "UKSSSC, UPPSC, BPSC, MPSC, TNPSC, APPSC, RPSC & HSSC.",
    specs: "Photo: 20–50 KB (200×230 px) • Sign: 10–20 KB",
    links: [
      { name: "UKSSSC Photo Resizer", href: "/uksssc-photo-resizer" },
    ],
  },
  {
    title: "Govt ID & License Portals",
    icon: "🪪",
    badge: "Sarathi & NVSP",
    desc: "Voter ID NVSP portal, Driving License Sarathi Parivahan & Passport Size.",
    specs: "Photo: Under 50 KB • Correct Aspect Ratio & Dimensions",
    links: [
      { name: "Voter ID Photo Size Reducer", href: "/voter-id-photo-size-reducer" },
      { name: "Driving License Sarathi Resizer", href: "/resize-photo-driving-license-sarathi" },
      { name: "Passport Size Photo Maker", href: "/passport-size-photo-maker" },
    ],
  },
];

const EXAM_SPECIFICATIONS_TABLE = [
  {
    exam: "SSC (CGL / CHSL / MTS / GD / CPO)",
    photoSize: "20 KB – 50 KB",
    photoDim: "100×120 px / 200×230 px (3.5 × 4.5 cm)",
    signSize: "10 KB – 20 KB",
    signDim: "140×60 px",
    bg: "White / Light Plain",
    format: "JPG / JPEG",
    actionLink: "/ssc-photo-resizer",
  },
  {
    exam: "UPSC (CSE / NDA / CDS / CAPF / OTR)",
    photoSize: "20 KB – 300 KB",
    photoDim: "350×350 px (min) to 1000×1000 px",
    signSize: "20 KB – 300 KB",
    signDim: "350×350 px (min) to 1000×1000 px",
    bg: "White / Light",
    format: "JPG / JPEG",
    actionLink: "/upsc-photo-size",
  },
  {
    exam: "IBPS (PO / Clerk / SO / RRB)",
    photoSize: "20 KB – 50 KB",
    photoDim: "200×230 px (4.5 × 3.5 cm)",
    signSize: "10 KB – 20 KB",
    signDim: "140×60 px",
    bg: "White",
    format: "JPG / JPEG",
    actionLink: "/signature-resize-ibps",
  },
  {
    exam: "Railway RRB (ALP / Technician / NTPC)",
    photoSize: "30 KB – 70 KB",
    photoDim: "35 × 45 mm (300 DPI)",
    signSize: "30 KB – 70 KB",
    signDim: "50 × 20 mm",
    bg: "White / Off-White",
    format: "JPG / JPEG",
    actionLink: "/rrb-alp-photo-resizer",
  },
  {
    exam: "CTET (CBSE Teacher Eligibility Test)",
    photoSize: "10 KB – 100 KB",
    photoDim: "3.5 × 4.5 cm (width × height)",
    signSize: "4 KB – 30 KB",
    signDim: "3.5 × 1.5 cm",
    bg: "White",
    format: "JPG / JPEG",
    actionLink: "/ctet-photo-resizer",
  },
  {
    exam: "NTA NEET UG / JEE Main",
    photoSize: "10 KB – 200 KB",
    photoDim: "Passport & Postcard (4×6 in)",
    signSize: "4 KB – 30 KB",
    signDim: "140×60 px (Black ink)",
    bg: "White (80% Face)",
    format: "JPG / JPEG",
    actionLink: "/reduce-photo-size-50kb",
  },
  {
    exam: "Indian Army (Agniveer Recruitment)",
    photoSize: "20 KB – 50 KB",
    photoDim: "200×230 px (White background)",
    signSize: "10 KB – 20 KB",
    signDim: "140×60 px",
    bg: "White",
    format: "JPG / JPEG",
    actionLink: "/army-agniveer-photo-resizer",
  },
  {
    exam: "UKSSSC / State PSC Forms",
    photoSize: "20 KB – 50 KB",
    photoDim: "200×230 px",
    signSize: "10 KB – 20 KB",
    signDim: "140×60 px",
    bg: "White / Light",
    format: "JPG / JPEG",
    actionLink: "/uksssc-photo-resizer",
  },
];

const EXAM_FEATURES = [
  {
    icon: <Sliders className="text-blue-600 dark:text-blue-400" size={24} />,
    title: "Exact KB Target Compression",
    desc: "Compress images directly to under 20 KB, 50 KB, 100 KB, or 300 KB limits. Our lossless compression ensures crisp clarity without fuzzy text or blurred face details.",
  },
  {
    icon: <Maximize className="text-indigo-600 dark:text-indigo-400" size={24} />,
    title: "Official Aspect Ratio & Pixel Lock",
    desc: "Choose from pre-calibrated exam ratios (3.5×4.5 cm, 200×230 px, 140×60 px, 350×350 px) or enter custom width and height in pixels with 100% precision.",
  },
  {
    icon: <FileSignature className="text-emerald-600 dark:text-emerald-400" size={24} />,
    title: "Signature & Thumb Enhancer",
    desc: "Enhance faint ink signatures, scanned blue/black ballpoint signatures, and left thumb impressions with high-contrast optimization for clear verification.",
  },
  {
    icon: <Calendar className="text-amber-600 dark:text-amber-400" size={24} />,
    title: "Name & Date on Photo (DOP)",
    desc: "Easily overlay the candidate's name and date of photo capture at the bottom of your passport photo to comply with mandatory SSC and State PSC notification rules.",
  },
  {
    icon: <Sparkles className="text-sky-600 dark:text-sky-400" size={24} />,
    title: "1-Click White Background",
    desc: "Remove cluttered or uneven backgrounds and replace them with a clean, compliant plain white background using our instant on-device AI background remover.",
  },
  {
    icon: <ShieldCheck className="text-violet-600 dark:text-violet-400" size={24} />,
    title: "100% Client-Side Privacy",
    desc: "All image editing runs inside your browser using WebAssembly. No sensitive exam documents, ID cards, or facial photos are ever uploaded to any cloud server.",
  },
];

const COMPARISON = [
  {
    feature: "100% Free & Unlimited",
    us: true,
    photoshop: false,
    canva: "Partial",
    removebg: "Partial",
  },
  {
    feature: "Zero Server Uploads (100% Private)",
    us: true,
    photoshop: true,
    canva: false,
    removebg: false,
  },
  {
    feature: "Exact KB Target Compression (20KB / 50KB)",
    us: true,
    photoshop: "Manual",
    canva: false,
    removebg: false,
  },
  {
    feature: "Pre-loaded Govt Exam Presets",
    us: true,
    photoshop: false,
    canva: false,
    removebg: false,
  },
  {
    feature: "Signature & Thumb Impression Mode",
    us: true,
    photoshop: "Manual",
    canva: false,
    removebg: false,
  },
  {
    feature: "AI White Background Replacement",
    us: true,
    photoshop: true,
    canva: "Paid",
    removebg: true,
  },
  {
    feature: "No Sign-Up or App Install Required",
    us: true,
    photoshop: false,
    canva: false,
    removebg: false,
  },
  {
    feature: "Works on Mobile & Desktop",
    us: true,
    photoshop: false,
    canva: true,
    removebg: true,
  },
];

function CellIcon({ val }: { val: boolean | string }) {
  if (val === true)
    return <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">✓</span>;
  if (val === false)
    return <span className="text-red-400 font-bold text-lg">✗</span>;
  return <span className="text-amber-500 text-xs font-semibold">{val}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-root font-sans transition-colors duration-300">
      <script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqSchema),
        }}
      />
      <main className="max-w-[1400px] mx-auto">
        <HeroUploader />

        {/* ══════════════════════════════════════════
            EXAM CATEGORY CARDS SECTION
        ══════════════════════════════════════════ */}
        <section className="mt-14 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Award size={14} /> Exam Presets &amp; Direct Resizers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Resize Photos &amp; Signatures for Every Major Examination
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Select your examination category below to view specific guidelines and access pre-configured dimensions and file size limits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXAM_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {cat.desc}
                  </p>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 mb-4">
                    <p className="text-[11px] font-medium text-blue-700 dark:text-blue-300">
                      {cat.specs}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  {cat.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-1 transition-colors group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            OFFICIAL EXAM SPECIFICATIONS TABLE
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
                Official Guidelines 2026–2027
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Government Exam Photo &amp; Signature Specification Chart
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Official upload requirements published across Staff Selection Commission, UPSC, Banking, Railway, and State Recruitment boards.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3.5 sm:p-4">Examination / Agency</th>
                    <th className="p-3.5 sm:p-4">Photo File Size</th>
                    <th className="p-3.5 sm:p-4">Photo Dimensions</th>
                    <th className="p-3.5 sm:p-4">Signature Specs</th>
                    <th className="p-3.5 sm:p-4">Background</th>
                    <th className="p-3.5 sm:p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                  {EXAM_SPECIFICATIONS_TABLE.map((row, idx) => (
                    <tr
                      key={row.exam}
                      className={idx % 2 === 0 ? "bg-white dark:bg-slate-800/40" : "bg-slate-50/50 dark:bg-slate-800/80"}
                    >
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white">
                        {row.exam}
                      </td>
                      <td className="p-3.5 sm:p-4 text-blue-700 dark:text-blue-300 font-bold">
                        {row.photoSize}
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300">
                        {row.photoDim}
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300">
                        <span className="font-semibold">{row.signSize}</span>
                        <span className="block text-[11px] text-slate-500">{row.signDim}</span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-600 dark:text-slate-400">
                        {row.bg}
                      </td>
                      <td className="p-3.5 sm:p-4 text-center">
                        <Link
                          href={row.actionLink}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 rounded-lg text-xs font-bold transition-all"
                        >
                          Resize
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-300">
              <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Important Note:</strong> Always check the specific official exam notification before final submission, as individual recruitment cycles may introduce minor specification updates.
              </span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FEATURES BUILT FOR EXAM ASPIRANTS
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
              Why Candidates Trust photoresizer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Features Engineered for Exam Portal Compliance
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Avoid application rejections with tools specifically designed to meet strict government form upload standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAM_FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-100 dark:border-slate-600 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            HOW TO USE IN 3 STEPS
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                How to Resize Your Exam Photo in 3 Simple Steps
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Fast, automated, and error-free preparation for all online application forms.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Upload Photo or Signature",
                  body: "Drag and drop your JPG, PNG, or WEBP image. Works with phone camera photos, scanned signatures, and thumb impressions.",
                },
                {
                  step: "02",
                  title: "Select Dimensions & KB Limit",
                  body: "Choose an exam preset (SSC, UPSC, IBPS) or manually set the required pixel dimensions and target file size (e.g. 20KB or 50KB).",
                },
                {
                  step: "03",
                  title: "Download Form-Ready JPG",
                  body: "Download your perfectly sized, high-clarity image. Upload directly to the exam portal with zero risk of form rejection.",
                },
              ].map(({ step, title, body }) => (
                <div
                  key={step}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden shadow-sm"
                >
                  <span className="text-4xl font-black text-blue-100 dark:text-slate-700 select-none leading-none mb-3 block">
                    {step}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            COMMON REJECTION REASONS GUIDE
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2 block">
                Avoid Application Disqualification
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
                Why Do Exam Portals Reject Uploaded Photos &amp; Signatures?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Every year, thousands of candidates have their candidature cancelled or admit cards withheld due to improper photograph or signature uploads. Here are the top errors and how our tool eliminates them:
              </p>

              <ul className="space-y-3.5">
                {[
                  {
                    title: "File Size Slightly Over the Limit",
                    desc: "A 50.2 KB photo will be immediately rejected by an SSC or IBPS form requiring ≤ 50 KB. Our slider accurately caps file sizes below the ceiling.",
                  },
                  {
                    title: "Blurred or Faint Signatures",
                    desc: "Low-light smartphone pictures of signatures are often unreadable. Our tool maintains sharpness during compression.",
                  },
                  {
                    title: "Distorted Aspect Ratio",
                    desc: "Stretching or squishing images to match pixel limits distorts facial geometry. Our aspect-ratio lock preserves natural proportions.",
                  },
                  {
                    title: "Wrong File Format (.png or .jpeg)",
                    desc: "Many portals strictly require .jpg extension. We export standardized JPG files recognized by all government servers.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/60">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                Quick Size Reducers:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/reduce-photo-size-50kb"
                  className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-center transition-all group"
                >
                  <span className="text-2xl font-black text-blue-600 dark:text-blue-400 block mb-1">50 KB</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Reduce to 50KB &rarr;</span>
                </Link>
                <Link
                  href="/resize-photo-20kb"
                  className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-center transition-all group"
                >
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 block mb-1">20 KB</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Resize to 20KB &rarr;</span>
                </Link>
                <Link
                  href="/signature-resize-ibps"
                  className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-center transition-all group"
                >
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block mb-1">Sign</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">IBPS Signature &rarr;</span>
                </Link>
                <Link
                  href="/passport-size-photo-maker"
                  className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-center transition-all group"
                >
                  <span className="text-2xl font-black text-amber-600 dark:text-amber-400 block mb-1">Passport</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Passport Maker &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            COMPARISON TABLE
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              photoresizer vs. Other Tools
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Why candidates prefer our client-side editor over complicated desktop software or ad-heavy uploaders.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900/80">
                  <th className="text-left p-4 font-bold text-slate-700 dark:text-slate-300">
                    Feature
                  </th>
                  <th className="p-4 font-bold text-blue-700 dark:text-blue-400 text-center">
                    photoresizer
                  </th>
                  <th className="p-4 font-bold text-slate-600 dark:text-slate-400 text-center">
                    Photoshop
                  </th>
                  <th className="p-4 font-bold text-slate-600 dark:text-slate-400 text-center">
                    Canva
                  </th>
                  <th className="p-4 font-bold text-slate-600 dark:text-slate-400 text-center">
                    remove.bg
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {COMPARISON.map(({ feature, us, photoshop, canva, removebg }) => (
                  <tr key={feature} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-medium text-slate-700 dark:text-slate-300">
                      {feature}
                    </td>
                    <td className="p-4 text-center bg-blue-50/30 dark:bg-blue-950/20">
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
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PRIVACY ASSURANCE
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 dark:from-slate-800/90 dark:to-slate-900 rounded-3xl p-8 sm:p-10 border border-blue-100 dark:border-slate-700">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md flex-shrink-0">
                <ShieldCheck size={36} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Zero Data Upload • 100% On-Device Privacy Guaranteed
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Government exam candidates frequently handle confidential personal identifiers, Aadhaar numbers, handwritten signatures, and thumb impressions. <strong>photoresizer never transmits your images to any remote server</strong>. All image decoding, cropping, WebAssembly compression, and background manipulation happen entirely on your computer or smartphone GPU/CPU.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ SECTION
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions (Exam Photo Guidelines)
            </h2>
          </div>

          <div className="space-y-3">
            {homeFaqSchema.mainEntity.map((item, i) => (
              <details
                key={i}
                className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="w-full flex justify-between items-center p-5 cursor-pointer list-none gap-4">
                  <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    {item.name}
                  </span>
                  <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 transition-transform duration-200 group-open:rotate-45 font-bold text-lg">
                    ＋
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3">
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            BOTTOM CTA
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-blue-500/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
              Ready to Resize Your Exam Photo?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              No account. No software installation. 100% form-compliant results in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-bold text-blue-900 bg-white rounded-xl shadow-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Resizing Now ↑
              </a>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-bold text-white bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
              >
                Browse All 40+ Tools →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ORGANIZED INTERNAL LINKS
        ══════════════════════════════════════════ */}
        <section className="mt-20 max-w-6xl mx-auto px-4 md:px-6 pt-10 border-t border-slate-200 dark:border-slate-800 space-y-10 pb-16">
          {/* Popular Exam Tools */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>📋</span> Popular Exam Photo Resizers
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["/ssc-photo-resizer", "SSC Photo Resizer"],
                ["/ssc-photo-resizer-2027", "SSC Photo Resizer 2027"],
                ["/upsc-photo-size", "UPSC Photo Size"],
                ["/ctet-photo-resizer", "CTET Photo Resizer"],
                ["/rrb-alp-photo-resizer", "RRB ALP Photo Resizer"],
                ["/rrb-technician-exam-photo-resizer", "RRB Technician Resizer"],
                ["/afcat-photo-resizer", "AFCAT Photo Resizer"],
                ["/army-agniveer-photo-resizer", "Army Agniveer Resizer"],
                ["/uksssc-photo-resizer", "UKSSSC Photo Resizer"],
                ["/karnataka-police-photo-resizer", "Karnataka Police Resizer"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/60"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Signature, Declaration & Thumb Impression */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>✍️</span> Signature &amp; Declaration Resizers
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["/signature-resize-ibps", "IBPS Signature Resize"],
                ["/ibps-handwritten-declaration-resizer", "IBPS Declaration Resizer"],
                ["/resize-left-thumb-impression-ibps", "IBPS Thumb Impression Resizer"],
                ["/csir-net-signature-resizer", "CSIR NET Signature Resizer"],
                ["/resize-photo-20kb", "Resize Signature to 20KB"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/60"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Size Specific & Compression */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>📦</span> Size Specific &amp; Image Compression
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["/reduce-photo-size-50kb", "Reduce Photo Size 50KB"],
                ["/resize-photo-20kb", "Resize Photo 20KB"],
                ["/compress-image", "Compress Image"],
                ["/jpeg-to-jpg", "JPEG to JPG Converter"],
                ["/jpg-to-png", "JPG to PNG Converter"],
                ["/photo-resizer", "Online Photo Resizer"],
                ["/voter-id-photo-size-reducer", "Voter ID Photo Reducer"],
                ["/resize-photo-driving-license-sarathi", "Driving License Sarathi Resizer"],
                ["/canvas-photo-collage-maker", "Canvas Collage Maker"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/60"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Passport & Visa Photos */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>🪪</span> Passport &amp; Visa Photo Makers
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["/passport-photo-maker", "Passport Photo Maker"],
                ["/passport-size-photo-maker", "Passport Size Photo Maker"],
                ["/india-passport-photo-maker", "India Passport Photo Maker"],
                ["/us-passport-photo-maker", "US Passport Photo Maker"],
                ["/uk-passport-photo-maker", "UK Passport Photo Maker"],
                ["/remove-background", "Remove Background"],
                ["/free-background-remover", "Free Background Remover"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/60"
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

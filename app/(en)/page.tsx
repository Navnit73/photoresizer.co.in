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
  Image as ImageIcon,
  Minimize2,
  BadgeCheck,
  RefreshCw,
  Lock,
  Smartphone,
  Gift,
} from "lucide-react";

import { ROOT_HREFLANGS, BASE_URL } from "@/lib/seo";

const LAST_REVIEWED = "October 2026";
const LAST_REVIEWED_ISO = "2026-10-04";

/* ───────────────────────── SEO ───────────────────────── */

export const metadata: Metadata = {
  title: "Photo & Signature Resizer for SSC, RRB, IBPS Exams | PhotoResizer",
  description:
    "Resize photos and signatures for SSC CGL, CHSL, MTS, GD, RRB NTPC, Group D, SBI & IBPS Clerk, UP Police, CTET and more. Free, private, exact KB limits.",
  alternates: {
    canonical: `${BASE_URL}/`,
    languages: ROOT_HREFLANGS,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "PhotoResizer",
    title: "PhotoResizer — Photo & Signature Resizer for Indian Exams",
    description:
      "Prepare your exam photo and signature in seconds. Exact KB and pixel presets for SSC, RRB, banking, police and teaching exams.",
    url: `${BASE_URL}/`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PhotoResizer Indian Exam Photo and Signature Resizer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoResizer — Photo & Signature Resizer for Indian Exams",
    description:
      "Prepare your exam photo and signature in seconds. Exact KB and pixel presets for SSC, RRB, banking, police and teaching exams.",
    images: ["/og-image.png"],
  },
};

/* ───────────────────────── DATA ───────────────────────── */

const FAQS = [
  {
    q: "How do I resize my photo and signature for an exam form?",
    a: "Upload your image, pick your exam preset, and download the JPG. The tool sets the pixel size and compresses the file below the KB limit. You can also enter a custom width, height, and target size.",
  },
  {
    q: "What is the photo size for SSC CGL, CHSL, MTS, and GD Constable?",
    a: "SSC asks for a JPG photo between 20 KB and 50 KB at 200×230 pixels on a plain light background. The signature must stay between 10 KB and 20 KB at 140×60 pixels. Always confirm the numbers in your own notification.",
  },
  {
    q: "What are the photo rules for RRB NTPC and RRB Group D?",
    a: "RRB notices usually set the photo between 30 KB and 70 KB at 35×45 mm, with a plain white or off-white background. The signature follows a similar range. Load the RRB preset, then compare it with your CEN notice.",
  },
  {
    q: "What are the SBI Clerk, IBPS Clerk, and IBPS RRB photo limits?",
    a: "Banking exams commonly ask for a 20–50 KB photo at 200×230 pixels and a 10–20 KB signature at 140×60 pixels. Some forms also need a left thumb impression and a handwritten declaration. We offer a tool for each.",
  },
  {
    q: "Which size do UP Police, Bihar Police, UPSSSC PET, REET, and UPPSC need?",
    a: "Each board sets its own limits, and they change between cycles. Open your official notice, copy the KB and pixel values, and enter them in the custom fields. The tool then matches them exactly.",
  },
  {
    q: "How can I reduce a photo to under 50 KB without losing clarity?",
    a: "Our compressor lowers the pixel size and JPEG quality in small steps. It stops as soon as the file fits under your limit, so your face and signature stay sharp.",
  },
  {
    q: "Are my photos and signatures safe?",
    a: "Yes. Cropping, resizing, background clean-up, and compression all run inside your browser. Your files never reach our servers, and we store nothing.",
  },
  {
    q: "Is PhotoResizer free to use?",
    a: "Yes. PhotoResizer is free. It needs no registration, adds no watermark, and sets no limit on how many photos or signatures you process.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "PhotoResizer",
      url: `${BASE_URL}/`,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any (web browser)",
      inLanguage: "en-IN",
      description:
        "Free online photo resizer, signature resizer, and photo size reducer for Indian government exam forms.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      dateModified: LAST_REVIEWED_ISO,
      publisher: { "@type": "Organization", name: "PhotoResizer", url: BASE_URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const TRUST = [
  { icon: Gift, label: "Free, no sign-up" },
  { icon: Lock, label: "Files stay on your device" },
  { icon: Sliders, label: "Exact KB targets" },
  { icon: Smartphone, label: "Works on any phone" },
];

const TOOLS = [
  {
    icon: ImageIcon,
    title: "Photo Resizer",
    desc: "Set exact pixels and aspect ratio for your passport-style exam photo. Add name and date strips when the notice asks for them.",
    href: "/photo-resizer",
    cta: "Resize photo",
  },
  {
    icon: FileSignature,
    title: "Signature Resizer",
    desc: "Turn a phone picture of your signature into a crisp, high-contrast JPG. Thumb impressions and declarations work too.",
    href: "/signature-resize-ibps",
    cta: "Resize signature",
  },
  {
    icon: Minimize2,
    title: "Photo Size Reducer",
    desc: "Shrink any image to under 20 KB, 50 KB, 100 KB, or 300 KB. The tool keeps faces and handwriting sharp.",
    href: "/compress-image",
    cta: "Reduce size",
  },
];

const EXAM_CATEGORIES = [
  {
    title: "SSC Exams",
    icon: "🏛️",
    badge: "20–50 KB",
    desc: "SSC CGL, CHSL, MTS, GD Constable, CPO, and JE.",
    specs: "Photo 20–50 KB, 200×230 px • Sign 10–20 KB, 140×60 px",
    links: [
      { name: "SSC Photo Resizer", href: "/ssc-photo-resizer" },
      { name: "SSC GD Constable", href: "/ssc-gd-constable-photo-resizer" },
      { name: "SSC MTS", href: "/ssc-mts-photo-resizer" },
      { name: "SSC CHSL", href: "/ssc-chsl-photo-resizer" },
      { name: "SSC CGL", href: "/ssc-cgl-photo-resizer" },
    ],
  },
  {
    title: "Railway (RRB)",
    icon: "🚆",
    badge: "30–70 KB",
    desc: "RRB NTPC, Group D, ALP, Technician, and RPF.",
    specs: "Photo 30–70 KB, 35×45 mm • Sign 30–70 KB",
    links: [
      { name: "RRB NTPC", href: "/rrb-ntpc-photo-resizer" },
      { name: "RRB Group D", href: "/rrb-group-d-photo-resizer" },
      { name: "RRB ALP", href: "/rrb-alp-photo-resizer" },
      { name: "RRB Technician", href: "/rrb-technician-exam-photo-resizer" },
    ],
  },
  {
    title: "Banking",
    icon: "🏦",
    badge: "20–50 KB",
    desc: "SBI Clerk, IBPS Clerk, IBPS RRB, and IBPS PO.",
    specs: "Photo 20–50 KB • Sign 10–20 KB • Thumb and declaration",
    links: [
      { name: "SBI Clerk", href: "/sbi-clerk-photo-resizer" },
      { name: "IBPS Clerk", href: "/ibps-clerk-photo-resizer" },
      { name: "IBPS PO", href: "/ibps-po-photo-resizer" },
      { name: "IBPS Signature", href: "/signature-resize-ibps" },
      { name: "Left Thumb Impression", href: "/resize-left-thumb-impression-ibps" },
    ],
  },
  {
    title: "UP Exams",
    icon: "📋",
    badge: "UP Police",
    desc: "UP Police Constable, UPSSSC PET, and UPPSC / PCS.",
    specs: "JPG photo and signature • Limits follow your notice",
    links: [
      { name: "UP Police Constable", href: "/up-police-photo-resizer" },
      { name: "UPSSSC PET", href: "/upsssc-pet-photo-resizer" },
      { name: "UPPSC / PCS", href: "/uppsc-pcs-photo-resizer" },
    ],
  },
  {
    title: "Bihar Police",
    icon: "👮",
    badge: "Constable",
    desc: "Bihar Police Constable, SI, and other CSBC posts.",
    specs: "JPG photo and signature • Limits follow your notice",
    links: [{ name: "Bihar Police", href: "/bihar-police-photo-resizer" }],
  },
  {
    title: "Teaching Exams",
    icon: "🎓",
    badge: "CTET / REET",
    desc: "CTET, REET, and CSIR NET applications.",
    specs: "Photo 10–100 KB • Sign 4–30 KB • Plain background",
    links: [
      { name: "CTET Photo Resizer", href: "/ctet-photo-resizer" },
      { name: "REET Photo Resizer", href: "/reet-photo-resizer" },
      { name: "CSIR NET Signature", href: "/csir-net-signature-resizer" },
    ],
  },
  {
    title: "UPSC",
    icon: "⚖️",
    badge: "20–300 KB",
    desc: "UPSC CSE, NDA, CDS, CAPF, and OTR.",
    specs: "Photo 20–300 KB, 350×350 px minimum • Sign 20–300 KB",
    links: [{ name: "UPSC Photo & Sign", href: "/upsc-photo-size" }],
  },
  {
    title: "Defence",
    icon: "🎖️",
    badge: "Army / Air Force",
    desc: "Army Agniveer and AFCAT.",
    specs: "Photo 20–50 KB • Sign 10–20 KB • Clear headshot",
    links: [
      { name: "Army Agniveer", href: "/army-agniveer-photo-resizer" },
      { name: "AFCAT", href: "/afcat-photo-resizer" },
    ],
  },
];

const SPEC_TABLE = [
  {
    exam: "SSC (CGL, CHSL, MTS, GD)",
    photoSize: "20–50 KB",
    photoDim: "200×230 px",
    signSize: "10–20 KB",
    signDim: "140×60 px",
    bg: "White / light",
    href: "/ssc-photo-resizer",
  },
  {
    exam: "RRB (NTPC, Group D, ALP)",
    photoSize: "30–70 KB",
    photoDim: "35×45 mm",
    signSize: "30–70 KB",
    signDim: "50×20 mm",
    bg: "White / off-white",
    href: "/rrb-ntpc-photo-resizer",
  },
  {
    exam: "SBI & IBPS (Clerk, RRB, PO)",
    photoSize: "20–50 KB",
    photoDim: "200×230 px",
    signSize: "10–20 KB",
    signDim: "140×60 px",
    bg: "White",
    href: "/signature-resize-ibps",
  },
  {
    exam: "UPSC (CSE, NDA, CDS, OTR)",
    photoSize: "20–300 KB",
    photoDim: "350×350 px min.",
    signSize: "20–300 KB",
    signDim: "350×350 px min.",
    bg: "White / light",
    href: "/upsc-photo-size",
  },
  {
    exam: "CTET",
    photoSize: "10–100 KB",
    photoDim: "3.5×4.5 cm",
    signSize: "4–30 KB",
    signDim: "3.5×1.5 cm",
    bg: "White",
    href: "/ctet-photo-resizer",
  },
];

const FEATURES = [
  {
    icon: Sliders,
    title: "Exact KB targets",
    desc: "Compress to 20, 50, 100, or 300 KB with no visible blur.",
  },
  {
    icon: Maximize,
    title: "Locked pixel sizes",
    desc: "Load official dimensions for SSC, RRB, banking, and UPSC in one tap.",
  },
  {
    icon: Sparkles,
    title: "Plain background in one click",
    desc: "Replace a cluttered backdrop with white. The AI runs on your device.",
  },
];

const REJECTIONS = [
  {
    title: "The file is slightly too large",
    desc: "A 50.2 KB photo fails a 50 KB limit. Our compressor always lands below your ceiling.",
  },
  {
    title: "The face looks stretched",
    desc: "Forcing a width distorts proportions. The aspect lock keeps your face natural.",
  },
  {
    title: "The signature looks faint",
    desc: "Phone photos wash out ink. We boost edge contrast before compressing.",
  },
  {
    title: "The format is wrong",
    desc: "Most portals accept only JPG. We export clean JPG files every time.",
  },
];

const EEAT = [
  {
    icon: BadgeCheck,
    title: "Specs checked against notices",
    desc: "Our editors compare every preset with the latest official recruitment notice.",
  },
  {
    icon: RefreshCw,
    title: "Updated each recruitment cycle",
    desc: "When a board changes its limits, we update the preset and the date below.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    desc: "Your images never leave your browser. We cannot see them, so we cannot leak them.",
  },
];

const POPULAR_LINKS: [string, string][] = [
  ["/photo-resizer", "Photo Resizer"],
  ["/signature-resize-ibps", "Signature Resizer"],
  ["/compress-image", "Photo Compressor"],
  ["/reduce-photo-size-50kb", "Reduce to 50 KB"],
  ["/resize-photo-20kb", "Resize to 20 KB"],
  ["/ssc-photo-resizer", "SSC Photo"],
  ["/rrb-ntpc-photo-resizer", "RRB NTPC Photo"],
  ["/sbi-clerk-photo-resizer", "SBI Clerk Photo"],
  ["/up-police-photo-resizer", "UP Police Photo"],
  ["/ctet-photo-resizer", "CTET Photo"],
  ["/free-background-remover", "Background Remover"],
];

/* ───────────────────────── SMALL HELPERS ───────────────────────── */

function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl mb-8 sm:mb-10 ${center ? "text-center mx-auto" : ""}`}>
      {eyebrow && (
        <span className="text-xs font-semibold text-[#16A34A] mb-1.5 block">{eyebrow}</span>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight">
        {title}
      </h2>
      {sub && <p className="mt-2 text-sm sm:text-base text-[#52525B]">{sub}</p>}
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#18181B]">
      <script
        id="home-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="w-full">
        {/* HERO / EDITOR */}
        <HeroUploader
          title="Photo & Signature Resizer for Indian Exam Forms"
          subtitle="Resize photos, signatures, and thumb impressions for SSC, RRB, IBPS, UPSC & state exams to exact KB limits."
          badgeText="Fast • Simple • 100% Private"
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Intro + trust strip */}
          <section className="mt-8 sm:mt-10" aria-label="Why use PhotoResizer">
          <p className="max-w-3xl mx-auto text-center text-sm sm:text-base text-[#52525B] leading-relaxed">
            PhotoResizer helps Indian aspirants prepare photos and signatures for SSC, RRB,
            banking, police, teaching, and state recruitment forms. Pick your exam, check the
            KB limit, and download a JPG that the portal accepts on the first try.
          </p>

          <ul className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {TRUST.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-3.5 py-3"
              >
                <Icon size={18} className="text-[#16A34A] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#15803D]">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Three core tools */}
        <section className="mt-14 sm:mt-16 pt-8 border-t border-[#E4E4E7]" id="tools">
          <SectionHeading
            title="Three tools for every exam form"
            sub="Start with the tool that matches your upload field."
          />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {TOOLS.map(({ icon: Icon, title, desc, href, cta }) => (
              <Link
                key={title}
                href={href}
                className="group bg-[#FFFFFF] rounded-xl p-6 border border-[#E4E4E7] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-[#BBF7D0] transition-colors flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#16A34A]" />
                </div>
                <h3 className="font-semibold text-base text-[#18181B] mb-2">{title}</h3>
                <p className="text-sm text-[#52525B] leading-relaxed flex-1">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16A34A] group-hover:text-[#15803D]">
                  {cta}
                  <ArrowRight
                    size={14}
                    className="transform group-hover:translate-x-0.5 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Exam finder */}
        <section className="mt-14 sm:mt-16" id="exams">
          <SectionHeading
            title="Find your exam"
            sub="Each page loads the pixel size and KB limit for that recruitment."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {EXAM_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-[#FFFFFF] rounded-xl p-5 border border-[#E4E4E7] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-[#BBF7D0] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      {cat.icon}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base text-[#18181B] mb-1.5">{cat.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-3">
                    {cat.desc}
                  </p>
                  <div className="p-2.5 rounded-xl bg-[#FAFAFA] border border-[#F4F4F5] mb-4">
                    <p className="text-[11px] font-medium text-[#15803D]">{cat.specs}</p>
                  </div>
                </div>
                <div className="space-y-0.5 pt-2 border-t border-[#F4F4F5]">
                  {cat.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-[#16A34A] hover:text-[#15803D] py-1.5 transition-colors group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight
                        size={13}
                        className="transform group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spec chart */}
        <section className="mt-14 sm:mt-16" id="size-chart">
          <div className="bg-[#FFFFFF] rounded-xl p-5 sm:p-8 border border-[#E4E4E7] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-semibold text-[#16A34A] mb-1.5 block">
                Official standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight">
                Photo and signature size chart
              </h2>
              <p className="mt-1.5 text-sm text-[#52525B]">
                Compare file sizes, dimensions, and backgrounds across major exams. Last
                reviewed {LAST_REVIEWED}.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#E4E4E7]">
              <table className="w-full min-w-[640px] text-left text-xs sm:text-sm">
                <caption className="sr-only">
                  Photo and signature size requirements for Indian recruitment exams
                </caption>
                <thead>
                  <tr className="bg-[#FAFAFA] text-[#18181B] font-semibold border-b border-[#E4E4E7]">
                    <th scope="col" className="p-3.5 sm:p-4">Exam</th>
                    <th scope="col" className="p-3.5 sm:p-4">Photo size</th>
                    <th scope="col" className="p-3.5 sm:p-4">Photo dimensions</th>
                    <th scope="col" className="p-3.5 sm:p-4">Signature</th>
                    <th scope="col" className="p-3.5 sm:p-4">Background</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F4F5]">
                  {SPEC_TABLE.map((row, idx) => (
                    <tr key={row.exam} className={idx % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#FAFAFA]/50"}>
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-[#18181B]">
                        {row.exam}
                      </th>
                      <td className="p-3.5 sm:p-4 text-[#15803D] font-semibold">{row.photoSize}</td>
                      <td className="p-3.5 sm:p-4 text-[#52525B]">{row.photoDim}</td>
                      <td className="p-3.5 sm:p-4 text-[#52525B]">
                        <span className="font-semibold text-[#18181B]">{row.signSize}</span>
                        <span className="block text-[11px] text-[#71717A]">{row.signDim}</span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-[#52525B]">{row.bg}</td>
                      <td className="p-3.5 sm:p-4 text-center">
                        <Link
                          href={row.href}
                          className="inline-flex items-center px-3 py-1.5 bg-[#F0FDF4] hover:bg-[#16A34A] text-[#15803D] hover:text-[#FFFFFF] rounded-xl text-xs font-semibold transition-colors"
                        >
                          Resize
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] flex items-start gap-2.5 text-xs text-[#52525B]">
              <AlertTriangle size={15} className="text-[#D97706] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> Boards change limits between cycles. Read your official
                notification before you submit.
              </span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-14 sm:mt-16">
          <SectionHeading
            title="Built to prevent rejected uploads"
            sub="Every feature serves one goal: a file that your portal accepts."
          />
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#FFFFFF] p-6 rounded-xl border border-[#E4E4E7] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#16A34A]" />
                </div>
                <h3 className="font-semibold text-base text-[#18181B] mb-2">{title}</h3>
                <p className="text-sm text-[#52525B] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mt-14 sm:mt-16" id="how-it-works">
          <div className="bg-[#FAFAFA] rounded-xl p-6 sm:p-10 border border-[#E4E4E7]">
            <SectionHeading title="Resize in three steps" sub="It takes under a minute." />
            <ol className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  step: "Step 1",
                  title: "Upload your image",
                  body: "Drop a JPG, PNG, or WEBP file. It works on phones, tablets, and computers.",
                },
                {
                  step: "Step 2",
                  title: "Choose your exam",
                  body: "Pick a preset, or enter your own pixel size and maximum KB.",
                },
                {
                  step: "Step 3",
                  title: "Download the JPG",
                  body: "Save the file and upload it straight to your application portal.",
                },
              ].map(({ step, title, body }) => (
                <li
                  key={step}
                  className="bg-[#FFFFFF] p-5 sm:p-6 rounded-xl border border-[#E4E4E7] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                >
                  <span className="text-xs font-bold text-[#16A34A] bg-[#F0FDF4] px-2 py-1 rounded-md border border-[#BBF7D0] mb-3 inline-block">
                    {step}
                  </span>
                  <h3 className="font-semibold text-base text-[#18181B] mb-2">{title}</h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Rejection reasons */}
        <section className="mt-14 sm:mt-16">
          <div className="grid md:grid-cols-2 gap-8 items-start bg-[#FFFFFF] rounded-xl p-6 sm:p-10 border border-[#E4E4E7] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div>
              <span className="text-xs font-semibold text-[#DC2626] mb-2 block">
                Avoid disqualification
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#18181B] mb-3 leading-tight">
                Why do portals reject exam photos?
              </h2>
              <p className="text-sm text-[#52525B] leading-relaxed mb-6">
                Candidates lose applications to small upload errors every year. These four
                mistakes cause most rejections, and PhotoResizer fixes each one.
              </p>
              <ul className="space-y-4">
                {REJECTIONS.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="text-[#16A34A] flex-shrink-0 mt-0.5" size={17} />
                    <div>
                      <h3 className="text-sm font-semibold text-[#18181B]">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#52525B]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FAFAFA] p-5 sm:p-8 rounded-xl border border-[#E4E4E7]">
              <h3 className="font-semibold text-base text-[#18181B] mb-4">Quick size targets</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { href: "/resize-photo-20kb", big: "20 KB", label: "Resize to 20 KB" },
                  { href: "/reduce-photo-size-50kb", big: "50 KB", label: "Reduce to 50 KB" },
                  { href: "/signature-resize-ibps", big: "Sign", label: "Signature Resizer" },
                  { href: "/compress-image", big: "Compress", label: "Photo Compressor" },
                ].map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4E4E7] hover:border-[#BBF7D0] hover:bg-[#F0FDF4] text-center transition-colors"
                  >
                    <span className="text-xl font-bold text-[#16A34A] block mb-1">{t.big}</span>
                    <span className="text-xs font-medium text-[#18181B]">{t.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="mt-14 sm:mt-16" id="trust">
          <SectionHeading
            eyebrow={`Last reviewed ${LAST_REVIEWED}`}
            title="Why aspirants trust our presets"
            sub="We build for Indian exam forms, and we verify what we publish."
          />
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {EEAT.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#F0FDF4] p-6 rounded-xl border border-[#BBF7D0]"
              >
                <Icon size={22} className="text-[#16A34A] mb-3" />
                <h3 className="font-semibold text-base text-[#18181B] mb-2">{title}</h3>
                <p className="text-sm text-[#52525B] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs sm:text-sm text-[#52525B]">
            Spot a changed limit? <Link href="/contact" className="font-semibold text-[#16A34A] hover:text-[#15803D]">Tell our team</Link>{" "}
            and we will update the preset. Read our{" "}
            <Link href="/about" className="font-semibold text-[#16A34A] hover:text-[#15803D]">editorial process</Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-semibold text-[#16A34A] hover:text-[#15803D]">privacy policy</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-14 sm:mt-16 max-w-3xl mx-auto" id="faq">
          <SectionHeading eyebrow="Help and answers" title="Frequently asked questions" />
          <div className="space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="w-full flex justify-between items-center p-4 sm:p-5 cursor-pointer list-none gap-4">
                  <h3 className="font-medium text-[#18181B] text-sm sm:text-base">{item.q}</h3>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-[#16A34A] transition-transform duration-150 group-open:rotate-45 font-bold text-lg"
                  >
                    ＋
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 text-[#52525B] text-sm leading-relaxed border-t border-[#F4F4F5] pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-14 sm:mt-16 pt-10 border-t border-[#E4E4E7] pb-10">
          <h2 className="text-sm font-semibold text-[#18181B] mb-3">Popular tools</h2>
          <div className="flex flex-wrap gap-2">
            {POPULAR_LINKS.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-1.5 bg-[#FAFAFA] text-[#52525B] hover:text-[#15803D] hover:bg-[#F0FDF4] rounded-xl transition-colors border border-[#E4E4E7]"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
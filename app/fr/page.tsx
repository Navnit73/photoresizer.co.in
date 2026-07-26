"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AdBanner } from "../../components/AdBanner";
import { Shield, Sparkles, RefreshCw, Wand2, Scissors, Image as ImageIcon, ArrowRight } from "lucide-react";
import { frPages } from "../../content/fr-pages";

const PhotoEditor = dynamic(() => import("../components/editor/PhotoEditor"), {
  ssr: false,
});

// Exclude admin pages from main tool cards grid
const toolPages = frPages.filter(
  (page) => !["contact", "conditions", "confidentialite"].includes(page.slug)
);

// Maps each tool's slug to the icon that best represents its function.
function getToolIcon(slug?: string) {
  if (!slug) return ImageIcon;
  if (slug.includes("identite") || slug.includes("permis") || slug.includes("passeport")) {
    return Scissors;
  }
  if (slug.includes("optimiser")) {
    return Sparkles;
  }
  if (slug.includes("compresser") || slug.includes("reduire")) {
    return Wand2;
  }
  if (slug.includes("redimensionner")) {
    return RefreshCw;
  }
  return ImageIcon;
}

const FAQS = [
  {
    q: "L'outil de retouche photo est-il vraiment gratuit ?",
    a: "Oui, totalement gratuit. Toutes les fonctionnalités principales – redimensionnement, recadrage, compression et conversion de format – sont accessibles sans inscription et sans aucun frais.",
  },
  {
    q: "Mes photos sont-elles téléchargées sur un serveur ?",
    a: "Non, jamais. Tout le traitement est effectué directement dans votre navigateur grâce à la technologie WebAssembly. Vos images ne quittent jamais votre appareil (conforme RGPD).",
  },
  {
    q: "Quels formats d'image sont pris en charge ?",
    a: "En entrée, nous acceptons les fichiers JPG, JPEG, PNG et WebP. Vous pouvez exporter vos images modifiées au format JPG, PNG ou WebP.",
  },
  {
    q: "Dois-je créer un compte utilisateur ?",
    a: "Non. Ouvrez simplement la page, déposez votre photo et commencez immédiatement l'édition.",
  },
];

const frHomeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FrenchHomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#ffffff] dark:bg-[#121212] text-[#222222] dark:text-[#f1f1f1] font-['Airbnb_Cereal_VF',Circular,sans-serif]">
      <script
        id="fr-home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(frHomeFaqSchema, null, 2),
        }}
      />

      {/* ── Compact Hero Header ── */}
      <section className="pt-8 pb-6 px-4 md:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff385c]/10 text-[#ff385c] dark:bg-[#ff385c]/20 text-xs font-bold uppercase tracking-wider mb-4">
          <Shield size={13} className="text-[#ff385c]" />
          100% Gratuit · Traitement Local · Conforme RGPD
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#222222] dark:text-white leading-tight mb-3">
          Éditeur de Photos en Ligne Gratuit
        </h1>

        <p className="text-sm sm:text-base text-[#6a6a6a] dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-6">
          Redimensionnez, compressez et ajustez vos photos rapidement et 100% en privé directement dans votre navigateur.
        </p>
      </section>

      {/* ── Upper Divider Line & Direct Editor Workspace ── */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 pt-6 border-t border-[#dddddd] dark:border-slate-800 mb-12">
        <PhotoEditor />
      </section>

      {/* Mid AdBanner */}
      <div className="max-w-[1280px] mx-auto px-4 my-6">
        <AdBanner type="responsive" />
      </div>

      {/* ── Dynamic Tools Grid from frPages ── */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 border-t border-[#dddddd] dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#222222] dark:text-white tracking-tight">
              Tous nos Outils de Retouche Photo
            </h2>
            <p className="text-xs text-[#6a6a6a] dark:text-slate-400 mt-1">
              Sélectionnez un outil pour éditer instantanément vos images dans votre navigateur
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-white border border-[#dddddd] dark:border-slate-700 shrink-0">
            {toolPages.length} Outils Disponibles
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {toolPages.map((page) => {
            const Icon = getToolIcon(page.slug);
            const title = page.h1;

            return (
              <Link
                key={page.slug}
                href={`/fr/${page.slug}`}
                className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-[#dddddd] dark:border-slate-800 hover:border-[#ff385c] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#ff385c]/10 text-[#ff385c] flex items-center justify-center mb-3 group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-[#222222] dark:text-white mb-1.5 group-hover:text-[#ff385c] transition-colors line-clamp-1">
                    {title}
                  </h3>
                  <p className="text-xs text-[#6a6a6a] dark:text-slate-400 leading-relaxed line-clamp-2">
                    {page.metaDescription}
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#ff385c] flex items-center gap-1.5">
                  <span>Ouvrir l'outil</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── French SEO Content Section ── */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 border-t border-[#dddddd] dark:border-slate-800">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h3:text-base prose-p:text-sm prose-p:leading-relaxed prose-p:text-[#484848] dark:prose-p:text-slate-400 prose-li:text-sm prose-li:text-[#484848] dark:prose-li:text-slate-400">
          <h2 className="text-[#222222] dark:text-white">Votre éditeur de photos en ligne gratuit et privé</h2>
          <p>
            Que vous souhaitiez <strong>redimensionner une photo</strong>, créer une <strong>photo d'identité</strong> conforme pour un passeport ou un visa, ou réduire la taille d'un fichier image avant de l'envoyer par e-mail, notre éditeur de photos rassemble toutes les fonctionnalités essentielles dans un outil simple, rapide et entièrement gratuit.
          </p>

          <h3 className="text-[#222222] dark:text-white">Pourquoi privilégier le traitement local dans le navigateur ?</h3>
          <p>
            Contrairement aux convertisseurs d'images traditionnels qui envoient vos fichiers sur des serveurs distants, notre application effectue 100% des calculs localement sur votre ordinateur ou votre smartphone. Grâce aux technologies HTML5 et WebAssembly, vos clichés personnels restent strictly privés et conformes aux exigences du RGPD.
          </p>

          <h3 className="text-[#222222] dark:text-white">Nos fonctionnalités principales</h3>
          <ul>
            <li><strong>Redimensionnement d'image :</strong> Ajustez les dimensions en pixels avec maintien du ratio d'aspect.</li>
            <li><strong>Photos d'identité :</strong> Recadrez vos photos aux formats officiels 35x45 mm.</li>
            <li><strong>Conversion de format :</strong> Basculez instantanément entre les formats JPG, PNG et WebP.</li>
          </ul>
        </div>
      </section>

      {/* ── Simple FAQ Section ── */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-10 border-t border-[#dddddd] dark:border-slate-800">
        <h2 className="text-xl font-bold text-[#222222] dark:text-white text-center mb-6">
          Foire Aux Questions (FAQ)
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 border border-[#dddddd] dark:border-slate-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#f7f7f7] dark:hover:bg-slate-800 transition-colors"
                aria-expanded={openFaq === i}
              >
                <span className="font-semibold text-sm text-[#222222] dark:text-white pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 text-[#6a6a6a] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 text-xs text-[#6a6a6a] dark:text-slate-400 leading-relaxed border-t border-[#dddddd] dark:border-slate-800 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom AdBanner */}
      <div className="max-w-[1280px] mx-auto px-4 my-6">
        <AdBanner type="responsive" />
      </div>

    </div>
  );
}
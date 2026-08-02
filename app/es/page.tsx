"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Shield, Sparkles, RefreshCw, Wand2, Scissors, ArrowRight } from "lucide-react";
import { esPages } from "../../content/es-pages";

const PhotoEditor = dynamic(() => import("../components/editor/PhotoEditor"), {
  ssr: false,
});

const toolPages = esPages.filter(
  (page) => !["contacto", "terminos", "privacidad"].includes(page.slug)
);

function getToolIcon(showTool?: string, slug?: string) {
  if (showTool === "bg-remover" || slug?.includes("fondo")) return Wand2;
  if (showTool === "passport-maker" || slug?.includes("pasaporte")) return Scissors;
  if (slug?.includes("comprimir")) return Sparkles;
  if (slug?.includes("recortar")) return Scissors;
  return RefreshCw;
}

const FAQS = [
  {
    q: "¿El editor de fotos es realmente gratuito?",
    a: "Sí, 100% gratuito. Todas las funciones principales (cambiar tamaño, recortar, comprimir, eliminar fondo y convertir formatos) se pueden utilizar sin registro y sin costo alguno.",
  },
  {
    q: "¿Se suben mis imágenes a algún servidor?",
    a: "No, nunca. Todo el procesamiento se realiza directamente en su navegador web. Sus fotos nunca salen de su dispositivo.",
  },
  {
    q: "¿Qué formatos de imagen son compatibles?",
    a: "Admitimos JPG, JPEG, PNG y WebP como archivos de entrada. Puede exportar sus imágenes editadas en formatos JPG, PNG o WebP.",
  },
  {
    q: "¿Necesito crear una cuenta?",
    a: "No. Simplemente abra la página, cargue su foto y comience a editar de inmediato sin crear una cuenta.",
  },
];

const esHomeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function SpanishHomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#ffffff] dark:bg-[#121212] text-[#222222] dark:text-[#f1f1f1] font-['Airbnb_Cereal_VF',Circular,sans-serif]">
      <script
        id="es-home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(esHomeFaqSchema, null, 2),
        }}
      />

      {/* Hero Header */}
      <section className="pt-8 pb-6 px-4 md:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff385c]/10 text-[#ff385c] dark:bg-[#ff385c]/20 text-xs font-bold uppercase tracking-wider mb-4">
          <Shield size={13} className="text-[#ff385c]" />
          100% Gratis · Procesamiento Local · Seguro y Privado
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#222222] dark:text-white leading-tight mb-3">
          Editor de Fotos Online Gratis
        </h1>

        <p className="text-sm sm:text-base text-[#6a6a6a] dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-6">
          Redimensiona fotos, comprime imágenes, recorta y crea fotos para pasaporte rápido, fácil y 100% privado en tu navegador.
        </p>
      </section>

      {/* Editor Workspace */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 mb-12">
        <PhotoEditor />
      </section>

      {/* Dynamic Tools Grid from esPages */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 border-t border-[#dddddd] dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#222222] dark:text-white tracking-tight">
              Herramientas de Edición de Imagen
            </h2>
            <p className="text-xs text-[#6a6a6a] dark:text-slate-400 mt-1">
              Selecciona una herramienta para editar tus imágenes al instante en el navegador
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-white border border-[#dddddd] dark:border-slate-700 shrink-0">
            {toolPages.length} Herramientas Disponibles
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {toolPages.map((page) => {
            const Icon = getToolIcon(page.showTool, page.slug);
            const title = page.h1.split('—')[0].trim();

            return (
              <Link
                key={page.slug}
                href={`/es/${page.slug}`}
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
                  <span>Abrir Herramienta</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 border-t border-[#dddddd] dark:border-slate-800">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h3:text-base prose-p:text-sm prose-p:leading-relaxed prose-p:text-[#484848] dark:prose-p:text-slate-400 prose-li:text-sm prose-li:text-[#484848] dark:prose-li:text-slate-400">
          <h2 className="text-[#222222] dark:text-white">Editor de Fotos Online Gratis para Todo Uso</h2>
          <p>
            Ya sea que necesites <strong>redimensionar una foto</strong> para una solicitud oficial, <strong>crear una foto para pasaporte</strong>, o reducir el tamaño de un archivo para enviarlo por correo electrónico, nuestro editor de fotos en línea cubre todas las necesidades esenciales de edición de imágenes en una única herramienta completamente gratuita.
          </p>

          <h3 className="text-[#222222] dark:text-white">Procesamiento Local y Privado</h3>
          <p>
            A diferencia de otros servicios en línea que suben sus imágenes a servidores externos, nuestro sitio realiza todas las operaciones directamente dentro de su navegador utilizando tecnología web avanzada. Sus archivos nunca salen de su computadora o teléfono móvil, lo que garantiza total privacidad y rapidez.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-10 border-t border-[#dddddd] dark:border-slate-800">
        <h2 className="text-xl font-bold text-[#222222] dark:text-white text-center mb-6">
          Preguntas Frecuentes
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
    </div>
  );
}

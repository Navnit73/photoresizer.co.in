"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AdBanner } from "../../components/AdBanner";
import { Shield, Sparkles, RefreshCw, Wand2, Scissors, Image as ImageIcon, ArrowRight } from "lucide-react";
import { dePages } from "../../content/de-pages";

const PhotoEditor = dynamic(() => import("../components/editor/PhotoEditor"), {
  ssr: false,
});

// Exclude admin pages from the main tool cards grid
const toolPages = dePages.filter(
  (page) => !["kontakt", "agb", "datenschutz"].includes(page.slug)
);

function getToolIcon(showTool?: string, slug?: string) {
  if (showTool === "bg-remover" || slug?.includes("hintergrund")) return Wand2;
  if (showTool === "passport-maker" || slug?.includes("pass")) return Scissors;
  if (slug?.includes("komprimieren")) return Sparkles;
  if (slug?.includes("zuschneiden")) return Scissors;
  return RefreshCw;
}

const FAQS = [
  {
    q: "Ist das Bildbearbeitungs-Tool wirklich kostenlos?",
    a: "Ja, vollständig. Alle Grundfunktionen – Bildgröße ändern, Zuschneiden, Komprimieren, Hintergrund entfernen und Formatkonvertierung – sind ohne Registrierung und ohne Gebühren nutzbar.",
  },
  {
    q: "Werden meine Bilder auf einen Server hochgeladen?",
    a: "Nein, niemals. Die gesamte Verarbeitung findet direkt in Ihrem Browser statt. Ihre Bilder verlassen Ihr Gerät zu keinem Zeitpunkt (DSGVO-konform).",
  },
  {
    q: "Welche Bildformate werden unterstützt?",
    a: "Als Eingabe unterstützen wir JPG, JPEG, PNG und WebP. Sie können Ihre bearbeiteten Bilder in JPG, PNG oder WebP exportieren.",
  },
  {
    q: "Brauche ich ein Benutzerkonto?",
    a: "Nein. Öffnen Sie einfach die Seite, laden Sie Ihr Bild hoch und beginnen Sie sofort mit der Bearbeitung.",
  },
];

const deHomeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function GermanHomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#ffffff] dark:bg-[#121212] text-[#222222] dark:text-[#f1f1f1] font-['Airbnb_Cereal_VF',Circular,sans-serif]">
      <script
        id="de-home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(deHomeFaqSchema, null, 2),
        }}
      />

      {/* ── Compact Hero Header ── */}
      <section className="pt-8 pb-6 px-4 md:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff385c]/10 text-[#ff385c] dark:bg-[#ff385c]/20 text-xs font-bold uppercase tracking-wider mb-4">
          <Shield size={13} className="text-[#ff385c]" />
          100% Kostenlos · Lokale Verarbeitung · DSGVO-konform
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#222222] dark:text-white leading-tight mb-3">
          Kostenloser Online Fotoeditor
        </h1>

        <p className="text-sm sm:text-base text-[#6a6a6a] dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-6">
          Bilder verkleinern, komprimieren, zuschneiden und Passfotos erstellen – schnell, einfach und 100% privat in Ihrem Browser.
        </p>
      </section>

      {/* ── Direct Editor Workspace ── */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 mb-12">
        <PhotoEditor />
      </section>

      {/* Mid AdBanner */}
      <div className="max-w-[1280px] mx-auto px-4 my-6">
        <AdBanner type="responsive" />
      </div>

      {/* ── Dynamic Tools Grid from dePages ── */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 border-t border-[#dddddd] dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#222222] dark:text-white tracking-tight">
              Alle Online Bildbearbeitungswerkzeuge
            </h2>
            <p className="text-xs text-[#6a6a6a] dark:text-slate-400 mt-1">
              Wählen Sie ein Werkzeug aus, um Ihre Bilder sofort im Browser zu bearbeiten
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-white border border-[#dddddd] dark:border-slate-700 shrink-0">
            {toolPages.length} Werkzeuge Verfügbar
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {toolPages.map((page) => {
            const Icon = getToolIcon(page.showTool, page.slug);
            const title = page.h1.split('—')[0].trim();

            return (
              <Link
                key={page.slug}
                href={`/de/${page.slug}`}
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
                  <span>Tool öffnen</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── SEO Content Section (~700 words) ── */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 border-t border-[#dddddd] dark:border-slate-800">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h3:text-base prose-p:text-sm prose-p:leading-relaxed prose-p:text-[#484848] dark:prose-p:text-slate-400 prose-li:text-sm prose-li:text-[#484848] dark:prose-li:text-slate-400">
          <h2 className="text-[#222222] dark:text-white">Der kostenlose Online Fotoeditor für jeden Zweck</h2>
          <p>
            Ob Sie ein <strong>Bewerbungsfoto zurechtschneiden</strong>, ein <strong>Passbild erstellen</strong>, ein Produktbild für Ihren Onlineshop verkleinern oder einfach nur ein Foto komprimieren möchten, bevor Sie es per E-Mail versenden – unser Fotoeditor deckt die häufigsten Bildbearbeitungsaufgaben in einem einzigen, kostenlosen Werkzeug ab. Statt eine Software zu installieren oder sich bei einem Cloud-Dienst zu registrieren, öffnen Sie einfach diese Seite und beginnen sofort mit der Bearbeitung – direkt in Ihrem Browser, auf dem Desktop genauso wie auf dem Smartphone.
          </p>

          <h3 className="text-[#222222] dark:text-white">Warum lokale Bildbearbeitung im Browser?</h3>
          <p>
            Die meisten kostenlosen Online-Editoren laden Ihr Bild zunächst auf einen fremden Server hoch, bearbeiten es dort und schicken es anschließend zurück. Das kostet Zeit, verbraucht Ihr Datenvolumen und wirft bei sensiblen Fotos – etwa Ausweis- oder Passbildern – berechtigte Datenschutzfragen auf. Unser Editor verzichtet vollständig auf diesen Umweg: Alle Berechnungen, von der einfachen Größenänderung bis zur KI-gestützten Hintergrundentfernung, laufen direkt auf Ihrem Gerät ab. Das Ergebnis ist spürbar schneller, funktioniert auch bei instabiler Internetverbindung zuverlässig und ist von Grund auf DSGVO-konform, weil kein Bild jemals Ihr Gerät verlässt.
          </p>

          <h3 className="text-[#222222] dark:text-white">Ein Werkzeug für alle gängigen Aufgaben</h3>
          <p>
            In der Praxis begegnen einem immer wieder dieselben kleinen Hürden bei Fotos: Eine Bewerbungsplattform verlangt eine Datei unter 200 KB, ein Visumsantrag verlangt ein Passbild mit exakten 35 × 45 mm, ein Onlineshop-Bild soll quadratisch sein, oder ein Familienfoto soll vor dem Teilen zugeschnitten werden. Unser Werkzeug bündelt genau diese Alltagsaufgaben:
          </p>
          <ul>
            <li><strong>Foto Größe ändern:</strong> Breite, Höhe oder Dateigröße exakt nach Vorgabe anpassen – in Pixel, Zentimetern oder Kilobyte.</li>
            <li><strong>Bild verkleinern:</strong> Auflösung und Dateigröße reduzieren, ohne dass die Bildqualität sichtbar leidet.</li>
            <li><strong>Bild zuschneiden:</strong> Den passenden Ausschnitt wählen, mit festen Seitenverhältnissen für Social Media oder Passbilder.</li>
            <li><strong>Passbild erstellen:</strong> Biometrisch korrekte Fotos für Ausweis, Reisepass oder Visum, mit automatischer Hintergrundanpassung.</li>
            <li><strong>Hintergrund entfernen:</strong> Motive per KI-Modell freistellen, ganz ohne grünen Bildschirm oder Fotostudio.</li>
          </ul>

          <h3 className="text-[#222222] dark:text-white">Für wen eignet sich dieser Fotoeditor?</h3>
          <p>
            Bewerber:innen nutzen ihn, um ihr Bewerbungsfoto auf die geforderten Maße zu bringen, ohne dafür ein Fotostudio zu bezahlen. Reisende und Antragsteller:innen erstellen damit in wenigen Minuten ein Passfoto, das den offiziellen Vorgaben für Reisepass oder Visum entspricht. Online-Händler:innen verkleinern und komprimieren Produktbilder, damit ihr Shop schneller lädt und in der Google-Suche besser abschneidet. Und private Nutzer:innen greifen einfach darauf zurück, wenn ein Foto für ein Formular, eine Bewerbung oder ein soziales Netzwerk die falsche Größe hat.
          </p>

          <h3 className="text-[#222222] dark:text-white">Wie unterscheidet sich unser Fotoeditor von klassischer Software?</h3>
          <p>
            Programme wie Photoshop oder GIMP bieten zwar enormen Funktionsumfang, sind für einmalige Aufgaben wie das Anpassen eines Passbilds oder das Verkleinern eines einzelnen Fotos aber überdimensioniert und erfordern Einarbeitungszeit. Unser Editor konzentriert sich bewusst auf die Aufgaben, die im Alltag am häufigsten anfallen, und macht sie mit klaren Vorlagen, automatischer Erkennung der optimalen Einstellungen und einer Vorschau in Echtzeit zugänglich. Sie brauchen kein Vorwissen in Bildbearbeitung, um in wenigen Klicks ein professionell wirkendes Ergebnis zu erhalten.
          </p>

          <h3 className="text-[#222222] dark:text-white">Datenschutz als Grundprinzip, nicht als Zusatz</h3>
          <p>
            Weil die gesamte Verarbeitung lokal stattfindet, sammeln wir keine Bilddaten, keine Nutzungsprofile und setzen keine Tracking-Cookies. Das ist besonders bei Ausweis- und Passfotos relevant, bei denen Nutzer:innen zu Recht besonderen Wert auf Datenschutz legen. Weitere Details dazu finden Sie in unserer <Link href="/de/datenschutz" className="text-[#ff385c] font-semibold no-underline hover:underline">Datenschutzerklärung</Link>.
          </p>

          <p>
            Wählen Sie oben eines der Werkzeuge aus oder starten Sie direkt im Editor – Ihr bearbeitetes Bild steht in Sekunden zum Download bereit, ohne Anmeldung, ohne Wasserzeichen und ohne versteckte Kosten.
          </p>
        </div>
      </section>

      {/* ── Simple FAQ Section ── */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-10 border-t border-[#dddddd] dark:border-slate-800">
        <h2 className="text-xl font-bold text-[#222222] dark:text-white text-center mb-6">
          Häufig gestellte Fragen
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
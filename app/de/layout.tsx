import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import DeSiteHeader from './DeSiteHeader';
import { AdBanner } from '../../components/AdBanner';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Bilder Online Kostenlos Verkleinern, Hintergründe Entfernen & Fotos Bearbeiten | photoresizer.co.in",
  description: "Bilder verkleinern, Fotos komprimieren, Hintergründe entfernen, Passfotos erstellen und Bilder online kostenlos bearbeiten. Keine Uploads erforderlich.",
  alternates: {
    canonical: `${baseUrl}/de`,
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
    title: "Bilder Online Kostenlos Verkleinern, Hintergründe Entfernen & Fotos Bearbeiten | photoresizer.co.in",
    description: "Bilder verkleinern, Fotos komprimieren, Hintergründe entfernen, Passfotos erstellen und Bilder online kostenlos bearbeiten. Keine Uploads erforderlich.",
    type: "website",
    url: `${baseUrl}/de`,
    locale: "de_DE",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'photoresizer de',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilder Online Kostenlos Verkleinern | photoresizer.co.in",
    description: "Bilder verkleinern, Fotos komprimieren, Hintergründe entfernen und Fotos online kostenlos bearbeiten.",
    images: ['/og-image.png'],
  },
};

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="de-layout font-sans bg-[#ffffff] dark:bg-[#121212] text-[#222222] dark:text-[#f1f1f1] min-h-screen flex flex-col selection:bg-[#ff385c] selection:text-white">
      <DeSiteHeader />
      
      {/* Top Ad Banner */}
      <div className="max-w-[1280px] mx-auto px-4 mt-6 hidden sm:block w-full" style={{ height: '110px', minHeight: '110px', overflow: 'hidden', contain: 'layout style paint' }}>
        <AdBanner type="fixed" />
      </div>
      <div className="max-w-[1280px] mx-auto px-4 mt-4 block sm:hidden w-full" style={{ height: '100px', minHeight: '100px', overflow: 'hidden', contain: 'layout style paint' }}>
        <AdBanner type="responsive" />
      </div>

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* ── Airbnb Footer Light (#f7f7f7) ── */}
      <footer className="w-full bg-[#f7f7f7] dark:bg-[#0b0b0b] border-t border-[#dddddd] dark:border-slate-800 text-[#222222] dark:text-slate-300 font-['Airbnb_Cereal_VF',Circular,sans-serif] transition-colors mt-auto pb-24 sm:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#dddddd] dark:border-slate-800 text-sm">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Beliebte Werkzeuge</h3>
              <Link href="/de/foto-verkleinern" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Foto Verkleinern</Link>
              <Link href="/de/hintergrund-entfernen" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Hintergrund Entfernen</Link>
              <Link href="/de/bild-komprimieren" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Bild Komprimieren</Link>
              <Link href="/de/passfoto-ersteller" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Passfoto Ersteller</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Ressourcen</h3>
              <Link href="/de/anleitung" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Anleitung</Link>
              <Link href="/de/kontakt" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Kontakt</Link>
              <Link href="/de/agb" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">AGB</Link>
              <Link href="/de/datenschutz" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Datenschutz</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Datenschutz & Technologie</h3>
              <p className="text-xs text-[#6a6a6a] dark:text-slate-400 leading-relaxed">
                Verarbeitung 100% lokal im Browser. Ihre Bilder verlassen zu keinem Zeitpunkt Ihr Gerät.
              </p>
              <div className="flex flex-col gap-1 text-xs text-[#222222] dark:text-white font-medium mt-2">
                <span>✓ HTML5 & WebAssembly Technologie</span>
                <span>✓ Unbegrenzte kostenlose Nutzung</span>
                <span>✓ DSGVO-konform & 100% privat</span>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6a6a6a] dark:text-slate-400">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span>© 2026 photoresizer.co.in</span>
              <span>·</span>
              <Link href="/de/datenschutz" className="hover:underline text-[#222222] dark:text-slate-200">Datenschutz</Link>
              <span>·</span>
              <Link href="/de/agb" className="hover:underline text-[#222222] dark:text-slate-200">AGB</Link>
              <span>·</span>
              <Link href="/de" className="hover:underline text-[#222222] dark:text-slate-200">Startseite DE</Link>
              <span>·</span>
              <span className="font-medium text-[#222222] dark:text-slate-300">Entwickelt von Navnit Rai</span>
            </div>

            <div className="flex items-center gap-6 font-semibold text-[#222222] dark:text-white">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <span>Deutsch (DE)</span>
              </span>
              <span>€ EUR</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Sticky Bottom Ad Anchor */}
      {/* <AdBanner type="sticky-bottom" /> */}
    </div>
  );
}


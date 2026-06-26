import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import DeSiteHeader from './DeSiteHeader';

export const metadata: Metadata = {
  title: "Bilder Online Kostenlos Verkleinern, Hintergründe Entfernen & Fotos Bearbeiten | PhotoResizerAI",
  description: "Bilder verkleinern, Fotos komprimieren, Hintergründe entfernen, Passfotos erstellen und Bilder online kostenlos bearbeiten. Keine Uploads erforderlich.",
  alternates: {
    canonical: '/de',
    languages: {
      en: '/',
      de: '/de',
      fr: '/fr',
      es: '/es',
      'x-default': '/',
    },
  },
};

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="de-layout flex flex-col min-h-screen">
      <DeSiteHeader />
      
      <div className="flex-1">
        {children}
      </div>

      <footer className="w-full bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 mt-auto">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                photoresizer
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                Ihre ultimative Suite kostenloser, privater und sicherer Online-Bildbearbeitungswerkzeuge. Verarbeiten Sie Ihre Fotos lokal in Ihrem Browser, ohne dass Daten Ihr Gerät verlassen.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase tracking-wider text-xs">Beliebte Tools</h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><Link href="/de/foto-verkleinern" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Foto Verkleinern</Link></li>
                <li><Link href="/de/passfoto-ersteller" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Passfoto Ersteller</Link></li>
                <li><Link href="/de/bildgroesse-aendern" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Bildgröße Ändern</Link></li>
                <li><Link href="/de/tools" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors font-semibold">Alle Tools Entdecken &rarr;</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-1">
              <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase tracking-wider text-xs">Ressourcen</h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><Link href="/de/anleitung" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Anleitung</Link></li>
                <li><Link href="/de/kontakt" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Kontakt</Link></li>
                <li><Link href="/de/agb" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">AGB</Link></li>
                <li><Link href="/de/datenschutz" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>

          {/* Alle DE Seiten */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase tracking-wider text-xs text-center md:text-left">Alle Werkzeuge (A-Z)</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link href="/de/bild" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Bild</Link>
              <Link href="/de/bild-komprimieren" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Bild Komprimieren</Link>
              <Link href="/de/bild-online-verkleinern" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Bild Online Verkleinern</Link>
              <Link href="/de/bild-resizer" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Bild Resizer</Link>
              <Link href="/de/bildgroesse-aendern" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Bildgröße Ändern</Link>
              <Link href="/de/bildgroesse-reduzieren" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Bildgröße Reduzieren</Link>
              <Link href="/de/foto" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Foto</Link>
              <Link href="/de/foto-groesse-aendern" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Foto Größe Ändern</Link>
              <Link href="/de/foto-online-verkleinern" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Foto Online Verkleinern</Link>
              <Link href="/de/foto-resizer" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Foto Resizer</Link>
              <Link href="/de/foto-verkleinern" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Foto Verkleinern</Link>
              <Link href="/de/minimize-photo-size" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Minimize Photo Size</Link>
              <Link href="/de/photo-cropper-online" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Photo Cropper Online</Link>
              <Link href="/de/photo-image-resizer" className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Photo Image Resizer</Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 dark:text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} photoresizer. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-4 text-sm text-slate-400 dark:text-slate-500">
              <span>Made with ❤️ for Creators</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

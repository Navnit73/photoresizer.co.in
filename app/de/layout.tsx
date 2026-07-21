import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import DeSiteHeader from './DeSiteHeader';

export const metadata: Metadata = {
  title: "Bilder Online Kostenlos Verkleinern, Hintergründe Entfernen & Fotos Bearbeiten | photoresizer.co.in",
  description: "Bilder verkleinern, Fotos komprimieren, Hintergründe entfernen, Passfotos erstellen und Bilder online kostenlos bearbeiten. Keine Uploads erforderlich.",
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
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Ihre ultimative Suite kostenloser, privater und sicherer Online-Bildbearbeitungswerkzeuge. Verarbeiten Sie Ihre Fotos lokal in Ihrem Browser, ohne dass Daten Ihr Gerät verlassen.
              </p>
              
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Contact Developer</p>
                <p className="mb-1">Navnit Rai</p>
                <p className="mb-1">
                  <a href="mailto:navnitrai5389@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">navnitrai5389@gmail.com</a>
                </p>
                <p>+91 7355087072</p>
              </div>
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

          {/* Removed programmatic spin pages section */}

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-3 text-slate-500 dark:text-slate-400 text-sm">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 font-semibold text-slate-700 dark:text-slate-300">
                <span>100% Private</span>
                <span className="hidden md:inline">•</span>
                <span>Fast Processing</span>
                <span className="hidden md:inline">•</span>
                <span>Offline Capable</span>
              </div>
              <p>&copy; 2026 Photo Resizer.</p>
              <p className="text-xs">As an Amazon Associate, I earn from qualifying purchases.</p>
            </div>
            <div className="flex text-sm text-slate-500 dark:text-slate-400 font-medium">
              <span>Designed & Developed with ❤️ by Navnit Rai</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

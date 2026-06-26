import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Redimensionner, Compresser, Détourer et Modifier des Photos en Ligne Gratuitement | PhotoResizerAI",
  description: "Redimensionnez des images, compressez des photos, supprimez les arrière-plans, créez des photos de passeport et modifiez des images en ligne gratuitement.",
  alternates: {
    canonical: '/fr',
    languages: {
      en: '/',
      de: '/de',
      fr: '/fr',
      es: '/es',
      'x-default': '/',
    },
  },
};

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="french-layout">
      {/* French Specific Navigation */}
      <nav className="w-full p-4 border-b border-slate-200 text-center font-bold text-slate-800">
        Navigation (FR)
      </nav>
      
      {/* Page Content */}
      <div className="min-h-screen">
        {children}
      </div>

      {/* French Specific Footer */}
      <footer className="w-full p-6 bg-slate-50 text-center text-slate-500 text-sm mt-auto border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/fr/comment-utiliser" className="hover:text-slate-800 transition-colors">Comment utiliser</Link>
          <Link href="/fr/contact" className="hover:text-slate-800 transition-colors">Contact</Link>
          <Link href="/fr/conditions" className="hover:text-slate-800 transition-colors">Conditions générales</Link>
          <Link href="/fr/confidentialite" className="hover:text-slate-800 transition-colors">Confidentialité</Link>
        </div>
        <div>photoresizer &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}

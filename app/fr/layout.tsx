import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import FrSiteHeader from './FrSiteHeader';
import { AdBanner } from '../../components/AdBanner';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Redimensionner, Compresser, Détourer et Modifier des Photos en Ligne Gratuitement | photoresizer.co.in",
  description: "Redimensionnez des images, compressez des photos, supprimez les arrière-plans, créez des photos de passeport et modifiez des images en ligne gratuitement.",
  alternates: {
    canonical: `${baseUrl}/fr`,
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
    title: "Redimensionner, Compresser, Détourer et Modifier des Photos en Ligne Gratuitement | photoresizer.co.in",
    description: "Redimensionnez des images, compressez des photos, supprimez les arrière-plans et modifiez des images en ligne gratuitement.",
    type: "website",
    url: `${baseUrl}/fr`,
    locale: "fr_FR",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'photoresizer fr' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redimensionner des Photos en Ligne Gratuitement | photoresizer.co.in",
    description: "Redimensionnez des images, compressez des photos et supprimez les arrière-plans gratuitement.",
    images: ['/og-image.png'],
  },
};

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="french-layout font-sans bg-[#ffffff] dark:bg-[#121212] text-[#222222] dark:text-[#f1f1f1] min-h-screen flex flex-col selection:bg-[#ff385c] selection:text-white font-['Airbnb_Cereal_VF',Circular,sans-serif]">
      <FrSiteHeader />
      
      {/* Top Ad Banner */}
      <div className="max-w-[1280px] mx-auto px-4 mt-6 hidden sm:block w-full">
        <AdBanner type="fixed" />
      </div>
      <div className="max-w-[1280px] mx-auto px-4 mt-4 block sm:hidden w-full">
        <AdBanner type="responsive" />
      </div>

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* ── Airbnb Footer Light (#f7f7f7) ── */}
      <footer className="w-full bg-[#f7f7f7] dark:bg-[#0b0b0b] border-t border-[#dddddd] dark:border-slate-800 text-[#222222] dark:text-slate-300 transition-colors mt-auto pb-24 sm:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#dddddd] dark:border-slate-800 text-sm">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Outils Populaires</h3>
              <Link href="/fr/redimensionner-photo" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Redimensionner Photo</Link>
              <Link href="/fr/createur-photo-identite" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Photo d'Identité</Link>
              <Link href="/fr/comment-utiliser" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Comment Utiliser</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Ressources & Légal</h3>
              <Link href="/fr/contact" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Contact</Link>
              <Link href="/fr/conditions" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Conditions générales</Link>
              <Link href="/fr/confidentialite" className="text-[#222222] dark:text-slate-300 hover:underline transition-all">Confidentialité</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Confidentialité & Technologie</h3>
              <p className="text-xs text-[#6a6a6a] dark:text-slate-400 leading-relaxed">
                Traitement 100% local dans votre navigateur. Vos images ne quittent jamais votre appareil.
              </p>
              <div className="flex flex-col gap-1 text-xs text-[#222222] dark:text-white font-medium mt-2">
                <span>✓ Technologie HTML5 & WebAssembly</span>
                <span>✓ Utilisation gratuite et illimitée</span>
                <span>✓ Conforme RGPD & 100% privé</span>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6a6a6a] dark:text-slate-400">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span>© 2026 photoresizer.co.in</span>
              <span>·</span>
              <Link href="/fr/confidentialite" className="hover:underline text-[#222222] dark:text-slate-200">Confidentialité</Link>
              <span>·</span>
              <Link href="/fr/conditions" className="hover:underline text-[#222222] dark:text-slate-200">Conditions</Link>
              <span>·</span>
              <Link href="/fr" className="hover:underline text-[#222222] dark:text-slate-200">Accueil FR</Link>
              <span>·</span>
              <span className="font-medium text-[#222222] dark:text-slate-300">Développé par Navnit Rai</span>
            </div>

            <div className="flex items-center gap-6 font-semibold text-[#222222] dark:text-white">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <span>Français (FR)</span>
              </span>
              <span>€ EUR</span>
            </div>
          </div>

        </div>
      </footer>


    </div>
  );
}

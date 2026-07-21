import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Redimensionner, Compresser, Détourer et Modifier des Photos en Ligne Gratuitement | photoresizer.co.in",
  description: "Redimensionnez des images, compressez des photos, supprimez les arrière-plans, créez des photos de passeport et modifiez des images en ligne gratuitement.",
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
      <footer className="w-full p-6 bg-slate-50 text-center text-slate-500 text-sm mt-auto border-t border-slate-200 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/fr/comment-utiliser" className="hover:text-slate-800 transition-colors">Comment utiliser</Link>
          <Link href="/fr/contact" className="hover:text-slate-800 transition-colors">Contact</Link>
          <Link href="/fr/conditions" className="hover:text-slate-800 transition-colors">Conditions générales</Link>
          <Link href="/fr/confidentialite" className="hover:text-slate-800 transition-colors">Confidentialité</Link>
        </div>
        
        <div className="flex flex-col items-center gap-2 mt-4 text-xs">
          <p className="font-bold text-slate-700">Contact Developer</p>
          <p>Navnit Rai | <a href="mailto:navnitrai5389@gmail.com" className="hover:text-slate-800">navnitrai5389@gmail.com</a> | +91 7355087072</p>
        </div>

        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex gap-2 font-semibold text-slate-600">
            <span>100% Private</span><span>•</span><span>Fast Processing</span><span>•</span><span>Offline Capable</span>
          </div>
          <p>&copy; 2026 Photo Resizer.</p>
          <p className="text-xs">As an Amazon Associate, I earn from qualifying purchases.</p>
          <p className="text-xs font-medium mt-1">Designed & Developed with ❤️ by Navnit Rai</p>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Redimensionar, Comprimir, Eliminar Fondos y Editar Fotos Online Gratis | PhotoResizerAI",
  description: "Redimensiona imágenes, comprime fotos, elimina fondos, crea fotos para pasaporte y edita imágenes online gratis sin necesidad de subir archivos.",
  alternates: {
    canonical: '/es',
    languages: {
      en: '/',
      de: '/de',
      fr: '/fr',
      es: '/es',
      'x-default': '/',
    },
  },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="es-layout">
      {/* Spanish Specific Navigation */}
      <nav className="w-full p-4 border-b border-slate-200 text-center font-bold text-slate-800">
        Navegación (ES)
      </nav>
      
      {/* Page Content */}
      <div className="min-h-screen">
        {children}
      </div>

      {/* Spanish Specific Footer */}
      <footer className="w-full p-6 bg-slate-50 text-center text-slate-500 text-sm mt-auto border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/es/como-usar" className="hover:text-slate-800 transition-colors">Cómo usar</Link>
          <Link href="/es/contacto" className="hover:text-slate-800 transition-colors">Contacto</Link>
          <Link href="/es/terminos" className="hover:text-slate-800 transition-colors">Términos</Link>
          <Link href="/es/privacidad" className="hover:text-slate-800 transition-colors">Privacidad</Link>
        </div>
        <div>photoresizer &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}

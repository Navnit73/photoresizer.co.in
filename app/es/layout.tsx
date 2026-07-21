import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Redimensionar, Comprimir, Eliminar Fondos y Editar Fotos Online Gratis | photoresizer.co.in",
  description: "Redimensiona imágenes, comprime fotos, elimina fondos, crea fotos para pasaporte y edita imágenes online gratis sin necesidad de subir archivos.",
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
      <footer className="w-full p-6 bg-slate-50 text-center text-slate-500 text-sm mt-auto border-t border-slate-200 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/es/como-usar" className="hover:text-slate-800 transition-colors">Cómo usar</Link>
          <Link href="/es/contacto" className="hover:text-slate-800 transition-colors">Contacto</Link>
          <Link href="/es/terminos" className="hover:text-slate-800 transition-colors">Términos</Link>
          <Link href="/es/privacidad" className="hover:text-slate-800 transition-colors">Privacidad</Link>
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

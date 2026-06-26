import React from 'react';
import Link from 'next/link';

export default function SpanishHomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra página en español</h1>
      <p className="mb-8">Encuentre todas nuestras herramientas SEO aquí.</p>
      <div className="flex gap-4">
        <Link href="/es/redimensionar-foto" className="text-blue-500 hover:underline">Redimensionar Foto</Link>
        <Link href="/es/creador-foto-pasaporte" className="text-blue-500 hover:underline">Creador Foto Pasaporte</Link>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { AdBanner } from '../../components/AdBanner';

export default function FrenchHomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre site français</h1>
      <p className="mb-8">Trouvez tous nos outils SEO ici.</p>
      <div className="flex gap-4 mb-8">
        <Link href="/fr/redimensionner-photo" className="text-blue-500 hover:underline">Redimensionner Photo</Link>
        <Link href="/fr/createur-photo-identite" className="text-blue-500 hover:underline">Créateur Photo d'Identité</Link>
      </div>
      
      {/* ── Mid AdBanner ── */}
      <div className="w-full max-w-4xl my-8">
        <AdBanner type="responsive" />
      </div>
    </div>
  );
}

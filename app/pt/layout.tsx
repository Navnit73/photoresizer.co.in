import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { AdBanner } from '../../components/AdBanner';
import { PtHeader } from './PtHeader';
import { ptPages } from '../../content/pt-pages';

export const metadata: Metadata = {
  title: "Redimensionar, Comprimir, Remover Fundo e Criar Foto Passaporte Online Grátis | photoresizer.co.in",
  description: "Redimensione fotos online grátis, corte imagens no tamanho 3x4 e 5x7 cm (Passaporte Brasil e CNH), remova fundo com IA e comprima arquivos em KB sem enviar para servidores.",
};

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  // Use first 8 pages from ptPages for footer links
  const footerPagesCol1 = ptPages.slice(0, 4);
  const footerPagesCol2 = ptPages.slice(4, 8);

  return (
    <div className="pt-layout font-sans bg-[#ffffff] dark:bg-[#121212] text-[#222222] dark:text-[#f1f1f1] min-h-screen flex flex-col selection:bg-[#ff385c] selection:text-white">
      
      {/* ── Airbnb Top Nav (PtHeader with interactive hamburger menu listing ONLY PT tools) ── */}
      <PtHeader />
      
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

      {/* Bottom Ad Banner */}
      <div className="max-w-[1280px] mx-auto px-4 my-6 w-full">
        <AdBanner type="responsive" />
      </div>

      {/* ── Airbnb Footer Light ({colors.surface-soft} #f7f7f7) ── */}
      <footer className="w-full bg-[#f7f7f7] dark:bg-[#0b0b0b] border-t border-[#dddddd] dark:border-slate-800 text-[#222222] dark:text-slate-300 font-['Airbnb_Cereal_VF',Circular,sans-serif] transition-colors mt-auto">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
          
          {/* 3 Column Link Grid ({typography.title-sm} headers, {typography.body-sm} links) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#dddddd] dark:border-slate-800 text-sm">
            
            {/* Column 1: Ferramentas Principais */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Ferramentas de Foto</h3>
              {footerPagesCol1.map((page) => (
                <Link 
                  key={page.slug} 
                  href={`/pt/${page.slug}`} 
                  className="text-[#222222] dark:text-slate-300 hover:underline transition-all line-clamp-1"
                >
                  {page.h1}
                </Link>
              ))}
            </div>

            {/* Column 2: Outras Ferramentas PT */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Mais Opções de Edição</h3>
              {footerPagesCol2.map((page) => (
                <Link 
                  key={page.slug} 
                  href={`/pt/${page.slug}`} 
                  className="text-[#222222] dark:text-slate-300 hover:underline transition-all line-clamp-1"
                >
                  {page.h1}
                </Link>
              ))}
            </div>

            {/* Column 3: Garantia e Privacidade */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#222222] dark:text-white">Privacidade & Tecnologia</h3>
              <p className="text-xs text-[#6a6a6a] dark:text-slate-400 leading-relaxed">
                Processamento 100% no navegador. Seus arquivos de imagem e dados pessoais nunca são enviados para servidores externos.
              </p>
              <div className="flex flex-col gap-1 text-xs text-[#222222] dark:text-white font-medium mt-2">
                <span>✓ HTML5 Canvas e WebAssembly local</span>
                <span>✓ Sem limite de imagens ou fotos</span>
                <span>✓ Grátis e sem cadastro</span>
              </div>
            </div>

          </div>

          {/* Legal Band ({typography.caption-sm} 13px/400) */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6a6a6a] dark:text-slate-400">
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span>© 2026 photoresizer.co.in, Inc.</span>
              <span>·</span>
              <Link href={`/pt/${ptPages[0]?.slug || 'comprimir-foto'}`} className="hover:underline text-[#222222] dark:text-slate-200">Privacidade</Link>
              <span>·</span>
              <Link href={`/pt/${ptPages[0]?.slug || 'comprimir-foto'}`} className="hover:underline text-[#222222] dark:text-slate-200">Termos</Link>
              <span>·</span>
              <Link href="/pt" className="hover:underline text-[#222222] dark:text-slate-200">Início PT</Link>
              <span>·</span>
              <span className="font-medium text-[#222222] dark:text-slate-300">Desenvolvido por Navnit Rai</span>
            </div>

            <div className="flex items-center gap-6 font-semibold text-[#222222] dark:text-white">
              <button aria-label="Idioma Português (BR)" className="flex items-center gap-1.5 hover:underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <span>Português (BR)</span>
              </button>

              <span className="hover:underline cursor-pointer">R$ BRL</span>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}

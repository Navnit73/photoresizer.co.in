'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AdBanner } from '../../components/AdBanner';
import { ptPages } from '../../content/pt-pages';

export default function PortugueseHomePage() {
  // Wishlist state for interactive heart buttons
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);

  const toggleSave = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedSlugs(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  // Use first 3 pages for the floating hero search pill
  const heroPillPages = ptPages.slice(0, 3);
  
  // Use top pages for category chips
  const categoryChipPages = ptPages.slice(0, 8);

  return (
    <div className="w-full bg-[#ffffff] dark:bg-[#121212] text-[#222222] dark:text-[#f1f1f1] font-['Airbnb_Cereal_VF',Circular,sans-serif]">
      
      {/* ── Airbnb Style Hero Section ── */}
      <section className="relative pt-8 pb-12 px-6 md:px-10 border-b border-[#dddddd] dark:border-slate-800 bg-[#ffffff] dark:bg-[#121212]">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff385c]/10 text-[#ff385c] dark:bg-[#ff385c]/20 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff385c] animate-pulse"></span>
            {ptPages.length} Ferramentas Disponíveis
          </div>

          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-tight text-[#222222] dark:text-white leading-[1.25] mb-4 max-w-3xl">
            Redimensione e edite fotos online <br className="hidden sm:inline" />
            <span className="text-[#ff385c]">sem perder qualidade</span>
          </h1>

          <p className="text-[16px] text-[#6a6a6a] dark:text-slate-400 max-w-xl leading-[1.5] mb-8">
            Comprima fotos em KB/MB, ajuste dimensões em pixels e formate imagens para concursos e documentos com 100% de privacidade no seu navegador.
          </p>

          {/* ── Signature Search Bar Pill ({component.search-bar-pill}) ── */}
          {heroPillPages.length >= 3 && (
            <div className="w-full max-w-[850px] bg-white dark:bg-slate-900 rounded-2xl md:rounded-full border border-[#dddddd] dark:border-slate-700 shadow-[0_3px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] p-2 transition-all duration-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                
                {/* Segment 1 */}
                <Link 
                  href={`/pt/${heroPillPages[0].slug}`} 
                  className="flex-1 w-full px-5 py-2.5 rounded-xl md:rounded-full hover:bg-[#f7f7f7] dark:hover:bg-slate-800 transition-colors text-left flex flex-col justify-center"
                >
                  <span className="text-[12px] font-bold text-[#222222] dark:text-white tracking-tight">O que fazer</span>
                  <span className="text-[14px] text-[#6a6a6a] dark:text-slate-400 truncate">{heroPillPages[0].h1.split('—')[0].trim()}</span>
                </Link>

                <div className="hidden md:block w-px h-8 bg-[#dddddd] dark:bg-slate-700"></div>

                {/* Segment 2 */}
                <Link 
                  href={`/pt/${heroPillPages[1].slug}`} 
                  className="flex-1 w-full px-5 py-2.5 rounded-xl md:rounded-full hover:bg-[#f7f7f7] dark:hover:bg-slate-800 transition-colors text-left flex flex-col justify-center"
                >
                  <span className="text-[12px] font-bold text-[#222222] dark:text-white tracking-tight">Formato</span>
                  <span className="text-[14px] text-[#6a6a6a] dark:text-slate-400 truncate">{heroPillPages[1].h1.split('—')[0].trim()}</span>
                </Link>

                <div className="hidden md:block w-px h-8 bg-[#dddddd] dark:bg-slate-700"></div>

                {/* Segment 3 */}
                <Link 
                  href={`/pt/${heroPillPages[2].slug}`} 
                  className="flex-1 w-full px-5 py-2.5 rounded-xl md:rounded-full hover:bg-[#f7f7f7] dark:hover:bg-slate-800 transition-colors text-left flex flex-col justify-center"
                >
                  <span className="text-[12px] font-bold text-[#222222] dark:text-white tracking-tight">Opção</span>
                  <span className="text-[14px] text-[#6a6a6a] dark:text-slate-400 truncate">{heroPillPages[2].h1.split('—')[0].trim()}</span>
                </Link>

                {/* Rausch Search Orb ({component.search-orb}) */}
                <Link 
                  href={`/pt/${heroPillPages[0].slug}`}
                  aria-label="Editar foto agora"
                  className="w-full md:w-auto h-12 px-6 rounded-full bg-[#ff385c] hover:bg-[#e00b41] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 active:scale-95"
                >
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="font-semibold">Editar Foto</span>
                </Link>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── Category Icon Strip ({component.category-strip}) ── */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 border-b border-[#dddddd] dark:border-slate-800">
        <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none text-[14px] font-medium text-[#6a6a6a]">
          {categoryChipPages.map((page, idx) => (
            <Link 
              key={page.slug}
              href={`/pt/${page.slug}`} 
              className={`flex items-center gap-2 pb-2 border-b-2 transition-all shrink-0 ${
                idx === 0 
                  ? 'border-[#222222] text-[#222222] dark:text-white dark:border-white font-semibold' 
                  : 'border-transparent hover:text-[#222222] dark:hover:text-white hover:border-[#dddddd]'
              }`}
            >
              <span className="truncate max-w-[180px]">{page.h1.split('—')[0].trim()}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Photo-First Listing Cards ({component.property-card}) — DYNAMIC FROM ptPages ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[22px] font-semibold text-[#222222] dark:text-white tracking-tight">
              Todas as Ferramentas de Foto em Português
            </h2>
            <p className="text-[14px] text-[#6a6a6a] dark:text-slate-400">
              Selecione qualquer ferramenta para processar sua foto instantaneamente
            </p>
          </div>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-white border border-[#dddddd] dark:border-slate-700">
            {ptPages.length} Páginas Ativas
          </span>
        </div>

        {/* Dynamic Cards Grid from ptPages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ptPages.map((page, index) => {
            const isSaved = savedSlugs.includes(page.slug);

            return (
              <Link 
                key={page.slug}
                href={`/pt/${page.slug}`}
                className="group flex flex-col cursor-pointer"
              >
                {/* Photo Container ({rounded.md} ~14px) */}
                <div className="relative aspect-[4/3] w-full rounded-[14px] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden mb-3 border border-[#dddddd] dark:border-slate-800 shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full rounded-xl border border-white/60 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center shadow-sm group-hover:scale-[1.02] transition-transform">
                      <div className="w-10 h-10 rounded-full bg-[#ff385c]/10 text-[#ff385c] flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[#222222] dark:text-white line-clamp-1">
                        {page.h1.split('—')[0].trim()}
                      </span>
                      <span className="text-[10px] text-[#6a6a6a] dark:text-slate-400 font-semibold uppercase mt-0.5">
                        {page.showTool || 'photo-editor'}
                      </span>
                    </div>
                  </div>

                  {/* Guest Favorite Badge */}
                  {index < 4 && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white text-[#222222] text-[11px] font-semibold shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
                      Mais Utilizado
                    </div>
                  )}

                  {/* Heart Wishlist Icon Button */}
                  <button 
                    onClick={(e) => toggleSave(e, page.slug)}
                    aria-label="Salvar nos favoritos"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-white drop-shadow-md hover:scale-110 active:scale-95 transition-transform"
                  >
                    <svg className={`w-6 h-6 ${isSaved ? 'fill-[#ff385c] stroke-[#ff385c]' : 'fill-black/30 stroke-white'}`} strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>

                {/* Meta Lines */}
                <div className="flex justify-between items-start text-[15px] font-semibold text-[#222222] dark:text-white">
                  <span className="group-hover:underline line-clamp-1">{page.h1}</span>
                  <span className="flex items-center gap-1 text-[14px] shrink-0 ml-1">
                    ★ 4.9{(index % 3) + 7}
                  </span>
                </div>
                <p className="text-[14px] text-[#6a6a6a] dark:text-slate-400 line-clamp-2 mt-1">
                  {page.metaDescription}
                </p>
                <p className="text-[14px] font-semibold text-[#222222] dark:text-white mt-2">
                  Grátis <span className="font-normal text-[#6a6a6a]">· Processamento local</span>
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Signature Rating Display ({typography.rating-display} 64px / 700) ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-12 border-t border-[#dddddd] dark:border-slate-800 my-4 text-center">
        <div className="flex flex-col items-center justify-center">
          
          <div className="flex items-center gap-4 mb-3">
            {/* Left Laurel Wreath */}
            <svg className="w-8 h-12 text-[#222222] dark:text-white stroke-current" fill="none" viewBox="0 0 24 48">
              <path strokeWidth="1.5" d="M18 40C12 36 8 28 8 20C8 12 12 6 18 2M12 34C8 30 5 24 5 18M14 12C10 16 8 20 8 26"/>
            </svg>
            
            <span className="text-[64px] font-bold text-[#222222] dark:text-white leading-[1.1] tracking-[-1px] font-['Airbnb_Cereal_VF',Circular,sans-serif]">
              4,98
            </span>

            {/* Right Laurel Wreath */}
            <svg className="w-8 h-12 text-[#222222] dark:text-white stroke-current" fill="none" viewBox="0 0 24 48">
              <path strokeWidth="1.5" d="M6 40C12 36 16 28 16 20C16 12 12 6 6 2M12 34C16 30 19 24 19 18M10 12C14 16 16 20 16 26"/>
            </svg>
          </div>

          <p className="text-[16px] font-semibold text-[#222222] dark:text-white mb-1">
            Preferido dos usuários para edição e compressão de fotos
          </p>
          <p className="text-[14px] text-[#6a6a6a] dark:text-slate-400 max-w-md">
            Processamento 100% privado no seu navegador, sem upload para servidores.
          </p>

        </div>
      </section>

    </div>
  );
}

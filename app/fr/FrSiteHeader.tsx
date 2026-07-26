'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { frPages } from '../../content/fr-pages';

export default function FrSiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsToolsDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsToolsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Top header quick links (first 5 pages from frPages)
  const topQuickPages = frPages.slice(0, 5);

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-[#dddddd] dark:border-slate-800 transition-all duration-200" ref={menuRef}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-4">
        
        {/* Logo Brand (Heart logo in Rausch circle) */}
        <Link 
          href="/fr" 
          className="flex items-center gap-2 group transition-transform active:scale-95"
          aria-label="photoresizer.co.in Français Accueil"
        >
          <div className="w-9 h-9 rounded-full bg-[#ff385c] hover:bg-[#e00b41] flex items-center justify-center text-white shadow-sm transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#222222] dark:text-white flex items-center gap-1.5 font-['Airbnb_Cereal_VF',Circular,sans-serif]">
            photoresizer
            <span className="text-[8px] font-bold uppercase tracking-[0.32px] px-2 py-0.5 rounded-full bg-[#ff385c]/10 text-[#ff385c] dark:bg-[#ff385c]/20">
              FR
            </span>
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-['Airbnb_Cereal_VF',Circular,sans-serif]" aria-label="Navigation Principale">
          {topQuickPages.map((page, idx) => (
            <Link 
              key={page.slug}
              href={`/fr/${page.slug}`}
              className={`py-2 flex items-center gap-1.5 font-medium transition-colors ${
                idx === 0 
                  ? 'font-semibold text-[#222222] dark:text-white hover:text-[#ff385c]' 
                  : 'text-[#6a6a6a] dark:text-slate-400 hover:text-[#222222] dark:hover:text-white'
              }`}
            >
              <span className="truncate max-w-[140px]">{page.h1.split('—')[0].trim()}</span>
            </Link>
          ))}

          {/* Desktop "Plus" Dropdown Trigger */}
          {frPages.length > 5 && (
            <div className="relative">
              <button
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                aria-expanded={isToolsDropdownOpen}
                className="py-2 px-3 rounded-full hover:bg-[#f7f7f7] dark:hover:bg-slate-800 font-semibold text-xs text-[#222222] dark:text-white flex items-center gap-1 transition-colors"
              >
                <span>Plus ({frPages.length - 5})</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isToolsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {/* Dropdown Overlay listing remaining pages */}
              {isToolsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl border border-[#dddddd] dark:border-slate-800 shadow-[0_6px_20px_rgba(0,0,0,0.15)] p-3 z-50 text-left max-h-[60vh] overflow-y-auto">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff385c] mb-2 px-2">Autres outils</div>
                  {frPages.slice(5).map((page) => (
                    <Link
                      key={page.slug}
                      href={`/fr/${page.slug}`}
                      onClick={() => setIsToolsDropdownOpen(false)}
                      className="block p-2 rounded-xl hover:bg-[#f7f7f7] dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="text-xs font-bold text-[#222222] dark:text-white line-clamp-1">{page.h1}</div>
                      <div className="text-[11px] text-[#6a6a6a] dark:text-slate-400 line-clamp-1">{page.metaDescription}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>

        {/* ── Right Utilities & Interactive Airbnb Hamburger Menu ── */}
        <div className="flex items-center gap-3 relative">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#dddddd] dark:border-slate-700 text-xs font-semibold text-[#222222] dark:text-slate-200">
            <span>🌐</span>
            <span>Français</span>
          </div>

          {/* ── Airbnb Hamburger Menu Pill Button ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu d'outils FR"
            className="flex items-center gap-3 p-2 pl-3 rounded-full border border-[#dddddd] dark:border-slate-700 bg-white dark:bg-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.18)] transition-all cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4 text-[#222222] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <div className="w-7 h-7 rounded-full bg-[#ff385c] text-white flex items-center justify-center text-xs font-bold shadow-sm">
              FR
            </div>
          </button>

          {/* ── Interactive Hamburger Dropdown Sheet ── */}
          {isMenuOpen && (
            <>
              {/* Overlay for mobile focus */}
              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-[1px] sm:hidden z-40"
                onClick={() => setIsMenuOpen(false)}
              />

              <div className="absolute top-full right-0 mt-3 w-80 sm:w-96 bg-white dark:bg-slate-900 rounded-3xl border border-[#dddddd] dark:border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.18)] p-5 z-50 text-left max-h-[80vh] overflow-y-auto">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff385c]">
                    Outils Français
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#ff385c]/10 text-[#ff385c]">
                    {frPages.length} Pages Disponibles
                  </span>
                </div>

                {/* Dynamic list of all pages in frPages */}
                <div className="space-y-1">
                  {frPages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/fr/${page.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block p-2.5 rounded-2xl hover:bg-[#f7f7f7] dark:hover:bg-slate-800 transition-colors group"
                    >
                      <div className="text-xs font-bold text-[#222222] dark:text-white group-hover:text-[#ff385c] transition-colors line-clamp-1">
                        {page.h1}
                      </div>
                      <div className="text-[11px] text-[#6a6a6a] dark:text-slate-400 line-clamp-1">
                        {page.metaDescription}
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </>
          )}

        </div>

      </div>

      {/* ── Mobile Navigation Strip ── */}
      <div className="lg:hidden flex overflow-x-auto gap-2 px-4 py-2.5 border-t border-[#dddddd] dark:border-slate-800 text-xs font-semibold text-[#6a6a6a]">
        {topQuickPages.map((page, idx) => (
          <Link 
            key={page.slug}
            href={`/fr/${page.slug}`}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-full transition-colors ${
              idx === 0 
                ? 'bg-[#ff385c] text-white' 
                : 'bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-white'
            }`}
          >
            {page.h1.split('—')[0].trim()}
          </Link>
        ))}
      </div>
    </header>
  );
}

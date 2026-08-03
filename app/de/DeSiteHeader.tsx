'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, ChevronDown, RefreshCw, Wand2, Scissors, Sparkles, Image as ImageIcon, ShieldCheck } from 'lucide-react';
import { dePages } from '../../content/de-pages';

export default function DeSiteHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Featured main tools
  const featuredTools = [
    { title: "Foto Verkleinern", href: "/de/foto-verkleinern", icon: RefreshCw },
    { title: "Bild Komprimieren", href: "/de/bild-komprimieren", icon: Sparkles },
    { title: "Hintergrund Entfernen", href: "/de/hintergrund-entfernen", icon: Wand2 },
    { title: "Passfoto Ersteller", href: "/de/passfoto-ersteller", icon: Scissors },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 dark:bg-[#121212]/95 border-b border-[#dddddd] dark:border-slate-800 font-['Airbnb_Cereal_VF',Circular,sans-serif] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link 
              href="/de" 
              className="flex items-center gap-2.5 group transition-transform active:scale-95"
              aria-label="photoresizer.co.in Startseite"
            >
              <div className="w-9 h-9 rounded-full bg-[#ff385c] hover:bg-[#e00b41] flex items-center justify-center text-white shadow-sm transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-[#222222] dark:text-white flex items-center gap-1.5">
                photoresizer
                <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#ff385c]/10 text-[#ff385c] dark:bg-[#ff385c]/20">
                  DE
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              href="/de" 
              className="text-sm font-semibold text-[#222222] hover:text-[#ff385c] dark:text-slate-200 dark:hover:text-[#ff385c] transition-colors"
            >
              Startseite
            </Link>

            {/* Featured quick links */}
            {featuredTools.slice(0, 3).map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="text-sm font-medium text-[#6a6a6a] hover:text-[#222222] dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                {tool.title}
              </Link>
            ))}

            {/* Dropdown Menu for all tools */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-[#222222] hover:text-[#ff385c] dark:text-slate-200 dark:hover:text-[#ff385c] transition-colors py-2"
                aria-expanded={isToolsOpen}
              >
                <span>Alle Werkzeuge</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isToolsOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl border border-[#dddddd] dark:border-slate-800 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#ff385c] px-3 py-1.5">
                    Werkzeuge Übersicht
                  </div>
                  <div className="space-y-1">
                    {dePages.map((page) => (
                      <Link
                        key={page.slug}
                        href={`/de/${page.slug}`}
                        onClick={() => setIsToolsOpen(false)}
                        className="block p-2.5 rounded-xl hover:bg-[#f7f7f7] dark:hover:bg-slate-800 transition-colors group"
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
              )}
            </div>

            <Link 
              href="/de/anleitung" 
              className="text-sm font-medium text-[#6a6a6a] hover:text-[#222222] dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Anleitung
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full border border-[#dddddd] dark:border-slate-700 text-[#222222] dark:text-slate-300 hover:bg-[#f7f7f7] dark:hover:bg-slate-800"
              aria-label="Dunkelmodus umschalten"
            >
              {mounted && theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#dddddd] dark:border-slate-700 text-xs font-semibold text-[#222222] dark:text-slate-200">
              <span>🌐</span>
              <span>DE</span>
            </div>

            <Link
              href="/de/foto-verkleinern"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-[#ff385c] hover:bg-[#e00b41] rounded-full shadow-sm"
            >
              Editor Starten
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-[#222222] dark:text-slate-300 hover:bg-[#f7f7f7] dark:hover:bg-slate-800"
              aria-label="Dunkelmodus umschalten"
            >
              {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-2 p-2 pl-3 rounded-full border border-[#dddddd] dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm active:scale-95 transition-all"
              aria-label="Menü umschalten"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="w-6 h-6 rounded-full bg-[#ff385c] text-white flex items-center justify-center text-[10px] font-bold">
                DE
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#121212] border-b border-[#dddddd] dark:border-slate-800 px-4 py-5 space-y-4 max-h-[80vh] overflow-y-auto">
          <Link
            href="/de"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-bold text-[#222222] dark:text-white"
          >
            Startseite DE
          </Link>

          <div className="pt-3 border-t border-[#dddddd] dark:border-slate-800">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#ff385c] mb-3">
              Beliebte Werkzeuge
            </p>
            <div className="grid grid-cols-2 gap-2">
              {featuredTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f7f7f7] dark:bg-slate-800/60 text-xs font-bold text-[#222222] dark:text-slate-200 hover:text-[#ff385c]"
                  >
                    <Icon size={14} className="text-[#ff385c]" />
                    <span className="truncate">{tool.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[#dddddd] dark:border-slate-800">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#6a6a6a] dark:text-slate-400 mb-3">
              Alle Deutsche Seiten
            </p>
            <div className="space-y-1">
              {dePages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/de/${page.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-xs font-medium text-[#222222] dark:text-slate-300 hover:text-[#ff385c] truncate"
                >
                  {page.h1}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#dddddd] dark:border-slate-800 flex justify-between items-center text-xs font-semibold text-[#6a6a6a]">
            <span>🌐 Deutschland (DE)</span>
            <Link
              href="/de/datenschutz"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:underline"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

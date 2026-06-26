'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Image as ImageIcon, Menu, X, Scissors, RefreshCw, Wand2 } from 'lucide-react';

export default function DeSiteHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/de" className="flex items-center gap-2 group">
              
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                photoresizer<span className="text-lime-600 dark:text-lime-400">ai</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/de" className="text-sm font-medium text-slate-600 hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400 transition-colors">
              Startseite
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400 transition-colors flex items-center gap-1">
                Werkzeuge
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 grid grid-cols-2 gap-2 max-h-[70vh] overflow-y-auto">
                  <Link href="/de/foto-verkleinern" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20 hover:bg-lime-100 dark:hover:bg-lime-900/40 transition-colors">
                    <RefreshCw size={14} /> Foto Verkleinern
                  </Link>
                  <Link href="/de/hintergrund-entfernen" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20 hover:bg-lime-100 dark:hover:bg-lime-900/40 transition-colors">
                    <Wand2 size={14} /> BG Entfernen
                  </Link>
                  <Link href="/de/passfoto-ersteller" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20 hover:bg-lime-100 dark:hover:bg-lime-900/40 transition-colors">
                    <Scissors size={14} /> Passfoto Ersteller
                  </Link>
                  <Link href="/de/bild-verkleinern" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Bild Verkleinern</Link>
                  <Link href="/de/bildgroesse-aendern" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Bildgröße Ändern</Link>
                  <Link href="/de/foto-groesse-aendern" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Foto Größe Ändern</Link>
                  <Link href="/de/bild-komprimieren" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Bild Komprimieren</Link>
                  <Link href="/de/bildgroesse-reduzieren" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Größe Reduzieren</Link>
                  <Link href="/de/foto-resizer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Foto Resizer</Link>
                  <Link href="/de/bild-resizer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Bild Resizer</Link>
                  <Link href="/de/bild-online-verkleinern" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Online Verkleinern</Link>
                  <Link href="/de/foto-online-verkleinern" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Foto Online Verkleinern</Link>
                  <Link href="/de/bearbeiten" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Bild Bearbeiten</Link>
                  <Link href="/de/zuschneiden" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Foto Zuschneiden</Link>
                  <Link href="/de/bild-freistellen" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Bild Freistellen</Link>
                  <Link href="/de/foto" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Foto</Link>
                  <Link href="/de/bild" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Bild</Link>
                </div>
              </div>
            </div>
            <Link href="/de/anleitung" className="text-sm font-medium text-slate-600 hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400 transition-colors">
              Anleitung
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <Link 
              href="/de"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-lime-600 rounded-full shadow-md shadow-lime-500/20 hover:bg-lime-700 hover:shadow-lime-500/40 transition-all active:scale-95"
            >
              Editor Starten
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-slate-600 dark:text-slate-400"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[80vh] overflow-y-auto border-b border-slate-200 dark:border-slate-800' : 'max-h-0'}`}>
        <div className="px-4 py-6 space-y-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
          <Link href="/de" className="block text-base font-medium text-slate-800 dark:text-slate-200 hover:text-lime-600">Startseite</Link>
          
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Beliebte Werkzeuge</p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/de/foto-verkleinern" className="block py-2 text-sm font-medium text-lime-600 dark:text-lime-400">Foto Verkleinern</Link>
              <Link href="/de/hintergrund-entfernen" className="block py-2 text-sm font-medium text-lime-600 dark:text-lime-400">BG Entfernen</Link>
              <Link href="/de/passfoto-ersteller" className="block py-2 text-sm font-medium text-lime-600 dark:text-lime-400">Passfoto Ersteller</Link>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Alle Werkzeuge</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              <Link href="/de/bild-verkleinern" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Bild Verkleinern</Link>
              <Link href="/de/bildgroesse-aendern" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Bildgröße Ändern</Link>
              <Link href="/de/foto-groesse-aendern" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Foto Größe Ändern</Link>
              <Link href="/de/bild-komprimieren" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Bild Komprimieren</Link>
              <Link href="/de/bildgroesse-reduzieren" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Größe Reduzieren</Link>
              <Link href="/de/foto-resizer" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Foto Resizer</Link>
              <Link href="/de/bild-resizer" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Bild Resizer</Link>
              <Link href="/de/bild-online-verkleinern" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Online Verkleinern</Link>
              <Link href="/de/foto-online-verkleinern" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Foto Online</Link>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/de/anleitung" className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-lime-600">Anleitung</Link>
            <Link href="/de/kontakt" className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-lime-600">Kontakt</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

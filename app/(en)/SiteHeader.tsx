'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Image as ImageIcon, Menu, X, Scissors, RefreshCw, Wand2 } from 'lucide-react';

export default function SiteHeader() {
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
            <Link href="/" className="flex items-center gap-2 group">
             
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                photoresizer<span className="text-lime-600 dark:text-lime-400">ai</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400 transition-colors flex items-center gap-1">
                Tools
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 grid grid-cols-2 gap-2 max-h-[70vh] overflow-y-auto">
                  <Link href="/photo-resizer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20 hover:bg-lime-100 dark:hover:bg-lime-900/40 transition-colors">
                    <RefreshCw size={14} /> Photo Resizer
                  </Link>
                  <Link href="/free-background-remover" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20 hover:bg-lime-100 dark:hover:bg-lime-900/40 transition-colors">
                    <Wand2 size={14} /> Free BG Remover
                  </Link>
                  <Link href="/passport-photo-maker" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20 hover:bg-lime-100 dark:hover:bg-lime-900/40 transition-colors">
                    <Scissors size={14} /> Passport Maker
                  </Link>
                  <Link href="/image-resizer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Image Resizer</Link>
                  <Link href="/resize-image-in-kb" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resize Image in KB</Link>
                  <Link href="/resize-image-to-20kb" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resize to 20KB</Link>
                  <Link href="/resize-image-to-50kb" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resize to 50KB</Link>
                  <Link href="/resize-image-to-100kb" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resize to 100KB</Link>
                  <Link href="/resize-image-to-200kb" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resize to 200KB</Link>
                  <Link href="/resize-jpg" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resize JPG</Link>
                  <Link href="/resize-jpeg" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resize JPEG</Link>
                  <Link href="/gif-resizer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">GIF Resizer</Link>
                  <Link href="/animated-gif-resizer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Animated GIF</Link>
                  <Link href="/resize-signature" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resize Signature</Link>
                  <Link href="/passport-photo-size-maker" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Passport Size Maker</Link>
                  <Link href="/pan-card-photo-resizer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">PAN Card Photo</Link>
                  <Link href="/change-image-size-in-cm" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Size in CM</Link>
                  <Link href="/increase-image-size" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Increase Size</Link>
                  <Link href="/reduce-image-size" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Reduce Size</Link>
                  <Link href="/image-resizer-mb" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">Resizer in MB</Link>
                </div>
              </div>
            </div>
            <Link href="/how-to-use" className="text-sm font-medium text-slate-600 hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400 transition-colors">
              How to Use
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
              href="/"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-lime-600 rounded-full shadow-md shadow-lime-500/20 hover:bg-lime-700 hover:shadow-lime-500/40 transition-all active:scale-95"
            >
              Launch Editor
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
          <Link href="/" className="block text-base font-medium text-slate-800 dark:text-slate-200 hover:text-lime-600">Home</Link>
          
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Featured Tools</p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/photo-resizer" className="block py-2 text-sm font-medium text-lime-600 dark:text-lime-400">Photo Resizer</Link>
              <Link href="/free-background-remover" className="block py-2 text-sm font-medium text-lime-600 dark:text-lime-400">Free BG Remover</Link>
              <Link href="/passport-photo-maker" className="block py-2 text-sm font-medium text-lime-600 dark:text-lime-400">Passport Maker</Link>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">All Tools</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              <Link href="/image-resizer" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Image Resizer</Link>
              <Link href="/resize-image-in-kb" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Resize in KB</Link>
              <Link href="/resize-image-to-20kb" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">To 20KB</Link>
              <Link href="/resize-image-to-50kb" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">To 50KB</Link>
              <Link href="/resize-image-to-100kb" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">To 100KB</Link>
              <Link href="/resize-image-to-200kb" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">To 200KB</Link>
              <Link href="/resize-jpg" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Resize JPG</Link>
              <Link href="/resize-jpeg" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Resize JPEG</Link>
              <Link href="/gif-resizer" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">GIF Resizer</Link>
              <Link href="/animated-gif-resizer" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Animated GIF</Link>
              <Link href="/resize-signature" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Resize Signature</Link>
              <Link href="/passport-photo-size-maker" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Passport Size</Link>
              <Link href="/pan-card-photo-resizer" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">PAN Card Photo</Link>
              <Link href="/change-image-size-in-cm" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Size in CM</Link>
              <Link href="/increase-image-size" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Increase Size</Link>
              <Link href="/reduce-image-size" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Reduce Size</Link>
              <Link href="/image-resizer-mb" className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-lime-600">Resizer in MB</Link>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/how-to-use" className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-lime-600">How to Use</Link>
            <Link href="/contact" className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-lime-600">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

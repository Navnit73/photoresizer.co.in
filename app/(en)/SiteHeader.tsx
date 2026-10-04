'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sliders, 
  Sparkles, 
  Scissors, 
  GraduationCap,
  Minimize2
} from 'lucide-react';
import { examCategories } from '@/lib/navigation-data';

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isExamsOpen, setIsExamsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFFFF] border-b border-[#F4F4F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center group-hover:bg-[#DCFCE7] transition-colors p-1.5">
                <img src="/favicon.svg" alt="PhotoResizer Logo" className="w-full h-full object-contain" width={24} height={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#18181B]">
                photoresizer<span className="text-[#16A34A]">.co.in</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-[#52525B] hover:text-[#16A34A] transition-colors"
              >
                Home
              </Link>

              {/* Tools Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsToolsOpen(true)}
                onMouseLeave={() => setIsToolsOpen(false)}
              >
                <button 
                  className="text-sm font-medium text-[#52525B] hover:text-[#16A34A] transition-colors flex items-center gap-1.5 py-2"
                  onClick={() => setIsToolsOpen(!isToolsOpen)}
                >
                  <span>Tools</span>
                  <ChevronDown size={14} className={`transition-transform duration-150 ${isToolsOpen ? 'rotate-180 text-[#16A34A]' : ''}`} />
                </button>

                {isToolsOpen && (
                  <div className="absolute top-full left-0 pt-1 w-[560px] z-50">
                    <div className="bg-[#FFFFFF] rounded-2xl border border-[#E4E4E7] shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-5">
                      <div className="grid grid-cols-2 gap-4">
                        
                        {/* Core Utilities */}
                        <div>
                          <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider mb-2.5">
                            Core Tools
                          </p>
                          <div className="space-y-1">
                            <Link 
                              href="/photo-resizer" 
                              onClick={() => setIsToolsOpen(false)}
                              className="flex items-center gap-2.5 p-2 rounded-xl text-sm font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                            >
                              <Sliders size={15} className="text-[#16A34A]" />
                              <span>Photo Resizer</span>
                            </Link>
                            <Link 
                              href="/compress-image" 
                              onClick={() => setIsToolsOpen(false)}
                              className="flex items-center gap-2.5 p-2 rounded-xl text-sm font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                            >
                              <Minimize2 size={15} className="text-[#16A34A]" />
                              <span>Photo Compressor</span>
                            </Link>
                            <Link 
                              href="/free-background-remover" 
                              onClick={() => setIsToolsOpen(false)}
                              className="flex items-center gap-2.5 p-2 rounded-xl text-sm font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                            >
                              <Sparkles size={15} className="text-[#16A34A]" />
                              <span>Free BG Remover</span>
                            </Link>
                            <Link 
                              href="/passport-photo-maker" 
                              onClick={() => setIsToolsOpen(false)}
                              className="flex items-center gap-2.5 p-2 rounded-xl text-sm font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                            >
                              <Scissors size={15} className="text-[#16A34A]" />
                              <span>Passport Photo Maker</span>
                            </Link>
                          </div>
                        </div>

                        {/* Government & Presets */}
                        <div>
                          <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider mb-2.5">
                            Popular Exam Presets
                          </p>
                          <div className="space-y-1">
                            <Link 
                              href="/ssc-photo-resizer" 
                              onClick={() => setIsToolsOpen(false)}
                              className="flex items-center justify-between p-2 rounded-xl text-sm text-[#52525B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                            >
                              <span>SSC Photo Resizer</span>
                              <span className="text-[10px] bg-[#F4F4F5] text-[#71717A] px-2 py-0.5 rounded-md font-medium">20-50KB</span>
                            </Link>
                            <Link 
                              href="/upsc-photo-size" 
                              onClick={() => setIsToolsOpen(false)}
                              className="flex items-center justify-between p-2 rounded-xl text-sm text-[#52525B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                            >
                              <span>UPSC Photo &amp; Sign</span>
                              <span className="text-[10px] bg-[#F4F4F5] text-[#71717A] px-2 py-0.5 rounded-md font-medium">OTR</span>
                            </Link>
                            <Link 
                              href="/signature-resize-ibps" 
                              onClick={() => setIsToolsOpen(false)}
                              className="flex items-center justify-between p-2 rounded-xl text-sm text-[#52525B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                            >
                              <span>IBPS Signature</span>
                              <span className="text-[10px] bg-[#F4F4F5] text-[#71717A] px-2 py-0.5 rounded-md font-medium">10-20KB</span>
                            </Link>
                            <Link 
                              href="/reduce-photo-size-50kb" 
                              onClick={() => setIsToolsOpen(false)}
                              className="flex items-center justify-between p-2 rounded-xl text-sm text-[#52525B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                            >
                              <span>Reduce to 50KB</span>
                              <span className="text-[10px] bg-[#F4F4F5] text-[#71717A] px-2 py-0.5 rounded-md font-medium">JPG</span>
                            </Link>
                          </div>
                        </div>

                      </div>

                      <div className="mt-4 pt-3 border-t border-[#F4F4F5] flex items-center justify-between">
                        <span className="text-xs text-[#71717A]">40+ tools available</span>
                        <Link 
                          href="/tools" 
                          onClick={() => setIsToolsOpen(false)}
                          className="text-xs font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors"
                        >
                          Browse All Tools &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Exam Presets Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsExamsOpen(true)}
                onMouseLeave={() => setIsExamsOpen(false)}
              >
                <button 
                  className="text-sm font-medium text-[#52525B] hover:text-[#16A34A] transition-colors flex items-center gap-1.5 py-2"
                  onClick={() => setIsExamsOpen(!isExamsOpen)}
                >
                  <GraduationCap size={15} className="text-[#71717A]" />
                  <span>Exam Presets</span>
                  <ChevronDown size={14} className={`transition-transform duration-150 ${isExamsOpen ? 'rotate-180 text-[#16A34A]' : ''}`} />
                </button>

                {isExamsOpen && (
                  <div className="absolute top-full left-0 pt-1 w-64 z-50">
                    <div className="bg-[#FFFFFF] rounded-2xl border border-[#E4E4E7] shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-2">
                      {examCategories.map((exam) => (
                        <Link
                          key={exam.name}
                          href={exam.href}
                          onClick={() => setIsExamsOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-colors"
                        >
                          <span>{exam.name}</span>
                          <span className="text-[10px] bg-[#F4F4F5] text-[#71717A] px-1.5 py-0.5 rounded font-semibold">{exam.badge}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/how-to-use" 
                className="text-sm font-medium text-[#52525B] hover:text-[#16A34A] transition-colors"
              >
                How to Use
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium text-[#52525B] hover:text-[#16A34A] transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#16A34A] hover:bg-[#15803D] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors active:scale-[0.98]"
            >
              Launch Editor
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#52525B] hover:text-[#18181B] hover:bg-[#FAFAFA] rounded-xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E4E4E7] px-4 py-6 space-y-5 animate-in slide-in-from-top-2 duration-150">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#18181B]"
          >
            Home
          </Link>

          {/* Featured Tools */}
          <div className="pt-3 border-t border-[#F4F4F5]">
            <p className="text-xs font-semibold text-[#71717A] uppercase tracking-wider mb-2.5">
              Featured Tools
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link 
                href="/photo-resizer" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-[#FAFAFA] rounded-xl text-xs font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D]"
              >
                Photo Resizer
              </Link>
              <Link 
                href="/compress-image" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-[#FAFAFA] rounded-xl text-xs font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D]"
              >
                Photo Compressor
              </Link>
              <Link 
                href="/free-background-remover" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-[#FAFAFA] rounded-xl text-xs font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D]"
              >
                BG Remover
              </Link>
              <Link 
                href="/passport-photo-maker" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-[#FAFAFA] rounded-xl text-xs font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:text-[#15803D]"
              >
                Passport Maker
              </Link>
            </div>
          </div>

          {/* Exam Presets */}
          <div className="pt-3 border-t border-[#F4F4F5]">
            <p className="text-xs font-semibold text-[#71717A] uppercase tracking-wider mb-2.5">
              Govt Exam Presets
            </p>
            <div className="grid grid-cols-2 gap-2">
              {examCategories.map((exam) => (
                <Link
                  key={exam.name}
                  href={exam.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl border border-[#E4E4E7] text-xs font-medium text-[#18181B] hover:bg-[#F0FDF4] hover:border-[#BBF7D0]"
                >
                  {exam.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#F4F4F5] space-y-2">
            <Link 
              href="/tools" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#52525B] hover:text-[#16A34A]"
            >
              All Tools
            </Link>
            <Link 
              href="/how-to-use" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#52525B] hover:text-[#16A34A]"
            >
              How to Use
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#52525B] hover:text-[#16A34A]"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#52525B] hover:text-[#16A34A]"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2">
            <Link 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 text-sm font-medium text-[#FFFFFF] bg-[#16A34A] rounded-xl"
            >
              Launch Editor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

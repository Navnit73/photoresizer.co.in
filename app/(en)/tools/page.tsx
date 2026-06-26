import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { enPages } from '../../../content/en-pages';
import { Scissors, RefreshCw, Wand2, ArrowRight, Sparkles } from 'lucide-react';

export default function ToolsPage() {
  const validPages = enPages.filter(page => !['how-to-use', 'contact', 'terms', 'privacy'].includes(page.slug));

  const toolsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All Free Image Tools",
    "description": "Explore our complete collection of secure, browser-based image editing utilities. No downloads or sign-ups required.",
    "url": "https://photoresizer.co.in/tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": validPages.map((page, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://photoresizer.co.in/${page.slug}`
      }))
    }
  };

  return (
    <main className="w-full">
      <Script id="tools-collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }} />

      {/* ═══ Premium Hero Header ═══ */}
      <div className="hero-gradient-bg relative overflow-hidden">
        {/* Dot grid overlay */}
        <div className="hero-dots absolute inset-0 pointer-events-none" />

        {/* Floating decorative shapes */}
        <div className="absolute top-10 left-[6%] w-16 h-16 rounded-2xl bg-blue-500/10 dark:bg-blue-400/5 hero-float-1 blur-sm pointer-events-none" />
        <div className="absolute top-6 right-[10%] w-12 h-12 rounded-full bg-violet-500/10 dark:bg-violet-400/5 hero-float-2 blur-sm pointer-events-none" />
        <div className="absolute bottom-10 left-[18%] w-10 h-10 rounded-xl bg-emerald-500/8 dark:bg-emerald-400/5 hero-float-3 blur-sm pointer-events-none" />
        <div className="absolute bottom-8 right-[25%] w-14 h-14 rounded-2xl bg-amber-500/8 dark:bg-amber-400/5 hero-float-1 blur-sm pointer-events-none" />
        <div className="absolute top-20 left-[45%] w-8 h-8 rounded-full bg-pink-500/8 dark:bg-pink-400/5 hero-float-2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-14 md:py-20 text-center">
          {/* Badge */}
          <div className="hero-fade-in hero-fade-in-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm mx-auto">
            <Sparkles size={14} className="text-blue-500 dark:text-blue-400" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {validPages.length}+ Free Tools Available
            </span>
          </div>

          <h1 className="hero-fade-in hero-fade-in-delay-1 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5">
            <span className="text-slate-900 dark:text-white">All Free </span>
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              Image Tools
            </span>
          </h1>

          <p className="hero-fade-in hero-fade-in-delay-2 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4">
            Explore our complete collection of secure, browser-based image editing utilities. No downloads or sign-ups required.
          </p>

          {/* Trust indicators */}
          <div className="hero-fade-in hero-fade-in-delay-3 flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-white/[0.04] border border-white/60 dark:border-white/[0.08] backdrop-blur-sm text-xs font-medium text-slate-600 dark:text-slate-400">
              🔒 100% Private
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-white/[0.04] border border-white/60 dark:border-white/[0.08] backdrop-blur-sm text-xs font-medium text-slate-600 dark:text-slate-400">
              ⚡ Browser-Based
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-white/[0.04] border border-white/60 dark:border-white/[0.08] backdrop-blur-sm text-xs font-medium text-slate-600 dark:text-slate-400">
              ✨ No Sign-Up Needed
            </span>
          </div>
        </div>
      </div>

      {/* ═══ Tools Grid ═══ */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 -mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {validPages.map((page) => {
            const isPassport = page.showTool === 'passport-maker';
            const isBgRemover = page.showTool === 'bg-remover';
            const Icon = isPassport ? Scissors : (isBgRemover ? Wand2 : RefreshCw);

            // Tool-type specific accent
            const iconBg = isPassport
              ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
              : isBgRemover
              ? 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400'
              : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400';

            const hoverBorder = isPassport
              ? 'hover:border-amber-300 dark:hover:border-amber-700'
              : isBgRemover
              ? 'hover:border-violet-300 dark:hover:border-violet-700'
              : 'hover:border-blue-300 dark:hover:border-blue-700';

            const arrowColor = isPassport
              ? 'text-amber-600 dark:text-amber-400'
              : isBgRemover
              ? 'text-violet-600 dark:text-violet-400'
              : 'text-blue-600 dark:text-blue-400';

            return (
              <Link 
                key={page.slug} 
                href={`/${page.slug}`}
                className={`group flex flex-col p-6 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 ${hoverBorder} transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {page.h1}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 flex-1 line-clamp-3">
                  {page.metaDescription}
                </p>
                <div className={`mt-5 flex items-center gap-2 text-sm font-semibold ${arrowColor} group-hover:gap-3 transition-all`}>
                  Use Tool <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

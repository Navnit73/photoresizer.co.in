import React from 'react';
import Link from 'next/link';
import { SeoPage, Language } from '../../lib/types/seo';

export function Breadcrumb({ page, lang }: { page: SeoPage, lang: Language }) {
  const langPrefix = lang === 'en' ? '' : `${lang}`;
  
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/[0.04] border border-white/50 dark:border-white/[0.08] backdrop-blur-sm text-sm">
        <li className="inline-flex items-center">
          <Link 
            href={`/${langPrefix}`} 
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="w-3.5 h-3.5 text-slate-400/60 mx-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-700 dark:text-slate-300 font-semibold ml-1 truncate max-w-[250px] sm:max-w-none">
              {page.h1}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

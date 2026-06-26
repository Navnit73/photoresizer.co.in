import React from 'react';
import { SeoSection as SeoSectionType } from '../../lib/types/seo';

export function SeoSection({ section }: { section: SeoSectionType }) {
  return (
    <section className="py-8 border-b border-slate-200 dark:border-slate-800 last:border-0 group">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-3">
        <span className="w-1 h-7 bg-gradient-to-b from-blue-500 to-sky-500 rounded-full flex-shrink-0" />
        {section.heading}
      </h2>
      <div 
        className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-li:marker:text-blue-400"
        dangerouslySetInnerHTML={{ __html: section.content }} 
      />
    </section>
  );
}

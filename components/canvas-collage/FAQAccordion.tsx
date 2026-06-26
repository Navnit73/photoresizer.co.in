'use client';

import React, { useState } from 'react';
import { SeoPage } from '@/lib/types/seo';

export default function FAQAccordion({ faq }: { faq: SeoPage['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq || faq.length === 0) return null;

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-xl transition-colors ${
                isOpen 
                  ? 'bg-accent-muted/50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800' 
                  : 'bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700'
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-slate-900 dark:text-white pr-8">
                  {item.question}
                </span>
                <span className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              {isOpen && (
                <div className="px-6 pb-4">
                  <div 
                    className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { FAQItem } from '../../lib/types/seo';

export function FAQ({ faq }: { faq: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faq || faq.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
        Everything you need to know about this tool
      </p>
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faq.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-200 hover:border-blue-200 dark:hover:border-blue-800"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center p-5 md:p-6 text-left gap-4 group"
              aria-expanded={openIndex === idx}
            >
              <span className="font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center transition-all duration-300 ${
                  openIndex === idx
                    ? 'rotate-180 bg-blue-100 dark:bg-blue-900/30'
                    : ''
                }`}
              >
                <svg
                  className={`w-4 h-4 transition-colors ${
                    openIndex === idx
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-500'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

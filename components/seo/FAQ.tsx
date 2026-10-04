'use client';

import React, { useState } from 'react';
import { FAQItem } from '../../lib/types/seo';
import { ChevronDown } from 'lucide-react';

export function FAQ({ faq }: { faq: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faq || faq.length === 0) return null;

  return (
    <section className="py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-[#18181B] tracking-tight mb-1.5">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-[#71717A]">
          Answers to common questions about dimensions, file sizes, and compatibility.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faq.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FFFFFF] rounded-xl border border-[#E4E4E7] overflow-hidden transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center p-4 sm:p-5 text-left gap-4"
              aria-expanded={openIndex === idx}
            >
              <span className="font-medium text-[#18181B] text-sm sm:text-base">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center transition-transform duration-150 ${
                  openIndex === idx ? 'rotate-180 bg-[#F0FDF4] border-[#BBF7D0] text-[#16A34A]' : 'text-[#71717A]'
                }`}
              >
                <ChevronDown size={14} />
              </span>
            </button>
            
            {openIndex === idx && (
              <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#52525B] leading-relaxed border-t border-[#F4F4F5] pt-3">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

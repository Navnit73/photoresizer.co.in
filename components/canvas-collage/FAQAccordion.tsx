'use client';

import React, { useState } from 'react';
import { SeoPage } from '@/lib/types/seo';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ faq }: { faq: SeoPage['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq || faq.length === 0) return null;

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-[#18181B] mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="bg-[#FFFFFF] border border-[#E4E4E7] rounded-2xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-sm sm:text-base text-[#18181B] pr-4">
                  {item.question}
                </span>
                <span className={`text-[#71717A] transition-transform duration-150 ${isOpen ? 'rotate-180 text-[#16A34A]' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </button>
              
              {isOpen && (
                <div className="px-5 pb-4 border-t border-[#F4F4F5] pt-3">
                  <div 
                    className="text-[#52525B] text-xs sm:text-sm leading-relaxed"
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

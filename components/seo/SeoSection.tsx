import React from 'react';
import { SeoSection as SeoSectionType } from '../../lib/types/seo';

export function SeoSection({ section }: { section: SeoSectionType }) {
  return (
    <section className="py-6 border-b border-[#E4E4E7] last:border-0">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#18181B] mb-3 flex items-center gap-2.5">
        <span className="w-1.5 h-6 bg-[#16A34A] rounded-full flex-shrink-0" />
        <span>{section.heading}</span>
      </h2>
      <div 
        className="text-sm sm:text-base text-[#52525B] leading-[1.6] space-y-3 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-[#52525B] [&_strong]:text-[#18181B] [&_strong]:font-semibold [&_a]:text-[#16A34A] [&_a]:font-medium [&_a:hover]:underline"
        dangerouslySetInnerHTML={{ __html: section.content }} 
      />
    </section>
  );
}

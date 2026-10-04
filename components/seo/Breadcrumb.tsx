import React from 'react';
import Link from 'next/link';
import { SeoPage, Language } from '../../lib/types/seo';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb({ page }: { page: SeoPage; lang?: Language }) {
  const homeHref = '/';
  const isTools = page.slug === 'tools';

  return (
    <nav className="flex items-center text-xs text-[#71717A] mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-1.5 flex-wrap">
        <li className="inline-flex items-center">
          <Link 
            href={homeHref}
            className="text-[#52525B] hover:text-[#16A34A] transition-colors font-medium"
          >
            Home
          </Link>
        </li>
        {!isTools && (
          <li className="inline-flex items-center gap-1.5">
            <ChevronRight size={13} className="text-[#A1A1AA]" />
            <Link 
              href="/tools" 
              className="text-[#52525B] hover:text-[#16A34A] transition-colors font-medium"
            >
              Tools
            </Link>
          </li>
        )}
        <li className="inline-flex items-center gap-1.5">
          <ChevronRight size={13} className="text-[#A1A1AA]" />
          <span className="font-semibold text-[#18181B] truncate max-w-[280px] sm:max-w-none">
            {page.h1}
          </span>
        </li>
      </ol>
    </nav>
  );
}

"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function LangUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    
    let lang = 'en';
    if (pathname.startsWith('/fr')) lang = 'fr';
    else if (pathname.startsWith('/de')) lang = 'de';
    else if (pathname.startsWith('/es')) lang = 'es';
    
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}

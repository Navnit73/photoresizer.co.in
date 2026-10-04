"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function LangUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    
    let lang = 'en-IN';
    if (pathname.startsWith('/hi')) lang = 'hi';
    
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}


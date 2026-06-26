'use client';

import { useState, useEffect } from 'react';

export default function StickyToolNav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['collage-maker', 'poster-splitter'];
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on nav height and visual preference
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of sticky nav or header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3 mb-8 px-4 flex justify-center gap-2 sm:gap-6 overflow-x-auto">
      <button
        onClick={() => scrollTo('collage-maker')}
        className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          activeId === 'collage-maker'
            ? 'bg-accent-main text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`}
      >
        Collage Maker
      </button>
      <button
        onClick={() => scrollTo('poster-splitter')}
        className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          activeId === 'poster-splitter'
            ? 'bg-accent-main text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`}
      >
        Print on Multiple Pages
      </button>

    </div>
  );
}

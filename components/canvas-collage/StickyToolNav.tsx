'use client';

import { useState, useEffect } from 'react';

export default function StickyToolNav() {
  const [activeId, setActiveId] = useState('collage-maker');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['collage-maker', 'poster-splitter'];
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
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
      const offset = 80;
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
    <div className="sticky top-16 z-40 bg-[#FFFFFF] border-b border-[#E4E4E7] py-2.5 mb-6 px-4 flex justify-center gap-2 sm:gap-4">
      <button
        type="button"
        onClick={() => scrollTo('collage-maker')}
        className={`whitespace-nowrap px-4 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
          activeId === 'collage-maker'
            ? 'bg-[#16A34A] text-white'
            : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#FAFAFA]'
        }`}
      >
        Collage Maker
      </button>
      <button
        type="button"
        onClick={() => scrollTo('poster-splitter')}
        className={`whitespace-nowrap px-4 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
          activeId === 'poster-splitter'
            ? 'bg-[#16A34A] text-white'
            : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#FAFAFA]'
        }`}
      >
        Poster Splitter
      </button>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

type AdBannerProps = {
  dataAdSlot?: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  type?: 'responsive' | 'fixed' | 'sticky-bottom' | 'in-tool' | 'sidebar';
  className?: string;
};

export function AdBanner({
  dataAdSlot,
  dataAdFormat = 'auto',
  dataFullWidthResponsive = true,
  type = 'responsive',
  className = ''
}: AdBannerProps) {
  const [shouldLoad, setShouldLoad] = useState(type === 'sticky-bottom');
  const [isDismissed, setIsDismissed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPushed = useRef(false);

  useEffect(() => {
    if (type === 'sticky-bottom') return;

    let observer: IntersectionObserver | null = null;
    
    if (containerRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (observer && containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          }
        });
      }, {
        rootMargin: '300px',
        threshold: 0
      });
      
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [type]);

  useEffect(() => {
    if (shouldLoad && !isPushed.current && !isDismissed) {
      isPushed.current = true;
      const pushAd = () => {
        try {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error('AdSense Error:', error);
        }
      };

      if (typeof window !== 'undefined') {
        const idleCallback = (window as any).requestIdleCallback || ((cb: Function) => setTimeout(cb, 200));
        idleCallback(pushAd);
      } else {
        setTimeout(pushAd, 200);
      }
    }
  }, [shouldLoad, isDismissed]);

  if (isDismissed) return null;

  const slotId = dataAdSlot || '9132763063';

  // ── Sticky Bottom Banner Format ──
  if (type === 'sticky-bottom') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300">
        <div className="max-w-[1280px] mx-auto relative px-4 py-2 flex flex-col items-center justify-center min-h-[60px] sm:min-h-[90px]">
          {/* Close Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute -top-3 right-3 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white p-1 rounded-full shadow-md text-xs transition-transform active:scale-95 flex items-center justify-center z-10"
            title="Close Advertisement"
            aria-label="Close Advertisement"
          >
            <X size={14} />
          </button>
          
          <span className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold mb-0.5">
            Advertisement
          </span>
          
          <div ref={containerRef} className="w-full flex justify-center items-center overflow-hidden">
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: '100%', maxWidth: '970px', maxHeight: '90px' }}
              data-ad-client="ca-pub-2980455227951378"
              data-ad-slot={slotId}
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </div>
    );
  }

  // ── In-Tool Compact Format ──
  if (type === 'in-tool') {
    return (
      <div 
        ref={containerRef} 
        className={`w-full block text-center my-3 p-3 bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 rounded-xl shadow-xs min-h-[120px] ${className}`}
      >
        <span className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold block mb-1">
          Advertisement
        </span>
        {shouldLoad && (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%' }}
            data-ad-client="ca-pub-2980455227951378"
            data-ad-slot={slotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        )}
      </div>
    );
  }

  // ── Sidebar Format ──
  if (type === 'sidebar') {
    return (
      <div 
        ref={containerRef} 
        className={`w-[300px] min-h-[600px] hidden lg:block sticky top-4 p-2 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 rounded-2xl ${className}`}
      >
        <span className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold block mb-1 text-center">
          Advertisement
        </span>
        {shouldLoad && (
          <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: '300px', height: '600px' }}
            data-ad-client="ca-pub-2980455227951378"
            data-ad-slot={slotId}
          />
        )}
      </div>
    );
  }

  // ── Standard Responsive or Fixed Banner ──
  return (
    <div 
      ref={containerRef} 
      className={`w-full block text-center py-4 min-h-[90px] sm:min-h-[110px] ${className}`}
    >
      <span className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold block mb-1">
        Advertisement
      </span>
      {shouldLoad && (
        <ins
          className="adsbygoogle"
          style={type === 'fixed' ? { display: 'inline-block', width: '728px', height: '90px' } : { display: 'block', width: '100%' }}
          data-ad-client="ca-pub-2980455227951378"
          data-ad-slot={slotId}
          {...(type === 'responsive' ? {
            'data-ad-format': dataAdFormat,
            'data-full-width-responsive': dataFullWidthResponsive.toString()
          } : {})}
        />
      )}
    </div>
  );
}


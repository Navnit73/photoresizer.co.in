'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

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
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error('AdSense Error:', error);
        }
      };

      if (typeof window !== 'undefined') {
        if (typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(pushAd);
        } else {
          setTimeout(pushAd, 200);
        }
      } else {
        setTimeout(pushAd, 200);
      }
    }
  }, [shouldLoad, isDismissed]);

  if (isDismissed) return null;

  const slotId = dataAdSlot || '9132763063';

  // Sticky Bottom Banner Format
  if (type === 'sticky-bottom') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#FFFFFF] border-t border-[#E4E4E7] shadow-lg" style={{ contain: 'layout style' }}>
        <div className="max-w-[1280px] mx-auto relative px-4 py-2 flex flex-col items-center justify-center min-h-[60px] sm:min-h-[90px]">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute -top-3 right-3 bg-[#18181B] text-white hover:bg-black p-1 rounded-full shadow-md text-xs transition-transform active:scale-95 flex items-center justify-center z-10"
            title="Close Advertisement"
            aria-label="Close Advertisement"
          >
            <X size={14} />
          </button>
          
          <span className="text-[9px] uppercase tracking-widest text-[#71717A] font-semibold mb-0.5">
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

  // In-Tool Compact Format
  if (type === 'in-tool') {
    return (
      <div 
        ref={containerRef} 
        className={`w-full block text-center my-3 p-3 bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl min-h-[120px] overflow-hidden ${className}`}
        style={{ contain: 'layout style paint' }}
      >
        <span className="text-[9px] uppercase tracking-widest text-[#71717A] font-semibold block mb-1">
          Advertisement
        </span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client="ca-pub-2980455227951378"
          data-ad-slot={slotId}
          data-ad-format={dataAdFormat}
          data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
        />
      </div>
    );
  }

  // Sidebar Format
  if (type === 'sidebar') {
    return (
      <div 
        ref={containerRef} 
        className={`w-[300px] min-h-[600px] hidden lg:block sticky top-4 p-2 bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl overflow-hidden ${className}`}
        style={{ contain: 'layout style paint' }}
      >
        <span className="text-[9px] uppercase tracking-widest text-[#71717A] font-semibold block mb-1 text-center">
          Advertisement
        </span>
        <ins
          className="adsbygoogle"
          style={{ display: 'inline-block', width: '300px', height: '600px' }}
          data-ad-client="ca-pub-2980455227951378"
          data-ad-slot={slotId}
        />
      </div>
    );
  }

  // Standard Responsive or Fixed Leaderboard Banner
  return (
    <div 
      ref={containerRef} 
      className={`w-full block text-center py-1.5 sm:py-2 min-h-[65px] sm:min-h-[105px] overflow-hidden ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      <span className="text-[9px] uppercase tracking-widest text-[#71717A] font-semibold block mb-1">
        Advertisement
      </span>
      <div className="w-full flex justify-center items-center overflow-hidden">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '50px', maxHeight: '100px' }}
          data-ad-client="ca-pub-2980455227951378"
          data-ad-slot={slotId}
          data-ad-format={dataAdFormat}
          data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
        />
      </div>
    </div>
  );
}

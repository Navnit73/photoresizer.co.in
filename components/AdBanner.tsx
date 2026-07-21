'use client';

import { useEffect, useRef } from 'react';

type AdBannerProps = {
  dataAdSlot?: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  type?: 'responsive' | 'fixed';
};

export function AdBanner({
  dataAdSlot,
  dataAdFormat = 'auto',
  dataFullWidthResponsive = true,
  type = 'responsive'
}: AdBannerProps) {
  const isLoaded = useRef(false);
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (isLoaded.current) return;
    
    let observer: IntersectionObserver | null = null;
    
    if (insRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded.current) {
            // Check if element has width to avoid AdSense TagError: No slot size for availableWidth=0
            if (insRef.current && insRef.current.offsetWidth > 0) {
              try {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                isLoaded.current = true;
                if (observer && insRef.current) {
                  observer.unobserve(insRef.current);
                }
              } catch (error) {
                console.error('AdSense Error:', error);
              }
            }
          }
        });
      }, {
        rootMargin: '200px', // Load slightly before it comes into view
        threshold: 0
      });
      
      observer.observe(insRef.current);
    }
    
    return () => {
      if (observer && insRef.current) {
        observer.unobserve(insRef.current);
      }
    };
  }, []);

  const slotId = dataAdSlot || (type === 'fixed' ? '9132763063' : '7146625600');
  
  return (
    <div className="w-full flex justify-center py-4 overflow-hidden min-h-[90px]">
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={type === 'fixed' ? { display: 'inline-block', width: '728px', height: '90px' } : { display: 'block', width: '100%' }}
        data-ad-client="ca-pub-2980455227951378"
        data-ad-slot={slotId}
        {...(type === 'responsive' ? {
          'data-ad-format': dataAdFormat,
          'data-full-width-responsive': dataFullWidthResponsive.toString()
        } : {})}
      />
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPushed = useRef(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    
    if (containerRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Check if element is intersecting
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (observer && containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          }
        });
      }, {
        rootMargin: '200px',
        threshold: 0
      });
      
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (shouldLoad && !isPushed.current) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isPushed.current = true;
      } catch (error) {
        console.error('AdSense Error:', error);
      }
    }
  }, [shouldLoad]);

  const slotId = dataAdSlot || (type === 'fixed' ? '9132763063' : '9132763063');
  
  return (
    <div ref={containerRef} className="w-full block text-center py-4 min-h-[90px]">
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

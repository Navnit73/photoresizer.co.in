'use client';

import { useEffect, useRef, useState } from 'react';
import { AD_CLIENT, AD_PLACEMENTS, type AdPlacement } from '@/lib/ads-config';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
    __adsBlocked?: boolean;
  }
}

type AdBannerProps = {
  placement: AdPlacement;
  className?: string;
};

/**
 * Policy-safe, lazy-loaded AdSense unit.
 *
 * - Requests the ad only when the slot is near the viewport (better viewability = higher RPM).
 * - Reserves height up front to avoid layout shift.
 * - Never clips the creative (clipping ads violates AdSense policy and lowers fill).
 * - Collapses itself when unfilled or blocked, so users never see empty boxes.
 */
export function AdBanner({ placement, className = '' }: AdBannerProps) {
  const config = AD_PLACEMENTS[placement];
  const containerRef = useRef<HTMLElement>(null);
  const insRef = useRef<HTMLModElement>(null);
  const isPushed = useRef(false);
  const [collapsed, setCollapsed] = useState(false);

  // Lazy-load: request the ad once the slot is within ~1 viewport of the screen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const requestAd = () => {
      if (isPushed.current) return;
      if (window.__adsBlocked) {
        setCollapsed(true);
        return;
      }
      isPushed.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense Error:', error);
      }
    };

    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(requestAd, { timeout: 1000 });
      } else {
        setTimeout(requestAd, 100);
      }
    };

    if (typeof IntersectionObserver === 'undefined') {
      schedule();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          schedule();
        }
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Collapse when AdSense reports no fill, or when the ad script is blocked.
  useEffect(() => {
    const ins = insRef.current;
    if (!ins) return;

    const mutationObserver = new MutationObserver(() => {
      if (ins.getAttribute('data-ad-status') === 'unfilled') setCollapsed(true);
    });
    mutationObserver.observe(ins, { attributes: true, attributeFilter: ['data-ad-status'] });

    const onBlocked = () => setCollapsed(true);
    window.addEventListener('ads-blocked', onBlocked);

    return () => {
      mutationObserver.disconnect();
      window.removeEventListener('ads-blocked', onBlocked);
    };
  }, []);

  if (collapsed) return null;

  return (
    <aside
      ref={containerRef}
      aria-label="Advertisement"
      className={`w-full flex flex-col items-center ${className}`}
    >
      <span className="text-[10px] uppercase tracking-widest text-[#71717A] font-medium mb-1 select-none">
        Advertisement
      </span>
      <div className={`w-full flex justify-center items-center ${config.minHeightClass}`}>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={config.slot}
          data-ad-format={config.format}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}

"use client";

import { useEffect } from "react";

export function ThirdPartyScripts() {
  useEffect(() => {
    let loaded = false;

    const loadScripts = () => {
      if (loaded) return;
      loaded = true;

      // Clean up event listeners
      window.removeEventListener("scroll", onTrigger, { capture: true });
      window.removeEventListener("mousemove", onTrigger, { capture: true });
      window.removeEventListener("touchstart", onTrigger, { capture: true });
      window.removeEventListener("keydown", onTrigger, { capture: true });
      window.removeEventListener("click", onTrigger, { capture: true });

      // 1. Google Analytics (gtag.js)
      if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
        const gaScript = document.createElement("script");
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-Y3N6YXK7VE";
        gaScript.async = true;
        document.head.appendChild(gaScript);
      }

      // 2. Google AdSense
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        const adScript = document.createElement("script");
        adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2980455227951378";
        adScript.async = true;
        adScript.crossOrigin = "anonymous";
        adScript.onerror = () => {
          // Ad blocker or network failure: let ad slots collapse instead of showing empty boxes.
          window.__adsBlocked = true;
          window.dispatchEvent(new Event("ads-blocked"));
        };
        document.head.appendChild(adScript);
      }

      // 3. Microsoft Clarity
      if (!document.querySelector('script[src*="clarity.ms"]')) {
        (function(c: Window & { [key: string]: unknown }, l: Document, a: string, r: string, i: string) {
          const clarityQueue = c[a] as { q?: unknown[] } | undefined;
          const fn = (...args: unknown[]) => {
            const current = (c[a] as { q?: unknown[] });
            if (current) {
              current.q = current.q || [];
              current.q.push(args);
            }
          };
          if (!clarityQueue) {
            (c as Record<string, unknown>)[a] = fn;
          }
          const t = l.createElement(r) as HTMLScriptElement;
          t.async = true;
          t.src = "https://www.clarity.ms/tag/" + i;
          const y = l.getElementsByTagName(r)[0];
          if (y && y.parentNode) {
            y.parentNode.insertBefore(t, y);
          } else {
            document.head.appendChild(t);
          }
        })(window as unknown as Window & { [key: string]: unknown }, document, "clarity", "script", "uu67di7l76");
      }
    };

    const onTrigger = () => {
      loadScripts();
    };

    // Trigger on first user interaction
    window.addEventListener("scroll", onTrigger, { capture: true, passive: true });
    window.addEventListener("mousemove", onTrigger, { capture: true, passive: true });
    window.addEventListener("touchstart", onTrigger, { capture: true, passive: true });
    window.addEventListener("keydown", onTrigger, { capture: true, passive: true });
    window.addEventListener("click", onTrigger, { capture: true, passive: true });

    // No timer fallback on purpose: AdSense, Funding Choices, Clarity and GA cost ~1s of main-thread
    // work and keep repainting the hero (Speed Index). Loading them during the initial render is what
    // dropped mobile Lighthouse from ~99 to ~60, so they wait for the visitor's first real interaction.
    // gtag/clarity calls made before then are queued and sent once the scripts arrive.

    return () => {
      window.removeEventListener("scroll", onTrigger, { capture: true });
      window.removeEventListener("mousemove", onTrigger, { capture: true });
      window.removeEventListener("touchstart", onTrigger, { capture: true });
      window.removeEventListener("keydown", onTrigger, { capture: true });
      window.removeEventListener("click", onTrigger, { capture: true });
    };
  }, []);

  return null;
}

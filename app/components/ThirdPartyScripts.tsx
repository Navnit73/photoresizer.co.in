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

      // 1. Inject AdSense
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        const adScript = document.createElement("script");
        adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2980455227951378";
        adScript.async = true;
        adScript.crossOrigin = "anonymous";
        document.head.appendChild(adScript);
      }

      // 2. Inject Clarity
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

    // Listen for any user interaction
    window.addEventListener("scroll", onTrigger, { capture: true, passive: true });
    window.addEventListener("mousemove", onTrigger, { capture: true, passive: true });
    window.addEventListener("touchstart", onTrigger, { capture: true, passive: true });
    window.addEventListener("keydown", onTrigger, { capture: true, passive: true });

    // Fallback: load after 3.5s delay if user doesn't interact
    const timer = setTimeout(loadScripts, 3500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onTrigger, { capture: true });
      window.removeEventListener("mousemove", onTrigger, { capture: true });
      window.removeEventListener("touchstart", onTrigger, { capture: true });
      window.removeEventListener("keydown", onTrigger, { capture: true });
    };
  }, []);

  return null;
}

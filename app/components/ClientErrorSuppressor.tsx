"use client";

import { useEffect } from "react";
import { isChunkLoadError, reloadForStaleDeploy } from "../utils/staleDeploy";

export function ClientErrorSuppressor() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Safely wrap window.performance.measure to swallow negative timestamp errors
      if (window.performance && typeof window.performance.measure === "function") {
        const originalMeasure = window.performance.measure.bind(window.performance);
        window.performance.measure = function (
          measureName: string,
          startOrMeasureOptions?: string | PerformanceMeasureOptions,
          endMark?: string
        ): PerformanceMeasure {
          try {
            return originalMeasure(measureName, startOrMeasureOptions as string, endMark);
          } catch {
            // Safe fallback for Performance.measure negative timestamp / NotFound DOMExceptions
            return null as unknown as PerformanceMeasure;
          }
        };
      }

      // 2. Filter console.error logs
      const originalConsoleError = console.error;
      console.error = (...args) => {
        const firstArg = args[0];
        const errorMsg = typeof firstArg === "string" ? firstArg : firstArg?.message || "";
        if (
          errorMsg.includes("Encountered a script tag while rendering React component") ||
          errorMsg.includes("Failed to execute 'measure' on 'Performance'") ||
          errorMsg.includes("cannot have a negative time stamp")
        ) {
          return;
        }
        originalConsoleError(...args);
      };

      // 3. Swallow known-benign errors, and recover from chunks missing after a redeploy.
      // Listeners are registered in the capture phase on mount, ahead of Clarity/GA
      // (which load on first interaction), so stopImmediatePropagation keeps noise out of reports.
      const handleGlobalError = (event: ErrorEvent) => {
        const msg = event.message || "";
        if (
          // Benign: the browser deferred resize notifications to the next frame.
          msg.includes("ResizeObserver loop") ||
          msg.includes("Failed to execute 'measure' on 'Performance'") ||
          msg.includes("cannot have a negative time stamp") ||
          (isChunkLoadError(msg) && reloadForStaleDeploy())
        ) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        const reason = event.reason;
        const msg = typeof reason === "string" ? reason : `${reason?.name || ""} ${reason?.message || ""}`;
        if (
          msg.includes("Failed to execute 'measure' on 'Performance'") ||
          msg.includes("cannot have a negative time stamp") ||
          (isChunkLoadError(msg) && reloadForStaleDeploy())
        ) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };

      window.addEventListener("error", handleGlobalError, true);
      window.addEventListener("unhandledrejection", handleUnhandledRejection, true);

      return () => {
        window.removeEventListener("error", handleGlobalError, true);
        window.removeEventListener("unhandledrejection", handleUnhandledRejection, true);
      };
    }
  }, []);

  return null;
}

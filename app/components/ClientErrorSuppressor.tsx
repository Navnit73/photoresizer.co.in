"use client";

import { useEffect } from "react";

export function ClientErrorSuppressor() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Safely wrap window.performance.measure to swallow negative timestamp errors
      if (window.performance && typeof window.performance.measure === "function") {
        const originalMeasure = window.performance.measure.bind(window.performance);
        window.performance.measure = function (measureName: string, startOrMeasureOptions?: any, endMark?: string) {
          try {
            return originalMeasure(measureName, startOrMeasureOptions, endMark);
          } catch {
            // Suppress Performance.measure negative timestamp / NotFound DOMExceptions
            return null as any;
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

      // 3. Prevent unhandled error overlays for performance.measure exceptions
      const handleGlobalError = (event: ErrorEvent) => {
        if (
          event.message?.includes("Failed to execute 'measure' on 'Performance'") ||
          event.message?.includes("cannot have a negative time stamp")
        ) {
          event.preventDefault();
          event.stopPropagation();
        }
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        const reason = event.reason;
        const msg = typeof reason === "string" ? reason : reason?.message || "";
        if (
          msg.includes("Failed to execute 'measure' on 'Performance'") ||
          msg.includes("cannot have a negative time stamp")
        ) {
          event.preventDefault();
        }
      };

      window.addEventListener("error", handleGlobalError);
      window.addEventListener("unhandledrejection", handleUnhandledRejection);

      return () => {
        window.removeEventListener("error", handleGlobalError);
        window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      };
    }
  }, []);

  return null;
}

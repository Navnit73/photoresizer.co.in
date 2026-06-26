"use client";

import { useEffect } from "react";

export function ClientErrorSuppressor() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const originalConsoleError = console.error;
      console.error = (...args) => {
        if (
          typeof args[0] === "string" &&
          args[0].includes("Encountered a script tag while rendering React component")
        ) {
          // Suppress the next-themes script warning in React 19
          return;
        }
        if (
          typeof args[0] === "string" &&
          args[0].includes("Failed to execute 'measure' on 'Performance'")
        ) {
          return;
        }
        originalConsoleError(...args);
      };
    }
  }, []);

  return null;
}

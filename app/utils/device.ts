/**
 * Lightweight capability detection used to scale down expensive work
 * (preview size, debounce delays, history depth, ML model size) on weak devices.
 */
type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

let cachedLowEnd: boolean | null = null;

export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  if (cachedLowEnd !== null) return cachedLowEnd;

  const nav = navigator as NavigatorWithHints;
  const memory = nav.deviceMemory; // GB, Chromium only (rounded: 0.25 … 8)
  const cores = nav.hardwareConcurrency;

  cachedLowEnd =
    (typeof memory === 'number' && memory <= 4) ||
    (typeof cores === 'number' && cores <= 4) ||
    nav.connection?.saveData === true;

  return cachedLowEnd;
}

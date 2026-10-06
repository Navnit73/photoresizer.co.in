const RELOAD_KEY = 'stale-deploy-reload-at';
// Don't reload again within this window, so a genuinely broken asset can't cause a reload loop.
const RELOAD_COOLDOWN_MS = 5 * 60 * 1000;

/** True for errors thrown when a JS chunk from an older/newer deploy can't be fetched. */
export function isChunkLoadError(message: string): boolean {
  return (
    message.includes('Failed to load chunk') ||
    message.includes('ChunkLoadError') ||
    message.includes('Loading chunk') ||
    message.includes("Failed to execute 'importScripts'") ||
    message.includes('Failed to fetch dynamically imported module') ||
    message.includes('error loading dynamically imported module')
  );
}

/**
 * After a deploy, tabs opened earlier reference chunk hashes that no longer exist.
 * Reload once to pick up the new build. Returns false if a reload was already tried recently.
 */
export function reloadForStaleDeploy(): boolean {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
    if (Date.now() - last < RELOAD_COOLDOWN_MS) return false;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    // Storage unavailable (private mode etc.) — reloading without a guard risks a loop.
    return false;
  }
  window.location.reload();
  return true;
}

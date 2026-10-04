/**
 * Haptic feedback utility for mobile touch devices.
 * Uses navigator.vibrate with graceful fallback and battery/permission safety.
 */

type HapticStyle = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'selection';

export function triggerHaptic(style: HapticStyle = 'light'): void {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  
  if (!('vibrate' in navigator) || typeof navigator.vibrate !== 'function') {
    return;
  }

  try {
    switch (style) {
      case 'selection':
      case 'light':
        // Gentle click/tap feedback (10ms)
        navigator.vibrate(12);
        break;

      case 'medium':
        // Firmer action feedback (e.g. rotate, toggle crop, apply)
        navigator.vibrate(28);
        break;

      case 'heavy':
        // Heavy impact (e.g. reset, delete)
        navigator.vibrate(45);
        break;

      case 'success':
        // Double pulse for completion (e.g. downloaded, bg removed, cropped)
        navigator.vibrate([15, 40, 25]);
        break;

      case 'warning':
        // Warning pattern
        navigator.vibrate([30, 50, 30]);
        break;

      default:
        navigator.vibrate(15);
    }
  } catch {
    // Silently ignore if browser denies permission or lacks hardware support
  }
}

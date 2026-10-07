/**
 * Opens a native file dialog without wrecking INP.
 *
 * On desktop Chrome the file chooser is modal and blocks the frame that would end the click
 * interaction, so the whole time a user spends picking a file is reported as INP (often 5–10 s).
 * Letting the click's feedback paint first, then opening the dialog, ends the interaction right away.
 * The click still carries user activation (valid for several seconds), so the dialog opens normally.
 *
 * Touch devices don't have this problem, and older mobile Safari only honours `input.click()`
 * synchronously inside the gesture, so there we open immediately.
 */
export function openFilePicker(open: () => void): void {
  const deferred =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(pointer: fine)').matches;

  if (!deferred) {
    open();
    return;
  }

  requestAnimationFrame(() => {
    setTimeout(open, 0);
  });
}

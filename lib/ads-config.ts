/**
 * Central AdSense configuration.
 *
 * Every placement currently falls back to the same display ad unit. For better
 * reporting (and higher RPM through per-unit optimisation), create a dedicated
 * "Display ad" unit per placement in AdSense → Ads → By ad unit, then paste the
 * slot IDs below. No other code changes are needed.
 */

export const AD_CLIENT = 'ca-pub-2980455227951378';

const DEFAULT_SLOT = '9132763063';

export type AdPlacement =
  | 'heroBelow'
  | 'toolBelow'
  | 'inContent'
  | 'contentEnd';

export interface AdPlacementConfig {
  /** AdSense ad unit slot ID. */
  slot: string;
  /** Responsive ad format hint passed to AdSense. */
  format: 'auto' | 'horizontal' | 'rectangle';
  /** Space reserved before the ad fills, to prevent layout shift (CLS). */
  minHeightClass: string;
}

/*
 * Placement rules (keep users productive + stay AdSense-policy safe):
 * - Never above the upload box or between the user and the Download button.
 * - No ads inside the editor columns (accidental clicks near Download = policy risk).
 * - No sticky/anchor ads: mobile already has a sticky Download bar.
 */
export const AD_PLACEMENTS: Record<AdPlacement, AdPlacementConfig> = {
  // Below the upload box. A slim banner so the upload CTA stays the clear focus.
  heroBelow: {
    slot: DEFAULT_SLOT,
    format: 'horizontal',
    minHeightClass: 'min-h-[100px] sm:min-h-[90px]',
  },
  // Directly under the tool workspace once an image is loaded.
  toolBelow: {
    slot: DEFAULT_SLOT,
    format: 'auto',
    minHeightClass: 'min-h-[280px] sm:min-h-[250px]',
  },
  // Between long-form content sections (guides, FAQs).
  inContent: {
    slot: DEFAULT_SLOT,
    format: 'auto',
    minHeightClass: 'min-h-[280px] sm:min-h-[250px]',
  },
  // End of page content, before related links.
  contentEnd: {
    slot: DEFAULT_SLOT,
    format: 'auto',
    minHeightClass: 'min-h-[280px] sm:min-h-[250px]',
  },
};

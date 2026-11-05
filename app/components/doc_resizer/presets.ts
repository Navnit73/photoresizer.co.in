/**
 * Output presets for the PAN card and signature resizer tools.
 *
 * Sources (checked Nov 2026):
 * - Protean (NSDL) scanned-document route: photo 3.5 × 2.5 cm, signature 2 × 4.5 cm, 200 DPI, max 50 KB each.
 * - Protean DSC route (tin.tin.proteantech.in/pan/InstructionDSC.html): same sizes, photo max 20 KB, signature max 10 KB.
 * - UTIITSL: photo 213 × 213 px at 300 DPI, max 30 KB; signature commonly 400 × 200 px, max 60 KB.
 * - Exam presets follow the most widely published notification values. Portals change these, so the UI
 *   always tells candidates to confirm against their own notice.
 */

export type DocKind = 'photo' | 'signature';

export interface DocPreset {
  id: string;
  label: string;
  /** One-line spec summary shown under the chip. */
  spec: string;
  kind: DocKind;
  width: number;
  height: number;
  dpi: number;
  /** 0 means "no minimum". */
  minKB: number;
  maxKB: number;
  /** Used in the downloaded file name. */
  fileTag: string;
}

/** Pixels for a physical size at a given DPI. */
export const cmToPx = (cm: number, dpi: number) => Math.max(1, Math.round((cm / 2.54) * dpi));
export const pxToCm = (px: number, dpi: number) => Math.round(((px / dpi) * 2.54) * 100) / 100;

// ── PAN card ────────────────────────────────────────────────────────────────

export type PanPortal = 'protean' | 'protean-dsc' | 'utiitsl';

export const PAN_PORTALS: { id: PanPortal; label: string; hint: string }[] = [
  { id: 'protean', label: 'Protean (NSDL)', hint: 'Scanned upload / e-Sign' },
  { id: 'protean-dsc', label: 'Protean DSC', hint: 'Digital signature route' },
  { id: 'utiitsl', label: 'UTIITSL', hint: 'UTI PAN portal' },
];

export const PAN_PRESETS: Record<PanPortal, Record<DocKind, DocPreset>> = {
  protean: {
    photo: {
      id: 'pan-protean-photo',
      label: 'Protean photo',
      spec: '3.5 × 2.5 cm • 197 × 276 px • 200 DPI • max 50 KB',
      kind: 'photo',
      width: 197,
      height: 276,
      dpi: 200,
      minKB: 0,
      maxKB: 50,
      fileTag: 'pan-photo-protean',
    },
    signature: {
      id: 'pan-protean-sign',
      label: 'Protean signature',
      spec: '2 × 4.5 cm • 354 × 157 px • 200 DPI • max 50 KB',
      kind: 'signature',
      width: 354,
      height: 157,
      dpi: 200,
      minKB: 0,
      maxKB: 50,
      fileTag: 'pan-signature-protean',
    },
  },
  'protean-dsc': {
    photo: {
      id: 'pan-dsc-photo',
      label: 'Protean DSC photo',
      spec: '3.5 × 2.5 cm • 197 × 276 px • 200 DPI • max 20 KB',
      kind: 'photo',
      width: 197,
      height: 276,
      dpi: 200,
      minKB: 0,
      maxKB: 20,
      fileTag: 'pan-photo-dsc',
    },
    signature: {
      id: 'pan-dsc-sign',
      label: 'Protean DSC signature',
      spec: '2 × 4.5 cm • 354 × 157 px • 200 DPI • max 10 KB',
      kind: 'signature',
      width: 354,
      height: 157,
      dpi: 200,
      minKB: 0,
      maxKB: 10,
      fileTag: 'pan-signature-dsc',
    },
  },
  utiitsl: {
    photo: {
      id: 'pan-uti-photo',
      label: 'UTIITSL photo',
      spec: '213 × 213 px • 300 DPI • max 30 KB',
      kind: 'photo',
      width: 213,
      height: 213,
      dpi: 300,
      minKB: 0,
      maxKB: 30,
      fileTag: 'pan-photo-utiitsl',
    },
    signature: {
      id: 'pan-uti-sign',
      label: 'UTIITSL signature',
      spec: '400 × 200 px • 600 DPI • max 60 KB',
      kind: 'signature',
      width: 400,
      height: 200,
      dpi: 600,
      minKB: 0,
      maxKB: 60,
      fileTag: 'pan-signature-utiitsl',
    },
  },
};

// ── Signature (exam forms) ──────────────────────────────────────────────────

export const SIGNATURE_PRESETS: DocPreset[] = [
  {
    id: 'sign-bank',
    label: 'IBPS / SBI / RBI',
    spec: '140 × 60 px • 10–20 KB',
    kind: 'signature',
    width: 140,
    height: 60,
    dpi: 200,
    minKB: 10,
    maxKB: 20,
    fileTag: 'signature-ibps',
  },
  {
    id: 'sign-ssc',
    label: 'SSC',
    spec: '6 × 2 cm • 300 × 100 px • 10–20 KB',
    kind: 'signature',
    width: 300,
    height: 100,
    dpi: 127,
    minKB: 10,
    maxKB: 20,
    fileTag: 'signature-ssc',
  },
  {
    id: 'sign-upsc',
    label: 'UPSC',
    spec: '700 × 350 px • 20–100 KB',
    kind: 'signature',
    width: 700,
    height: 350,
    dpi: 300,
    minKB: 20,
    maxKB: 100,
    fileTag: 'signature-upsc',
  },
  {
    id: 'sign-nta',
    label: 'NEET / JEE / CUET',
    spec: '3.5 × 1.5 cm • 280 × 120 px • 4–30 KB',
    kind: 'signature',
    width: 280,
    height: 120,
    dpi: 200,
    minKB: 4,
    maxKB: 30,
    fileTag: 'signature-nta',
  },
  {
    id: 'sign-pan',
    label: 'PAN (Protean)',
    spec: '354 × 157 px • 200 DPI • max 50 KB',
    kind: 'signature',
    width: 354,
    height: 157,
    dpi: 200,
    minKB: 0,
    maxKB: 50,
    fileTag: 'signature-pan',
  },
  {
    id: 'sign-20kb',
    label: 'Any form, under 20 KB',
    spec: '300 × 120 px • max 20 KB',
    kind: 'signature',
    width: 300,
    height: 120,
    dpi: 200,
    minKB: 0,
    maxKB: 20,
    fileTag: 'signature-20kb',
  },
];

export const CUSTOM_PRESET_ID = 'custom';

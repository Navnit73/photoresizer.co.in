'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import {
  AlertTriangle,
  Check,
  Download,
  ImagePlus,
  Loader2,
  Minus,
  Plus,
  RotateCcw,
  RotateCw,
  Sparkles,
  Undo2,
  X,
} from 'lucide-react';
import { prepareWorkingImage, type CropAreaPercent } from '../passport_photo/imageUtils';
import { openFilePicker } from '../../utils/filePicker';
import {
  CUSTOM_PRESET_ID,
  PAN_PORTALS,
  PAN_PRESETS,
  SIGNATURE_PRESETS,
  cmToPx,
  pxToCm,
  type DocKind,
  type DocPreset,
  type PanPortal,
} from './presets';
import {
  DEFAULT_PHOTO_ADJUST,
  DEFAULT_SIGN_ADJUST,
  autoFitSignature,
  encodeToRange,
  formatKB,
  maxBytesFor,
  minBytesFor,
  renderDoc,
  rotateImage,
  type Adjustments,
  type EncodeResult,
  type InkColor,
} from './docImage';

type Mode = 'pan' | 'signature';

interface Img {
  url: string;
  width: number;
  height: number;
}

interface CustomSize {
  unit: 'px' | 'cm';
  width: number; // px
  height: number; // px
  dpi: number;
  minKB: number;
  maxKB: number;
}

const DEFAULT_CUSTOM: Record<DocKind, CustomSize> = {
  photo: { unit: 'px', width: 200, height: 230, dpi: 200, minKB: 20, maxKB: 50 },
  signature: { unit: 'px', width: 140, height: 60, dpi: 200, minKB: 10, maxKB: 20 },
};

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

function revoke(url: string | null | undefined) {
  if (url && url.startsWith('blob:')) URL.revokeObjectURL(url);
}

// ── Small UI pieces ─────────────────────────────────────────────────────────

function StepLabel({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-semibold text-[#18181B]">
      <span className="w-5 h-5 rounded-full bg-[#16A34A] text-[#FFFFFF] text-[11px] font-bold flex items-center justify-center">
        {n}
      </span>
      {children}
    </h3>
  );
}

function Chip({
  active,
  onClick,
  title,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  sub?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`text-left px-3 py-2 rounded-xl border transition-colors min-h-[44px] ${
        active
          ? 'border-[#16A34A] bg-[#F0FDF4] ring-1 ring-[#16A34A]'
          : 'border-[#E4E4E7] bg-[#FFFFFF] hover:border-[#BBF7D0] hover:bg-[#F0FDF4]'
      }`}
    >
      <span className={`block text-sm font-semibold ${active ? 'text-[#15803D]' : 'text-[#18181B]'}`}>{title}</span>
      {sub && <span className="block text-[11px] leading-snug text-[#71717A] mt-0.5">{sub}</span>}
    </button>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  onChange,
  suffix = '',
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  const id = `s-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <label htmlFor={id} className="font-medium text-[#3F3F46]">
          {label}
        </label>
        <span className="tabular-nums text-[#71717A]">
          {value > 0 && min < 0 ? '+' : ''}
          {value}
          {suffix}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#16A34A] h-6"
      />
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  step = 1,
  min = 0,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  suffix?: string;
}) {
  // Holds what the user is typing; null shows the committed value.
  const [draft, setDraft] = useState<string | null>(null);
  const text = draft ?? String(value);
  return (
    <label className="block">
      <span className="block text-[11px] font-medium text-[#52525B] mb-1">{label}</span>
      <span className="flex items-center rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] focus-within:border-[#16A34A] focus-within:ring-1 focus-within:ring-[#16A34A]">
        <input
          type="number"
          inputMode="decimal"
          step={step}
          min={min}
          value={text}
          onChange={(e) => {
            setDraft(e.target.value);
            const n = Number(e.target.value);
            if (e.target.value !== '' && Number.isFinite(n) && n >= min) onChange(n);
          }}
          onBlur={() => setDraft(null)}
          className="w-full min-w-0 px-2.5 py-2 text-sm bg-transparent outline-none tabular-nums"
        />
        {suffix && <span className="pr-2.5 text-xs text-[#71717A]">{suffix}</span>}
      </span>
    </label>
  );
}

// ── Main tool ───────────────────────────────────────────────────────────────

export default function DocResizerTool({ mode, initialFile }: { mode: Mode; initialFile?: File | null }) {
  // Document selection
  const [panPortal, setPanPortal] = useState<PanPortal>('protean');
  const [panKind, setPanKind] = useState<DocKind>('photo');
  const [signPresetId, setSignPresetId] = useState<string>(SIGNATURE_PRESETS[0].id);
  const [useCustom, setUseCustom] = useState(false);
  const [custom, setCustom] = useState<Record<DocKind, CustomSize>>(DEFAULT_CUSTOM);

  const kind: DocKind = mode === 'pan' ? panKind : 'signature';

  const basePreset: DocPreset =
    mode === 'pan'
      ? PAN_PRESETS[panPortal][panKind]
      : SIGNATURE_PRESETS.find((p) => p.id === signPresetId) ?? SIGNATURE_PRESETS[0];

  const c = custom[kind];
  const preset: DocPreset = useMemo(
    () =>
      useCustom
        ? {
            id: CUSTOM_PRESET_ID,
            label: 'Custom',
            spec: '',
            kind,
            width: clamp(Math.round(c.width), 20, 3000),
            height: clamp(Math.round(c.height), 20, 3000),
            dpi: clamp(Math.round(c.dpi), 72, 1200),
            minKB: Math.max(0, c.minKB),
            maxKB: Math.max(1, c.maxKB),
            fileTag: kind === 'photo' ? 'photo-custom' : 'signature-custom',
          }
        : basePreset,
    [useCustom, c, kind, basePreset],
  );
  const aspect = preset.width / preset.height;

  // Images
  const [original, setOriginal] = useState<Img | null>(null); // upload, after rotation
  const [fitted, setFitted] = useState<Img | null>(null); // signature auto-fit result
  const [useFit, setUseFit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const source = kind === 'signature' && useFit && fitted ? fitted : original;

  // Framing
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [area, setArea] = useState<CropAreaPercent | null>(null);

  // Adjustments, kept per document type
  const [adjust, setAdjust] = useState<Record<DocKind, Adjustments>>({
    photo: DEFAULT_PHOTO_ADJUST,
    signature: DEFAULT_SIGN_ADJUST,
  });
  const adj = adjust[kind];
  const setAdj = (patch: Partial<Adjustments>) => setAdjust((prev) => ({ ...prev, [kind]: { ...prev[kind], ...patch } }));
  const [padToMin, setPadToMin] = useState(true);

  // Output
  const [result, setResult] = useState<EncodeResult | null>(null);
  const [rendering, setRendering] = useState(false);
  const renderToken = useRef(0);
  const resultUrlRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastFileRef = useRef<File | null>(null);
  const loadToken = useRef(0);

  // ── Loading ──
  const loadFile = useCallback(async (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      setError('Please choose a JPG, PNG or WEBP image.');
      return;
    }
    lastFileRef.current = file;
    const token = ++loadToken.current;
    setLoading(true);
    setError(null);
    try {
      const working = await prepareWorkingImage(file);
      if (token !== loadToken.current) {
        revoke(working.url);
        return;
      }
      setOriginal((prev) => {
        revoke(prev?.url);
        return working;
      });
      setFitted((prev) => {
        revoke(prev?.url);
        return null;
      });
      setUseFit(true);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not open this image.');
    } finally {
      if (token === loadToken.current) setLoading(false);
    }
  }, []);

  // Files arrive from the page's hero uploader (prop, a pending global, or an event).
  useEffect(() => {
    const w = window as unknown as { __PENDING_HERO_FILES__?: File[] };
    const pending = w.__PENDING_HERO_FILES__?.[0];
    if (w.__PENDING_HERO_FILES__) delete w.__PENDING_HERO_FILES__;
    const file = initialFile || pending;
    if (file instanceof File && file !== lastFileRef.current) void loadFile(file);

    const onDrop = (e: Event) => {
      const f = (e as CustomEvent<{ files: File[] }>).detail?.files?.[0];
      if (f && f !== lastFileRef.current) void loadFile(f);
    };
    window.addEventListener('hero-file-drop', onDrop);
    return () => window.removeEventListener('hero-file-drop', onDrop);
  }, [initialFile, loadFile]);

  // Signature: trim blank paper and centre the ink at the output aspect ratio.
  useEffect(() => {
    if (kind !== 'signature' || !original) return;
    let cancelled = false;
    autoFitSignature(original.url, aspect)
      .then((fit) => {
        if (cancelled) {
          revoke(fit?.url);
          return;
        }
        setFitted((prev) => {
          revoke(prev?.url);
          return fit;
        });
        setCrop({ x: 0, y: 0 });
        setZoom(1);
      })
      .catch(() => {
        if (!cancelled) setFitted(null);
      });
    return () => {
      cancelled = true;
    };
  }, [kind, original, aspect]);

  // ── Live output ──
  useEffect(() => {
    if (!source || !area) return;
    const token = ++renderToken.current;
    const timer = setTimeout(async () => {
      setRendering(true);
      try {
        const canvas = await renderDoc({
          src: source.url,
          area,
          width: preset.width,
          height: preset.height,
          kind,
          adjust: adj,
        });
        const encoded = await encodeToRange(canvas, {
          minKB: preset.minKB,
          maxKB: preset.maxKB,
          dpi: preset.dpi,
          padToMin,
        });
        canvas.width = 0;
        canvas.height = 0;
        if (token !== renderToken.current) {
          revoke(encoded.url);
          return;
        }
        revoke(resultUrlRef.current);
        resultUrlRef.current = encoded.url;
        setResult(encoded);
        setError(null);
      } catch (e) {
        if (token === renderToken.current) setError(e instanceof Error ? e.message : 'Could not process the image.');
      } finally {
        if (token === renderToken.current) setRendering(false);
      }
    }, 180);
    return () => clearTimeout(timer);
  }, [source, area, preset.width, preset.height, preset.dpi, preset.minKB, preset.maxKB, kind, adj, padToMin]);

  // Release blob URLs on unmount.
  const imagesRef = useRef<{ original: Img | null; fitted: Img | null }>({ original: null, fitted: null });
  useEffect(() => {
    imagesRef.current = { original, fitted };
  }, [original, fitted]);
  useEffect(
    () => () => {
      revoke(imagesRef.current.original?.url);
      revoke(imagesRef.current.fitted?.url);
      revoke(resultUrlRef.current);
    },
    [],
  );

  const rotate = async (deg: 90 | -90) => {
    if (!original) return;
    setLoading(true);
    try {
      const rotated = await rotateImage(original.url, deg);
      setOriginal((prev) => {
        revoke(prev?.url);
        return rotated;
      });
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not rotate the image.');
    } finally {
      setLoading(false);
    }
  };

  const download = () => {
    if (!result) return;
    const kb = Math.round(result.bytes / 1024);
    const a = document.createElement('a');
    a.href = result.url;
    a.download = `${preset.fileTag}-${preset.width}x${preset.height}-${kb}kb.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const updateCustom = (patch: Partial<CustomSize>) =>
    setCustom((prev) => ({ ...prev, [kind]: { ...prev[kind], ...patch } }));

  const startCustomFromPreset = () => {
    setCustom((prev) => ({
      ...prev,
      [kind]: {
        ...prev[kind],
        width: basePreset.width,
        height: basePreset.height,
        dpi: basePreset.dpi,
        minKB: basePreset.minKB,
        maxKB: basePreset.maxKB,
      },
    }));
    setUseCustom(true);
  };

  // ── Validation ──
  const checks = useMemo(() => {
    if (!result) return [];
    const minBytes = preset.minKB > 0 ? minBytesFor(preset.minKB) : 0;
    const rangeLabel = preset.minKB > 0 ? `${preset.minKB}–${preset.maxKB} KB` : `under ${preset.maxKB} KB`;
    return [
      { ok: true, label: `Exactly ${preset.width} × ${preset.height} pixels` },
      {
        ok: result.fitsMax && result.fitsMin,
        label: `File size ${formatKB(result.bytes)} (${rangeLabel})`,
        hint: !result.fitsMax
          ? 'Still too large at the lowest quality. Lower the pixel size or raise the KB limit.'
          : !result.fitsMin && minBytes > 0
            ? 'Below the minimum. Turn on “Reach minimum KB” below.'
            : undefined,
      },
      { ok: true, label: `${preset.dpi} DPI saved in the file` },
      { ok: true, label: 'JPG format, white background' },
    ];
  }, [result, preset]);
  const allOk = checks.length > 0 && checks.every((c) => c.ok);
  const physical = `${pxToCm(preset.width, preset.dpi)} × ${pxToCm(preset.height, preset.dpi)} cm`;

  const isWide = aspect > 1.4;
  const minZoom = kind === 'signature' ? 0.4 : 1;

  const hiddenInput = (
    <input
      ref={fileInputRef}
      type="file"
      accept="image/jpeg,image/png,image/webp"
      className="hidden"
      aria-label={kind === 'photo' ? 'Upload photo' : 'Upload signature'}
      onChange={(e) => {
        const f = e.target.files?.[0];
        if (f) void loadFile(f);
        e.target.value = '';
      }}
    />
  );

  // ── Empty state ──
  if (!original) {
    return (
      <div className="w-full max-w-2xl mx-auto py-6">
        {hiddenInput}
        <button
          type="button"
          onClick={() => openFilePicker(() => fileInputRef.current?.click())}
          className="w-full p-10 rounded-2xl border-2 border-dashed border-[#BBF7D0] bg-[#F0FDF4] hover:border-[#16A34A] text-center"
        >
          {loading ? (
            <Loader2 className="mx-auto animate-spin text-[#16A34A]" size={28} />
          ) : (
            <>
              <ImagePlus className="mx-auto text-[#16A34A] mb-3" size={28} />
              <span className="block text-base font-semibold text-[#18181B]">
                {mode === 'pan' ? 'Upload your photo or signature' : 'Upload your signature photo or scan'}
              </span>
              <span className="block text-xs text-[#71717A] mt-1">JPG, PNG or WEBP • stays on your device</span>
            </>
          )}
        </button>
        {error && <p className="mt-3 text-sm text-[#B91C1C]">{error}</p>}
      </div>
    );
  }

  // ── Editor ──
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-4 lg:gap-6 items-start">
      {hiddenInput}

      {/* LEFT: choose + frame */}
      <div className="flex flex-col gap-4 min-w-0">
        <section className="rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] p-4 flex flex-col gap-3">
          <StepLabel n={1}>{mode === 'pan' ? 'Choose document and portal' : 'Choose your exam or form'}</StepLabel>

          {mode === 'pan' && (
            <div className="grid grid-cols-2 p-1 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7]" role="tablist">
              {(['photo', 'signature'] as DocKind[]).map((k) => (
                <button
                  key={k}
                  type="button"
                  role="tab"
                  aria-selected={panKind === k}
                  onClick={() => setPanKind(k)}
                  className={`py-2 text-sm font-semibold rounded-lg transition-colors ${
                    panKind === k ? 'bg-[#FFFFFF] text-[#15803D] shadow-[0_1px_2px_rgba(0,0,0,0.08)]' : 'text-[#52525B]'
                  }`}
                >
                  {k === 'photo' ? 'PAN Photo' : 'PAN Signature'}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {mode === 'pan'
              ? PAN_PORTALS.map((p) => (
                  <Chip
                    key={p.id}
                    active={!useCustom && panPortal === p.id}
                    onClick={() => {
                      setPanPortal(p.id);
                      setUseCustom(false);
                    }}
                    title={p.label}
                    sub={PAN_PRESETS[p.id][panKind].spec}
                  />
                ))
              : SIGNATURE_PRESETS.map((p) => (
                  <Chip
                    key={p.id}
                    active={!useCustom && signPresetId === p.id}
                    onClick={() => {
                      setSignPresetId(p.id);
                      setUseCustom(false);
                    }}
                    title={p.label}
                    sub={p.spec}
                  />
                ))}
            <Chip
              active={useCustom}
              onClick={() => (useCustom ? undefined : startCustomFromPreset())}
              title="Custom size"
              sub="Pixels or cm, any KB range"
            />
          </div>

          {useCustom && (
            <div className="rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] p-3 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-[#3F3F46]">Your notification’s size</span>
                <div className="flex p-0.5 rounded-lg bg-[#FFFFFF] border border-[#E4E4E7]">
                  {(['px', 'cm'] as const).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => updateCustom({ unit: u })}
                      className={`px-3 py-1 text-xs font-semibold rounded-md ${
                        c.unit === u ? 'bg-[#16A34A] text-[#FFFFFF]' : 'text-[#52525B]'
                      }`}
                    >
                      {u === 'px' ? 'Pixels' : 'Centimetres'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {c.unit === 'px' ? (
                  <>
                    <NumberField label="Width" suffix="px" value={c.width} onChange={(v) => updateCustom({ width: v })} />
                    <NumberField label="Height" suffix="px" value={c.height} onChange={(v) => updateCustom({ height: v })} />
                  </>
                ) : (
                  <>
                    <NumberField
                      label="Width"
                      suffix="cm"
                      step={0.1}
                      value={pxToCm(c.width, c.dpi)}
                      onChange={(v) => updateCustom({ width: cmToPx(v, c.dpi) })}
                    />
                    <NumberField
                      label="Height"
                      suffix="cm"
                      step={0.1}
                      value={pxToCm(c.height, c.dpi)}
                      onChange={(v) => updateCustom({ height: cmToPx(v, c.dpi) })}
                    />
                  </>
                )}
                <NumberField
                  label="DPI"
                  value={c.dpi}
                  min={72}
                  onChange={(v) => {
                    // In cm mode, keep the physical size and recompute pixels.
                    if (c.unit === 'cm') {
                      updateCustom({
                        dpi: v,
                        width: cmToPx(pxToCm(c.width, c.dpi), v),
                        height: cmToPx(pxToCm(c.height, c.dpi), v),
                      });
                    } else updateCustom({ dpi: v });
                  }}
                />
                <NumberField label="Min size" suffix="KB" value={c.minKB} onChange={(v) => updateCustom({ minKB: v })} />
                <NumberField label="Max size" suffix="KB" min={1} value={c.maxKB} onChange={(v) => updateCustom({ maxKB: v })} />
              </div>
              {c.minKB >= c.maxKB && (
                <p className="text-xs text-[#B45309]">The minimum must be lower than the maximum.</p>
              )}
              <p className="text-[11px] text-[#71717A]">
                = {Math.round(c.width)} × {Math.round(c.height)} px at {Math.round(c.dpi)} DPI ({physical})
              </p>
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <StepLabel n={2}>{kind === 'photo' ? 'Frame your face' : 'Frame your signature'}</StepLabel>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => rotate(-90)}
                className="p-2 rounded-lg border border-[#E4E4E7] text-[#52525B] hover:bg-[#F4F4F5]"
                aria-label="Rotate left"
                title="Rotate left"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                onClick={() => rotate(90)}
                className="p-2 rounded-lg border border-[#E4E4E7] text-[#52525B] hover:bg-[#F4F4F5]"
                aria-label="Rotate right"
                title="Rotate right"
              >
                <RotateCw size={16} />
              </button>
              <button
                type="button"
                onClick={() => openFilePicker(() => fileInputRef.current?.click())}
                className="px-3 py-2 rounded-lg border border-[#E4E4E7] text-xs font-semibold text-[#3F3F46] hover:bg-[#F4F4F5]"
              >
                Change image
              </button>
            </div>
          </div>

          <div
            className={`relative w-full rounded-xl overflow-hidden border border-[#E4E4E7] select-none ${
              kind === 'signature' ? 'bg-[#E4E4E7]' : 'bg-[#27272A]'
            } ${isWide ? 'h-[240px] sm:h-[300px]' : 'h-[min(52svh,440px)] min-h-[300px]'}`}
            style={{ touchAction: 'none' }}
          >
            {source && (
              <Cropper
                image={source.url}
                crop={crop}
                zoom={zoom}
                minZoom={minZoom}
                maxZoom={6}
                aspect={aspect}
                restrictPosition={kind === 'photo'}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropAreaChange={(a) => setArea(a)}
                showGrid={kind === 'photo'}
                zoomSpeed={0.4}
                style={{
                  containerStyle: { background: 'transparent' },
                  mediaStyle: { background: '#ffffff' },
                  cropAreaStyle: { border: '2px solid #16A34A', color: 'rgba(24,24,27,0.55)' },
                }}
              />
            )}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFF]/60">
                <Loader2 className="animate-spin text-[#16A34A]" size={28} />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setZoom((z) => clamp(Math.round((z - 0.1) * 10) / 10, minZoom, 6))}
              className="p-2 rounded-lg border border-[#E4E4E7] text-[#52525B]"
              aria-label="Zoom out"
            >
              <Minus size={14} />
            </button>
            <input
              type="range"
              min={minZoom}
              max={6}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="flex-1 accent-[#16A34A] h-6"
              aria-label="Zoom"
            />
            <button
              type="button"
              onClick={() => setZoom((z) => clamp(Math.round((z + 0.1) * 10) / 10, minZoom, 6))}
              className="p-2 rounded-lg border border-[#E4E4E7] text-[#52525B]"
              aria-label="Zoom in"
            >
              <Plus size={14} />
            </button>
          </div>
          <p className="text-xs text-[#71717A]">
            {kind === 'photo'
              ? 'Drag to move and pinch or scroll to zoom. Keep your full face, both ears and the top of your shoulders inside the green box.'
              : 'We trimmed the blank paper and centred your signature for you. Drag or zoom to adjust it.'}
          </p>
        </section>
      </div>

      {/* RIGHT: result + finishing */}
      <div className="flex flex-col gap-4 lg:sticky lg:top-4">
        <section className="rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <StepLabel n={3}>Check and download</StepLabel>
            {rendering && <Loader2 size={16} className="animate-spin text-[#16A34A]" aria-label="Updating" />}
          </div>

          <div className="rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-3 flex items-center justify-center min-h-[140px]">
            {result ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={result.url}
                alt={kind === 'photo' ? 'Resized PAN card photo preview' : 'Resized signature preview'}
                width={preset.width}
                height={preset.height}
                className="block bg-[#FFFFFF] shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
                style={{
                  width: Math.min(300, preset.width * (preset.width < 200 ? 2 : 1)),
                  height: 'auto',
                  maxWidth: '100%',
                }}
              />
            ) : (
              <Loader2 className="animate-spin text-[#A1A1AA]" size={22} />
            )}
          </div>

          {result && (
            <>
              <p className="text-[11px] text-center text-[#71717A] -mt-1">
                {preset.width} × {preset.height} px • {preset.dpi} DPI • prints at about {physical}
              </p>
              <ul className="flex flex-col gap-1.5" aria-label="Upload checklist">
                {checks.map((ch) => (
                  <li key={ch.label} className="text-sm">
                    <span className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          ch.ok ? 'bg-[#16A34A] text-[#FFFFFF]' : 'bg-[#DC2626] text-[#FFFFFF]'
                        }`}
                      >
                        {ch.ok ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
                      </span>
                      <span className={ch.ok ? 'text-[#3F3F46]' : 'text-[#B91C1C] font-medium'}>{ch.label}</span>
                    </span>
                    {ch.hint && <span className="block pl-6 text-xs text-[#B45309] mt-0.5">{ch.hint}</span>}
                  </li>
                ))}
              </ul>
              {result.padded && (
                <p className="text-[11px] text-[#71717A] rounded-lg bg-[#FAFAFA] border border-[#F4F4F5] p-2">
                  Your image compressed below {preset.minKB} KB, so we added invisible filler data to reach the
                  minimum. The picture itself does not change.
                </p>
              )}
            </>
          )}

          <button
            type="button"
            onClick={download}
            disabled={!result || rendering}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-60 text-[#FFFFFF] font-semibold text-sm transition-colors active:scale-[0.99]"
          >
            <Download size={16} />
            {allOk || !result ? 'Download JPG' : 'Download anyway'}
          </button>
          {error && (
            <p className="text-xs text-[#B91C1C] flex items-start gap-1.5">
              <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
              {error}
            </p>
          )}
          <p className="text-[11px] text-[#A1A1AA] text-center">
            Limits change between notices. Confirm the size in your official form before you submit.
          </p>
        </section>

        <section className="rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] p-4 flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-[#18181B]">Fine-tune</h3>

          {kind === 'signature' && (
            <>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-[#3F3F46] flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#16A34A]" /> Auto-crop blank paper
                </span>
                {fitted ? (
                  <button
                    type="button"
                    onClick={() => {
                      setUseFit((v) => !v);
                      setCrop({ x: 0, y: 0 });
                      setZoom(1);
                    }}
                    className="text-xs font-semibold text-[#16A34A] flex items-center gap-1"
                  >
                    {useFit ? (
                      <>
                        <Undo2 size={12} /> Use full image
                      </>
                    ) : (
                      'Turn on'
                    )}
                  </button>
                ) : (
                  <span className="text-[11px] text-[#A1A1AA]">No clear ink found</span>
                )}
              </div>
              <Slider label="Clean background" value={adj.clean} min={0} max={100} onChange={(v) => setAdj({ clean: v })} suffix="%" />
              <div>
                <span className="block text-xs font-medium text-[#3F3F46] mb-1.5">Ink colour</span>
                <div className="grid grid-cols-3 gap-1.5">
                  {(
                    [
                      ['black', 'Black'],
                      ['blue', 'Blue'],
                      ['original', 'Original'],
                    ] as [InkColor, string][]
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setAdj({ ink: id })}
                      aria-pressed={adj.ink === id}
                      className={`py-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 ${
                        adj.ink === id ? 'border-[#16A34A] bg-[#F0FDF4] text-[#15803D]' : 'border-[#E4E4E7] text-[#52525B]'
                      }`}
                    >
                      {id !== 'original' && (
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: id === 'black' ? '#000000' : '#102A8C' }}
                        />
                      )}
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <Slider label="Brightness" value={adj.brightness} min={-50} max={50} onChange={(v) => setAdj({ brightness: v })} />
          <Slider label="Contrast" value={adj.contrast} min={-50} max={50} onChange={(v) => setAdj({ contrast: v })} />

          {preset.minKB > 0 && (
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={padToMin}
                onChange={(e) => setPadToMin(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#16A34A]"
              />
              <span>
                <span className="block text-xs font-medium text-[#3F3F46]">Reach minimum KB</span>
                <span className="block text-[11px] text-[#71717A]">
                  Small images often land below {preset.minKB} KB and get rejected. This tops the file up to stay
                  inside the range.
                </span>
              </span>
            </label>
          )}

          <button
            type="button"
            onClick={() => setAdjust((prev) => ({ ...prev, [kind]: kind === 'photo' ? DEFAULT_PHOTO_ADJUST : DEFAULT_SIGN_ADJUST }))}
            className="self-start text-xs font-semibold text-[#71717A] hover:text-[#18181B]"
          >
            Reset adjustments
          </button>

          {result && (
            <p className="text-[11px] text-[#A1A1AA]">
              JPEG quality {result.quality}% • limit read as {maxBytesFor(preset.maxKB).toLocaleString('en-IN')} bytes max
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

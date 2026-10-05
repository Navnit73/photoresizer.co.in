'use client';

import React, { useState, useEffect, useRef } from 'react';
import Cropper from 'react-easy-crop';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Check,
  Loader2,
  Minus,
  Plus,
  Eraser,
  ImagePlus,
  RotateCcw,
  AlertCircle,
} from 'lucide-react';
import { isLowEndDevice } from '@/app/utils/device';
import {
  makeBgRemovalInput,
  nextPaint,
  renderPassportPhoto,
  type CropAreaPercent,
} from './imageUtils';

export const PASSPORT_PRESETS = {
  IN_PASSPORT: {
    id: 'IN_PASSPORT',
    label: 'India Passport',
    shortLabel: 'India',
    size: '35×45 mm',
    width: 826,
    height: 1062,
    aspectRatio: 35 / 45,
    maxKB: 500,
    // Head (crown → chin) as a fraction of photo height, used for the on-screen guide.
    guide: { top: 0.1, chin: 0.8 },
    description: '3.5 x 4.5 cm (35x45 mm) • 826x1062 px • Max 500KB',
  },
  US: {
    id: 'US',
    label: 'US Passport / Visa',
    shortLabel: 'US',
    size: '2×2 in',
    width: 600,
    height: 600,
    aspectRatio: 1,
    maxKB: 240,
    guide: { top: 0.12, chin: 0.74 },
    description: '2 x 2 inch (51x51 mm) • 600x600 px • Max 240KB',
  },
  UK: {
    id: 'UK',
    label: 'UK Passport / Driving',
    shortLabel: 'UK',
    size: '35×45 mm',
    width: 750,
    height: 964,
    aspectRatio: 35 / 45,
    maxKB: 500,
    guide: { top: 0.1, chin: 0.8 },
    description: '35 x 45 mm • 750x964 px • HM Passport Office',
  },
  EU: {
    id: 'EU',
    label: 'EU / Schengen Visa',
    shortLabel: 'EU / Schengen',
    size: '35×45 mm',
    width: 413,
    height: 531,
    aspectRatio: 35 / 45,
    maxKB: 500,
    guide: { top: 0.1, chin: 0.8 },
    description: '3.5 x 4.5 cm (35x45 mm) • 413x531 px • Standard',
  },
} as const;

export type Region = keyof typeof PASSPORT_PRESETS;
export type PassportPreset = (typeof PASSPORT_PRESETS)[Region];

const BG_COLORS = [
  { label: 'White', value: '#ffffff' },
  { label: 'Light Gray', value: '#ececec' },
  { label: 'Light Blue', value: '#dbe9f7' },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;
const NUDGE_PX = 8;

export interface CropperSettings {
  region: Region;
  area: CropAreaPercent | null;
  useBgRemoved: boolean;
  bgColor: string;
}

interface PassportCropperProps {
  imageSrc: string;
  /** Background-removed cut-out, cached by the parent so it survives "Edit again". */
  maskSrc: string | null;
  onMaskReady: (url: string) => void;
  initialSettings?: CropperSettings | null;
  defaultRegion?: Region;
  onComplete: (file: File, settings: CropperSettings) => void;
  onChangePhoto: () => void;
}

type BgStatus = { phase: 'idle' } | { phase: 'download'; percent: number } | { phase: 'compute' };

export default function PassportCropper({
  imageSrc,
  maskSrc,
  onMaskReady,
  initialSettings,
  defaultRegion = 'IN_PASSPORT',
  onComplete,
  onChangePhoto,
}: PassportCropperProps) {
  const [region, setRegion] = useState<Region>(initialSettings?.region ?? defaultRegion);
  const preset = PASSPORT_PRESETS[region];

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [area, setArea] = useState<CropAreaPercent | null>(initialSettings?.area ?? null);
  const [cropSize, setCropSize] = useState<{ width: number; height: number } | null>(null);
  // Restores the previous framing once when coming back from the result screen.
  const [restoreArea, setRestoreArea] = useState<CropAreaPercent | undefined>(
    initialSettings?.area ?? undefined,
  );

  const [useBgRemoved, setUseBgRemoved] = useState(Boolean(initialSettings?.useBgRemoved && maskSrc));
  const [bgColor, setBgColor] = useState(initialSettings?.bgColor ?? '#ffffff');
  const [bgStatus, setBgStatus] = useState<BgStatus>({ phase: 'idle' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isRemovingBg = bgStatus.phase !== 'idle';
  const busy = isProcessing || isRemovingBg;

  // Guards against setState after unmount (e.g. user leaves while the model is still running).
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const selectRegion = (r: Region) => {
    if (r === region) return;
    setRegion(r);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setRestoreArea(undefined);
  };

  const resetFraming = () => {
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setRestoreArea(undefined);
  };

  const runBgRemoval = async () => {
    setError(null);
    setBgStatus({ phase: 'download', percent: 0 });
    await nextPaint();

    try {
      const { removeBackground } = await import('@imgly/background-removal');
      const input = await makeBgRemovalInput(imageSrc);
      const lowEnd = isLowEndDevice();
      const hasWebGPU = typeof navigator !== 'undefined' && 'gpu' in navigator;

      // Several files (runtime + model) download separately; report one combined, never-decreasing number.
      const downloads = new Map<string, [number, number]>();
      let lastPercent = 0;
      const baseConfig: import('@imgly/background-removal').Config = {
        publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/',
        // The quantized model is half the download and much lighter on weak phones.
        model: lowEnd ? 'isnet_quint8' : 'isnet_fp16',
        output: { format: 'image/png', quality: 1 },
        progress: (key, current, total) => {
          if (!mountedRef.current) return;
          if (key.startsWith('fetch')) {
            downloads.set(key, [current, total]);
            let done = 0;
            let size = 0;
            downloads.forEach(([c, t]) => {
              done += c;
              size += t;
            });
            const percent = size > 0 ? Math.min(99, Math.round((done / size) * 100)) : 0;
            if (percent > lastPercent) {
              lastPercent = percent;
              setBgStatus({ phase: 'download', percent });
            }
          } else if (key.startsWith('compute')) {
            setBgStatus((s) => (s.phase === 'compute' ? s : { phase: 'compute' }));
          }
        },
      };

      let blob: Blob;
      try {
        // On WebGPU the model runs in a worker, so the page stays responsive.
        blob = await removeBackground(
          input,
          hasWebGPU && !lowEnd ? { ...baseConfig, device: 'gpu', proxyToWorker: true } : baseConfig,
        );
      } catch (gpuErr) {
        if (!hasWebGPU || lowEnd) throw gpuErr;
        console.warn('GPU background removal failed, retrying on CPU', gpuErr);
        blob = await removeBackground(input, baseConfig);
      }

      const url = URL.createObjectURL(blob);
      if (!mountedRef.current) {
        URL.revokeObjectURL(url);
        return;
      }
      onMaskReady(url);
      setUseBgRemoved(true);
    } catch (err) {
      console.error('Background removal failed:', err);
      if (mountedRef.current) {
        setError('Could not remove the background. Check your internet connection and try again.');
      }
    } finally {
      if (mountedRef.current) setBgStatus({ phase: 'idle' });
    }
  };

  const handleToggleBg = () => {
    if (busy) return;
    if (useBgRemoved) {
      setUseBgRemoved(false);
    } else if (maskSrc) {
      setUseBgRemoved(true);
    } else {
      void runBgRemoval();
    }
  };

  const handleGenerate = async () => {
    if (!area || busy) return;
    setError(null);
    setIsProcessing(true);
    await nextPaint();
    try {
      const file = await renderPassportPhoto({
        src: imageSrc,
        maskSrc: useBgRemoved ? maskSrc : null,
        area,
        width: preset.width,
        height: preset.height,
        bgColor,
        maxBytes: preset.maxKB * 1024,
      });
      if (!mountedRef.current) return;
      onComplete(file, { region, area, useBgRemoved, bgColor });
    } catch (e) {
      console.error('Failed to create passport photo', e);
      if (mountedRef.current) setError('Something went wrong while creating the photo. Please try again.');
    } finally {
      if (mountedRef.current) setIsProcessing(false);
    }
  };

  const showCutout = useBgRemoved && Boolean(maskSrc);
  const activeImageSrc = showCutout && maskSrc ? maskSrc : imageSrc;

  // Face oval geometry, in percent of the crop box.
  const headH = (preset.guide.chin - preset.guide.top) * 100;
  const ovalCy = preset.guide.top * 100 + headH / 2;
  const ovalRy = headH / 2;
  const ovalRx = (headH * 0.37) / preset.aspectRatio;

  // The cropper doesn't restrict programmatic moves, so clamp to the photo's edges ourselves.
  const nudge = (dx: number, dy: number) => {
    if (!area || !cropSize) return;
    const imgW = (cropSize.width * 100) / area.width;
    const imgH = (cropSize.height * 100) / area.height;
    const roomLeft = (area.x / 100) * imgW;
    const roomRight = ((100 - area.x - area.width) / 100) * imgW;
    const roomTop = (area.y / 100) * imgH;
    const roomBottom = ((100 - area.y - area.height) / 100) * imgH;
    const cx = Math.max(-roomRight, Math.min(roomLeft, dx));
    const cy = Math.max(-roomBottom, Math.min(roomTop, dy));
    if (Math.abs(cx) < 0.01 && Math.abs(cy) < 0.01) return;
    setCrop((c) => ({ x: c.x + cx, y: c.y + cy }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Size selector */}
      <div>
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <span className="text-sm font-semibold text-[#18181B]">1. Choose photo size</span>
          <span className="text-[11px] sm:text-xs text-[#71717A] text-right">
            {preset.width}×{preset.height} px · max {preset.maxKB} KB
          </span>
        </div>
        <div role="radiogroup" aria-label="Passport photo size" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(Object.keys(PASSPORT_PRESETS) as Region[]).map((r) => {
            const p = PASSPORT_PRESETS[r];
            const active = r === region;
            return (
              <button
                key={r}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => selectRegion(r)}
                disabled={busy}
                className={`min-h-[52px] px-3 py-2 rounded-xl border text-left transition-colors disabled:opacity-60 ${
                  active
                    ? 'border-[#16A34A] bg-[#F0FDF4] ring-1 ring-[#16A34A]'
                    : 'border-[#E4E4E7] bg-[#FFFFFF] hover:border-[#BBF7D0]'
                }`}
              >
                <span className={`block text-sm font-semibold ${active ? 'text-[#15803D]' : 'text-[#18181B]'}`}>
                  {p.shortLabel}
                </span>
                <span className="block text-[11px] text-[#71717A]">{p.size}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 lg:gap-6">
        {/* Crop workspace */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-[#18181B]">2. Fit your face in the oval</span>
          <div
            className="relative w-full h-[min(56svh,520px)] min-h-[300px] sm:h-[480px] lg:h-[560px] rounded-xl overflow-hidden border border-[#E4E4E7] bg-[#27272A] select-none"
            style={{ touchAction: 'none' }}
          >
            {showCutout && <div className="absolute inset-0" style={{ backgroundColor: bgColor }} />}
            <Cropper
              image={activeImageSrc}
              crop={crop}
              zoom={zoom}
              minZoom={MIN_ZOOM}
              maxZoom={MAX_ZOOM}
              aspect={preset.aspectRatio}
              initialCroppedAreaPercentages={restoreArea}
              // Apply the restored framing only once; otherwise toggling the background (which swaps
              // the image) would snap the crop back to it.
              onMediaLoaded={() => setRestoreArea(undefined)}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              // onCropAreaChange (unlike onCropComplete) also fires for slider and arrow-button changes.
              onCropAreaChange={(croppedArea) => setArea(croppedArea)}
              onCropSizeChange={setCropSize}
              showGrid={false}
              zoomSpeed={0.5}
              style={{
                containerStyle: { background: 'transparent' },
                cropAreaStyle: { border: '2px solid #16A34A', color: 'rgba(0,0,0,0.6)' },
              }}
            />

            {/* Biometric guide: crown line, chin line and face oval */}
            {cropSize && (
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                style={{ width: cropSize.width, height: cropSize.height }}
              >
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <ellipse
                    cx="50"
                    cy={ovalCy}
                    rx={ovalRx}
                    ry={ovalRy}
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity="0.85"
                    strokeWidth="1.5"
                    strokeDasharray="6 5"
                    vectorEffect="non-scaling-stroke"
                  />
                  {[preset.guide.top, preset.guide.chin].map((y) => (
                    <line
                      key={y}
                      x1="4"
                      x2="96"
                      y1={y * 100}
                      y2={y * 100}
                      stroke="#4ADE80"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>
                <span
                  className="absolute right-1.5 -translate-y-full text-[10px] font-semibold text-[#4ADE80] drop-shadow"
                  style={{ top: `${preset.guide.top * 100}%` }}
                >
                  Top of head
                </span>
                <span
                  className="absolute right-1.5 text-[10px] font-semibold text-[#4ADE80] drop-shadow"
                  style={{ top: `${preset.guide.chin * 100}%` }}
                >
                  Chin
                </span>
              </div>
            )}

            {isRemovingBg && (
              <div
                role="status"
                className="absolute inset-0 z-20 bg-[#FFFFFF]/90 flex flex-col items-center justify-center gap-2 px-6 text-center text-[#18181B]"
              >
                <Loader2 className="w-8 h-8 animate-spin text-[#16A34A]" />
                <span className="text-sm font-semibold">
                  {bgStatus.phase === 'download'
                    ? `Loading AI model… ${bgStatus.percent}%`
                    : 'Removing background…'}
                </span>
                <span className="text-xs text-[#71717A] max-w-[260px]">
                  {bgStatus.phase === 'download'
                    ? 'One-time download. Your photo never leaves your device.'
                    : 'This can take a few seconds on phones. Please keep this page open.'}
                </span>
              </div>
            )}
          </div>
          <p className="text-xs text-[#71717A]">
            Drag to move · pinch or use the slider to zoom. Place the top of your head on the upper green line and
            your chin on the lower one.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4">
          <section className="bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#18181B]">Zoom</span>
              <button
                type="button"
                onClick={resetFraming}
                className="flex items-center gap-1 text-xs font-medium text-[#52525B] hover:text-[#18181B] px-2 py-1.5 -mr-2 rounded-lg"
              >
                <RotateCcw size={13} />
                Reset
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(+(z - ZOOM_STEP).toFixed(2), MIN_ZOOM))}
                disabled={zoom <= MIN_ZOOM}
                className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] text-[#52525B] hover:bg-[#F4F4F5] active:bg-[#E4E4E7] disabled:opacity-40"
                aria-label="Zoom out"
              >
                <Minus size={18} />
              </button>
              <input
                type="range"
                value={zoom}
                min={MIN_ZOOM}
                max={MAX_ZOOM}
                step={0.01}
                onChange={(e) => setZoom(Number(e.target.value))}
                aria-label="Zoom"
                className="flex-1 h-11 accent-[#16A34A] cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(+(z + ZOOM_STEP).toFixed(2), MAX_ZOOM))}
                disabled={zoom >= MAX_ZOOM}
                className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] text-[#52525B] hover:bg-[#F4F4F5] active:bg-[#E4E4E7] disabled:opacity-40"
                aria-label="Zoom in"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Fine nudge — touch users drag directly, so this is only shown on larger screens */}
            <div className="hidden sm:flex items-center justify-between pt-1">
              <span className="text-xs text-[#71717A]">Fine-tune position</span>
              <div className="grid grid-cols-3 gap-1">
                <span />
                <NudgeButton label="Move up" onClick={() => nudge(0, -NUDGE_PX)}>
                  <ArrowUp size={14} />
                </NudgeButton>
                <span />
                <NudgeButton label="Move left" onClick={() => nudge(-NUDGE_PX, 0)}>
                  <ArrowLeft size={14} />
                </NudgeButton>
                <NudgeButton label="Move down" onClick={() => nudge(0, NUDGE_PX)}>
                  <ArrowDown size={14} />
                </NudgeButton>
                <NudgeButton label="Move right" onClick={() => nudge(NUDGE_PX, 0)}>
                  <ArrowRight size={14} />
                </NudgeButton>
              </div>
            </div>
          </section>

          <section className="bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl p-4 flex flex-col gap-3">
            <span className="text-sm font-semibold text-[#18181B]">3. Background (optional)</span>
            <button
              type="button"
              onClick={handleToggleBg}
              disabled={busy}
              aria-pressed={showCutout}
              className={`w-full min-h-[44px] px-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold border transition-colors disabled:opacity-60 ${
                showCutout
                  ? 'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]'
                  : 'bg-[#FFFFFF] text-[#3F3F46] border-[#E4E4E7] hover:bg-[#FAFAFA]'
              }`}
            >
              {isRemovingBg ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Working…</span>
                </>
              ) : showCutout ? (
                <>
                  <Check size={16} />
                  <span>Plain background on · tap to undo</span>
                </>
              ) : (
                <>
                  <Eraser size={16} />
                  <span>Make background plain</span>
                </>
              )}
            </button>

            {showCutout && (
              <div className="flex gap-2" role="radiogroup" aria-label="Background colour">
                {BG_COLORS.map((c) => {
                  const active = bgColor === c.value;
                  return (
                    <button
                      key={c.value}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setBgColor(c.value)}
                      className={`flex-1 min-h-[44px] px-2 text-xs font-medium rounded-xl border flex items-center justify-center gap-1.5 ${
                        active
                          ? 'border-[#16A34A] bg-[#F0FDF4] text-[#15803D]'
                          : 'border-[#E4E4E7] bg-[#FFFFFF] text-[#52525B]'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-[#D4D4D8] shrink-0"
                        style={{ backgroundColor: c.value }}
                      />
                      <span className="truncate">{c.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
            {!showCutout && !isRemovingBg && (
              <p className="text-xs text-[#71717A]">
                Use this if your background isn&apos;t plain white or light. Runs on your device.
              </p>
            )}
          </section>
        </div>
      </div>

      {error && (
        <div role="alert" className="flex items-start gap-2 rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3 text-sm text-[#B91C1C]">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Actions — stick to the bottom of the screen on phones so they're always reachable */}
      <div className="sticky bottom-0 z-30 -mx-2 sm:mx-0 px-2 sm:px-0 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#FFFFFF]/95 backdrop-blur border-t border-[#E4E4E7] sm:border-0 sm:bg-transparent sm:backdrop-blur-none">
        <div className="flex gap-2.5 lg:justify-end">
          <button
            type="button"
            onClick={onChangePhoto}
            disabled={busy}
            className="flex-1 lg:flex-none lg:w-44 min-h-[48px] flex items-center justify-center gap-1.5 bg-[#FFFFFF] border border-[#E4E4E7] hover:bg-[#FAFAFA] text-[#3F3F46] text-sm font-semibold rounded-xl transition-colors disabled:opacity-50"
          >
            <ImagePlus size={16} />
            Change photo
          </button>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={!area || busy}
            className="flex-[1.6] lg:flex-none lg:w-64 min-h-[48px] flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] text-sm font-semibold rounded-xl transition-colors disabled:opacity-50 active:scale-[0.98]"
          >
            {isProcessing ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Creating…
              </>
            ) : (
              <>
                Create photo
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function NudgeButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="w-9 h-9 bg-[#FAFAFA] hover:bg-[#F4F4F5] active:bg-[#E4E4E7] text-[#52525B] rounded-lg border border-[#E4E4E7] flex justify-center items-center"
    >
      {children}
    </button>
  );
}

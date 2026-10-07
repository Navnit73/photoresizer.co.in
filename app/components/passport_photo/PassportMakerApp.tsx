'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import PassportCropper, { PASSPORT_PRESETS, type CropperSettings, type Region } from './PassportCropper';
import { prepareWorkingImage, formatBytes, type WorkingImage } from './imageUtils';
import { openFilePicker } from '../../utils/filePicker';
import {
  UploadCloud,
  Download,
  RefreshCw,
  CheckCircle2,
  Image as ImageIcon,
  Loader2,
  Pencil,
  Share2,
  AlertCircle,
} from 'lucide-react';

interface ResultPhoto {
  url: string;
  file: File;
  region: Region;
  canShare: boolean;
}

type WindowWithHeroFiles = Window & { __PENDING_HERO_FILES__?: File[] };

function canShareFile(file: File): boolean {
  try {
    return typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] });
  } catch {
    return false;
  }
}

function announceFileLoaded(loaded: boolean) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('editor-file-loaded', { detail: { loaded } }));
  }
}

export default function PassportMakerApp({
  initialFile,
  defaultRegion,
}: {
  initialFile?: File | null;
  defaultRegion?: Region;
}) {
  const [working, setWorking] = useState<WorkingImage | null>(null);
  const [maskSrc, setMaskSrc] = useState<string | null>(null);
  const [settings, setSettings] = useState<CropperSettings | null>(null);
  const [result, setResult] = useState<ResultPhoto | null>(null);
  const [isPreparing, setIsPreparing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Ignores a slow decode if the user picked another photo in the meantime.
  const loadIdRef = useRef(0);
  // The page hands over the hero upload several times (prop, global and repeated events);
  // decoding the same big photo again and again is what used to lock up phones.
  const lastFileRef = useRef<File | null>(null);

  // Object URLs are revoked whenever they are replaced or the tool unmounts.
  useEffect(() => () => { if (working) URL.revokeObjectURL(working.url); }, [working]);
  useEffect(() => () => { if (maskSrc) URL.revokeObjectURL(maskSrc); }, [maskSrc]);
  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  const loadIncomingFile = useCallback(async (file: File | undefined) => {
    if (!file || file === lastFileRef.current) return;
    if (file.type && !file.type.startsWith('image/')) {
      setError('Please choose an image file (JPG or PNG).');
      return;
    }
    lastFileRef.current = file;
    const loadId = ++loadIdRef.current;
    setError(null);
    setIsPreparing(true);
    announceFileLoaded(true);
    try {
      const prepared = await prepareWorkingImage(file);
      if (loadId !== loadIdRef.current) {
        URL.revokeObjectURL(prepared.url);
        return;
      }
      setWorking(prepared);
      setMaskSrc(null);
      setSettings(null);
      setResult(null);
    } catch (err) {
      if (loadId !== loadIdRef.current) return;
      console.error('Failed to load photo', err);
      lastFileRef.current = null;
      // Keep whatever photo was already open; the error shows above the current step.
      setError(err instanceof Error ? err.message : 'Could not open this photo. Please try another one.');
    } finally {
      if (loadId === loadIdRef.current) setIsPreparing(false);
    }
  }, []);

  useEffect(() => {
    const win = window as WindowWithHeroFiles;
    const pending = win.__PENDING_HERO_FILES__?.[0];
    const fileToLoad = initialFile || pending;
    if (pending) delete win.__PENDING_HERO_FILES__;
    // One-time hand-off of the file uploaded in the page hero (an external source).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (fileToLoad instanceof File) void loadIncomingFile(fileToLoad);

    const handleHeroDrop = (e: Event) => {
      const files = (e as CustomEvent<{ files: File[] }>).detail?.files;
      if (files?.length) void loadIncomingFile(files[0]);
    };
    window.addEventListener('hero-file-drop', handleHeroDrop);
    return () => window.removeEventListener('hero-file-drop', handleHeroDrop);
  }, [initialFile, loadIncomingFile]);

  // Bring the next step into view — on phones the tool is otherwise often half off-screen.
  const topRef = useRef<HTMLDivElement>(null);
  const step = isPreparing ? 'preparing' : result ? 'result' : working ? 'edit' : 'upload';
  useEffect(() => {
    if (step === 'edit' || step === 'result') {
      const el = topRef.current;
      if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [step]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    void loadIncomingFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    void loadIncomingFile(e.dataTransfer.files?.[0]);
  };

  const handleComplete = (file: File, nextSettings: CropperSettings) => {
    setSettings(nextSettings);
    setResult({ url: URL.createObjectURL(file), file, region: nextSettings.region, canShare: canShareFile(file) });
  };

  const startOver = () => {
    loadIdRef.current++;
    lastFileRef.current = null;
    setResult(null);
    setWorking(null);
    setMaskSrc(null);
    setSettings(null);
    setError(null);
    announceFileLoaded(false);
  };

  const handleShare = async () => {
    if (!result) return;
    try {
      await navigator.share({ files: [result.file], title: 'Passport photo' });
    } catch {
      // User closed the share sheet — nothing to do.
    }
  };

  const openPicker = () => openFilePicker(() => fileInputRef.current?.click());
  const resultPreset = result ? PASSPORT_PRESETS[result.region] : null;

  return (
    <div ref={topRef} className="w-full max-w-5xl mx-auto px-2 sm:px-4 scroll-mt-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/heic,image/heif,image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {step === 'upload' && (
        <div className="flex flex-col items-center justify-center py-4 sm:p-6 gap-3">
          <div
            role="button"
            tabIndex={0}
            onClick={openPicker}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openPicker();
              }
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDrop={handleDrop}
            className={`w-full max-w-xl flex flex-col items-center justify-center px-6 py-10 sm:p-12 border-2 border-dashed transition-colors cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] ${
              isDragging
                ? 'border-[#16A34A] bg-[#DCFCE7]'
                : 'border-[#BBF7D0] bg-[#F0FDF4] hover:border-[#16A34A] hover:bg-[#DCFCE7]'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A] mb-3">
              <UploadCloud size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#18181B] mb-1.5 text-center">
              Upload photo for Passport / Visa
            </h3>
            <p className="text-sm text-[#52525B] text-center max-w-xs mb-5">
              <span className="sm:hidden">Take a selfie or pick one from your gallery.</span>
              <span className="hidden sm:inline">Drag &amp; drop your portrait or click to browse.</span> Sizes for
              India, US, UK &amp; EU.
            </p>
            <span className="min-h-[48px] bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] text-sm font-semibold px-6 rounded-xl transition-colors flex items-center gap-2">
              <ImageIcon size={18} />
              Select Photo
            </span>
          </div>

          <ul className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-3 text-xs text-[#52525B]">
            {['Face the camera, neutral face', 'Even light, no shadows', 'No glasses, hats or filters'].map((tip) => (
              <li key={tip} className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#16A34A] shrink-0" />
                {tip}
              </li>
            ))}
          </ul>

          {error && <ErrorBanner message={error} />}
        </div>
      )}

      {step === 'preparing' && (
        <div role="status" className="flex flex-col items-center justify-center gap-3 py-20 text-[#52525B]">
          <Loader2 className="w-8 h-8 animate-spin text-[#16A34A]" />
          <span className="text-sm font-medium">Opening your photo…</span>
        </div>
      )}

      {step === 'edit' && working && (
        <div className="py-2 sm:py-4">
          {error && <ErrorBanner message={error} />}
          <PassportCropper
            key={working.url}
            imageSrc={working.url}
            maskSrc={maskSrc}
            onMaskReady={setMaskSrc}
            initialSettings={settings}
            defaultRegion={defaultRegion}
            onComplete={handleComplete}
            onChangePhoto={openPicker}
          />
        </div>
      )}

      {step === 'result' && result && resultPreset && (
        <div className="flex flex-col items-center justify-center py-2 sm:p-4">
          <div className="w-full max-w-3xl border border-[#E4E4E7] bg-[#FFFFFF] rounded-xl flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-1/2 p-5 sm:p-8 bg-[#FAFAFA] flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E4E4E7]">
              <div className="bg-[#FFFFFF] p-2.5 border border-[#E4E4E7] rounded-xl shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={result.url}
                  alt="Your passport photo"
                  width={resultPreset.width}
                  height={resultPreset.height}
                  className="block w-auto h-auto max-w-[220px] sm:max-w-[260px] max-h-[300px] rounded-md"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-5 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center border border-[#BBF7D0] text-[#16A34A] shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#18181B]">Photo ready</h2>
                  <p className="text-xs text-[#71717A]">{resultPreset.label}</p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-2.5 mb-5">
                <Detail label="Size" value={resultPreset.size} />
                <Detail label="Pixels" value={`${resultPreset.width}×${resultPreset.height}`} />
                <Detail label="File size" value={formatBytes(result.file.size)} highlight />
                <Detail label="Format" value="JPEG (.jpg)" />
              </dl>

              <div className="flex flex-col gap-2.5">
                <a
                  href={result.url}
                  download={`passport_photo_${result.region.toLowerCase()}_${resultPreset.width}x${resultPreset.height}.jpg`}
                  className="w-full min-h-[48px] flex justify-center items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] px-5 rounded-xl text-sm font-semibold transition-colors active:scale-[0.98]"
                >
                  <Download size={18} />
                  Download photo
                </a>
                {result.canShare && (
                  <button
                    type="button"
                    onClick={handleShare}
                    className="w-full min-h-[48px] flex justify-center items-center gap-2 bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#18181B] border border-[#E4E4E7] px-5 rounded-xl text-sm font-semibold transition-colors"
                  >
                    <Share2 size={17} />
                    Save to Photos / Share
                  </button>
                )}
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="min-h-[44px] flex justify-center items-center gap-1.5 bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#52525B] hover:text-[#18181B] border border-[#E4E4E7] px-3 rounded-xl text-sm font-medium transition-colors"
                  >
                    <Pencil size={15} />
                    Edit again
                  </button>
                  <button
                    type="button"
                    onClick={startOver}
                    className="min-h-[44px] flex justify-center items-center gap-1.5 bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#52525B] hover:text-[#18181B] border border-[#E4E4E7] px-3 rounded-xl text-sm font-medium transition-colors"
                  >
                    <RefreshCw size={15} />
                    New photo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Detail({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="p-3 border border-[#E4E4E7] rounded-xl bg-[#FAFAFA]">
      <dt className="text-[11px] text-[#71717A] font-semibold uppercase tracking-wider mb-0.5">{label}</dt>
      <dd className={`text-sm font-semibold ${highlight ? 'text-[#15803D]' : 'text-[#18181B]'}`}>{value}</dd>
    </div>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="w-full max-w-xl mx-auto mb-3 flex items-start gap-2 rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3 text-sm text-[#B91C1C]"
    >
      <AlertCircle size={16} className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

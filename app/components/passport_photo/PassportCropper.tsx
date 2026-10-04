'use client';

import React, { useState, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Check, Info, Loader2, ZoomIn, ZoomOut, Eraser } from 'lucide-react';
import { useTranslation } from '@/app/hooks/useTranslation';

interface PassportCropperProps {
  imageSrc: string;
  onComplete: (file: File) => void;
  onCancel: () => void;
}

const MAX_FILE_SIZE_MB = 0.5; // 500 KB

export const PASSPORT_PRESETS = {
  US: {
    id: 'US',
    label: 'US Passport / Visa',
    width: 600,
    height: 600,
    aspectRatio: 1,
    description: '2 x 2 inch (51x51 mm) • 600x600 px • Max 240KB'
  },
  IN_PASSPORT: {
    id: 'IN_PASSPORT',
    label: 'India Passport',
    width: 826,
    height: 1062,
    aspectRatio: 35 / 45,
    description: '3.5 x 4.5 cm (35x45 mm) • 826x1062 px • Max 500KB'
  },
  UK: {
    id: 'UK',
    label: 'UK Passport / Driving',
    width: 750,
    height: 964,
    aspectRatio: 35 / 45,
    description: '35 x 45 mm • 750x964 px • HM Passport Office'
  },
  EU: {
    id: 'EU',
    label: 'EU / Schengen Visa',
    width: 413,
    height: 531,
    aspectRatio: 35 / 45,
    description: '3.5 x 4.5 cm (35x45 mm) • 413x531 px • Standard'
  },
} as const;

export type Region = keyof typeof PASSPORT_PRESETS;

export default function PassportCropper({ imageSrc, onComplete, onCancel }: PassportCropperProps) {
  const { t } = useTranslation();
  const [region, setRegion] = useState<Region>('US');
  const activePreset = PASSPORT_PRESETS[region];

  const BG_COLORS = [
    { label: 'White', value: '#ffffff' },
    { label: 'Light Gray', value: '#f4f4f5' },
    { label: 'Off-White', value: '#fafafa' },
  ];

  // Cropper State
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [completedCrop, setCompletedCrop] = useState<{ x: number, y: number, width: number, height: number } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Background Removal State
  const [bgRemovedSrc, setBgRemovedSrc] = useState<string | null>(null);
  const [useBgRemoved, setUseBgRemoved] = useState<boolean>(false);
  const [isRemovingBg, setIsRemovingBg] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>('#ffffff');

  useEffect(() => {
    return () => {
      if (bgRemovedSrc) URL.revokeObjectURL(bgRemovedSrc);
    };
  }, [bgRemovedSrc]);

  const handleToggleBgRemoval = async () => {
    if (useBgRemoved) {
      setUseBgRemoved(false);
      return;
    }

    if (bgRemovedSrc) {
      setUseBgRemoved(true);
      return;
    }

    setIsRemovingBg(true);
    try {
      const { removeBackground } = await import('@imgly/background-removal');
      const config: import('@imgly/background-removal').Config = {
        publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/',
        model: 'isnet_fp16',
        proxyToWorker: false,
        output: {
          format: 'image/png',
          quality: 1.0,
        },
      };
      const blob = await removeBackground(imageSrc, config);
      const url = URL.createObjectURL(blob);
      setBgRemovedSrc(url);
      setUseBgRemoved(true);
    } catch (err) {
      console.error('Background removal failed:', err);
      alert(`Background removal failed: ${err instanceof Error ? err.message : err}. Please try again.`);
      setIsRemovingBg(false);
    } finally {
      setIsRemovingBg(false);
    }
  };

  async function getCroppedImg(
    src: string,
    pixelCrop: { x: number, y: number, width: number, height: number },
    targetWidth: number,
    targetHeight: number,
  ): Promise<File | null> {
    const image = new Image();
    image.src = src;
    if (!image.complete) {
      await new Promise((resolve) => (image.onload = resolve));
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('No 2d context');
    }

    canvas.width = targetWidth;
    canvas.height = targetHeight;
    ctx.imageSmoothingQuality = 'high';

    if (useBgRemoved && bgColor !== 'transparent') {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, targetWidth, targetHeight);
    }

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      targetWidth,
      targetHeight,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        async (blob) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
            return;
          }
          if (blob.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
            try {
              const imageCompression = (await import('browser-image-compression')).default;
              const file = new File([blob], 'passport_photo.jpg', { type: 'image/jpeg' });
              const options = {
                maxSizeMB: MAX_FILE_SIZE_MB,
                useWebWorker: true,
                fileType: 'image/jpeg',
              };
              const compressedFile = await imageCompression(file, options);
              resolve(compressedFile);
            } catch {
              resolve(new File([blob], 'passport_photo.jpg', { type: 'image/jpeg' }));
            }
          } else {
            resolve(new File([blob], 'passport_photo.jpg', { type: 'image/jpeg' }));
          }
        },
        'image/jpeg',
        0.92
      );
    });
  }

  const handleNext = async () => {
    if (!completedCrop) return;
    
    setIsProcessing(true);
    try {
      const activeSrc = (useBgRemoved && bgRemovedSrc) ? bgRemovedSrc : imageSrc;
      const file = await getCroppedImg(activeSrc, completedCrop, activePreset.width, activePreset.height);
      if (file) {
        onComplete(file);
      }
    } catch (e) {
      console.error('Failed to crop image', e);
      alert('Failed to process image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const activeImageSrc = (useBgRemoved && bgRemovedSrc) ? bgRemovedSrc : imageSrc;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-5 p-2 sm:p-4">
      <style dangerouslySetInnerHTML={{__html: `
        .passport-crop-area::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 5%;
          right: 5%;
          height: 1.5px;
          background-color: #16A34A;
          pointer-events: none;
          z-index: 50;
        }
        .passport-crop-area::after {
          content: '';
          position: absolute;
          top: 80%;
          left: 5%;
          right: 5%;
          height: 1.5px;
          background-color: #16A34A;
          pointer-events: none;
          z-index: 50;
        }
        .passport-crop-area {
          background-image: 
            linear-gradient(to right, transparent calc(33.33% - 0.5px), rgba(255,255,255,0.3) calc(33.33% - 0.5px), rgba(255,255,255,0.3) calc(33.33% + 0.5px), transparent calc(33.33% + 0.5px)),
            linear-gradient(to right, transparent calc(66.66% - 0.5px), rgba(255,255,255,0.3) calc(66.66% - 0.5px), rgba(255,255,255,0.3) calc(66.66% + 0.5px), transparent calc(66.66% + 0.5px)),
            linear-gradient(to bottom, transparent calc(33.33% - 0.5px), rgba(255,255,255,0.3) calc(33.33% - 0.5px), rgba(255,255,255,0.3) calc(33.33% + 0.5px), transparent calc(33.33% + 0.5px)),
            linear-gradient(to bottom, transparent calc(66.66% - 0.5px), rgba(255,255,255,0.3) calc(66.66% - 0.5px), rgba(255,255,255,0.3) calc(66.66% + 0.5px), transparent calc(66.66% + 0.5px));
        }
      `}} />

      {/* Header & Preset Selection */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E4E4E7] pb-4">
        <div className="flex flex-col gap-1 text-left">
          <h2 className="text-xl font-bold text-[#18181B]">
            Format Passport Photo
          </h2>
          <p className="text-[#71717A] text-xs sm:text-sm">
            {activePreset.description}
          </p>
        </div>
        
        {/* Preset Selector */}
        <div className="flex bg-[#FAFAFA] p-1 rounded-xl border border-[#E4E4E7] overflow-x-auto max-w-full">
          {(Object.keys(PASSPORT_PRESETS) as Region[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                setRegion(r);
                setZoom(1);
                setCrop({ x: 0, y: 0 });
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex-shrink-0 ${
                region === r 
                  ? 'bg-[#16A34A] text-[#FFFFFF]' 
                  : 'text-[#52525B] hover:text-[#18181B]'
              }`}
            >
              {PASSPORT_PRESETS[r].label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 sm:gap-6">
        
        {/* Left Column: Cropper Workspace */}
        <div className="flex flex-col gap-4">
          <div 
            className="relative w-full min-h-[320px] h-[45vh] sm:h-[460px] lg:h-[540px] rounded-xl overflow-hidden border border-[#E4E4E7] bg-[#FAFAFA] flex items-center justify-center"
            style={{ 
              backgroundColor: (useBgRemoved && bgColor !== 'transparent') ? bgColor : undefined 
            }}
          >
            <Cropper
              image={activeImageSrc}
              crop={crop}
              zoom={zoom}
              aspect={activePreset.aspectRatio}
              onCropChange={setCrop}
              onCropComplete={(_, croppedAreaPixels) => setCompletedCrop(croppedAreaPixels)}
              onZoomChange={setZoom}
              classes={{
                containerClassName: 'bg-transparent z-10',
                cropAreaClassName: 'passport-crop-area border-2 border-[#16A34A] shadow-[0_0_0_9999em_rgba(0,0,0,0.65)] rounded-none overflow-visible',
              }}
            />

            {/* Center point indicator */}
            <div className="absolute pointer-events-none z-20 w-4 h-4 flex items-center justify-center opacity-40 mix-blend-difference">
              <div className="absolute w-[1px] h-full bg-white" />
              <div className="absolute h-[1px] w-full bg-white" />
            </div>
            
            {/* Background removal loading */}
            {isRemovingBg && (
              <div className="absolute inset-0 z-30 bg-[#FFFFFF]/90 flex flex-col items-center justify-center text-[#18181B]">
                <Loader2 className="w-8 h-8 animate-spin text-[#16A34A] mb-2" />
                <span className="text-xs font-semibold">Removing Background...</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Settings & Actions */}
        <div className="flex flex-col gap-4">
          
          {/* Guide Box */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-3.5 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 text-[#15803D] font-semibold text-xs">
              <Info size={14} />
              <h4>Positioning Guide</h4>
            </div>
            <p className="text-[#166534] text-[11px] leading-relaxed">
              Align crown of head to the top green line and chin to the bottom green line for official biometric compliance.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl p-4 sm:p-5 flex flex-col gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            
            {/* Zoom Controls */}
            <section className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#18181B]">Zoom &amp; Scale</span>
                <span className="text-xs font-semibold text-[#16A34A]">{Math.round(zoom * 100)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  type="button"
                  onClick={() => setZoom(z => Math.max(z - 0.05, 1))} 
                  className="p-1 text-[#71717A] hover:text-[#18181B]" 
                  aria-label="Zoom Out"
                >
                  <ZoomOut size={15} />
                </button>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.05}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 accent-[#16A34A]"
                />
                <button 
                  type="button"
                  onClick={() => setZoom(z => Math.min(z + 0.05, 3))} 
                  className="p-1 text-[#71717A] hover:text-[#18181B]" 
                  aria-label="Zoom In"
                >
                  <ZoomIn size={15} />
                </button>
              </div>

              {/* Pan Arrows */}
              <div className="flex justify-center mt-1">
                <div className="grid grid-cols-3 gap-1">
                  <div />
                  <button type="button" onClick={() => setCrop(c => ({...c, y: c.y - 10}))} aria-label="Move Up" className="p-1.5 bg-[#FAFAFA] hover:bg-[#F4F4F5] text-[#52525B] rounded-lg border border-[#E4E4E7] flex justify-center items-center">
                    <ArrowUp size={13} />
                  </button>
                  <div />
                  <button type="button" onClick={() => setCrop(c => ({...c, x: c.x - 10}))} aria-label="Move Left" className="p-1.5 bg-[#FAFAFA] hover:bg-[#F4F4F5] text-[#52525B] rounded-lg border border-[#E4E4E7] flex justify-center items-center">
                    <ArrowLeft size={13} />
                  </button>
                  <button type="button" onClick={() => setCrop(c => ({...c, y: c.y + 10}))} aria-label="Move Down" className="p-1.5 bg-[#FAFAFA] hover:bg-[#F4F4F5] text-[#52525B] rounded-lg border border-[#E4E4E7] flex justify-center items-center">
                    <ArrowDown size={13} />
                  </button>
                  <button type="button" onClick={() => setCrop(c => ({...c, x: c.x + 10}))} aria-label="Move Right" className="p-1.5 bg-[#FAFAFA] hover:bg-[#F4F4F5] text-[#52525B] rounded-lg border border-[#E4E4E7] flex justify-center items-center">
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </section>

            <div className="h-px bg-[#F4F4F5]" />

            {/* Background Options */}
            <section className="flex flex-col gap-2.5">
              <span className="text-xs font-semibold text-[#18181B]">Background Replacement</span>
              <button
                type="button"
                onClick={handleToggleBgRemoval}
                disabled={isRemovingBg}
                className={`w-full py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold border transition-colors ${
                  useBgRemoved 
                    ? 'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]' 
                    : 'bg-[#FFFFFF] text-[#52525B] border-[#E4E4E7] hover:bg-[#FAFAFA]'
                }`}
              >
                {useBgRemoved ? (
                  <>
                    <Check size={14} />
                    <span>Plain Background Active</span>
                  </>
                ) : (
                  <>
                    <Eraser size={14} />
                    <span>Replace with Plain Background</span>
                  </>
                )}
              </button>

              {useBgRemoved && (
                <div className="flex gap-2 mt-1">
                  {BG_COLORS.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => setBgColor(c.value)}
                      className={`flex-1 py-1.5 text-[10px] font-medium rounded-lg border flex items-center justify-center gap-1 ${
                        bgColor === c.value
                          ? 'border-[#16A34A] bg-[#F0FDF4] text-[#15803D]'
                          : 'border-[#E4E4E7] bg-[#FFFFFF] text-[#71717A]'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full border border-[#E4E4E7]" style={{ backgroundColor: c.value }} />
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2.5 mt-1">
            <button
              type="button"
              onClick={onCancel}
              disabled={isProcessing || isRemovingBg}
              className="flex-1 py-2.5 bg-[#FFFFFF] border border-[#E4E4E7] hover:bg-[#FAFAFA] text-[#52525B] text-xs font-semibold rounded-xl transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!completedCrop || isProcessing || isRemovingBg}
              className="flex-[2] flex items-center justify-center gap-1.5 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] text-xs font-semibold rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors disabled:opacity-50 active:scale-[0.98]"
            >
              {isProcessing ? "Processing..." : "Generate Passport Photo"}
              {!isProcessing && <ArrowRight size={14} />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

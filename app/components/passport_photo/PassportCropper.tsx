'use client';

import React, { useState, useEffect, useRef } from 'react';
import Cropper from 'react-easy-crop';
import { ArrowLeft, ArrowRight, Check, Image as ImageIcon, Info, Loader2, Wand2, ZoomIn, ZoomOut, Eraser } from 'lucide-react';
import { useTranslation } from '@/app/hooks/useTranslation';
import imageCompression from 'browser-image-compression';
import { removeBackground, Config } from '@imgly/background-removal';

interface PassportCropperProps {
  imageSrc: string;
  onComplete: (file: File) => void;
  onCancel: () => void;
}

const ASPECT_RATIO = 35 / 45;
const TARGET_WIDTH = 826;
const TARGET_HEIGHT = 1062;
const MAX_FILE_SIZE_MB = 0.5; // 500 KB

const BG_COLORS = [
  { label: 'White', value: '#ffffff' },
  { label: 'Light Gray', value: '#f1f5f9' },
  { label: 'Slate', value: '#cbd5e1' },
];

export default function PassportCropper({ imageSrc, onComplete, onCancel }: PassportCropperProps) {
  const { t } = useTranslation();
  // Cropper State
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [completedCrop, setCompletedCrop] = useState<{ x: number, y: number, width: number, height: number } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Background Removal State
  const [bgRemovedSrc, setBgRemovedSrc] = useState<string | null>(null);
  const [useBgRemoved, setUseBgRemoved] = useState<boolean>(false);
  const [isRemovingBg, setIsRemovingBg] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>('#ffffff'); // Default passport white

  // Clean up object URLs
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
      const config: Config = {
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
  ): Promise<File | null> {
    const image = new Image();
    image.src = src;
    await new Promise((resolve) => (image.onload = resolve));

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('No 2d context');
    }

    canvas.width = TARGET_WIDTH;
    canvas.height = TARGET_HEIGHT;
    ctx.imageSmoothingQuality = 'high';

    // Fill background color if applying BG removal
    if (useBgRemoved && bgColor !== 'transparent') {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);
    }

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      TARGET_WIDTH,
      TARGET_HEIGHT,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        async (blob) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
            return;
          }
          try {
            const file = new File([blob], 'passport_photo.jpg', { type: 'image/jpeg' });
            const options = {
              maxSizeMB: MAX_FILE_SIZE_MB,
              useWebWorker: true,
              fileType: 'image/jpeg',
            };
            const compressedFile = await imageCompression(file, options);
            resolve(compressedFile);
          } catch (error) {
            reject(error);
          }
        },
        'image/jpeg',
        1.0
      );
    });
  }

  const handleNext = async () => {
    if (!completedCrop) return;
    
    setIsProcessing(true);
    try {
      const activeSrc = (useBgRemoved && bgRemovedSrc) ? bgRemovedSrc : imageSrc;
      const file = await getCroppedImg(activeSrc, completedCrop);
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
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 p-4">
      {/* Inject custom CSS for the blue guide bars directly inside the crop box */}
      <style dangerouslySetInnerHTML={{__html: `
        .passport-crop-area::before {
          content: '';
          position: absolute;
          top: 8%;
          left: 5%;
          right: 5%;
          height: 3px;
          background-color: #84cc16; /* lime-500 */
          box-shadow: 0 0 4px rgba(0,0,0,0.4);
          pointer-events: none;
        }
        .passport-crop-area::after {
          content: '';
          position: absolute;
          top: 83%;
          left: 5%;
          right: 5%;
          height: 3px;
          background-color: #84cc16; /* lime-500 */
          box-shadow: 0 0 4px rgba(0,0,0,0.4);
          pointer-events: none;
        }
      `}} />

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
          Format Passport Photo
        </h2>
        <p className="text-slate-500 font-medium">
          3.5 x 4.5 cm • 826x1062 pixels • Max 500KB
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        
        {/* Left Column: Cropper Workspace */}
        <div className="flex flex-col gap-4">
          <div 
            className="relative w-full h-[55vh] lg:h-[65vh] rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-inner flex items-center justify-center transition-colors duration-500"
            style={{ 
              backgroundColor: (useBgRemoved && bgColor !== 'transparent') ? bgColor : undefined 
            }}
          >
            {/* Checkerboard fallback if no bg color */}
            {(!useBgRemoved || bgColor === 'transparent') && (
              <div 
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}
              />
            )}

            <Cropper
              image={activeImageSrc}
              crop={crop}
              zoom={zoom}
              aspect={ASPECT_RATIO}
              onCropChange={setCrop}
              onCropComplete={(_, croppedAreaPixels) => setCompletedCrop(croppedAreaPixels)}
              onZoomChange={setZoom}
              classes={{
                containerClassName: 'bg-transparent z-10',
                cropAreaClassName: 'passport-crop-area border-2 border-lime-500/50 shadow-[0_0_0_9999em_rgba(0,0,0,0.5)] dark:shadow-[0_0_0_9999em_rgba(0,0,0,0.8)]',
              }}
            />

            {/* Center Point Crosshair */}
            <div className="absolute pointer-events-none z-20 w-4 h-4 flex items-center justify-center opacity-75">
              <div className="absolute w-[1px] h-full bg-lime-400 drop-shadow-[0_0_1px_rgba(0,0,0,0.8)]" />
              <div className="absolute h-[1px] w-full bg-lime-400 drop-shadow-[0_0_1px_rgba(0,0,0,0.8)]" />
            </div>
            
            {/* Processing Overlay */}
            {isRemovingBg && (
              <div className="absolute inset-0 z-30 bg-slate-900/60 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                <Loader2 className="w-10 h-10 animate-spin text-lime-500 mb-3" />
                <span className="font-bold tracking-wide">Removing Background...</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Settings Panel */}
        <div className="flex flex-col gap-6">
          
          {/* Instructions Box */}
          <div className="bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800/50 rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-lime-700 dark:text-lime-400 font-bold">
              <Info size={18} />
              <h4>Alignment Guide</h4>
            </div>
            <p className="text-lime-800/80 dark:text-lime-300/80 text-sm leading-relaxed">
              Drag the photo and use the zoom slider below to fit the chin and the top of the head perfectly within the <span className="font-bold">green horizontal bars</span>.
            </p>
          </div>

          <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 shadow-sm flex flex-col gap-8">
            
            {/* Step 1: Zoom */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <span className="bg-slate-100 dark:bg-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">1</span>
                  Adjust Size
                </h3>
                <span className="text-xs font-bold text-lime-600 dark:text-lime-500">
                  {Math.round(zoom * 100)}%
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ZoomOut size={16} className="text-slate-400" />
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.05}
                  aria-label="Zoom"
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 accent-lime-600 hover:accent-lime-500 cursor-grab active:cursor-grabbing"
                />
                <ZoomIn size={16} className="text-slate-400" />
              </div>
            </section>

            <div className="h-px bg-slate-100 dark:bg-slate-700/50 w-full" />

            {/* Step 2: Background */}
            <section className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span className="bg-slate-100 dark:bg-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">2</span>
                {t.passportBg}
              </h3>

              <button
                onClick={handleToggleBgRemoval}
                disabled={isRemovingBg}
                className={`relative overflow-hidden w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-200 active:scale-[0.98] ${
                  useBgRemoved 
                    ? 'bg-lime-500 hover:bg-lime-600 text-white shadow-[0_4px_14px_rgba(132,204,22,0.3)]' 
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200'
                }`}
              >
                {useBgRemoved ? (
                  <>
                    <Check size={18} />
                    <span>{t.bgRemoved}</span>
                  </>
                ) : (
                  <>
                    <Eraser size={18} />
                    <span>{t.removeBg}</span>
                  </>
                )}
              </button>

              {/* Color Picker (Only visible when BG is removed) */}
              <div className={`transition-all duration-300 overflow-hidden flex flex-col gap-3 ${useBgRemoved ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.selectColor}</span>
                <div className="grid grid-cols-3 gap-2">
                  {BG_COLORS.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setBgColor(c.value)}
                      className={`flex flex-col items-center gap-2 py-3 rounded-xl border-2 transition-all ${
                        bgColor === c.value 
                          ? 'border-lime-500 bg-lime-50 dark:bg-lime-900/20' 
                          : 'border-slate-100 dark:border-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div 
                        className="w-6 h-6 rounded-full shadow-inner border border-black/10 dark:border-white/10"
                        style={{ backgroundColor: c.value }}
                      />
                      <span className={`text-[10px] font-bold ${bgColor === c.value ? 'text-lime-700 dark:text-lime-400' : 'text-slate-500'}`}>
                        {c.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              disabled={isProcessing || isRemovingBg}
              className="flex-1 flex justify-center items-center gap-2 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-2xl transition-all disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleNext}
              disabled={!completedCrop || isProcessing || isRemovingBg}
              className="flex-[2] flex justify-center items-center gap-2 py-4 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-black rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-white/10 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
            >
              {isProcessing ? 'Saving...' : 'Export Photo'}
              {!isProcessing && <ArrowRight size={18} />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Cropper from 'react-easy-crop';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Check, Image as ImageIcon, Info, Loader2, Wand2, ZoomIn, ZoomOut, Eraser } from 'lucide-react';
import { useTranslation } from '@/app/hooks/useTranslation';
import imageCompression from 'browser-image-compression';

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
      {/* Inject custom CSS for the guide bars directly inside the crop box */}
      <style dangerouslySetInnerHTML={{__html: `
        .passport-crop-area::before {
          content: '';
          position: absolute;
          top: 8%;
          left: 5%;
          right: 5%;
          height: 1px;
          background-color: #10b981; /* emerald-500 */
          pointer-events: none;
          z-index: 50;
        }
        .passport-crop-area::after {
          content: '';
          position: absolute;
          top: 83%;
          left: 5%;
          right: 5%;
          height: 1px;
          background-color: #10b981; /* emerald-500 */
          pointer-events: none;
          z-index: 50;
        }
        /* Grid lines for perfectly centering the image */
        .passport-crop-area {
          background-image: 
            /* Vertical rule of thirds */
            linear-gradient(to right, transparent calc(33.33% - 0.5px), rgba(255,255,255,0.4) calc(33.33% - 0.5px), rgba(255,255,255,0.4) calc(33.33% + 0.5px), transparent calc(33.33% + 0.5px)),
            linear-gradient(to right, transparent calc(66.66% - 0.5px), rgba(255,255,255,0.4) calc(66.66% - 0.5px), rgba(255,255,255,0.4) calc(66.66% + 0.5px), transparent calc(66.66% + 0.5px)),
            /* Horizontal rule of thirds */
            linear-gradient(to bottom, transparent calc(33.33% - 0.5px), rgba(255,255,255,0.4) calc(33.33% - 0.5px), rgba(255,255,255,0.4) calc(33.33% + 0.5px), transparent calc(33.33% + 0.5px)),
            linear-gradient(to bottom, transparent calc(66.66% - 0.5px), rgba(255,255,255,0.4) calc(66.66% - 0.5px), rgba(255,255,255,0.4) calc(66.66% + 0.5px), transparent calc(66.66% + 0.5px)),
            /* Center crosshairs (vertical and horizontal) */
            linear-gradient(to right, transparent calc(50% - 0.5px), rgba(18, 236, 164, 0.6) calc(50% - 0.5px), rgba(16, 185, 129, 0.6) calc(50% + 0.5px), transparent calc(50% + 0.5px)),
            linear-gradient(to bottom, transparent calc(50% - 0.5px), rgba(7, 80, 57, 0.6) calc(50% - 0.5px), rgba(16, 185, 129, 0.6) calc(50% + 0.5px), transparent calc(50% + 0.5px));
        }
      `}} />

      {/* Header */}
      <div className="flex flex-col gap-1 items-start text-left border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          Format Passport Photo
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          3.5 x 4.5 cm • 826x1062 pixels • Max 500KB
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        
        {/* Left Column: Cropper Workspace */}
        <div className="flex flex-col gap-4">
          <div 
            className="relative w-full h-[60vh] lg:h-[70vh] rounded-sm overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 flex items-center justify-center transition-colors"
            style={{ 
              backgroundColor: (useBgRemoved && bgColor !== 'transparent') ? bgColor : undefined 
            }}
          >
            {/* Checkerboard fallback if no bg color */}
            {(!useBgRemoved || bgColor === 'transparent') && (
              <div 
                className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none"
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
                cropAreaClassName: 'passport-crop-area border border-emerald-500 shadow-[0_0_0_9999em_rgba(0,0,0,0.7)] dark:shadow-[0_0_0_9999em_rgba(0,0,0,0.85)] rounded-none overflow-visible',
              }}
            />

            {/* Center Point Crosshair */}
            <div className="absolute pointer-events-none z-20 w-4 h-4 flex items-center justify-center opacity-50 mix-blend-difference">
              <div className="absolute w-[1px] h-full bg-white" />
              <div className="absolute h-[1px] w-full bg-white" />
            </div>
            
            {/* Processing Overlay */}
            {isRemovingBg && (
              <div className="absolute inset-0 z-30 bg-slate-900/80 flex flex-col items-center justify-center text-white">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-500 mb-3" />
                <span className="text-sm font-semibold tracking-wide">Removing Background...</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Settings Panel */}
        <div className="flex flex-col gap-6">
          
          {/* Instructions Box */}
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold text-sm">
              <Info size={16} />
              <h4>Alignment Guide</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
              Drag the photo and use the zoom slider to fit the chin and the top of the head within the <span className="font-semibold text-emerald-600 dark:text-emerald-400">green bars</span>.
            </p>
          </div>

          <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-sm p-6 flex flex-col gap-6">
            
            {/* Step 1: Zoom & Position */}
            <section className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm">
                  <span className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 w-5 h-5 rounded-sm flex items-center justify-center text-[10px] font-bold">1</span>
                  Adjust Size & Position
                </h3>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {Math.round(zoom * 100)}%
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setZoom(z => Math.max(z - 0.05, 1))} className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors" aria-label="Zoom Out">
                  <ZoomOut size={16} />
                </button>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.05}
                  aria-label="Zoom"
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-none appearance-none cursor-grab active:cursor-grabbing accent-slate-900 dark:accent-slate-100"
                />
                <button onClick={() => setZoom(z => Math.min(z + 0.05, 3))} className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors" aria-label="Zoom In">
                  <ZoomIn size={16} />
                </button>
              </div>

              <div className="flex justify-center mt-2">
                <div className="grid grid-cols-3 gap-1">
                  <div />
                  <button onClick={() => setCrop(c => ({...c, y: c.y - 10}))} aria-label="Move Up" className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-sm flex justify-center items-center transition-colors">
                    <ArrowUp size={16} />
                  </button>
                  <div />
                  <button onClick={() => setCrop(c => ({...c, x: c.x - 10}))} aria-label="Move Left" className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-sm flex justify-center items-center transition-colors">
                    <ArrowLeft size={16} />
                  </button>
                  <button onClick={() => setCrop(c => ({...c, y: c.y + 10}))} aria-label="Move Down" className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-sm flex justify-center items-center transition-colors">
                    <ArrowDown size={16} />
                  </button>
                  <button onClick={() => setCrop(c => ({...c, x: c.x + 10}))} aria-label="Move Right" className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-sm flex justify-center items-center transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </section>

            <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />

            {/* Step 2: Background */}
            <section className="flex flex-col gap-3">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm">
                <span className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 w-5 h-5 rounded-sm flex items-center justify-center text-[10px] font-bold">2</span>
                {t.passportBg}
              </h3>

              <button
                onClick={handleToggleBgRemoval}
                disabled={isRemovingBg}
                className={`w-full py-2.5 px-4 rounded-sm flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${
                  useBgRemoved 
                    ? 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {useBgRemoved ? (
                  <>
                    <Check size={16} />
                    <span>{t.bgRemoved}</span>
                  </>
                ) : (
                  <>
                    <Eraser size={16} />
                    <span>{t.removeBg}</span>
                  </>
                )}
              </button>

              {/* Color Picker (Only visible when BG is removed) */}
              <div className={`transition-all overflow-hidden flex flex-col gap-2 ${useBgRemoved ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Select Color</span>
                <div className="grid grid-cols-3 gap-2">
                  {BG_COLORS.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setBgColor(c.value)}
                      className={`flex flex-col items-center gap-1 py-2 rounded-sm border transition-colors ${
                        bgColor === c.value 
                          ? 'border-slate-900 bg-slate-50 dark:border-slate-100 dark:bg-slate-800' 
                          : 'border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div 
                        className={`w-6 h-6 rounded-sm border border-slate-300 dark:border-slate-600 ${bgColor === c.value ? 'ring-2 ring-slate-900/10 dark:ring-slate-100/10 ring-offset-1' : ''}`}
                        style={{ backgroundColor: c.value }}
                      />
                      <span className={`text-[10px] font-semibold ${bgColor === c.value ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'}`}>
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
              className="flex-1 flex justify-center items-center py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-sm transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleNext}
              disabled={!completedCrop || isProcessing || isRemovingBg}
              className="flex-[2] flex justify-center items-center gap-2 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-semibold rounded-sm transition-colors disabled:opacity-50"
            >
              {isProcessing ? 'Saving...' : 'Export Photo'}
              {!isProcessing && <ArrowRight size={16} />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

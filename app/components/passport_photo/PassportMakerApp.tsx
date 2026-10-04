'use client';

import React, { useState, useRef, useEffect } from 'react';
import PassportCropper from './PassportCropper';
import { UploadCloud, Download, RefreshCw, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function PassportMakerApp({ initialFile }: { initialFile?: File | null }) {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadIncomingFile = (file: File) => {
    if (!file || !file.type?.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setImageSrc(url);
    setResultImage(null);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent("editor-file-loaded", { detail: { loaded: true } }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      loadIncomingFile(e.target.files[0]);
      e.target.value = '';
    }
  };

  useEffect(() => {
    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc);
    };
  }, [imageSrc]);

  useEffect(() => {
    return () => {
      if (resultImage) URL.revokeObjectURL(resultImage);
    };
  }, [resultImage]);

  useEffect(() => {
    const fileToLoad = initialFile || (typeof window !== 'undefined' && (window as any).__PENDING_HERO_FILES__?.[0]);
    if (fileToLoad && fileToLoad instanceof File) {
      if (typeof window !== 'undefined' && (window as any).__PENDING_HERO_FILES__) {
        delete (window as any).__PENDING_HERO_FILES__;
      }
      loadIncomingFile(fileToLoad);
    }

    const handleHeroDrop = (e: Event) => {
      const customEvent = e as CustomEvent<{ files: File[] }>;
      if (customEvent.detail?.files?.length > 0) {
        loadIncomingFile(customEvent.detail.files[0]);
      }
    };
    window.addEventListener("hero-file-drop", handleHeroDrop);
    return () => {
      window.removeEventListener("hero-file-drop", handleHeroDrop);
    };
  }, [initialFile]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setImageSrc(url);
        setResultImage(null);
        
        const event = new CustomEvent("editor-file-loaded", { detail: { loaded: true } });
        window.dispatchEvent(event);
      }
    }
  };

  const handleComplete = (file: File) => {
    const url = URL.createObjectURL(file);
    setResultImage(url);
    setImageSrc(null);
  };

  const handleCancel = () => {
    setImageSrc(null);
    const event = new CustomEvent("editor-file-loaded", { detail: { loaded: false } });
    window.dispatchEvent(event);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
      {!imageSrc && !resultImage && (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6">
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`w-full max-w-xl flex flex-col items-center justify-center p-8 sm:p-12 border-2 border-dashed transition-colors cursor-pointer rounded-xl ${
              isDragging 
                ? 'border-[#16A34A] bg-[#DCFCE7]' 
                : 'border-[#BBF7D0] bg-[#F0FDF4] hover:border-[#16A34A] hover:bg-[#DCFCE7]'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A] shadow-[0_1px_2px_rgba(0,0,0,0.04)] mb-3">
              <UploadCloud size={24} />
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold text-[#18181B] mb-2 text-center">
              Upload photo for Passport / Visa
            </h3>
            <p className="text-xs sm:text-sm text-[#52525B] text-center max-w-xs mb-4">
              Drag &amp; drop your portrait or click to browse. Templates for India, US &amp; UK.
            </p>
            
            <button 
              type="button"
              className="bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors flex items-center gap-2"
            >
              <ImageIcon size={16} />
              <span>Select Photo</span>
            </button>
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="hidden" 
            />
          </div>
        </div>
      )}

      {imageSrc && (
        <PassportCropper 
          imageSrc={imageSrc} 
          onComplete={handleComplete} 
          onCancel={handleCancel} 
        />
      )}

      {resultImage && (
        <div className="flex flex-col items-center justify-center p-2 sm:p-4">
          <div className="w-full max-w-3xl border border-[#E4E4E7] bg-[#FFFFFF] rounded-xl flex flex-col md:flex-row overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            
            {/* Left: Image Preview */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 bg-[#FAFAFA] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#E4E4E7]">
              <div className="bg-[#FFFFFF] p-3 border border-[#E4E4E7] rounded-xl shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={resultImage} 
                  alt="Passport Result" 
                  className="w-full max-w-[240px] sm:max-w-[280px] aspect-[35/45] object-cover rounded-lg border border-[#E4E4E7]"
                />
              </div>
            </div>

            {/* Right: Details & Actions */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center border border-[#BBF7D0] text-[#16A34A] flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#18181B]">Photo Ready</h2>
                  <p className="text-xs text-[#71717A]">Compliant and formatted for submission</p>
                </div>
              </div>

              {/* File details grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="p-3 border border-[#E4E4E7] rounded-xl bg-[#FAFAFA]">
                  <div className="text-[10px] text-[#71717A] font-semibold uppercase tracking-wider mb-0.5">Format</div>
                  <div className="text-xs font-semibold text-[#18181B]">JPEG (.jpg)</div>
                </div>
                <div className="p-3 border border-[#E4E4E7] rounded-xl bg-[#FAFAFA]">
                  <div className="text-[10px] text-[#71717A] font-semibold uppercase tracking-wider mb-0.5">File Size</div>
                  <div className="text-xs font-semibold text-[#15803D]">&lt; 500 KB</div>
                </div>
                <div className="p-3 border border-[#E4E4E7] rounded-xl bg-[#FAFAFA]">
                  <div className="text-[10px] text-[#71717A] font-semibold uppercase tracking-wider mb-0.5">Standard</div>
                  <div className="text-xs font-semibold text-[#18181B]">Biometric Locked</div>
                </div>
                <div className="p-3 border border-[#E4E4E7] rounded-xl bg-[#FAFAFA]">
                  <div className="text-[10px] text-[#71717A] font-semibold uppercase tracking-wider mb-0.5">Background</div>
                  <div className="text-xs font-semibold text-[#18181B]">Plain Neutral</div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <a 
                  href={resultImage} 
                  download="passport_photo.jpg" 
                  className="w-full flex justify-center items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-[#FFFFFF] py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors active:scale-[0.98]"
                >
                  <Download size={16} />
                  <span>Download Photo</span>
                </a>
                <button 
                  type="button"
                  onClick={() => {
                    setResultImage(null);
                    const event = new CustomEvent("editor-file-loaded", { detail: { loaded: false } });
                    window.dispatchEvent(event);
                  }} 
                  className="w-full flex justify-center items-center gap-2 bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#52525B] hover:text-[#18181B] border border-[#E4E4E7] py-2.5 px-5 rounded-xl text-xs sm:text-sm font-medium transition-colors"
                >
                  <RefreshCw size={15} />
                  <span>Create Another</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

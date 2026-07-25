import React, { useState, useRef, useEffect } from 'react';
import PassportCropper from './PassportCropper';
import { Upload, Download, RefreshCw, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function PassportMakerApp() {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setImageSrc(url);
      setResultImage(null);
      
      const event = new CustomEvent("editor-file-loaded", { detail: { loaded: true } });
      window.dispatchEvent(event);
      
      // Reset input value to allow selecting the same file again
      e.target.value = '';
    }
  };

  // Memory cleanup for imageSrc and resultImage
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
    const handleHeroDrop = (e: Event) => {
      const customEvent = e as CustomEvent<{ files: File[] }>;
      if (customEvent.detail?.files?.length > 0) {
        const file = customEvent.detail.files[0];
        if (file.type.startsWith('image/')) {
          const url = URL.createObjectURL(file);
          setImageSrc(url);
          setResultImage(null);
          
          const event = new CustomEvent("editor-file-loaded", { detail: { loaded: true } });
          window.dispatchEvent(event);
        }
      }
    };
    window.addEventListener("hero-file-drop", handleHeroDrop);
    return () => {
      window.removeEventListener("hero-file-drop", handleHeroDrop);
    };
  }, []);

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
    setImageSrc(null); // Return to uploader state, showing result below
  };

  const handleCancel = () => {
    setImageSrc(null);
    const event = new CustomEvent("editor-file-loaded", { detail: { loaded: false } });
    window.dispatchEvent(event);
  };

  return (
    <div className="w-full max-w-5xl mx-auto font-['Airbnb_Cereal_VF',Circular,sans-serif] px-2 sm:px-4">
      {!imageSrc && !resultImage && (
        <div className="flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`w-full flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 border-2 border-dashed bg-white dark:bg-slate-900 transition-colors cursor-pointer rounded-2xl
              ${isDragging 
                ? 'border-[#ff385c] bg-[#ff385c]/5 dark:border-[#ff385c]' 
                : 'border-slate-300 dark:border-slate-700 hover:border-[#ff385c] hover:bg-slate-50 dark:hover:border-slate-500 dark:hover:bg-slate-800'
              }`}
          >
            <div className={`p-3 sm:p-4 mb-2 sm:mb-4 transition-colors ${isDragging ? 'text-[#ff385c]' : 'text-[#ff385c]'}`}>
              <Upload size={32} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 text-center">
              {t.uploadYourPhoto}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center max-w-md text-xs sm:text-sm md:text-base mb-6">
              {t.dragDropBrowse}
            </p>
            
            <button className="bg-[#ff385c] hover:bg-[#e00b41] text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-full shadow-sm transition-all flex items-center gap-2 active:scale-95">
              <ImageIcon size={18} />
              {t.browseFiles}
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
        <div className="flex flex-col items-center justify-center p-2 sm:p-4 md:p-8">
          <div className="w-full max-w-4xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-sm">
            
            {/* Left: Image Preview */}
            <div className="w-full md:w-1/2 p-4 sm:p-8 bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
              <div className="bg-white dark:bg-slate-900 p-2 sm:p-3 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                <img 
                  src={resultImage} 
                  alt="Cropped Passport Result" 
                  className="w-full max-w-[260px] sm:max-w-[320px] aspect-[35/45] object-cover border border-slate-300 dark:border-slate-700 rounded-lg"
                />
              </div>
            </div>

            {/* Right: Details & Actions */}
            <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-10 flex flex-col justify-center">
              
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-500 flex-shrink-0">
                    <CheckCircle2 size={22} />
                 </div>
                 <div>
                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{t.photoIsReady}</h2>
                   <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">{t.formattedForPassport}</p>
                 </div>
              </div>

              {/* File details grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-10">
                 <div className="p-2.5 sm:p-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider">{t.formatLabel}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">JPEG</div>
                 </div>
                 <div className="p-2.5 sm:p-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider">{t.sizeLabel}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">&lt; 500KB</div>
                 </div>
                 <div className="p-2.5 sm:p-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider">{t.dimensionsLabel}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">826 x 1062 px</div>
                 </div>
                 <div className="p-2.5 sm:p-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider">{t.aspectRatio}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">3.5 x 4.5 cm</div>
                 </div>
              </div>

              <div className="flex flex-col gap-3">
                 <a 
                   href={resultImage} 
                   download="passport_photo.jpg" 
                   className="w-full flex justify-center items-center gap-2 bg-[#ff385c] hover:bg-[#e00b41] text-white py-3 sm:py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-95"
                 >
                    <Download size={18} />
                    {t.downloadPhoto}
                 </a>
                 <button 
                   onClick={() => {
                     setResultImage(null);
                     const event = new CustomEvent("editor-file-loaded", { detail: { loaded: false } });
                     window.dispatchEvent(event);
                   }} 
                   className="w-full flex justify-center items-center gap-2 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 py-3 sm:py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold transition-all active:scale-95"
                 >
                    <RefreshCw size={18} />
                    {t.createAnother}
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

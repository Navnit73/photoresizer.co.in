'use client';

import React, { useState, useRef, useEffect } from 'react';
import PassportCropper from './PassportCropper';
import { Upload, Download, RefreshCw, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function PassportMakerApp() {
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
    // Revoke old blob url to avoid memory leaks
    if (resultImage) {
      URL.revokeObjectURL(resultImage);
    }
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
    <div className="w-full max-w-5xl mx-auto">
      {!imageSrc && !resultImage && (
        <div className="flex flex-col items-center justify-center p-8 md:p-16">
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`w-full flex flex-col items-center justify-center p-12 md:p-20 border-2 border-dashed bg-white dark:bg-slate-900 transition-colors cursor-pointer rounded-sm
              ${isDragging 
                ? 'border-slate-800 bg-slate-50 dark:border-slate-300 dark:bg-slate-800' 
                : 'border-slate-300 dark:border-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:hover:border-slate-500 dark:hover:bg-slate-800'
              }`}
          >
            <div className={`p-4 mb-4 transition-colors ${isDragging ? 'text-slate-800 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
              <Upload size={32} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 text-center">
              Upload Your Photo
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center max-w-md text-sm md:text-base mb-6">
              Drag and drop an image here, or click to browse.
            </p>
            
            <button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-semibold py-2.5 px-6 rounded-sm transition-colors flex items-center gap-2">
              <ImageIcon size={18} />
              Browse Files
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
        <div className="flex flex-col items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-4xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-sm flex flex-col md:flex-row overflow-hidden shadow-sm">
            
            {/* Left: Image Preview */}
            <div className="w-full md:w-1/2 p-8 bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
              <div className="bg-white dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 rounded-sm shadow-sm">
                <img 
                  src={resultImage} 
                  alt="Cropped Passport Result" 
                  className="w-full max-w-[350px] aspect-[35/45] object-cover border border-slate-300 dark:border-slate-700 rounded-sm"
                />
              </div>
            </div>

            {/* Right: Details & Actions */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-sm bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-500 flex-shrink-0">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                   <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Photo is Ready</h2>
                   <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Successfully formatted for passport</p>
                 </div>
              </div>

              {/* File details grid */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                 <div className="p-3 border border-slate-200 dark:border-slate-800 rounded-sm bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider">Format</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">JPEG</div>
                 </div>
                 <div className="p-3 border border-slate-200 dark:border-slate-800 rounded-sm bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider">Size</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">&lt; 500KB</div>
                 </div>
                 <div className="p-3 border border-slate-200 dark:border-slate-800 rounded-sm bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider">Dimensions</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">826 x 1062 px</div>
                 </div>
                 <div className="p-3 border border-slate-200 dark:border-slate-800 rounded-sm bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider">Aspect Ratio</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">3.5 x 4.5 cm</div>
                 </div>
              </div>

              <div className="flex flex-col gap-3">
                 <a 
                   href={resultImage} 
                   download="passport_photo.jpg" 
                   className="w-full flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 py-3.5 px-6 rounded-sm text-sm font-bold transition-colors"
                 >
                    <Download size={18} />
                    Download Photo
                 </a>
                 <button 
                   onClick={() => {
                     setResultImage(null);
                     const event = new CustomEvent("editor-file-loaded", { detail: { loaded: false } });
                     window.dispatchEvent(event);
                   }} 
                   className="w-full flex justify-center items-center gap-2 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 py-3.5 px-6 rounded-sm text-sm font-bold transition-colors"
                 >
                    <RefreshCw size={18} />
                    Create Another
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

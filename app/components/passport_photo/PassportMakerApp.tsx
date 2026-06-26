'use client';

import React, { useState, useRef } from 'react';
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
      // Reset input value to allow selecting the same file again
      e.target.value = '';
    }
  };

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
          <div className="w-full max-w-2xl flex flex-col items-center p-8 md:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-sm">
            
            <div className="mb-4 text-emerald-600 dark:text-emerald-500">
              <CheckCircle2 size={32} />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 text-center">
              Photo is Ready
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 text-center bg-slate-100 dark:bg-slate-800 py-1.5 px-3 rounded-sm">
              JPEG • Max 500KB • 826x1062 • 3.5x4.5 Ratio
            </p>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-sm border border-slate-200 dark:border-slate-700">
              <img 
                src={resultImage} 
                alt="Cropped Passport Result" 
                className="w-[350px] h-[450px] object-cover border border-slate-300 dark:border-slate-600 rounded-sm"
              />
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full justify-center">
              <a 
                href={resultImage}
                download="passport_photo.jpg"
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-semibold py-3 px-6 rounded-sm transition-colors"
              >
                <Download size={18} />
                Download Result
              </a>
              
              <button 
                onClick={() => setResultImage(null)}
                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 text-sm font-semibold py-3 px-6 rounded-sm transition-colors"
              >
                <RefreshCw size={18} />
                Start Over
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

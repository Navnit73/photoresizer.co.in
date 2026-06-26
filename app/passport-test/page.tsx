'use client';

import React, { useState } from 'react';
import PassportCropper from '../components/passport_photo/PassportCropper';

export default function PassportTestPage() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setImageSrc(url);
      setResultImage(null);
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
          Passport Cropper Tester
        </h1>

        {!imageSrc && !resultImage && (
          <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800">
            <label className="cursor-pointer bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md active:scale-95">
              Select an Image to Test
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="hidden" 
              />
            </label>
            <p className="mt-4 text-sm text-slate-500">
              Upload a test image to launch the passport cropper UI.
            </p>
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
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">
                Final Cropped Output
              </h2>
              <h3 className="text-sm font-medium text-slate-500 mb-6 text-center">
                JPEG format • Max 500KB • 826x1062 Resolution • Locked 3.5x4.5 Ratio
              </h3>
              
              {/* Note: The preview image uses max-width to display reasonably, but the underlying file is the exact 826x1062 resolution */}
              <img 
                src={resultImage} 
                alt="Cropped Passport Result" 
                className="w-[350px] h-[450px] object-cover shadow-[0_0_15px_rgba(0,0,0,0.15)] border-4 border-white dark:border-slate-700"
              />
              
              <div className="mt-8 flex gap-4">
                <a 
                  href={resultImage}
                  download="passport_test_result.jpg"
                  className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition-all active:scale-95"
                >
                  Download Result
                </a>
                
                <button 
                  onClick={() => setResultImage(null)}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import HowItWorksSteps from './HowItWorksSteps';

export default function PosterPrintTool() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [paperSize, setPaperSize] = useState('A4');
  const [scale, setScale] = useState(200);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const steps = [
    { title: 'Upload', desc: 'Select the large photo you want to print.' },
    { title: 'Paper Size', desc: 'Pick your printer paper size (A4, Letter, Legal).' },
    { title: 'Scale', desc: 'Set how large you want the final poster to be.' },
    { title: 'Download PDF', desc: 'Download a tiled PDF ready to print and assemble.' }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const handleDownloadPDF = () => {
    alert("In a full implementation, this would generate and download a multi-page PDF using jsPDF or similar.");
  };

  // Simple rendering logic to simulate drawing the original image with grid lines
  useEffect(() => {
    if (canvasRef.current && imageSrc) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const img = new Image();
        img.onload = () => {
          ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
          
          // Draw image
          ctx.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
          
          // Draw grid lines to simulate pages
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          
          const cols = Math.ceil(scale / 100);
          const rows = Math.ceil(scale / 100); // simplify for preview
          
          const cellW = canvasRef.current!.width / cols;
          const cellH = canvasRef.current!.height / rows;
          
          for (let i = 1; i < cols; i++) {
            ctx.beginPath();
            ctx.moveTo(i * cellW, 0);
            ctx.lineTo(i * cellW, canvasRef.current!.height);
            ctx.stroke();
          }
          for (let i = 1; i < rows; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * cellH);
            ctx.lineTo(canvasRef.current!.width, i * cellH);
            ctx.stroke();
          }
        };
        img.src = imageSrc;
      }
    }
  }, [imageSrc, paperSize, scale]);

  return (
    <div id="poster-splitter" className="scroll-mt-24 mt-20 bg-white dark:bg-slate-800 rounded-3xl shadow-none border border-slate-200 dark:border-slate-700 p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Print a Large Photo on Multiple Pages</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Free Poster Splitter Tool</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-12">
        <div className="lg:col-span-3 xl:col-span-4 order-2 lg:order-2 flex flex-col items-center">
          <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-slate-200 dark:border-slate-700 relative min-h-[400px]">
            {!imageSrc ? (
              <div className="text-center p-8">
                <label className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-main text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors shadow-none shadow-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Upload Image
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">JPG, PNG, or WEBP up to 50MB</p>
              </div>
            ) : (
              <canvas 
                ref={canvasRef} 
                width={600} 
                height={400} 
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain bg-white shadow-sm border border-slate-300"
              />
            )}
          </div>
        </div>

        <div className="order-1 lg:order-1 lg:col-span-1 space-y-6 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Paper Size</h3>
            <select 
              value={paperSize} 
              onChange={(e) => setPaperSize(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white shadow-sm"
            >
              <option value="A4">A4 (210 x 297 mm)</option>
              <option value="Letter">US Letter (8.5 x 11 in)</option>
              <option value="Legal">Legal (8.5 x 14 in)</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-slate-900 dark:text-white">Scale</h3>
              <span className="text-sm font-medium text-accent-main dark:text-blue-400">{scale}%</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="500" 
              step="10"
              value={scale} 
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-blue-600"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Requires exactly {Math.ceil(scale/100) * Math.ceil(scale/100)} pages
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
             <button 
              onClick={handleDownloadPDF}
              disabled={!imageSrc}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 disabled:opacity-50 transition-colors shadow-none shadow-emerald-500/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
          </div>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm font-medium text-accent-main dark:text-blue-400 hover:underline">
              Download printable 4x6 photo template (.zip)
            </a>
          </div>
        </div>
      </div>

      <HowItWorksSteps steps={steps} />
    </div>
  );
}

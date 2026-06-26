'use client';

import React, { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useBgRemoval } from './BgRemovalContext';
import { downloadProcessedImage } from './utils/bgRemovalUtils';
import { UploadCloud, CheckCircle, XCircle, Download, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function BgRemoverWorkspace() {
  const { jobs, addJobs, selectedJobId, setSelectedJobId, backgroundColor, exportFormat } = useBgRemoval();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState(false);

  const selectedJob = jobs.find(j => j.id === selectedJobId) || jobs[0];

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length > 0) addJobs(acceptedFiles);
    },
    [addJobs]
  );

  React.useEffect(() => {
    const handleHeroDrop = (e: Event) => {
      const customEvent = e as CustomEvent<{ files: File[] }>;
      if (customEvent.detail?.files?.length > 0) {
        addJobs(customEvent.detail.files);
      }
    };
    window.addEventListener("hero-file-drop", handleHeroDrop);
    return () => window.removeEventListener("hero-file-drop", handleHeroDrop);
  }, [addJobs]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.webp'] },
    multiple: true,
    noClick: jobs.length > 0,
  });

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  const selectedIndex = jobs.findIndex(j => j.id === selectedJobId);
  const goPrev = () => { if (selectedIndex > 0) setSelectedJobId(jobs[selectedIndex - 1].id); };
  const goNext = () => { if (selectedIndex < jobs.length - 1) setSelectedJobId(jobs[selectedIndex + 1].id); };

  const CircularProgress = ({ progress }: { progress: number }) => {
    const r = 18;
    const circ = 2 * Math.PI * r;
    const offset = circ - (progress / 100) * circ;
    return (
      <div className="flex flex-col items-center justify-center gap-1">
        <svg className="w-10 h-10 -rotate-90" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r={r} fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="3.5" />
          <circle cx="22" cy="22" r={r} fill="transparent" stroke="#65a30d" strokeWidth="3.5"
            strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-200" />
        </svg>
        <span className="text-[9px] font-black text-white tracking-wider">{Math.round(progress)}%</span>
      </div>
    );
  };

  const getBgStyle = (): React.CSSProperties => {
    if (backgroundColor !== 'transparent') return { backgroundColor };
    return {
      backgroundImage: 'linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)',
      backgroundSize: '16px 16px',
      backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
      backgroundColor: '#f8fafc',
    };
  };

  return (
    <div className="w-full lg:flex-1 min-h-[55vh] sm:min-h-[400px] lg:min-h-0 lg:h-full flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950 relative" {...getRootProps()}>
      <input {...getInputProps()} />

      {jobs.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12">
          <div className={`w-full max-w-xl p-8 sm:p-14 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
            isDragActive
              ? 'border-lime-500 bg-lime-50 dark:bg-lime-900/30 scale-[1.01]'
              : 'border-slate-200 dark:border-slate-700 hover:border-lime-400 hover:bg-white dark:hover:bg-slate-900'
          }`}>
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-200 ${
              isDragActive ? 'bg-lime-500 text-white scale-110' : 'bg-lime-100 dark:bg-lime-900/40 text-lime-600'
            }`}>
              <UploadCloud size={32} strokeWidth={1.5} />
            </div>
            <h4 className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 tracking-tight">
              {isDragActive ? 'Drop to upload' : 'Remove backgrounds instantly'}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs leading-relaxed">
              Drag & drop images or click to select. Processed locally — your images never leave your device.
            </p>
            <div className="flex gap-2 justify-center flex-wrap">
              {['JPG', 'PNG', 'WEBP'].map(fmt => (
                <span key={fmt} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-bold tracking-wider">{fmt}</span>
              ))}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">Batch process multiple images at once</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden relative">

          {isDragActive && (
            <div className="absolute inset-0 z-50 bg-lime-500/10 backdrop-blur-sm border-4 border-lime-500 border-dashed rounded-xl flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl border border-lime-500 flex items-center gap-3">
                <UploadCloud className="text-lime-500" size={26} />
                <span className="text-base font-bold text-slate-800 dark:text-slate-100">Drop to add more images</span>
              </div>
            </div>
          )}

          {/* Thumbnail Carousel */}
          <div className="flex-shrink-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-3 pt-3 pb-3">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {jobs.length} image{jobs.length !== 1 ? 's' : ''}
              </span>
              <div className="flex items-center gap-1.5">
                {jobs.filter(j => j.status === 'done').length > 0 && (
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                    {jobs.filter(j => j.status === 'done').length} done
                  </span>
                )}
                {jobs.filter(j => j.status === 'processing' || j.status === 'queued').length > 0 && (
                  <span className="text-[10px] font-bold text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/30 px-2 py-0.5 rounded-full">
                    {jobs.filter(j => j.status === 'processing' || j.status === 'queued').length} pending
                  </span>
                )}
              </div>
            </div>

            <div className="relative flex items-center">
              <button onClick={() => scrollCarousel('left')} className="hidden sm:flex absolute left-0 z-10 w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0">
                <ChevronLeft size={14} className="text-slate-600 dark:text-slate-300" />
              </button>

              <div ref={carouselRef} className="flex overflow-x-auto gap-2 sm:gap-2.5 px-2 py-2 sm:px-8 -mx-2 sm:mx-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth">
                {jobs.map(job => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJobId(job.id)}
                    className={`relative flex-shrink-0 snap-start rounded-xl overflow-hidden transition-all duration-150 border ${
                      selectedJobId === job.id
                        ? 'border-lime-600 z-10 border-2 scale-[1.03]'
                        : 'border-slate-200 dark:border-slate-700 hover:border-lime-400 z-0'
                    }`}
                    style={{ width: 72, height: 72 }}
                  >
                    <img src={job.originalUrl} alt={job.fileName} className={`w-full h-full object-cover ${job.status === 'processing' ? 'opacity-40 grayscale' : ''}`} />

                    {job.status === 'processing' && (
                      <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                        <CircularProgress progress={job.progress} />
                      </div>
                    )}
                    {job.status === 'queued' && (
                      <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
                        <span className="text-[9px] font-black text-white uppercase ml-[0.05em]">Queue</span>
                      </div>
                    )}
                    {job.status === 'error' && (
                      <div className="absolute inset-0 bg-red-900/60 flex items-center justify-center">
                        <XCircle size={18} className="text-red-300" />
                      </div>
                    )}
                    {job.status === 'done' && (
                      <div className="absolute top-1 right-1">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm">
                          <CheckCircle size={10} className="text-white" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button onClick={() => scrollCarousel('right')} className="hidden sm:flex absolute right-0 z-10 w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0">
                <ChevronRight size={14} className="text-slate-600 dark:text-slate-300" />
              </button>
            </div>
          </div>

          {/* Preview Area */}
          <div className="flex-1 overflow-hidden flex flex-col p-3 sm:p-4 lg:p-5 min-h-0">
            <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Preview</span>
                {selectedJob && (
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 truncate max-w-[120px] sm:max-w-xs">{selectedJob.fileName}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {selectedJob && jobs.length > 1 && (
                  <div className="flex items-center gap-1">
                    <button onClick={goPrev} disabled={selectedIndex === 0} className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center disabled:opacity-30 hover:bg-slate-50 transition-colors">
                      <ChevronLeft size={12} className="text-slate-600 dark:text-slate-300" />
                    </button>
                    <span className="text-[10px] font-bold text-slate-400 px-1">{selectedIndex + 1}/{jobs.length}</span>
                    <button onClick={goNext} disabled={selectedIndex === jobs.length - 1} className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center disabled:opacity-30 hover:bg-slate-50 transition-colors">
                      <ChevronRight size={12} className="text-slate-600 dark:text-slate-300" />
                    </button>
                  </div>
                )}
                {selectedJob?.status === 'done' && selectedJob.resultUrl && (
                  <button onClick={() => setLightbox(true)} className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors">
                    <ZoomIn size={11} className="text-slate-500 dark:text-slate-400" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 min-h-[200px] sm:min-h-0" style={getBgStyle()}>
              {selectedJob ? (
                <>
                  <img
                    key={selectedJob.id + selectedJob.status}
                    src={selectedJob.status === 'done' && selectedJob.resultUrl ? selectedJob.resultUrl : selectedJob.originalUrl}
                    alt={selectedJob.fileName}
                    className="absolute inset-0 w-full h-full object-contain p-3 sm:p-5 z-10 transition-opacity duration-300"
                  />

                  {selectedJob.status === 'processing' && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px]">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl px-6 py-5 border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-3">
                        <CircularProgress progress={selectedJob.progress} />
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Removing background…</span>
                      </div>
                    </div>
                  )}

                  {selectedJob.status === 'queued' && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px]">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 border border-slate-200 dark:border-slate-700">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Waiting in queue…</span>
                      </div>
                    </div>
                  )}

                  {selectedJob.status === 'error' && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-red-50/80 dark:bg-red-950/50 backdrop-blur-[2px]">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 border border-red-100 dark:border-red-900 flex flex-col items-center gap-2">
                        <XCircle className="text-red-500" size={24} />
                        <span className="text-xs font-bold text-red-600 dark:text-red-400">Processing failed</span>
                      </div>
                    </div>
                  )}

                  {selectedJob.status === 'done' && selectedJob.resultUrl && (
                    <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                      <div className="bg-emerald-500 text-white text-[9px] font-black px-2 py-1 rounded-lg tracking-wider uppercase flex items-center gap-1">
                        <CheckCircle size={9} strokeWidth={3} /> Done
                      </div>
                      <button
                        onClick={() => downloadProcessedImage(selectedJob.resultUrl!, selectedJob.fileName, backgroundColor, exportFormat)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-lime-600 hover:bg-lime-700 active:scale-95 text-white text-xs font-bold rounded-xl transition-all duration-150"
                      >
                        <Download size={13} />
                        Download
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">Select an image to preview</span>
                </div>
              )}
            </div>
          </div>

          {/* Lightbox */}
          {lightbox && selectedJob?.resultUrl && (
            <div
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setLightbox(false)}
            >
              <img
                src={selectedJob.resultUrl}
                alt={selectedJob.fileName}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                style={getBgStyle()}
              />
              <button onClick={() => setLightbox(false)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <XCircle size={20} className="text-white" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
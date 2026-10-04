'use client';

import React, { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useBgRemoval } from './BgRemovalContext';
import { downloadProcessedImage } from './utils/bgRemovalUtils';
import { UploadCloud, CheckCircle, XCircle, Download, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const CircularProgress = ({ progress }: { progress: number }) => {
  const r = 18;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <svg className="w-9 h-9 -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r={r} fill="transparent" stroke="rgba(255,255,255,0.25)" strokeWidth="3.5" />
        <circle cx="22" cy="22" r={r} fill="transparent" stroke="#16A34A" strokeWidth="3.5"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-200" />
      </svg>
      <span className="text-[9px] font-bold text-white tracking-wider">{Math.round(progress)}%</span>
    </div>
  );
};

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

  const getBgStyle = (): React.CSSProperties => {
    if (backgroundColor !== 'transparent') return { backgroundColor };
    return {
      backgroundImage: 'linear-gradient(45deg, #e4e4e7 25%, transparent 25%), linear-gradient(-45deg, #e4e4e7 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e4e4e7 75%), linear-gradient(-45deg, transparent 75%, #e4e4e7 75%)',
      backgroundSize: '16px 16px',
      backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
      backgroundColor: '#fafafa',
    };
  };

  return (
    <div className="w-full lg:flex-1 min-h-[55vh] sm:min-h-[400px] lg:min-h-0 lg:h-full flex flex-col overflow-hidden bg-[#FAFAFA] relative" {...getRootProps()}>
      <input {...getInputProps()} />

      {jobs.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12">
          <div className={`w-full max-w-lg p-8 sm:p-12 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
            isDragActive
              ? 'border-[#16A34A] bg-[#DCFCE7]'
              : 'border-[#BBF7D0] bg-[#F0FDF4] hover:border-[#16A34A] hover:bg-[#DCFCE7]'
          }`}>
            <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A] shadow-[0_1px_2px_rgba(0,0,0,0.04)] mb-3.5">
              <UploadCloud size={24} />
            </div>
            <h4 className="text-lg font-semibold text-[#18181B] mb-1.5">
              {isDragActive ? 'Drop images to upload' : 'Remove Backgrounds Instantly'}
            </h4>
            <p className="text-xs sm:text-sm text-[#52525B] mb-5 max-w-xs">
              Drag &amp; drop photos or click to select. 100% private in-browser AI processing.
            </p>
            <div className="flex gap-1.5 justify-center flex-wrap">
              {['JPG', 'PNG', 'WEBP'].map(fmt => (
                <span key={fmt} className="px-2.5 py-0.5 bg-[#FFFFFF] border border-[#BBF7D0] text-[#15803D] rounded-md text-[10px] font-semibold">{fmt}</span>
              ))}
            </div>
            <p className="text-[11px] text-[#71717A] mt-3">Supports batch processing multiple images</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden relative">

          {isDragActive && (
            <div className="absolute inset-0 z-50 bg-[#16A34A]/10 backdrop-blur-xs border-2 border-[#16A34A] border-dashed rounded-xl flex items-center justify-center">
              <div className="bg-[#FFFFFF] px-5 py-3 rounded-xl border border-[#BBF7D0] shadow-md flex items-center gap-2.5">
                <UploadCloud className="text-[#16A34A]" size={22} />
                <span className="text-sm font-semibold text-[#18181B]">Drop to add more images</span>
              </div>
            </div>
          )}

          {/* Thumbnail Carousel */}
          <div className="flex-shrink-0 bg-[#FFFFFF] border-b border-[#E4E4E7] px-3 py-2.5">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-semibold text-[#71717A]">
                {jobs.length} image{jobs.length !== 1 ? 's' : ''}
              </span>
              <div className="flex items-center gap-1.5">
                {jobs.filter(j => j.status === 'done').length > 0 && (
                  <span className="text-[10px] font-semibold text-[#15803D] bg-[#F0FDF4] border border-[#BBF7D0] px-2 py-0.5 rounded-md">
                    {jobs.filter(j => j.status === 'done').length} complete
                  </span>
                )}
              </div>
            </div>

            <div className="relative flex items-center">
              <button 
                type="button"
                onClick={() => scrollCarousel('left')} 
                className="hidden sm:flex absolute left-0 z-10 w-7 h-7 rounded-full bg-[#FFFFFF] border border-[#E4E4E7] items-center justify-center hover:bg-[#FAFAFA] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={14} className="text-[#52525B]" />
              </button>

              <div ref={carouselRef} className="flex overflow-x-auto gap-2 px-2 py-1 sm:px-7 scrollbar-hide snap-x scroll-smooth">
                {jobs.map(job => (
                  <button
                    key={job.id}
                    type="button"
                    onClick={() => setSelectedJobId(job.id)}
                    className={`relative flex-shrink-0 snap-start rounded-xl overflow-hidden transition-all border ${
                      selectedJobId === job.id
                        ? 'border-[#16A34A] ring-2 ring-[#DCFCE7]'
                        : 'border-[#E4E4E7] hover:border-[#BBF7D0]'
                    }`}
                    style={{ width: 64, height: 64 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={job.originalUrl} alt={job.fileName} className={`w-full h-full object-cover ${job.status === 'processing' ? 'opacity-40 grayscale' : ''}`} />

                    {job.status === 'processing' && (
                      <div className="absolute inset-0 bg-[#18181B]/60 flex items-center justify-center">
                        <CircularProgress progress={job.progress} />
                      </div>
                    )}
                    {job.status === 'queued' && (
                      <div className="absolute inset-0 bg-[#18181B]/50 flex items-center justify-center">
                        <span className="text-[9px] font-bold text-white uppercase">Queue</span>
                      </div>
                    )}
                    {job.status === 'error' && (
                      <div className="absolute inset-0 bg-red-900/60 flex items-center justify-center">
                        <XCircle size={16} className="text-red-200" />
                      </div>
                    )}
                    {job.status === 'done' && (
                      <div className="absolute top-1 right-1">
                        <div className="w-4 h-4 rounded-full bg-[#16A34A] flex items-center justify-center shadow-xs">
                          <CheckCircle size={10} className="text-white" />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button 
                type="button"
                onClick={() => scrollCarousel('right')} 
                className="hidden sm:flex absolute right-0 z-10 w-7 h-7 rounded-full bg-[#FFFFFF] border border-[#E4E4E7] items-center justify-center hover:bg-[#FAFAFA] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={14} className="text-[#52525B]" />
              </button>
            </div>
          </div>

          {/* Preview Area */}
          <div className="flex-1 overflow-hidden flex flex-col p-3 sm:p-4 min-h-0">
            <div className="flex items-center justify-between mb-2 px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#71717A]">Preview</span>
                {selectedJob && (
                  <span className="text-[11px] text-[#52525B] truncate max-w-[150px] sm:max-w-xs">{selectedJob.fileName}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {selectedJob && jobs.length > 1 && (
                  <div className="flex items-center gap-1">
                    <button type="button" onClick={goPrev} disabled={selectedIndex === 0} className="w-6 h-6 rounded-lg bg-[#FFFFFF] border border-[#E4E4E7] flex items-center justify-center disabled:opacity-30 hover:bg-[#FAFAFA]">
                      <ChevronLeft size={12} className="text-[#52525B]" />
                    </button>
                    <span className="text-[10px] font-semibold text-[#71717A] px-1">{selectedIndex + 1}/{jobs.length}</span>
                    <button type="button" onClick={goNext} disabled={selectedIndex === jobs.length - 1} className="w-6 h-6 rounded-lg bg-[#FFFFFF] border border-[#E4E4E7] flex items-center justify-center disabled:opacity-30 hover:bg-[#FAFAFA]">
                      <ChevronRight size={12} className="text-[#52525B]" />
                    </button>
                  </div>
                )}
                {selectedJob?.status === 'done' && selectedJob.resultUrl && (
                  <button type="button" onClick={() => setLightbox(true)} className="w-6 h-6 rounded-lg bg-[#FFFFFF] border border-[#E4E4E7] flex items-center justify-center hover:bg-[#FAFAFA]">
                    <ZoomIn size={11} className="text-[#71717A]" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 relative rounded-2xl overflow-hidden border border-[#E4E4E7] min-h-[200px] sm:min-h-0" style={getBgStyle()}>
              {selectedJob ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={selectedJob.id + selectedJob.status}
                    src={selectedJob.status === 'done' && selectedJob.resultUrl ? selectedJob.resultUrl : selectedJob.originalUrl}
                    alt={selectedJob.fileName}
                    className="absolute inset-0 w-full h-full object-contain p-3 sm:p-5 z-10 transition-opacity duration-200"
                  />

                  {selectedJob.status === 'processing' && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#FFFFFF]/70 backdrop-blur-xs">
                      <div className="bg-[#FFFFFF] rounded-2xl px-5 py-4 border border-[#E4E4E7] flex flex-col items-center gap-2 shadow-sm">
                        <CircularProgress progress={selectedJob.progress} />
                        <span className="text-xs font-semibold text-[#18181B]">Processing Image...</span>
                      </div>
                    </div>
                  )}

                  {selectedJob.status === 'done' && selectedJob.resultUrl && (
                    <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => downloadProcessedImage(selectedJob.resultUrl!, selectedJob.fileName, backgroundColor, exportFormat)}
                        className="flex items-center gap-1.5 px-3.5 py-2 bg-[#16A34A] hover:bg-[#15803D] active:scale-95 text-[#FFFFFF] text-xs font-semibold rounded-xl transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                      >
                        <Download size={13} />
                        <span>Download</span>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#71717A] text-sm">Select an image to preview</span>
                </div>
              )}
            </div>
          </div>

          {/* Lightbox */}
          {lightbox && selectedJob?.resultUrl && (
            <div
              className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setLightbox(false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedJob.resultUrl}
                alt={selectedJob.fileName}
                className="max-w-full max-h-full object-contain rounded-xl"
                style={getBgStyle()}
              />
              <button 
                type="button"
                onClick={() => setLightbox(false)} 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center"
              >
                <XCircle size={18} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
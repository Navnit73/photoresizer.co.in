"use client";

import React, { useCallback, useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import imageCompression from "browser-image-compression";
import { useEditor, AspectRatio } from "./EditorContext";
import { useTranslation } from "@/app/hooks/useTranslation";
import {
  UploadCloud,
  Crop as CropIcon,
  Scissors,
  Check,
  X,
  Type,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const ASPECT_RATIOS: { label: AspectRatio; value: number | undefined }[] = [
  { label: "free", value: undefined },
  { label: "1:1", value: 1 },
  { label: "16:9", value: 16 / 9 },
  { label: "4:3", value: 4 / 3 },
  { label: "3:2", value: 3 / 2 },
  { label: "9:16", value: 9 / 16 },
];

export default function OriginalWorkspace() {
  const {
    imageFile,
    imageUrl,
    setImageFile,
    updateBaseImage,
    setCrop,
    aspectRatio,
    setAspectRatio,
    isBgRemoving,
    setIsBgRemoving,
    textOverlays,
    updateTextOverlay,
    selectedTextId,
    setSelectedTextId,
  } = useEditor();

  const { t } = useTranslation();

  const [isCropping, setIsCropping] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [cropState, setCropState] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [bgProgress, setBgProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingTextId = useRef<string | null>(null);
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // BG removal fake progress
  useEffect(() => {
    if (!isBgRemoving) {
      setBgProgress(0);
      return;
    }
    setBgProgress(5);
    const interval = setInterval(() => {
      setBgProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 8;
      });
    }, 600);
    return () => clearInterval(interval);
  }, [isBgRemoving]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length > 0) {
        const file = acceptedFiles[0];
        
        setIsUploading(true);
        setUploadProgress(0);
        
        const startTime = Date.now();
        const minDuration = 5000;
        
        let isCompressionDone = false;
        let compressedFileResult: File | null = null;
        let compressionError: any = null;

        // Start real compression in the background
        imageCompression(file, {
          maxSizeMB: 5,
          maxWidthOrHeight: 4096,
          useWebWorker: true,
        }).then(res => {
          isCompressionDone = true;
          compressedFileResult = res;
        }).catch(err => {
          isCompressionDone = true;
          compressionError = err;
        });

        // Run the 5-second progress bar
        const timer = setInterval(() => {
          const elapsed = Date.now() - startTime;
          // Hold at 99% max if it takes longer than 5 seconds
          const timeProgress = Math.min((elapsed / minDuration) * 100, 99);
          
          if (elapsed >= minDuration && isCompressionDone) {
            clearInterval(timer);
            setUploadProgress(100);
            
            const finalFile = compressedFileResult || file;
            if (compressionError) {
              console.error("Compression error:", compressionError);
            }

            const url = URL.createObjectURL(finalFile);
            const img = new Image();
            img.onload = () => {
              setImageFile(finalFile, url, img.width, img.height);
              setIsCropping(false);
              setCropState(undefined);
              setCompletedCrop(undefined);
              setIsUploading(false);
              setUploadProgress(0);
            };
            img.onerror = () => {
               setIsUploading(false);
            };
            img.decoding = "async";
            img.src = url;
          } else {
            setUploadProgress(timeProgress);
          }
        }, 50);
      }
    },
    [setImageFile],
  );

  useEffect(() => {
    // Check if there are any files dropped from HeroUploader before we mounted
    const w = window as any;
    if (w.__HERO_DROPPED_FILES__) {
      onDrop(w.__HERO_DROPPED_FILES__);
      delete w.__HERO_DROPPED_FILES__;
    }
  }, [onDrop]);

  useEffect(() => {
    const handleHeroDrop = (e: Event) => {
      const customEvent = e as CustomEvent<{ files: File[] }>;
      if (customEvent.detail?.files) {
        onDrop(customEvent.detail.files);
      }
    };
    window.addEventListener("hero-file-drop", handleHeroDrop);
    return () => window.removeEventListener("hero-file-drop", handleHeroDrop);
  }, [onDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    multiple: false,
  });

  const handleRemoveBg = async () => {
    if (!imageUrl || isBgRemoving) return;
    setIsBgRemoving(true);
    try {
      const { removeBackground } = await import("@imgly/background-removal");
      const config: import("@imgly/background-removal").Config = {
        publicPath:
          "https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/",
        model: "isnet_fp16",
        proxyToWorker: true,
      };
      const blob = await removeBackground(imageUrl, config);
      const url = URL.createObjectURL(blob);
      const file = new File([blob], "no-bg.png", { type: "image/png" });
      const img = new Image();
      img.onload = () => {
        setImageFile(file, url, img.width, img.height);
        setBgProgress(100);
        setTimeout(() => setIsBgRemoving(false), 400);
      };
      img.decoding = "async";
      img.src = url;
    } catch (error) {
      console.error("Error removing background:", error);
      alert(
        `Background removal failed: ${error instanceof Error ? error.message : error}. Please try a different image.`,
      );
      setIsBgRemoving(false);
    }
  };

  const handleCropComplete = async () => {
    if (completedCrop && imageRef.current) {
      const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
      const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

      const cropX = completedCrop.x * scaleX;
      const cropY = completedCrop.y * scaleY;
      const cropW = completedCrop.width * scaleX;
      const cropH = completedCrop.height * scaleY;

      const canvas = document.createElement("canvas");
      canvas.width = cropW;
      canvas.height = cropH;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(
          imageRef.current,
          cropX,
          cropY,
          cropW,
          cropH,
          0,
          0,
          cropW,
          cropH,
        );

        await new Promise<void>((resolve) => {
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const newUrl = URL.createObjectURL(blob);
                const newFile = new File([blob], "cropped.png", {
                  type: "image/png",
                });
                updateBaseImage(
                  newFile,
                  newUrl,
                  Math.round(cropW),
                  Math.round(cropH),
                );
              }
              resolve();
            },
            "image/png",
            1,
          );
        });
      }
    }
    setIsCropping(false);
  };

  const handleCancelCrop = () => {
    setIsCropping(false);
    setCropState(undefined);
    setCompletedCrop(undefined);
    setCrop(null);
  };

  const handleTextMouseDown = (
    e: React.MouseEvent | React.TouchEvent,
    id: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    draggingTextId.current = id;
    setSelectedTextId(id);

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const overlay = textOverlays.find((t) => t.id === id);
    if (!overlay) return;

    dragOffset.current = {
      x: clientX - rect.left - (overlay.x / 100) * rect.width,
      y: clientY - rect.top - (overlay.y / 100) * rect.height,
    };
  };

  const handleContainerMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!draggingTextId.current) return;
    const container = containerRef.current;
    if (!container) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const rect = container.getBoundingClientRect();

    const x = Math.max(
      0,
      Math.min(
        100,
        ((clientX - rect.left - dragOffset.current.x) / rect.width) * 100,
      ),
    );
    const y = Math.max(
      0,
      Math.min(
        100,
        ((clientY - rect.top - dragOffset.current.y) / rect.height) * 100,
      ),
    );

    updateTextOverlay(draggingTextId.current, { x, y });
  };

  const handleContainerMouseUp = () => {
    draggingTextId.current = null;
  };

  const currentRatioValue = ASPECT_RATIOS.find(
    (r) => r.label === aspectRatio,
  )?.value;

  return (
    <div className="flex-1 flex flex-col bg-bg-card/80 backdrop-blur-md shadow-sm border border-border-subtle rounded-xl overflow-hidden min-h-0 transition-colors duration-300">
      {/* Toolbar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border-subtle bg-bg-input flex-shrink-0 flex-wrap">
        <div
          role="heading"
          aria-level={2}
          className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mr-auto"
        >
          {t.canvas}
        </div>

        {imageFile && !isCropping && (
          <>
            {/* Zoom controls */}
            <div className="flex items-center bg-bg-root rounded-lg border border-border-subtle p-0.5">
              <button
                onClick={() =>
                  setZoom(Math.max(0.2, parseFloat((zoom - 0.1).toFixed(1))))
                }
                className="p-1 text-text-muted hover:text-text-main hover:bg-bg-card rounded transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut size={13} />
              </button>
              <span className="text-[10px] font-bold text-text-main w-8 text-center tabular-nums">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() =>
                  setZoom(Math.min(5, parseFloat((zoom + 0.1).toFixed(1))))
                }
                className="p-1 text-text-muted hover:text-text-main hover:bg-bg-card rounded transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn size={13} />
              </button>
            </div>

            <button
              onClick={() => {
                setIsCropping(true);
                if (!cropState) {
                  setCropState({
                    unit: '%',
                    x: 10,
                    y: 10,
                    width: 80,
                    height: 80,
                  });
                }
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold bg-accent-muted text-accent-main hover:bg-accent-main/20 rounded-lg transition-colors"
            >
              <CropIcon size={12} />
              <span>Crop</span>
            </button>
            <button
              onClick={handleRemoveBg}
              disabled={isBgRemoving}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold bg-bg-root text-text-main hover:bg-border-subtle rounded-lg transition-colors disabled:opacity-50 border border-border-subtle"
            >
              <Scissors size={12} />
              <span className="hidden xs:inline">
                {isBgRemoving ? "Removing…" : "Remove BG"}
              </span>
              <span className="xs:hidden">{isBgRemoving ? "…" : "BG"}</span>
            </button>
          </>
        )}

        {isCropping && (
          <div className="flex gap-1.5">
            <button
              onClick={handleCancelCrop}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold bg-bg-root text-text-main hover:bg-border-subtle rounded-lg transition-colors border border-border-subtle"
            >
              <X size={12} /> Cancel
            </button>
            <button
              onClick={handleCropComplete}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold bg-accent-main text-white hover:bg-accent-hover rounded-lg transition-colors"
            >
              <Check size={12} /> Apply
            </button>
          </div>
        )}
      </div>

      {/* Aspect ratio toolbar (crop mode) */}
      {isCropping && (
        <div className="bg-bg-card border-b border-border-subtle px-3 py-2 flex-shrink-0 transition-colors duration-300">
          {/* Ratio buttons */}
          <div className="flex flex-wrap gap-1.5 items-center mb-2">
            <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
              Ratio:
            </span>
            {ASPECT_RATIOS.map((ratio) => (
              <button
                key={ratio.label}
                onClick={() => {
                  setAspectRatio(ratio.label);
                  if (cropState && ratio.value) {
                    setCropState({
                      ...cropState,
                      height: cropState.width / ratio.value,
                    });
                  }
                }}
                className={`px-2 py-1 text-[10px] font-bold rounded-md transition-colors border ${
                  aspectRatio === ratio.label
                    ? "bg-accent-main text-white border-accent-main"
                    : "bg-bg-input text-text-main border-border-subtle hover:border-accent-main/50"
                }`}
              >
                {ratio.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Canvas area */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto bg-bg-root relative select-none transition-colors duration-300 min-h-0"
        onMouseMove={handleContainerMouseMove}
        onMouseUp={handleContainerMouseUp}
        onMouseLeave={handleContainerMouseUp}
        onTouchMove={handleContainerMouseMove}
        onTouchEnd={handleContainerMouseUp}
        onClick={() => {
          if (!draggingTextId.current) setSelectedTextId(null);
        }}
      >
        <style>{`
          .ReactCrop__crop-selection::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 14px;
            height: 14px;
            transform: translate(-50%, -50%);
            background: linear-gradient(to right, transparent 6px, rgba(255,255,255,0.9) 6px, rgba(255,255,255,0.9) 8px, transparent 8px),
                        linear-gradient(to bottom, transparent 6px, rgba(255,255,255,0.9) 6px, rgba(255,255,255,0.9) 8px, transparent 8px);
            pointer-events: none;
          }
        `}</style>

        <div className="min-h-full min-w-full flex items-center justify-center p-4 sm:p-6">
          {/* BG removing overlay */}
          {isBgRemoving && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-bg-card/90 backdrop-blur-md transition-colors duration-300">
              <div className="w-14 h-14 mb-4 relative">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    className="stroke-border-subtle"
                    strokeWidth="4"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    className="stroke-accent-main"
                    strokeWidth="4"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - bgProgress / 100)}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-accent-main">
                  {Math.round(bgProgress)}%
                </span>
              </div>
              <p className="text-sm font-semibold text-text-main mb-1">
                Removing Background
              </p>
              <p className="text-xs text-text-muted text-center max-w-[200px]">
                Running on-device AI — first run downloads the model (~30MB).
              </p>
            </div>
          )}

          {!imageFile ? (
            isUploading ? (
              <div className="w-full max-w-xs sm:max-w-sm p-8 sm:p-12 border-2 border-dashed border-border-subtle rounded-2xl flex flex-col items-center justify-center text-center bg-bg-card shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent-muted flex items-center justify-center mb-4">
                  <UploadCloud size={24} className="text-accent-main animate-pulse" />
                </div>
                <div className="w-full max-w-[200px] bg-bg-root rounded-full h-2 mb-4 overflow-hidden border border-border-subtle">
                  <div 
                    className="bg-accent-main h-full rounded-full transition-all duration-75" 
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-text-main mb-1.5">
                  Uploading Image...
                </h4>
                <p className="text-xs text-text-muted">{Math.round(uploadProgress)}%</p>
              </div>
            ) : (
            <div
              {...getRootProps()}
              className={`w-full max-w-xs sm:max-w-sm p-8 sm:p-12 border-2 border-dotted rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                isDragActive
                  ? "border-red-500 bg-accent-muted scale-[1.02]"
                  : "border-red-500 hover:border-red-600 hover:bg-bg-input"
              }`}
            >
              <input {...getInputProps()} />
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 transition-colors ${isDragActive ? "bg-accent-main" : "bg-accent-muted"}`}
              >
                <UploadCloud
                  size={24}
                  className={isDragActive ? "text-white" : "text-accent-main"}
                />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-text-main mb-1.5">
                {isDragActive ? t.dropIt : t.uploadImage}
              </h4>
              <p className="text-xs text-text-muted mb-4">{t.dragDropOrTap}</p>
              <div className="flex gap-1.5">
                {["JPG", "PNG", "WEBP"].map((fmt) => (
                  <span
                    key={fmt}
                    className="px-2 py-0.5 bg-bg-card border border-border-subtle text-text-muted rounded text-[10px] font-bold shadow-sm"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </div>
            )
          ) : (
            <div className="relative">
              {isCropping ? (
                <ReactCrop
                  crop={cropState}
                  onChange={(pixelCrop) => setCropState(pixelCrop)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={currentRatioValue}
                  ruleOfThirds={true}
                  className="transition-all duration-200"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    ref={imageRef}
                    src={imageUrl!}
                    alt="Crop preview"
                    style={{
                      maxHeight: `${55 * zoom}vh`,
                      maxWidth: "100%",
                    }}
                    className="w-auto object-contain"
                  />
                </ReactCrop>
              ) : (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl!}
                    alt="Original"
                    style={{
                      maxHeight: `${55 * zoom}vh`,
                      maxWidth: "100%",
                    }}
                    className="w-auto object-contain shadow-2xl shadow-black/10 rounded-sm ring-1 ring-border-subtle"
                    draggable={false}
                  />

                  {/* Text overlays */}
                  {(textOverlays || []).map((overlay) => (
                    <div
                      key={overlay.id}
                      onMouseDown={(e) => handleTextMouseDown(e, overlay.id)}
                      onTouchStart={(e) => handleTextMouseDown(e, overlay.id)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTextId(overlay.id);
                      }}
                      className={`absolute cursor-move touch-none ${selectedTextId === overlay.id ? "outline outline-2 outline-offset-2 outline-accent-main rounded" : ""}`}
                      style={{
                        left: `${overlay.x}%`,
                        top: `${overlay.y}%`,
                        transform: `translate(-50%, -50%) rotate(${overlay.rotation}deg)`,
                        fontSize: `${overlay.fontSize * zoom}px`,
                        color: overlay.color,
                        fontWeight: overlay.fontWeight,
                        opacity: overlay.opacity / 100,
                        textAlign: overlay.align,
                        fontFamily: overlay.fontFamily,
                        userSelect: "none",
                        zIndex: 10,
                        whiteSpace: "nowrap",
                        textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                      }}
                    >
                      {overlay.text}
                    </div>
                  ))}

                  {selectedTextId && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/60 text-white text-[10px] rounded-full pointer-events-none backdrop-blur-sm whitespace-nowrap">
                      <Type size={10} className="inline mr-1" />
                      Drag to reposition
                    </div>
                  )}
                </div>
              )}

              {/* Live crop dimensions */}
              {isCropping &&
                completedCrop &&
                completedCrop.width > 0 &&
                completedCrop.height > 0 &&
                imageRef.current && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/70 text-white text-xs font-bold rounded-full pointer-events-none backdrop-blur-sm">
                    {Math.round(
                      completedCrop.width *
                        (imageRef.current.naturalWidth /
                          imageRef.current.width),
                    )}{" "}
                    ×{" "}
                    {Math.round(
                      completedCrop.height *
                        (imageRef.current.naturalHeight /
                          imageRef.current.height),
                    )}{" "}
                    px
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

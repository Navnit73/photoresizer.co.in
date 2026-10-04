"use client";

import React, { useCallback, useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
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
  Undo2,
  Redo2,
  RefreshCcw,
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
    backgroundColor,
    undo,
    redo,
    canUndo,
    canRedo,
    reset,
  } = useEditor();

  const { t } = useTranslation();

  const [isCropping, setIsCropping] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [cropState, setCropState] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [cropPixelDimensions, setCropPixelDimensions] = useState<{ width: number; height: number } | null>(null);
  const [bgProgress, setBgProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingTextId = useRef<string | null>(null);
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // BG removal progress simulation
  useEffect(() => {
    if (!isBgRemoving) return;
    const interval = setInterval(() => {
      setBgProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 8;
      });
    }, 600);
    return () => {
      clearInterval(interval);
      setBgProgress(0);
    };
  }, [isBgRemoving]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length > 0) {
        const file = acceptedFiles[0];
        setIsUploading(true);
        setUploadProgress(40);

        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
          setImageFile(file, url, img.naturalWidth || img.width, img.naturalHeight || img.height);
          setIsCropping(false);
          setCropState(undefined);
          setCompletedCrop(undefined);
          setCropPixelDimensions(null);
          setIsUploading(false);
          setUploadProgress(100);
        };
        img.onerror = () => {
          setIsUploading(false);
          setUploadProgress(0);
          URL.revokeObjectURL(url);
        };
        img.decoding = "async";
        img.src = url;
      }
    },
    [setImageFile],
  );

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
        updateBaseImage(file, url, img.width, img.height);
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
    const imgEl = imageRef.current || (containerRef.current?.querySelector('img') as HTMLImageElement);
    const targetContainer = imgEl?.parentElement || containerRef.current;
    if (!targetContainer) return;

    const rect = targetContainer.getBoundingClientRect();
    const overlay = textOverlays.find((t) => t.id === id);
    if (!overlay) return;

    dragOffset.current = {
      x: clientX - rect.left - (overlay.x / 100) * rect.width,
      y: clientY - rect.top - (overlay.y / 100) * rect.height,
    };
  };

  const handleContainerMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!draggingTextId.current) return;
    const imgEl = imageRef.current || (containerRef.current?.querySelector('img') as HTMLImageElement);
    const targetContainer = imgEl?.parentElement || containerRef.current;
    if (!targetContainer) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const rect = targetContainer.getBoundingClientRect();

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
    <div className="flex-1 flex flex-col bg-[#FAFAFA] overflow-hidden min-h-0">
      {/* Top Workspace Toolbar */}
      {imageFile && (
        <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 border-b border-[#E4E4E7] bg-[#FFFFFF] flex-shrink-0 flex-wrap">
          
          {/* Left Controls: Undo, Redo, Reset */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl p-0.5">
              <button
                type="button"
                onClick={undo}
                disabled={!canUndo}
                className="p-1.5 rounded-lg text-[#52525B] hover:text-[#18181B] hover:bg-[#FFFFFF] disabled:opacity-30 transition-colors"
                title="Undo"
                aria-label="Undo"
              >
                <Undo2 size={13} />
              </button>
              <div className="w-[1px] h-3.5 bg-[#E4E4E7] mx-0.5" />
              <button
                type="button"
                onClick={redo}
                disabled={!canRedo}
                className="p-1.5 rounded-lg text-[#52525B] hover:text-[#18181B] hover:bg-[#FFFFFF] disabled:opacity-30 transition-colors"
                title="Redo"
                aria-label="Redo"
              >
                <Redo2 size={13} />
              </button>
            </div>

            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-1 text-xs font-semibold text-[#52525B] hover:text-[#16A34A] transition-colors px-2.5 py-1.5 rounded-xl hover:bg-[#F0FDF4]"
              title="Reset Image"
            >
              <RefreshCcw size={12} />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Center Controls: Zoom, Crop, BG Remover */}
          {!isCropping && (
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-[#FAFAFA] rounded-xl border border-[#E4E4E7] p-0.5">
                <button
                  type="button"
                  onClick={() =>
                    setZoom(Math.max(0.2, parseFloat((zoom - 0.1).toFixed(1))))
                  }
                  className="p-1.5 text-[#52525B] hover:text-[#18181B] rounded-lg transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={13} />
                </button>
                <span className="text-[11px] font-semibold text-[#18181B] w-9 text-center tabular-nums">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setZoom(Math.min(5, parseFloat((zoom + 0.1).toFixed(1))))
                  }
                  className="p-1.5 text-[#52525B] hover:text-[#18181B] rounded-lg transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={13} />
                </button>
              </div>

              <button
                type="button"
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
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#FFFFFF] text-[#18181B] border border-[#E4E4E7] hover:border-[#BBF7D0] hover:bg-[#F0FDF4] hover:text-[#15803D] rounded-xl transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <CropIcon size={13} />
                <span>Crop</span>
              </button>
              
              <button
                type="button"
                onClick={handleRemoveBg}
                disabled={isBgRemoving}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0] hover:bg-[#DCFCE7] rounded-xl transition-colors disabled:opacity-50"
              >
                <Scissors size={13} />
                <span>{isBgRemoving ? "Removing BG..." : "Remove BG"}</span>
              </button>
            </div>
          )}

          {/* Crop Mode Actions */}
          {isCropping && (
            <div className="flex gap-2 ml-auto">
              <button
                type="button"
                onClick={handleCancelCrop}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-[#FFFFFF] text-[#52525B] hover:bg-[#FAFAFA] rounded-xl transition-colors border border-[#E4E4E7]"
              >
                <X size={13} /> Cancel
              </button>
              <button
                type="button"
                onClick={handleCropComplete}
                className="flex items-center gap-1 px-4 py-1.5 text-xs font-semibold bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <Check size={13} /> Apply Crop
              </button>
            </div>
          )}
        </div>
      )}

      {/* Aspect ratio selector when cropping */}
      {isCropping && (
        <div className="bg-[#FFFFFF] border-b border-[#E4E4E7] px-4 py-2 flex-shrink-0">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider">
              Ratio:
            </span>
            {ASPECT_RATIOS.map((ratio) => (
              <button
                key={ratio.label}
                type="button"
                onClick={() => {
                  setAspectRatio(ratio.label);
                  if (cropState && ratio.value && imageRef.current) {
                    const imgW = imageRef.current.naturalWidth || 1;
                    const imgH = imageRef.current.naturalHeight || 1;
                    const targetHeightPct = (cropState.width * (imgW / imgH)) / ratio.value;
                    setCropState({
                      ...cropState,
                      height: Math.min(100, targetHeightPct),
                    });
                  }
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors border ${
                  aspectRatio === ratio.label
                    ? "bg-[#F0FDF4] text-[#15803D] border-[#16A34A]"
                    : "bg-[#FAFAFA] text-[#52525B] border-[#E4E4E7] hover:border-[#BBF7D0]"
                }`}
              >
                {ratio.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Canvas workspace area */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto bg-[#FAFAFA] relative select-none min-h-0"
        onMouseMove={handleContainerMouseMove}
        onMouseUp={handleContainerMouseUp}
        onMouseLeave={handleContainerMouseUp}
        onTouchMove={handleContainerMouseMove}
        onTouchEnd={handleContainerMouseUp}
        onClick={() => {
          if (!draggingTextId.current) setSelectedTextId(null);
        }}
      >
        <div className="min-h-full min-w-full flex items-center justify-center p-4 sm:p-6">
          
          {/* BG removing overlay */}
          {isBgRemoving && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFFFF]/90 backdrop-blur-sm">
              <div className="w-12 h-12 mb-3 relative">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" className="stroke-[#E4E4E7]" strokeWidth="4" />
                  <circle
                    cx="32" cy="32" r="28" fill="none" className="stroke-[#16A34A]" strokeWidth="4"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - bgProgress / 100)}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#16A34A]">
                  {Math.round(bgProgress)}%
                </span>
              </div>
              <p className="text-sm font-semibold text-[#18181B] mb-1">
                Removing Background...
              </p>
              <p className="text-xs text-[#71717A] text-center max-w-[220px]">
                Processed locally in browser
              </p>
            </div>
          )}

          {!imageFile ? (
            isUploading ? (
              <div className="w-full max-w-sm p-8 sm:p-10 border-2 border-dashed border-[#BBF7D0] rounded-2xl flex flex-col items-center justify-center text-center bg-[#F0FDF4]">
                <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] text-[#16A34A] flex items-center justify-center mb-3">
                  <UploadCloud size={24} className="animate-pulse" />
                </div>
                <h4 className="text-sm font-semibold text-[#18181B] mb-1">
                  Loading Image...
                </h4>
                <p className="text-xs text-[#71717A]">{Math.round(uploadProgress)}%</p>
              </div>
            ) : (
              <div
                {...getRootProps()}
                className={`w-full max-w-sm p-8 sm:p-10 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-[#16A34A] bg-[#DCFCE7]"
                    : "border-[#BBF7D0] bg-[#F0FDF4] hover:border-[#16A34A] hover:bg-[#DCFCE7]"
                }`}
              >
                <input {...getInputProps()} />
                <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] text-[#16A34A] flex items-center justify-center mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <UploadCloud size={24} />
                </div>
                <h4 className="text-base font-semibold text-[#18181B] mb-1">
                  {isDragActive ? "Drop image here" : "Upload an image"}
                </h4>
                <p className="text-xs text-[#52525B] mb-4">Click to browse or drag and drop</p>
                <div className="flex gap-1.5">
                  {["JPG", "PNG", "WEBP"].map((fmt) => (
                    <span
                      key={fmt}
                      className="px-2.5 py-0.5 bg-[#FFFFFF] border border-[#BBF7D0] text-[#15803D] rounded-md text-[10px] font-semibold"
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
                  onComplete={(c) => {
                    setCompletedCrop(c);
                    if (imageRef.current && c.width > 0 && c.height > 0) {
                      const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
                      const scaleY = imageRef.current.naturalHeight / imageRef.current.height;
                      setCropPixelDimensions({
                        width: Math.round(c.width * scaleX),
                        height: Math.round(c.height * scaleY),
                      });
                    } else {
                      setCropPixelDimensions(null);
                    }
                  }}
                  aspect={currentRatioValue}
                  ruleOfThirds={true}
                  className="transition-all duration-150"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    ref={imageRef}
                    src={imageUrl!}
                    alt="Crop preview"
                    style={{
                      maxHeight: `${55 * zoom}vh`,
                      maxWidth: "100%",
                      backgroundColor: backgroundColor === 'transparent' ? undefined : backgroundColor,
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
                      backgroundColor: backgroundColor === 'transparent' ? undefined : backgroundColor,
                    }}
                    className="w-auto object-contain shadow-sm rounded-lg border border-[#E4E4E7]"
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
                      className={`absolute cursor-move touch-none ${selectedTextId === overlay.id ? "outline outline-2 outline-[#16A34A] rounded" : ""}`}
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
                        textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                      }}
                    >
                      {overlay.text}
                    </div>
                  ))}

                  {selectedTextId && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#18181B]/80 text-white text-[11px] font-medium rounded-lg pointer-events-none whitespace-nowrap">
                      <Type size={11} className="inline mr-1" />
                      Drag text to position
                    </div>
                  )}
                </div>
              )}

              {/* Crop dimensions badge */}
              {isCropping &&
                cropPixelDimensions &&
                cropPixelDimensions.width > 0 &&
                cropPixelDimensions.height > 0 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#18181B]/80 text-white text-xs font-semibold rounded-lg pointer-events-none">
                    {cropPixelDimensions.width} × {cropPixelDimensions.height} px
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

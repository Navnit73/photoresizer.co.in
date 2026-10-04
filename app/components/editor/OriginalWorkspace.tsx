"use client";

import React, { useCallback, useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDropzone } from "react-dropzone";
import type { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useEditor, AspectRatio, getStripLines } from "./EditorContext";
import { prepareImage } from "../../utils/imagePrep";
import { isLowEndDevice } from "../../utils/device";
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
  RotateCcw,
  RotateCw,
} from "lucide-react";

// The crop widget is only needed once the user clicks "Crop" — keep it out of the initial editor bundle.
const ReactCrop = dynamic(() => import("react-image-crop"), { ssr: false });

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
    previewUrl,
    loadFile,
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
    rotation,
    setRotation,
    strip,
    undo,
    redo,
    canUndo,
    canRedo,
    reset,
  } = useEditor();

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
  // Text dragging is applied straight to the DOM (rAF-throttled) and committed to state on release,
  // so a drag doesn't re-render the editor / reschedule image processing on every pointer move.
  const overlayEls = useRef<Map<string, HTMLDivElement>>(new Map());
  const dragPos = useRef<{ x: number; y: number } | null>(null);
  const dragRaf = useRef<number | null>(null);
  const displayUrl = previewUrl || imageUrl;

  useEffect(() => {
    return () => {
      if (dragRaf.current !== null) cancelAnimationFrame(dragRaf.current);
    };
  }, []);

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

  // Files coming from the hero uploader are handled (once) by EditorProvider; this is for in-editor drops.
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles?.length > 0) {
        const file = acceptedFiles[0];
        setIsUploading(true);
        setUploadProgress(40);

        const ok = await loadFile(file);
        if (ok) {
          setIsCropping(false);
          setCropState(undefined);
          setCompletedCrop(undefined);
          setCropPixelDimensions(null);
          setUploadProgress(100);
        } else {
          setUploadProgress(0);
        }
        setIsUploading(false);
      }
    },
    [loadFile],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    multiple: false,
  });

  const handleRemoveBg = async () => {
    if (!imageUrl || isBgRemoving) return;
    setIsBgRemoving(true);
    try {
      const lowEnd = isLowEndDevice();
      const { removeBackground } = await import("@imgly/background-removal");
      const config: import("@imgly/background-removal").Config = {
        publicPath:
          "https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/",
        // Smaller quantized model + screen-sized input keeps weak devices from running out of memory.
        model: lowEnd ? "isnet_quint8" : "isnet_fp16",
        proxyToWorker: true,
      };
      const blob = await removeBackground(lowEnd ? displayUrl || imageUrl : imageUrl, config);
      const file = new File([blob], "no-bg.png", { type: "image/png" });
      const prepared = await prepareImage(file);
      updateBaseImage(file, prepared.url, prepared.width, prepared.height, prepared.previewUrl);
      setBgProgress(100);
      setTimeout(() => setIsBgRemoving(false), 400);
    } catch (error) {
      console.error("Error removing background:", error);
      alert(
        `Background removal failed: ${error instanceof Error ? error.message : error}. Please try a different image.`,
      );
      setIsBgRemoving(false);
    }
  };

  const handleCropComplete = async () => {
    const imgEl = imageRef.current;
    if (completedCrop && imgEl && imageFile && imgEl.width > 0 && imgEl.height > 0) {
      try {
        // The crop UI works on the (possibly downscaled) display image, but the result must be cut
        // from the full-resolution original — so map the selection to fractions and re-apply it there.
        const fx = completedCrop.x / imgEl.width;
        const fy = completedCrop.y / imgEl.height;
        const fw = completedCrop.width / imgEl.width;
        const fh = completedCrop.height / imgEl.height;

        const bitmap = await createImageBitmap(imageFile);
        const srcX = Math.max(0, Math.round(fx * bitmap.width));
        const srcY = Math.max(0, Math.round(fy * bitmap.height));
        const cropW = Math.max(1, Math.min(bitmap.width - srcX, Math.round(fw * bitmap.width)));
        const cropH = Math.max(1, Math.min(bitmap.height - srcY, Math.round(fh * bitmap.height)));

        const canvas = document.createElement("canvas");
        canvas.width = cropW;
        canvas.height = cropH;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(bitmap, srcX, srcY, cropW, cropH, 0, 0, cropW, cropH);
          bitmap.close();

          // PNG-encoding a large photo is very slow on weak CPUs; only pay for it when alpha may matter.
          const keepAlpha = imageFile.type !== "image/jpeg";
          const mime = keepAlpha ? "image/png" : "image/jpeg";
          const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, mime, 0.97),
          );
          canvas.width = 0;
          canvas.height = 0;

          if (blob) {
            const newFile = new File([blob], keepAlpha ? "cropped.png" : "cropped.jpg", {
              type: mime,
            });
            const prepared = await prepareImage(newFile);
            updateBaseImage(newFile, prepared.url, prepared.width, prepared.height, prepared.previewUrl);
          }
        } else {
          bitmap.close();
        }
      } catch (error) {
        console.error("Crop failed:", error);
      }
    }
    setIsCropping(false);
    setCropState(undefined);
    setCompletedCrop(undefined);
    setCropPixelDimensions(null);
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
    // React registers touchstart as passive; only mouse events can be default-prevented safely.
    if (!("touches" in e) && e.cancelable) e.preventDefault();
    e.stopPropagation();
    draggingTextId.current = id;
    dragPos.current = null;
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

    dragPos.current = { x, y };
    if (dragRaf.current === null) {
      dragRaf.current = requestAnimationFrame(() => {
        dragRaf.current = null;
        const id = draggingTextId.current;
        const pos = dragPos.current;
        const el = id ? overlayEls.current.get(id) : undefined;
        if (el && pos) {
          el.style.left = `${pos.x}%`;
          el.style.top = `${pos.y}%`;
        }
      });
    }
  };

  const handleContainerMouseUp = () => {
    const id = draggingTextId.current;
    const pos = dragPos.current;
    if (dragRaf.current !== null) {
      cancelAnimationFrame(dragRaf.current);
      dragRaf.current = null;
    }
    if (id && pos) updateTextOverlay(id, pos);
    draggingTextId.current = null;
    dragPos.current = null;
  };

  const currentRatioValue = ASPECT_RATIOS.find(
    (r) => r.label === aspectRatio,
  )?.value;

  const isRotated90 = rotation === 90 || rotation === 270;
  const stripLines = strip?.enabled ? getStripLines(strip) : [];

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
                <Undo2 size={14} />
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
                <Redo2 size={14} />
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

          {/* Center/Right Controls: Zoom, Rotate, Crop, BG Remover */}
          {!isCropping && (
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              {/* Zoom In / Out */}
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

              {/* Quick Rotate Buttons */}
              <div className="flex items-center bg-[#FAFAFA] rounded-xl border border-[#E4E4E7] p-0.5">
                <button
                  type="button"
                  onClick={() => setRotation((rotation - 90 + 360) % 360)}
                  className="p-1.5 text-[#52525B] hover:text-[#18181B] hover:bg-[#FFFFFF] rounded-lg transition-colors"
                  title="Rotate Left 90°"
                  aria-label="Rotate Left 90°"
                >
                  <RotateCcw size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => setRotation((rotation + 90) % 360)}
                  className="p-1.5 text-[#52525B] hover:text-[#18181B] hover:bg-[#FFFFFF] rounded-lg transition-colors"
                  title="Rotate Right 90°"
                  aria-label="Rotate Right 90°"
                >
                  <RotateCw size={13} />
                </button>
              </div>

              {/* Crop Button */}
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

              {/* Remove BG Button */}
              <button
                type="button"
                onClick={handleRemoveBg}
                disabled={isBgRemoving}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0] hover:bg-[#DCFCE7] rounded-xl transition-colors disabled:opacity-50"
              >
                <Scissors size={13} />
                <span className="hidden sm:inline">{isBgRemoving ? "Removing BG..." : "Remove BG"}</span>
                <span className="sm:hidden">{isBgRemoving ? "..." : "BG"}</span>
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
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    className="stroke-[#16A34A]"
                    strokeWidth="4"
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
            <div className="relative flex flex-col items-center select-none max-w-full">
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
                    src={displayUrl!}
                    alt="Crop preview"
                    style={{
                      maxHeight: `${55 * zoom}vh`,
                      maxWidth: "100%",
                      backgroundColor: backgroundColor === 'transparent' ? undefined : backgroundColor,
                    }}
                    className="w-auto object-contain block"
                  />
                </ReactCrop>
              ) : (
                /* Main Image Preview Card with Live Rotation & White Strip */
                <div
                  className="relative flex flex-col items-center shadow-md rounded-xl overflow-hidden border border-[#E4E4E7] transition-all duration-200"
                  style={{
                    backgroundColor: backgroundColor === 'transparent' ? '#FFFFFF' : backgroundColor,
                  }}
                >
                  {/* Rotatable Image Area */}
                  <div
                    className="relative flex items-center justify-center transition-transform duration-200"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={displayUrl!}
                      alt="Original"
                      decoding="async"
                      style={{
                        maxHeight: `${(isRotated90 ? 45 : 55) * zoom}vh`,
                        maxWidth: "100%",
                      }}
                      className="w-auto object-contain block"
                      draggable={false}
                    />

                    {/* Text overlays placed relative to the photo */}
                    {(textOverlays || []).map((overlay) => (
                      <div
                        key={overlay.id}
                        ref={(el) => {
                          if (el) overlayEls.current.set(overlay.id, el);
                          else overlayEls.current.delete(overlay.id);
                        }}
                        onMouseDown={(e) => handleTextMouseDown(e, overlay.id)}
                        onTouchStart={(e) => handleTextMouseDown(e, overlay.id)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTextId(overlay.id);
                        }}
                        className={`absolute cursor-move touch-none ${
                          selectedTextId === overlay.id ? "outline outline-2 outline-[#16A34A] rounded" : ""
                        }`}
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
                  </div>

                  {/* Candidate Name & DOB White Strip at Bottom (Exam Requirement) */}
                  {strip?.enabled && (
                    <div className="w-full bg-[#FFFFFF] border-t-2 border-[#D4D4D8] py-2 px-3 text-center flex flex-col items-center justify-center select-none z-10">
                      {stripLines.length > 0 ? (
                        stripLines.map((line, i) => (
                          <div
                            key={i}
                            className="text-xs sm:text-sm font-bold text-[#000000] tracking-wider uppercase leading-tight font-sans"
                          >
                            {line}
                          </div>
                        ))
                      ) : (
                        <div className="text-[11px] text-[#A1A1AA] italic">
                          Candidate Name &amp; Date will appear here
                        </div>
                      )}
                    </div>
                  )}

                  {selectedTextId && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#18181B]/80 text-white text-[11px] font-medium rounded-lg pointer-events-none whitespace-nowrap z-20">
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

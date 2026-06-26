'use client';

// No external dependencies needed — export uses native Canvas API

import React, { useState, useRef, useCallback, useEffect } from 'react';
import TemplateGallery, { TEMPLATES, Template } from './TemplateGallery';
import HowItWorksSteps from './HowItWorksSteps';

interface SlotData {
  src: string | null;
  zoom: number;
  panX: number;
  panY: number;
}

interface Layer {
  id: string;
  type: 'text' | 'sticker';
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
  fontSize: number;
}

const ASPECT_RATIOS = [
  { id: 'square', label: 'Square (1:1)', value: '1 / 1', ratio: 1 },
  { id: 'portrait', label: 'Portrait (4:5)', value: '4 / 5', ratio: 4 / 5 },
  { id: 'landscape', label: 'Landscape (16:9)', value: '16 / 9', ratio: 16 / 9 },
  { id: 'story', label: 'Story (9:16)', value: '9 / 16', ratio: 9 / 16 },
  { id: 'print', label: 'Print (8x10)', value: '8 / 10', ratio: 8 / 10 },
  { id: 'a4', label: 'A4 (Portrait)', value: '210 / 297', ratio: 210 / 297 },
];

const STICKERS = ['😀', '❤️', '⭐', '✨', '🎉', '🌸', '📷', '✔️', '🔥', '🎂', '🎈', '☀️'];

let layerCounter = 0;
const newLayerId = () => `layer-${Date.now()}-${layerCounter++}`;

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

function clampPan(panX: number, panY: number, zoom: number, boxWidth: number, boxHeight: number) {
  const maxX = (boxWidth * (zoom - 1)) / (2 * zoom);
  const maxY = (boxHeight * (zoom - 1)) / (2 * zoom);
  return {
    x: Math.min(maxX, Math.max(-maxX, panX)),
    y: Math.min(maxY, Math.max(-maxY, panY)),
  };
}

// Revoke a blob: URL safely (no-op for non-blob URLs, e.g. remote/data URLs)
function revokeIfBlobUrl(src: string | null | undefined) {
  if (src && src.startsWith('blob:')) {
    try {
      URL.revokeObjectURL(src);
    } catch {
      // ignore
    }
  }
}

const DownloadIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
  </svg>
);

export default function CollageMakerTool() {
  const [template, setTemplate] = useState<Template>(TEMPLATES[0]);
  const [slots, setSlots] = useState<SlotData[]>(
    Array.from({ length: TEMPLATES[0].slots }, () => ({ src: null, zoom: 1, panX: 0, panY: 0 }))
  );
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [background, setBackground] = useState('#ffffff');
  const [borderWidth, setBorderWidth] = useState(4);
  const [borderColor, setBorderColor] = useState('#ffffff');
  const [gap, setGap] = useState(8);
  const [radius, setRadius] = useState(8);
  const [aspectRatio, setAspectRatio] = useState(ASPECT_RATIOS[0]);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [showStickerPicker, setShowStickerPicker] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const slotFileInputRef = useRef<HTMLInputElement>(null);
  const bulkFileInputRef = useRef<HTMLInputElement>(null);
  const activeSlotForUpload = useRef<number | null>(null);
  const dragLayerState = useRef<{ id: string; startX: number; startY: number; origX: number; origY: number } | null>(null);
  const resizeLayerState = useRef<{ id: string; startX: number; startY: number; origW: number; origH: number } | null>(null);
  const draggedSlotIndex = useRef<number | null>(null);

  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wheelCleanups = useRef<Map<number, () => void>>(new Map());

  // Pointer-drag-to-pan state (single finger / mouse)
  const slotInteraction = useRef<{
    index: number;
    pointerId: number;
    startX: number;
    startY: number;
    origPanX: number;
    origPanY: number;
    zoom: number;
    containerW: number;
    containerH: number;
    moved: boolean;
  } | null>(null);

  // Multi-touch pinch-to-zoom state — tracks every active pointer per slot
  // and derives zoom from the change in distance between the first two.
  const activePointers = useRef<Map<number, Map<number, { x: number; y: number }>>>(new Map());
  const pinchState = useRef<{
    index: number;
    startDist: number;
    startZoom: number;
    containerW: number;
    containerH: number;
  } | null>(null);

  const steps = [
    { title: 'Upload', desc: 'Drag and drop photos — or whole folders — onto the canvas, or browse to select them.' },
    { title: 'Choose a Template', desc: 'Pick a ready-made layout for 4, 6, 7, 8, 9, or 10 photos.' },
    { title: 'Customize', desc: 'Pinch or scroll on a photo to zoom in/out, then drag to reposition it inside the frame. Add text, stickers, borders, and colors.' },
    { title: 'Download', desc: 'Save your finished collage instantly in high quality.' },
  ];

  // ---------- Template handling ----------
  const handleTemplateSelect = useCallback((t: Template) => {
    setTemplate(t);
    setSlots((prev) =>
      Array.from({ length: t.slots }, (_, i) => prev[i] || { src: null, zoom: 1, panX: 0, panY: 0 })
    );
    setSelectedSlot(null);
  }, []);

  // ---------- Image loading helpers ----------
  const fillEmptySlotsWithFiles = useCallback((files: File[]) => {
    const imageFiles = files.filter((f) => f.type.startsWith('image/'));
    if (imageFiles.length === 0) return;
    setSlots((prev) => {
      const next = [...prev];
      let fileIndex = 0;
      for (let i = 0; i < next.length && fileIndex < imageFiles.length; i++) {
        if (!next[i].src) {
          next[i] = { src: URL.createObjectURL(imageFiles[fileIndex]), zoom: 1, panX: 0, panY: 0 };
          fileIndex++;
        }
      }
      while (fileIndex < imageFiles.length && next.length > 0) {
        const i = fileIndex % next.length;
        revokeIfBlobUrl(next[i].src);
        next[i] = { src: URL.createObjectURL(imageFiles[fileIndex]), zoom: 1, panX: 0, panY: 0 };
        fileIndex++;
      }
      return next;
    });
  }, []);

  const replaceSlotWithFile = useCallback((index: number, file: File) => {
    setSlots((prev) => {
      const next = [...prev];
      revokeIfBlobUrl(next[index]?.src);
      next[index] = { src: URL.createObjectURL(file), zoom: 1, panX: 0, panY: 0 };
      return next;
    });
  }, []);

  async function getFilesFromDataTransfer(dt: DataTransfer): Promise<File[]> {
    const items = dt.items;
    if (!items || items.length === 0) return Array.from(dt.files || []);
    const entries: any[] = [];
    for (let i = 0; i < items.length; i++) {
      const entry = (items[i] as any).webkitGetAsEntry?.();
      if (entry) entries.push(entry);
    }
    if (entries.length === 0) return Array.from(dt.files || []);
    const files: File[] = [];
    async function traverse(entry: any): Promise<void> {
      if (entry.isFile) {
        await new Promise<void>((resolve) =>
          entry.file((file: File) => { files.push(file); resolve(); })
        );
      } else if (entry.isDirectory) {
        const reader = entry.createReader();
        const readBatch = (): Promise<any[]> => new Promise((res) => reader.readEntries(res));
        let batch = await readBatch();
        while (batch.length > 0) {
          for (const e of batch) await traverse(e);
          batch = await readBatch();
        }
      }
    }
    for (const entry of entries) await traverse(entry);
    return files;
  }

  // ---------- Dropzone ----------
  const handleStageDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDraggingFile(true); }, []);
  const handleStageDragLeave = useCallback(() => setIsDraggingFile(false), []);
  const handleStageDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingFile(false);
    const files = await getFilesFromDataTransfer(e.dataTransfer);
    fillEmptySlotsWithFiles(files);
  }, [fillEmptySlotsWithFiles]);

  const handleBulkInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) fillEmptySlotsWithFiles(Array.from(e.target.files));
    e.target.value = '';
  }, [fillEmptySlotsWithFiles]);

  const handleSlotInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const index = activeSlotForUpload.current;
    if (index !== null && e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      replaceSlotWithFile(index, files[0]);
      if (files.length > 1) fillEmptySlotsWithFiles(files.slice(1));
    }
    e.target.value = '';
  }, [replaceSlotWithFile, fillEmptySlotsWithFiles]);

  const openSlotUpload = useCallback((index: number) => {
    activeSlotForUpload.current = index;
    slotFileInputRef.current?.click();
  }, []);

  // Mobile FAB: jump straight to the first empty slot (or bulk-fill if all full)
  const openMobileAddPhoto = useCallback(() => {
    const emptyIndex = slots.findIndex((s) => !s.src);
    if (emptyIndex !== -1) {
      openSlotUpload(emptyIndex);
    } else {
      bulkFileInputRef.current?.click();
    }
  }, [slots, openSlotUpload]);

  // ---------- Slot reordering (mouse/desktop drag-and-drop) ----------
  const handleSlotDragStart = useCallback((e: React.DragEvent, index: number) => {
    if (!slots[index].src) { e.preventDefault(); return; }
    e.dataTransfer.setData('text/plain', index.toString());
    e.dataTransfer.effectAllowed = 'move';
    draggedSlotIndex.current = index;
  }, [slots]);
  const handleSlotDragOver = useCallback((e: React.DragEvent) => e.preventDefault(), []);
  const handleSlotDrop = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    const from = draggedSlotIndex.current;
    draggedSlotIndex.current = null;
    if (from === null || from === index) return;
    setSlots((prev) => {
      const next = [...prev];
      [next[from], next[index]] = [next[index], next[from]];
      return next;
    });
  }, []);

  // ---------- Slot zoom/pan ----------
  const updateSlot = useCallback((index: number, updates: Partial<SlotData>) => {
    setSlots((prev) => prev.map((s, i) => (i === index ? { ...s, ...updates } : s)));
  }, []);
  const removeSlotImage = useCallback((index: number) => {
    setSlots((prev) => {
      const next = [...prev];
      revokeIfBlobUrl(next[index]?.src);
      next[index] = { src: null, zoom: 1, panX: 0, panY: 0 };
      return next;
    });
    setSelectedSlot(null);
  }, []);

  // Native wheel listener — passive:false so we can preventDefault (desktop trackpad/mouse zoom)
  const setSlotImageRef = useCallback((el: HTMLImageElement | null, index: number) => {
    const prevCleanup = wheelCleanups.current.get(index);
    if (prevCleanup) { prevCleanup(); wheelCleanups.current.delete(index); }
    if (el) {
      const handler = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const rect = el.getBoundingClientRect();
        setSlots((prev) => {
          const s = prev[index];
          if (!s || !s.src) return prev;
          const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, s.zoom - e.deltaY * 0.0015));
          const c = clampPan(s.panX, s.panY, newZoom, rect.width, rect.height);
          const next = [...prev];
          next[index] = { ...s, zoom: newZoom, panX: c.x, panY: c.y };
          return next;
        });
      };
      el.addEventListener('wheel', handler, { passive: false });
      wheelCleanups.current.set(index, () => el.removeEventListener('wheel', handler));
    }
  }, []);

  // Drag to pan (mouse, or single-finger touch) + pinch to zoom (two-finger touch).
  // Pointer Events unify mouse/touch/pen, so this single set of handlers covers
  // both desktop and mobile — touchAction:'none' on the <img> stops the browser
  // from hijacking the gesture for native page scroll/zoom.
  const handleSlotPointerDown = (e: React.PointerEvent<HTMLImageElement>, index: number) => {
    if (!slots[index].src) return;
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);

    let slotPointers = activePointers.current.get(index);
    if (!slotPointers) {
      slotPointers = new Map();
      activePointers.current.set(index, slotPointers);
    }
    slotPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    const rect = e.currentTarget.getBoundingClientRect();

    if (slotPointers.size >= 2) {
      // Second finger landed — switch from pan to pinch-zoom.
      slotInteraction.current = null;
      const pts = Array.from(slotPointers.values()).slice(0, 2);
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      pinchState.current = {
        index,
        startDist: dist || 1,
        startZoom: slots[index].zoom,
        containerW: rect.width,
        containerH: rect.height,
      };
    } else {
      slotInteraction.current = {
        index,
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        origPanX: slots[index].panX,
        origPanY: slots[index].panY,
        zoom: slots[index].zoom,
        containerW: rect.width,
        containerH: rect.height,
        moved: false,
      };
    }
    setSelectedSlot(index);
    setSelectedLayerId(null);
  };

  const handleSlotPointerMove = (e: React.PointerEvent<HTMLImageElement>, index: number) => {
    const slotPointers = activePointers.current.get(index);
    if (slotPointers?.has(e.pointerId)) {
      slotPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }

    const pinch = pinchState.current;
    if (pinch && pinch.index === index && slotPointers && slotPointers.size >= 2) {
      const pts = Array.from(slotPointers.values()).slice(0, 2);
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      const scale = dist / pinch.startDist;
      const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, pinch.startZoom * scale));
      setSlots((prev) => {
        const s = prev[index];
        if (!s) return prev;
        const c = clampPan(s.panX, s.panY, newZoom, pinch.containerW, pinch.containerH);
        const next = [...prev];
        next[index] = { ...s, zoom: newZoom, panX: c.x, panY: c.y };
        return next;
      });
      return;
    }

    const s = slotInteraction.current;
    if (!s || s.index !== index || s.pointerId !== e.pointerId) return;
    const dx = e.clientX - s.startX;
    const dy = e.clientY - s.startY;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) s.moved = true;
    // Divide by zoom so 1 screen-px drag = 1 image-px shift (feels 1:1)
    const rawX = s.origPanX + dx / s.zoom;
    const rawY = s.origPanY + dy / s.zoom;
    const c = clampPan(rawX, rawY, s.zoom, s.containerW, s.containerH);
    updateSlot(index, { panX: c.x, panY: c.y });
  };

  const endSlotPointer = (e: React.PointerEvent<HTMLImageElement>, index: number) => {
    const slotPointers = activePointers.current.get(index);
    slotPointers?.delete(e.pointerId);

    if (!slotPointers || slotPointers.size < 2) {
      if (pinchState.current?.index === index) pinchState.current = null;
    }

    const s = slotInteraction.current;
    if (s && s.index === index && s.pointerId === e.pointerId) {
      slotInteraction.current = null;
    }
  };
  const handleSlotPointerUp = (e: React.PointerEvent<HTMLImageElement>, index: number) => endSlotPointer(e, index);
  const handleSlotPointerLeave = (e: React.PointerEvent<HTMLImageElement>, index: number) => endSlotPointer(e, index);
  const handleSlotPointerCancel = (e: React.PointerEvent<HTMLImageElement>, index: number) => endSlotPointer(e, index);

  // ---------- Text & sticker layers ----------
  const addTextLayer = useCallback(() => {
    const id = newLayerId();
    setLayers((prev) => [...prev, { id, type: 'text', content: 'Double-click to edit', x: 40, y: 40, width: 200, height: 50, rotation: 0, color: '#1e293b', fontSize: 24 }]);
    setSelectedLayerId(id);
  }, []);
  const addStickerLayer = useCallback((emoji: string) => {
    const id = newLayerId();
    setLayers((prev) => [...prev, { id, type: 'sticker', content: emoji, x: 60, y: 60, width: 64, height: 64, rotation: 0, color: '#000000', fontSize: 48 }]);
    setSelectedLayerId(id);
    setShowStickerPicker(false);
  }, []);
  const updateLayer = useCallback((id: string, updates: Partial<Layer>) => {
    setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, ...updates } : l)));
  }, []);
  const deleteLayer = useCallback((id: string) => {
    setLayers((prev) => prev.filter((l) => l.id !== id));
    setSelectedLayerId(null);
  }, []);

  // ---------- Layer drag (mouse + touch via Pointer Events) ----------
  const handleLayerPointerMove = useCallback((e: PointerEvent) => {
    const d = dragLayerState.current;
    if (!d) return;
    setLayers((prev) => prev.map((l) => l.id === d.id ? { ...l, x: d.origX + (e.clientX - d.startX), y: d.origY + (e.clientY - d.startY) } : l));
  }, []);
  const handleLayerPointerUp = useCallback(() => {
    dragLayerState.current = null;
    window.removeEventListener('pointermove', handleLayerPointerMove);
    window.removeEventListener('pointerup', handleLayerPointerUp);
  }, [handleLayerPointerMove]);
  const handleLayerPointerDown = (e: React.PointerEvent, layer: Layer) => {
    e.stopPropagation();
    setSelectedLayerId(layer.id);
    setSelectedSlot(null);
    dragLayerState.current = { id: layer.id, startX: e.clientX, startY: e.clientY, origX: layer.x, origY: layer.y };
    window.addEventListener('pointermove', handleLayerPointerMove);
    window.addEventListener('pointerup', handleLayerPointerUp);
  };

  // ---------- Layer resize (mouse + touch via Pointer Events) ----------
  const handleResizePointerMove = useCallback((e: PointerEvent) => {
    const r = resizeLayerState.current;
    if (!r) return;
    setLayers((prev) => prev.map((l) => l.id === r.id ? { ...l, width: Math.max(30, r.origW + (e.clientX - r.startX)), height: Math.max(30, r.origH + (e.clientY - r.startY)) } : l));
  }, []);
  const handleResizePointerUp = useCallback(() => {
    resizeLayerState.current = null;
    window.removeEventListener('pointermove', handleResizePointerMove);
    window.removeEventListener('pointerup', handleResizePointerUp);
  }, [handleResizePointerMove]);
  const handleResizePointerDown = (e: React.PointerEvent, layer: Layer) => {
    e.stopPropagation();
    resizeLayerState.current = { id: layer.id, startX: e.clientX, startY: e.clientY, origW: layer.width, origH: layer.height };
    window.addEventListener('pointermove', handleResizePointerMove);
    window.addEventListener('pointerup', handleResizePointerUp);
  };

  // ---------- CANVAS-BASED EXPORT (fixes blurry/garbage downloads) ----------
  const handleDownload = useCallback(async () => {
    if (!stageRef.current) return;
    setIsExporting(true);
    setSelectedSlot(null);
    setSelectedLayerId(null);

    try {
      // Output resolution: 2× the on-screen stage size
      const stageEl = stageRef.current;
      const stageRect = stageEl.getBoundingClientRect();
      const SCALE = 2;
      const W = stageRect.width * SCALE;
      const H = stageRect.height * SCALE;

      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d')!;

      // Background
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, W, H);

      // Collect all slot DOM rects relative to stage
      const slotDOMRects: DOMRect[] = slotRefs.current
        .slice(0, slots.length)
        .map((el) => {
          if (!el) return new DOMRect(0, 0, 0, 0);
          const r = el.getBoundingClientRect();
          return new DOMRect(
            (r.left - stageRect.left) * SCALE,
            (r.top - stageRect.top) * SCALE,
            r.width * SCALE,
            r.height * SCALE
          );
        });

      // Load all images up front
      const loadImage = (src: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });

      const imageCache = new Map<string, HTMLImageElement>();
      await Promise.all(
        slots.map(async (slot) => {
          if (slot.src && !imageCache.has(slot.src)) {
            try {
              const img = await loadImage(slot.src);
              imageCache.set(slot.src, img);
            } catch {
              // skip broken images
            }
          }
        })
      );

      // Draw each slot
      for (let i = 0; i < slots.length; i++) {
        const slot = slots[i];
        const rect = slotDOMRects[i];
        if (!rect || rect.width === 0) continue;

        const bw = borderWidth * SCALE;
        const r = radius * SCALE;

        // Draw border + rounded clip
        ctx.save();
        ctx.beginPath();
        if (r > 0) {
          ctx.roundRect(rect.x, rect.y, rect.width, rect.height, r);
        } else {
          ctx.rect(rect.x, rect.y, rect.width, rect.height);
        }
        ctx.clip();

        // Border fill
        if (bw > 0) {
          ctx.fillStyle = borderColor;
          ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        }

        // Photo
        if (slot.src) {
          const img = imageCache.get(slot.src);
          if (img) {
            // Inner area after border
            const ix = rect.x + bw;
            const iy = rect.y + bw;
            const iw = rect.width - bw * 2;
            const ih = rect.height - bw * 2;

            // Clip to inner area
            ctx.beginPath();
            if (r > 0) {
              const innerR = Math.max(0, r - bw);
              ctx.roundRect(ix, iy, iw, ih, innerR);
            } else {
              ctx.rect(ix, iy, iw, ih);
            }
            ctx.clip();

            // Compute object-cover dimensions, then apply zoom + pan
            const imgAspect = img.naturalWidth / img.naturalHeight;
            const boxAspect = iw / ih;

            let baseW: number, baseH: number;
            if (imgAspect > boxAspect) {
              // image is wider than box — fit height
              baseH = ih;
              baseW = ih * imgAspect;
            } else {
              // image is taller than box — fit width
              baseW = iw;
              baseH = iw / imgAspect;
            }

            // Apply zoom
            const drawW = baseW * slot.zoom;
            const drawH = baseH * slot.zoom;

            // Center + pan (pan is in CSS-px at zoom=1; scale up for canvas)
            const drawX = ix + (iw - drawW) / 2 + slot.panX * slot.zoom * SCALE;
            const drawY = iy + (ih - drawH) / 2 + slot.panY * slot.zoom * SCALE;

            ctx.drawImage(img, drawX, drawY, drawW, drawH);
          }
        } else {
          // Empty slot placeholder
          ctx.fillStyle = '#f1f5f9';
          ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        }

        ctx.restore();
      }

      // Draw text & sticker layers
      for (const layer of layers) {
        ctx.save();
        const cx = (layer.x + layer.width / 2) * SCALE;
        const cy = (layer.y + layer.height / 2) * SCALE;
        ctx.translate(cx, cy);
        ctx.rotate((layer.rotation * Math.PI) / 180);

        if (layer.type === 'text') {
          ctx.font = `bold ${layer.fontSize * SCALE}px sans-serif`;
          ctx.fillStyle = layer.color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(layer.content, 0, 0);
        } else {
          ctx.font = `${layer.height * 0.8 * SCALE}px serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(layer.content, 0, 0);
        }
        ctx.restore();
      }

      // Trigger download
      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = 'photo-collage.png';
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        },
        'image/png',
        1.0
      );
    } finally {
      setIsExporting(false);
    }
  }, [background, borderColor, borderWidth, radius, slots, layers]);

  // Revoke any remaining blob: URLs when the component unmounts, to avoid leaking memory.
  useEffect(() => {
    return () => {
      slots.forEach((s) => revokeIfBlobUrl(s.src));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasAnyImage = slots.some((s) => s.src);
  const selectedLayer = layers.find((l) => l.id === selectedLayerId);
  const downloadDisabled = (!hasAnyImage && layers.length === 0) || isExporting;

  return (
    <div
      id="collage-maker"
      className="scroll-mt-24 bg-white dark:bg-slate-800 rounded-3xl shadow-none border border-slate-200 dark:border-slate-700 p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Create a Photo Collage Online</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Free Canvas Collage Maker — Create Yours in Minutes
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <button
            type="button"
            onClick={() => bulkFileInputRef.current?.click()}
            className="bg-accent-muted text-accent-main hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 font-semibold px-4 py-2 rounded-xl transition-colors whitespace-nowrap text-center w-full sm:w-auto"
          >
            Upload Photos
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloadDisabled}
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold px-4 py-2 rounded-xl transition-colors whitespace-nowrap text-center w-full sm:w-auto"
          >
            <DownloadIcon />
            {isExporting ? 'Preparing…' : 'Download'}
          </button>
          <input ref={bulkFileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={handleBulkInputChange} />
          <input ref={slotFileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={handleSlotInputChange} />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-12">
        {/* ---------- Stage ---------- */}
        <div className="lg:col-span-3 xl:col-span-4 order-2 lg:order-2 flex flex-col items-center">
          <div
            onDragOver={handleStageDragOver}
            onDragLeave={handleStageDragLeave}
            onDrop={handleStageDrop}
            className={`relative max-w-full mx-auto rounded-xl overflow-hidden border-2 transition-colors ${
              isDraggingFile ? 'border-accent-main bg-accent-muted dark:bg-blue-900/20' : 'border-slate-200 dark:border-slate-700'
            }`}
            style={{
              aspectRatio: aspectRatio.value,
              width: `min(100%, calc(80vh * ${aspectRatio.ratio}))`,
              touchAction: 'none',
            }}
          >
            <div
              ref={stageRef}
              className="absolute inset-0"
              style={{ background }}
              onClick={() => { setSelectedSlot(null); setSelectedLayerId(null); }}
            >
              {/* Photo grid */}
              <div
                className="grid w-full h-full"
                style={{
                  gridTemplateColumns: `repeat(${template.columns}, 1fr)`,
                  gridAutoRows: '1fr',
                  gridAutoFlow: 'dense',
                  gap: `${gap}px`,
                  padding: `${gap}px`,
                }}
              >
                {slots.map((slot, i) => (
                  <div
                    key={i}
                    ref={(el) => { slotRefs.current[i] = el; }}
                    onDragOver={handleSlotDragOver}
                    onDrop={(e) => handleSlotDrop(e, i)}
                    onClick={(e) => { e.stopPropagation(); setSelectedSlot(i); setSelectedLayerId(null); }}
                    style={{
                      gridColumn: template.layout?.[i]?.colSpan ? `span ${template.layout[i].colSpan}` : undefined,
                      gridRow: template.layout?.[i]?.rowSpan ? `span ${template.layout[i].rowSpan}` : undefined,
                      border: `${borderWidth}px solid ${borderColor}`,
                      borderRadius: `${radius}px`,
                      outline: selectedSlot === i ? '2px dashed #3b82f6' : 'none',
                      outlineOffset: '2px',
                      backgroundColor: slot.src ? 'transparent' : '#f1f5f9',
                    }}
                    className="relative overflow-hidden cursor-pointer group"
                  >
                    {slot.src ? (
                      <img
                        ref={(el) => setSlotImageRef(el, i)}
                        src={slot.src}
                        alt={`Collage photo ${i + 1}`}
                        className="w-full h-full object-cover select-none"
                        style={{
                          transform: `scale(${slot.zoom}) translate(${slot.panX}px, ${slot.panY}px)`,
                          // Always show grab cursor so users know they can drag
                          cursor: 'grab',
                          touchAction: 'none',
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                        }}
                        draggable={false}
                        onPointerDown={(e) => handleSlotPointerDown(e, i)}
                        onPointerMove={(e) => handleSlotPointerMove(e, i)}
                        onPointerUp={(e) => handleSlotPointerUp(e, i)}
                        onPointerLeave={(e) => handleSlotPointerLeave(e, i)}
                        onPointerCancel={(e) => handleSlotPointerCancel(e, i)}
                      />
                    ) : (
                      <button
                        type="button"
                        data-html2canvas-ignore="true"
                        onClick={(e) => { e.stopPropagation(); openSlotUpload(i); }}
                        className="w-full h-full flex flex-col items-center justify-center text-slate-400 hover:text-blue-500 active:bg-accent-muted/50 hover:bg-accent-muted/50 dark:hover:bg-blue-900/10 transition-colors"
                      >
                        <svg className="w-8 h-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="text-xs font-medium">Add photo</span>
                      </button>
                    )}

                    {slot.src && (
                      <>
                        <div
                          draggable
                          onDragStart={(e) => handleSlotDragStart(e, i)}
                          onClick={(e) => e.stopPropagation()}
                          title="Drag to reorder slots (desktop)"
                          className="absolute top-1.5 left-1.5 w-7 h-7 md:w-6 md:h-6 rounded-full bg-black/50 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-grab active:cursor-grabbing z-10 hidden md:flex"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="6" cy="5" r="1.5" /><circle cx="14" cy="5" r="1.5" />
                            <circle cx="6" cy="10" r="1.5" /><circle cx="14" cy="10" r="1.5" />
                            <circle cx="6" cy="15" r="1.5" /><circle cx="14" cy="15" r="1.5" />
                          </svg>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); removeSlotImage(i); }}
                          className="absolute top-1.5 right-1.5 w-7 h-7 md:w-6 md:h-6 rounded-full bg-black/50 text-white text-xs opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
                          aria-label="Remove photo"
                        >
                          ✕
                        </button>

                        <div className="absolute bottom-1.5 left-1.5 right-1.5 px-2 py-1 rounded-lg bg-black/50 text-white text-[10px] leading-tight text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 hidden md:block">
                          Scroll to zoom · Drag to reposition
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Text & sticker layers */}
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  onPointerDown={(e) => handleLayerPointerDown(e, layer)}
                  onClick={(e) => { e.stopPropagation(); setSelectedLayerId(layer.id); setSelectedSlot(null); }}
                  style={{
                    position: 'absolute',
                    left: layer.x,
                    top: layer.y,
                    width: layer.width,
                    height: layer.height,
                    transform: `rotate(${layer.rotation}deg)`,
                    outline: selectedLayerId === layer.id ? '2px dashed #3b82f6' : 'none',
                    outlineOffset: '4px',
                    touchAction: 'none',
                  }}
                  className="cursor-move select-none flex items-center justify-center"
                >
                  {layer.type === 'text' ? (
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => updateLayer(layer.id, { content: e.currentTarget.textContent || '' })}
                      style={{ color: layer.color, fontSize: layer.fontSize, width: '100%', textAlign: 'center' }}
                      className="font-bold outline-none"
                    >
                      {layer.content}
                    </div>
                  ) : (
                    <span style={{ fontSize: layer.height * 0.8, lineHeight: 1 }}>{layer.content}</span>
                  )}

                  {selectedLayerId === layer.id && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); deleteLayer(layer.id); }}
                        className="absolute -top-3 -right-3 w-7 h-7 md:w-6 md:h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow"
                        aria-label="Delete"
                      >
                        ✕
                      </button>
                      <div
                        onPointerDown={(e) => handleResizePointerDown(e, layer)}
                        style={{ touchAction: 'none' }}
                        className="absolute -bottom-2 -right-2 w-5 h-5 md:w-4 md:h-4 rounded-full bg-blue-500 cursor-nwse-resize shadow"
                      />
                    </>
                  )}
                </div>
              ))}

              {!hasAnyImage && layers.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center px-6">
                    <svg className="w-14 h-14 text-slate-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-400 text-sm">Drag and drop photos or a whole folder here</p>
                    <p className="text-slate-400 text-sm md:hidden mt-1">Or tap the + button to add photos</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Selected slot zoom controls */}
          {selectedSlot !== null && slots[selectedSlot]?.src && (
            <div className="w-full mt-4 bg-slate-50 dark:bg-slate-900 rounded-xl p-4 flex items-center gap-4 flex-wrap">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
                Zoom
              </span>
              <input
                type="range"
                min={MIN_ZOOM}
                max={MAX_ZOOM}
                step="0.05"
                value={slots[selectedSlot].zoom}
                onChange={(e) => {
                  const newZoom = Number(e.target.value);
                  const rect = slotRefs.current[selectedSlot]?.getBoundingClientRect();
                  const c = clampPan(slots[selectedSlot].panX, slots[selectedSlot].panY, newZoom, rect?.width ?? 300, rect?.height ?? 300);
                  updateSlot(selectedSlot, { zoom: newZoom, panX: c.x, panY: c.y });
                }}
                className="flex-1 accent-blue-600 min-w-[120px]"
              />
              <button
                type="button"
                onClick={() => updateSlot(selectedSlot, { zoom: 1, panX: 0, panY: 0 })}
                className="text-sm font-medium text-slate-500 hover:underline whitespace-nowrap"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => openSlotUpload(selectedSlot)}
                className="text-sm font-medium text-accent-main hover:underline whitespace-nowrap"
              >
                Replace
              </button>
            </div>
          )}

          <p className="text-xs text-slate-400 mt-3 text-center hidden md:block">
            Tip: scroll (or pinch) on a photo to zoom in/out, then <strong>drag it to reposition</strong> — handy for centering faces.
          </p>
          <p className="text-xs text-slate-400 mt-3 text-center md:hidden">
            Tip: pinch with two fingers to zoom, then <strong>drag with one finger to reposition</strong> — handy for centering faces.
          </p>

          <div className="w-full mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloadDisabled}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <DownloadIcon />
              {isExporting ? 'Preparing…' : 'Download Canvas'}
            </button>
          </div>
        </div>

        {/* ---------- Sidebar ---------- */}
        <div className="order-1 lg:order-1 lg:col-span-1 space-y-6">
          <TemplateGallery selectedId={template.id} onSelect={handleTemplateSelect} />

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Canvas size</h3>
            <select
              value={aspectRatio.id}
              onChange={(e) => setAspectRatio(ASPECT_RATIOS.find((a) => a.id === e.target.value) || ASPECT_RATIOS[0])}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            >
              {ASPECT_RATIOS.map((a) => (
                <option key={a.id} value={a.id}>{a.label}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-900 dark:text-white block mb-2">Background</label>
              <input type="color" value={background} onChange={(e) => setBackground(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-900 dark:text-white block mb-2">Border color</label>
              <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-slate-700 dark:text-slate-300">Spacing</span>
                <span className="text-slate-500">{gap}px</span>
              </div>
              <input type="range" min="0" max="32" value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-slate-700 dark:text-slate-300">Border width</span>
                <span className="text-slate-500">{borderWidth}px</span>
              </div>
              <input type="range" min="0" max="20" value={borderWidth} onChange={(e) => setBorderWidth(Number(e.target.value))} className="w-full accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-slate-700 dark:text-slate-300">Corner radius</span>
                <span className="text-slate-500">{radius}px</span>
              </div>
              <input type="range" min="0" max="40" value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="w-full accent-blue-600" />
            </div>
          </div>

          <div className="flex gap-3">
            <button type="button" onClick={addTextLayer} className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm">
              + Add Text
            </button>
            <div className="relative flex-1">
              <button type="button" onClick={() => setShowStickerPicker((v) => !v)} className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm">
                + Add Sticker
              </button>
              {showStickerPicker && (
                <div className="absolute z-10 mt-2 right-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-none p-3 grid grid-cols-4 gap-2 w-48">
                  {STICKERS.map((s) => (
                    <button key={s} type="button" onClick={() => addStickerLayer(s)} className="text-2xl hover:scale-125 transition-transform">{s}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {selectedLayer?.type === 'text' && (
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 space-y-3">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Text style</h4>
              <div className="flex items-center gap-3">
                <input type="color" value={selectedLayer.color} onChange={(e) => updateLayer(selectedLayer.id, { color: e.target.value })} className="w-10 h-10 rounded-lg cursor-pointer" />
                <input type="range" min="12" max="72" value={selectedLayer.fontSize} onChange={(e) => updateLayer(selectedLayer.id, { fontSize: Number(e.target.value) })} className="flex-1 accent-blue-600" />
              </div>
            </div>
          )}

          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloadDisabled}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-none"
            >
              <DownloadIcon />
              {isExporting ? 'Preparing…' : 'Download Canvas'}
            </button>
          </div>
        </div>
      </div>

      <HowItWorksSteps steps={steps} />

      {/* Mobile-only floating "Add photo" button — keeps the primary action
          reachable with a thumb without scrolling back to the header. */}
      <button
        type="button"
        onClick={openMobileAddPhoto}
        aria-label="Add photo"
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 active:scale-95 transition-transform flex items-center justify-center"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
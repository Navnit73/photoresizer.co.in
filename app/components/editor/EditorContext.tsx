'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { prepareImage } from '../../utils/imagePrep';
import { isLowEndDevice } from '../../utils/device';

export type ImageFormat = 'image/jpeg' | 'image/png' | 'image/webp';
export type AspectRatio = 'free' | '1:1' | '16:9' | '4:3' | '3:2' | '9:16';

export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface LivePreviewData {
  url: string | null;
  sizeKb: number;
  width: number;
  height: number;
  /** Quality (1-100) actually used for the encode — differs from the slider in target-size mode. */
  usedQuality?: number;
  /** In target-size mode: whether the encode got under the requested size. */
  targetMet?: boolean;
  /** Exact byte size of the encoded result. */
  sizeBytes?: number;
}

export interface TextOverlay {
  id: string;
  text: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  fontSize: number;
  color: string;
  fontWeight: 'normal' | 'bold';
  opacity: number; // 0-100
  rotation: number;
  align: 'left' | 'center' | 'right';
  fontFamily: string;
}

/** White band under the photo carrying the candidate's name and date (DOB / date of photo). */
export interface StripConfig {
  enabled: boolean;
  name: string;
  /** ISO yyyy-mm-dd from <input type="date">, or ''. */
  date: string;
  dateLabel: 'DOB' | 'DOP' | 'NONE';
  /** Strip height as a percentage of the photo height. */
  heightPct: number;
}

export const DEFAULT_STRIP: StripConfig = {
  enabled: false,
  name: '',
  date: '',
  dateLabel: 'DOB',
  heightPct: 16,
};

/** dd/mm/yyyy (the format Indian exam forms expect). */
function formatStripDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : iso;
}

/** Text lines drawn in the strip: name first, then the labelled date. */
export function getStripLines(strip: StripConfig): string[] {
  const lines: string[] = [];
  const name = strip.name.trim();
  if (name) lines.push(name);
  if (strip.date) {
    const label = strip.dateLabel === 'NONE' ? '' : `${strip.dateLabel}: `;
    lines.push(`${label}${formatStripDate(strip.date)}`);
  }
  return lines;
}

/** Undoable "document" state. Transient UI state lives outside of it. */
interface DocState {
  imageFile: File | null;
  /** Full-resolution original (export source). */
  imageUrl: string | null;
  /** Screen-sized proxy for on-canvas display. Falls back to imageUrl. */
  previewUrl: string | null;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  format: ImageFormat;
  quality: number;
  /** When set, quality is searched automatically so the export is at most this many KB. */
  targetSizeKb: number | null;
  /** Byte size of the file the user originally picked (used to show how much was saved). */
  originalFileSize: number;
  backgroundColor: string;
  rotation: number;
  crop: CropRect | null;
  aspectRatio: AspectRatio;
  textOverlays: TextOverlay[];
  strip: StripConfig;
  fileName: string;
}

interface EditorContextType extends DocState {
  livePreview: LivePreviewData;
  isProcessing: boolean;
  isBgRemoving: boolean;
  selectedTextId: string | null;
  loadFile: (file: File) => Promise<boolean>;
  setImageFile: (
    file: File | null,
    url: string | null,
    width: number,
    height: number,
    previewUrl?: string | null,
  ) => void;
  updateBaseImage: (
    file: File,
    url: string,
    width: number,
    height: number,
    previewUrl?: string | null,
  ) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setFormat: (format: ImageFormat) => void;
  setQuality: (quality: number) => void;
  setTargetSizeKb: (kb: number | null) => void;
  setBackgroundColor: (color: string) => void;
  setRotation: (rotation: number) => void;
  setStrip: (updates: Partial<StripConfig>) => void;
  setCrop: (crop: CropRect | null) => void;
  setAspectRatio: (ratio: AspectRatio) => void;
  setLivePreview: (data: LivePreviewData) => void;
  setIsProcessing: (processing: boolean) => void;
  setIsBgRemoving: (removing: boolean) => void;
  addTextOverlay: () => void;
  updateTextOverlay: (id: string, updates: Partial<TextOverlay>) => void;
  removeTextOverlay: (id: string) => void;
  setSelectedTextId: (id: string | null) => void;
  setFileName: (name: string) => void;
  reset: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const defaultDoc: DocState = {
  imageFile: null,
  imageUrl: null,
  previewUrl: null,
  width: 0,
  height: 0,
  originalWidth: 0,
  originalHeight: 0,
  format: 'image/jpeg',
  quality: 90,
  targetSizeKb: null,
  originalFileSize: 0,
  backgroundColor: 'transparent',
  rotation: 0,
  crop: null,
  aspectRatio: 'free',
  textOverlays: [],
  strip: DEFAULT_STRIP,
  fileName: 'PhotoResizer',
};

const defaultLivePreview: LivePreviewData = { url: null, sizeKb: 0, width: 0, height: 0 };

const HISTORY_COMMIT_DELAY_MS = 400;
const MAX_HISTORY_DEFAULT = 30;
const MAX_HISTORY_LOW_END = 12;

const EditorContext = createContext<EditorContextType | undefined>(undefined);

function notifyLoaded(loaded: boolean) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('editor-file-loaded', { detail: { loaded } }));
  }
}

function isBlobUrl(url: string | null): url is string {
  return !!url && url.startsWith('blob:');
}

export const EditorProvider = ({ children, initialFile }: { children: ReactNode; initialFile?: File | null }) => {
  const [doc, setDoc] = useState<DocState>(defaultDoc);
  const [livePreview, setLivePreview] = useState<LivePreviewData>(defaultLivePreview);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBgRemoving, setIsBgRemoving] = useState(false);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [historyFlags, setHistoryFlags] = useState({ canUndo: false, canRedo: false });

  // Mutable mirrors so every action below can be referentially stable
  // (a stable context API is what stops the whole editor re-rendering/re-processing in a loop).
  const docRef = useRef<DocState>(defaultDoc);
  const pastRef = useRef<DocState[]>([]);
  const futureRef = useRef<DocState[]>([]);
  const committedRef = useRef<DocState>(defaultDoc);
  const commitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastLoadedFileRef = useRef<File | null>(null);
  const loadTokenRef = useRef(0);
  const mountedRef = useRef(true);
  const maxHistoryRef = useRef(MAX_HISTORY_DEFAULT);

  const syncHistoryFlags = useCallback(() => {
    const next = {
      canUndo: pastRef.current.length > 0 || committedRef.current !== docRef.current,
      canRedo: futureRef.current.length > 0,
    };
    setHistoryFlags((prev) =>
      prev.canUndo === next.canUndo && prev.canRedo === next.canRedo ? prev : next,
    );
  }, []);

  /** Revoke blob URLs of dropped snapshots unless a live snapshot still references them. */
  const releaseUnused = useCallback((removed: DocState[]) => {
    const inUse = new Set<string>();
    const mark = (d: DocState) => {
      if (d.imageUrl) inUse.add(d.imageUrl);
      if (d.previewUrl) inUse.add(d.previewUrl);
    };
    pastRef.current.forEach(mark);
    futureRef.current.forEach(mark);
    mark(docRef.current);
    mark(committedRef.current);

    const revoked = new Set<string>();
    removed.forEach((d) => {
      [d.imageUrl, d.previewUrl].forEach((u) => {
        if (isBlobUrl(u) && !inUse.has(u) && !revoked.has(u)) {
          revoked.add(u);
          URL.revokeObjectURL(u);
        }
      });
    });
  }, []);

  const clearCommitTimer = useCallback(() => {
    if (commitTimerRef.current) {
      clearTimeout(commitTimerRef.current);
      commitTimerRef.current = null;
    }
  }, []);

  const trimPast = useCallback(() => {
    const dropped: DocState[] = [];
    while (pastRef.current.length > maxHistoryRef.current) {
      const oldest = pastRef.current.shift();
      if (oldest) dropped.push(oldest);
    }
    if (dropped.length) releaseUnused(dropped);
  }, [releaseUnused]);

  const flushCommit = useCallback(() => {
    clearCommitTimer();
    if (committedRef.current === docRef.current) return;
    pastRef.current.push(committedRef.current);
    committedRef.current = docRef.current;
    trimPast();
    syncHistoryFlags();
  }, [clearCommitTimer, trimPast, syncHistoryFlags]);

  /**
   * Applies a partial update to the document. Rapid successive edits (slider drags, typing)
   * are coalesced into a single undo step.
   */
  const updateDoc = useCallback(
    (partial: Partial<DocState>) => {
      const current = docRef.current;
      const keys = Object.keys(partial) as (keyof DocState)[];
      if (keys.every((k) => current[k] === partial[k])) return; // nothing changed -> no re-render, no reprocess

      const next = { ...current, ...partial };
      docRef.current = next;
      setDoc(next);

      if (futureRef.current.length) {
        const dropped = futureRef.current;
        futureRef.current = [];
        releaseUnused(dropped);
      }

      clearCommitTimer();
      commitTimerRef.current = setTimeout(flushCommit, HISTORY_COMMIT_DELAY_MS);
      syncHistoryFlags();
    },
    [clearCommitTimer, flushCommit, releaseUnused, syncHistoryFlags],
  );

  const setImageFile = useCallback<EditorContextType['setImageFile']>(
    (file, url, width, height, previewUrl) => {
      clearCommitTimer();
      const old = docRef.current;
      const dropped = [...pastRef.current, ...futureRef.current, old];
      pastRef.current = [];
      futureRef.current = [];

      const next: DocState = {
        ...old,
        imageFile: file,
        imageUrl: url,
        previewUrl: previewUrl ?? url,
        width,
        height,
        originalWidth: width,
        originalHeight: height,
        crop: null,
        aspectRatio: 'free',
        rotation: 0,
        originalFileSize: file?.size ?? 0,
        backgroundColor: 'transparent',
        fileName: file?.name?.replace(/\.[^/.]+$/, '') ?? 'PhotoResizer',
        textOverlays: [],
      };
      docRef.current = next;
      committedRef.current = next;
      setDoc(next);
      setSelectedTextId(null);
      releaseUnused(dropped);
      syncHistoryFlags();
      notifyLoaded(!!file);
    },
    [clearCommitTimer, releaseUnused, syncHistoryFlags],
  );

  /** Replaces the base bitmap (crop / background removal) as a single undoable step. */
  const updateBaseImage = useCallback<EditorContextType['updateBaseImage']>(
    (file, url, width, height, previewUrl) => {
      clearCommitTimer();
      const current = docRef.current;
      pastRef.current.push(current);

      const dropped = futureRef.current;
      futureRef.current = [];

      const next: DocState = {
        ...current,
        imageFile: file,
        imageUrl: url,
        previewUrl: previewUrl ?? url,
        width,
        height,
        originalWidth: width,
        originalHeight: height,
        crop: null,
      };
      docRef.current = next;
      committedRef.current = next;
      setDoc(next);
      trimPast();
      releaseUnused(dropped);
      syncHistoryFlags();
    },
    [clearCommitTimer, releaseUnused, trimPast, syncHistoryFlags],
  );

  /** Reads dimensions, builds the display proxy and loads the picked file into the editor. */
  const loadFile = useCallback(
    async (file: File): Promise<boolean> => {
      if (!file || !file.type?.startsWith('image/')) return false;
      lastLoadedFileRef.current = file;
      const token = ++loadTokenRef.current;
      try {
        const prepared = await prepareImage(file);
        if (!mountedRef.current || token !== loadTokenRef.current) {
          // Superseded by a newer load, or the editor went away.
          URL.revokeObjectURL(prepared.url);
          if (prepared.previewUrl !== prepared.url) URL.revokeObjectURL(prepared.previewUrl);
          return false;
        }
        setImageFile(file, prepared.url, prepared.width, prepared.height, prepared.previewUrl);
        return true;
      } catch (error) {
        console.error('Failed to load image:', error);
        if (token === loadTokenRef.current) lastLoadedFileRef.current = null;
        return false;
      }
    },
    [setImageFile],
  );

  // Receive files from the hero uploader (prop, pending global, or event) exactly once per File.
  useEffect(() => {
    mountedRef.current = true;
    maxHistoryRef.current = isLowEndDevice() ? MAX_HISTORY_LOW_END : MAX_HISTORY_DEFAULT;

    const w = window as unknown as { __PENDING_HERO_FILES__?: File[] };
    const pending = w.__PENDING_HERO_FILES__?.[0];
    if (w.__PENDING_HERO_FILES__) delete w.__PENDING_HERO_FILES__;

    const fileToLoad = initialFile || pending;
    if (fileToLoad instanceof File && fileToLoad !== lastLoadedFileRef.current) {
      void loadFile(fileToLoad);
    }

    const handleHeroDrop = (e: Event) => {
      const file = (e as CustomEvent<{ files: File[] }>).detail?.files?.[0];
      if (file && file !== lastLoadedFileRef.current) void loadFile(file);
    };
    window.addEventListener('hero-file-drop', handleHeroDrop);
    return () => window.removeEventListener('hero-file-drop', handleHeroDrop);
  }, [initialFile, loadFile]);

  // Release everything on unmount.
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearCommitTimer();
      releaseUnused([...pastRef.current, ...futureRef.current, docRef.current]);
      pastRef.current = [];
      futureRef.current = [];
    };
  }, [clearCommitTimer, releaseUnused]);

  const undo = useCallback(() => {
    clearCommitTimer();
    const current = docRef.current;
    // If there are uncommitted edits, undo reverts them first; otherwise step back in history.
    const target = committedRef.current !== current ? committedRef.current : pastRef.current.pop();
    if (!target) return;
    futureRef.current.unshift(current);
    docRef.current = target;
    committedRef.current = target;
    setDoc(target);
    syncHistoryFlags();
  }, [clearCommitTimer, syncHistoryFlags]);

  const redo = useCallback(() => {
    clearCommitTimer();
    const next = futureRef.current.shift();
    if (!next) return;
    pastRef.current.push(docRef.current);
    docRef.current = next;
    committedRef.current = next;
    setDoc(next);
    trimPast();
    syncHistoryFlags();
  }, [clearCommitTimer, trimPast, syncHistoryFlags]);

  const reset = useCallback(() => {
    clearCommitTimer();
    loadTokenRef.current++;
    lastLoadedFileRef.current = null;
    const dropped = [...pastRef.current, ...futureRef.current, docRef.current];
    pastRef.current = [];
    futureRef.current = [];
    docRef.current = defaultDoc;
    committedRef.current = defaultDoc;
    setDoc(defaultDoc);
    setSelectedTextId(null);
    releaseUnused(dropped);
    syncHistoryFlags();
    notifyLoaded(false);
  }, [clearCommitTimer, releaseUnused, syncHistoryFlags]);

  const addTextOverlay = useCallback(() => {
    const id = `text-${Date.now()}`;
    const overlay: TextOverlay = {
      id,
      text: 'Your Text Here',
      x: 50,
      y: 50,
      fontSize: 32,
      color: '#ffffff',
      fontWeight: 'bold',
      opacity: 100,
      rotation: 0,
      align: 'center',
      fontFamily: 'sans-serif',
    };
    updateDoc({ textOverlays: [...docRef.current.textOverlays, overlay] });
    setSelectedTextId(id);
  }, [updateDoc]);

  const updateTextOverlay = useCallback(
    (id: string, updates: Partial<TextOverlay>) => {
      updateDoc({
        textOverlays: docRef.current.textOverlays.map((t) => (t.id === id ? { ...t, ...updates } : t)),
      });
    },
    [updateDoc],
  );

  const removeTextOverlay = useCallback(
    (id: string) => {
      updateDoc({ textOverlays: docRef.current.textOverlays.filter((t) => t.id !== id) });
      setSelectedTextId((prev) => (prev === id ? null : prev));
    },
    [updateDoc],
  );

  const actions = useMemo(
    () => ({
      loadFile,
      setImageFile,
      updateBaseImage,
      setWidth: (width: number) => updateDoc({ width }),
      setHeight: (height: number) => updateDoc({ height }),
      setFormat: (format: ImageFormat) => updateDoc({ format }),
      setQuality: (quality: number) => updateDoc({ quality, targetSizeKb: null }),
      setTargetSizeKb: (targetSizeKb: number | null) => updateDoc({ targetSizeKb }),
      setBackgroundColor: (backgroundColor: string) => updateDoc({ backgroundColor }),
      setRotation: (rotation: number) => updateDoc({ rotation }),
      setStrip: (updates: Partial<StripConfig>) => updateDoc({ strip: { ...docRef.current.strip, ...updates } }),
      setCrop: (crop: CropRect | null) => updateDoc({ crop }),
      setAspectRatio: (aspectRatio: AspectRatio) => updateDoc({ aspectRatio }),
      setFileName: (fileName: string) => updateDoc({ fileName }),
      setLivePreview,
      setIsProcessing,
      setIsBgRemoving,
      setSelectedTextId,
      addTextOverlay,
      updateTextOverlay,
      removeTextOverlay,
      reset,
      undo,
      redo,
    }),
    [
      loadFile,
      setImageFile,
      updateBaseImage,
      updateDoc,
      addTextOverlay,
      updateTextOverlay,
      removeTextOverlay,
      reset,
      undo,
      redo,
    ],
  );

  const value = useMemo<EditorContextType>(
    () => ({
      ...doc,
      livePreview,
      isProcessing,
      isBgRemoving,
      selectedTextId,
      canUndo: historyFlags.canUndo,
      canRedo: historyFlags.canRedo,
      ...actions,
    }),
    [doc, livePreview, isProcessing, isBgRemoving, selectedTextId, historyFlags, actions],
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) throw new Error('useEditor must be used within an EditorProvider');
  return context;
};
'use client';

import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react';

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

interface EditorState {
  imageFile: File | null;
  imageUrl: string | null;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  format: ImageFormat;
  quality: number;
  backgroundColor: string;
  rotation: number;
  crop: CropRect | null;
  aspectRatio: AspectRatio;
  livePreview: LivePreviewData;
  isProcessing: boolean;
  isBgRemoving: boolean;
  textOverlays: TextOverlay[];
  selectedTextId: string | null;
  fileName: string;
}

interface EditorContextType extends EditorState {
  setImageFile: (file: File | null, url: string | null, width: number, height: number) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setFormat: (format: ImageFormat) => void;
  setQuality: (quality: number) => void;
  setBackgroundColor: (color: string) => void;
  setRotation: (rotation: number) => void;
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

const defaultState: EditorState = {
  imageFile: null,
  imageUrl: null,
  width: 0,
  height: 0,
  originalWidth: 0,
  originalHeight: 0,
  format: 'image/jpeg',
  quality: 90,
  backgroundColor: 'transparent',
  rotation: 0,
  crop: null,
  aspectRatio: 'free',
  livePreview: { url: null, sizeKb: 0, width: 0, height: 0 },
  isProcessing: false,
  isBgRemoving: false,
  textOverlays: [],
  selectedTextId: null,
  fileName: 'edited-image',
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<EditorState>(defaultState);
  const [past, setPast] = useState<EditorState[]>([]);
  const [future, setFuture] = useState<EditorState[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isUndoRedo = useRef(false);
  const prevStateRef = useRef<EditorState>(defaultState);

  useEffect(() => {
    if (isUndoRedo.current) {
      isUndoRedo.current = false;
      prevStateRef.current = state;
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      if (prevStateRef.current !== state) {
        setPast((p) => [...p, prevStateRef.current]);
        setFuture([]);
        prevStateRef.current = state;
      }
    }, 400);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [state]);

  const undo = () => {
    if (past.length === 0) return;
    isUndoRedo.current = true;
    const previous = past[past.length - 1];
    setPast((p) => p.slice(0, p.length - 1));
    setFuture((f) => [state, ...f]);
    setState(previous);
    prevStateRef.current = previous;
  };

  const redo = () => {
    if (future.length === 0) return;
    isUndoRedo.current = true;
    const next = future[0];
    setFuture((f) => f.slice(1));
    setPast((p) => [...p, state]);
    setState(next);
    prevStateRef.current = next;
  };

  const setImageFile = (file: File | null, url: string | null, width: number, height: number) => {
    const baseName = file?.name?.replace(/\.[^/.]+$/, '') ?? 'edited-image';
    setState((prev) => {
      const newState = {
        ...prev,
        imageFile: file,
        imageUrl: url,
        width,
        height,
        originalWidth: width,
        originalHeight: height,
        crop: null,
        aspectRatio: 'free' as AspectRatio,
        rotation: 0,
        backgroundColor: 'transparent',
        fileName: baseName,
        textOverlays: [],
        selectedTextId: null,
      };
      isUndoRedo.current = true;
      setPast([]);
      setFuture([]);
      prevStateRef.current = newState;
      return newState;
    });
    
    // Notify the parent renderer that a file is loaded
    window.dispatchEvent(new CustomEvent('editor-file-loaded', { detail: { loaded: !!file } }));
  };

  const setWidth = (width: number) => setState((prev) => ({ ...prev, width }));
  const setHeight = (height: number) => setState((prev) => ({ ...prev, height }));
  const setFormat = (format: ImageFormat) => setState((prev) => ({ ...prev, format }));
  const setQuality = (quality: number) => setState((prev) => ({ ...prev, quality }));
  const setBackgroundColor = (backgroundColor: string) => setState((prev) => ({ ...prev, backgroundColor }));
  const setRotation = (rotation: number) => setState((prev) => ({ ...prev, rotation }));
  const setCrop = (crop: CropRect | null) => setState((prev) => ({ ...prev, crop }));
  const setAspectRatio = (aspectRatio: AspectRatio) => setState((prev) => ({ ...prev, aspectRatio }));
  const setLivePreview = (livePreview: LivePreviewData) => setState((prev) => ({ ...prev, livePreview }));
  const setIsProcessing = (isProcessing: boolean) => setState((prev) => ({ ...prev, isProcessing }));
  const setIsBgRemoving = (isBgRemoving: boolean) => setState((prev) => ({ ...prev, isBgRemoving }));
  const setFileName = (fileName: string) => setState((prev) => ({ ...prev, fileName }));
  const setSelectedTextId = (selectedTextId: string | null) => setState((prev) => ({ ...prev, selectedTextId }));

  const addTextOverlay = () => {
    const id = `text-${Date.now()}`;
    const newOverlay: TextOverlay = {
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
      fontFamily: 'Arial',
    };
    setState((prev) => ({
      ...prev,
      textOverlays: [...prev.textOverlays, newOverlay],
      selectedTextId: id,
    }));
  };

  const updateTextOverlay = (id: string, updates: Partial<TextOverlay>) => {
    setState((prev) => ({
      ...prev,
      textOverlays: prev.textOverlays.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    }));
  };

  const removeTextOverlay = (id: string) => {
    setState((prev) => ({
      ...prev,
      textOverlays: prev.textOverlays.filter((t) => t.id !== id),
      selectedTextId: prev.selectedTextId === id ? null : prev.selectedTextId,
    }));
  };

  const reset = () => {
    isUndoRedo.current = true;
    setPast([]);
    setFuture([]);
    prevStateRef.current = defaultState;
    setState(defaultState);
    window.dispatchEvent(new CustomEvent('editor-file-loaded', { detail: { loaded: false } }));
  };

  return (
    <EditorContext.Provider
      value={{
        ...state,
        textOverlays: state.textOverlays || [],
        fileName: state.fileName || 'edited-image',
        setImageFile,
        setWidth,
        setHeight,
        setFormat,
        setQuality,
        setBackgroundColor,
        setRotation,
        setCrop,
        setAspectRatio,
        setLivePreview,
        setIsProcessing,
        setIsBgRemoving,
        addTextOverlay,
        updateTextOverlay,
        removeTextOverlay,
        setSelectedTextId,
        setFileName,
        reset,
        undo,
        redo,
        canUndo: past.length > 0,
        canRedo: future.length > 0,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) throw new Error('useEditor must be used within an EditorProvider');
  return context;
};
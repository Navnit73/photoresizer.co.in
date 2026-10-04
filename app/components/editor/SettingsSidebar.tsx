'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useEditor, ImageFormat, TextOverlay, DEFAULT_STRIP, getStripLines } from './EditorContext';
import { useTranslation } from '@/app/hooks/useTranslation';
import { triggerHaptic } from '../../utils/haptics';
import {
  SlidersHorizontal,
  RotateCcw,
  RotateCw,
  Rotate3D,
  Type,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Calendar,
  User,
  PenTool,
} from 'lucide-react';

const FONTS = [
  { label: 'Standard Sans', value: 'sans-serif' },
  { label: 'Poppins (Modern)', value: 'Poppins, sans-serif' },
  { label: 'Signature / Cursive', value: 'cursive, "Brush Script MT", "Segoe Script", sans-serif' },
  { label: 'Serif (Formal)', value: 'Georgia, serif' },
  { label: 'Times New Roman', value: '"Times New Roman", serif' },
  { label: 'Impact (Bold)', value: 'Impact, sans-serif' },
  { label: 'Monospace', value: 'monospace' },
];

const MAX_DIMENSION = 10000;
const RANGE_COMMIT_DELAY_MS = 120;

/**
 * Throttled range slider so slider drags don't trigger heavy re-encodes on every pixel.
 */
function RangeField({
  label,
  value,
  min,
  max,
  unit,
  onCommit,
  disabled,
  compact,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onCommit: (value: number) => void;
  disabled?: boolean;
  compact?: boolean;
}) {
  const [local, setLocal] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shown = local ?? value;

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const commit = (v: number) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    onCommit(v);
    setLocal(null);
  };

  const flush = () => {
    if (local !== null) commit(local);
  };

  return (
    <div>
      <div className={`flex justify-between ${compact ? 'mb-1' : 'items-center mb-2'}`}>
        <label className={compact ? 'text-[11px] font-semibold text-[#18181B]' : 'text-xs font-semibold text-[#18181B]'}>
          {label}
        </label>
        <span className={compact ? 'text-[11px] font-semibold text-[#16A34A]' : 'text-xs font-bold text-[#16A34A]'}>
          {shown}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={shown}
        disabled={disabled}
        onChange={(e) => {
          const v = Number(e.target.value);
          setLocal(v);
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => commit(v), RANGE_COMMIT_DELAY_MS);
        }}
        onPointerUp={flush}
        onKeyUp={flush}
        onBlur={flush}
        className={`w-full accent-[#16A34A] ${compact ? '' : 'disabled:opacity-40 cursor-pointer'}`}
      />
    </div>
  );
}

function TextOverlayItem({
  overlay,
  onUpdate,
  onRemove,
  isSelected,
  onSelect,
  t,
}: {
  overlay: TextOverlay;
  onUpdate: (updates: Partial<TextOverlay>) => void;
  onRemove: () => void;
  isSelected: boolean;
  onSelect: () => void;
  t: Record<string, string>;
}) {
  return (
    <div
      className={`rounded-xl border transition-all duration-150 ${
        isSelected ? 'border-[#16A34A] bg-[#F0FDF4]' : 'border-[#E4E4E7] bg-[#FFFFFF] hover:border-[#BBF7D0]'
      }`}
    >
      <div
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onSelect();
        }}
        className="w-full flex items-center justify-between px-3.5 py-2.5 text-left cursor-pointer select-none focus:outline-none"
      >
        <div className="flex items-center gap-2 min-w-0">
          <Type size={14} className={isSelected ? 'text-[#16A34A]' : 'text-[#71717A]'} />
          <span className="text-xs font-semibold text-[#18181B] truncate max-w-[130px]">
            {overlay.text || t.emptyText || 'Text Overlay'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="p-1 rounded-lg hover:bg-red-50 text-[#71717A] hover:text-[#DC2626] transition-colors"
            aria-label="Remove text"
          >
            <Trash2 size={13} />
          </button>
          {isSelected ? <ChevronUp size={14} className="text-[#71717A]" /> : <ChevronDown size={14} className="text-[#71717A]" />}
        </div>
      </div>

      {isSelected && (
        <div className="px-3.5 pb-3.5 space-y-3 border-t border-[#E4E4E7] pt-3">
          <div>
            <label className="text-[11px] font-semibold text-[#18181B] mb-1 block">
              {t.textContent || 'Text Content'}
            </label>
            <textarea
              value={overlay.text}
              onChange={(e) => onUpdate({ text: e.target.value })}
              rows={2}
              className="w-full bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-3 py-2 text-xs resize-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#DCFCE7] text-[#18181B] transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-semibold text-[#18181B] mb-1 block">
                {t.font || 'Font'}
              </label>
              <select
                value={overlay.fontFamily}
                onChange={(e) => onUpdate({ fontFamily: e.target.value })}
                className="w-full bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-2.5 py-1.5 text-xs focus:border-[#16A34A] text-[#18181B]"
              >
                {FONTS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[#18181B] mb-1 block">
                {t.color || 'Color'}
              </label>
              <div className="flex gap-1.5 items-center">
                <input
                  type="color"
                  value={overlay.color}
                  onChange={(e) => onUpdate({ color: e.target.value })}
                  className="w-7 h-7 rounded-lg border border-[#E4E4E7] cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={overlay.color}
                  onChange={(e) => onUpdate({ color: e.target.value })}
                  className="flex-1 min-w-0 bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-2 py-1 text-xs focus:border-[#16A34A] text-[#18181B]"
                />
              </div>
            </div>
          </div>

          <RangeField
            compact
            label={t.size || 'Size'}
            value={overlay.fontSize}
            min={8}
            max={200}
            unit="px"
            onCommit={(v) => onUpdate({ fontSize: v })}
          />

          <RangeField
            compact
            label={t.opacity || 'Opacity'}
            value={overlay.opacity}
            min={10}
            max={100}
            unit="%"
            onCommit={(v) => onUpdate({ opacity: v })}
          />

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-semibold text-[#18181B] mb-1 block">{t.posX || 'Pos X (%)'}</label>
              <input
                type="number"
                min="0"
                max="100"
                value={Math.round(overlay.x)}
                onChange={(e) => onUpdate({ x: Math.max(0, Math.min(100, Number(e.target.value) || 0)) })}
                className="w-full bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-2.5 py-1.5 text-xs text-[#18181B]"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[#18181B] mb-1 block">{t.posY || 'Pos Y (%)'}</label>
              <input
                type="number"
                min="0"
                max="100"
                value={Math.round(overlay.y)}
                onChange={(e) => onUpdate({ y: Math.max(0, Math.min(100, Number(e.target.value) || 0)) })}
                className="w-full bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-2.5 py-1.5 text-xs text-[#18181B]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SettingsSidebar() {
  const {
    width,
    height,
    originalWidth,
    originalHeight,
    setWidth,
    setHeight,
    format,
    setFormat,
    quality,
    setQuality,
    backgroundColor,
    setBackgroundColor,
    rotation,
    setRotation,
    strip,
    setStrip,
    imageFile,
    textOverlays,
    addTextOverlay,
    updateTextOverlay,
    removeTextOverlay,
    selectedTextId,
    setSelectedTextId,
  } = useEditor();

  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<'export' | 'strip' | 'text'>('export');

  const handlePercentageClick = (percentage: number) => {
    triggerHaptic('light');
    setWidth(Math.round(originalWidth * (percentage / 100)));
    setHeight(Math.round(originalHeight * (percentage / 100)));
  };

  const disabled = !imageFile;
  const currentStrip = strip || DEFAULT_STRIP;
  const stripLines = currentStrip.enabled ? getStripLines(currentStrip) : [];

  const handleAddSignature = () => {
    triggerHaptic('medium');
    const id = `sig-${Date.now()}`;
    const newOverlay: TextOverlay = {
      id,
      text: 'Candidate Signature',
      x: 50,
      y: 85,
      fontSize: 28,
      color: '#000080',
      fontWeight: 'normal',
      opacity: 100,
      rotation: 0,
      align: 'center',
      fontFamily: 'cursive, "Brush Script MT", "Segoe Script", sans-serif',
    };
    updateTextOverlay(id, newOverlay);
    setActiveSection('text');
    setSelectedTextId(id);
  };

  return (
    <aside className="w-full h-full flex flex-col bg-[#FFFFFF] text-[#18181B] overflow-hidden">
      {/* Tab bar with 3 clean options */}
      <div className="flex border-b border-[#E4E4E7] bg-[#FAFAFA]/50">
        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setActiveSection('export');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold transition-colors relative ${
            activeSection === 'export'
              ? 'text-[#16A34A] bg-[#FFFFFF]'
              : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#F4F4F5]'
          }`}
        >
          <SlidersHorizontal size={13} />
          <span>Resize</span>
          {activeSection === 'export' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A]" />}
        </button>

        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setActiveSection('strip');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold transition-colors relative ${
            activeSection === 'strip'
              ? 'text-[#16A34A] bg-[#FFFFFF]'
              : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#F4F4F5]'
          }`}
        >
          <User size={13} />
          <span>Name &amp; Date</span>
          {currentStrip.enabled && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
          )}
          {activeSection === 'strip' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A]" />}
        </button>

        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setActiveSection('text');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold transition-colors relative ${
            activeSection === 'text'
              ? 'text-[#16A34A] bg-[#FFFFFF]'
              : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#F4F4F5]'
          }`}
        >
          <Type size={13} />
          <span>Text/Sign</span>
          {(textOverlays || []).length > 0 && (
            <span className="text-[10px] bg-[#E4E4E7] text-[#18181B] px-1 rounded-full font-bold">
              {(textOverlays || []).length}
            </span>
          )}
          {activeSection === 'text' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A]" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* RESIZE & FORMAT TAB */}
        {activeSection === 'export' && (
          <>
            <div>
              <label className="text-xs font-semibold text-[#18181B] mb-2 block">
                {t.outputSize || 'Dimensions (Pixels)'}
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <label className="text-[11px] font-medium text-[#71717A] mb-1 block">Width (px)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Math.min(MAX_DIMENSION, Math.max(1, Number(e.target.value) || 0)))}
                    disabled={disabled}
                    className="w-full h-10 bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-3 text-sm font-semibold text-[#18181B] disabled:opacity-40 focus:border-[#16A34A] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717A] mb-1 block">Height (px)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Math.min(MAX_DIMENSION, Math.max(1, Number(e.target.value) || 0)))}
                    disabled={disabled}
                    className="w-full h-10 bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-3 text-sm font-semibold text-[#18181B] disabled:opacity-40 focus:border-[#16A34A] transition-colors"
                  />
                </div>
              </div>

              {/* Scale Percentage Pills */}
              <div className="grid grid-cols-4 gap-1.5">
                {[25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => handlePercentageClick(pct)}
                    disabled={disabled}
                    className="py-1 text-xs font-semibold bg-[#FAFAFA] hover:bg-[#F0FDF4] hover:text-[#15803D] hover:border-[#BBF7D0] rounded-lg border border-[#E4E4E7] disabled:opacity-40 transition-colors text-[#52525B]"
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-[#F4F4F5]" />

            {/* ROTATION CONTROLS (Fully functional with visual angle feedback) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-[#18181B]">{t.rotate || 'Rotate Image'}</label>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#F4F4F5] text-[#18181B]">
                  {rotation}°
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('medium');
                    setRotation((rotation - 90 + 360) % 360);
                  }}
                  disabled={disabled}
                  className="flex flex-col items-center justify-center gap-1 py-2 bg-[#FFFFFF] hover:bg-[#F0FDF4] hover:text-[#15803D] hover:border-[#BBF7D0] border border-[#E4E4E7] rounded-xl disabled:opacity-40 text-xs font-medium text-[#18181B] transition-colors"
                  title="Rotate Left 90°"
                >
                  <RotateCcw size={14} />
                  <span className="text-[10px] font-semibold">−90°</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('medium');
                    setRotation((rotation + 90) % 360);
                  }}
                  disabled={disabled}
                  className="flex flex-col items-center justify-center gap-1 py-2 bg-[#FFFFFF] hover:bg-[#F0FDF4] hover:text-[#15803D] hover:border-[#BBF7D0] border border-[#E4E4E7] rounded-xl disabled:opacity-40 text-xs font-medium text-[#18181B] transition-colors"
                  title="Rotate Right 90°"
                >
                  <RotateCw size={14} />
                  <span className="text-[10px] font-semibold">+90°</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('medium');
                    setRotation((rotation + 180) % 360);
                  }}
                  disabled={disabled}
                  className="flex flex-col items-center justify-center gap-1 py-2 bg-[#FFFFFF] hover:bg-[#F0FDF4] hover:text-[#15803D] hover:border-[#BBF7D0] border border-[#E4E4E7] rounded-xl disabled:opacity-40 text-xs font-medium text-[#18181B] transition-colors"
                  title="Rotate 180°"
                >
                  <Rotate3D size={14} />
                  <span className="text-[10px] font-semibold">180°</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('medium');
                    setRotation(0);
                  }}
                  disabled={disabled || rotation === 0}
                  className="flex flex-col items-center justify-center gap-1 py-2 bg-[#FAFAFA] hover:bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl disabled:opacity-30 text-xs font-medium text-[#71717A] transition-colors"
                  title="Reset Angle to 0°"
                >
                  <span className="text-xs font-bold leading-none">0°</span>
                  <span className="text-[10px]">Reset</span>
                </button>
              </div>
            </div>

            <hr className="border-[#F4F4F5]" />

            <div>
              <label className="text-xs font-semibold text-[#18181B] mb-2 block">
                {t.outputFormat || 'File Format'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'JPG', value: 'image/jpeg' as ImageFormat },
                  { label: 'PNG', value: 'image/png' as ImageFormat },
                  { label: 'WEBP', value: 'image/webp' as ImageFormat },
                ].map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      setFormat(f.value);
                    }}
                    disabled={disabled}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-colors disabled:opacity-40 ${
                      format === f.value
                        ? 'border-[#16A34A] bg-[#F0FDF4] text-[#15803D]'
                        : 'border-[#E4E4E7] bg-[#FFFFFF] text-[#52525B] hover:border-[#BBF7D0]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-[#F4F4F5]" />

            <div>
              <RangeField
                label={t.quality || 'JPEG / WEBP Quality'}
                value={quality}
                min={1}
                max={100}
                unit="%"
                onCommit={setQuality}
                disabled={disabled || format === 'image/png'}
              />
              <p className="text-[11px] text-[#71717A] mt-1">
                Use lower quality to reach strict online form KB limits.
              </p>
            </div>

            <hr className="border-[#F4F4F5]" />

            <div>
              <label className="text-xs font-semibold text-[#18181B] mb-2 block">
                {t.bgColor || 'Background Color'}
              </label>
              <div className="flex gap-2 flex-wrap">
                {['transparent', '#ffffff', '#000000', '#f1f5f9', '#16a34a', '#2563eb', '#f59e0b'].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      setBackgroundColor(color);
                    }}
                    disabled={disabled}
                    title={color === 'transparent' ? 'Transparent' : color}
                    className={`w-7 h-7 rounded-lg border-2 disabled:opacity-40 transition-all ${
                      backgroundColor === color ? 'border-[#16A34A] scale-110 shadow-sm' : 'border-[#E4E4E7] hover:scale-105'
                    }`}
                    style={{
                      backgroundColor: color === 'transparent' ? '#ffffff' : color,
                    }}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* NAME & DOB STRIP TAB (Govt / Exam Forms) */}
        {activeSection === 'strip' && (
          <div className="space-y-4">
            <div className="p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl flex items-start gap-2.5">
              <Sparkles size={16} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#15803D]">Exam Name &amp; DOB Strip</h4>
                <p className="text-[11px] text-[#52525B] leading-relaxed mt-0.5">
                  Adds an official white strip at the bottom of the photo with candidate name &amp; date of birth (DOB) or date of photo (DOP).
                </p>
              </div>
            </div>

            {/* Toggle Enable Strip */}
            <div className="flex items-center justify-between p-3 border border-[#E4E4E7] rounded-xl bg-[#FAFAFA]">
              <label htmlFor="strip-toggle" className="text-xs font-semibold text-[#18181B] cursor-pointer">
                Enable White Strip on Photo
              </label>
              <input
                id="strip-toggle"
                type="checkbox"
                checked={currentStrip.enabled}
                onChange={(e) => {
                  triggerHaptic('medium');
                  setStrip({ enabled: e.target.checked });
                }}
                disabled={disabled}
                className="w-4 h-4 accent-[#16A34A] cursor-pointer"
              />
            </div>

            {currentStrip.enabled && (
              <div className="space-y-3.5 p-3.5 border border-[#BBF7D0] rounded-xl bg-[#FFFFFF]">
                {/* Candidate Name Input */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-semibold text-[#18181B] flex items-center gap-1">
                      <User size={12} className="text-[#16A34A]" />
                      Candidate Name
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        triggerHaptic('light');
                        setStrip({ name: currentStrip.name.toUpperCase() });
                      }}
                      className="text-[10px] font-semibold text-[#15803D] hover:underline"
                    >
                      UPPERCASE
                    </button>
                  </div>
                  <input
                    type="text"
                    value={currentStrip.name}
                    onChange={(e) => setStrip({ name: e.target.value })}
                    placeholder="e.g. RAHUL SHARMA"
                    className="w-full bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-3 py-2 text-xs font-medium text-[#18181B] focus:border-[#16A34A] focus:ring-2 focus:ring-[#DCFCE7] transition-all"
                  />
                </div>

                {/* Date Input */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-semibold text-[#18181B] flex items-center gap-1">
                      <Calendar size={12} className="text-[#16A34A]" />
                      Date (DOB / Photo Date)
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        triggerHaptic('light');
                        const today = new Date().toISOString().split('T')[0];
                        setStrip({ date: today });
                      }}
                      className="text-[10px] font-semibold text-[#15803D] hover:underline"
                    >
                      Today&apos;s Date
                    </button>
                  </div>
                  <input
                    type="date"
                    value={currentStrip.date}
                    onChange={(e) => setStrip({ date: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-3 py-2 text-xs font-medium text-[#18181B] focus:border-[#16A34A]"
                  />
                </div>

                {/* Prefix Label (DOP / DOB / None) */}
                <div>
                  <label className="text-[11px] font-semibold text-[#18181B] mb-1.5 block">
                    Date Prefix Format
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: 'DOP: (Date of Photo)', value: 'DOP' as const },
                      { label: 'DOB: (Birth Date)', value: 'DOB' as const },
                      { label: 'None (Date only)', value: 'NONE' as const },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          triggerHaptic('light');
                          setStrip({ dateLabel: opt.value });
                        }}
                        className={`py-1.5 px-2 text-[11px] font-semibold rounded-lg border transition-colors ${
                          currentStrip.dateLabel === opt.value
                            ? 'border-[#16A34A] bg-[#F0FDF4] text-[#15803D]'
                            : 'border-[#E4E4E7] bg-[#FFFFFF] text-[#52525B] hover:border-[#BBF7D0]'
                        }`}
                      >
                        {opt.value}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Strip Height slider */}
                <RangeField
                  compact
                  label="Strip Height"
                  value={currentStrip.heightPct || 16}
                  min={10}
                  max={25}
                  unit="%"
                  onCommit={(v) => setStrip({ heightPct: v })}
                />

                {/* Live Strip Preview Box */}
                <div className="mt-2 p-2.5 bg-[#FAFAFA] border border-[#E4E4E7] rounded-lg text-center select-none">
                  <span className="text-[10px] text-[#71717A] uppercase font-bold tracking-wider block mb-1">
                    Preview Strip Text:
                  </span>
                  {stripLines.length > 0 ? (
                    stripLines.map((l, i) => (
                      <div key={i} className="text-xs font-bold text-[#18181B] uppercase tracking-wide font-sans">
                        {l}
                      </div>
                    ))
                  ) : (
                    <span className="text-[11px] text-[#A1A1AA] italic">
                      Enter Name &amp; Date above
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Quick Presets */}
            <div className="pt-2 border-t border-[#E4E4E7]">
              <span className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider block mb-2">
                Quick Exam Templates:
              </span>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    const today = new Date().toISOString().split('T')[0];
                    setStrip({ enabled: true, dateLabel: 'DOP', date: today });
                  }}
                  disabled={disabled}
                  className="w-full flex items-center justify-between p-2.5 text-xs font-semibold bg-[#FFFFFF] hover:bg-[#F0FDF4] hover:border-[#BBF7D0] border border-[#E4E4E7] rounded-xl transition-colors text-left"
                >
                  <span className="text-[#18181B]">SSC Exam Photo Format</span>
                  <span className="text-[10px] bg-[#DCFCE7] text-[#15803D] px-2 py-0.5 rounded font-bold">
                    Name + DOP
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setStrip({ enabled: true, dateLabel: 'DOB' });
                  }}
                  disabled={disabled}
                  className="w-full flex items-center justify-between p-2.5 text-xs font-semibold bg-[#FFFFFF] hover:bg-[#F0FDF4] hover:border-[#BBF7D0] border border-[#E4E4E7] rounded-xl transition-colors text-left"
                >
                  <span className="text-[#18181B]">UPSC / State PSC Format</span>
                  <span className="text-[10px] bg-[#E0E7FF] text-[#4338CA] px-2 py-0.5 rounded font-bold">
                    Name + DOB
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CUSTOM TEXT & SIGNATURE TAB */}
        {activeSection === 'text' && (
          <>
            {!imageFile ? (
              <div className="text-center py-8">
                <Type size={28} className="mx-auto text-[#71717A] opacity-50 mb-2" />
                <p className="text-xs text-[#71717A]">Upload an image to add custom text or signature overlays</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      triggerHaptic('medium');
                      addTextOverlay();
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl text-xs font-semibold transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    <Plus size={14} /> Add Text Layer
                  </button>
                  <button
                    type="button"
                    onClick={handleAddSignature}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-[#FFFFFF] hover:bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0] rounded-xl text-xs font-semibold transition-colors"
                  >
                    <PenTool size={14} /> Add Signature
                  </button>
                </div>

                {(textOverlays || []).length === 0 ? (
                  <div className="text-center py-6 border border-dashed border-[#E4E4E7] rounded-xl p-4 bg-[#FAFAFA]">
                    <PenTool size={20} className="mx-auto text-[#A1A1AA] mb-1.5" />
                    <p className="text-xs text-[#52525B] font-medium">No custom text layers added.</p>
                    <p className="text-[11px] text-[#71717A] mt-0.5">
                      Add a text or signature layer, then drag it directly on the canvas.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {(textOverlays || []).map((overlay) => (
                      <TextOverlayItem
                        key={overlay.id}
                        overlay={overlay}
                        t={t}
                        isSelected={selectedTextId === overlay.id}
                        onSelect={() => {
                          triggerHaptic('light');
                          setSelectedTextId(selectedTextId === overlay.id ? null : overlay.id);
                        }}
                        onUpdate={(updates) => updateTextOverlay(overlay.id, updates)}
                        onRemove={() => {
                          triggerHaptic('medium');
                          removeTextOverlay(overlay.id);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
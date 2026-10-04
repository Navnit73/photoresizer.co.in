'use client';

import React, { useState } from 'react';
import { useEditor, ImageFormat, TextOverlay } from './EditorContext';
import { useTranslation } from '@/app/hooks/useTranslation';
import {
  SlidersHorizontal,
  RotateCcw,
  RotateCw,
  Type,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const FONTS = ['Poppins', 'Arial', 'Georgia', 'Times New Roman', 'Courier New', 'Verdana', 'Impact'];

function TextOverlayItem({ overlay, onUpdate, onRemove, isSelected, onSelect, t }: {
  overlay: TextOverlay;
  onUpdate: (updates: Partial<TextOverlay>) => void;
  onRemove: () => void;
  isSelected: boolean;
  onSelect: () => void;
  t: Record<string, string>;
}) {
  return (
    <div className={`rounded-xl border transition-all duration-150 ${isSelected ? 'border-[#16A34A] bg-[#F0FDF4]' : 'border-[#E4E4E7] bg-[#FFFFFF] hover:border-[#BBF7D0]'}`}>
      <div
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(); }}
        className="w-full flex items-center justify-between px-3.5 py-2.5 text-left cursor-pointer select-none focus:outline-none"
      >
        <div className="flex items-center gap-2 min-w-0">
          <Type size={14} className={isSelected ? 'text-[#16A34A]' : 'text-[#71717A]'} />
          <span className="text-xs font-semibold text-[#18181B] truncate max-w-[120px]">
            {overlay.text || t.emptyText || 'Text Overlay'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
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
                {FONTS.map((f) => <option key={f} value={f}>{f}</option>)}
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

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-[11px] font-semibold text-[#18181B]">{t.size || 'Size'}</label>
              <span className="text-[11px] font-semibold text-[#16A34A]">{overlay.fontSize}px</span>
            </div>
            <input
              type="range" min="8" max="200" value={overlay.fontSize}
              onChange={(e) => onUpdate({ fontSize: Number(e.target.value) })}
              className="w-full accent-[#16A34A]"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-[11px] font-semibold text-[#18181B]">{t.opacity || 'Opacity'}</label>
              <span className="text-[11px] font-semibold text-[#16A34A]">{overlay.opacity}%</span>
            </div>
            <input
              type="range" min="10" max="100" value={overlay.opacity}
              onChange={(e) => onUpdate({ opacity: Number(e.target.value) })}
              className="w-full accent-[#16A34A]"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-semibold text-[#18181B] mb-1 block">{t.posX || 'Pos X (%)'}</label>
              <input
                type="number" min="0" max="100" value={Math.round(overlay.x)}
                onChange={(e) => onUpdate({ x: Math.max(0, Math.min(100, Number(e.target.value) || 0)) })}
                className="w-full bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-2.5 py-1.5 text-xs text-[#18181B]"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[#18181B] mb-1 block">{t.posY || 'Pos Y (%)'}</label>
              <input
                type="number" min="0" max="100" value={Math.round(overlay.y)}
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
    width, height, originalWidth, originalHeight,
    setWidth, setHeight, format, setFormat, quality, setQuality,
    backgroundColor, setBackgroundColor, rotation, setRotation,
    imageFile, textOverlays, addTextOverlay, updateTextOverlay,
    removeTextOverlay, selectedTextId, setSelectedTextId,
  } = useEditor();

  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<'export' | 'text'>('export');

  const handlePercentageClick = (percentage: number) => {
    setWidth(Math.round(originalWidth * (percentage / 100)));
    setHeight(Math.round(originalHeight * (percentage / 100)));
  };

  const disabled = !imageFile;

  return (
    <aside className="w-full h-full flex flex-col bg-[#FFFFFF] text-[#18181B] overflow-hidden">
      {/* Tab bar */}
      <div className="flex border-b border-[#E4E4E7]">
        <button
          onClick={() => setActiveSection('export')}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-semibold transition-colors relative ${
            activeSection === 'export'
              ? 'text-[#16A34A] bg-[#F0FDF4]'
              : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#FAFAFA]'
          }`}
        >
          <SlidersHorizontal size={14} />
          <span>{t.exportTab || 'Resize & Format'}</span>
          {activeSection === 'export' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A]" />
          )}
        </button>

        <button
          onClick={() => setActiveSection('text')}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-semibold transition-colors relative ${
            activeSection === 'text'
              ? 'text-[#16A34A] bg-[#F0FDF4]'
              : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#FAFAFA]'
          }`}
        >
          <Type size={14} />
          <span>{t.textTab || 'Text Overlay'}</span>
          {activeSection === 'text' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A]" />
          )}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* RESIZE & EXPORT */}
        {activeSection === 'export' && (
          <>
            <div>
              <label className="text-xs font-semibold text-[#18181B] mb-2.5 block">
                {t.outputSize || 'Dimensions (Pixels)'}
              </label>
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div>
                  <label className="text-[11px] font-medium text-[#71717A] mb-1 block">Width (px)</label>
                  <input
                    type="number" 
                    value={width}
                    onChange={(e) => setWidth(Math.max(1, Number(e.target.value) || 0))}
                    disabled={disabled}
                    className="w-full h-11 bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-3 text-sm font-semibold text-[#18181B] disabled:opacity-40 focus:border-[#16A34A] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717A] mb-1 block">Height (px)</label>
                  <input
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(Math.max(1, Number(e.target.value) || 0))}
                    disabled={disabled}
                    className="w-full h-11 bg-[#FFFFFF] border border-[#E4E4E7] rounded-xl px-3 text-sm font-semibold text-[#18181B] disabled:opacity-40 focus:border-[#16A34A] transition-colors"
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
                    className="py-1.5 text-xs font-semibold bg-[#FAFAFA] hover:bg-[#F0FDF4] hover:text-[#15803D] hover:border-[#BBF7D0] rounded-lg border border-[#E4E4E7] disabled:opacity-40 transition-colors text-[#52525B]"
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-[#F4F4F5]" />

            <div>
              <label className="text-xs font-semibold text-[#18181B] mb-2.5 block">
                {t.rotate || 'Rotate Image'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRotation((rotation - 90 + 360) % 360)}
                  disabled={disabled}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#FFFFFF] hover:bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl disabled:opacity-40 text-xs font-medium text-[#18181B] transition-colors"
                >
                  <RotateCcw size={13} /> −90°
                </button>
                <button
                  type="button"
                  onClick={() => setRotation((rotation + 90) % 360)}
                  disabled={disabled}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#FFFFFF] hover:bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl disabled:opacity-40 text-xs font-medium text-[#18181B] transition-colors"
                >
                  +90° <RotateCw size={13} />
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
                    onClick={() => setFormat(f.value)}
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
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-[#18181B]">{t.quality || 'JPEG Quality / Compression'}</label>
                <span className="text-xs font-bold text-[#16A34A]">{quality}%</span>
              </div>
              <input
                type="range" min="1" max="100" value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                disabled={disabled || format === 'image/png'}
                className="w-full accent-[#16A34A] disabled:opacity-40 cursor-pointer"
              />
              <p className="text-[11px] text-[#71717A] mt-1">
                Lower quality reduces file size (KB) for online form limits.
              </p>
            </div>

            <hr className="border-[#F4F4F5]" />

            <div>
              <label className="text-xs font-semibold text-[#18181B] mb-2.5 block">{t.bgColor || 'Background Color'}</label>
              <div className="flex gap-2 flex-wrap">
                {['transparent', '#ffffff', '#000000', '#f1f5f9', '#16a34a', '#2563eb', '#f59e0b'].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setBackgroundColor(color)}
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

        {/* TEXT OVERLAYS */}
        {activeSection === 'text' && (
          <>
            {!imageFile ? (
              <div className="text-center py-8">
                <Type size={28} className="mx-auto text-[#71717A] opacity-50 mb-2" />
                <p className="text-xs text-[#71717A]">Upload an image to add name/date overlays</p>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={addTextOverlay}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl text-xs font-semibold transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                >
                  <Plus size={15} /> {t.addTextOverlay || 'Add Text Overlay'}
                </button>

                {(textOverlays || []).length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-xs text-[#71717A]">No text overlays added yet. Add candidate name or Date of Photo (DOP).</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {(textOverlays || []).map((overlay) => (
                      <TextOverlayItem
                        key={overlay.id}
                        overlay={overlay}
                        t={t}
                        isSelected={selectedTextId === overlay.id}
                        onSelect={() => setSelectedTextId(selectedTextId === overlay.id ? null : overlay.id)}
                        onUpdate={(updates) => updateTextOverlay(overlay.id, updates)}
                        onRemove={() => removeTextOverlay(overlay.id)}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
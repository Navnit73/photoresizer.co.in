'use client';

import React, { useState } from 'react';
import { useEditor, ImageFormat, TextOverlay } from './EditorContext';
import { useTranslation } from '@/app/hooks/useTranslation';
import {
  Maximize2,
  SlidersHorizontal,
  RotateCcw,
  RotateCw,
  Type,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const FONTS = ['Arial', 'Georgia', 'Times New Roman', 'Courier New', 'Verdana', 'Impact', 'Comic Sans MS'];

function TextOverlayItem({ overlay, onUpdate, onRemove, isSelected, onSelect, t }: {
  overlay: TextOverlay;
  onUpdate: (updates: Partial<TextOverlay>) => void;
  onRemove: () => void;
  isSelected: boolean;
  onSelect: () => void;
  t: Record<string, string>;
}) {
  return (
    <div className={`rounded-2xl border transition-all duration-200 ${isSelected ? 'border-[#ff385c] bg-[#ff385c]/5 shadow-sm' : 'border-[#dddddd] dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#ff385c]/40'}`}>
      <div
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(); }}
        className="w-full flex items-center justify-between px-3.5 py-3 text-left cursor-pointer select-none focus:outline-none rounded-t-2xl"
      >
        <div className="flex items-center gap-2 min-w-0">
          <Type size={14} className={isSelected ? 'text-[#ff385c]' : 'text-[#6a6a6a] dark:text-slate-400'} />
          <span className="text-xs font-bold text-[#222222] dark:text-white truncate max-w-[120px]">
            {overlay.text || t.emptyText}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="p-1.5 rounded-full hover:bg-red-50 text-[#6a6a6a] hover:text-red-500 transition-colors"
          >
            <Trash2 size={13} />
          </button>
          {isSelected ? <ChevronUp size={14} className="text-[#6a6a6a]" /> : <ChevronDown size={14} className="text-[#6a6a6a]" />}
        </div>
      </div>

      {isSelected && (
        <div className="px-3.5 pb-4 space-y-3 border-t border-[#dddddd] dark:border-slate-800 pt-3">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-[#6a6a6a] dark:text-slate-400 mb-1 block">{t.textContent}</label>
            <textarea
              value={overlay.text}
              onChange={(e) => onUpdate({ text: e.target.value })}
              rows={2}
              className="w-full bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:border-[#222222] dark:focus:border-white text-[#222222] dark:text-white transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#6a6a6a] dark:text-slate-400 mb-1 block">{t.font}</label>
              <select
                value={overlay.fontFamily}
                onChange={(e) => onUpdate({ fontFamily: e.target.value })}
                className="w-full bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:border-[#222222] text-[#222222] dark:text-white"
              >
                {FONTS.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#6a6a6a] dark:text-slate-400 mb-1 block">{t.color}</label>
              <div className="flex gap-1.5">
                <input
                  type="color"
                  value={overlay.color}
                  onChange={(e) => onUpdate({ color: e.target.value })}
                  className="w-8 h-8 rounded-full border border-[#dddddd] cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={overlay.color}
                  onChange={(e) => onUpdate({ color: e.target.value })}
                  className="flex-1 min-w-0 bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 rounded-xl px-2 py-1.5 text-xs focus:outline-none text-[#222222] dark:text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#6a6a6a] dark:text-slate-400">{t.size}</label>
              <span className="text-[10px] font-bold text-[#222222] dark:text-white">{overlay.fontSize}px</span>
            </div>
            <input
              type="range" min="8" max="200" value={overlay.fontSize}
              onChange={(e) => onUpdate({ fontSize: Number(e.target.value) })}
              className="w-full accent-[#ff385c]"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#6a6a6a] dark:text-slate-400">{t.opacity}</label>
              <span className="text-[10px] font-bold text-[#222222] dark:text-white">{overlay.opacity}%</span>
            </div>
            <input
              type="range" min="10" max="100" value={overlay.opacity}
              onChange={(e) => onUpdate({ opacity: Number(e.target.value) })}
              className="w-full accent-[#ff385c]"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#6a6a6a] dark:text-slate-400 mb-1 block">{t.posX}</label>
              <input
                type="number" min="0" max="100" value={Math.round(overlay.x)}
                onChange={(e) => onUpdate({ x: Math.max(0, Math.min(100, Number(e.target.value) || 0)) })}
                className="w-full bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs focus:outline-none text-[#222222] dark:text-white"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#6a6a6a] dark:text-slate-400 mb-1 block">{t.posY}</label>
              <input
                type="number" min="0" max="100" value={Math.round(overlay.y)}
                onChange={(e) => onUpdate({ y: Math.max(0, Math.min(100, Number(e.target.value) || 0)) })}
                className="w-full bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs focus:outline-none text-[#222222] dark:text-white"
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

  const tabs = [
    { id: 'export', label: t.exportTab, icon: <SlidersHorizontal size={14} /> },
    { id: 'text', label: t.textTab, icon: <Type size={14} /> },
  ] as const;

  return (
    <aside className="w-full h-full flex-shrink-0 flex flex-col bg-transparent overflow-hidden transition-colors duration-300 font-['Airbnb_Cereal_VF',Circular,sans-serif]">
      {/* Tab bar (Airbnb product tab style with 2px bottom active underline) */}
      <div className="flex border-b border-[#dddddd] dark:border-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-bold transition-all relative ${
              activeSection === tab.id
                ? 'text-[#222222] dark:text-white'
                : 'text-[#6a6a6a] dark:text-slate-400 hover:text-[#222222] dark:hover:text-white hover:bg-[#f7f7f7] dark:hover:bg-slate-800'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {activeSection === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff385c] rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* EXPORT */}
        {activeSection === 'export' && (
          <>
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#ff385c] mb-3 block">{t.outputSize}</label>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-xs font-semibold text-[#6a6a6a] dark:text-slate-400 mb-1 block">{t.widthPx}</label>
                  <input
                    type="number" value={width}
                    onChange={(e) => setWidth(Math.max(1, Number(e.target.value) || 0))}
                    disabled={disabled}
                    className="w-full bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 rounded-xl px-3 py-2 text-sm font-semibold text-[#222222] dark:text-white disabled:opacity-40 focus:outline-none focus:border-[#222222] dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#6a6a6a] dark:text-slate-400 mb-1 block">{t.heightPx}</label>
                  <input
                    type="number" value={height}
                    onChange={(e) => setHeight(Math.max(1, Number(e.target.value) || 0))}
                    disabled={disabled}
                    className="w-full bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 rounded-xl px-3 py-2 text-sm font-semibold text-[#222222] dark:text-white disabled:opacity-40 focus:outline-none focus:border-[#222222] dark:focus:border-white transition-colors"
                  />
                </div>
              </div>
              
              {/* Percentage Pills (Airbnb rounded-full) */}
              <div className="grid grid-cols-4 gap-1.5">
                {[25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => handlePercentageClick(pct)}
                    disabled={disabled}
                    className="py-1.5 text-xs font-bold bg-[#f7f7f7] dark:bg-slate-800 hover:bg-[#222222] hover:text-white dark:hover:bg-white dark:hover:text-[#222222] rounded-full border border-[#dddddd] dark:border-slate-700 disabled:opacity-40 transition-all text-[#222222] dark:text-white active:scale-95"
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-[#dddddd] dark:border-slate-800" />

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#ff385c] mb-3 block">{t.rotate}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setRotation((rotation - 90 + 360) % 360)}
                  disabled={disabled}
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#f7f7f7] dark:bg-slate-800 hover:bg-[#222222] hover:text-white dark:hover:bg-white dark:hover:text-[#222222] border border-[#dddddd] dark:border-slate-700 rounded-full disabled:opacity-40 transition-all text-xs font-bold text-[#222222] dark:text-white active:scale-95"
                >
                  <RotateCcw size={14} /> −90°
                </button>
                <button
                  onClick={() => setRotation((rotation + 90) % 360)}
                  disabled={disabled}
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#f7f7f7] dark:bg-slate-800 hover:bg-[#222222] hover:text-white dark:hover:bg-white dark:hover:text-[#222222] border border-[#dddddd] dark:border-slate-700 rounded-full disabled:opacity-40 transition-all text-xs font-bold text-[#222222] dark:text-white active:scale-95"
                >
                  +90° <RotateCw size={14} />
                </button>
              </div>
            </div>

            <hr className="border-[#dddddd] dark:border-slate-800" />

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#ff385c] mb-2 block">{t.outputFormat}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'JPG', value: 'image/jpeg' as ImageFormat },
                  { label: 'PNG', value: 'image/png' as ImageFormat },
                  { label: 'WEBP', value: 'image/webp' as ImageFormat },
                ].map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setFormat(f.value)}
                    disabled={disabled}
                    className={`py-2 text-xs font-bold rounded-full border transition-all disabled:opacity-40 active:scale-95 ${
                      format === f.value
                        ? 'border-[#ff385c] bg-[#ff385c] text-white shadow-sm'
                        : 'border-[#dddddd] dark:border-slate-700 bg-[#f7f7f7] dark:bg-slate-800 text-[#222222] dark:text-white hover:border-[#222222]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-[#dddddd] dark:border-slate-800" />

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#ff385c]">{t.quality}</label>
                <span className="text-xs font-bold text-[#ff385c]">{quality}%</span>
              </div>
              <input
                type="range" min="1" max="100" value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                disabled={disabled || format === 'image/png'}
                className="w-full accent-[#ff385c] disabled:opacity-40 cursor-pointer"
              />
            </div>

            <hr className="border-[#dddddd] dark:border-slate-800" />

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#ff385c] mb-3 block">{t.bgColor}</label>
              <div className="flex gap-2.5 flex-wrap">
                {['transparent', '#ffffff', '#000000', '#ff385c', '#6366f1', '#f59e0b', '#10b981'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setBackgroundColor(color)}
                    disabled={disabled}
                    title={color === 'transparent' ? t.transparent : color}
                    className={`w-8 h-8 rounded-full border-2 disabled:opacity-40 transition-all ${
                      backgroundColor === color ? 'border-[#ff385c] scale-110 shadow-sm' : 'border-[#dddddd] dark:border-slate-700 hover:scale-105'
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
                <Type size={32} className="mx-auto text-[#6a6a6a] opacity-50 mb-3" />
                <p className="text-sm text-[#6a6a6a]">{t.uploadImageFirst}</p>
              </div>
            ) : (
              <>
                <button
                  onClick={addTextOverlay}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-full text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <Plus size={16} /> {t.addTextOverlay}
                </button>

                {(textOverlays || []).length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-xs text-[#6a6a6a]">{t.noTextOverlays}</p>
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
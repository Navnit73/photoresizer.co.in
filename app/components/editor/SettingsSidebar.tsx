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

function TextOverlayItem({ overlay, onUpdate, onRemove, isSelected, onSelect }: {
  overlay: TextOverlay;
  onUpdate: (updates: Partial<TextOverlay>) => void;
  onRemove: () => void;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div className={`rounded-xl border transition-all duration-200 ${isSelected ? 'border-accent-main bg-accent-muted shadow-sm' : 'border-border-subtle bg-bg-card hover:border-accent-main/50'}`}>
      <div
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(); }}
        className="w-full flex items-center justify-between px-3 py-2.5 text-left cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-main rounded-t-xl"
      >
        <div className="flex items-center gap-2 min-w-0">
          <Type size={13} className={isSelected ? 'text-accent-main' : 'text-text-muted'} />
          <span className="text-xs font-medium text-text-main truncate max-w-[120px]">
            {overlay.text || 'Empty text'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="p-1 rounded-md hover:bg-red-100 dark:hover:bg-red-900/30 text-text-muted hover:text-red-500 transition-colors"
          >
            <Trash2 size={12} />
          </button>
          {isSelected ? <ChevronUp size={13} className="text-text-muted" /> : <ChevronDown size={13} className="text-text-muted" />}
        </div>
      </div>

      {isSelected && (
        <div className="px-3 pb-3 space-y-3 border-t border-accent-main/20 pt-3">
          <div>
            <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1 block">Text Content</label>
            <textarea
              value={overlay.text}
              onChange={(e) => onUpdate({ text: e.target.value })}
              rows={2}
              className="w-full bg-bg-input border border-border-subtle rounded-lg px-2.5 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-accent-main text-text-main transition-shadow"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1 block">Font</label>
              <select
                value={overlay.fontFamily}
                onChange={(e) => onUpdate({ fontFamily: e.target.value })}
                className="w-full bg-bg-input border border-border-subtle rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-main text-text-main transition-shadow"
              >
                {FONTS.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1 block">Color</label>
              <div className="flex gap-1.5">
                <input
                  type="color"
                  value={overlay.color}
                  onChange={(e) => onUpdate({ color: e.target.value })}
                  className="w-8 h-8 rounded-md border border-border-subtle cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={overlay.color}
                  onChange={(e) => onUpdate({ color: e.target.value })}
                  className="flex-1 min-w-0 bg-bg-input border border-border-subtle rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-main text-text-main transition-shadow"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Size</label>
              <span className="text-[10px] font-bold text-text-main">{overlay.fontSize}px</span>
            </div>
            <input
              type="range" min="8" max="200" value={overlay.fontSize}
              onChange={(e) => onUpdate({ fontSize: Number(e.target.value) })}
              className="w-full accent-accent-main"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Opacity</label>
              <span className="text-[10px] font-bold text-text-main">{overlay.opacity}%</span>
            </div>
            <input
              type="range" min="10" max="100" value={overlay.opacity}
              onChange={(e) => onUpdate({ opacity: Number(e.target.value) })}
              className="w-full accent-accent-main"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Rotation</label>
              <span className="text-[10px] font-bold text-text-main">{overlay.rotation}°</span>
            </div>
            <input
              type="range" min="-180" max="180" value={overlay.rotation}
              onChange={(e) => onUpdate({ rotation: Number(e.target.value) })}
              className="w-full accent-accent-main"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1 block">Position X</label>
              <input
                type="number" min="0" max="100" value={Math.round(overlay.x)}
                onChange={(e) => onUpdate({ x: Number(e.target.value) })}
                className="w-full bg-bg-input border border-border-subtle rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-main text-text-main transition-shadow"
              />
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1 block">Position Y</label>
              <input
                type="number" min="0" max="100" value={Math.round(overlay.y)}
                onChange={(e) => onUpdate({ y: Number(e.target.value) })}
                className="w-full bg-bg-input border border-border-subtle rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-main text-text-main transition-shadow"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1 block">Weight</label>
              <div className="flex rounded-lg overflow-hidden border border-border-subtle">
                {(['normal', 'bold'] as const).map((w) => (
                  <button
                    key={w}
                    onClick={() => onUpdate({ fontWeight: w })}
                    className={`flex-1 py-1.5 text-[10px] font-semibold capitalize transition-colors ${overlay.fontWeight === w ? 'bg-accent-main text-white' : 'bg-bg-card text-text-muted hover:bg-bg-input'}`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1 block">Align</label>
              <div className="flex rounded-lg overflow-hidden border border-border-subtle">
                {(['left', 'center', 'right'] as const).map((a) => (
                  <button
                    key={a}
                    onClick={() => onUpdate({ align: a })}
                    className={`flex-1 py-1.5 text-[10px] font-semibold capitalize transition-colors ${overlay.align === a ? 'bg-accent-main text-white' : 'bg-bg-card text-text-muted hover:bg-bg-input'}`}
                  >
                    {a[0].toUpperCase()}
                  </button>
                ))}
              </div>
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
    { id: 'export', label: 'Export', icon: <SlidersHorizontal size={13} /> },
    { id: 'text', label: 'Text', icon: <Type size={13} /> },
  ] as const;

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col bg-bg-card/80 backdrop-blur-md shadow-sm border border-border-subtle rounded-xl overflow-hidden transition-colors duration-300">
      {/* Tab bar */}
      <div className="flex border-b border-border-subtle">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold transition-colors border-b-2 ${
              activeSection === tab.id
                ? 'border-accent-main text-accent-main bg-accent-muted'
                : 'border-transparent text-text-muted hover:text-text-main hover:bg-bg-input'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* EXPORT */}
        {activeSection === 'export' && (
          <>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-3 block">{t.outputSize}</label>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-xs text-text-muted mb-1 block">{t.widthPx}</label>
                  <input
                    type="number" value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    disabled={disabled}
                    className="w-full bg-bg-input border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-main disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-accent-main transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-muted mb-1 block">{t.heightPx}</label>
                  <input
                    type="number" value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    disabled={disabled}
                    className="w-full bg-bg-input border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-main disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-accent-main transition-shadow"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => handlePercentageClick(pct)}
                    disabled={disabled}
                    className="py-2 text-xs font-semibold bg-bg-input hover:bg-border-subtle rounded-lg disabled:opacity-40 transition-colors text-text-main"
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-border-subtle" />

            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-3 block">{t.rotate}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setRotation((rotation - 90 + 360) % 360)}
                  disabled={disabled}
                  className="flex items-center justify-center gap-2 py-2.5 bg-bg-input hover:bg-border-subtle border border-border-subtle rounded-lg disabled:opacity-40 transition-colors text-xs font-medium text-text-main"
                >
                  <RotateCcw size={14} /> −90°
                </button>
                <button
                  onClick={() => setRotation((rotation + 90) % 360)}
                  disabled={disabled}
                  className="flex items-center justify-center gap-2 py-2.5 bg-bg-input hover:bg-border-subtle border border-border-subtle rounded-lg disabled:opacity-40 transition-colors text-xs font-medium text-text-main"
                >
                  +90° <RotateCw size={14} />
                </button>
              </div>
            </div>
            <hr className="border-border-subtle my-5" />
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-2 block">{t.outputFormat}</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: 'JPG', value: 'image/jpeg' as ImageFormat },
                  { label: 'PNG', value: 'image/png' as ImageFormat },
                  { label: 'WEBP', value: 'image/webp' as ImageFormat },
                ].map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setFormat(f.value)}
                    disabled={disabled}
                    className={`py-2.5 text-xs font-bold rounded-lg border-2 transition-colors disabled:opacity-40 ${
                      format === f.value
                        ? 'border-accent-main bg-accent-muted text-accent-main'
                        : 'border-border-subtle text-text-muted hover:border-accent-main/50 hover:text-text-main'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              {format === 'image/png' && (
                <p className="text-[10px] text-text-muted mt-2">PNG is lossless — quality setting is ignored.</p>
              )}
            </div>

            <hr className="border-border-subtle" />

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">{t.quality}</label>
                <span className="text-xs font-bold text-accent-main">{quality}%</span>
              </div>
              <input
                type="range" min="1" max="100" value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                disabled={disabled || format === 'image/png'}
                className="w-full accent-accent-main disabled:opacity-40"
              />
              <div className="flex justify-between text-[10px] text-text-muted mt-1">
                <span>{t.smallerFile}</span>
                <span>{t.bestQuality}</span>
              </div>
            </div>

            <hr className="border-border-subtle" />

            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-3 block">{t.bgColor}</label>
              <div className="flex gap-2 flex-wrap">
                {['transparent', '#ffffff', '#000000', '#ef4444', '#6366f1', '#f59e0b', '#10b981'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setBackgroundColor(color)}
                    disabled={disabled}
                    title={color === 'transparent' ? 'Transparent' : color}
                    className={`w-8 h-8 rounded-full border-2 disabled:opacity-40 transition-all ${
                      backgroundColor === color ? 'border-accent-main scale-110 shadow-md' : 'border-border-subtle hover:scale-105'
                    }`}
                    style={{
                      backgroundImage: color === 'transparent'
                        ? 'linear-gradient(45deg, #d4d4d8 25%, transparent 25%), linear-gradient(-45deg, #d4d4d8 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d4d4d8 75%), linear-gradient(-45deg, transparent 75%, #d4d4d8 75%)'
                        : 'none',
                      backgroundSize: color === 'transparent' ? '8px 8px' : 'auto',
                      backgroundPosition: color === 'transparent' ? '0 0, 0 4px, 4px -4px, -4px 0' : 'auto',
                      backgroundColor: color === 'transparent' ? '#ffffff' : color,
                    }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-text-muted mt-2">{t.bgColorDesc}</p>
            </div>
          </>
        )}

        {/* TEXT OVERLAYS */}
        {activeSection === 'text' && (
          <>
            {!imageFile ? (
              <div className="text-center py-8">
                <Type size={32} className="mx-auto text-text-muted opacity-50 mb-3" />
                <p className="text-sm text-text-muted">{t.uploadImageFirst}</p>
              </div>
            ) : (
              <>
                <button
                  onClick={addTextOverlay}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-accent-main hover:bg-accent-hover text-white rounded-xl text-sm font-semibold transition-all shadow-sm shadow-accent-main/20 active:scale-95"
                >
                  <Plus size={16} /> Add Text Layer
                </button>

                {(textOverlays || []).length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-xs text-text-muted">No text layers yet. Add one above.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {(textOverlays || []).map((overlay) => (
                      <TextOverlayItem
                        key={overlay.id}
                        overlay={overlay}
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
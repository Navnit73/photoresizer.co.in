'use client';

import React from 'react';
import { useBgRemoval } from './BgRemovalContext';
import { Palette, FileImage, RotateCcw, Plus } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from '@/app/hooks/useTranslation';

const COLORS = [
  { label: 'Clear', value: 'transparent' },
  { label: 'White', value: '#ffffff' },
  { label: 'Black', value: '#000000' },
  { label: 'Slate', value: '#f1f5f9' },
  { label: 'Indigo', value: '#6366f1' },
  { label: 'Rose', value: '#f43f5e' },
  { label: 'Amber', value: '#f59e0b' },
  { label: 'Emerald', value: '#10b981' },
];

const CheckerSwatch = () => (
  <div className="w-5 h-5 rounded-md border border-slate-300 dark:border-slate-600 flex-shrink-0 overflow-hidden" style={{
    backgroundImage: 'linear-gradient(45deg, #cbd5e1 25%, transparent 25%), linear-gradient(-45deg, #cbd5e1 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #cbd5e1 75%), linear-gradient(-45deg, transparent 75%, #cbd5e1 75%)',
    backgroundSize: '8px 8px',
    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
    backgroundColor: '#f8fafc',
  }} />
);

export default function BgRemoverSidebar() {
  const { backgroundColor, setBackgroundColor, exportFormat, setExportFormat, clearAll, addJobs } = useBgRemoval();
  const { t } = useTranslation();

  const { getRootProps: getAddRootProps, getInputProps: getAddInputProps } = useDropzone({
    onDrop: (files) => { if (files?.length) addJobs(files); },
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.webp'] },
    multiple: true,
    noClick: false,
  });

  const isCustomColor = !COLORS.find(c => c.value === backgroundColor);

  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 bg-white dark:bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 flex flex-col h-auto lg:h-full lg:overflow-hidden">
      <div className="overflow-y-auto flex-1">
        <div className="p-4 sm:p-5 flex flex-col gap-6">

          {/* Add More Images */}
          <div {...getAddRootProps()} className="cursor-pointer">
            <input {...getAddInputProps()} />
            <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-dashed border-lime-200 dark:border-lime-800 text-lime-600 dark:text-lime-400 text-sm font-semibold hover:bg-lime-50 dark:hover:bg-lime-900/20 hover:border-lime-400 transition-all duration-150 active:scale-[0.98]">
              <Plus size={15} strokeWidth={2.5} />
              {t.addMoreImages}
            </button>
          </div>

          {/* Background Section */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Palette size={14} className="text-slate-400 dark:text-slate-500" />
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t.background}</h3>
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-3">
              {COLORS.map(c => (
                <button
                  key={c.value}
                  onClick={() => setBackgroundColor(c.value)}
                  title={c.label}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-150 border ${
                    backgroundColor === c.value
                      ? 'bg-lime-100 dark:bg-lime-900/40 border-transparent'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-900'
                  }`}
                >
                  {c.value === 'transparent' ? (
                    <CheckerSwatch />
                  ) : (
                    <div className="w-5 h-5 rounded-md border border-black/10 dark:border-white/10 flex-shrink-0" style={{ backgroundColor: c.value }} />
                  )}
                  <span className={`text-[9px] font-bold leading-none ${backgroundColor === c.value ? 'text-lime-600 dark:text-lime-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    {c.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom color row */}
            <label className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 border cursor-pointer ${
              isCustomColor
                ? 'bg-lime-100 dark:bg-lime-900/40 border-transparent'
                : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-900'
            }`}>
              <div className="relative w-5 h-5 flex-shrink-0">
                <div className="w-5 h-5 rounded-md border border-black/10" style={{ backgroundColor: isCustomColor ? backgroundColor : '#84cc16' }} />
                <input
                  type="color"
                  value={isCustomColor ? backgroundColor : '#84cc16'}
                  onChange={e => setBackgroundColor(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <span className={`text-xs font-semibold flex-1 ${isCustomColor ? 'text-lime-700 dark:text-lime-300' : 'text-slate-600 dark:text-slate-300'}`}>
                {isCustomColor ? backgroundColor.toUpperCase() : t.customColor}
              </span>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium">{t.pick}</span>
            </label>
          </section>

          {/* Divider */}
          <div className="h-px bg-slate-100 dark:bg-slate-800" />

          {/* Format Section */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <FileImage size={14} className="text-slate-400 dark:text-slate-500" />
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t.exportFormatSide}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'image/png' as const, label: 'PNG', desc: t.bestQuality, note: t.withTransparency },
                { value: 'image/webp' as const, label: 'WebP', desc: t.smallerSize, note: t.modernFormat },
              ].map(fmt => (
                <button
                  key={fmt.value}
                  onClick={() => setExportFormat(fmt.value)}
                  className={`flex flex-col items-start px-3 py-3 rounded-xl transition-all duration-150 text-left border ${
                    exportFormat === fmt.value
                      ? 'bg-lime-100 dark:bg-lime-900/40 border-transparent'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-900'
                  }`}
                >
                  <span className={`text-sm font-black tracking-tight ${exportFormat === fmt.value ? 'text-lime-700 dark:text-lime-300' : 'text-slate-700 dark:text-slate-200'}`}>
                    {fmt.label}
                  </span>
                  <span className={`text-[9px] font-semibold mt-0.5 ${exportFormat === fmt.value ? 'text-lime-500 dark:text-lime-400' : 'text-slate-400 dark:text-slate-500'}`}>
                    {fmt.desc}
                  </span>
                  <span className="text-[8px] text-slate-400 dark:text-slate-600 mt-0.5">{fmt.note}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-slate-100 dark:bg-slate-800" />

          {/* Reset */}
          <button
            onClick={clearAll}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold text-sm hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 hover:border-red-200 dark:hover:border-red-800 transition-all duration-150 active:scale-[0.98]"
          >
            <RotateCcw size={14} />
            {t.startOver}
          </button>

        </div>
      </div>
    </aside>
  );
}
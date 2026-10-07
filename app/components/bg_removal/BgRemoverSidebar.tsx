'use client';

import React from 'react';
import { useBgRemoval } from './BgRemovalContext';
import { Palette, FileImage, RotateCcw, Plus } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from '@/app/hooks/useTranslation';
import { openFilePicker } from '@/app/utils/filePicker';

const COLORS = [
  { label: 'Clear', value: 'transparent' },
  { label: 'White', value: '#ffffff' },
  { label: 'Black', value: '#000000' },
  { label: 'Slate', value: '#f4f4f5' },
  { label: 'Green', value: '#16a34a' },
  { label: 'Blue', value: '#2563eb' },
  { label: 'Amber', value: '#f59e0b' },
  { label: 'Red', value: '#dc2626' },
];

const CheckerSwatch = () => (
  <div className="w-5 h-5 rounded-md border border-[#E4E4E7] flex-shrink-0 overflow-hidden" style={{
    backgroundImage: 'linear-gradient(45deg, #e4e4e7 25%, transparent 25%), linear-gradient(-45deg, #e4e4e7 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e4e4e7 75%), linear-gradient(-45deg, transparent 75%, #e4e4e7 75%)',
    backgroundSize: '8px 8px',
    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
    backgroundColor: '#ffffff',
  }} />
);

export default function BgRemoverSidebar() {
  const { backgroundColor, setBackgroundColor, exportFormat, setExportFormat, clearAll, addJobs } = useBgRemoval();
  const { t } = useTranslation();

  const { getRootProps: getAddRootProps, getInputProps: getAddInputProps, open: openAdd } = useDropzone({
    onDrop: (files) => { if (files?.length) addJobs(files); },
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.webp'] },
    multiple: true,
    // Clicks open the dialog via openFilePicker (keeps INP low).
    noClick: true,
  });

  const isCustomColor = !COLORS.find(c => c.value === backgroundColor);

  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 bg-[#FFFFFF] border-t lg:border-t-0 lg:border-l border-[#E4E4E7] flex flex-col h-auto lg:h-full lg:overflow-hidden">
      <div className="overflow-y-auto flex-1">
        <div className="p-4 sm:p-5 flex flex-col gap-5">

          {/* Add More Images */}
          <div {...getAddRootProps({ onClick: () => openFilePicker(openAdd) })} className="cursor-pointer">
            <input {...getAddInputProps()} />
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-dashed border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] text-xs font-semibold hover:border-[#16A34A] hover:bg-[#DCFCE7] transition-colors"
            >
              <Plus size={15} />
              <span>Add More Photos</span>
            </button>
          </div>

          {/* Background Selection */}
          <section>
            <div className="flex items-center gap-1.5 mb-2.5">
              <Palette size={13} className="text-[#71717A]" />
              <h3 className="text-xs font-semibold text-[#18181B]">Background Replacement</h3>
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-2.5">
              {COLORS.map(c => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setBackgroundColor(c.value)}
                  title={c.label}
                  className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors border ${
                    backgroundColor === c.value
                      ? 'bg-[#F0FDF4] border-[#16A34A]'
                      : 'border-[#E4E4E7] hover:bg-[#FAFAFA] bg-[#FFFFFF]'
                  }`}
                >
                  {c.value === 'transparent' ? (
                    <CheckerSwatch />
                  ) : (
                    <div className="w-5 h-5 rounded-md border border-black/10 flex-shrink-0" style={{ backgroundColor: c.value }} />
                  )}
                  <span className={`text-[9px] font-semibold ${backgroundColor === c.value ? 'text-[#15803D]' : 'text-[#71717A]'}`}>
                    {c.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom color selector */}
            <label className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors border cursor-pointer ${
              isCustomColor
                ? 'bg-[#F0FDF4] border-[#16A34A]'
                : 'border-[#E4E4E7] hover:bg-[#FAFAFA] bg-[#FFFFFF]'
            }`}>
              <div className="relative w-5 h-5 flex-shrink-0">
                <div className="w-5 h-5 rounded-md border border-black/10" style={{ backgroundColor: isCustomColor ? backgroundColor : '#16a34a' }} />
                <input
                  type="color"
                  value={isCustomColor ? backgroundColor : '#16a34a'}
                  onChange={e => setBackgroundColor(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <span className={`text-xs font-medium flex-1 ${isCustomColor ? 'text-[#15803D]' : 'text-[#52525B]'}`}>
                {isCustomColor ? backgroundColor.toUpperCase() : 'Custom Color'}
              </span>
              <span className="text-[10px] text-[#71717A] font-medium">Pick</span>
            </label>
          </section>

          {/* Divider */}
          <div className="h-px bg-[#F4F4F5]" />

          {/* Format Selection */}
          <section>
            <div className="flex items-center gap-1.5 mb-2.5">
              <FileImage size={13} className="text-[#71717A]" />
              <h3 className="text-xs font-semibold text-[#18181B]">Export Format</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'image/png' as const, label: 'PNG', desc: 'Preserves transparency' },
                { value: 'image/webp' as const, label: 'WebP', desc: 'Smaller file size' },
              ].map(fmt => (
                <button
                  key={fmt.value}
                  type="button"
                  onClick={() => setExportFormat(fmt.value)}
                  className={`flex flex-col items-start p-3 rounded-xl transition-colors text-left border ${
                    exportFormat === fmt.value
                      ? 'bg-[#F0FDF4] border-[#16A34A]'
                      : 'border-[#E4E4E7] hover:bg-[#FAFAFA] bg-[#FFFFFF]'
                  }`}
                >
                  <span className={`text-xs font-bold ${exportFormat === fmt.value ? 'text-[#15803D]' : 'text-[#18181B]'}`}>
                    {fmt.label}
                  </span>
                  <span className="text-[10px] text-[#71717A] mt-0.5">{fmt.desc}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-[#F4F4F5]" />

          {/* Reset */}
          <button
            type="button"
            onClick={clearAll}
            className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-xl border border-[#E4E4E7] text-[#52525B] font-medium text-xs hover:bg-[#FAFAFA] hover:text-[#DC2626] transition-colors"
          >
            <RotateCcw size={13} />
            <span>Start Over</span>
          </button>

        </div>
      </div>
    </aside>
  );
}
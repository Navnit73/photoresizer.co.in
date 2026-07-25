'use client';

import React, { useEffect, useState } from 'react';
import { useEditor } from './EditorContext';
import { RefreshCcw, Sun, Moon, Undo2, Redo2 } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function EditorHeader() {
  const { reset, imageFile, undo, redo, canUndo, canRedo, fileName, setFileName } = useEditor();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-between w-full px-4 sm:px-6 h-14 transition-colors duration-300 font-['Airbnb_Cereal_VF',Circular,sans-serif]">
      
      {/* LEFT: Actions */}
      <div className="flex items-center gap-2 sm:gap-3 w-1/3">
        {imageFile && (
          <>
            <div className="flex items-center bg-[#f7f7f7] dark:bg-slate-800 border border-[#dddddd] dark:border-slate-700 rounded-full p-1 shadow-sm">
              <button
                onClick={undo}
                disabled={!canUndo}
                className="p-1.5 rounded-full text-[#6a6a6a] dark:text-slate-300 hover:text-[#222222] dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                title="Undo (Ctrl+Z)"
              >
                <Undo2 size={15} />
              </button>
              <div className="w-[1px] h-3.5 bg-[#dddddd] dark:bg-slate-600 mx-1" />
              <button
                onClick={redo}
                disabled={!canRedo}
                className="p-1.5 rounded-full text-[#6a6a6a] dark:text-slate-300 hover:text-[#222222] dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                title="Redo (Ctrl+Y)"
              >
                <Redo2 size={15} />
              </button>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#6a6a6a] dark:text-slate-400 hover:text-[#ff385c] transition-all px-3 py-1.5 rounded-full hover:bg-[#ff385c]/10"
            >
              <RefreshCcw size={13} />
              <span className="hidden sm:inline">Resetar</span>
            </button>
          </>
        )}
      </div>

      {/* CENTER: File Name */}
      <div className="flex justify-center w-1/3">
        {imageFile && (
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="bg-transparent hover:bg-[#f7f7f7] dark:hover:bg-slate-800 focus:bg-[#f7f7f7] dark:focus:bg-slate-800 border border-transparent focus:border-[#dddddd] dark:focus:border-slate-700 text-sm font-bold text-[#222222] dark:text-white placeholder-[#6a6a6a] dark:placeholder-slate-500 text-center rounded-full px-4 py-1.5 focus:outline-none transition-all w-28 sm:w-48 xl:w-64 truncate"
            placeholder="Nome do Arquivo"
          />
        )}
      </div>

      {/* RIGHT: Theme Toggle */}
      <div className="flex items-center justify-end w-1/3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full border border-[#dddddd] dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-[#f7f7f7] dark:hover:bg-slate-700 text-[#222222] dark:text-white transition-all active:scale-95 shadow-sm"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        )}
      </div>
    </header>
  );
}
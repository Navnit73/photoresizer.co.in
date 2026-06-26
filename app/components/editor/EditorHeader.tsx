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
    <header className="flex items-center justify-between w-full px-4 sm:px-6 h-14 transition-colors duration-300">
      
      {/* LEFT: Actions */}
      <div className="flex items-center gap-2 sm:gap-3 w-1/3">
        {imageFile && (
          <>
            <div className="flex items-center bg-slate-100/80 dark:bg-slate-800/80 rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-1 shadow-sm">
              <button
                onClick={undo}
                disabled={!canUndo}
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                title="Undo (Ctrl+Z)"
              >
                <Undo2 size={15} />
              </button>
              <div className="w-[1px] h-3.5 bg-slate-300 dark:bg-slate-700 mx-1" />
              <button
                onClick={redo}
                disabled={!canRedo}
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                title="Redo (Ctrl+Y)"
              >
                <Redo2 size={15} />
              </button>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all px-3 py-2 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            >
              <RefreshCcw size={13} />
              <span className="hidden sm:inline">Reset</span>
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
            className="bg-transparent hover:bg-slate-100/50 dark:hover:bg-slate-800/50 focus:bg-slate-100 dark:focus:bg-slate-800 border border-transparent focus:border-slate-300 dark:focus:border-slate-600 text-sm font-bold text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-center rounded-xl px-3 py-1.5 focus:outline-none transition-all w-24 sm:w-48 xl:w-64 truncate"
            placeholder="Untitled Image"
          />
        )}
      </div>

      {/* RIGHT: Theme Toggle */}
      <div className="flex items-center justify-end w-1/3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all active:scale-95 shadow-sm"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        )}
      </div>
    </header>
  );
}
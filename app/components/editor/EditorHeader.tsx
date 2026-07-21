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
            <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1">
              <button
                onClick={undo}
                disabled={!canUndo}
                className="p-1.5 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                title="Undo (Ctrl+Z)"
              >
                <Undo2 size={15} />
              </button>
              <div className="w-[1px] h-3.5 bg-neutral-300 dark:bg-neutral-600 mx-1" />
              <button
                onClick={redo}
                disabled={!canRedo}
                className="p-1.5 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                title="Redo (Ctrl+Y)"
              >
                <Redo2 size={15} />
              </button>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all px-3 py-2 rounded-lg"
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
            className="bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 border border-transparent focus:border-neutral-300 dark:focus:border-neutral-600 text-sm font-bold text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 text-center rounded-lg px-3 py-1.5 focus:outline-none transition-all w-24 sm:w-48 xl:w-64 truncate"
            placeholder="Untitled Image"
          />
        )}
      </div>

      {/* RIGHT: Theme Toggle */}
      <div className="flex items-center justify-end w-1/3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all active:scale-95"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        )}
      </div>
    </header>
  );
}
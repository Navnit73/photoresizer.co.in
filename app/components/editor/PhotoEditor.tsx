'use client';

import React from 'react';
import { EditorProvider, useEditor } from './EditorContext';
import EditorHeader from './EditorHeader';
import SettingsSidebar from './SettingsSidebar';
import OriginalWorkspace from './OriginalWorkspace';
import DownloadPanel from './DownloadPanel';

function EditorContent() {
  const { imageFile } = useEditor();

  if (!imageFile) {
    return (
      <div className="w-full flex justify-center py-10 px-4 sm:px-0">
        <div className="w-full max-w-3xl min-h-[400px] sm:h-[400px] flex flex-col">
          <OriginalWorkspace />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-white dark:bg-neutral-950 min-h-[100dvh] sm:min-h-[600px] sm:h-[calc(100vh-64px)]">
      
      {/* Integrated Header */}
      <div className="flex-shrink-0 z-10 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 sm:relative bg-white dark:bg-neutral-950">
        <EditorHeader />
      </div>

      {/* Editor Body */}
      <div className="flex flex-col lg:flex-row flex-1 p-2 sm:p-4 gap-2 sm:gap-4 overflow-y-auto lg:overflow-hidden relative z-0">
        
        {/* Left Column: Settings Sidebar */}
        <div className="w-full lg:w-[300px] flex-shrink-0 flex flex-col order-3 lg:order-1 h-auto lg:h-full lg:overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
          <SettingsSidebar />
        </div>

        {/* Center/Right Column: Canvas & Preview split */}
        <div className="flex-none lg:flex-1 flex flex-col gap-2 sm:gap-4 overflow-visible lg:overflow-hidden order-1 lg:order-2">
           
           {/* Canvas */}
           <div className="w-full lg:flex-1 min-h-[60vh] sm:min-h-[500px] lg:min-h-0 lg:h-full flex flex-col overflow-hidden relative border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900/50">
             <OriginalWorkspace />
           </div>

           <DownloadPanel />
           
        </div>

      </div>
    </div>
  );
}

export default function PhotoEditor() {
  return (
    <EditorProvider>
      <EditorContent />
    </EditorProvider>
  );
}
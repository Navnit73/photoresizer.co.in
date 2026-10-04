"use client";

import React from "react";
import { EditorProvider, useEditor } from "./EditorContext";
import SettingsSidebar from "./SettingsSidebar";
import OriginalWorkspace from "./OriginalWorkspace";
import DownloadPanel from "./DownloadPanel";

function EditorContent() {
  const { imageFile } = useEditor();

  if (!imageFile) {
    return (
      <div className="w-full flex justify-center py-4">
        <div className="w-full max-w-2xl min-h-[380px] flex flex-col items-center justify-center border border-[#E4E4E7] rounded-xl bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-4 sm:p-6 transition-colors">
          <OriginalWorkspace />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Editor Body */}
      <div className="flex flex-col lg:flex-row p-1 sm:p-3 gap-4 overflow-y-auto lg:overflow-hidden relative z-0">
        
        {/* Left Column: Settings Sidebar */}
        <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col order-3 lg:order-1 h-auto lg:h-full lg:overflow-hidden border border-[#E4E4E7] rounded-xl bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <SettingsSidebar />
        </div>

        {/* Center/Right Column: Canvas & Download panel */}
        <div className="flex-none lg:flex-1 flex flex-col gap-4 overflow-visible lg:overflow-hidden order-1 lg:order-2">
          {/* Canvas Workspace */}
          <div className="w-full lg:flex-1 min-h-[60vh] sm:min-h-[500px] lg:min-h-0 lg:h-full flex flex-col overflow-hidden relative border border-[#E4E4E7] rounded-xl bg-[#FAFAFA]">
            <OriginalWorkspace />
          </div>
          
          {/* Download & Export Panel */}
          <DownloadPanel />
        </div>

      </div>
    </div>
  );
}

export default function PhotoEditor({ initialFile }: { initialFile?: File | null }) {
  return (
    <EditorProvider initialFile={initialFile}>
      <EditorContent />
    </EditorProvider>
  );
}

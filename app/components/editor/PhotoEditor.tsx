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
        <div className="w-full max-w-2xl min-h-[380px] flex flex-col items-center justify-center border border-[#E4E4E7] rounded-2xl bg-[#FFFFFF] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 sm:p-6 transition-colors">
          <OriginalWorkspace />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pb-16 lg:pb-0">
      {/* Editor Main Grid */}
      <div className="flex flex-col lg:flex-row p-1 sm:p-2 gap-4 relative z-0">
        
        {/* Left Column (Desktop) / Section 2 (Mobile): Settings Sidebar */}
        <div className="w-full lg:w-[340px] flex-shrink-0 flex flex-col order-2 lg:order-1 h-auto lg:h-[720px] border border-[#E4E4E7] rounded-2xl bg-[#FFFFFF] shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
          <SettingsSidebar />
        </div>

        {/* Center/Right Column: Canvas & Download panel */}
        <div className="flex-1 flex flex-col gap-4 order-1 lg:order-2 min-w-0">
          {/* Canvas Workspace */}
          <div className="w-full min-h-[42vh] sm:min-h-[460px] lg:h-[500px] flex flex-col overflow-hidden relative border border-[#E4E4E7] rounded-2xl bg-[#FAFAFA] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <OriginalWorkspace />
          </div>
          
          {/* Download & Compression Panel */}
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

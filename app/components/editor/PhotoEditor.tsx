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
    <div className="w-full pb-20 lg:pb-0">
      {/* 
        Responsive Layout System:
        - xl & 2xl (Wide Desktops & Laptops): 3-column layout
          [Left: Settings Sidebar] [Center: Canvas Workspace] [Right: Compression & Download]
        - lg (Medium Laptops & Tablets): 2-column layout
          [Left: Settings Sidebar] [Right: Canvas Workspace + Download Panel stacked]
        - Mobile (< lg): Stacked Mobile layout
          [Top: Canvas Workspace] [Middle: Settings Sidebar] [Bottom: Compression Panel + Sticky Quick Download Bar]
      */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3 lg:gap-4 items-start">
        
        {/* Settings Sidebar */}
        <div className="w-full order-2 lg:order-1 lg:col-span-5 xl:col-span-3 2xl:col-span-3 flex flex-col h-auto lg:h-[calc(100vh-140px)] lg:min-h-[580px] lg:max-h-[820px] border border-[#E4E4E7] rounded-2xl bg-[#FFFFFF] shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
          <SettingsSidebar />
        </div>

        {/* Center Canvas Workspace */}
        <div className="w-full order-1 lg:order-2 lg:col-span-7 xl:col-span-6 2xl:col-span-6 flex flex-col h-[54vh] sm:h-[58vh] min-h-[390px] sm:min-h-[460px] max-h-[580px] lg:h-[500px] xl:h-[calc(100vh-140px)] xl:min-h-[580px] xl:max-h-[820px] overflow-hidden relative border border-[#E4E4E7] rounded-2xl bg-[#FAFAFA] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <OriginalWorkspace />
        </div>

        {/* Download & Compression Panel */}
        <div className="w-full order-3 lg:order-3 lg:col-span-7 lg:col-start-6 xl:col-start-auto xl:col-span-3 2xl:col-span-3 flex flex-col lg:h-auto xl:h-[calc(100vh-140px)] xl:min-h-[580px] xl:max-h-[820px] xl:overflow-y-auto">
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

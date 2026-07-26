"use client";

import React from "react";
import { EditorProvider, useEditor } from "./EditorContext";
import SettingsSidebar from "./SettingsSidebar";
import OriginalWorkspace from "./OriginalWorkspace";
import DownloadPanel from "./DownloadPanel";
import { AdBanner } from "@/components/AdBanner";
function EditorContent() {
  const { imageFile } = useEditor();

  if (!imageFile) {
    return (
      <div className="w-full flex justify-center py-6 px-4 sm:px-0 font-['Airbnb_Cereal_VF',Circular,sans-serif]">
        <div className="w-full max-w-3xl min-h-[380px] flex flex-col items-center justify-center border border-[#dddddd] dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900/50 shadow-sm p-2 sm:p-6 transition-colors">
          <OriginalWorkspace />
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {/* Editor Body */}
      <div className="flex flex-col lg:flex-row flex-1 p-2 sm:p-4 gap-3 sm:gap-4 overflow-y-auto lg:overflow-hidden relative z-0">
        {/* Left Column: Settings Sidebar */}
        <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col order-3 lg:order-1 h-auto lg:h-full lg:overflow-hidden border border-[#dddddd] dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
          <SettingsSidebar />
        </div>

        {/* Center/Right Column: Canvas & Preview split */}
        <div className="flex-none lg:flex-1 flex flex-col gap-3 sm:gap-4 overflow-visible lg:overflow-hidden order-1 lg:order-2">
          {/* Canvas */}
          <div className="w-full lg:flex-1 min-h-[60vh] sm:min-h-[500px] lg:min-h-0 lg:h-full flex flex-col overflow-hidden relative border border-[#dddddd] dark:border-slate-800 rounded-2xl bg-[#f7f7f7] dark:bg-slate-900/50">
            <OriginalWorkspace />
          </div>
          <AdBanner type="responsive" />
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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const PhotoEditor = dynamic(() => import("../components/editor/PhotoEditor"), { ssr: false });
const BgRemoverApp = dynamic(() => import("../components/bg_removal/BgRemoverApp"), { ssr: false });

export function HomeTools() {
  const [activeTab, setActiveTab] = useState<'editor' | 'bg_remover'>('editor');

  return (
    <>
      <header className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B]">
            Online Photo Resizer &amp; Background Remover
          </h1>
          <p className="mt-1 text-sm text-[#52525B]">
            Fast, private, and fully local photo editing in your browser.
          </p>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex p-1 bg-[#FAFAFA] rounded-xl border border-[#E4E4E7] w-full md:w-auto self-start">
          <button
            type="button"
            onClick={() => setActiveTab('editor')}
            className={`flex-1 md:w-36 py-2 px-4 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'editor'
                ? 'bg-[#16A34A] text-white shadow-sm'
                : 'text-[#52525B] hover:text-[#18181B]'
            }`}
          >
            Photo Editor
          </button>
          <Link
            href="/free-background-remover"
            className={`flex-1 text-center md:w-44 py-2 px-4 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'bg_remover'
                ? 'bg-[#16A34A] text-white shadow-sm'
                : 'text-[#52525B] hover:text-[#18181B] block'
            }`}
          >
            Bulk BG Remover
          </Link>
        </div>
      </header>

      <div className={activeTab === 'editor' ? 'block min-h-[600px]' : 'hidden'}>
        <PhotoEditor />
      </div>
      <div className={activeTab === 'bg_remover' ? 'block min-h-[600px]' : 'hidden'}>
        <BgRemoverApp />
      </div>
    </>
  );
}

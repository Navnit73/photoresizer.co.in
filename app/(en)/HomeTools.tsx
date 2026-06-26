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
          <h1 className="text-3xl font-bold tracking-tight text-text-main">
            Free Online Photo Resizer, Crop & Background Remover
          </h1>
          <p className="mt-2 text-text-muted">
            Professional, fast, and fully local photo editing right in your browser. No uploads, 100% private.
          </p>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex p-1 bg-bg-card rounded-xl border border-border-subtle shadow-sm w-full md:w-auto self-start">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex-1 md:w-36 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'editor'
                ? 'bg-accent-main text-white shadow-md'
                : 'text-text-muted hover:text-text-main hover:bg-bg-input'
            }`}
          >
            Photo Editor
          </button>
          <Link
            href="/remove-background"
            className={`flex-1 text-center md:w-44 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'bg_remover'
                ? 'bg-lime-600 dark:bg-lime-500 text-white shadow-md'
                : 'text-text-muted hover:text-text-main hover:bg-bg-input block'
            }`}
          >
            Bulk BG Remover
          </Link>
        </div>
      </header>

      <div className={activeTab === 'editor' ? 'block min-h-[600px] sm:min-h-[800px]' : 'hidden'}>
        <PhotoEditor />
      </div>
      <div className={activeTab === 'bg_remover' ? 'block min-h-[600px] sm:min-h-[800px]' : 'hidden'}>
        <BgRemoverApp />
      </div>
    </>
  );
}

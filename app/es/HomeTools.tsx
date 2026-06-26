"use client";

import React, { useState } from "react";
import Link from "next/link";
import PhotoEditor from "../components/editor/PhotoEditor";
import BgRemoverApp from "../components/bg_removal/BgRemoverApp";

const STATS = [
  { value: "100%", label: "Free", sub: "No hidden costs" },
  { value: "0%", label: "Uploads", sub: "100% in browser" },
  { value: "5+", label: "Tools", sub: "All in one" },
  { value: "∞", label: "Images", sub: "Unlimited use" },
];

export function HomeTools() {
  const [activeTab, setActiveTab] = useState<"editor" | "bg_remover">("editor");

  return (
    <>
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden mb-8 shadow-sm">
        <div className="px-4 md:px-8 pt-10 pb-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-50 dark:bg-lime-900/30 border border-lime-200 dark:border-lime-800 rounded-full text-xs font-semibold text-lime-700 dark:text-lime-400">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" />
              100% Free · No Uploads · No Registration
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Redimensionar Imágenes Online, Quitar Fondo y Editar Fotos
              </h1>
              <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                Resize images, remove backgrounds, crop photos – everything free, private, and with no installation. Your photos stay on your device.
              </p>
              <div className="mt-6 grid grid-cols-4 gap-3">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-black text-slate-900 dark:text-white">{s.value}</div>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Select Tool</p>
              <div className="flex p-1.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm w-full lg:w-auto">
                <button
                  onClick={() => setActiveTab("editor")}
                  className={`flex-1 lg:w-52 py-3 px-5 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    activeTab === "editor"
                      ? "bg-lime-600 text-white shadow-lg shadow-lime-500/25"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  Photo Editor
                </button>
                <Link
                  href={`/es/hintergrund-entfernen`}
                  className={`flex-1 text-center lg:w-52 py-3 px-5 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    activeTab === "bg_remover"
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  Remove Background
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className={activeTab === "editor" ? "block" : "hidden"}>
          <PhotoEditor />
        </div>
        <div className={activeTab === "bg_remover" ? "block" : "hidden"}>
          <BgRemoverApp />
        </div>
      </div>
    </>
  );
}

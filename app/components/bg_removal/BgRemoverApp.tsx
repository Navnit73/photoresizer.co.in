'use client';

import React from 'react';
import { BgRemovalProvider, useBgRemoval } from './BgRemovalContext';
import BgRemoverHeader from './BgRemoverHeader';
import BgRemoverWorkspace from './BgRemoverWorkspace';
import BgRemoverSidebar from './BgRemoverSidebar';

function BgRemoverLayout() {
  const { jobs } = useBgRemoval();

  return (
    <div className="w-full flex flex-col bg-white dark:bg-slate-900 rounded-none sm:rounded-2xl overflow-hidden border-0 sm:border border-slate-200 dark:border-slate-800 min-h-[100dvh] sm:min-h-[600px] sm:h-[calc(100vh-64px)] sm:max-h-[900px] transition-colors duration-200">
      <div className="flex-shrink-0 z-10 sticky top-0 sm:relative shadow-sm sm:shadow-none">
        <BgRemoverHeader />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-visible sm:overflow-y-auto lg:overflow-hidden relative z-0">
        {/* Workspace takes priority on mobile — sidebar goes below on mobile, right on desktop */}
        <BgRemoverWorkspace />
        {jobs.length > 0 && <BgRemoverSidebar />}
      </div>
    </div>
  );
}

export default function BgRemoverApp() {
  return (
    <BgRemovalProvider>
      <BgRemoverLayout />
    </BgRemovalProvider>
  );
}
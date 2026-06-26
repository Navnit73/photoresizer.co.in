'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useBgRemovalManager } from './hooks/useBgRemovalManager';

type BgRemovalContextType = ReturnType<typeof useBgRemovalManager>;

const BgRemovalContext = createContext<BgRemovalContextType | undefined>(undefined);

export const BgRemovalProvider = ({ children }: { children: ReactNode }) => {
  const manager = useBgRemovalManager();

  return (
    <BgRemovalContext.Provider value={manager}>
      {children}
    </BgRemovalContext.Provider>
  );
};

export const useBgRemoval = () => {
  const context = useContext(BgRemovalContext);
  if (!context) throw new Error('useBgRemoval must be used within BgRemovalProvider');
  return context;
};

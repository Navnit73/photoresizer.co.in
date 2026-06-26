'use client';

import React, { useEffect, useState } from 'react';
import { preload } from '@imgly/background-removal';
import { BrainCircuit, CheckCircle } from 'lucide-react';

export default function ModelPreloader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'initializing' | 'downloading' | 'ready' | 'error'>('initializing');

  useEffect(() => {
    let isMounted = true;
    
    const initModel = async () => {
      try {
        await preload({
          publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/',
          progress: (key, current, total) => {
            if (!isMounted) return;
            if (key.startsWith('fetch:')) {
              setStatus('downloading');
              setProgress(Math.round((current / total) * 100));
            }
          }
        });
        
        if (isMounted) {
          setStatus('ready');
          setProgress(100);
          
          // Hide the banner after a few seconds of being ready
          setTimeout(() => {
            if (isMounted) setStatus('initializing'); // We reuse 'initializing' as 'hidden' state
          }, 3000);
        }
      } catch (err) {
        console.error('Failed to preload AI model', err);
        if (isMounted) setStatus('error');
      }
    };

    initModel();

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === 'initializing') return null;

  return null;
}

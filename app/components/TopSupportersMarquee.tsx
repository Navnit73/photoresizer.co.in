'use client';

import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';

export default function TopSupportersMarquee() {
  return (
    <div className="bg-slate-950 border-b border-slate-800/60 py-2.5 overflow-hidden flex whitespace-nowrap relative">
      {/* Edge fade effects for a premium look */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
      <div className="flex animate-marquee min-w-max hover:[animation-play-state:paused]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center px-4">
            <div className="flex items-center text-[13px] font-medium text-slate-300">

              <div className="flex items-center text-slate-200">
                <Sparkles className="w-4 h-4 mr-2 text-brand-400" />
                <span>Available for building any type website for your business</span>
              </div>

              <span className="mx-6 text-slate-700">•</span>

              <a href="tel:+917985933286" className="flex items-center hover:text-brand-400 transition-colors">
                <Phone className="w-3.5 h-3.5 mr-2 text-slate-400" />
                <span className="tracking-wide">+91-7985933286</span>
              </a>

              <span className="mx-6 text-slate-700">•</span>

              <a href="mailto:sandeep@glyphash.com" className="flex items-center hover:text-brand-400 transition-colors">
                <Mail className="w-3.5 h-3.5 mr-2 text-slate-400" />
                <span>sandeep@glyphash.com</span>
              </a>

            </div>

            {/* Divider between repetitions */}
            <span className="mx-6 text-slate-700 font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

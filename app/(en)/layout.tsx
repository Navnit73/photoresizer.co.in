import React from 'react';
import Link from 'next/link';
import SiteHeader from './SiteHeader';

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="en-layout">
      {/* English Specific Navigation */}
      <SiteHeader />
      
      {/* Page Content */}
      <div className="min-h-screen">
        {children}
      </div>

      {/* English Specific Premium Footer */}
      <footer className="w-full bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 mt-auto">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                photoresizer
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Your ultimate suite of free, private, and secure online image editing tools. Process your photos locally in your browser without any data leaving your device.
              </p>
              
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Contact Developer</p>
                <p className="mb-1">Navnit Rai</p>
                <p className="mb-1">
                  <a href="mailto:navnitrai5389@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">navnitrai5389@gmail.com</a>
                </p>
                <p>+91 7355087072</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase tracking-wider text-xs">Popular Tools</h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><Link href="/photo-resizer" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Photo Resizer</Link></li>
                <li><Link href="/passport-photo-maker" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Passport Photo Maker</Link></li>
                <li><Link href="/compress-image" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Compress Image</Link></li>
                <li><Link href="/tools" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors font-semibold">View All 40+ Tools &rarr;</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-1">
              <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase tracking-wider text-xs">Resources</h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><Link href="/how-to-use" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">How to Use</Link></li>
                <li><Link href="/contact" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/terms" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-3 text-slate-500 dark:text-slate-400 text-sm">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 font-semibold text-slate-700 dark:text-slate-300">
                <span>100% Private</span>
                <span className="hidden md:inline">•</span>
                <span>Fast Processing</span>
                <span className="hidden md:inline">•</span>
                <span>Offline Capable</span>
              </div>
              <p>&copy; 2026 Photo Resizer.</p>
            
            </div>
            <div className="flex text-sm text-slate-500 dark:text-slate-400 font-medium">
              <span>Designed & Developed with ❤️ by Navnit Rai</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

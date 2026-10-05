import React from 'react';
import Link from 'next/link';
import SiteHeader from './SiteHeader';
import { examCategories } from '@/lib/navigation-data';

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#18181B]">
      {/* Unified Global Header */}
      <SiteHeader />

      {/* Main Page Content */}
      <div className="flex-1">
        {children}
      </div>

      {/* Unified Footer */}
      <footer className="w-full bg-[#FFFFFF] border-t border-[#E4E4E7] mt-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
            
            {/* Brand column */}
            <div className="sm:col-span-2 md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#18181B] mb-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center group-hover:bg-[#DCFCE7] transition-colors p-1.5">
                  <img src="/favicon.svg" alt="PhotoResizer Logo" className="w-full h-full object-contain" width={20} height={20} />
                </div>
                <span>photoresizer<span className="text-[#16A34A]">.co.in</span></span>
              </Link>
              <p className="text-sm text-[#52525B] leading-relaxed max-w-sm mb-4">
                Fast, simple, and private online image utility platform. Resize, compress, crop, and format your photos locally in your browser.
              </p>
              
              <div className="flex items-center gap-3 text-xs text-[#71717A] mb-5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F0FDF4] text-[#15803D] font-medium border border-[#BBF7D0]">
                  100% Private
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAFAFA] text-[#52525B] font-medium border border-[#E4E4E7]">
                  No Server Uploads
                </span>
              </div>

              {/* Developer Details */}
              <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] max-w-sm">
                <p className="text-xs font-semibold text-[#18181B] mb-1.5">
                  Developer &amp; Support: <span className="font-medium text-[#16A34A]">Navnit Rai</span>
                </p>
                <div className="space-y-1 text-xs text-[#52525B]">
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#71717A]">Phone:</span>
                    <a href="tel:+917355087072" className="text-[#16A34A] hover:text-[#15803D] font-medium transition-colors">
                      +91 7355087072
                    </a>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#71717A]">Email:</span>
                    <a href="mailto:navnitrai5389@gmail.com" className="text-[#16A34A] hover:text-[#15803D] font-medium transition-colors">
                      navnitrai5389@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Tools */}
            <div>
              <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-wider mb-4">
                Popular Tools
              </h4>
              <ul className="space-y-2.5 text-sm text-[#52525B]">
                <li><Link href="/photo-resizer" className="hover:text-[#16A34A] transition-colors">Photo Resizer</Link></li>
                <li><Link href="/compress-image" className="hover:text-[#16A34A] transition-colors">Photo Compressor</Link></li>
                <li><Link href="/free-background-remover" className="hover:text-[#16A34A] transition-colors">Background Remover</Link></li>
                <li><Link href="/passport-photo-maker" className="hover:text-[#16A34A] transition-colors">Passport Photo Maker</Link></li>
                <li><Link href="/tools" className="font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors">All 40+ Tools &rarr;</Link></li>
              </ul>
            </div>

            {/* Exam Presets */}
            <div>
              <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-wider mb-4">
                Govt &amp; Exam Presets
              </h4>
              <ul className="space-y-2.5 text-sm text-[#52525B]">
                {examCategories.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-[#16A34A] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Resources */}
            <div>
              <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-wider mb-4">
                Company &amp; Legal
              </h4>
              <ul className="space-y-2.5 text-sm text-[#52525B]">
                <li><Link href="/about" className="hover:text-[#16A34A] transition-colors">About Us</Link></li>
                <li><Link href="/how-to-use" className="hover:text-[#16A34A] transition-colors">How to Use</Link></li>
                <li><Link href="/contact" className="hover:text-[#16A34A] transition-colors">Contact Us</Link></li>
                <li><Link href="/terms" className="hover:text-[#16A34A] transition-colors">Terms &amp; Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-[#16A34A] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
            <p>&copy; {new Date().getFullYear()} PhotoResizer. All rights reserved. Developed by <span className="font-medium text-[#18181B]">Navnit Rai</span>.</p>
            <div className="flex items-center gap-3">
              <a href="tel:+917355087072" className="hover:text-[#16A34A] transition-colors font-medium">+91 7355087072</a>
              <span>•</span>
              <a href="mailto:navnitrai5389@gmail.com" className="hover:text-[#16A34A] transition-colors font-medium">navnitrai5389@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

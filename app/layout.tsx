import type { Metadata, Viewport } from "next";
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from "./components/ThemeProvider";
import { ClientErrorSuppressor } from "./components/ClientErrorSuppressor";
import { LangUpdater } from "./components/LangUpdater";
import { ThirdPartyScripts } from "./components/ThirdPartyScripts";

import { generateOrganizationSchema, generateWebSiteSchema } from "../lib/schema";
import "./globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'optional', variable: '--font-poppins', adjustFontFallback: true });

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in'),
  title: "Free Online Photo Resizer, Image Compressor & Background Remover | PhotoResizer.co.in",
  description: "Resize images, compress photos, remove backgrounds, create passport photos and edit pictures online for free. No uploads required.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Free Online Photo Resizer, Image Compressor & Background Remover | photoresizer.co.in",
    description: "Resize images, compress photos, remove backgrounds, create passport photos and edit pictures online for free. No uploads required.",
    type: "website",
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'photoresizer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Photo Resizer, Image Compressor & Background Remover | photoresizer.co.in",
    description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();
  
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThirdPartyScripts />
        <GoogleAnalytics gaId="G-Y3N6YXK7VE" />
        
        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangUpdater />
          <ClientErrorSuppressor />
        
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


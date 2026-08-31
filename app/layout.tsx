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
  title: "Exam Photo Resizer & Signature Reducer — Resize Photos for SSC, UPSC, IBPS & Govt Exams | PhotoResizer.co.in",
  description: "Free online exam photo resizer and signature compressor. Resize passport photos, signatures, thumb impressions, and declarations for SSC, UPSC, IBPS, RRB, CTET, NEET, Police & State PSC exams to exact KB and pixel limits. 100% private.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Exam Photo Resizer & Signature Reducer — SSC, UPSC, IBPS & Govt Exams | photoresizer.co.in",
    description: "Free online exam photo resizer and signature compressor. Resize passport photos, signatures, and thumb impressions to exact KB and pixel limits. 100% private.",
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
    title: "Exam Photo Resizer & Signature Reducer — SSC, UPSC, IBPS & Govt Exams | photoresizer.co.in",
    description: "Free online exam photo resizer and signature compressor. Resize passport photos, signatures, and thumb impressions to exact KB and pixel limits. 100% private.",
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


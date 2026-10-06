import type { Metadata, Viewport } from "next";
import { Poppins } from 'next/font/google';
import { ThirdPartyScripts } from "./components/ThirdPartyScripts";
import { ClientErrorSuppressor } from "./components/ClientErrorSuppressor";
import { generateOrganizationSchema, generateWebSiteSchema } from "../lib/schema";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'optional',
  variable: '--font-poppins',
  adjustFontFallback: true,
  preload: true,
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

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
      lang="en-IN"
      className={`${poppins.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ClientErrorSuppressor />
        <ThirdPartyScripts />
        
        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        
        {/* Analytics Event Queuing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Y3N6YXK7VE');`
          }}
        />

        {children}
      </body>
    </html>
  );
}

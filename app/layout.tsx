import type { Metadata, Viewport } from "next";
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from "./components/ThemeProvider";
import { ClientErrorSuppressor } from "./components/ClientErrorSuppressor";
import { LangUpdater } from "./components/LangUpdater";

import { generateOrganizationSchema, generateWebSiteSchema } from "../lib/schema";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap', variable: '--font-sans' });

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
  // Default to English, since we can't use headers() without opting into dynamic rendering.
  // The correct language will be updated by LangUpdater on the client if needed, or just left as en for SSG.
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();
  
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="anonymous" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2980455227951378" 
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script id="clarity-script" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uu67di7l76");
          `}
        </Script>

        <GoogleAnalytics gaId="G-Y3N6YXK7VE" />
        
        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema, null, 2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema, null, 2) }}
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

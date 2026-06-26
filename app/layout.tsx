import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import { ClientErrorSuppressor } from "./components/ClientErrorSuppressor";
import { LangUpdater } from "./components/LangUpdater";
import { generateOrganizationSchema, generateWebSiteSchema } from "../lib/schema";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizer.co.in'),
  title: "Free Online Photo Resizer, Image Compressor & Background Remover | PhotoResizer.co.in",
  description: "Resize images, compress photos, remove backgrounds, create passport photos and edit pictures online for free. No uploads required.",
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      de: '/de',
      fr: '/fr',
      es: '/es',
      'x-default': '/',
    },
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Free Online Photo Resizer, Image Compressor & Background Remover | PhotoResizerAI",
    description: "Resize images, compress photos, remove backgrounds, create passport photos and edit pictures online for free. No uploads required.",
    type: "website",
    url: '/',
    images: [
      {
        url: '/icon.svg',
        width: 800,
        height: 600,
        alt: 'photoresizer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Photo Resizer, Image Compressor & Background Remover | PhotoResizerAI",
    description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
    images: ['/icon.svg'],
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
      className={`font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uu67di7l76");
          `}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y3N6YXK7VE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y3N6YXK7VE');
          `}
        </Script>
        
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

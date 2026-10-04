export type Language = 'en' | 'en-in' | 'hi';

export interface SeoSection {
  heading: string;
  content: string; // Accepts HTML/Markdown or plain text based on rendering needs
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SeoPage {
  slug: string;           // E.g., 'photo-resizer' or 'ssc-photo-resizer'
  translationKey?: string; // Links equivalent pages across regions
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  
  // Tools to render on the page
  showTool?: 'photo-editor' | 'passport-maker' | 'bg-remover';

  // Content blocks
  sections: SeoSection[];
  faq?: FAQItem[];
  
  // Advanced Structured Data overrides
  structuredDataOverrides?: {
    webPageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'WebApplication';
    organizationName?: string;
  };
}

export interface HreflangMap {
  [lang: string]: string; // E.g., { 'en-IN': 'https://photoresizer.co.in/', 'x-default': 'https://photoresizer.co.in/' }
}

export interface NavPage {
  slug: string;
  h1: string;
  metaDescription: string;
  showTool?: string;
  category?: string;
}

export const featuredTools = [
  { slug: "photo-resizer", name: "Photo Resizer", desc: "Resize dimensions & file size" },
  { slug: "compress-image", name: "Photo Compressor", desc: "Reduce file size without quality loss" },
  { slug: "free-background-remover", name: "Background Remover", desc: "100% private AI background removal" },
  { slug: "passport-photo-maker", name: "Passport Photo Maker", desc: "India, US & UK biometric templates" },
];

export const examTools = [
  { slug: "ssc-photo-resizer", name: "SSC Photo Resizer", badge: "20-50 KB" },
  { slug: "upsc-photo-size", name: "UPSC Photo & Sign", badge: "20-300 KB" },
  { slug: "signature-resize-ibps", name: "IBPS Signature", badge: "10-20 KB" },
  { slug: "ibps-handwritten-declaration-resizer", name: "IBPS Declaration", badge: "20-50 KB" },
  { slug: "resize-left-thumb-impression-ibps", name: "Left Thumb Impression", badge: "20-50 KB" },
  { slug: "rrb-alp-photo-resizer", name: "RRB ALP Photo", badge: "30-70 KB" },
  { slug: "ctet-photo-resizer", name: "CTET Photo", badge: "10-100 KB" },
  { slug: "army-agniveer-photo-resizer", name: "Army Agniveer", badge: "20-50 KB" },
  { slug: "voter-id-photo-size-reducer", name: "Voter ID Photo", badge: "< 50 KB" },
  { slug: "resize-photo-driving-license-sarathi", name: "Driving License Sarathi", badge: "20-50 KB" },
];

export const examCategories = [
  { name: "SSC Exams (CGL/GD/MTS)", href: "/ssc-photo-resizer", badge: "20-50 KB" },
  { name: "Railway (RRB NTPC/ALP)", href: "/rrb-ntpc-photo-resizer", badge: "30-70 KB" },
  { name: "Banking (IBPS/SBI)", href: "/signature-resize-ibps", badge: "10-20 KB" },
  { name: "UPSC CSE & OTR", href: "/upsc-photo-size", badge: "20-300 KB" },
  { name: "Teaching (CTET/REET)", href: "/ctet-photo-resizer", badge: "10-100 KB" },
  { name: "State Police Recruitment", href: "/up-police-photo-resizer", badge: "Govt Presets" },
];

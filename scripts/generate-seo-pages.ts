import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawSlugs = `
ssc-photo-resizer
upsc-photo-size
reduce-photo-size-50kb
signature-resize-ibps
jpeg-to-jpg
compress-image
jpg-to-png
resize-photo-20kb
passport-photo-editor
passport-photo-maker
passport-size-photo-maker
passport-photo-app
passport-photo-print-template-generator
ielts-photo-size
toefl-photo-size
sat-photo-size
pte-photo-size
gre-photo-size
gmat-photo-size
us-passport-photo-maker
uk-passport-photo-maker
canada-passport-photo-maker
schengen-visa-photo-maker
australia-passport-photo-maker
india-passport-photo-maker
nepal-passport-photo-maker
remove-background
bg-removal
free-background-remover
remove-background-from-image-free
background-eraser
photo-background-remover
remove-background-from-logo
picture-background-remover
delete-background
background-remover-png
change-picture-background
photo-background-changer
clear-background
remove-background-hd-quality
high-quality-background-remover
delete-background-from-photo
delete-background-from-picture
pdf-size-reducer
merge-pdf
split-pdf
jpg-to-pdf
pdf-to-jpg
pdf-editor
privacy-policy
terms-of-service
about
faq
contact
blog
upsc-cse-photo-resizer
upsc-cse-signature-resizer
upsc-capf-photo-resizer
upsc-capf-signature-resizer
upsc-nda-na-photo-resizer
upsc-nda-na-signature-resizer
upsc-cds-photo-resizer
upsc-cds-signature-resizer
upsc-cms-photo-resizer
upsc-cms-signature-resizer
upsc-ies-iss-photo-resizer
upsc-ies-iss-signature-resizer
upsc-ese-photo-resizer
upsc-ese-signature-resizer
upsc-cgge-photo-resizer
upsc-cgge-signature-resizer
upsc-cisf-ac-photo-resizer
upsc-cisf-ac-signature-resizer
upsc-so-steno-photo-resizer
upsc-so-steno-signature-resizer
ssc-cgl-photo-resizer
ssc-cgl-signature-resizer
ssc-chsl-photo-resizer
ssc-chsl-signature-resizer
ssc-mts-photo-resizer
ssc-mts-signature-resizer
ssc-cpo-photo-resizer
ssc-cpo-signature-resizer
ssc-je-photo-resizer
ssc-je-signature-resizer
ssc-jht-photo-resizer
ssc-jht-signature-resizer
ssc-stenographer-photo-resizer
ssc-stenographer-signature-resizer
ssc-gd-constable-photo-resizer
ssc-gd-constable-signature-resizer
ssc-selection-post-photo-resizer
ssc-selection-post-signature-resizer
ibps-po-photo-resizer
ibps-po-signature-resizer
ibps-clerk-photo-resizer
ibps-clerk-signature-resizer
ibps-so-photo-resizer
ibps-so-signature-resizer
ibps-rrb-po-photo-resizer
ibps-rrb-po-signature-resizer
ibps-rrb-clerk-photo-resizer
ibps-rrb-clerk-signature-resizer
sbi-po-photo-resizer
sbi-po-signature-resizer
sbi-clerk-photo-resizer
sbi-clerk-signature-resizer
sbi-so-photo-resizer
sbi-so-signature-resizer
rbi-grade-b-photo-resizer
rbi-grade-b-signature-resizer
rbi-assistant-photo-resizer
rbi-assistant-signature-resizer
rbi-office-attendant-photo-resizer
rbi-office-attendant-signature-resizer
nabard-grade-a-photo-resizer
nabard-grade-a-signature-resizer
nabard-grade-b-photo-resizer
nabard-grade-b-signature-resizer
nabard-development-assistant-photo-resizer
nabard-development-assistant-signature-resizer
lic-aao-photo-resizer
lic-aao-signature-resizer
lic-ado-photo-resizer
lic-ado-signature-resizer
lic-assistant-photo-resizer
lic-assistant-signature-resizer
niacl-ao-photo-resizer
niacl-ao-signature-resizer
niacl-assistant-photo-resizer
niacl-assistant-signature-resizer
uiic-ao-photo-resizer
uiic-ao-signature-resizer
uiic-assistant-photo-resizer
uiic-assistant-signature-resizer
oicl-ao-photo-resizer
oicl-ao-signature-resizer
nicl-ao-photo-resizer
nicl-ao-signature-resizer
sebi-grade-a-photo-resizer
sebi-grade-a-signature-resizer
sidbi-grade-a-photo-resizer
sidbi-grade-a-signature-resizer
exim-bank-mt-photo-resizer
exim-bank-mt-signature-resizer
rrb-ntpc-photo-resizer
rrb-ntpc-signature-resizer
rrb-group-d-photo-resizer
rrb-group-d-signature-resizer
rrb-alp-photo-resizer
rrb-alp-signature-resizer
rrb-technician-photo-resizer
rrb-technician-signature-resizer
rrb-je-photo-resizer
rrb-je-signature-resizer
rrb-paramedical-photo-resizer
rrb-paramedical-signature-resizer
rrb-ministerial-photo-resizer
rrb-ministerial-signature-resizer
rpf-si-photo-resizer
rpf-si-signature-resizer
rpf-constable-photo-resizer
rpf-constable-signature-resizer
afcat-photo-resizer
afcat-signature-resizer
inet-photo-resizer
inet-signature-resizer
icg-navik-photo-resizer
icg-navik-signature-resizer
icg-yantrik-photo-resizer
icg-yantrik-signature-resizer
army-agniveer-photo-resizer
army-agniveer-signature-resizer
navy-agniveer-photo-resizer
navy-agniveer-signature-resizer
air-force-agniveer-vayu-photo-resizer
air-force-agniveer-vayu-signature-resizer
cisf-constable-photo-resizer
cisf-constable-signature-resizer
crpf-head-constable-photo-resizer
crpf-head-constable-signature-resizer
bsf-tradesman-photo-resizer
bsf-tradesman-signature-resizer
itbp-constable-photo-resizer
itbp-constable-signature-resizer
ugc-net-photo-resizer
ugc-net-signature-resizer
csir-net-photo-resizer
csir-net-signature-resizer
ctet-photo-resizer
ctet-signature-resizer
kvs-photo-resizer
kvs-signature-resizer
nvs-photo-resizer
nvs-signature-resizer
dsssb-photo-resizer
dsssb-signature-resizer
emrs-photo-resizer
emrs-signature-resizer
jee-main-photo-resizer
jee-main-signature-resizer
jee-advanced-photo-resizer
jee-advanced-signature-resizer
neet-ug-photo-resizer
neet-ug-signature-resizer
neet-pg-photo-resizer
neet-pg-signature-resizer
neet-mds-photo-resizer
neet-mds-signature-resizer
neet-ss-photo-resizer
neet-ss-signature-resizer
ini-cet-photo-resizer
ini-cet-signature-resizer
gate-photo-resizer
gate-signature-resizer
cat-photo-resizer
cat-signature-resizer
xat-photo-resizer
xat-signature-resizer
mat-photo-resizer
mat-signature-resizer
cmat-photo-resizer
cmat-signature-resizer
atma-photo-resizer
atma-signature-resizer
snap-photo-resizer
snap-signature-resizer
nmat-photo-resizer
nmat-signature-resizer
iift-photo-resizer
iift-signature-resizer
cuet-ug-photo-resizer
cuet-ug-signature-resizer
cuet-pg-photo-resizer
cuet-pg-signature-resizer
clat-photo-resizer
clat-signature-resizer
ailet-photo-resizer
ailet-signature-resizer
lsat-india-photo-resizer
lsat-india-signature-resizer
nift-entrance-photo-resizer
nift-entrance-signature-resizer
nid-dat-photo-resizer
nid-dat-signature-resizer
uceed-photo-resizer
uceed-signature-resizer
ceed-photo-resizer
ceed-signature-resizer
icar-aieea-photo-resizer
icar-aieea-signature-resizer
gpat-photo-resizer
gpat-signature-resizer
nchmct-jee-photo-resizer
nchmct-jee-signature-resizer
appsc-photo-resizer
appsc-signature-resizer
apsc-cce-photo-resizer
apsc-cce-signature-resizer
bpsc-cce-photo-resizer
bpsc-cce-signature-resizer
cgpsc-photo-resizer
cgpsc-signature-resizer
gpsc-photo-resizer
gpsc-signature-resizer
hpsc-hcs-photo-resizer
hpsc-hcs-signature-resizer
hppsc-has-photo-resizer
hppsc-has-signature-resizer
jkpsc-kas-photo-resizer
jkpsc-kas-signature-resizer
jpsc-cse-photo-resizer
jpsc-cse-signature-resizer
kpsc-kas-photo-resizer
kpsc-kas-signature-resizer
kerala-psc-kas-photo-resizer
kerala-psc-kas-signature-resizer
mppsc-photo-resizer
mppsc-signature-resizer
mpsc-maharashtra-photo-resizer
mpsc-maharashtra-signature-resizer
mpsc-meghalaya-photo-resizer
mpsc-meghalaya-signature-resizer
mpsc-mizoram-photo-resizer
mpsc-mizoram-signature-resizer
npsc-photo-resizer
npsc-signature-resizer
opsc-oas-photo-resizer
opsc-oas-signature-resizer
ppsc-pcs-photo-resizer
ppsc-pcs-signature-resizer
rpsc-ras-photo-resizer
rpsc-ras-signature-resizer
spsc-photo-resizer
spsc-signature-resizer
tnpsc-photo-resizer
tnpsc-signature-resizer
tspsc-photo-resizer
tspsc-signature-resizer
tpsc-photo-resizer
tpsc-signature-resizer
uppsc-pcs-photo-resizer
uppsc-pcs-signature-resizer
uppsc-ro-aro-photo-resizer
uppsc-ro-aro-signature-resizer
ukpsc-pcs-photo-resizer
ukpsc-pcs-signature-resizer
wbcs-photo-resizer
wbcs-signature-resizer
ap-dsc-photo-resizer
ap-dsc-signature-resizer
bssc-cgl-photo-resizer
bssc-cgl-signature-resizer
cg-vyapam-photo-resizer
cg-vyapam-signature-resizer
gsssb-photo-resizer
gsssb-signature-resizer
hssc-cet-photo-resizer
hssc-cet-signature-resizer
hpsssb-photo-resizer
hpsssb-signature-resizer
jssc-cgl-photo-resizer
jssc-cgl-signature-resizer
kea-photo-resizer
kea-signature-resizer
mp-peb-photo-resizer
mp-peb-signature-resizer
rsmssb-photo-resizer
rsmssb-signature-resizer
tnusrb-photo-resizer
tnusrb-signature-resizer
upsssc-pet-photo-resizer
upsssc-pet-signature-resizer
upsssc-vdo-photo-resizer
upsssc-vdo-signature-resizer
upsssc-lekhpal-photo-resizer
upsssc-lekhpal-signature-resizer
uksssc-photo-resizer
uksssc-signature-resizer
ap-police-photo-resizer
ap-police-signature-resizer
assam-police-photo-resizer
assam-police-signature-resizer
bihar-police-photo-resizer
bihar-police-signature-resizer
cg-police-photo-resizer
cg-police-signature-resizer
delhi-police-photo-resizer
delhi-police-signature-resizer
gujarat-police-photo-resizer
gujarat-police-signature-resizer
haryana-police-photo-resizer
haryana-police-signature-resizer
hp-police-photo-resizer
hp-police-signature-resizer
jk-police-photo-resizer
jk-police-signature-resizer
jharkhand-police-photo-resizer
jharkhand-police-signature-resizer
karnataka-police-photo-resizer
karnataka-police-signature-resizer
kerala-police-photo-resizer
kerala-police-signature-resizer
mp-police-photo-resizer
mp-police-signature-resizer
maharashtra-police-photo-resizer
maharashtra-police-signature-resizer
odisha-police-photo-resizer
odisha-police-signature-resizer
punjab-police-photo-resizer
punjab-police-signature-resizer
rajasthan-police-photo-resizer
rajasthan-police-signature-resizer
tn-police-photo-resizer
tn-police-signature-resizer
ts-police-photo-resizer
ts-police-signature-resizer
up-police-photo-resizer
up-police-signature-resizer
uttarakhand-police-photo-resizer
uttarakhand-police-signature-resizer
wb-police-photo-resizer
wb-police-signature-resizer
aptet-photo-resizer
aptet-signature-resizer
assam-tet-photo-resizer
assam-tet-signature-resizer
btet-photo-resizer
btet-signature-resizer
cg-tet-photo-resizer
cg-tet-signature-resizer
gtet-photo-resizer
gtet-signature-resizer
htet-photo-resizer
htet-signature-resizer
hp-tet-photo-resizer
hp-tet-signature-resizer
jtet-photo-resizer
jtet-signature-resizer
kartet-photo-resizer
kartet-signature-resizer
ktet-photo-resizer
ktet-signature-resizer
mp-tet-photo-resizer
mp-tet-signature-resizer
maha-tet-photo-resizer
maha-tet-signature-resizer
otet-photo-resizer
otet-signature-resizer
pstet-photo-resizer
pstet-signature-resizer
reet-photo-resizer
reet-signature-resizer
tntet-photo-resizer
tntet-signature-resizer
tstet-photo-resizer
tstet-signature-resizer
uptet-photo-resizer
uptet-signature-resizer
utet-photo-resizer
utet-signature-resizer
wbtet-photo-resizer
wbtet-signature-resizer
ap-eapcet-photo-resizer
ap-eapcet-signature-resizer
ap-icet-photo-resizer
ap-icet-signature-resizer
ap-lawcet-photo-resizer
ap-lawcet-signature-resizer
ap-pgecet-photo-resizer
ap-pgecet-signature-resizer
assam-cee-photo-resizer
assam-cee-signature-resizer
bcece-photo-resizer
bcece-signature-resizer
cg-pet-photo-resizer
cg-pet-signature-resizer
cg-pmt-photo-resizer
cg-pmt-signature-resizer
gcet-photo-resizer
gcet-signature-resizer
gujcet-photo-resizer
gujcet-signature-resizer
haryana-det-photo-resizer
haryana-det-signature-resizer
hp-cet-photo-resizer
hp-cet-signature-resizer
jkcet-photo-resizer
jkcet-signature-resizer
jcece-photo-resizer
jcece-signature-resizer
kcet-photo-resizer
kcet-signature-resizer
karnataka-pgcet-photo-resizer
karnataka-pgcet-signature-resizer
keam-photo-resizer
keam-signature-resizer
kmat-kerala-photo-resizer
kmat-kerala-signature-resizer
mp-pat-photo-resizer
mp-pat-signature-resizer
mp-be-photo-resizer
mp-be-signature-resizer
mht-cet-photo-resizer
mht-cet-signature-resizer
mah-mba-cet-photo-resizer
mah-mba-cet-signature-resizer
mah-mca-cet-photo-resizer
mah-mca-cet-signature-resizer
mah-llb-cet-photo-resizer
mah-llb-cet-signature-resizer
ojee-photo-resizer
ojee-signature-resizer
pu-cet-photo-resizer
pu-cet-signature-resizer
ts-eamcet-photo-resizer
ts-eamcet-signature-resizer
ts-icet-photo-resizer
ts-icet-signature-resizer
ts-lawcet-photo-resizer
ts-lawcet-signature-resizer
ts-pgecet-photo-resizer
ts-pgecet-signature-resizer
tancet-photo-resizer
tancet-signature-resizer
uksee-photo-resizer
uksee-signature-resizer
wbjee-photo-resizer
wbjee-signature-resizer
jexpo-photo-resizer
jexpo-signature-resizer
`;

// Exclude these static slugs or ones that likely already exist
const existingSlugs = [
  'photo-resizer',
  'passport-photo-maker',
  'how-to-use',
  'contact',
  'terms',
  'privacy-policy',
  'about',
  'faq',
  'blog',
];

const slugs = rawSlugs
  .split('\n')
  .map(s => s.trim())
  .filter(s => s.length > 0 && !existingSlugs.includes(s));

function toTitleCase(str: string) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Pseudo-random generation based on slug to ensure idempotency
function getSeededRandom(slug: string, max: number) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % max;
}

const templates = {
  signature: [
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Need to resize your signature for ${name}? Our tool ensures your signature meets all official guidelines without losing clarity.
  </p>
  <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
    <h3 class="font-bold text-slate-900 dark:text-white mb-3">Key Features</h3>
    <ul class="space-y-2 text-slate-700 dark:text-slate-300">
      <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> Exact KB and pixel dimensions</li>
      <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> Maintains stroke clarity and legibility</li>
      <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> No data leaves your device</li>
    </ul>
  </div>
</div>`,
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Official applications for ${name} require perfectly sized signatures. Don't let your form get rejected due to incorrect dimensions.
  </p>
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    Just upload a picture of your signature on white paper, set the target dimensions or KB size in the sidebar, and download instantly.
  </p>
</div>`,
    (name: string) => `<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-slate-900 dark:text-white">Fast & Free Signature Resizing for ${name}</h3>
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    Your ${name} signature must be crisp, legible, and strictly under the file size limit. We process everything locally in your browser so your personal signature remains completely private.
  </p>
</div>`,
  ],
  photo: [
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Preparing your photograph for ${name}? Get the dimensions, aspect ratio, and KB size right on the first try.
  </p>
  <div class="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800">
    <h3 class="font-bold text-slate-900 dark:text-white mb-3">Why Use Our Resizer?</h3>
    <ul class="space-y-2 text-slate-700 dark:text-slate-300">
      <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span> Target specific KB compression</li>
      <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span> Precise cropping and dimension control</li>
      <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span> 100% Free and Private browser processing</li>
    </ul>
  </div>
</div>`,
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    The ${name} application portal has strict photograph requirements. Use our fast online tool to crop, resize, and compress your image instantly.
  </p>
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    Never worry about blurry uploads or "file too large" errors again. Set your target size and let our algorithm find the optimal quality automatically.
  </p>
</div>`,
    (name: string) => `<div class="space-y-6 not-prose">
  <h3 class="text-xl font-bold text-slate-900 dark:text-white">Your ${name} Photo, Formatted Perfectly</h3>
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    Avoid application delays by ensuring your ${name} photo is strictly compliant. No watermarks, no account signup, and instant processing directly in your browser.
  </p>
</div>`,
  ],
  background: [
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Instantly ${name} using our advanced browser-based AI tool. Get crisp, clean cutouts in seconds without paying for premium software.
  </p>
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
    Our AI automatically detects the main subject and removes the background cleanly.
  </p>
</div>`,
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Need to ${name}? Upload your image and watch the background disappear seamlessly. No server upload means your images remain completely private.
  </p>
</div>`,
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    The fastest way to ${name}. Professional quality results in your browser — simply drag and drop your photo to get started.
  </p>
</div>`,
  ],
  general: [
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Use our free online tool to ${name}. Fast, easy, and completely secure processing directly in your web browser.
  </p>
</div>`,
    (name: string) => `<div class="space-y-6 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Looking to ${name}? You're in the right place. Our browser-based editor handles it all offline, keeping your files safe and private.
  </p>
</div>`,
  ]
};

const faqTemplates = {
  signature: [
    {
      q: "What is the standard signature size for {name}?",
      a: "Requirements vary, but most official portals require signatures to be between 10KB and 20KB, in JPEG format. Always check the official notification."
    },
    {
      q: "Is it safe to upload my signature?",
      a: "Yes! Our tool works entirely in your browser using HTML5 Canvas. Your signature image is never sent to any remote server."
    },
    {
      q: "Can I use blue ink for the {name} signature?",
      a: "Most authorities strongly recommend using black ink on plain white paper for maximum contrast and scanner legibility, though some accept blue ink. Please consult the official {name} guidelines."
    }
  ],
  photo: [
    {
      q: "What are the photo dimensions for {name}?",
      a: "While exact dimensions vary, the standard passport-style requirement is usually 3.5cm x 4.5cm or 4.5cm x 3.5cm, with a file size strictly under 50KB. Always consult the official {name} notification before uploading."
    },
    {
      q: "Does this tool reduce file size in KB?",
      a: "Yes. You can enter a specific target file size (e.g., 20KB or 50KB) in the sidebar and our tool will automatically compress the photo to fit perfectly."
    },
    {
      q: "Can I change the background of my {name} photo?",
      a: "We recommend taking your photo against a plain white wall. If needed, you can use our background removal features or passport maker tool to make it pure white."
    }
  ],
  background: [
    {
      q: "Is the background removal really free?",
      a: "Yes, 100% free with no hidden limits. You can process as many images as you need without a premium subscription."
    },
    {
      q: "How does the AI work?",
      a: "We use a lightweight, privacy-focused machine learning model that runs directly in your browser to detect the subject and accurately remove the background."
    }
  ],
  general: [
    {
      q: "Is this tool completely free?",
      a: "Absolutely. No signups, no subscriptions, no watermarks, and no hidden fees."
    },
    {
      q: "Do I need to install any software?",
      a: "No, everything runs seamlessly right here in your modern web browser."
    }
  ]
};

function generatePage(slug: string) {
  const name = toTitleCase(slug);
  
  let type: 'signature' | 'photo' | 'background' | 'general' = 'general';
  let showTool = 'photo-editor';

  if (slug.includes('signature')) {
    type = 'signature';
  } else if (slug.includes('background') || slug.includes('bg-')) {
    type = 'background';
    showTool = 'bg-remover';
  } else if (slug.includes('passport') || slug.includes('visa')) {
    type = 'photo';
    showTool = 'passport-maker';
  } else if (slug.includes('photo')) {
    type = 'photo';
  }

  if (slug.includes('pdf')) {
    showTool = 'photo-editor';
  }

  const tmplArr = templates[type];
  const tmplIdx = getSeededRandom(slug, tmplArr.length);
  const contentHTML = tmplArr[tmplIdx](name);

  const faqs = faqTemplates[type].map(faq => ({
    question: faq.q.replace(/{name}/g, name),
    answer: faq.a.replace(/{name}/g, name),
  }));

  let titleSuffix = '— Free Online Tool';
  if (type === 'signature') titleSuffix = '— Exact Size & KB';
  if (type === 'photo') titleSuffix = '— Resize & Compress';

  const indent = (str: string, spaces: number) => {
    const spacesStr = ' '.repeat(spaces);
    return str.split('\\n').map(line => spacesStr + line).join('\\n').trimStart();
  };

  return `  {
    slug: "${slug}",
    metaTitle: "${name} ${titleSuffix}",
    metaDescription: "Free online tool for ${name}. Resize, crop, and compress your images instantly in your browser without uploading to any server.",
    h1: "${name}",
    showTool: "${showTool}",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle: "Quickly and securely process your files for ${name}. 100% free, 100% private.",
    sections: [
      {
        heading: "About ${name}",
        content: \`${contentHTML}\`,
      }
    ],
    faq: ${indent(JSON.stringify(faqs, null, 2), 4)}
  }`;
}

const allPagesStr = slugs.map(generatePage).join(',\n');

const fileContent = `import { SeoPage } from "../lib/types/seo";

export const programmaticPages: SeoPage[] = [
${allPagesStr}
];
`;

fs.writeFileSync(path.join(__dirname, '../content/programmatic-pages.ts'), fileContent, 'utf8');
console.log(`Successfully generated ${slugs.length} programmatic SEO pages!`);

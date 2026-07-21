import { SeoPage } from "../lib/types/seo";

// ─────────────────────────────────────────────────────────────────────────────
// German SEO Pages – Enhanced Content (~800 words each) with improved UI/UX
// Natural keyword placement, richer sections, better visual structure
// ─────────────────────────────────────────────────────────────────────────────

export const dePages: SeoPage[] = [
  // ─────────────────────────────────────────────────────
  // 1. foto-verkleinern
  // ─────────────────────────────────────────────────────
  {
    slug: "foto-verkleinern",
      translationKey: 'photo-resizer',
    metaTitle:
      "Foto verkleinern – Bilder online verkleinern ohne Qualitätsverlust",
    metaDescription:
      "Foto verkleinern leicht gemacht: Unser Online-Tool verkleinert Fotos auf Wunschgröße, komprimiert JPEG/PNG und behält dabei die Bildqualität. Kostenlos, ohne Anmeldung.",
    h1: "Foto verkleinern",
    subtitle:
      "Fotos sekundenschnell verkleinern – mit voller Kontrolle über Abmessungen, Qualität und Dateiformat.",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "Warum ein spezielles Tool zum Foto verkleinern?",
        content: `<div class="space-y-10 not-prose">

  <!-- Intro -->
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
      Ein Foto verkleinern gehört zu den häufigsten Aufgaben im digitalen Alltag – ob für den Upload in sozialen Medien, den Versand per E-Mail, den Einsatz auf einer Webseite oder die Archivierung von Bildern. Doch wer einfach nur die Pixelmaße reduziert, riskiert verwaschene Details, sichtbare JPEG-Artefakte und einen unnatürlichen Bildeindruck. Unser <strong>Foto verkleinern</strong>-Tool geht anders vor: Es kombiniert intelligente Resampling-Algorithmen mit optionaler Schärfung und Komprimierung, sodass deine Aufnahmen nach dem Verkleinern genauso scharf wirken wie zuvor – bei deutlich geringerer Dateigröße.
    </p>
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
      Im Gegensatz zu einem reinen Bildbetrachter oder einem einfachen Konvertierungsdienst bietet unser Tool eine Live-Vorschau im Vergleichsmodus. Du siehst sofort, wie sich jede Änderung auf Schärfe, Farben und feine Details auswirkt – bevor du das Ergebnis herunterlädst. Dank einstellbarer Interpolationsmethoden wie <em>Lanczos3</em> oder <em>bikubischer Interpolation</em> lässt sich das Ergebnis exakt an den Verwendungszweck anpassen – vom winzigen Profilfoto bis zum hochauflösenden Drucklayout.
    </p>
  </div>

  <!-- Trust badges -->
  <div class="flex flex-wrap gap-3">
    <span class="inline-flex items-center gap-2 px-4 py-2 bg-lime-50 dark:bg-lime-900/30 border border-lime-200 dark:border-lime-800 rounded-full text-sm font-semibold text-lime-700 dark:text-lime-400">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
      100 % kostenlos
    </span>
    <span class="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 dark:bg-sky-900/30 border border-sky-200 dark:border-sky-800 rounded-full text-sm font-semibold text-sky-700 dark:text-sky-400">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      Kein Upload – 100 % lokal
    </span>
    <span class="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 rounded-full text-sm font-semibold text-violet-700 dark:text-violet-400">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      JPEG · PNG · WebP
    </span>
  </div>

  <!-- 2-col feature cards -->
  <div class="grid md:grid-cols-2 gap-5">
    <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800/50">
      <h3 class="text-base font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
        <span class="text-xl">📐</span> Maßgeschneiderte Verkleinerung
      </h3>
      <ul class="space-y-2 text-sm text-amber-800 dark:text-amber-200">
        <li class="flex gap-2"><span class="text-amber-600 font-bold shrink-0">✓</span> Prozentuale Skalierung oder exakte Pixelwerte</li>
        <li class="flex gap-2"><span class="text-amber-600 font-bold shrink-0">✓</span> Seitenverhältnis automatisch beibehalten</li>
        <li class="flex gap-2"><span class="text-amber-600 font-bold shrink-0">✓</span> Lange Seite auf Wunschmaß begrenzen</li>
        <li class="flex gap-2"><span class="text-amber-600 font-bold shrink-0">✓</span> Batchmodus für bis zu 20 Fotos gleichzeitig</li>
      </ul>
    </div>
    <div class="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-sky-200 dark:border-sky-800/50">
      <h3 class="text-base font-bold text-sky-900 dark:text-sky-100 mb-3 flex items-center gap-2">
        <span class="text-xl">⚡</span> Qualitätserhalt beim Verkleinern
      </h3>
      <ul class="space-y-2 text-sm text-sky-800 dark:text-sky-200">
        <li class="flex gap-2"><span class="text-sky-600 font-bold shrink-0">✓</span> KI-gestützte Schärfung nach dem Downsampling</li>
        <li class="flex gap-2"><span class="text-sky-600 font-bold shrink-0">✓</span> JPEG-Artefakte aktiv minimieren</li>
        <li class="flex gap-2"><span class="text-sky-600 font-bold shrink-0">✓</span> Exif-Daten optional erhalten oder entfernen</li>
        <li class="flex gap-2"><span class="text-sky-600 font-bold shrink-0">✓</span> Echtzeit Vorher-/Nachher-Vergleich</li>
      </ul>
    </div>
  </div>

  <!-- Step-by-step -->
  <div class="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
    <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-5">Foto verkleinern: Schritt für Schritt</h3>
    <ol class="space-y-4">
      <li class="flex gap-4">
        <span class="shrink-0 w-8 h-8 rounded-xl bg-lime-600 text-white text-sm font-black flex items-center justify-center">1</span>
        <div><strong class="text-slate-900 dark:text-white">Bild hochladen</strong><p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Per Drag & Drop, Datei-Dialog oder direkt von der Kamera. Unterstützt JPEG, PNG und WebP.</p></div>
      </li>
      <li class="flex gap-4">
        <span class="shrink-0 w-8 h-8 rounded-xl bg-lime-600 text-white text-sm font-black flex items-center justify-center">2</span>
        <div><strong class="text-slate-900 dark:text-white">Zielgröße festlegen</strong><p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Breite und Höhe in Pixeln, Prozent, Zentimetern oder Millimetern angeben – mit automatischer Verhältnissperre.</p></div>
      </li>
      <li class="flex gap-4">
        <span class="shrink-0 w-8 h-8 rounded-xl bg-lime-600 text-white text-sm font-black flex items-center justify-center">3</span>
        <div><strong class="text-slate-900 dark:text-white">Qualitätsregler einstellen</strong><p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Von leicht komprimiert bis verlustfrei – der Slider zeigt die voraussichtliche Dateigröße in Echtzeit.</p></div>
      </li>
      <li class="flex gap-4">
        <span class="shrink-0 w-8 h-8 rounded-xl bg-lime-600 text-white text-sm font-black flex items-center justify-center">4</span>
        <div><strong class="text-slate-900 dark:text-white">Vorschau prüfen</strong><p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Der Vorher-/Nachher-Slider zeigt jeden Detailunterschied – so erkennst du genau, was sich verändert.</p></div>
      </li>
      <li class="flex gap-4">
        <span class="shrink-0 w-8 h-8 rounded-xl bg-lime-600 text-white text-sm font-black flex items-center justify-center">5</span>
        <div><strong class="text-slate-900 dark:text-white">Herunterladen</strong><p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Als JPEG, PNG oder WebP speichern – ohne Wasserzeichen, ohne Anmeldung, sofort einsatzbereit.</p></div>
      </li>
    </ol>
  </div>

  <!-- Use-case table -->
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-4">Empfohlene Größen: Wann Foto verkleinern besonders sinnvoll ist</h3>
    <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-slate-50 dark:bg-slate-800/60">
          <tr>
            <th class="p-4 text-left font-semibold text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Zweck</th>
            <th class="p-4 text-left font-semibold text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Empfohlene Größe</th>
            <th class="p-4 text-left font-semibold text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Format</th>
            <th class="p-4 text-left font-semibold text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Tipp</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"><td class="p-4 text-slate-700 dark:text-slate-300 font-medium">E-Mail-Anhang</td><td class="p-4 text-slate-700 dark:text-slate-300">max. 1.200 px lange Kante</td><td class="p-4"><span class="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded font-mono text-xs">JPEG</span></td><td class="p-4 text-slate-500 dark:text-slate-400 text-xs">Qualität 80 % reicht für E-Mail</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"><td class="p-4 text-slate-700 dark:text-slate-300 font-medium">Instagram Post</td><td class="p-4 text-slate-700 dark:text-slate-300">1.080 × 1.080 px</td><td class="p-4"><span class="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded font-mono text-xs">JPEG</span></td><td class="p-4 text-slate-500 dark:text-slate-400 text-xs">Quadratisch für Feed</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"><td class="p-4 text-slate-700 dark:text-slate-300 font-medium">Webseiten-Banner</td><td class="p-4 text-slate-700 dark:text-slate-300">1.920 × 600 px</td><td class="p-4"><span class="px-2 py-0.5 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 rounded font-mono text-xs">WebP</span></td><td class="p-4 text-slate-500 dark:text-slate-400 text-xs">WebP spart ~30 % ggü. JPEG</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"><td class="p-4 text-slate-700 dark:text-slate-300 font-medium">WhatsApp Profilbild</td><td class="p-4 text-slate-700 dark:text-slate-300">500 × 500 px</td><td class="p-4"><span class="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded font-mono text-xs">JPEG</span></td><td class="p-4 text-slate-500 dark:text-slate-400 text-xs">Kleiner als 100 KB ideal</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"><td class="p-4 text-slate-700 dark:text-slate-300 font-medium">LinkedIn Profilbild</td><td class="p-4 text-slate-700 dark:text-slate-300">400 × 400 px</td><td class="p-4"><span class="px-2 py-0.5 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400 rounded font-mono text-xs">PNG</span></td><td class="p-4 text-slate-500 dark:text-slate-400 text-xs">PNG für scharfe Kanten</td></tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"><td class="p-4 text-slate-700 dark:text-slate-300 font-medium">Druck 10 × 15 cm</td><td class="p-4 text-slate-700 dark:text-slate-300">1.800 × 1.200 px (300 dpi)</td><td class="p-4"><span class="px-2 py-0.5 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400 rounded font-mono text-xs">PNG</span></td><td class="p-4 text-slate-500 dark:text-slate-400 text-xs">Verlustfrei für Druck</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Additional content -->
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">Foto verkleinern vs. Foto komprimieren – was ist der Unterschied?</h3>
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
      Viele Nutzer verwechseln die beiden Begriffe. <strong>Foto verkleinern</strong> bedeutet, die tatsächlichen Pixelmaße (Breite × Höhe) zu reduzieren. Ein 4.000-px-Foto, das auf 1.000 px verkleinert wird, hat danach ein Viertel der ursprünglichen Pixelanzahl. <strong>Foto komprimieren</strong> hingegen lässt die Abmessungen unverändert und reduziert stattdessen die Datenmenge durch effizientere Kodierung. Unser Tool ermöglicht beide Methoden – einzeln oder kombiniert. Wer die <em>maximale</em> Dateieinsparung sucht, kombiniert zunächst das Verkleinern auf die Ziel-Anzeigeauflösung mit anschließender Komprimierung auf 75–85 % Qualität.
    </p>
    <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">Datenschutz: Deine Fotos bleiben auf deinem Gerät</h3>
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
      Die gesamte Verarbeitung erfolgt direkt im Browser – kein Server, keine Cloud, keine Datenweitergabe. Das macht unser <strong>Foto verkleinern</strong>-Tool besonders geeignet für sensible Inhalte wie Bewerbungsfotos, Ausweiskopien oder persönliche Bilder. DSGVO-Konformität ist damit bauartbedingt garantiert, nicht nur versprochen.
    </p>
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
      Unsere Engine analysiert darüber hinaus den Bildinhalt und schlägt bei Wahl von „Auto" selbstständig eine optimale Komprimierungsstufe vor. So wird das <strong>Foto verkleinern</strong> zum Ein-Klick-Erlebnis – gerade bei ganzen Ordnerstapeln ein unschätzbarer Zeitgewinn für Fotografen, Blogger und Online-Händler.
    </p>
  </div>

  <!-- Privacy banner -->
  <div class="flex items-start gap-4 p-5 bg-slate-900 dark:bg-slate-800 rounded-2xl text-white">
    <span class="text-2xl shrink-0">🔒</span>
    <div>
      <p class="font-bold mb-1">Keine Server-Uploads – volle Privatsphäre</p>
      <p class="text-sm text-slate-300">Deine Fotos verlassen niemals dein Gerät. Die Verarbeitung findet ausschließlich in deinem Browser statt – schnell, sicher und DSGVO-konform.</p>
    </div>
  </div>

</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich mehrere Fotos auf einmal verkleinern?",
        answer:
          "Ja, unser Tool unterstützt Stapelverarbeitung. Du kannst bis zu 20 Bilder gleichzeitig hochladen – alle werden mit denselben Einstellungen verkleinert. Jedes Foto wird einzeln optimiert und steht sofort zum Download bereit.",
      },
      {
        question: "Wird beim Verkleinern die Bildqualität schlechter?",
        answer:
          "Jede Verkleinerung bedeutet einen gewissen Detailverlust, da tatsächlich Pixel entfernt werden. Unsere Schärfungsalgorithmen halten das Bild jedoch subjektiv scharf. Zusätzliche Komprimierung steuerst du getrennt über den Qualitätsregler, um sichtbare Artefakte zu vermeiden.",
      },
      {
        question: "Unterstützt das Tool RAW-Dateien?",
        answer:
          "Direktes Verkleinern von RAW-Formaten (CR2, NEF, ARW) ist derzeit nicht möglich. Konvertiere die RAW-Datei zuerst in JPEG oder PNG – danach kannst du sie problemlos verkleinern.",
      },
      {
        question: "Verändert das Tool die Metadaten meines Fotos?",
        answer:
          "Standardmäßig bleiben EXIF-Daten wie Aufnahmedatum und Kameramodell erhalten. In den erweiterten Einstellungen kannst du wählen, ob alle Metadaten entfernt werden sollen, um die Dateigröße weiter zu reduzieren.",
      },
      {
        question: "Funktioniert das Verkleinern auch auf dem Smartphone?",
        answer:
          "Ja, die Verarbeitung läuft vollständig im Browser. Das Tool ist auf iOS und Android genauso schnell und zuverlässig wie am PC – eine separate App ist nicht nötig.",
      },
      {
        question: "Wie viel kleiner wird die Datei nach dem Verkleinern?",
        answer:
          "Das hängt von den gewählten Zielmaßen ab. Eine Halbierung der Seitenlängen (z. B. von 4.000 auf 2.000 px) reduziert die Pixelanzahl um 75 %. In Kombination mit moderater Komprimierung sind Einsparungen von 80–90 % gegenüber dem Original typisch.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // 5. bild-komprimieren
  // ─────────────────────────────────────────────────────
  {
    slug: "bild-komprimieren",
      translationKey: 'compress-image',
    metaTitle: "Bild komprimieren – JPEG & PNG online komprimieren",
    metaDescription:
      "Bild komprimieren ohne Qualitätsverlust: Reduziere die Dateigröße deiner Fotos um bis zu 80 %. Kostenlos, browserbasiert und ohne Upload-Limit.",
    h1: "Bild komprimieren",
    subtitle:
      "Weniger Kilobyte, gleicher Look – optimierte Bilder für schnelle Ladezeiten.",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "Effizientes Bild komprimieren für Web und E-Mail",
        content: `<div class="space-y-10 not-prose">

  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
      Ein unkomprimiertes Foto einer modernen Smartphone-Kamera belegt schnell 8–12 MB. Bevor du es auf eine Website lädst, per E-Mail verschickst oder in einem CMS speicherst, solltest du es <strong>komprimieren</strong>. Unser Algorithmus analysiert Farbverläufe und Detailbereiche getrennt und wendet eine adaptive Quantisierung an: Flächige Bereiche wie Himmel oder Unschärfezonen werden stärker komprimiert als scharfe Konturen und Textdetails. Das Ergebnis ist ein optisch nahezu unverändertes Bild mit drastisch reduzierter Dateigröße.
    </p>
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
      Wer Bilder für das Web optimiert, sollte außerdem wissen: Unkomprimierte Bilder sind einer der Hauptgründe für schlechte Core Web Vitals (insbesondere Largest Contentful Paint). Suchmaschinen wie Google berücksichtigen die Seitenladezeit als Rankingfaktor. <strong>Bild komprimieren</strong> ist also nicht nur Komfort – es ist aktives SEO.
    </p>
  </div>

  <!-- Compression level table -->
  <div class="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800/50">
    <h3 class="font-bold text-yellow-900 dark:text-yellow-100 mb-4 flex items-center gap-2"><span class="text-xl">📊</span> Kompressionsstufen im Vergleich</h3>
    <div class="overflow-x-auto rounded-xl border border-yellow-200 dark:border-yellow-800/50">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-yellow-100 dark:bg-yellow-900/30">
          <tr>
            <th class="p-3 text-left font-semibold text-yellow-900 dark:text-yellow-200">Stufe</th>
            <th class="p-3 text-left font-semibold text-yellow-900 dark:text-yellow-200">Qualität</th>
            <th class="p-3 text-left font-semibold text-yellow-900 dark:text-yellow-200">Ø Einsparung</th>
            <th class="p-3 text-left font-semibold text-yellow-900 dark:text-yellow-200">Sichtbare Qualität</th>
            <th class="p-3 text-left font-semibold text-yellow-900 dark:text-yellow-200">Empfohlen für</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-yellow-100 dark:divide-yellow-900/30">
          <tr><td class="p-3 font-medium text-slate-700 dark:text-slate-300">Leicht</td><td class="p-3 text-slate-600 dark:text-slate-400">90 %</td><td class="p-3 text-slate-600 dark:text-slate-400">~20 %</td><td class="p-3 text-slate-600 dark:text-slate-400">Identisch</td><td class="p-3 text-slate-600 dark:text-slate-400">Archivierung, Druck</td></tr>
          <tr><td class="p-3 font-medium text-slate-700 dark:text-slate-300">Mittel</td><td class="p-3 text-slate-600 dark:text-slate-400">75 %</td><td class="p-3 text-slate-600 dark:text-slate-400">~50 %</td><td class="p-3 text-slate-600 dark:text-slate-400">Kaum Unterschied</td><td class="p-3 text-slate-600 dark:text-slate-400">Webseiten, Blogs</td></tr>
          <tr><td class="p-3 font-medium text-slate-700 dark:text-slate-300">Stark</td><td class="p-3 text-slate-600 dark:text-slate-400">60 %</td><td class="p-3 text-slate-600 dark:text-slate-400">~75 %</td><td class="p-3 text-slate-600 dark:text-slate-400">Leichte Artefakte</td><td class="p-3 text-slate-600 dark:text-slate-400">E-Commerce-Galerie</td></tr>
          <tr><td class="p-3 font-medium text-slate-700 dark:text-slate-300">Maximum</td><td class="p-3 text-slate-600 dark:text-slate-400">40 %</td><td class="p-3 text-slate-600 dark:text-slate-400">~85 %</td><td class="p-3 text-slate-600 dark:text-slate-400">Sichtbar, nur Thumbnails</td><td class="p-3 text-slate-600 dark:text-slate-400">Vorschaubilder, Icons</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Format comparison -->
  <div>
    <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-4">JPEG vs. PNG vs. WebP – welches Format beim Komprimieren am meisten spart</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="p-5 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl">
        <p class="font-bold text-slate-900 dark:text-white mb-2">JPEG</p>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">Ideal für Fotos mit vielen Farben und Farbverläufen. Keine Transparenz. Weit verbreitet.</p>
        <div class="text-xs text-slate-400 dark:text-slate-500"><span class="font-semibold text-green-600">✓ Fotos</span> · <span class="font-semibold text-green-600">✓ Web</span> · <span class="font-semibold text-red-500">✗ Transparenz</span></div>
      </div>
      <div class="p-5 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl">
        <p class="font-bold text-slate-900 dark:text-white mb-2">PNG</p>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">Verlustfreie Kompression mit Transparenz. Größere Dateien, aber ideal für Logos und Screenshots.</p>
        <div class="text-xs text-slate-400 dark:text-slate-500"><span class="font-semibold text-green-600">✓ Logos</span> · <span class="font-semibold text-green-600">✓ Transparenz</span> · <span class="font-semibold text-red-500">✗ Große Dateien</span></div>
      </div>
      <div class="p-5 bg-white dark:bg-slate-800/60 border-2 border-lime-400 dark:border-lime-600 rounded-2xl relative overflow-hidden">
        <span class="absolute top-3 right-3 text-[10px] font-bold bg-lime-600 text-white px-2 py-0.5 rounded-full">Empfohlen</span>
        <p class="font-bold text-slate-900 dark:text-white mb-2">WebP</p>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">Bis zu 35 % kleiner als JPEG bei gleicher Qualität. Transparenz möglich. Beste Wahl für moderne Webseiten.</p>
        <div class="text-xs text-slate-400 dark:text-slate-500"><span class="font-semibold text-green-600">✓ Fotos</span> · <span class="font-semibold text-green-600">✓ Transparenz</span> · <span class="font-semibold text-green-600">✓ Kleinste Dateien</span></div>
      </div>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">Bild komprimieren für besseres Google-Ranking</h3>
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
      Google PageSpeed Insights und Lighthouse bewerten unter anderem die Bildoptimierung. Unkomprimierte Bilder kosten Punkte bei den Core Web Vitals, was sich direkt auf das Suchmaschinenranking auswirken kann. Eine Faustregel: Kein Bild auf einer Webseite sollte größer als 200 KB sein – für Thumbnails und Seitenleisten-Bilder reichen oft 30–50 KB vollkommen aus.
    </p>
    <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">Bild komprimieren ohne Qualitätsverlust – ist das möglich?</h3>
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
      Verlustfreie Kompression (PNG, WebP-lossless) reduziert Dateigröße, ohne einen einzigen Pixel zu verändern. Bei JPEG ist jede Kompression technisch verlustbehaftet – aber bei Qualitätswerten von 80–90 % ist der Unterschied für das menschliche Auge nicht erkennbar. Unser Tool zeigt dir in der Vorschau genau, was du erhältst, bevor du herunterlädst. So findest du den perfekten Mittelweg zwischen Dateigröße und Bildqualität.
    </p>
  </div>

  <div class="flex items-start gap-4 p-5 bg-slate-900 dark:bg-slate-800 rounded-2xl text-white">
    <span class="text-2xl shrink-0">📈</span>
    <div>
      <p class="font-bold mb-1">Bild komprimieren = besseres SEO</p>
      <p class="text-sm text-slate-300">Komprimierte Bilder laden schneller, verbessern die Core Web Vitals und steigern das Google-Ranking deiner Seite. Lade kein unkomprimiertes Bild mehr hoch.</p>
    </div>
  </div>

</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich die Kompressionsstärke vorher testen?",
        answer:
          "Ja, der Vorher-/Nachher-Vergleich zeigt dir bei jeder Einstellung das voraussichtliche Ergebnis in Echtzeit. Du kannst den Qualitätsschieberegler so lange bewegen, bis Dateigröße und Qualität passen.",
      },
      {
        question: "Werden die Metadaten (EXIF) beim Komprimieren gelöscht?",
        answer:
          "Standardmäßig ja, um maximale Einsparung zu erzielen. In den erweiterten Optionen kannst du festlegen, dass Aufnahmedatum und Kameramodell erhalten bleiben.",
      },
      {
        question: "Unterstützt die Komprimierung auch das WebP-Format?",
        answer:
          "Ja, du kannst sowohl nach JPEG und PNG als auch nach WebP komprimieren. WebP bietet bei gleicher Qualität meist 25–35 % kleinere Dateien und eignet sich besonders für moderne Webseiten.",
      },
      {
        question: "Wird die Auflösung beim Komprimieren verändert?",
        answer:
          "Nein, die Pixelmaße bleiben unverändert. Das Tool reduziert ausschließlich die Datenmenge durch effizientere Kodierung, ohne das Bild zu verkleinern.",
      },
      {
        question: "Gibt es ein Limit für die Dateigröße beim Hochladen?",
        answer:
          "Du kannst Bilder bis zu 50 MB hochladen. Da die Verarbeitung lokal im Browser erfolgt, gibt es kein serverseitiges Upload-Limit.",
      },
      {
        question: "Warum ist mein PNG nach der Komprimierung immer noch groß?",
        answer:
          "PNG verwendet verlustfreie Kompression, was bei Fotos mit vielen Farben naturgemäß größere Dateien ergibt als JPEG. Exportiere das Bild als JPEG oder WebP, wenn Dateigröße wichtiger ist als Transparenz.",
      },
    ],
  },
  {
    slug: "hintergrund-entfernen",
      translationKey: 'remove-background',
    metaTitle: "Hintergrund entfernen – Bildhintergrund automatisch löschen",
    metaDescription:
      "Hintergrund entfernen mit KI: Mache den Hintergrund deiner Fotos in Sekunden transparent. Kostenlos, ohne Photoshop.",
    h1: "Hintergrund entfernen",
    subtitle:
      "Automatische Hintergrundentfernung – präzise, schnell, transparent.",
    showTool: "bg-remover",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "Hintergrund entfernen wie von Zauberhand",
        content: `<div class="space-y-12 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Einen <strong>Hintergrund zu entfernen</strong>, war früher Handarbeit – heute erledigt das eine KI in Sekunden. Unser Tool erkennt automatisch Personen, Tiere, Produkte und sogar feine Haare und trennt sie vom Rest des Bildes. Das freigestellte Motiv kannst du dann als PNG mit Transparenz speichern oder direkt in einen neuen Hintergrund setzen.</p>
  </div>
  <div class="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 border">
    <h3 class="font-bold text-teal-900 dark:text-teal-100 mb-3">Unterstützte Bildtypen</h3>
    <ul class="grid grid-cols-2 gap-2 text-sm text-teal-800 dark:text-teal-200">
      <li>👤 Porträts & Selfies</li>
      <li>🐕 Haustiere</li>
      <li>👗 Mode & Produkte</li>
      <li>🌿 Pflanzen & Bäume</li>
      <li>🚗 Fahrzeuge</li>
      <li>📄 Dokumente & Scans</li>
    </ul>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Wie genau erkennt die KI das Hauptmotiv?",
        answer:
          "Unser neuronales Netzwerk wurde mit Millionen Bildern trainiert. Es erkennt automatisch, was im Vordergrund steht – Person, Tier oder Gegenstand – und maskiert alles andere.",
      },
      {
        question: "Kann ich nach der Entfernung den Hintergrund ändern?",
        answer:
          "Ja, du kannst eine beliebige Farbe wählen oder ein eigenes Hintergrundbild hochladen. So entstehen sofort neue Kompositionen.",
      },
      {
        question: "Bleiben feine Haare beim Freistellen erhalten?",
        answer:
          "Ja, die KI ist speziell auf Haarstrukturen trainiert. Einzelne Strähnen werden präzise freigestellt, was selbst Profi-Software oft nicht automatisch schafft.",
      },
      {
        question: "Was kann ich tun, wenn die Automatik einen Fehler macht?",
        answer:
          "Mit dem grünen/roten Pinsel kannst du Bereiche manuell hinzufügen oder entfernen. So korrigierst du jede Ungenauigkeit im Handumdrehen.",
      },
      {
        question:
          "Wird mein Bild nach der Bearbeitung auf einem Server gespeichert?",
        answer:
          "Nein, die Verarbeitung erfolgt lokal im Browser. Dein Bild verlässt niemals deinen Rechner.",
      },
    ],
  },
  {
    slug: "passfoto-ersteller",
      translationKey: 'passport-photo-maker',
    metaTitle:
      "Passfoto Ersteller – Biometrische Passbilder online selbst machen",
    metaDescription:
      "Erstelle mit dem Passfoto Ersteller biometrische Passbilder direkt im Browser. Wähle Land und Dokumenttyp – Hintergrund wird automatisch angepasst, Gesichtsbiometrie geprüft. Kostenlos.",
    h1: "Passfoto Ersteller",
    subtitle:
      "Schneide, skaliere und formatiere dein Selfie für offizielle Dokumente – ganz ohne Fotostudio.",
    showTool: "passport-maker",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "Der Passfoto Ersteller für alle amtlichen Lichtbilder",
        content: `<div class="space-y-12 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">Ein gültiges <strong>Passfoto</strong> zu erstellen, kann teuer und zeitaufwendig sein – vor allem, wenn das Foto im Automaten oder beim Fotografen abgelehnt wird. Unser <strong>Passfoto Ersteller</strong> ändert das grundlegend. Du lädst ein Selbstporträt hoch, das du bequem zu Hause aufnimmst, und innerhalb von Sekunden erhältst du ein biometrisch geprüftes Bild, das den internationalen ICAO‑Standards entspricht.</p>
    <p>Egal ob deutscher Reisepass, Personalausweis, französischer Aufenthaltstitel, US‑Visum oder Kinderreisepass – mit wenigen Klicks wählst du das Zielland und den Dokumententyp aus. Die Software übernimmt dann den automatischen Beschnitt, die Positionierung des Gesichts, die Überprüfung der Kopfgröße (32–36 mm) und die Augenhöhe (28–35 mm vom unteren Rand). Sogar die Hintergrundfarbe wird auf das amtlich vorgeschriebene Hellgrau gesetzt.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
      <h3 class="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">🔍 Automatische Biometrieprüfung</h3>
      <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
        <li class="flex gap-2"><span class="text-blue-600">✓</span> Kopfzentrierung und Augenhöhe</li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span> Gesichtsgröße im Verhältnis zum Bild</li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span> Überprüfung auf Schatten und Reflexionen</li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span> Warnung bei fehlender Neutralität (Mund offen)</li>
      </ul>
    </div>
    <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
      <h3 class="text-lg font-bold text-green-900 dark:text-green-100 mb-3">🖨️ Drucklayout inklusive</h3>
      <ul class="space-y-2 text-sm text-green-800 dark:text-green-200">
        <li class="flex gap-2"><span class="text-green-600">✓</span> 10×15 cm‑Bogen mit 4, 6 oder 8 Passbildern</li>
        <li class="flex gap-2"><span class="text-green-600">✓</span> Einzelbild als JPEG oder PNG für Online‑Anträge</li>
        <li class="flex gap-2"><span class="text-green-600">✓</span> Zuschneidehilfen und Beschnittmarken</li>
        <li class="flex gap-2"><span class="text-green-600">✓</span> Optimiert für Drogerie‑Ausbelichtung</li>
      </ul>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3>Schritt für Schritt zum perfekten Passfoto</h3>
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border mt-4">
      <ol class="space-y-4 text-sm list-decimal list-inside text-slate-700 dark:text-slate-300">
        <li><strong>Selfie aufnehmen</strong> – Stelle dich vor eine einfarbige Wand, sorge für gleichmäßiges Licht ohne Schlagschatten. Halte die Kamera etwa 1,5 m entfernt.</li>
        <li><strong>Land und Dokument wählen</strong> – Deutschland (35×45 mm), USA (51×51 mm), UK (35×45 mm) oder ein Schengen‑Visum. Der Assistent lädt automatisch die richtigen Maße.</li>
        <li><strong>Hintergrund entfernen lassen</strong> – Die KI ersetzt den Originalhintergrund durch das geforderte Hellgrau (#D3D3D3). Du kannst die Farbe auch manuell anpassen.</li>
        <li><strong>Biometrieprüfung starten</strong> – Ein Ampelsystem zeigt sofort an, ob Kopfgröße, Augenabstand und Gesichtsausdruck passen. Bei Rot erhältst du konkrete Korrekturhinweise.</li>
        <li><strong>Druckvorlage oder Einzelbild herunterladen</strong> – Fertig für die Beantragung.</li>
      </ol>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3>Länderspezifische Anforderungen im Überblick</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border">
        <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-700">
          <tr><th class="p-4 text-left">Land / Dokument</th><th class="p-4 text-left">Größe</th><th class="p-4 text-left">Hintergrund</th><th class="p-4 text-left">Besonderheit</th></tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Deutschland (Reisepass)</td><td class="p-4 text-slate-700 dark:text-slate-300">35×45 mm</td><td class="p-4 text-slate-700 dark:text-slate-300">Hellgrau</td><td class="p-4 text-slate-700 dark:text-slate-300">Mund geschlossen, neutrale Miene</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Frankreich (Visum)</td><td class="p-4 text-slate-700 dark:text-slate-300">35×45 mm</td><td class="p-4 text-slate-700 dark:text-slate-300">Weiß</td><td class="p-4 text-slate-700 dark:text-slate-300">Leichtes Lächeln erlaubt</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">USA (Visa / Green Card)</td><td class="p-4 text-slate-700 dark:text-slate-300">51×51 mm</td><td class="p-4 text-slate-700 dark:text-slate-300">Weiß</td><td class="p-4 text-slate-700 dark:text-slate-300">Gesichtshöhe 28–35 mm</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Schweiz</td><td class="p-4 text-slate-700 dark:text-slate-300">35×45 mm</td><td class="p-4 text-slate-700 dark:text-slate-300">Hell</td><td class="p-4 text-slate-700 dark:text-slate-300">Kopfhöhe 29–34 mm</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Schengen-Visum</td><td class="p-4 text-slate-700 dark:text-slate-300">35×45 mm</td><td class="p-4 text-slate-700 dark:text-slate-300">Hell</td><td class="p-4 text-slate-700 dark:text-slate-300">70–80 % Gesichtsanteil</td></tr>
        </tbody>
      </table>
    </div>
    <p class="mt-6 text-slate-700 dark:text-slate-300 leading-relaxed">Unser <strong>Passfoto Ersteller</strong> aktualisiert diese Vorgaben regelmäßig, damit dein Antrag nicht wegen eines Formfehlers abgelehnt wird.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Akzeptieren alle Behörden ein selbst erstelltes Passfoto?",
        answer:
          "Ja, solange es den biometrischen Kriterien entspricht. Unser Ersteller prüft diese Kriterien automatisch und warnt bei Abweichungen. Die meisten Nutzer berichten von problemloser Annahme.",
      },
      {
        question: "Kann ich das Passfoto auch für Kinder und Babys verwenden?",
        answer:
          "Definitiv. Der Assistent erkennt, wenn ein Kleinkind fotografiert wird, und lockert die strengen Kopfpositionsvorgaben gemäß den Ausnahmeregelungen. Auch Babys mit noch nicht vollständig geöffneten Augen werden akzeptiert.",
      },
      {
        question: "Wie drucke ich die Passbilder am günstigsten?",
        answer:
          "Lade das 10×15‑cm‑Layout herunter und belichte es bei dm, Rossmann, CEWE oder einem Online‑Dienst. Die Kosten liegen meist unter 0,30 €.",
      },
      {
        question: "Wird mein hochgeladenes Selfie gespeichert?",
        answer:
          "Nein, sämtliche Bearbeitungen finden lokal im Browser statt. Nach dem Schließen des Tabs sind alle Daten gelöscht.",
      },
      {
        question:
          "Kann ich mit dem Passfoto Ersteller auch biometrische Fotos für den digitalen Personalausweis machen?",
        answer:
          "Ja, seit Mai 2025 akzeptieren viele Bürgerämter das digitale Lichtbild. Unser Tool liefert eine Einzeldatei, die direkt im Online‑Antrag verwendet werden kann.",
      },
    ],
  },
  {
    slug: "anleitung",
      translationKey: 'how-to-use',
    metaTitle: "Anleitung – So nutzt du die Online Bildbearbeitung optimal",
    metaDescription:
      "Schritt-für-Schritt-Anleitung für unsere Bild-Tools. Erfahre, wie du Fotos verkleinerst, zuschneidest, den Hintergrund entfernst und Passbilder erstellst. Mit Tipps und Tricks.",
    h1: "Anleitung",
    subtitle:
      "Vom ersten Upload bis zum perfekten Ergebnis – alle Funktionen einfach erklärt.",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "Erste Schritte mit unseren Bildwerkzeugen",
        content: `<div class="space-y-12 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Willkommen in unserem Online‑Editor! Egal, ob du ein Bild <strong>verkleinern</strong>, <strong>komprimieren</strong>, den <strong>Hintergrund entfernen</strong> oder ein <strong>biometrisches Passbild</strong> erstellen möchtest – hier findest du alle Funktionen übersichtlich vereint. Da alles komplett im Browser läuft, musst du keine Software installieren und deine Bilder bleiben privat.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-8 mt-6">
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Bild hochladen</h3>
      <p class="text-slate-600 dark:text-slate-400">Klicke auf den Upload‑Bereich oder ziehe deine Datei per Drag & Drop hinein. Unterstützt werden JPEG, PNG, WebP und HEIC. Du kannst auch direkt ein Foto mit deiner Kamera aufnehmen.</p>
    </div>
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Werkzeug wählen</h3>
      <p class="text-slate-600 dark:text-slate-400">Nutze die obere Werkzeugleiste oder das Kontextmenü, um zwischen <strong>Größe ändern</strong>, <strong>Zuschneiden</strong>, <strong>Drehen</strong>, <strong>Komprimieren</strong> und <strong>Hintergrund entfernen</strong> zu wechseln. Bei Passbildern startet automatisch der spezielle Assistent.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-8">
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">3. Anpassungen vornehmen</h3>
      <p class="text-slate-600 dark:text-slate-400">Passe die Werte mit den Schiebereglern an – Breite, Höhe, Qualität oder Drehwinkel. Jede Änderung zeigt sofort eine Vorschau. Bei der Hintergrundentfernung kannst du mit dem grünen/roten Pinsel feinkorrigieren.</p>
    </div>
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">4. Herunterladen</h3>
      <p class="text-slate-600 dark:text-slate-400">Klicke auf den Download‑Button und wähle das Zielformat (JPEG, PNG, WebP). Dein bearbeitetes Bild wird sofort lokal gespeichert – ohne Upload, ohne Wartezeit.</p>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-8">
    <h3>Hilfreiche Tipps für optimale Ergebnisse</h3>
    <div class="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm border-amber-200">
      <ul class="list-disc list-inside space-y-2 text-sm text-amber-800 dark:text-amber-200">
        <li>Verwende für die Hintergrundentfernung ein Motiv mit klaren Konturen und guter Ausleuchtung.</li>
        <li>Bei Passbildern ist ein neutraler Gesichtsausdruck (Mund zu) Pflicht – ein leichtes Lächeln kann zur Ablehnung führen.</li>
        <li>Du kannst mehrere Bearbeitungsschritte kombinieren: erst zuschneiden, dann verkleinern, dann komprimieren.</li>
        <li>Die Stapelverarbeitung eignet sich perfekt, um viele Urlaubsfotos auf einmal auf Webschirm‑Größe zu bringen.</li>
        <li>Über das Menü „Verlauf“ kannst du jeden Schritt rückgängig machen oder wiederherstellen.</li>
      </ul>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich die Anleitung auch offline lesen?",
        answer:
          "Ja, sobald die Seite einmal geladen ist, kannst du sie auch ohne Internetverbindung aufrufen. Die Werkzeuge funktionieren dann ebenfalls größtenteils offline.",
      },
      {
        question: "Welche Browser werden unterstützt?",
        answer:
          "Chrome, Firefox, Safari und Edge in der jeweils aktuellen Version. Für die Hintergrundentfernung ist WebGL erforderlich, was alle modernen Browser mitbringen.",
      },
      {
        question: "Gibt es eine maximale Dateigröße?",
        answer:
          "Du kannst Bilder bis 50 MB hochladen. Für sehr große Panoramen empfehlen wir, vorher eine Vorschau zu erstellen.",
      },
      {
        question: "Kann ich mehrere Werkzeuge gleichzeitig nutzen?",
        answer:
          "Du kannst sie nacheinander anwenden, aber nicht parallel. Der Editor speichert deine Änderungen in der Session, sodass du z. B. nach dem Freistellen direkt skalieren kannst.",
      },
      {
        question: "Sind alle Funktionen wirklich kostenlos?",
        answer:
          "Absolut. Es gibt keine Premium‑Stufe und keine versteckten Kosten. Die Finanzierung erfolgt über dezente Werbung, die die Nutzung nicht beeinträchtigt.",
      },
    ],
  },
  {
    slug: "kontakt",
      translationKey: 'contact',
    metaTitle: "Kontakt – Schreib uns bei Fragen oder Feedback",
    metaDescription:
      "Du hast Fragen zu unseren Bildbearbeitungstools oder benötigst technischen Support? Kontaktiere uns per E‑Mail – wir melden uns innerhalb von 24 Stunden.",
    h1: "Kontakt",
    subtitle: "Wir freuen uns auf deine Nachricht und helfen dir gerne weiter.",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "So erreichst du uns",
        content: `<div class="space-y-12 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Dein Feedback ist uns wichtig. Ob du eine Frage zur Bedienung hast, einen Fehler melden möchtest oder einfach nur ein Verbesserungsvorschlag loswerden willst – zögere nicht, uns zu schreiben. Unser kleines Team bearbeitet jede E‑Mail persönlich und bemüht sich um eine schnelle Rückmeldung.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-8">
    <div class="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
      <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Per E‑Mail</h3>
      <p class="text-slate-600 dark:text-slate-400 mb-6">Unsere Support‑Adresse für alle technischen und allgemeinen Anfragen:</p>
      <a href="mailto:usvisaphotoai@gmail.com" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors">
        usvisaphotoai@gmail.com
      </a>
    </div>

    <div class="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Bevor du schreibst</h3>
      <ul class="space-y-4 text-sm text-slate-600 dark:text-slate-400">
        <li class="flex gap-3">
          <span class="text-blue-600 dark:text-blue-400 mt-1">🔍</span>
          <span>Schau zuerst in unsere <a href="/anleitung" class="text-blue-600 dark:text-blue-400 underline">Anleitung</a> – dort sind viele häufige Fragen bereits beantwortet.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-blue-600 dark:text-blue-400 mt-1">📸</span>
          <span>Sollte es um ein konkretes Bild gehen, beschreibe bitte das Problem möglichst genau. Wir können aus Datenschutzgründen keine Bilddateien annehmen.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-blue-600 dark:text-blue-400 mt-1">🕒</span>
          <span>Unsere Antwortzeit beträgt in der Regel 24–48 Stunden, am Wochenende auch mal etwas länger.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-blue-600 dark:text-blue-400 mt-1">💡</span>
          <span>Verbesserungsvorschläge und Feature‑Wünsche sind immer willkommen. Viele unserer Funktionen basieren auf Nutzerfeedback.</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-6">
    <h3>Häufige Kontaktgründe</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border">
        <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-700">
          <tr><th class="p-4 text-left">Anliegen</th><th class="p-4 text-left">Kurze Selbsthilfe</th></tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Bild wird nicht geladen</td><td class="p-4 text-slate-700 dark:text-slate-300">Prüfe Dateiformat (JPEG/PNG/WebP) und Größe (&lt;50 MB). Deaktiviere ggf. Browser‑Erweiterungen.</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Hintergrund wird nicht vollständig entfernt</td><td class="p-4 text-slate-700 dark:text-slate-300">Nutze den Pinsel‑Modus, um manuell zu korrigieren. Bessere Ausleuchtung des Motivs hilft meist.</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Passbild wird abgelehnt</td><td class="p-4 text-slate-700 dark:text-slate-300">Überprüfe die Biometrie‑Ampel im Assistenten. Häufigster Grund: Kopf zu klein oder nicht zentriert.</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Tool langsam auf älterem Gerät</td><td class="p-4 text-slate-700 dark:text-slate-300">Schließe andere Tabs und reduziere die Bildauflösung vor der Bearbeitung. Die Hintergrund‑KI benötigt ausreichend Arbeitsspeicher.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich auch telefonisch Hilfe bekommen?",
        answer:
          "Aktuell bieten wir ausschließlich E‑Mail‑Support an. Dadurch können wir jede Anfrage dokumentiert und mit der notwendigen Sorgfalt beantworten.",
      },
      {
        question:
          "Wie kann ich sicher sein, dass meine E‑Mail nicht im Spam landet?",
        answer:
          "Füge usvisaphotoai@gmail.com zu deinen Kontakten hinzu. Solltest du nach 48 Stunden keine Antwort erhalten, kontrolliere bitte den Spam‑Ordner.",
      },
      {
        question: "Verwendet ihr meine E‑Mail‑Adresse für Werbung?",
        answer:
          "Nein, deine E‑Mail‑Adresse wird ausschließlich zur Beantwortung deiner Anfrage verwendet und nicht an Dritte weitergegeben oder für Newsletter genutzt.",
      },
      {
        question: "Kann ich einen Fehlerbericht mit Screenshot einreichen?",
        answer:
          "Ja, füge einfach einen Link zu einem Screenshot (z. B. über einen Bilderdienst) in die E‑Mail ein. Direkte Anhänge werden wegen Virenschutz nicht geöffnet.",
      },
      {
        question: "Bietet ihr auch geschäftliche Lizenzen oder White‑Label an?",
        answer:
          "Derzeit nicht, aber wir arbeiten an einem API‑Zugang. Schreib uns bei Interesse, wir nehmen dich gerne in die Beta‑Liste auf.",
      },
    ],
  },
  {
    slug: "agb",
      translationKey: 'terms',
    metaTitle: "AGB – Allgemeine Geschäftsbedingungen für die Nutzung",
    metaDescription:
      "Lies die Allgemeinen Geschäftsbedingungen (AGB) für die Online Bildbearbeitung. Informationen zu Haftung, Nutzungsrechten und Verantwortlichkeiten.",
    h1: "AGB",
    subtitle:
      "Rechtliche Grundlage für die Nutzung unserer Bildbearbeitungswerkzeuge.",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "Nutzungsbedingungen",
        content: `<div class="space-y-12 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Willkommen bei photoresizer (nachfolgend „Dienst“). Durch den Zugriff auf unsere Website und die Nutzung der angebotenen Online‑Bildbearbeitung erklärst du dich mit den folgenden Allgemeinen Geschäftsbedingungen einverstanden. Bitte lies sie sorgfältig durch.</p>
  </div>

  <div class="space-y-5">
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">1</span>
        Zustimmung zu den Bedingungen
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Mit der Nutzung des Dienstes akzeptierst du diese AGB sowie unsere Datenschutzerklärung. Falls du mit einem Teil nicht einverstanden bist, stelle die Nutzung bitte ein.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">2</span>
        Verfügbarkeit und Änderungen des Dienstes
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Wir bemühen uns um eine unterbrechungsfreie Bereitstellung, können diese jedoch nicht garantieren. Der Dienst kann zu Wartungszwecken, bei technischen Problemen oder aufgrund von Drittanbieter‑Ausfällen vorübergehend nicht erreichbar sein. Wir behalten uns das Recht vor, Funktionen zu ändern, zu erweitern oder einzustellen.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">3</span>
        Verantwortung des Nutzers
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Du trägst die alleinige Verantwortung für die von dir hochgeladenen Bilder. Du sicherst zu, dass du die erforderlichen Rechte an den Bildern besitzt und mit der Bearbeitung keine Rechte Dritter verletzt. Die Bearbeitung von Bildern, die gegen geltendes Recht verstoßen, ist untersagt.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">4</span>
        Geistiges Eigentum
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Der Dienst, sein Quellcode, das Design und die Algorithmen sind unser Eigentum und durch Urheberrecht geschützt. Wir erheben keine Eigentumsansprüche an den von dir bearbeiteten Bildern. Du behältst sämtliche Rechte an deinen Inhalten.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">5</span>
        Haftungsbeschränkung
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Der Dienst wird „wie besehen“ ohne Gewährleistung bereitgestellt. Wir haften nicht für direkte oder indirekte Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung entstehen, es sei denn, sie beruhen auf Vorsatz oder grober Fahrlässigkeit. Für die Richtigkeit der Passbild‑Biometrie‑Prüfung übernehmen wir keine Gewähr; maßgeblich ist allein die Prüfung durch die zuständige Behörde.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">6</span>
        Schlussbestimmungen
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, unser Geschäftssitz.</p>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-6">
    <p class="text-sm text-slate-500">Stand: Juni 2026. Bei wesentlichen Änderungen werden registrierte Nutzer per E‑Mail informiert. Ansonsten genügt eine Aktualisierung dieser Seite.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Muss ich mich anmelden, um die AGB zu akzeptieren?",
        answer:
          "Nein, die Nutzung der Website gilt bereits als Zustimmung zu diesen Bedingungen. Eine aktive Zustimmung per Klick ist nicht erforderlich.",
      },
      {
        question: "Darf ich die bearbeiteten Bilder kommerziell nutzen?",
        answer:
          "Ja, du behältst alle Rechte an deinen Bildern. Die Nutzung unseres Tools schränkt die kommerzielle Verwendung deiner Werke in keiner Weise ein.",
      },
      {
        question:
          "Was passiert, wenn mein Passbild wegen eines Fehlers im Tool abgelehnt wird?",
        answer:
          "Wir geben die Biometrie‑Hinweise nach bestem Wissen, können aber keine Garantie für die Annahme durch die Behörde übernehmen. Bei Ablehnung überarbeiten wir den Algorithmus jedoch umgehend, falls du uns den Fehler meldest.",
      },
      {
        question: "Gilt das deutsche Recht auch für Nutzer aus dem Ausland?",
        answer:
          "Ja, da der Dienst von Deutschland aus betrieben wird, unterliegt die Nutzung deutschem Recht. Internationale Nutzer sollten dies beachten.",
      },
      {
        question: "Kann ich meine Einwilligung widerrufen?",
        answer:
          "Die AGB regeln die Nutzungsbedingungen, nicht die Einwilligung zur Datenverarbeitung. Da wir keine personenbezogenen Daten erheben, gibt es keine diesbezügliche Einwilligung zu widerrufen.",
      },
    ],
  },
  {
    slug: "datenschutz",
      translationKey: 'privacy',
    metaTitle: "Datenschutzerklärung – So schützen wir deine Privatsphäre",
    metaDescription:
      "Unsere Datenschutzerklärung erläutert, dass alle Bildbearbeitungen lokal im Browser stattfinden. Keine Datenerfassung, keine Cookies, keine Server-Uploads. Volle Transparenz.",
    h1: "Datenschutzerklärung",
    subtitle:
      "Deine Privatsphäre ist das Herzstück unseres Dienstes – lese, wie wir sie gewährleisten.",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    sections: [
      {
        heading: "Datenschutz auf einen Blick",
        content: `<div class="space-y-12 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Der Schutz deiner Daten hat für uns oberste Priorität. Im Gegensatz zu vielen anderen Online‑Bildbearbeitungen, die deine Fotos auf entfernte Server hochladen, setzen wir auf eine vollständig <strong>lokal ausgeführte Verarbeitung</strong>. Das bedeutet: Deine Bilder, Einstellungen und Downloads verlassen niemals deinen Computer oder dein Smartphone. Du kannst den Dienst sogar offline nutzen, nachdem die Seite einmal geladen wurde.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 rounded-r-xl">
      <h3 class="text-lg font-bold text-green-900 dark:text-green-400 mb-3 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z"/></svg>
        100 % Lokale Verarbeitung
      </h3>
      <p class="text-green-800 dark:text-green-300/80">Sämtliche Bearbeitungsfunktionen – Größenänderung, Kompression, Hintergrundentfernung – werden direkt in deinem Browser ausgeführt. <strong>Es findet kein Upload auf einen Server statt.</strong></p>
    </div>
    <div class="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-xl">
      <h3 class="text-lg font-bold text-blue-900 dark:text-blue-400 mb-3 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Keine Datenerfassung
      </h3>
      <p class="text-blue-800 dark:text-blue-300/80">Wir verfolgen, sammeln oder speichern keine personenbezogenen Daten. Es werden keine Analyse‑Cookies gesetzt, keine IP‑Adressen protokolliert und keine Nutzerprofile erstellt.</p>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-6">
    <h3>Welche Daten wir verarbeiten – und warum nicht</h3>
    <div class="group relative bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-lime-400 dark:hover:border-lime-600 hover:shadow-lg hover:shadow-lime-500/5 transition-all duration-300">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-slate-700 dark:text-slate-300"><th class="p-4 text-left">Kategorie</th><th class="p-4 text-left">Wird gespeichert?</th><th class="p-4 text-left">Begründung</th></tr>
        </thead>
        <tbody class="divide-y text-slate-600 dark:text-slate-400">
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Hochgeladene Bilder</td><td class="p-4 text-slate-700 dark:text-slate-300"><span class="text-red-600">✗ Nein</span></td><td class="p-4 text-slate-700 dark:text-slate-300">Alles lokal. Kein Upload, kein Speicher auf unseren Servern.</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Bearbeitungsergebnisse</td><td class="p-4 text-slate-700 dark:text-slate-300"><span class="text-red-600">✗ Nein</span></td><td class="p-4 text-slate-700 dark:text-slate-300">Du lädst direkt herunter, ohne Serverzwischenschritt.</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Nutzungsstatistiken</td><td class="p-4 text-slate-700 dark:text-slate-300"><span class="text-red-600">✗ Nein</span></td><td class="p-4 text-slate-700 dark:text-slate-300">Keine externen Analysewerkzeuge (kein Google Analytics, kein Matomo).</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">Cookies</td><td class="p-4 text-slate-700 dark:text-slate-300"><span class="text-green-600">✓ Ja</span></td><td class="p-4 text-slate-700 dark:text-slate-300">Ausschließlich ein funktionaler Cookie zur Speicherung deiner Spracheinstellung (Local Storage). Kein Tracking.</td></tr>
          <tr><td class="p-4 text-slate-700 dark:text-slate-300">E‑Mail‑Kontakt</td><td class="p-4 text-slate-700 dark:text-slate-300"><span class="text-yellow-600">⚠️ Nur bei Support</span></td><td class="p-4 text-slate-700 dark:text-slate-300">Wenn du uns kontaktierst, wird deine E‑Mail‑Adresse zur Beantwortung verwendet und anschließend gelöscht (max. 90 Tage).</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-6">
    <h3>Weitere Datenschutzinformationen</h3>
    <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm border-amber-200">
      <ul class="list-disc list-inside space-y-2 text-sm text-amber-800 dark:text-amber-200">
        <li>Unsere Website wird über ein Content Delivery Network (CDN) ausgeliefert, das temporär die IP‑Adresse zur Auslieferung der Seiten benötigt. Diese Protokolle werden nicht mit Bilddaten verknüpft und nach spätestens 24 Stunden gelöscht.</li>
        <li>Für die Hintergrundentfernung wird ein KI‑Modell in deinen Browser heruntergeladen. Es ist vollständig lokal und kommuniziert nicht mit externen Servern.</li>
        <li>Wir hosten keine Social‑Media‑Plugins oder eingebetteten Inhalte, die dein Surfverhalten nachverfolgen könnten.</li>
        <li>Solltest du Fragen zur Datenverarbeitung haben, schreibe uns an: usvisaphotoai@gmail.com</li>
      </ul>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-4">
    <p>Verantwortlicher im Sinne der DSGVO:<br/>photoresizer (Einzelunternehmen), Musterstraße 1, 10115 Berlin.<br/>Kontakt: usvisaphotoai@gmail.com</p>
    <p class="text-sm text-slate-500">Diese Datenschutzerklärung wird regelmäßig aktualisiert. Stand: Juni 2026.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Wird mein Bild an einen Server gesendet, wenn ich den Hintergrund entferne?",
        answer:
          "Nein, die KI läuft komplett im Browser. Dein Bild wird niemals über das Internet gesendet. Du kannst es überprüfen, indem du die Entwicklertools öffnest und den Netzwerk‑Tab beobachtest – es erfolgt kein Bild‑Upload.",
      },
      {
        question: "Verwendet ihr Cookies für Werbezwecke?",
        answer:
          "Wir setzen keine Marketing‑ oder Analyse‑Cookies. Der einzige Cookie ist eine technisch notwendige Einstellung für die Sprache. Dein Surfverhalten wird nicht aufgezeichnet.",
      },
      {
        question:
          "Kann ich den Dienst nutzen, ohne mit meiner IP‑Adresse erkannt zu werden?",
        answer:
          "Da alle Bearbeitungen lokal stattfinden, ist deine IP‑Adresse nur für die Auslieferung der Webseite notwendig. Du kannst zusätzlich ein VPN nutzen, ohne dass die Funktion eingeschränkt ist.",
      },
      {
        question: "Speichert ihr Passbilder für spätere Abrufe?",
        answer:
          "Auf keinen Fall. Selbst wenn du denselben Browser verwendest, werden keine Passbilder zwischengespeichert. Jede Session startet mit einem leeren Editor.",
      },
      {
        question: "Werden Metadaten aus meinen Bildern ausgelesen?",
        answer:
          "EXIF‑Daten wie GPS‑Koordinaten werden standardmäßig beim Speichern entfernt, es sei denn, du wünscht ausdrücklich deren Erhalt. Auch dies geschieht lokal, ohne dass die Metadaten an uns übermittelt werden.",
      },
    ],
  },
];

import { SeoPage } from '../lib/types/seo';

export const frPages: SeoPage[] = [
  {
    slug: 'redimensionner-photo',
    translationKey: 'photo-resizer',
    metaTitle: "Redimensionner une Photo en Ligne Gratuit | PhotoResizer",
    metaDescription: "Redimensionnez vos photos en ligne gratuitement, sans perte de qualité. Changez les dimensions en pixels ou en cm en quelques secondes.",
    h1: "Redimensionner une photo en ligne, gratuitement",
    sections: [
      {
        heading: "Modifiez la taille de vos photos en 3 clics",
        content: `<p class="mt-4">Que vous ayez besoin d'une photo plus petite pour un formulaire en ligne ou d'une image agrandie pour l'impression, notre outil vous permet de <strong>redimensionner une photo</strong> instantanément, sans installer de logiciel et sans perte de netteté.</p>
<div class="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
  <div class="p-5 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/10 rounded-r-xl">
    <h3 class="font-bold text-indigo-900 dark:text-indigo-400 mb-1">Gratuit et illimité</h3>
    <p class="text-sm text-indigo-800 dark:text-indigo-300/80">Redimensionnez autant de photos que vous voulez, sans limite quotidienne ni filigrane.</p>
  </div>
  <div class="p-5 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 rounded-r-xl">
    <h3 class="font-bold text-emerald-900 dark:text-emerald-400 mb-1">Qualité préservée</h3>
    <p class="text-sm text-emerald-800 dark:text-emerald-300/80">Notre algorithme conserve la netteté de l'image même après réduction ou agrandissement.</p>
  </div>
  <div class="p-5 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/10 rounded-r-xl">
    <h3 class="font-bold text-amber-900 dark:text-amber-400 mb-1">100% sécurisé</h3>
    <p class="text-sm text-amber-800 dark:text-amber-300/80">Le traitement se fait dans votre navigateur : vos photos ne quittent jamais votre appareil.</p>
  </div>
</div>`
      },
      {
        heading: "Comment redimensionner une photo",
        content: `<ol class="space-y-3 mt-4 not-prose">
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">1</span><p>Importez votre photo (JPG, PNG, WEBP...) par glisser-déposer ou depuis votre appareil.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">2</span><p>Choisissez les nouvelles dimensions en pixels, en centimètres ou en pourcentage.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">3</span><p>Téléchargez votre photo redimensionnée, prête à être utilisée ou partagée.</p></li>
</ol>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Puis-je redimensionner une photo sans perdre en qualité ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Oui, notre outil utilise un redimensionnement optimisé qui limite la perte de détails, notamment lors d'une réduction de taille.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Est-ce compatible avec mon téléphone ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Oui, l'outil fonctionne directement dans le navigateur, sur ordinateur, tablette ou smartphone.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 2. redimensionner image
  {
    slug: 'redimensionner-image',
    translationKey: 'photo-resizer',
    metaTitle: "Redimensionner une Image en Ligne | Gratuit & Rapide",
    metaDescription: "Modifiez la taille de vos images en ligne facilement : JPG, PNG, WEBP. Outil gratuit, rapide et 100% sécurisé, sans installation.",
    h1: "Redimensionner une image facilement",
    sections: [
      {
        heading: "Un outil simple pour tous vos fichiers image",
        content: `<p class="mt-4">Bannières, visuels réseaux sociaux, illustrations de blog ou photos personnelles : <strong>redimensionner une image</strong> ne devrait jamais être compliqué. Notre outil s'adapte à tous les formats courants (JPG, PNG, WEBP, GIF) et ajuste les dimensions en un instant.</p>
<div class="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
  <div class="p-5 border-l-4 border-sky-500 bg-sky-50 dark:bg-sky-900/10 rounded-r-xl">
    <h3 class="font-bold text-sky-900 dark:text-sky-400 mb-1">Tous formats acceptés</h3>
    <p class="text-sm text-sky-800 dark:text-sky-300/80">JPG, PNG, WEBP, GIF, BMP : importez votre image sans conversion préalable.</p>
  </div>
  <div class="p-5 border-l-4 border-rose-500 bg-rose-50 dark:bg-rose-900/10 rounded-r-xl">
    <h3 class="font-bold text-rose-900 dark:text-rose-400 mb-1">Dimensions personnalisées</h3>
    <p class="text-sm text-rose-800 dark:text-rose-300/80">Entrez une largeur et une hauteur précises, ou choisissez un format prédéfini (carré, bannière, portrait...).</p>
  </div>
</div>`
      },
      {
        heading: "Pourquoi redimensionner vos images ?",
        content: `<ul class="mt-4 space-y-2 list-none not-prose">
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Respecter les dimensions exigées par un site, une plateforme ou un formulaire.</span></li>
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Accélérer le chargement d'une page web grâce à des images plus légères.</span></li>
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Adapter un visuel à un cadre, une bannière publicitaire ou un réseau social.</span></li>
</ul>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Puis-je conserver les proportions de mon image ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Oui, un verrouillage du ratio est disponible pour éviter toute déformation lors du redimensionnement.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Combien d'images puis-je traiter ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Il n'y a aucune limite : l'outil est entièrement gratuit et utilisable autant de fois que nécessaire.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 3. redimensionner photo en ligne
  {
    slug: 'redimensionner-photo-en-ligne',
    translationKey: 'photo-resizer',
    metaTitle: "Redimensionner Photo en Ligne Gratuitement | Sans Logiciel",
    metaDescription: "Redimensionnez vos photos directement en ligne, sans télécharger de logiciel. Outil gratuit et sécurisé, compatible mobile et ordinateur.",
    h1: "Redimensionner une photo en ligne, sans logiciel",
    sections: [
      {
        heading: "Aucune installation nécessaire",
        content: `<p class="mt-4">Fini les logiciels lourds à installer : redimensionnez une photo <strong>directement en ligne</strong>, depuis votre navigateur, en quelques secondes. Aucune inscription, aucun logiciel, aucune attente.</p>
<div class="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
  <div class="p-5 border-l-4 border-violet-500 bg-violet-50 dark:bg-violet-900/10 rounded-r-xl">
    <h3 class="font-bold text-violet-900 dark:text-violet-400 mb-1">Sans inscription</h3>
    <p class="text-sm text-violet-800 dark:text-violet-300/80">Aucun compte requis pour commencer à redimensionner vos photos.</p>
  </div>
  <div class="p-5 border-l-4 border-teal-500 bg-teal-50 dark:bg-teal-900/10 rounded-r-xl">
    <h3 class="font-bold text-teal-900 dark:text-teal-400 mb-1">Sur tous les appareils</h3>
    <p class="text-sm text-teal-800 dark:text-teal-300/80">Compatible Windows, Mac, Linux, iOS et Android, via le navigateur.</p>
  </div>
  <div class="p-5 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/10 rounded-r-xl">
    <h3 class="font-bold text-orange-900 dark:text-orange-400 mb-1">Résultat instantané</h3>
    <p class="text-sm text-orange-800 dark:text-orange-300/80">Le traitement se fait localement : pas de temps d'attente lié à un envoi serveur.</p>
  </div>
</div>`
      },
      {
        heading: "Les étapes en un coup d'œil",
        content: `<ol class="space-y-3 mt-4 not-prose">
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">1</span><p>Glissez votre photo dans la zone prévue à cet effet.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">2</span><p>Ajustez la largeur et la hauteur selon vos besoins.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">3</span><p>Cliquez sur télécharger : votre photo redimensionnée est prête.</p></li>
</ol>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Ai-je besoin d'installer une extension ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Non, aucune extension ni logiciel n'est nécessaire. Tout se passe dans la page web.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Mes photos sont-elles envoyées sur un serveur ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Non, le traitement est réalisé localement dans votre navigateur, vos fichiers restent sur votre appareil.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 4. réduire taille photo
  {
    slug: 'reduire-taille-photo',
    translationKey: 'photo-resizer',
    metaTitle: "Réduire la Taille d'une Photo en Ligne | Gratuit",
    metaDescription: "Réduisez le poids et les dimensions de vos photos en quelques clics. Idéal pour l'envoi par email ou la publication en ligne.",
    h1: "Réduire la taille d'une photo rapidement",
    sections: [
      {
        heading: "Photos trop lourdes pour un envoi ? Réglez le problème en 30 secondes",
        content: `<p class="mt-4">Un email qui refuse une pièce jointe, un formulaire qui limite le poids des fichiers, un site qui exige une image plus petite : <strong>réduire la taille d'une photo</strong> est souvent nécessaire au quotidien. Notre outil ajuste à la fois les dimensions (en pixels) et le poids (en Ko/Mo) de vos fichiers.</p>
<div class="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
  <div class="p-5 border-l-4 border-cyan-500 bg-cyan-50 dark:bg-cyan-900/10 rounded-r-xl">
    <h3 class="font-bold text-cyan-900 dark:text-cyan-400 mb-1">Réduction des dimensions</h3>
    <p class="text-sm text-cyan-800 dark:text-cyan-300/80">Diminuez la largeur et la hauteur en pixels pour respecter une limite imposée.</p>
  </div>
  <div class="p-5 border-l-4 border-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-900/10 rounded-r-xl">
    <h3 class="font-bold text-fuchsia-900 dark:text-fuchsia-400 mb-1">Réduction du poids</h3>
    <p class="text-sm text-fuchsia-800 dark:text-fuchsia-300/80">Diminuez le poids en Mo pour respecter une limite d'envoi (email, formulaire, upload).</p>
  </div>
</div>`
      },
      {
        heading: "Cas d'usage courants",
        content: `<ul class="mt-4 space-y-2 list-none not-prose">
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Joindre une photo à un email sans dépasser la limite de la messagerie.</span></li>
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Respecter le poids maximal demandé par un formulaire administratif en ligne.</span></li>
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Libérer de l'espace de stockage sur votre téléphone ou votre ordinateur.</span></li>
</ul>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Quelle est la différence entre réduire la taille et compresser ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Réduire la taille modifie les dimensions (largeur/hauteur), tandis que compresser diminue le poids du fichier sans forcément changer ses dimensions. Notre outil permet de faire les deux.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Puis-je viser un poids précis, par exemple 100 Ko ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Oui, vous pouvez ajuster le niveau de compression jusqu'à atteindre le poids souhaité.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 5. réduire taille image
  {
    slug: 'reduire-taille-image',
    translationKey: 'photo-resizer',
    metaTitle: "Réduire la Taille d'une Image en Ligne | Outil Gratuit",
    metaDescription: "Diminuez le poids de vos images (Ko/Mo) sans perdre en qualité visuelle. Traitement local, rapide et gratuit.",
    h1: "Réduire la taille d'une image en quelques secondes",
    sections: [
      {
        heading: "Des images plus légères, sans compromis sur la qualité",
        content: `<p class="mt-4">Que ce soit pour un site internet, une boutique en ligne ou un simple partage, <strong>réduire la taille d'une image</strong> permet de gagner en rapidité sans sacrifier son rendu visuel. Notre outil analyse votre image et applique le niveau de réduction le plus adapté.</p>
<div class="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
  <div class="p-5 border-l-4 border-lime-500 bg-lime-50 dark:bg-lime-900/10 rounded-r-xl">
    <h3 class="font-bold text-lime-900 dark:text-lime-400 mb-1">Poids réduit</h3>
    <p class="text-sm text-lime-800 dark:text-lime-300/80">Divisez le poids de vos fichiers par 2, 5 ou 10 selon le niveau choisi.</p>
  </div>
  <div class="p-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-xl">
    <h3 class="font-bold text-blue-900 dark:text-blue-400 mb-1">Rendu conservé</h3>
    <p class="text-sm text-blue-800 dark:text-blue-300/80">Un aperçu avant/après vous permet de vérifier le résultat avant téléchargement.</p>
  </div>
  <div class="p-5 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 rounded-r-xl">
    <h3 class="font-bold text-red-900 dark:text-red-400 mb-1">Traitement en lot</h3>
    <p class="text-sm text-red-800 dark:text-red-300/80">Réduisez plusieurs images à la suite sans repartir de zéro à chaque fois.</p>
  </div>
</div>`
      },
      {
        heading: "Pourquoi la taille d'une image compte",
        content: `<p class="mt-4">Une image trop lourde ralentit le chargement d'un site, consomme davantage de données mobiles et peut être refusée par certains formulaires. En réduisant intelligemment vos images, vous améliorez à la fois l'expérience utilisateur et le référencement de vos pages.</p>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Est-ce que la qualité visuelle est affectée ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Une légère perte peut apparaître à très haut niveau de réduction, mais reste imperceptible à l'œil nu dans la majorité des cas.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Quels formats sont pris en charge ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">JPG, PNG et WEBP sont pris en charge, avec un choix de format de sortie.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 6. compresser photo
  {
    slug: 'compresser-photo',
    translationKey: 'compress-image',
    metaTitle: "Compresser une Photo en Ligne | Réduire le Poids",
    metaDescription: "Compressez vos photos JPG, PNG ou WEBP sans perte visible de qualité. Réduisez le poids de vos fichiers pour le web ou l'email.",
    h1: "Compresser une photo sans perdre en qualité",
    sections: [
      {
        heading: "La compression intelligente au service de vos photos",
        content: `<p class="mt-4"><strong>Compresser une photo</strong> permet de réduire son poids en Ko ou en Mo tout en conservant un rendu visuel proche de l'original. Notre outil applique un algorithme de compression adapté à chaque type d'image (portrait, paysage, illustration).</p>
<div class="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
  <div class="p-5 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/10 rounded-r-xl">
    <h3 class="font-bold text-purple-900 dark:text-purple-400 mb-1">Curseur de qualité</h3>
    <p class="text-sm text-purple-800 dark:text-purple-300/80">Ajustez le taux de compression et visualisez le poids final en temps réel.</p>
  </div>
  <div class="p-5 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 rounded-r-xl">
    <h3 class="font-bold text-yellow-900 dark:text-yellow-400 mb-1">Format au choix</h3>
    <p class="text-sm text-yellow-800 dark:text-yellow-300/80">Exportez en JPG, PNG ou WEBP selon votre besoin d'usage.</p>
  </div>
</div>`
      },
      {
        heading: "Quand compresser une photo ?",
        content: `<ul class="mt-4 space-y-2 list-none not-prose">
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Avant de publier une photo sur un site pour accélérer son chargement.</span></li>
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Pour envoyer plusieurs photos par email sans dépasser la limite de pièces jointes.</span></li>
  <li class="flex items-start gap-2"><svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>Pour libérer de l'espace de stockage sur un cloud ou un smartphone.</span></li>
</ul>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">La compression est-elle réversible ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Non, la compression avec perte réduit définitivement certaines données. Conservez toujours l'original si besoin.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Puis-je compresser plusieurs photos à la fois ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Oui, l'outil prend en charge le traitement de plusieurs fichiers successivement.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 7. compresser image
  {
    slug: 'compresser-image',
    translationKey: 'compress-image',
    metaTitle: "Compresser une Image en Ligne | Gratuit et Rapide",
    metaDescription: "Réduisez le poids de vos images en quelques secondes. Compression intelligente pour un site web plus rapide.",
    h1: "Compresser une image en ligne",
    sections: [
      {
        heading: "Des images légères pour un web plus rapide",
        content: `<p class="mt-4">Les images représentent souvent la majorité du poids d'une page web. <strong>Compresser une image</strong> avant publication améliore la vitesse de chargement, l'expérience utilisateur et le classement dans les moteurs de recherche.</p>
<div class="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
  <div class="p-5 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/10 rounded-r-xl">
    <h3 class="font-bold text-indigo-900 dark:text-indigo-400 mb-1">Web plus rapide</h3>
    <p class="text-sm text-indigo-800 dark:text-indigo-300/80">Des images plus légères accélèrent le temps de chargement des pages.</p>
  </div>
  <div class="p-5 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 rounded-r-xl">
    <h3 class="font-bold text-emerald-900 dark:text-emerald-400 mb-1">Compression sans perte visible</h3>
    <p class="text-sm text-emerald-800 dark:text-emerald-300/80">Le rendu visuel reste proche de l'original à l'écran.</p>
  </div>
  <div class="p-5 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/10 rounded-r-xl">
    <h3 class="font-bold text-amber-900 dark:text-amber-400 mb-1">Gratuit et illimité</h3>
    <p class="text-sm text-amber-800 dark:text-amber-300/80">Compressez toutes vos images sans limite de nombre.</p>
  </div>
</div>`
      },
      {
        heading: "Comment ça fonctionne",
        content: `<ol class="space-y-3 mt-4 not-prose">
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">1</span><p>Importez votre image dans l'outil.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">2</span><p>Ajustez le niveau de compression selon le poids souhaité.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">3</span><p>Téléchargez votre image compressée, prête à être publiée.</p></li>
</ol>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Quel format donne le meilleur taux de compression ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Le WEBP offre généralement le meilleur rapport qualité/poids, suivi du JPG pour les photos.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Mes images sont-elles stockées quelque part ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Non, tout le traitement se fait localement dans votre navigateur, sans envoi vers un serveur.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 8. optimiser photo
  {
    slug: 'optimiser-photo',
    translationKey: 'compress-image',
    metaTitle: "Optimiser une Photo pour le Web | Outil Gratuit en Ligne",
    metaDescription: "Optimisez vos photos pour le web : poids réduit, qualité préservée, format adapté. Accélérez votre site en quelques clics.",
    h1: "Optimiser vos photos pour le web",
    sections: [
      {
        heading: "Optimisation complète : poids, format et dimensions",
        content: `<p class="mt-4"><strong>Optimiser une photo</strong> va plus loin qu'une simple compression : il s'agit d'ajuster à la fois le format, les dimensions et le poids du fichier pour un usage précis (site web, réseau social, impression). Notre outil combine ces trois réglages en une seule opération.</p>
<div class="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
  <div class="p-5 border-l-4 border-teal-500 bg-teal-50 dark:bg-teal-900/10 rounded-r-xl">
    <h3 class="font-bold text-teal-900 dark:text-teal-400 mb-1">Format adapté</h3>
    <p class="text-sm text-teal-800 dark:text-teal-300/80">Conversion automatique vers le format le plus performant (WEBP, JPG...).</p>
  </div>
  <div class="p-5 border-l-4 border-rose-500 bg-rose-50 dark:bg-rose-900/10 rounded-r-xl">
    <h3 class="font-bold text-rose-900 dark:text-rose-400 mb-1">Dimensions ajustées</h3>
    <p class="text-sm text-rose-800 dark:text-rose-300/80">Redimensionnement à la taille exacte nécessaire, sans pixels superflus.</p>
  </div>
  <div class="p-5 border-l-4 border-violet-500 bg-violet-50 dark:bg-violet-900/10 rounded-r-xl">
    <h3 class="font-bold text-violet-900 dark:text-violet-400 mb-1">Poids minimisé</h3>
    <p class="text-sm text-violet-800 dark:text-violet-300/80">Compression fine pour un poids minimal à qualité constante.</p>
  </div>
</div>`
      },
      {
        heading: "Pourquoi optimiser vos photos avant publication",
        content: `<p class="mt-4">Un site web plus rapide améliore l'expérience visiteur, réduit le taux de rebond et favorise un meilleur positionnement dans les résultats de recherche. Optimiser chaque photo avant sa mise en ligne est une étape simple mais souvent négligée.</p>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">L'optimisation modifie-t-elle mes photos de façon permanente ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Le fichier optimisé est un nouveau fichier téléchargé séparément ; votre photo d'origine reste inchangée sur votre appareil.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Est-ce adapté pour un usage professionnel (e-commerce, blog) ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Oui, l'outil convient parfaitement à un usage régulier pour des fiches produits, articles de blog ou visuels de réseaux sociaux.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 9. photo identité en ligne
  {
    slug: 'photo-identite-en-ligne',
    translationKey: 'passport-photo-maker',
    metaTitle: "Photo d'Identité en Ligne | Format Officiel 35x45mm",
    metaDescription: "Créez votre photo d'identité en ligne conforme aux normes françaises (35x45mm). Gratuit, rapide, prêt à imprimer ou à envoyer en ligne.",
    h1: "Créez votre photo d'identité en ligne",
    sections: [
      {
        heading: "Une photo d'identité conforme, sans vous déplacer",
        content: `<p class="mt-4">Créez votre <strong>photo d'identité en ligne</strong> au format officiel français (35 x 45 mm), directement depuis une photo prise avec votre téléphone. Notre outil recadre et ajuste automatiquement votre photo pour respecter les normes en vigueur.</p>
<div class="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-xl mt-6 not-prose">
  <h3 class="text-lg font-bold text-blue-900 dark:text-blue-400 mb-2">Normes respectées</h3>
  <ul class="text-blue-800 dark:text-blue-300/80 text-sm space-y-1 list-disc list-inside">
    <li>Format 35 x 45 mm, visage centré</li>
    <li>Fond uni, clair, sans ombre</li>
    <li>Expression neutre, regard face à l'objectif</li>
    <li>Compatible passeport, CNI et titres de séjour</li>
  </ul>
</div>`
      },
      {
        heading: "Comment ça marche",
        content: `<ol class="space-y-3 mt-4 not-prose">
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">1</span><p>Prenez une photo de face, sur fond clair et uni, dans un endroit bien éclairé.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">2</span><p>Importez-la dans l'outil : le recadrage au format 35x45mm se fait automatiquement.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">3</span><p>Téléchargez votre photo d'identité, prête à imprimer ou à téléverser sur un formulaire officiel.</p></li>
</ol>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Ma photo est-elle acceptée par les administrations françaises ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">L'outil applique le format standard 35x45mm utilisé en France. Il reste recommandé de vérifier les exigences spécifiques de l'administration concernée (éclairage, fond, expression).</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Puis-je l'imprimer moi-même ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Oui, le fichier téléchargé est prêt à l'impression chez un photographe, en pharmacie ou sur une imprimante personnelle.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 10. photo permis de conduire
  {
    slug: 'photo-permis-de-conduire',
    translationKey: 'passport-photo-maker',
    metaTitle: "Photo pour Permis de Conduire en Ligne | Format ANTS",
    metaDescription: "Générez une photo conforme pour votre permis de conduire (format ANTS 35x45mm). Simple, rapide et gratuit, depuis votre navigateur.",
    h1: "Photo pour permis de conduire aux normes",
    sections: [
      {
        heading: "Une photo conforme pour votre dossier ANTS",
        content: `<p class="mt-4">La demande de <strong>permis de conduire</strong> auprès de l'ANTS nécessite une photo d'identité récente au format numérique conforme. Notre outil ajuste votre photo pour respecter le cadrage et les dimensions attendues, avant de la déposer sur le téléservice.</p>
<div class="p-6 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 rounded-r-xl mt-6 not-prose">
  <h3 class="text-lg font-bold text-emerald-900 dark:text-emerald-400 mb-2">Points de vigilance</h3>
  <ul class="text-emerald-800 dark:text-emerald-300/80 text-sm space-y-1 list-disc list-inside">
    <li>Format 35 x 45 mm avec le visage bien centré</li>
    <li>Fond neutre et uni, sans reflet</li>
    <li>Photo récente (moins de 6 mois), tête nue</li>
    <li>Fichier numérique aux dimensions demandées par l'ANTS</li>
  </ul>
</div>`
      },
      {
        heading: "Comment préparer votre photo",
        content: `<ol class="space-y-3 mt-4 not-prose">
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">1</span><p>Prenez une photo récente, de face, avec un éclairage homogène.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">2</span><p>Importez-la dans l'outil pour un recadrage automatique au bon format.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">3</span><p>Téléchargez le fichier et déposez-le sur votre dossier permis de conduire en ligne.</p></li>
</ol>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Puis-je utiliser une photo prise avec mon smartphone ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Oui, à condition que la photo respecte les critères de fond, de cadrage et de netteté requis.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">L'outil garantit-il l'acceptation par l'ANTS ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">L'outil applique le format standard demandé, mais l'acceptation finale dépend également de la qualité de la photo d'origine et des critères propres à l'ANTS.</p>
  </div>
</div>`
      }
    ]
  },
 
  // 11. photo carte d'identité
  {
    slug: 'photo-carte-identite',
    translationKey: 'passport-photo-maker',
    metaTitle: "Photo pour Carte d'Identité en Ligne | Format Officiel",
    metaDescription: "Réalisez votre photo pour carte nationale d'identité en ligne, conforme aux normes ANTS. Gratuit et prêt en quelques secondes.",
    h1: "Photo pour carte d'identité conforme aux normes",
    sections: [
      {
        heading: "Votre photo pour la carte nationale d'identité, en ligne",
        content: `<p class="mt-4">La demande de <strong>carte d'identité</strong> exige une photo récente respectant un format strict. Notre outil recadre automatiquement votre photo au standard 35 x 45 mm utilisé par les mairies et le téléservice de l'ANTS.</p>
<div class="p-6 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/10 rounded-r-xl mt-6 not-prose">
  <h3 class="text-lg font-bold text-indigo-900 dark:text-indigo-400 mb-2">Critères à respecter</h3>
  <ul class="text-indigo-800 dark:text-indigo-300/80 text-sm space-y-1 list-disc list-inside">
    <li>Format 35 x 45 mm, tête nue et visage dégagé</li>
    <li>Fond clair, uni et sans motif</li>
    <li>Expression neutre, bouche fermée</li>
    <li>Photo en couleur, récente et nette</li>
  </ul>
</div>`
      },
      {
        heading: "Les étapes pour votre photo de carte d'identité",
        content: `<ol class="space-y-3 mt-4 not-prose">
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">1</span><p>Prenez votre photo devant un fond uni et clair, en lumière naturelle.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">2</span><p>Importez la photo : le recadrage au format officiel se fait automatiquement.</p></li>
  <li class="flex gap-3"><span class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900">3</span><p>Téléchargez le fichier final, prêt pour votre dossier en mairie ou en ligne.</p></li>
</ol>`
      },
      {
        heading: "Questions fréquentes",
        content: `<div class="space-y-3 mt-4 not-prose">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Puis-je utiliser la même photo pour ma carte d'identité et mon passeport ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Le format 35x45mm est commun aux deux documents, mais chaque photo doit être récente et conforme aux critères en vigueur au moment de la demande.</p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
    <p class="font-semibold">Dois-je fournir un fichier numérique ou une photo papier ?</p>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Selon la démarche (mairie ou pré-demande en ligne), un fichier numérique ou un tirage papier peut être demandé. Notre outil produit un fichier numérique exploitable dans les deux cas après impression si nécessaire.</p>
  </div>
</div>`
      }
    ]
  },
  {
    slug: 'contact',
    translationKey: 'contact',
    metaTitle: 'Contactez-nous | PhotoResizer Online',
    metaDescription: 'Contactez notre équipe pour toute assistance ou demande de renseignements.',
    h1: 'Contactez-nous',
    sections: [
      {
        heading: 'Nous joindre',
        content: `<div class="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center not-prose mt-6">
  <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
  </div>
  <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Contactez-nous</h3>
  <p class="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">Nous répondons généralement à toutes les demandes d'assistance dans les 24 à 48 heures. Veuillez inclure les détails de votre problème.</p>
  <a href="mailto:usvisaphotoai@gmail.com" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors">
    usvisaphotoai@gmail.com
  </a>
</div>`
      }
    ]
  },
  {
    slug: 'conditions',
      translationKey: 'terms',
    metaTitle: 'Conditions générales | photoresizer',
    metaDescription: 'Consultez les conditions générales d\'utilisation de nos outils d\'édition de photos en ligne gratuites.',
    h1: 'Conditions générales',
    sections: [
      {
        heading: 'Conditions d\'utilisation',
        content: `<div class="space-y-6 mt-6 not-prose">
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">1</span>
      Acceptation des conditions
    </h3>
    <p class="text-slate-600 dark:text-slate-400 ml-10">En accédant et en utilisant photoresizer, vous acceptez d'être lié par les conditions générales de cet accord.</p>
  </div>
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">2</span>
      Disponibilité du service
    </h3>
    <p class="text-slate-600 dark:text-slate-400 ml-10">Nos outils sont fournis "tels quels". Nous nous réservons le droit de modifier ou d'interrompre le service à tout moment.</p>
  </div>
</div>`
      }
    ]
  },
  {
    slug: 'confidentialite',
      translationKey: 'privacy',
    metaTitle: 'Politique de confidentialité | photoresizer',
    metaDescription: 'Notre politique de confidentialité détaillant la façon dont nous traitons vos données.',
    h1: 'Politique de confidentialité',
    sections: [
      {
        heading: 'Protection des données',
        content: `<div class="space-y-6 mt-6 not-prose">
  <div class="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 rounded-r-xl">
    <h3 class="text-lg font-bold text-green-900 dark:text-green-400 mb-2 flex items-center gap-2">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z"/></svg>
      100% Traitement local
    </h3>
    <p class="text-green-800 dark:text-green-300/80">Toutes les manipulations d'images se font en toute sécurité dans votre navigateur local. <strong>Vos images ne sont jamais téléchargées sur un serveur.</strong></p>
  </div>
  <div class="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-xl">
    <h3 class="text-lg font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      Aucune collecte de données
    </h3>
    <p class="text-blue-800 dark:text-blue-300/80">Nous ne suivons, ne collectons ni ne stockons aucune information personnelle. Il n'y a pas de cookies de suivi liés à vos fichiers multimédias.</p>
  </div>
</div>`
      }
    ]
  }
];

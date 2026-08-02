import { SeoPage } from "../lib/types/seo";

export const ptPages: SeoPage[] = [
 {
    slug: "comprimir-foto",
    translationKey: "compress-image",
    metaTitle: "Comprimir Foto Online Grátis — Reduza o Tamanho em KB ou MB",
    metaDescription:
      "Comprima sua foto online sem perder qualidade. Reduza o tamanho em KB ou MB para enviar por e-mail, WhatsApp ou formulários. Grátis e direto no navegador.",
    h1: "Comprimir Foto Online — Reduza o Tamanho Sem Perder Qualidade",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Diminua o peso da sua foto em segundos. Escolha o tamanho final em KB ou MB e baixe o arquivo pronto para enviar.",
    sections: [
      {
        heading: "Por que comprimir uma foto antes de enviar",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Fotos tiradas com câmeras modernas e celulares costumam pesar vários megabytes. Esse tamanho dificulta o envio por e-mail, o upload em formulários com limite de KB e até o carregamento de páginas na internet. Comprimir a foto reduz o peso do arquivo mantendo os detalhes visuais, para que ela abra rápido e passe em qualquer limite de tamanho.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Quando a compressão é necessária</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Situação</th>
            <th class="py-2">Limite comum</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Anexo de e-mail</td><td class="py-2">até 25 MB por mensagem</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Formulários de concursos e provas</td><td class="py-2">geralmente entre 100 KB e 500 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Sites e lojas virtuais</td><td class="py-2">abaixo de 200 KB para carregar rápido</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Envio pelo WhatsApp sem perda extra</td><td class="py-2">enviar como documento em vez de imagem</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Escolha o tamanho exato</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Digite o valor em KB ou MB desejado e a ferramenta ajusta a compressão automaticamente.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem perda visível</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">O algoritmo preserva nitidez e cores enquanto remove dados redundantes do arquivo.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Processamento local</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">A foto nunca sai do seu navegador, garantindo total privacidade.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como comprimir sua foto em 3 passos",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie o arquivo:</strong> Arraste a foto ou selecione-a do seu celular ou computador.</li>
    <li><strong class="text-slate-900 dark:text-white">Defina o tamanho final:</strong> Informe o limite em KB ou MB exigido pelo site ou formulário.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o resultado:</strong> A ferramenta gera o arquivo comprimido pronto para download, sem instalar programas.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Comprimir a foto reduz a qualidade da imagem?",
        answer:
          "Uma leve compressão quase não altera a qualidade visível. É possível reduzir bastante o peso do arquivo mantendo nitidez suficiente para telas e impressões comuns.",
      },
      {
        question: "Qual a diferença entre comprimir e redimensionar?",
        answer:
          "Comprimir reduz o peso do arquivo mantendo as dimensões da imagem. Redimensionar altera a largura e a altura em pixels. As duas técnicas podem ser usadas juntas para atingir um tamanho específico em KB.",
      },
      {
        question: "Posso escolher o tamanho exato em KB?",
        answer:
          "Sim, basta informar o valor desejado, como 200 KB ou 500 KB, e a ferramenta ajusta a compressão automaticamente até chegar perto desse limite.",
      },
      {
        question: "A ferramenta funciona no celular?",
        answer:
          "Sim, funciona em qualquer navegador de celular, tablet ou computador, sem necessidade de aplicativo.",
      },
      {
        question: "Meus arquivos ficam salvos em algum servidor?",
        answer:
          "Não. Todo o processamento acontece localmente no seu navegador, e a foto não é enviada para nenhum servidor externo.",
      },
    ],
  },
 
  {
    slug: "comprimir-imagem",
    translationKey: "compress-image",
    metaTitle: "Comprimir Imagem Online Grátis — JPG, PNG e WEBP",
    metaDescription:
      "Comprima imagens JPG, PNG e WEBP online sem perder qualidade. Reduza o tamanho do arquivo em KB ou MB gratuitamente, direto no navegador.",
    h1: "Comprimir Imagem Online — JPG, PNG e WEBP",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Reduza o peso de qualquer imagem mantendo a qualidade visual. Ideal para sites, e-mails e uploads com limite de tamanho.",
    sections: [
      {
        heading: "Compressão de imagem: o que muda em cada formato",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Cada formato de imagem se comporta de um jeito diferente durante a compressão. Entender essa diferença ajuda a escolher a melhor opção antes de reduzir o tamanho do arquivo.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Formatos suportados</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Formato</th>
            <th class="py-2">Melhor uso</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">JPG</td><td class="py-2">Fotos e imagens com muitas cores, compressão com perda mínima</td></tr>
          <tr><td class="py-2 pr-4 font-medium">PNG</td><td class="py-2">Imagens com fundo transparente ou textos, compressão sem perda</td></tr>
          <tr><td class="py-2 pr-4 font-medium">WEBP</td><td class="py-2">Sites modernos, arquivos menores com qualidade equivalente</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Suporte a vários formatos</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Envie JPG, PNG ou WEBP e receba o arquivo comprimido no mesmo formato.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Controle de qualidade</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Ajuste o nível de compressão manualmente ou defina um tamanho final em KB.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Lote de imagens</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Comprima várias imagens de uma vez e baixe todas juntas.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Passo a passo para comprimir uma imagem",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Selecione a imagem:</strong> Escolha um ou vários arquivos JPG, PNG ou WEBP.</li>
    <li><strong class="text-slate-900 dark:text-white">Ajuste a compressão:</strong> Use o controle deslizante ou informe o tamanho final desejado.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o arquivo:</strong> Faça o download da imagem comprimida em poucos segundos.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Qual formato comprime melhor, JPG ou PNG?",
        answer:
          "O JPG costuma gerar arquivos menores para fotos, pois usa compressão com perda. O PNG mantém mais qualidade, mas gera arquivos maiores, sendo ideal para imagens com transparência ou texto.",
      },
      {
        question: "Consigo comprimir várias imagens ao mesmo tempo?",
        answer:
          "Sim, é possível selecionar vários arquivos de uma vez e baixar todos comprimidos em um único processo.",
      },
      {
        question: "A imagem perde qualidade visível?",
        answer:
          "Com um nível de compressão moderado, a diferença é praticamente imperceptível a olho nu, mesmo reduzindo bastante o tamanho do arquivo.",
      },
      {
        question: "Funciona para imagens com fundo transparente?",
        answer:
          "Sim, o formato PNG mantém a transparência mesmo após a compressão.",
      },
      {
        question: "Preciso instalar algum programa?",
        answer:
          "Não. Todo o processo acontece direto no navegador, sem instalação de aplicativos ou plugins.",
      },
    ],
  },
 
  {
    slug: "compactar-imagem",
    translationKey: "compress-image",
    metaTitle: "Compactar Imagem Online Grátis — Reduza o Tamanho em Segundos",
    metaDescription:
      "Compacte sua imagem online gratuitamente. Reduza o tamanho do arquivo para caber no limite de KB exigido por sites, formulários e sistemas.",
    h1: "Compactar Imagem Online — Rápido e Sem Perder Qualidade",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Reduza o tamanho do arquivo da sua imagem em poucos cliques, mantendo os detalhes visuais importantes.",
    sections: [
      {
        heading: "O que significa compactar uma imagem",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Compactar uma imagem significa reduzir o espaço que o arquivo ocupa no armazenamento, sem necessariamente mudar suas dimensões em pixels. Essa técnica é útil quando um sistema exige um limite máximo de tamanho em KB ou MB para aceitar o upload.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Onde a compactação costuma ser exigida</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Sistema</th>
            <th class="py-2">Limite típico</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Portais de concursos públicos</td><td class="py-2">100 KB a 300 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Sistemas de RH e cadastro</td><td class="py-2">até 1 MB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Plataformas de currículo online</td><td class="py-2">200 KB a 500 KB</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Meta de tamanho automática</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Informe o limite em KB e a ferramenta calcula a compressão ideal.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Resultado instantâneo</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Veja o tamanho final antes mesmo de baixar o arquivo.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Totalmente gratuito</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Sem limite de uso diário e sem marca d'água no resultado.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como compactar sua imagem",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Carregue a imagem:</strong> Selecione o arquivo do seu dispositivo.</li>
    <li><strong class="text-slate-900 dark:text-white">Informe o limite:</strong> Digite o tamanho máximo permitido pelo sistema que vai receber a imagem.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o resultado:</strong> Salve o arquivo compactado, já pronto para envio.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Compactar altera as dimensões da imagem?",
        answer:
          "Não necessariamente. A compactação foca em reduzir o peso do arquivo. Se for preciso, a ferramenta também pode ajustar a largura e a altura para atingir o limite pedido.",
      },
      {
        question: "Como sei se a imagem compactada vai passar no limite exigido?",
        answer:
          "A ferramenta mostra o tamanho final do arquivo antes do download, permitindo conferir se está dentro do limite exigido pelo sistema.",
      },
      {
        question: "Existe limite de quantidade de imagens por dia?",
        answer:
          "Não há limite de uso. É possível compactar quantas imagens forem necessárias, gratuitamente.",
      },
      {
        question: "A ferramenta funciona para documentos escaneados?",
        answer:
          "Sim, funciona bem para fotos, documentos escaneados e imagens de qualquer origem.",
      },
      {
        question: "Preciso criar uma conta para usar?",
        answer:
          "Não é necessário cadastro. Basta acessar a página e enviar o arquivo diretamente.",
      },
    ],
  },
 
  {
    slug: "compactar-foto",
    translationKey: "compress-image",
    metaTitle: "Compactar Foto Online Grátis — Deixe o Arquivo Mais Leve",
    metaDescription:
      "Compacte sua foto online e reduza o tamanho do arquivo em KB ou MB. Ferramenta grátis, rápida e sem instalação para deixar a foto mais leve.",
    h1: "Compactar Foto Online — Arquivo Mais Leve em Segundos",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Deixe sua foto mais leve sem perder os detalhes que importam. Ideal para envio rápido por e-mail ou aplicativos de mensagem.",
    sections: [
      {
        heading: "Fotos pesadas atrapalham o envio",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Fotos em alta resolução tiradas por celulares modernos podem ultrapassar 5 MB facilmente. Esse tamanho torna o envio mais lento, consome mais dados móveis e pode ser recusado por sistemas com limite de upload. Compactar a foto resolve esse problema mantendo a aparência praticamente idêntica.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Benefícios de uma foto mais leve</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Benefício</th>
            <th class="py-2">Resultado prático</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Envio mais rápido</td><td class="py-2">Upload e download em menos tempo</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Menos consumo de dados</td><td class="py-2">Economia no plano de internet móvel</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Compatibilidade com formulários</td><td class="py-2">Aceita em sistemas com limite de KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Mais espaço de armazenamento</td><td class="py-2">Menos ocupação no celular ou nuvem</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Rápido</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">O processo leva poucos segundos, mesmo em fotos grandes.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem marca d'água</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">A foto compactada sai limpa, sem marcas ou logotipos.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Privado</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Tudo acontece no seu navegador, sem upload para servidores.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como deixar a foto mais leve",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Escolha a foto:</strong> Selecione o arquivo do celular ou computador.</li>
    <li><strong class="text-slate-900 dark:text-white">Ajuste a compressão:</strong> Defina o tamanho final ou use o ajuste automático recomendado.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe:</strong> Salve a foto compactada, pronta para enviar por qualquer canal.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Quanto uma foto pode ser reduzida sem perder qualidade?",
        answer:
          "Na maioria dos casos, é possível reduzir de 60% a 90% do tamanho original mantendo qualidade suficiente para telas e impressões comuns.",
      },
      {
        question: "A ferramenta funciona com fotos tiradas por qualquer celular?",
        answer:
          "Sim, aceita fotos de qualquer marca de celular ou câmera, nos formatos JPG e PNG.",
      },
      {
        question: "Posso compactar mais de uma foto de uma vez?",
        answer:
          "Sim, é possível enviar várias fotos e baixar todas compactadas ao final do processo.",
      },
      {
        question: "O resultado fica salvo em nuvem?",
        answer:
          "Não. O arquivo é processado localmente e baixado direto para o seu dispositivo.",
      },
      {
        question: "Existe custo para usar essa ferramenta?",
        answer:
          "Não, a ferramenta é totalmente gratuita e não exige cadastro.",
      },
    ],
  },
 
  {
    slug: "reduzir-tamanho-da-imagem",
    translationKey: "compress-image",
    metaTitle: "Reduzir Tamanho da Imagem Online Grátis — KB, MB e Pixels",
    metaDescription:
      "Reduza o tamanho da imagem em KB, MB ou pixels de forma online e gratuita. Ferramenta rápida para ajustar arquivos ao limite exigido por qualquer site.",
    h1: "Reduzir Tamanho da Imagem — Em KB, MB ou Pixels",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Ajuste o tamanho da sua imagem exatamente como precisar, seja em peso de arquivo ou em dimensões de pixels.",
    sections: [
      {
        heading: "Duas formas de reduzir o tamanho de uma imagem",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    O termo "tamanho da imagem" pode significar duas coisas diferentes: o peso do arquivo (em KB ou MB) ou as dimensões em pixels (largura e altura). Entender essa diferença evita erros ao enviar uma imagem para um sistema que exige um formato específico.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Peso do arquivo x Dimensões</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Tipo de redução</th>
            <th class="py-2">O que muda</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Peso do arquivo (KB/MB)</td><td class="py-2">Reduz o espaço ocupado, mantendo a resolução visual</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Dimensões (largura x altura)</td><td class="py-2">Reduz o número de pixels, diminuindo o tamanho físico da imagem</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Ajuste em KB ou MB</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Informe o peso final desejado e a ferramenta ajusta automaticamente.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Ajuste em pixels</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Digite a nova largura ou altura e a proporção é mantida automaticamente.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Combinação dos dois</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Reduza pixels e peso do arquivo ao mesmo tempo para um resultado ideal.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como reduzir o tamanho da sua imagem",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie o arquivo:</strong> Selecione a imagem que deseja reduzir.</li>
    <li><strong class="text-slate-900 dark:text-white">Escolha o tipo de redução:</strong> Opte por peso do arquivo, dimensões em pixels ou os dois juntos.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o resultado:</strong> Receba a imagem já ajustada, pronta para uso.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Reduzir os pixels também reduz o peso do arquivo?",
        answer:
          "Sim, diminuir a largura e a altura de uma imagem quase sempre reduz o peso do arquivo, já que existem menos pixels para armazenar.",
      },
      {
        question: "Qual devo escolher: reduzir KB ou pixels?",
        answer:
          "Se o objetivo é caber em um limite de upload, reduza o peso em KB. Se precisar de uma imagem menor fisicamente, como uma miniatura, reduza as dimensões em pixels.",
      },
      {
        question: "A imagem fica distorcida ao mudar as dimensões?",
        answer:
          "Não, a ferramenta mantém a proporção original entre largura e altura, evitando distorções.",
      },
      {
        question: "Posso definir uma dimensão exata, como 800x600?",
        answer:
          "Sim, é possível informar a largura e a altura exatas desejadas para a imagem final.",
      },
      {
        question: "O processo funciona para imagens muito grandes?",
        answer:
          "Sim, a ferramenta suporta imagens de alta resolução, incluindo fotos tiradas em câmeras profissionais.",
      },
    ],
  },
 
  {
    slug: "reduzir-tamanho-da-foto",
    translationKey: "compress-image",
    metaTitle: "Reduzir Tamanho da Foto Online Grátis — Rápido e Sem Perder Qualidade",
    metaDescription:
      "Reduza o tamanho da foto em KB, MB ou pixels de forma online e gratuita. Ideal para e-mail, redes sociais e formulários com limite de tamanho.",
    h1: "Reduzir Tamanho da Foto — Online e Gratuito",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Ajuste sua foto ao tamanho exato que você precisa, seja para economizar espaço ou para passar em um limite de upload.",
    sections: [
      {
        heading: "Quando reduzir o tamanho de uma foto faz diferença",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Fotos grandes demais podem travar o envio de um formulário, demorar para carregar em um site ou ocupar espaço desnecessário no celular. Reduzir o tamanho da foto resolve esses problemas rapidamente, sem a necessidade de programas complexos de edição.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Casos de uso comuns</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Caso de uso</th>
            <th class="py-2">Tamanho recomendado</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Foto de perfil em redes sociais</td><td class="py-2">até 1 MB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Anexo em formulários oficiais</td><td class="py-2">100 KB a 500 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Currículo em PDF ou site pessoal</td><td class="py-2">abaixo de 300 KB</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Fácil de usar</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Basta enviar a foto e informar o tamanho final desejado.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Qualidade preservada</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">O algoritmo prioriza manter os detalhes mais importantes da imagem.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem limite de uso</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Reduza quantas fotos precisar, sem custo e sem cadastro.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Passo a passo para reduzir a foto",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie a foto:</strong> Selecione o arquivo do seu dispositivo.</li>
    <li><strong class="text-slate-900 dark:text-white">Defina o tamanho:</strong> Informe o limite em KB, MB ou as novas dimensões em pixels.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe:</strong> Faça o download da foto já reduzida.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Reduzir a foto muda o formato do arquivo?",
        answer:
          "Não, o formato original é mantido, a menos que você escolha convertê-lo para outro formato durante o processo.",
      },
      {
        question: "Consigo reduzir uma foto para um tamanho específico em MB?",
        answer:
          "Sim, basta informar o valor desejado, como 1 MB ou 500 KB, e a ferramenta ajusta a compressão para atingir esse limite.",
      },
      {
        question: "A ferramenta é compatível com fotos do iPhone?",
        answer:
          "Sim, aceita fotos em formato HEIC e JPG vindas de qualquer modelo de celular, incluindo iPhone.",
      },
      {
        question: "Preciso pagar para reduzir mais de uma foto?",
        answer:
          "Não, o uso é totalmente gratuito, sem limite de quantidade de fotos.",
      },
      {
        question: "A foto reduzida serve para impressão?",
        answer:
          "Sim, desde que a resolução final seja suficiente para o tamanho de impressão desejado. Para fotos grandes impressas, recomenda-se manter uma resolução mais alta.",
      },
    ],
  },
 
  {
    slug: "diminuir-tamanho-da-foto",
    translationKey: "compress-image",
    metaTitle: "Diminuir Tamanho da Foto Online Grátis — Ajuste em KB e Pixels",
    metaDescription:
      "Diminua o tamanho da foto online e de graça. Ajuste o peso do arquivo em KB ou as dimensões em pixels em poucos segundos, direto no navegador.",
    h1: "Diminuir Tamanho da Foto — Simples e Gratuito",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Diminua sua foto rapidamente para caber em qualquer limite de tamanho, sem perder a essência da imagem.",
    sections: [
      {
        heading: "Como funciona a diminuição de uma foto",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Diminuir o tamanho de uma foto envolve reduzir o espaço em disco que ela ocupa, os pixels que a compõem, ou ambos. A ferramenta analisa a imagem e aplica um algoritmo de compressão inteligente que corta dados desnecessários sem comprometer os elementos visuais principais.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Métodos disponíveis</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Método</th>
            <th class="py-2">Indicado para</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Compressão por qualidade</td><td class="py-2">Reduzir peso mantendo dimensões originais</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Redimensionamento</td><td class="py-2">Diminuir largura e altura em pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Meta de KB automática</td><td class="py-2">Atingir um limite exato exigido por um sistema</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Simples e direto</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Sem etapas confusas: envie, ajuste e baixe.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Compatível com todo dispositivo</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Funciona em celulares Android, iPhone, tablets e computadores.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem marca d'água</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">O resultado final não recebe nenhuma marca ou logotipo.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como diminuir sua foto passo a passo",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie a foto:</strong> Selecione o arquivo original.</li>
    <li><strong class="text-slate-900 dark:text-white">Escolha o método:</strong> Reduza o peso, as dimensões ou ambos.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o arquivo final:</strong> Salve a versão diminuída no seu dispositivo.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Diminuir a foto afeta as cores da imagem?",
        answer:
          "Não, as cores permanecem praticamente iguais. A compressão foca em remover dados redundantes, sem alterar o tom das cores.",
      },
      {
        question: "Posso diminuir uma foto para postar no Instagram?",
        answer:
          "Sim, a ferramenta permite ajustar o tamanho ideal para redes sociais, garantindo boa qualidade sem pesar demais no envio.",
      },
      {
        question: "Existe um tamanho mínimo recomendado?",
        answer:
          "Depende do uso final. Para telas de celular, arquivos entre 100 KB e 500 KB costumam ser suficientes. Para impressão, recomenda-se manter uma resolução maior.",
      },
      {
        question: "A ferramenta funciona sem internet?",
        answer:
          "É necessário acesso à internet para abrir a página, mas o processamento da imagem acontece localmente no navegador.",
      },
      {
        question: "Posso desfazer a diminuição depois?",
        answer:
          "Não é possível recuperar os dados originais removidos na compressão. Recomenda-se manter uma cópia da foto original antes de diminuí-la.",
      },
    ],
  },
 
  {
    slug: "otimizar-imagem",
    translationKey: "compress-image",
    metaTitle: "Otimizar Imagem Online Grátis — Melhore Velocidade e Peso do Arquivo",
    metaDescription:
      "Otimize imagens online para sites e lojas virtuais. Reduza o peso do arquivo, melhore o tempo de carregamento e mantenha a qualidade visual.",
    h1: "Otimizar Imagem Online — Mais Velocidade Para o Seu Site",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Otimize suas imagens para carregar mais rápido em sites, lojas virtuais e blogs, sem perder qualidade visual.",
    sections: [
      {
        heading: "Por que otimizar imagens é importante para o seu site",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Imagens mal otimizadas são uma das principais causas de lentidão em sites e lojas virtuais. Páginas lentas afastam visitantes e prejudicam o posicionamento nos mecanismos de busca. Otimizar uma imagem significa reduzir seu peso ao máximo possível sem comprometer a experiência visual do usuário.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Impacto da otimização</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Área afetada</th>
            <th class="py-2">Benefício da otimização</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Velocidade de carregamento</td><td class="py-2">Páginas abrem mais rápido, reduzindo abandono</td></tr>
          <tr><td class="py-2 pr-4 font-medium">SEO e ranqueamento</td><td class="py-2">Sites rápidos são favorecidos pelos buscadores</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Consumo de dados do visitante</td><td class="py-2">Menos dados usados em conexões móveis</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Custo de hospedagem</td><td class="py-2">Menos espaço e banda consumidos no servidor</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Ideal para WordPress e lojas virtuais</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Otimize imagens de produtos e banners antes de subir para o site.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Conversão para WEBP</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Gere imagens no formato moderno WEBP para máxima performance.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Em lote</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Otimize várias imagens de uma vez para agilizar o trabalho.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como otimizar suas imagens",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie as imagens:</strong> Selecione uma ou várias imagens do seu site ou loja.</li>
    <li><strong class="text-slate-900 dark:text-white">Escolha o formato de saída:</strong> Opte por manter o formato original ou converter para WEBP.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe e publique:</strong> Faça o upload das imagens otimizadas no seu site.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Otimizar imagem melhora o SEO do site?",
        answer:
          "Sim, imagens leves aceleram o carregamento da página, um dos fatores que os mecanismos de busca consideram para o ranqueamento.",
      },
      {
        question: "Qual formato é mais otimizado para a web?",
        answer:
          "O formato WEBP costuma gerar arquivos menores que JPG e PNG mantendo qualidade semelhante, sendo indicado para sites modernos.",
      },
      {
        question: "Consigo otimizar imagens de produtos de uma loja virtual?",
        answer:
          "Sim, a ferramenta é indicada para otimizar fotos de catálogo, banners e qualquer imagem usada em lojas online.",
      },
      {
        question: "A otimização em lote demora muito?",
        answer:
          "Não, o processo é rápido mesmo para várias imagens, já que o processamento acontece diretamente no navegador.",
      },
      {
        question: "Preciso reotimizar a imagem depois de qualquer edição?",
        answer:
          "Sim, sempre que a imagem for editada ou substituída, é recomendável otimizá-la novamente antes de publicar.",
      },
    ],
  },
 
  {
    slug: "foto-enem-online-gratis",
    translationKey: "photo-resizer",
    metaTitle: "Foto Enem Online Grátis — Tamanho Oficial 3x4 ou 5x7",
    metaDescription:
      "Gere sua foto para o Enem online e grátis. Ajuste automático para o tamanho exigido pelo Inep, com fundo branco e sem sombras. Pronta para o cadastro.",
    h1: "Foto para o Enem Online — Grátis e no Padrão Exigido",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Prepare sua foto para o cadastro do Enem em segundos, seguindo as exigências oficiais de tamanho e fundo.",
    sections: [
      {
        heading: "Exigências da foto para o Enem",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    O Inep exige uma foto recente e nítida no momento da inscrição do Enem. A imagem precisa mostrar claramente o rosto do candidato, com fundo neutro e sem acessórios que cubram os traços faciais, para permitir a identificação no dia da prova.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Padrões recomendados para a foto do Enem</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Requisito</th>
            <th class="py-2">Especificação</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Tamanho do arquivo</td><td class="py-2">Formato JPG, geralmente abaixo de 500 KB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Fundo</td><td class="py-2">Branco ou claro, uniforme e sem sombras</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Rosto</td><td class="py-2">Sem óculos escuros, boné ou objetos que cubram o rosto</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Atualidade</td><td class="py-2">Foto recente, tirada nos últimos meses</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Ajuste automático de tamanho</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">A ferramenta redimensiona a foto para o padrão exigido no cadastro.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Fundo branco uniforme</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Substitua ou clareie o fundo da foto diretamente na ferramenta.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Compressão em KB</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Reduza o tamanho do arquivo para caber no limite do sistema de inscrição.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como preparar a foto para o Enem em casa",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Tire a foto:</strong> Use boa iluminação natural e um fundo liso, de preferência claro.</li>
    <li><strong class="text-slate-900 dark:text-white">Envie o arquivo:</strong> Carregue a foto na ferramenta acima.</li>
    <li><strong class="text-slate-900 dark:text-white">Ajuste automático:</strong> Selecione o padrão para o Enem e deixe a ferramenta cortar e ajustar o fundo.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe e envie:</strong> Faça o download e anexe a foto no sistema de inscrição.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Qual o tamanho oficial da foto do Enem?",
        answer:
          "O sistema de inscrição costuma aceitar fotos em JPG com tamanho abaixo de 500 KB, desde que o rosto esteja nítido e o fundo seja uniforme e claro.",
      },
      {
        question: "Posso usar uma foto 3x4 antiga no Enem?",
        answer:
          "É recomendável usar uma foto recente, tirada nos últimos meses, para garantir que o rosto corresponda à aparência atual do candidato.",
      },
      {
        question: "A foto pode ter fundo colorido?",
        answer:
          "O ideal é usar fundo branco ou bem claro e uniforme, sem padronagens ou objetos que possam distrair a identificação.",
      },
      {
        question: "Como reduzir o tamanho da foto para o cadastro do Enem?",
        answer:
          "Use a ferramenta de compressão acima, informando o limite de KB exigido pelo sistema de inscrição, e baixe o arquivo já ajustado.",
      },
      {
        question: "Posso usar óculos de grau na foto do Enem?",
        answer:
          "É recomendado evitar óculos escuros ou com reflexo. Óculos de grau comuns costumam ser aceitos, desde que os olhos fiquem visíveis.",
      },
    ],
  },
 
  {
    slug: "cortar-imagem",
    translationKey: "crop-image",
    metaTitle: "Cortar Imagem Online Grátis — Recorte no Formato Que Precisar",
    metaDescription:
      "Corte imagens online gratuitamente. Recorte no formato quadrado, retrato, paisagem ou em uma proporção personalizada, direto no navegador.",
    h1: "Cortar Imagem Online — Recorte Rápido e Preciso",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Recorte sua imagem no formato exato que precisar, seja para redes sociais, documentos ou uso pessoal.",
    sections: [
      {
        heading: "Corte de imagem para cada finalidade",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Cortar uma imagem significa remover as partes que não interessam, mantendo apenas a área desejada. Cada finalidade pede uma proporção diferente, e escolher o formato certo evita distorções ou cortes indesejados em documentos e postagens.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Proporções mais usadas</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Proporção</th>
            <th class="py-2">Uso comum</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">1:1 (quadrado)</td><td class="py-2">Perfil do Instagram e redes sociais</td></tr>
          <tr><td class="py-2 pr-4 font-medium">4:3</td><td class="py-2">Fotos tradicionais e apresentações</td></tr>
          <tr><td class="py-2 pr-4 font-medium">16:9</td><td class="py-2">Capas de vídeo e banners de sites</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Personalizada</td><td class="py-2">Documentos, crachás e usos específicos</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Corte livre ou fixo</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Arraste as bordas livremente ou escolha uma proporção fixa pronta.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Pré-visualização em tempo real</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Veja o resultado do corte antes de baixar o arquivo final.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem perda de qualidade</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">O corte preserva a resolução original da área selecionada.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como cortar sua imagem",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie a imagem:</strong> Selecione o arquivo que deseja cortar.</li>
    <li><strong class="text-slate-900 dark:text-white">Escolha a proporção:</strong> Selecione um formato pronto ou arraste livremente a área de corte.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o resultado:</strong> Salve a imagem já recortada no seu dispositivo.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Posso cortar a imagem em um formato quadrado?",
        answer:
          "Sim, basta selecionar a proporção 1:1 na ferramenta para obter um corte perfeitamente quadrado.",
      },
      {
        question: "É possível cortar em uma proporção personalizada?",
        answer:
          "Sim, além dos formatos prontos, é possível arrastar livremente a área de corte para obter qualquer proporção desejada.",
      },
      {
        question: "O corte reduz a qualidade da imagem?",
        answer:
          "Não, a área recortada mantém a mesma resolução da imagem original, sem perda perceptível de qualidade.",
      },
      {
        question: "Consigo desfazer o corte e recomeçar?",
        answer:
          "Sim, é possível ajustar a área de corte quantas vezes quiser antes de confirmar o download.",
      },
      {
        question: "A ferramenta funciona em qualquer navegador?",
        answer:
          "Sim, funciona em navegadores modernos como Chrome, Safari, Firefox e Edge, tanto no celular quanto no computador.",
      },
    ],
  },
 
  {
    slug: "editor-de-imagem",
    translationKey: "photo-resizer",
    metaTitle: "Editor de Imagem Online Grátis — Edite Fotos no Navegador",
    metaDescription:
      "Use um editor de imagem online e grátis para cortar, redimensionar, comprimir e ajustar fotos. Sem instalar programas, direto no navegador.",
    h1: "Editor de Imagem Online — Todas as Ferramentas em um Só Lugar",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Edite, corte, redimensione e comprima suas imagens em um único editor online, sem precisar instalar nada.",
    sections: [
      {
        heading: "Um editor completo para o dia a dia",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Nem toda edição de imagem exige um programa complexo. Para tarefas do dia a dia, como cortar, redimensionar ou comprimir uma foto, um editor online resolve o problema em poucos cliques, sem downloads e sem curva de aprendizado.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Funções disponíveis no editor</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Função</th>
            <th class="py-2">Para que serve</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Cortar</td><td class="py-2">Recortar a área desejada da imagem</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Redimensionar</td><td class="py-2">Alterar largura e altura em pixels</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Comprimir</td><td class="py-2">Reduzir o peso do arquivo em KB ou MB</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Ajustar fundo</td><td class="py-2">Trocar ou clarear o fundo para documentos</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Tudo em uma página</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Corte, redimensione e comprima sem trocar de ferramenta.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Interface simples</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Nenhuma experiência prévia é necessária para usar o editor.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Privado e gratuito</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">O processamento é feito no navegador, sem custo e sem cadastro.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como usar o editor de imagem",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie a imagem:</strong> Carregue o arquivo do celular ou computador.</li>
    <li><strong class="text-slate-900 dark:text-white">Escolha a edição:</strong> Selecione cortar, redimensionar, comprimir ou ajustar o fundo.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o resultado:</strong> Salve a imagem editada, pronta para uso.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "O editor funciona sem instalar programas?",
        answer:
          "Sim, todas as funções rodam direto no navegador, sem necessidade de instalar aplicativos.",
      },
      {
        question: "Posso fazer várias edições na mesma imagem?",
        answer:
          "Sim, é possível cortar, redimensionar e comprimir a mesma imagem em sequência, antes de baixar o resultado final.",
      },
      {
        question: "O editor funciona em celulares Android e iPhone?",
        answer:
          "Sim, o editor é compatível com qualquer navegador moderno, incluindo os de celulares Android e iPhone.",
      },
      {
        question: "Preciso criar uma conta para editar minhas fotos?",
        answer:
          "Não, o editor pode ser usado sem cadastro e sem custo.",
      },
      {
        question: "As imagens editadas ficam salvas em algum lugar?",
        answer:
          "Não, o arquivo é processado localmente e baixado direto para o seu dispositivo, sem armazenamento externo.",
      },
    ],
  },
 
  {
    slug: "editor-de-fotos",
    translationKey: "photo-resizer",
    metaTitle: "Editor de Fotos Online Grátis — Corte, Redimensione e Ajuste",
    metaDescription:
      "Edite fotos online de forma grátis e simples. Corte, redimensione, comprima e ajuste o fundo das suas fotos direto no navegador, sem instalar nada.",
    h1: "Editor de Fotos Online — Simples, Rápido e Gratuito",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Ajuste suas fotos com poucos cliques: corte, redimensione, comprima e prepare para qualquer finalidade.",
    sections: [
      {
        heading: "Edite suas fotos sem complicação",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Muitas pessoas precisam apenas de ajustes simples em uma foto, como cortar uma parte, deixar o arquivo mais leve ou mudar as dimensões. Um editor de fotos online resolve essas tarefas rapidamente, sem exigir conhecimento técnico em edição de imagem.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Situações comuns de edição de fotos</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Necessidade</th>
            <th class="py-2">Solução no editor</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Foto para documento</td><td class="py-2">Corte no tamanho oficial e ajuste de fundo</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Foto para redes sociais</td><td class="py-2">Corte na proporção quadrada ou vertical</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Foto para currículo</td><td class="py-2">Compressão para caber no limite de KB</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Ferramentas essenciais</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Corte, redimensionamento e compressão em um só lugar.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Resultado imediato</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Veja o efeito de cada ajuste antes de baixar a foto.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem custo</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Edite quantas fotos precisar, sem taxas ou assinaturas.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como editar sua foto",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Carregue a foto:</strong> Selecione o arquivo do seu dispositivo.</li>
    <li><strong class="text-slate-900 dark:text-white">Aplique os ajustes:</strong> Corte, redimensione ou comprima conforme a necessidade.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe a foto editada:</strong> Salve o resultado final pronto para uso.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Consigo editar uma foto para documento oficial?",
        answer:
          "Sim, é possível cortar a foto no tamanho exigido e ajustar o fundo para atender às normas de documentos como RG, CNH e passaporte.",
      },
      {
        question: "O editor tem opção de recorte para redes sociais?",
        answer:
          "Sim, existem proporções prontas para Instagram, WhatsApp e outras redes sociais.",
      },
      {
        question: "Posso reduzir o tamanho do arquivo depois de cortar?",
        answer:
          "Sim, é possível aplicar o corte e depois comprimir a foto para atingir um tamanho específico em KB.",
      },
      {
        question: "O editor funciona para fotos de qualquer câmera?",
        answer:
          "Sim, aceita fotos de celulares, câmeras digitais e imagens escaneadas nos formatos JPG e PNG.",
      },
      {
        question: "Existe limite de tamanho de foto para enviar ao editor?",
        answer:
          "Não há um limite rígido, mas fotos muito grandes podem levar alguns segundos a mais para processar.",
      },
    ],
  },
 
  {
    slug: "cortar-foto",
    translationKey: "crop-image",
    metaTitle: "Cortar Foto Online Grátis — Recorte Rápido no Navegador",
    metaDescription:
      "Corte sua foto online e de graça. Recorte no formato quadrado, retrato ou personalizado direto no navegador, sem instalar programas.",
    h1: "Cortar Foto Online — Rápido, Fácil e Gratuito",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Corte sua foto exatamente como precisar, sem perder qualidade e sem instalar nenhum aplicativo.",
    sections: [
      {
        heading: "Quando é necessário cortar uma foto",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Cortar uma foto ajuda a remover elementos indesejados, focar no assunto principal ou adaptar a imagem a um formato específico exigido por documentos, redes sociais ou impressões. A ferramenta faz esse ajuste de forma visual, mostrando o resultado antes mesmo de salvar.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Situações comuns para cortar uma foto</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Situação</th>
            <th class="py-2">Ajuste recomendado</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Foto de perfil</td><td class="py-2">Corte quadrado centralizado no rosto</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Foto para documento</td><td class="py-2">Corte no tamanho oficial exigido</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Foto de paisagem para banner</td><td class="py-2">Corte na proporção 16:9</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Corte visual e intuitivo</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Arraste a área de corte e veja o resultado em tempo real.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Proporções prontas</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Escolha entre quadrado, retrato, paisagem ou formatos personalizados.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Download imediato</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Baixe a foto cortada assim que confirmar o recorte.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como cortar sua foto",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie a foto:</strong> Selecione o arquivo que deseja cortar.</li>
    <li><strong class="text-slate-900 dark:text-white">Ajuste a área de corte:</strong> Escolha uma proporção pronta ou arraste livremente.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o resultado:</strong> Salve a foto já cortada no seu dispositivo.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Posso cortar a foto em formato circular?",
        answer:
          "O corte padrão é retangular ou quadrado. Para uso em ícones circulares, muitas plataformas aplicam a máscara circular automaticamente após o upload de uma foto quadrada.",
      },
      {
        question: "O corte funciona bem em fotos verticais e horizontais?",
        answer:
          "Sim, a ferramenta se adapta tanto a fotos em formato retrato quanto paisagem.",
      },
      {
        question: "Consigo cortar e depois comprimir a mesma foto?",
        answer:
          "Sim, é possível aplicar o corte primeiro e, na sequência, ajustar o tamanho do arquivo em KB.",
      },
      {
        question: "O corte é gratuito para qualquer quantidade de fotos?",
        answer:
          "Sim, não há limite de uso nem custo para cortar fotos na ferramenta.",
      },
      {
        question: "A foto cortada mantém a qualidade original?",
        answer:
          "Sim, a área recortada preserva a resolução da foto original, sem perda perceptível.",
      },
    ],
  },
 
  {
    slug: "recortar-foto",
    translationKey: "crop-image",
    metaTitle: "Recortar Foto Online Grátis — Ajuste Preciso em Poucos Cliques",
    metaDescription:
      "Recorte sua foto online de forma gratuita e precisa. Escolha a área exata, ajuste a proporção e baixe o resultado direto no navegador.",
    h1: "Recortar Foto Online — Precisão em Poucos Cliques",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Recorte a área exata da sua foto com controle total sobre a proporção final.",
    sections: [
      {
        heading: "Recorte preciso para qualquer finalidade",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Recortar uma foto com precisão faz diferença na qualidade final do resultado. Um recorte malfeito pode cortar partes importantes da imagem ou deixar proporções estranhas. A ferramenta oferece controle total sobre a área selecionada, com pré-visualização antes de salvar.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Recursos do recorte</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Recurso</th>
            <th class="py-2">Detalhe</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Grade de alinhamento</td><td class="py-2">Ajuda a centralizar o assunto principal da foto</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Rotação</td><td class="py-2">Gira a foto antes do recorte, se necessário</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Zoom na área selecionada</td><td class="py-2">Permite conferir detalhes antes de confirmar</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Controle total</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Ajuste cada borda manualmente para um recorte sob medida.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Proporções fixas</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Use formatos prontos para redes sociais e documentos.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem instalação</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Todo o processo acontece direto no navegador.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como recortar sua foto",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie a foto:</strong> Carregue o arquivo original.</li>
    <li><strong class="text-slate-900 dark:text-white">Selecione a área:</strong> Ajuste as bordas ou escolha uma proporção fixa.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o recorte:</strong> Salve a foto já recortada no seu dispositivo.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "É possível girar a foto antes de recortar?",
        answer:
          "Sim, a ferramenta permite rotacionar a imagem antes de definir a área de recorte final.",
      },
      {
        question: "O recorte permite ajuste fino nas bordas?",
        answer:
          "Sim, é possível arrastar cada borda individualmente para um recorte totalmente personalizado.",
      },
      {
        question: "Consigo recortar mais de uma foto seguida?",
        answer:
          "Sim, basta repetir o processo enviando uma nova foto após concluir o recorte anterior.",
      },
      {
        question: "O recorte funciona bem para fotos de grupo?",
        answer:
          "Sim, é possível ajustar a área para incluir todas as pessoas desejadas na imagem final.",
      },
      {
        question: "Existe algum custo para recortar minhas fotos?",
        answer:
          "Não, o uso da ferramenta é totalmente gratuito, sem necessidade de cadastro.",
      },
    ],
  },
 
  {
    slug: "editar-foto-online",
    translationKey: "photo-resizer",
    metaTitle: "Editar Foto Online Grátis — Corte, Comprima e Ajuste na Hora",
    metaDescription:
      "Edite fotos online de graça, direto no navegador. Corte, redimensione, comprima e ajuste o fundo sem instalar nenhum programa.",
    h1: "Editar Foto Online — Sem Instalar Nada",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Edite sua foto direto no navegador, com ferramentas simples de corte, redimensionamento e compressão.",
    sections: [
      {
        heading: "Vantagens de editar a foto direto no navegador",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Editar uma foto online elimina a necessidade de baixar programas pesados ou aprender ferramentas complexas. Basta abrir o navegador, enviar a imagem e aplicar os ajustes desejados, obtendo o resultado em segundos, em qualquer dispositivo.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Editor online x programa instalado</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Critério</th>
            <th class="py-2">Editor online</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Instalação</td><td class="py-2">Não é necessária</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Compatibilidade</td><td class="py-2">Funciona em celular, tablet e computador</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Custo</td><td class="py-2">Gratuito, sem assinatura</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Curva de aprendizado</td><td class="py-2">Baixa, interface simples e direta</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Acesso em qualquer lugar</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Basta um navegador e conexão com a internet para editar suas fotos.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Ferramentas essenciais</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Corte, redimensionamento, compressão e ajuste de fundo.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Privacidade garantida</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">As fotos são processadas localmente, sem envio para servidores.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como editar sua foto online",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Acesse a ferramenta:</strong> Abra a página em qualquer navegador.</li>
    <li><strong class="text-slate-900 dark:text-white">Envie a foto:</strong> Selecione o arquivo do seu dispositivo.</li>
    <li><strong class="text-slate-900 dark:text-white">Escolha o ajuste:</strong> Corte, redimensione ou comprima conforme sua necessidade.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o resultado:</strong> Salve a foto editada, pronta para uso.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Preciso instalar algo para editar minha foto?",
        answer:
          "Não, todo o processo acontece direto no navegador, sem instalação de programas ou extensões.",
      },
      {
        question: "O editor funciona em qualquer celular?",
        answer:
          "Sim, funciona em qualquer celular com navegador atualizado, seja Android ou iPhone.",
      },
      {
        question: "As edições feitas online têm a mesma qualidade de um programa instalado?",
        answer:
          "Sim, para ajustes como corte, redimensionamento e compressão, o resultado é equivalente ao de programas tradicionais.",
      },
      {
        question: "Minhas fotos ficam armazenadas depois de editar?",
        answer:
          "Não, o processamento acontece localmente e o arquivo não é enviado nem guardado em servidores externos.",
      },
      {
        question: "Existe limite de uso do editor online?",
        answer:
          "Não há limite de uso. É possível editar quantas fotos forem necessárias, gratuitamente.",
      },
    ],
  },
 
  {
    slug: "editor-foto-online-gratis",
    translationKey: "photo-resizer",
    metaTitle: "Editor Foto Online Grátis — Ferramenta Completa e Sem Custo",
    metaDescription:
      "Use um editor foto online grátis para cortar, redimensionar e comprimir imagens. Sem cadastro, sem instalação e sem marca d'água no resultado.",
    h1: "Editor Foto Online Grátis — Sem Cadastro e Sem Custo",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Um editor de fotos completo, gratuito e sem necessidade de cadastro, direto no seu navegador.",
    sections: [
      {
        heading: "Um editor gratuito sem pegadinhas",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Muitos editores online prometem gratuidade, mas escondem limites de uso, marcas d'água ou exigem cadastro para liberar o download. Este editor foi criado para resolver tarefas simples de edição sem nenhuma dessas barreiras, mantendo a foto final limpa e pronta para uso imediato.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">O que este editor oferece</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Recurso</th>
            <th class="py-2">Disponível</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Cadastro obrigatório</td><td class="py-2">Não</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Marca d'água no resultado</td><td class="py-2">Não</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Limite diário de uso</td><td class="py-2">Não</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Corte, redimensionamento e compressão</td><td class="py-2">Sim</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">100% gratuito</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Nenhuma cobrança escondida ou plano premium necessário.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem cadastro</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Acesse a ferramenta e comece a editar imediatamente.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Resultado limpo</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Sem marca d'água ou logotipos na foto final.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como usar o editor foto online grátis",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Acesse a página:</strong> Não é preciso criar login ou senha.</li>
    <li><strong class="text-slate-900 dark:text-white">Envie a foto:</strong> Selecione o arquivo do seu dispositivo.</li>
    <li><strong class="text-slate-900 dark:text-white">Edite:</strong> Corte, redimensione ou comprima como desejar.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe:</strong> Salve o resultado sem marca d'água.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "O editor é realmente gratuito ou tem custo escondido?",
        answer:
          "É totalmente gratuito, sem taxas escondidas, planos premium ou limite de uso.",
      },
      {
        question: "Preciso me cadastrar para usar o editor?",
        answer:
          "Não, basta acessar a página e enviar a foto diretamente, sem necessidade de criar conta.",
      },
      {
        question: "A foto final sai com marca d'água?",
        answer:
          "Não, o resultado final não recebe nenhuma marca d'água ou logotipo.",
      },
      {
        question: "Existe limite de fotos que posso editar por dia?",
        answer:
          "Não há limite diário de uso. É possível editar quantas fotos forem necessárias.",
      },
      {
        question: "O editor funciona em computadores e celulares?",
        answer:
          "Sim, funciona em qualquer navegador atualizado, seja em computador, tablet ou celular.",
      },
    ],
  },
 
  {
    slug: "foto-editor-online-gratis",
    translationKey: "photo-resizer",
    metaTitle: "Foto Editor Online Grátis — Corte, Redimensione e Comprima Fotos",
    metaDescription:
      "Use um foto editor online grátis para cortar, redimensionar e comprimir suas imagens. Ferramenta simples, sem instalação e sem cadastro.",
    h1: "Foto Editor Online Grátis — Ferramenta Simples e Direta",
    showTool: "photo-editor",
    structuredDataOverrides: { webPageType: "WebApplication" },
    subtitle:
      "Edite suas fotos rapidamente com um foto editor online grátis, sem instalar aplicativos ou criar conta.",
    sections: [
      {
        heading: "Um foto editor pensado para tarefas rápidas",
        content: `<div class="space-y-8 not-prose">
  <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
    Quando o objetivo é apenas ajustar uma foto rapidamente, como cortar, redimensionar ou diminuir o tamanho do arquivo, não faz sentido abrir programas complexos de edição. Este foto editor online reúne as funções mais usadas em uma interface simples, direto no navegador.
  </p>
 
  <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Principais funções do foto editor</h3>
    </div>
    <div class="overflow-x-auto p-6">
      <table class="w-full text-sm text-slate-700 dark:text-slate-300">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-left font-semibold">
            <th class="py-2 pr-4">Função</th>
            <th class="py-2">Uso recomendado</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
          <tr><td class="py-2 pr-4 font-medium">Cortar</td><td class="py-2">Remover partes indesejadas ou ajustar proporção</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Redimensionar</td><td class="py-2">Adaptar a foto ao tamanho em pixels exigido</td></tr>
          <tr><td class="py-2 pr-4 font-medium">Comprimir</td><td class="py-2">Reduzir o peso do arquivo para envio ou upload</td></tr>
        </tbody>
      </table>
    </div>
  </div>
 
  <div class="grid md:grid-cols-3 gap-5">
    <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Rápido de usar</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Resolva a edição em poucos cliques, sem etapas confusas.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Sem instalação</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Funciona direto no navegador, em qualquer dispositivo.</p>
    </div>
    <div class="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Gratuito e sem cadastro</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">Acesse e edite suas fotos sem criar conta.</p>
    </div>
  </div>
</div>`,
      },
      {
        heading: "Como usar o foto editor online",
        content: `<div class="space-y-4 not-prose text-slate-600 dark:text-slate-400 leading-relaxed">
  <ol class="list-decimal list-inside space-y-3">
    <li><strong class="text-slate-900 dark:text-white">Envie a foto:</strong> Selecione o arquivo do celular ou computador.</li>
    <li><strong class="text-slate-900 dark:text-white">Escolha a função:</strong> Corte, redimensione ou comprima a imagem.</li>
    <li><strong class="text-slate-900 dark:text-white">Baixe o resultado:</strong> Salve a foto já editada no seu dispositivo.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "O foto editor funciona em qualquer navegador?",
        answer:
          "Sim, funciona em navegadores modernos como Chrome, Firefox, Safari e Edge, tanto em computadores quanto em celulares.",
      },
      {
        question: "Posso usar o foto editor para redimensionar uma imagem para um site?",
        answer:
          "Sim, é possível ajustar a largura e a altura em pixels conforme o padrão exigido pelo site.",
      },
      {
        question: "O foto editor comprime a imagem para um tamanho específico?",
        answer:
          "Sim, basta informar o tamanho em KB ou MB desejado e a ferramenta ajusta automaticamente.",
      },
      {
        question: "Existe versão paga com mais recursos?",
        answer:
          "As funções principais de corte, redimensionamento e compressão estão disponíveis gratuitamente, sem necessidade de plano pago.",
      },
      {
        question: "As fotos enviadas ficam armazenadas no site?",
        answer:
          "Não, o processamento acontece localmente no navegador e a foto não é enviada para nenhum servidor externo.",
      },
    ],
  },

 
];

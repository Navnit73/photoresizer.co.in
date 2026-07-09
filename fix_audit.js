const fs = require('fs');

function replaceFile(path, replacements) {
    if (!fs.existsSync(path)) return;
    let content = fs.readFileSync(path, 'utf8');
    let original = content;
    for (let [search, replace] of replacements) {
        content = content.replace(search, replace);
    }
    if (content !== original) {
        fs.writeFileSync(path, content);
        console.log('Fixed', path);
    }
}

// Fix PassportCropper.tsx
replaceFile('app/components/passport_photo/PassportCropper.tsx', [
    [/#10b981/g, 'var(--accent-main)'],
    [/#000/g, 'var(--text-main)']
]);

// Fix de/page.tsx and de/tools/page.tsx
const dePages = ['app/de/page.tsx', 'app/de/tools/page.tsx', 'app/fr/page.tsx', 'app/es/page.tsx', 'app/(en)/page.tsx'];
dePages.forEach(page => {
    replaceFile(page, [
        [/lime-50/g, 'accent-muted'],
        [/lime-100/g, 'accent-muted'],
        [/lime-200/g, 'border-subtle'],
        [/lime-400/g, 'accent-main'],
        [/lime-500/g, 'accent-main'],
        [/lime-600/g, 'accent-main'],
        [/lime-700/g, 'accent-hover'],
        [/lime-800/g, 'border-subtle'],
        [/lime-900\/30/g, 'accent-muted'],
        [/lime-900\/40/g, 'accent-muted'],
        [/text-slate-700 dark:text-slate-300 group-hover:bg-accent-muted/g, 'text-text-main group-hover:bg-accent-muted'],
        [/#84cc16/g, 'var(--accent-muted)'],
        [/#a855f7/g, 'var(--accent-muted)']
    ]);
});

// Fix CollageMakerTool.tsx
replaceFile('components/canvas-collage/CollageMakerTool.tsx', [
    [/text-slate-400 hover:text-blue-500 active:bg-accent-muted\/50 hover:bg-accent-muted\/50 dark:hover:bg-blue-900\/10/g, 
     'text-text-muted hover:text-accent-main active:bg-accent-muted/50 hover:bg-accent-muted/50 dark:hover:bg-accent-muted/50'],
    [/text-slate-400 on bg-blue-900/g, 'text-text-muted'] // Just in case it's verbatim
]);

import { Project, SyntaxKind, ArrayLiteralExpression, ObjectLiteralExpression, PropertyAssignment } from 'ts-morph';

const project = new Project();

const coreMapping: Record<string, Record<string, string>> = {
  de: {
    'foto-verkleinern': 'photo-resizer',
    'passfoto-ersteller': 'passport-photo-maker',
    'hintergrund-entfernen': 'remove-background',
    'bild-komprimieren': 'compress-image',
    'anleitung': 'how-to-use',
    'kontakt': 'contact',
    'agb': 'terms',
    'datenschutz': 'privacy'
  },
  fr: {
    'redimensionner-photo': 'photo-resizer',
    'createur-photo-identite': 'passport-photo-maker',
    'comment-utiliser': 'how-to-use',
    'contact': 'contact',
    'conditions': 'terms',
    'confidentialite': 'privacy'
  },
  es: {
    'redimensionar-foto': 'photo-resizer',
    'creador-foto-pasaporte': 'passport-photo-maker',
    'como-usar': 'how-to-use',
    'contacto': 'contact',
    'terminos': 'terms',
    'privacidad': 'privacy'
  },
  en: {
    'photo-resizer': 'photo-resizer',
    'passport-photo-maker': 'passport-photo-maker',
    'how-to-use': 'how-to-use',
    'contact': 'contact',
    'terms': 'terms',
    'privacy': 'privacy',
    'remove-background': 'remove-background',
    'compress-image': 'compress-image'
  }
};

function refactorFile(filePath: string, lang: string) {
  const sourceFile = project.addSourceFileAtPath(filePath);
  
  const variableDeclaration = sourceFile.getVariableDeclaration(`${lang}Pages`);
  if (!variableDeclaration) {
    console.error(`Could not find ${lang}Pages in ${filePath}`);
    return;
  }
  
  const arrayLiteral = variableDeclaration.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!arrayLiteral) {
    console.error(`Initializer is not an array in ${filePath}`);
    return;
  }
  
  const elements = arrayLiteral.getElements();
  const elementsToRemove: ObjectLiteralExpression[] = [];
  
  for (const element of elements) {
    if (element.getKind() === SyntaxKind.ObjectLiteralExpression) {
      const obj = element as ObjectLiteralExpression;
      const slugProp = obj.getProperty('slug') as PropertyAssignment;
      if (slugProp) {
        const slugValue = slugProp.getInitializer()?.getText().replace(/['"]/g, '');
        
        if (slugValue) {
          const mappedKey = coreMapping[lang][slugValue];
          
          if (mappedKey) {
             if (!obj.getProperty('translationKey')) {
               obj.insertPropertyAssignment(1, { name: 'translationKey', initializer: `'${mappedKey}'` });
             }
          } else {
             if (lang === 'de') {
               elementsToRemove.push(obj);
             }
          }
        }
      }
    }
  }
  
  for (let i = elementsToRemove.length - 1; i >= 0; i--) {
     arrayLiteral.removeElement(elementsToRemove[i]);
  }
  
  sourceFile.saveSync();
  console.log(`Successfully refactored ${filePath}`);
}

refactorFile('content/de-pages.ts', 'de');
refactorFile('content/fr-pages.ts', 'fr');
refactorFile('content/es-pages.ts', 'es');
refactorFile('content/en-pages.ts', 'en');

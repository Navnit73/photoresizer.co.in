const fs = require('fs');

const enPages = fs.readFileSync('content/en-pages.ts', 'utf8');
const progPages = fs.readFileSync('content/programmatic-pages.ts', 'utf8');

const getSlugs = (text) => {
  const slugs = [];
  const regex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
};

const enSlugs = new Set(getSlugs(enPages));

let inArray = false;
let currentBlock = "";
let newProgPages = "";
let braceCount = 0;
let arrayStartCount = 0;

const lines = progPages.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (!inArray) {
    newProgPages += line + (i === lines.length - 1 ? "" : "\n");
    if (line.includes('export const programmaticPages')) {
      inArray = true;
      // We assume the array starts on the same line or next lines.
      // Wait, let's just find the first '['
      const bracketIndex = line.indexOf('[');
      if (bracketIndex !== -1) {
        arrayStartCount = 1;
      }
    }
  } else {
    if (arrayStartCount === 0) {
      newProgPages += line + (i === lines.length - 1 ? "" : "\n");
      if (line.includes('[')) {
        arrayStartCount = 1;
      }
      continue;
    }
    
    // We are inside the array. We need to collect objects.
    currentBlock += line + (i === lines.length - 1 ? "" : "\n");
    
    // Count braces to find the boundary of an object.
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    
    braceCount += openBraces;
    braceCount -= closeBraces;
    
    // Also track array closing
    const openBrackets = (line.match(/\[/g) || []).length;
    const closeBrackets = (line.match(/\]/g) || []).length;
    
    if (braceCount === 0 && currentBlock.trim().startsWith('{')) {
      // Complete object found.
      const match = currentBlock.match(/slug:\s*['"]([^'"]+)['"]/);
      if (match) {
        const slug = match[1];
        if (!enSlugs.has(slug)) {
          newProgPages += currentBlock;
        } else {
          console.log('Removing duplicate:', slug);
          // If the next character in the block is a comma, we want to remove the comma too if possible,
          // but we are splitting by lines. 
          // If currentBlock ends with '},' we just drop it.
          // Wait, if it's the last element, we might drop the element and need to make sure the previous element doesn't have a trailing comma, or it's fine in JS.
        }
      } else {
        newProgPages += currentBlock;
      }
      currentBlock = "";
    } else if (braceCount === 0 && currentBlock.trim() === ']') {
      // End of array
      newProgPages += currentBlock;
      currentBlock = "";
      inArray = false;
    } else if (braceCount === 0 && currentBlock.trim() === '];') {
      newProgPages += currentBlock;
      currentBlock = "";
      inArray = false;
    } else if (braceCount === 0 && !currentBlock.trim().startsWith('{')) {
      // Some other lines like comments
      newProgPages += currentBlock;
      currentBlock = "";
    }
  }
}

// Ensure it compiles correctly by replacing trailing commas before the end of array
// This is not strictly necessary for TS, but cleaner.

fs.writeFileSync('content/programmatic-pages.ts', newProgPages, 'utf8');
console.log('Done!');

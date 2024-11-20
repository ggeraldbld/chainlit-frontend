import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, '../src/components');
const outputFile = path.resolve(componentsDir, 'index.ts');

function findFiles(dir, baseDir = dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      files.push(...findFiles(fullPath, baseDir));
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      // Skip the index.ts file itself
      if (entry.name !== 'index.ts') {
        files.push(relativePath);
      }
    }
  }

  return files;
}

// Find all files recursively
const files = findFiles(componentsDir);

// Generate exports
const exports = files.map(file => {
  const importPath = './' + file.replace(/\.[^/.]+$/, ''); // Remove extension
  const componentName = path.basename(file).replace(/\.[^/.]+$/, '');
  return `export { ${componentName} } from '${importPath}';`;
}).join('\n');

// Write to index.ts
fs.writeFileSync(outputFile, exports);

console.log(`Generated ${outputFile} with ${files.length} components`);

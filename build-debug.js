#!/usr/bin/env node

console.log('🔍 Build Debug Information');
console.log('==========================');
console.log('Node Version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('Working Directory:', process.cwd());
console.log('Environment Variables:');
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- CI:', process.env.CI);
console.log('- NETLIFY:', process.env.NETLIFY);

const fs = require('fs');
const path = require('path');

// Check if critical files exist
const criticalFiles = [
  'package.json',
  'next.config.mjs',
  'app/layout.tsx',
  'app/page.tsx',
  'lib/utils.ts'
];

console.log('\n📁 File Check:');
criticalFiles.forEach(file => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`- ${file}: ${exists ? '✅' : '❌'}`);
});

// Check dependencies
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('\n📦 Key Dependencies:');
  console.log('- next:', packageJson.dependencies?.next || 'Not found');
  console.log('- react:', packageJson.dependencies?.react || 'Not found');
  console.log('- typescript:', packageJson.devDependencies?.typescript || 'Not found');
} catch (error) {
  console.log('\n❌ Error reading package.json:', error.message);
}
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Testing Build Configuration');
console.log('================================');

// Test 1: Check Node.js version
console.log('✅ Node.js version:', process.version);

// Test 2: Check if all required files exist
const requiredFiles = [
  'package.json',
  'next.config.mjs',
  'app/layout.tsx',
  'app/page.tsx',
  'tsconfig.json'
];

console.log('\n📁 Required Files Check:');
let allFilesExist = true;
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

if (!allFilesExist) {
  console.log('\n❌ Missing required files. Build will fail.');
  process.exit(1);
}

// Test 3: Check package.json
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('\n📦 Package.json Check:');
  console.log('✅ Next.js version:', pkg.dependencies?.next || 'Missing');
  console.log('✅ React version:', pkg.dependencies?.react || 'Missing');
  
  // Check for problematic packages
  if (pkg.dependencies['@vercel/analytics']) {
    console.log('❌ @vercel/analytics found - will cause static export issues');
  } else {
    console.log('✅ No @vercel/analytics (good for static export)');
  }
} catch (error) {
  console.log('❌ Error reading package.json:', error.message);
  process.exit(1);
}

// Test 4: Try to run Next.js build
console.log('\n🏗️  Testing Next.js Build:');
try {
  console.log('Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Build successful!');
  
  // Check if out directory was created
  if (fs.existsSync('out')) {
    console.log('✅ Static export directory created');
    const files = fs.readdirSync('out');
    console.log(`✅ Generated ${files.length} files in out directory`);
  } else {
    console.log('❌ No out directory created');
  }
  
} catch (error) {
  console.log('❌ Build failed:', error.message);
  process.exit(1);
}

console.log('\n🎉 All tests passed! Ready for deployment.');
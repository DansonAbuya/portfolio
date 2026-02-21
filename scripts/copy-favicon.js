const fs = require('fs')
const path = require('path')

// Never fail the build - favicon copy is optional
try {
  const cwd = process.cwd()
  const src = path.join(cwd, 'public', 'logo.png')
  const publicDir = path.join(cwd, 'public')
  const appDir = path.join(cwd, 'app')

  if (!fs.existsSync(src)) {
    console.warn('Favicon: public/logo.png not found, skipping')
    process.exit(0)
  }

  // Static files: browsers request these directly; must be in public/
  fs.copyFileSync(src, path.join(publicDir, 'favicon.ico'))
  fs.copyFileSync(src, path.join(publicDir, 'favicon.png'))

  // Next.js file convention (app directory)
  if (fs.existsSync(appDir)) {
    fs.copyFileSync(src, path.join(appDir, 'icon.png'))
    fs.copyFileSync(src, path.join(appDir, 'apple-icon.png'))
  }

  console.log('Favicon: copied public/logo.png to favicon.ico, favicon.png, app/icon.png, app/apple-icon.png')
} catch (err) {
  console.warn('Favicon copy failed:', err.message)
}
process.exit(0)

const fs = require('fs')
const path = require('path')

const src = path.join(process.cwd(), 'public', 'logo.png')
const appDir = path.join(process.cwd(), 'app')

if (fs.existsSync(src)) {
  fs.copyFileSync(src, path.join(appDir, 'icon.png'))
  fs.copyFileSync(src, path.join(appDir, 'apple-icon.png'))
  console.log('Favicon: copied public/logo.png to app/icon.png and app/apple-icon.png')
} else {
  console.warn('Favicon: public/logo.png not found, skipping copy')
}

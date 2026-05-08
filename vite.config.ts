import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function distAssetServer() {
  const distAssetsDir = path.resolve(__dirname, 'dist/assets')

  return {
    name: 'dist-asset-server',
    configureServer(server) {
      server.middlewares.use('/assets', (req, res, next) => {
        const urlPath = req.url?.split('?')[0] || ''
        const filename = decodeURIComponent(urlPath.replace(/^\/+/, ''))
        if (!/\.(png|jpe?g|webp|gif|svg|mp4|webm)$/i.test(filename)) {
          next()
          return
        }

        const filePath = path.resolve(distAssetsDir, filename)

        if (!filePath.startsWith(distAssetsDir + path.sep) || !fs.existsSync(filePath)) {
          next()
          return
        }

        const ext = path.extname(filename).toLowerCase()
        const contentTypes = {
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.webp': 'image/webp',
          '.gif': 'image/gif',
          '.svg': 'image/svg+xml',
          '.mp4': 'video/mp4',
          '.webm': 'video/webm',
        }

        if (contentTypes[ext]) {
          res.setHeader('Content-Type', contentTypes[ext])
        }
        res.setHeader('Cache-Control', 'no-store')
        fs.createReadStream(filePath).pipe(res)
      })
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    distAssetServer(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

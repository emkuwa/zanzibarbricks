import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    // Multi-page build so Vercel can serve order.html and faq.html with
    // server-side meta tags (SEO) instead of relying on client-side JS.
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        order: path.resolve(__dirname, 'order.html'),
        faq: path.resolve(__dirname, 'faq.html'),
      },
    },
  },
})

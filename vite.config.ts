import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/', // Ensure base path is correct for Vercel
  assetsInclude: ['**/*.jpg', '**/*.png'],
  plugins: [react()],
})
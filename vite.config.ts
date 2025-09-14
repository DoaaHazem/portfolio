import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',   // لازم السطر ده علشان GitHub Pages يشتغل
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

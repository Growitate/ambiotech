import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const SERVER_CONFIG = {
  host: '0.0.0.0',
  port: 2120,
  strictPort: true,
  allowedHosts: ['ambiotech.cyberpunk.co.in', 'localhost', '127.0.0.1'],
}

export default defineConfig({
  plugins: [react()],
  server: SERVER_CONFIG,
  preview: SERVER_CONFIG,
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})

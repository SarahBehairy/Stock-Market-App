import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@mock': path.resolve(__dirname, 'src/mock'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services')
    },
  },
  plugins: [react()],
})

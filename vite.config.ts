import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      '/recommendation': {
        target: 'http://localhost:8081/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/recommendation/, ''),
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {

  
  return {
    plugins: [react()],
    server: {
      port: 4000,
      proxy: {
        '/api': {
          target: "http://localhost:3001",
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/api/, '/'),
        }
      }
    },
  }
})

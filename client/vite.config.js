import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {

  
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/local-api': {
          target: "http://localhost:3000",
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/local-api/, '/'),
        },
        '/remote-api': {
          target: "https://daggett-control-website.onrender.com",
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/remote-api/, '/'),
        }
      }
    },
  }
})

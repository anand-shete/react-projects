import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': "http://localhost:3000"    // since we have set proxy, server will think that all the requests are originated from this endpoint 
      // or else we can whitelist the fontend url to allow resource sharing with backend url
    }
  },
  plugins: [react(), tailwindcss()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://hn.algolia.com/api/v1"
    },
  },
  plugins: [react()],
})

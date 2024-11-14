import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// server we can place port to run FE
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})

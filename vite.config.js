import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true,          // lyssna på alla interfaces
    allowedHosts: true,  // tillåt alla hosts (enkelt för ngrok)
    hmr: false, // 🔥 disables hot reloading (no auto-refresh)
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})

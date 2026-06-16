import { fileURLToPath} from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '#centoui/components': fileURLToPath(new URL('../../packages/core/src/components', import.meta.url)),
      '#centoui/config': fileURLToPath(new URL('../../packages/core/src/config.ts', import.meta.url)),
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
  },
})

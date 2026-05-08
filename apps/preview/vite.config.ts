import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#centoui/config': fileURLToPath(new URL('../../packages/core/src/defaults/config.ts', import.meta.url)),
      '#centoui/components': fileURLToPath(new URL('../../packages/core/src/components', import.meta.url)),
    },
  },
})

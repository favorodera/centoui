/// <reference types="vite/client" />

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
      '#centoui/config': fileURLToPath(new URL('./centoui.config.ts', import.meta.url)),
      '#centoui/utils': fileURLToPath(new URL('./src/utils/centoui-utils.ts', import.meta.url)),
    },
  },
  server: {
    port: 5174,
  },
})

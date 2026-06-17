/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '#centoui/config': fileURLToPath(new URL('src/config.ts', import.meta.url)),
    },
  },
  test: {
    clearMocks: true,
    testTimeout: 0,
  },
})

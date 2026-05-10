/// <reference types="vitest/config" />
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  test: {
    testTimeout: 0,
    environment: 'happy-dom',
    setupFiles: [
      './tests/utils/setup.ts',
    ],
  },
  resolve: {
    alias: {
      '#centoui/config': fileURLToPath(new URL('./src/defaults/config.ts', import.meta.url)),
    },
  },
})

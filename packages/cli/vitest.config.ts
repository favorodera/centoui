import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 0,
    environment: 'node',
    clearMocks: true,
  },
})

import { defineConfig } from 'tsdown'

export default defineConfig({
  format: ['esm'],
  exports: true,
  clean: true,
})

import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: {
    vue: true,
  },
  exports: true,
  fromVite: true,
  platform: 'neutral',
})

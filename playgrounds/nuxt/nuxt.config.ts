import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: [
    'centoui-nuxt',
    '@nuxtjs/color-mode',
  ],

  devtools: { enabled: false },

  colorMode: {
    classSuffix: '',
  },

  centoui: {
    prefix: '',
  },

  css: ['./app/centoui.css'],

  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
  },
})

import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['centoui-nuxt'],
  devtools: { enabled: false },
  css: ['./app/centoui.css'],
  // centoui: {
  //   prefix: 'Ui',
  // },
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
  },
  icon: {
    mode: 'svg',
    componentName: 'NuxtIcon',
  },
})

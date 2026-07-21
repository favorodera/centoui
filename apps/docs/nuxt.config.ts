import tailwindcss from '@tailwindcss/vite'
import { defineSoftwareApp } from 'nuxt-schema-org/schema'

const fontWeights = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
]

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',

    'centoui-nuxt',
    'notform-nuxt',

    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',

    '@nuxt/content',

    '@nuxtjs/seo',
    '@vercel/analytics',

    '@nuxt/eslint',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit',
  ],

  devtools: false,

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },

      link: [
        { href: '/favicon.ico', rel: 'icon', sizes: '48x48' },
        { href: '/icon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
        { href: '/icon-192x192.png', rel: 'icon', sizes: '192x192', type: 'image/png' },
        { href: '/icon-512x512.png', rel: 'icon', sizes: '512x512', type: 'image/png' },
        { href: '/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
        { href: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
      ],
    },

    pageTransition: {
      mode: 'out-in',
      name: 'fade-out-in',
    },

    layoutTransition: {
      mode: 'out-in',
      name: 'fade-out-in',
    },
  },

  routeRules: {
     '/docs': { 
      redirect: { 
        to: '/docs/overview/introduction', 
        statusCode: 301 
      } 
    }
  },

  css: ['~/assets/css/index.css'],

  site: {
    defaultLocale: 'en',
    description: 'A Vue 3 and Nuxt design system with type-safe, accessible components for elegant interfaces.',
    indexable: true,
    keywords: [
      'Vue 3',
      'Nuxt',
      'Design System',
      'TypeScript',
      'Vue components',
      'UI components',
      'accessible UI',
      'frontend framework',
    ],
    name: 'CentoUI',
    url: 'https://centoui.vercel.app',
  },

  colorMode: {
    classSuffix: '',
  },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
  },

  devServer: {
    port: 3000,
  },

  experimental: {
    asyncContext: true,
  },

  compatibilityDate: '2025-07-15',

  components: [
    '~/components',
    '~/app/components',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sitemap.xml',
        '/robots.txt',
      ],
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        '@unhead/schema-org/vue',
        'zod',
        '@iconify/vue',
      ],
    },
    plugins: [tailwindcss()],
  },

  eslint: {
    config: {
      standalone: false,
      stylistic: false,
    },
  },

  fonts: {
    families: [
      {
        global: true,
        name: 'Bricolage Grotesque',
        weights: fontWeights,
      },
      {
        global: true,
        name: 'JetBrains Mono',
        weights: fontWeights,
      },
    ],
  },

  icon: {
    componentName: 'NuxtIcon',
    customCollections: [
      {
        dir: './app/assets/icons',
        prefix: 'custom',
      },
    ],
    mode: 'svg',
    provider: 'iconify',
  },

  llms: {
    description: 'CentoUI is a Vue 3 and Nuxt design system providing type-safe, accessible UI components for elegant interfaces.',
    domain: 'https://centoui.vercel.app',
    full: {
      description: 'CentoUI is a Vue 3 and Nuxt design system providing type-safe, accessible UI components for elegant interfaces.',
      title: 'CentoUI — Vue Components for Elegant Interfaces',
    },
    title: 'CentoUI — Vue Components for Elegant Interfaces',
  },

  mcp: {
    name: 'CentoUI',
  },

  ogImage: {
    zeroRuntime: true,
  },

  schemaOrg: {
    identity: defineSoftwareApp({
      'description': 'CentoUI is a Vue 3 and Nuxt design system with type-safe, accessible components for elegant interfaces.',
      'name': 'CentoUI',
      'url': 'https://centoui.vercel.app',

      '@type': 'SoftwareApplication',
      'applicationCategory': 'DeveloperApplication',
      'operatingSystem': 'Web',

      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
      },

      'sameAs': [
        'https://www.npmjs.com/package/centoui',
        'https://www.npmjs.com/package/centoui-cli',
        'https://www.npmjs.com/package/centoui-nuxt',
        'https://github.com/favorodera/centoui',
      ],

      'keywords': [
        'Vue 3',
        'Nuxt',
        'Design System',
        'TypeScript',
        'UI components',
        'accessible components',
        'frontend framework',
        'Vue components',
      ],

      'author': {
        '@type': 'Person',
        'name': 'Favour Emeka',
        'url': 'https://favorodera.vercel.app',
      },
    }),
  },

  sitemap: {
    zeroRuntime: true,
  },
})

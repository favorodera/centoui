<script setup lang="ts">
useSeoMeta({
  charset: 'utf8',
  colorScheme: 'dark light',
  description: 'CentoUI is a Vue 3 and Nuxt design system with type-safe, accessible UI components for elegant interfaces.',
  googleSiteVerification: 'qYU6PqljRftNzCNBLdEFxnKJKwH-Aj7aJ9CLp6itnhM',
  ogDescription: 'A Vue 3 and Nuxt design system with type-safe, accessible components for elegant interfaces.',
  ogTitle: 'CentoUI — Vue Components for Elegant Interfaces',
  ogUrl: 'https://centoui.vercel.app',
  themeColor: [
    {
      content: '#ffffff',
      media: '(prefers-color-scheme: light)',
    },
    {
      content: '#070707',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  twitterCard: 'summary_large_image',
  twitterCreator: '@favorodera',
  twitterDescription: 'A Vue 3 and Nuxt design system with type-safe, accessible components for elegant interfaces.',
  twitterSite: '@favorodera',
  twitterTitle: 'CentoUI — Vue Components for Elegant Interfaces',
  viewport: 'width=device-width, initial-scale=1',
})

defineOgImage('Image.takumi')
</script>

<template>
  <div class="min-inline-full min-block-dvh grid">
    <NuxtLink
      to="#main"
      class="
        fixed inset-bs-4 inset-s-4 -translate-y-[calc(100%+1rem)] z-50
        outline-none

        focus:translate-y-0 focus:ring-2 focus:ring-ring
      "
    >
      Skip to main content
    </NuxtLink>

    <NuxtRouteAnnouncer />

    <NuxtLoadingIndicator
      color="white"
      error-color="red"
    />

    <NuxtLayout>
      <div
        class="
          mx-auto grid grid-rows-[auto_1fr] min-block-full inline-full relative
        "
      >
        <AppHeader />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

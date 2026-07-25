<script setup lang="ts">
import { Comark } from '@comark/vue'
import highlight from '@comark/vue/plugins/highlight'
import javascript from '@shikijs/langs/javascript'
import json from '@shikijs/langs/json'
import typescript from '@shikijs/langs/typescript'
import vue from '@shikijs/langs/vue'
import lightTheme from '@shikijs/themes/material-theme-lighter'
import darkTheme from '@shikijs/themes/material-theme-palenight'
import emoji from 'comark/plugins/emoji'
import { h } from 'vue'
import { ProseH1 } from '#centoui/components/prose-h1'
import { ProseH2 } from '#centoui/components/prose-h2'
import { ProseH3 } from '#centoui/components/prose-h3'
import { ProseH4 } from '#centoui/components/prose-h4'

defineProps<{
  content: any
}>()

const plugins = [
  highlight({
    languages: [
      javascript,
      typescript,
      vue,
      json,
    ],
    registerDefaultLanguages: false,
    registerDefaultThemes: false,
    themes: {
      dark: darkTheme,
      light: lightTheme,
    },
  }),
  emoji(),
]

const components = {
  h1: (props: any, { slots }: any) => h(ProseH1, { ...props, anchor: true }, slots),
  h2: (props: any, { slots }: any) => h(ProseH2, { ...props, anchor: true }, slots),
  h3: (props: any, { slots }: any) => h(ProseH3, { ...props, anchor: true }, slots),
  h4: (props: any, { slots }: any) => h(ProseH4, { ...props, anchor: true }, slots),
}
</script>

<template>
  <Suspense>
    <Comark
      :plugins="plugins"
      :components="components"
      class="block-full inline-full"
    >
      {{ content }}
    </Comark>
  </Suspense>
</template>

<style scoped>
html.dark .shiki :deep(span) {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
</style>

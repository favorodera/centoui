<script lang="ts">
import markdown from '../../content/prose.md?raw'
</script>

<script setup lang="ts">
import { Comark } from '@comark/vue'
import highlight from '@comark/vue/plugins/highlight'
import bash from '@shikijs/langs/bash'
import diff from '@shikijs/langs/diff'
import javascript from '@shikijs/langs/javascript'
import json from '@shikijs/langs/json'
import typescript from '@shikijs/langs/typescript'
import vue from '@shikijs/langs/vue'
import lightTheme from '@shikijs/themes/catppuccin-latte'
import darkTheme from '@shikijs/themes/catppuccin-mocha'
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers'
import emoji from 'comark/plugins/emoji'
import { h } from 'vue'
import { ProseA } from '#centoui/components/prose-a'
import { ProseBlockquote } from '#centoui/components/prose-blockquote'
import { ProseCode } from '#centoui/components/prose-code'
import { ProseEm } from '#centoui/components/prose-em'
import { ProseH1 } from '#centoui/components/prose-h1'
import { ProseH2 } from '#centoui/components/prose-h2'
import { ProseH3 } from '#centoui/components/prose-h3'
import { ProseH4 } from '#centoui/components/prose-h4'
import { ProseH5 } from '#centoui/components/prose-h5'
import { ProseH6 } from '#centoui/components/prose-h6'
import { ProseHr } from '#centoui/components/prose-hr'
import { ProseP } from '#centoui/components/prose-p'
import { ProsePre } from '#centoui/components/prose-pre'
import { ProseStrong } from '#centoui/components/prose-strong'
import { useStory } from '@/composables/use-story'

const plugins = [
  highlight({
    languages: [
      javascript,
      typescript,
      vue,
      json,
      diff,
      bash,
    ],
    registerDefaultLanguages: false,
    registerDefaultThemes: false,
    themes: {
      dark: darkTheme,
      light: lightTheme,
    },
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationFocus(),
    ],
  }),
  emoji(),
]

const components = {
  h1: (props: any, { slots }: any) => h(ProseH1, { ...props, anchor: true }, slots),
  h2: (props: any, { slots }: any) => h(ProseH2, { ...props, anchor: true }, slots),
  h3: (props: any, { slots }: any) => h(ProseH3, { ...props, anchor: true }, slots),
  h4: (props: any, { slots }: any) => h(ProseH4, { ...props, anchor: true }, slots),
  h5: (props: any, { slots }: any) => h(ProseH5, { ...props, anchor: true }, slots),
  h6: (props: any, { slots }: any) => h(ProseH6, { ...props, anchor: true }, slots),
  ProseA,
  ProseBlockquote,
  ProseCode,
  ProseEm,
  ProseHr,
  ProseP,
  ProsePre,
  ProseStrong,
}

useStory('Prose', {})
</script>

<template>
  <Suspense>
    <Comark
      :plugins="plugins"
      :components="components"
      class="block-full inline-full block min-inline-0"
    >
      {{ markdown }}
    </Comark>
  </Suspense>
</template>

<style lang="css">
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
</style>

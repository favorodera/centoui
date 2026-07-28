<script lang="ts">
import markdown from '../../content/prose.md?raw'
</script>

<script setup lang="ts">
import { Comark } from '@comark/vue'
import footnotes from '@comark/vue/plugins/footnotes'
import highlight from '@comark/vue/plugins/highlight'
import math, { Math } from '@comark/vue/plugins/math'
import mermaid, { Mermaid } from '@comark/vue/plugins/mermaid'
import bash from '@shikijs/langs/bash'
import diff from '@shikijs/langs/diff'
import javascript from '@shikijs/langs/javascript'
import json from '@shikijs/langs/json'
import mermaidLang from '@shikijs/langs/mermaid'
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
import taskList from 'comark/plugins/task-list'
import 'katex/dist/katex.min.css'
import { useStory } from '@/composables/use-story'

const plugins = [
  taskList(),
  highlight({
    languages: [
      javascript,
      typescript,
      vue,
      json,
      diff,
      bash,
      mermaidLang,
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
  footnotes(),
  math(),
  mermaid(),
]

const components = {
  // h1: (props: any, { slots }: any) => h(ProseH1, { ...props, anchor: true }, slots),
  // h2: (props: any, { slots }: any) => h(ProseH2, { ...props, anchor: true }, slots),
  // h3: (props: any, { slots }: any) => h(ProseH3, { ...props, anchor: true }, slots),
  // h4: (props: any, { slots }: any) => h(ProseH4, { ...props, anchor: true }, slots),
  // h5: (props: any, { slots }: any) => h(ProseH5, { ...props, anchor: true }, slots),
  // h6: (props: any, { slots }: any) => h(ProseH6, { ...props, anchor: true }, slots),
  // ProseA,
  // ProseBlockquote,
  // ProseCode,
  // ProseEm,
  // ProseHr,
  // ProseP,
  // ProsePre,
  // ProseStrong,
  math: Math,
  mermaid: Mermaid,
}

useStory('Prose', {})
</script>

<template>
  <Suspense>
    <Comark
      :plugins="plugins"
      :components="components"
      class="block-full inline-full block prose prose-docs"
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

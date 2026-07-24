<script lang="ts">
import markdown from '../../content/prose.md?raw'
</script>

<script setup lang="ts">
import Comark from '@/components/comark.vue'
import { useStory } from '@/composables/use-story'

useStory('Prose', {})
</script>

<template>
  <Comark :content="markdown" />
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

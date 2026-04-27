<script setup lang="ts">
import { RouterView } from 'vue-router'
import ComponentPreview from './components/component-preview.vue'
import PropsPanel from './components/props-panel.vue'
import { usePreview } from './utils/use-preview'

const { schema, values, componentName } = usePreview()
</script>

<template>
  <ComponentPreview>
    <RouterView />

    <template
      v-if="schema && Object.keys(schema).length > 0"
      #panel
    >
      <PropsPanel
        v-model:values="values"
        :component-name="componentName"
        :schema="schema"
      />
    </template>
  </ComponentPreview>
</template>

<style>
/* Base styles to ensure full height */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>


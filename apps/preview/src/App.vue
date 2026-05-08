<script setup lang="ts">
import { RouterView } from 'vue-router'
import ComponentPreview from './components/component-preview.vue'
</script>

<template>
  <ComponentPreview>
    <RouterView />
  </ComponentPreview>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>


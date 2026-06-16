<script setup lang="ts">
import { RouterView } from 'vue-router'
import Body from '@/components/body.vue'
import Header from '@/components/header.vue'
</script>

<template>
  <div
    class="grid size-full grid-cols-1 grid-rows-[auto_1fr] place-items-center"
  >
    <Header />

    <Body>
      <RouterView />
    </Body>
  </div>
</template>

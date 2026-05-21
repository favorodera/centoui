<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/header.vue'
import Body from '@/components/body.vue'
</script>

<template>
  <div class="grid size-full grid-cols-1 grid-rows-[auto_1fr] place-items-center">
    <Header />

    <Body>
      <RouterView />
    </Body>
  </div>
</template>

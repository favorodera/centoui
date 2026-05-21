<script setup lang="ts">
import Header from '@/components/header.vue'
import Body from '@/components/body.vue'
</script>

<template>
  <div class="h-dvh grid grid-rows-[auto_1fr] grid-cols-1 place-items-center w-full">
    <Header />

    <Body>
      <slot />
    </Body>
  </div>
</template>

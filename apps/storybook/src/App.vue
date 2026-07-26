<script setup lang="ts">
import { RouterView } from 'vue-router'
import Body from '@/components/body.vue'
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
</script>

<template>
  <div
    class="
      grid block-full inline-full grid-cols-1 grid-rows-[auto_1fr_auto]
      place-items-center
    "
  >
    <Header />

    <Body>
      <RouterView />
    </Body>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Aside from './aside.vue'
</script>

<template>
  <div class="grid block-full inline-full grid-cols-[1fr_auto]">
    <main
      class="
        grid block-full inline-full max-block-[calc(100dvh-(--spacing(30)))]
        place-items-center overflow-auto py-3 scrollbar-thin
        scrollbar-track-transparent scrollbar-thumb-accent

        lg:max-block-[calc(100dvh-(--spacing(15)))]
      "
    >
      <div
        class="
          flex inline-full max-inline-3xl flex-wrap content-center items-center
          justify-center gap-8 bg-background px-4 block-full
        "
      >
        <slot />
      </div>
    </main>

    <Aside />
  </div>
</template>

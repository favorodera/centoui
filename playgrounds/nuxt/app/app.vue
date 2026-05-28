<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="grid min-h-dvh w-full place-items-center p-4 grid-rows-[auto_1fr] grid-cols-1">

    <header
      class="
          flex w-full items-center justify-end
        "
    >
      <Button
        variant="outline"
        square
        aria-label="Toggle dark mode"
        @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
      >
        <Icon :icon="colorMode.preference === 'dark' ? 'lucide:sun' : 'lucide:moon'" />
      </Button>
    </header>


    <div class="size-full flex items-center justify-center gap-8 flex-wrap">
      <Button>Hello</Button>
    </div>

  </div>
</template>

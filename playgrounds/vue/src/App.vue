<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Button } from './components/centoui/button'
import { Icon } from './components/centoui/icon'

const isDarkMode = useDark()
const toggleColorMode = useToggle(isDarkMode)
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
        @click="toggleColorMode()"
      >
        <Icon :icon="isDarkMode ? 'lucide:sun' : 'lucide:moon'" />
      </Button>
    </header>


    <div class="size-full flex items-center justify-center gap-8 flex-wrap">
      <Button>Hello</Button>
    </div>

  </div>
</template>

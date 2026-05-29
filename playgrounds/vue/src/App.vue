<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Button } from './components/centoui/button'
import { Icon } from './components/centoui/icon'

const isDarkMode = useDark()
const toggleColorMode = useToggle(isDarkMode)
</script>

<template>
  <div
    class="
      grid min-h-dvh w-full grid-cols-1 grid-rows-[auto_1fr] place-items-center
      p-4
    "
  >

    <header
      class="flex w-full items-center justify-end"
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


    <div class="flex size-full flex-wrap items-center justify-center gap-8">
      <Button>Hello</Button>
    </div>

  </div>
</template>

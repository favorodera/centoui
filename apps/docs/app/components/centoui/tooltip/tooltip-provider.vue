<script setup lang="ts">
import { TooltipProvider, useForwardProps } from 'reka-ui'
import type { TooltipProviderProps } from './index'

const props = withDefaults(defineProps<TooltipProviderProps>(), {
  delayDuration: 0,
})

const forwardedProps = useForwardProps(props)
</script>

<template>
  <TooltipProvider
    v-bind="forwardedProps"
  >
    <slot />
  </TooltipProvider>
</template>

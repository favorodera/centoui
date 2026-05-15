<script setup lang="ts">
import { TooltipProvider, useForwardProps } from 'reka-ui'
import { type TooltipProviderProps, type TooltipProviderSlots } from './index'

defineOptions({
  inheritAttrs: false,
})

defineSlots<TooltipProviderSlots>()

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

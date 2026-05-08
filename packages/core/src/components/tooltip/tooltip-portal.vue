<script setup lang="ts">
import { TooltipPortal, useForwardProps } from 'reka-ui'
import { type TooltipPortalProps, type TooltipPortalSlots } from './index'

defineOptions({
  inheritAttrs: false,
})

defineSlots<TooltipPortalSlots>()

const props = defineProps<TooltipPortalProps>()

// Forward props.
const forwardedProps = useForwardProps(props)
</script>

<template>
  <TooltipPortal
    v-bind="forwardedProps"
  >
    <slot />
  </TooltipPortal>
</template>

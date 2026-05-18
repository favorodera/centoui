<script setup lang="ts">
import { TooltipRoot, useForwardPropsEmits } from 'reka-ui'
import { type TooltipRootEmits, type TooltipRootProps, type TooltipRootSlots } from './index'

defineSlots<TooltipRootSlots>()
  
const emits = defineEmits<TooltipRootEmits>()

const props = defineProps<TooltipRootProps>()

const forwardedPropsEmits = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipRoot
    v-slot="slotProps"
    data-slot="tooltip-root"
    v-bind="forwardedPropsEmits"
  >
    <slot v-bind="slotProps" />
  </TooltipRoot>
</template>

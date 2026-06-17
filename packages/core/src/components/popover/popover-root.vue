<script setup lang="ts">
import { PopoverRoot, useForwardPropsEmits } from 'reka-ui'
import type { PopoverRootEmits, PopoverRootProps, PopoverRootSlots } from '.'

defineSlots<PopoverRootSlots>()

const emits = defineEmits<PopoverRootEmits>()

const props = defineProps<PopoverRootProps>()

const forwardedPropsEmits = useForwardPropsEmits(props, emits)
</script>

<template>
  <PopoverRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="popover-root"
  >
    <slot v-bind="slotProps" />
  </PopoverRoot>
</template>

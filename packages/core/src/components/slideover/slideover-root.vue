<script setup lang="ts">
import { DialogRoot, useForwardPropsEmits } from 'reka-ui'
import { type SlideoverRootEmits, type SlideoverRootProps, type SlideoverRootSlots } from '.'

defineSlots<SlideoverRootSlots>()

const emits = defineEmits<SlideoverRootEmits>()

const props = defineProps<SlideoverRootProps>()
  
const forwardedPropsEmits = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="slideover-root"
  >
    <slot v-bind="slotProps" />
  </DialogRoot>
</template>

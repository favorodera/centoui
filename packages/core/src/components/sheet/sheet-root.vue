<script setup lang="ts">
import { DialogRoot, useForwardPropsEmits } from 'reka-ui'
import type { SheetRootEmits, SheetRootProps, SheetRootSlots } from '.'

defineSlots<SheetRootSlots>()

const emits = defineEmits<SheetRootEmits>()

const props = defineProps<SheetRootProps>()

const forwardedPropsEmits = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="sheet-root"
  >
    <slot v-bind="slotProps" />
  </DialogRoot>
</template>

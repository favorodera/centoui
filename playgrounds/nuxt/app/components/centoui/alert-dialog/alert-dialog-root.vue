<script setup lang="ts">
import { AlertDialogRoot, useForwardPropsEmits } from 'reka-ui'
import { type AlertDialogRootEmits, type AlertDialogRootProps, type AlertDialogRootSlots } from '.'

defineSlots<AlertDialogRootSlots>()

const emits = defineEmits<AlertDialogRootEmits>()

const props = defineProps<AlertDialogRootProps>()
  
const forwardedPropsEmits = useForwardPropsEmits(props, emits)
</script>

<template>
  <AlertDialogRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="alert-dialog-root"
  >
    <slot v-bind="slotProps" />
  </AlertDialogRoot>
</template>

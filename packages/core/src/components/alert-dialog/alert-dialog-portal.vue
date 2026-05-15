<script setup lang="ts">
import { useForwardProps, AlertDialogPortal } from 'reka-ui'
import {
  type AlertDialogPortalSlots,
  type AlertDialogPortalProps,
} from '.'

defineSlots<AlertDialogPortalSlots>()

const props = defineProps<AlertDialogPortalProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <AlertDialogPortal
    v-bind="forwardedProps"
  >
    <slot />
  </AlertDialogPortal>
</template>

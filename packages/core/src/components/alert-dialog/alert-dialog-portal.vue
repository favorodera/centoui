<script setup lang="ts">
import { useForwardProps, AlertDialogPortal } from 'reka-ui'
import {
  type AlertDialogPortalProps,
} from '.'

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

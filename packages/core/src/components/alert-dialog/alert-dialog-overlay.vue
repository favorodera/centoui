<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, AlertDialogOverlay } from 'reka-ui'
import {
  type AlertDialogOverlaySlots,
  type AlertDialogOverlayProps,
  injectCentouiAlertDialogRootContext,
} from '.'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogOverlaySlots>()

const props = defineProps<AlertDialogOverlayProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AlertDialogOverlay
    data-slot="alert-dialog-overlay"
    v-bind="forwardedProps"
    :class="rootContext.styles.overlay({ class: props.class })"
  >
    <slot />
  </AlertDialogOverlay>
</template>

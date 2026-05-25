<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, AlertDialogOverlay } from 'reka-ui'
import {
  type AlertDialogOverlayProps,
  alertDialogVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<AlertDialogOverlayProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { overlay } = alertDialogVariants()
  
  return overlay({ class: props.class })
})
</script>

<template>
  <AlertDialogOverlay
    data-slot="alert-dialog-overlay"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AlertDialogOverlay>
</template>

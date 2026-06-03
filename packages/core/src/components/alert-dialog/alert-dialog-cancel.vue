<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogCancel, useForwardProps } from 'reka-ui'
import {
  type AlertDialogCancelProps,
  alertDialogVariants,
} from '.'
import { buttonVariants } from '../button'
import { computed } from 'vue'

const props = withDefaults(defineProps<AlertDialogCancelProps>(), {
  variant: 'outline',
})
const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant', 'square')
const forwardedProps = useForwardProps(delegatedProps)

const { cancel } = alertDialogVariants()
const { root } = buttonVariants()
const classNames = computed(() => root({
  size: props.size,
  variant: props.variant,
  square: props.square,
  class: cancel({ class: props.class }),
}))
</script>

<template>
  <AlertDialogCancel
    data-slot="alert-dialog-cancel"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AlertDialogCancel>
</template>

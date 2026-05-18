<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogCancel, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogCancelProps,
  alertDialogVariants,
} from '.'
import { buttonVariants } from '../button'
import { computed } from 'vue'

const props = withDefaults(defineProps<AlertDialogCancelProps>(), {
  variant: 'outline',
})
const delegatedProps = reactiveOmit(
  props, 'class',
  'variant',
  'size',
  'square',
)
const forwardedProps = useForwardPropsEmits(delegatedProps)

const classNames = computed(() => {
  const { root: buttonRoot } = buttonVariants({
    variant: props.variant,
    size: props.size,
    square: props.square,
  })

  const { cancel: alertDialogCancel } = alertDialogVariants()
  
  return buttonRoot({
    class: alertDialogCancel({ class: props.class }),
  })
})
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

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogCancel, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type AlertDialogCancelProps,
  alertDialogVariants,
} from '.'
import { buttonVariants } from '../button'

const props = withDefaults(defineProps<AlertDialogCancelProps>(), {
  variant: 'outline',
})

const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant', 'square')

const forwardedProps = useForwardProps(delegatedProps)

const dialogVariants = alertDialogVariants()

const variants = buttonVariants()
</script>

<template>
  <AlertDialogCancel
    data-slot="alert-dialog-cancel"
    v-bind="forwardedProps"
    :class="variants.root({
      class: dialogVariants.cancel({
        class: normalizeClass(props.class),
      }),
      size: props.size,
      square: props.square,
      variant: props.variant,
    })"
  >
    <slot />
  </AlertDialogCancel>
</template>

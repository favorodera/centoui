<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogAction, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type AlertDialogActionProps,
  alertDialogVariants,
} from '.'
import { buttonVariants } from '../button'

const props = defineProps<AlertDialogActionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant', 'square')

const forwardedProps = useForwardProps(delegatedProps)

const { action } = alertDialogVariants()

const { root } = buttonVariants()

const classNames = computed(() => root({
  class: action({
    class: props.class,
  }),
  size: props.size,
  square: props.square,
  variant: props.variant,
}))
</script>

<template>
  <AlertDialogAction
    data-slot="alert-dialog-action"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AlertDialogAction>
</template>

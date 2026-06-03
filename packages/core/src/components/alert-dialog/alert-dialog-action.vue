<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogAction, useForwardProps } from 'reka-ui'
import {
  type AlertDialogActionProps,
  alertDialogVariants,
} from '.'
import { computed } from 'vue'
import { buttonVariants } from '../button'

const props = defineProps<AlertDialogActionProps>()
const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant', 'square')
const forwardedProps = useForwardProps(delegatedProps)

const { action } = alertDialogVariants()
const { root } = buttonVariants()
const classNames = computed(() => root({
  size: props.size,
  variant: props.variant,
  square: props.square,
  class: action({ class: props.class }),
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

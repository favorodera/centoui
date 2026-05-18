<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogAction, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogActionProps,
  alertDialogVariants,
} from '.'
import { computed } from 'vue'
import { buttonVariants } from '../button'

const props = withDefaults(defineProps<AlertDialogActionProps>(), {
  variant: 'primary',
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

  const { action: alertDialogAction } = alertDialogVariants()
  
  return buttonRoot({
    class: alertDialogAction({ class: props.class }),
  })
})
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

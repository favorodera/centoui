<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogAction, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AlertDialogActionProps, alertDialogVariants } from '.'
import { buttonVariants } from '../button'

const props = defineProps<AlertDialogActionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant', 'square')

const forwardedProps = useForwardProps(delegatedProps)

const dialogVariants = alertDialogVariants()

const variants = buttonVariants()
</script>

<template>
  <AlertDialogAction
    data-slot="alert-dialog-action"
    v-bind="forwardedProps"
    :class="variants.root({
      class: dialogVariants.action({
        class: normalizeClass(props.class),
      }),
      size: props.size,
      square: props.square,
      variant: props.variant,
    })"
  >
    <slot />
  </AlertDialogAction>
</template>

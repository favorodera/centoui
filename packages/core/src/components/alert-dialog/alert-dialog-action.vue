<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogAction, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogActionProps,
  type AlertDialogActionSlots,
  injectCentouiAlertDialogRootContext,
} from '.'
import { computed } from 'vue'
import { buttonVariants } from '../button'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogActionSlots>()

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

const styles = computed(() => {
  return rootContext.styles.cancel({
    class: [
      buttonVariants({
        variant: props.variant,
        size: props.size,
        square: props.square,
      }).root(),
      props.class,
    ],
  })
})
</script>

<template>
  <AlertDialogAction
    data-slot="alert-dialog-action"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </AlertDialogAction>
</template>

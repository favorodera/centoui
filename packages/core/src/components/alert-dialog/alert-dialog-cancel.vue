<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogCancel, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogCancelProps,
  type AlertDialogCancelSlots,
  injectCentouiAlertDialogRootContext,
} from '.'
import { buttonVariants } from '../button'
import { computed } from 'vue'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogCancelSlots>()

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
  <AlertDialogCancel
    data-slot="alert-dialog-cancel"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </AlertDialogCancel>
</template>

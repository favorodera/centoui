<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, PopoverClose } from 'reka-ui'
import {
  type PopoverCloseSlots,
  type PopoverCloseProps,
  injectCentouiPopoverRootContext,
} from '.'
import { buttonVariants } from '../button'
import { computed } from 'vue'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverCloseSlots>()

const props = withDefaults(defineProps<PopoverCloseProps>(), {
  variant: 'outline',
})
const delegatedProps = reactiveOmit(
  props, 'class',
  'variant',
  'size',
  'square',
)
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  return rootContext.styles.close({
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
  <PopoverClose
    data-slot="popover-close"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </PopoverClose>
</template>

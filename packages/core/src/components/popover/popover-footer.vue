<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverFooterSlots,
  type PopoverFooterProps,
  injectCentouiPopoverRootContext,
} from '.'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverFooterSlots>()

const props = withDefaults(defineProps<PopoverFooterProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="popover-footer"
    v-bind="forwardedProps"
    :class="rootContext.styles.footer({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>

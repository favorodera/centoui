<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverHeaderSlots,
  type PopoverHeaderProps,
  injectCentouiPopoverRootContext,
} from '.'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverHeaderSlots>()

const props = withDefaults(defineProps<PopoverHeaderProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="popover-header"
    v-bind="forwardedProps"
    :class="rootContext.styles.header({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>

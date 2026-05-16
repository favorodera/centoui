<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverBodySlots,
  type PopoverBodyProps,
  injectCentouiPopoverRootContext,
} from '.'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverBodySlots>()

const props = withDefaults(defineProps<PopoverBodyProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="popover-body"
    v-bind="forwardedProps"
    :class="rootContext.styles.body({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverTitleSlots,
  type PopoverTitleProps,
  injectCentouiPopoverRootContext,
} from '.'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverTitleSlots>()

const props = withDefaults(defineProps<PopoverTitleProps>(), {
  as: 'h4',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="popover-title"
    v-bind="forwardedProps"
    :class="rootContext.styles.title({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>

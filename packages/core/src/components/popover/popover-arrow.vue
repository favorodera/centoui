<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, PopoverArrow } from 'reka-ui'
import {
  type PopoverArrowSlots,
  type PopoverArrowProps,
  injectCentouiPopoverRootContext,
} from '.'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverArrowSlots>()

const props = defineProps<PopoverArrowProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PopoverArrow
    data-slot="popover-arrow"
    v-bind="forwardedProps"
    :class="rootContext.styles.arrow({ class: props.class })"
  >
    <slot />
  </PopoverArrow>
</template>

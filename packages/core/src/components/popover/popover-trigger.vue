<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, PopoverTrigger } from 'reka-ui'
import {
  type PopoverTriggerSlots,
  type PopoverTriggerProps,
  injectCentouiPopoverRootContext,
} from '.'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverTriggerSlots>()

const props = defineProps<PopoverTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PopoverTrigger
    data-slot="popover-trigger"
    v-bind="forwardedProps"
    :class="rootContext.styles.trigger({ class: props.class })"
  >
    <slot />
  </PopoverTrigger>
</template>

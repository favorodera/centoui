<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipTrigger, useForwardProps } from 'reka-ui'
import { injectCentouiTooltipRootContext, type TooltipTriggerProps, type TooltipTriggerSlots } from './index'

const rootContext = injectCentouiTooltipRootContext()

defineSlots<TooltipTriggerSlots>()

const props = defineProps<TooltipTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TooltipTrigger
    data-slot="tooltip-trigger"
    v-bind="forwardedProps"
    :class="rootContext.styles.trigger({ class: props.class })"
  >
    <slot />
  </TooltipTrigger>
</template>

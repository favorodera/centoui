<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipArrow, useForwardProps } from 'reka-ui'
import { injectCentouiTooltipRootContext, type TooltipArrowProps, type TooltipArrowSlots } from './index'

const rootContext = injectCentouiTooltipRootContext()

defineSlots<TooltipArrowSlots>()

const props = defineProps<TooltipArrowProps>()

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TooltipArrow
    data-slot="tooltip-arrow"
    v-bind="forwardedProps"
    :class="rootContext.styles.arrow({ class: props.class })"
  >
    <slot />
  </TooltipArrow>
</template>

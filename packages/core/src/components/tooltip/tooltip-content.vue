<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipContent, useForwardPropsEmits } from 'reka-ui'
import {
  injectCentouiTooltipRootContext,
  type TooltipContentEmits,
  type TooltipContentProps,
  type TooltipContentSlots,
} from './index'

const rootContext = injectCentouiTooltipRootContext()

defineSlots<TooltipContentSlots>()

const emits = defineEmits<TooltipContentEmits>()

const props = withDefaults(defineProps<TooltipContentProps>(), {
  sideOffset: 4,
})
const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipContent
    data-slot="tooltip-content"
    :data-variant="props.variant"
    v-bind="forwardedPropsEmits"
    :class="rootContext.styles.content({class:props.class})"
  >
    <slot />
  </TooltipContent>
</template>

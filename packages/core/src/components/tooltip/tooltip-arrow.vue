<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipArrow, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { tooltipVariants, type TooltipArrowProps } from './index'

const props = defineProps<TooltipArrowProps>()

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { arrow } = tooltipVariants()

  return arrow({ class: props.class })
})
</script>

<template>
  <TooltipArrow
    data-slot="tooltip-arrow"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </TooltipArrow>
</template>

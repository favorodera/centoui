<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipArrow, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { tooltipVariants, type TooltipArrowProps, type TooltipArrowSlots } from './index'

defineSlots<TooltipArrowSlots>()

const props = defineProps<TooltipArrowProps>()

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { arrow } = tooltipVariants({})

  return arrow({ class: props.class })
})
</script>

<template>
  <TooltipArrow
    data-centoui-slot="tooltip-arrow"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </TooltipArrow>
</template>

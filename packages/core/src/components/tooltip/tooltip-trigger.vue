<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { injectTooltipRootContext, TooltipTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { tooltipVariants, type TooltipTriggerProps, type TooltipTriggerSlots } from './index'

defineSlots<TooltipTriggerSlots>()

const props = defineProps<TooltipTriggerProps>()

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { trigger } = tooltipVariants({})

  return trigger({ class: props.class })
})

// Inject TooltipRoot's context
const tooltipRootContext = injectTooltipRootContext()

// Computations
const state = computed(() => tooltipRootContext.stateAttribute.value)
</script>

<template>
  <TooltipTrigger
    data-centoui-slot="tooltip-trigger"
    :data-centoui-state="state"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </TooltipTrigger>
</template>

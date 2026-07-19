<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipTrigger, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type TooltipTriggerProps, tooltipVariants } from './index'

const props = defineProps<TooltipTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = tooltipVariants()
</script>

<template>
  <TooltipTrigger
    data-slot="tooltip-trigger"
    v-bind="forwardedProps"
    :class="variants.trigger({
      class:normalizeClass(props.class)
    })"
  >
    <slot />
  </TooltipTrigger>
</template>

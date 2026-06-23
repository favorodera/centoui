<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type TooltipTriggerProps, tooltipVariants } from './index'

const props = defineProps<TooltipTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { trigger } = tooltipVariants()

const classNames = computed(() => trigger({
  class: props.class,
}))
</script>

<template>
  <TooltipTrigger
    data-slot="tooltip-trigger"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </TooltipTrigger>
</template>

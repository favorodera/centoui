<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipContent, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  type TooltipContentEmits,
  type TooltipContentProps,
  tooltipVariants,
} from './index'

const emits = defineEmits<TooltipContentEmits>()

const props = withDefaults(defineProps<TooltipContentProps>(), {
  sideOffset: 4,
})
const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { content } = tooltipVariants()
  
  return content({ class: props.class })
})
</script>

<template>
  <TooltipContent
    data-slot="tooltip-content"
    :data-variant="props.variant"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot />
  </TooltipContent>
</template>

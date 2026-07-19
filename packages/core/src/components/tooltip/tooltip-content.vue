<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipArrow, TooltipContent, TooltipPortal, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type TooltipContentEmits,
  type TooltipContentProps,
  tooltipVariants,
} from './index'

const emits = defineEmits<TooltipContentEmits>()

const props = withDefaults(defineProps<TooltipContentProps>(), {
  showArrow: true,
  sideOffset: 0,
})

const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = tooltipVariants()
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      data-slot="tooltip-content"
      v-bind="forwardedPropsEmits"
      :class="variants.content({
        class: normalizeClass(props.class)
      })"
    >
      <slot />

      <TooltipArrow
        v-if="showArrow"
        :class="variants.arrow()"
        data-slot="tooltip-arrow"
      />
    </TooltipContent>
  </TooltipPortal>
</template>

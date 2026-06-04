<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TooltipArrow, TooltipContent, TooltipPortal, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  type TooltipContentEmits,
  type TooltipContentProps,
  tooltipVariants,
} from './index'

const emits = defineEmits<TooltipContentEmits>()

const props = withDefaults(defineProps<TooltipContentProps>(), {
  sideOffset: 0,
  showArrow: true,
})
const delegatedProps = reactiveOmit(props, 'class', 'showArrow')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { content, arrow } = tooltipVariants()
const classNames = computed(() => ({
  content: content({ class: props.class }),
  arrow: arrow(),
}))
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      data-slot="tooltip-content"
      v-bind="forwardedPropsEmits"
      :class="classNames.content"
    >

      <slot />

      <TooltipArrow
        v-if="showArrow"
        :class="classNames.arrow"
        data-slot="tooltip-arrow"
      />

    </TooltipContent>
  </TooltipPortal>
</template>

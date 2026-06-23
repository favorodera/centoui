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
  showArrow: true,
  sideOffset: 0,
})

const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { arrow, content } = tooltipVariants()

const classNames = computed(() => ({
  arrow: arrow(),
  content: content({
    class: props.class,
  }),
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

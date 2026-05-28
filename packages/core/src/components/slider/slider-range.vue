<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SliderRange, useForwardProps } from 'reka-ui'
import {
  injectCentouiSliderRootContext,
  type SliderRangeProps,
  sliderVariants,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSliderRootContext()

const props = defineProps<SliderRangeProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { range } = sliderVariants({
    orientation: rootContext.orientation,
  })
  
  return range({ class: props.class })
})
</script>

<template>
  <SliderRange
    data-slot="slider-range"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SliderRange>
</template>

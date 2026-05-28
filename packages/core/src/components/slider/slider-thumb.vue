<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SliderThumb, useForwardProps } from 'reka-ui'
import {
  type SliderThumbProps,
  injectCentouiSliderRootContext,
  sliderVariants,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSliderRootContext()

const props = defineProps<SliderThumbProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { thumb } = sliderVariants({
    orientation: rootContext.orientation,
  })
  
  return thumb({ class: props.class })
})
</script>

<template>
  <SliderThumb
    data-slot="slider-thumb"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SliderThumb>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SliderTrack, useForwardProps } from 'reka-ui'
import {
  type SliderTrackProps,
  injectCentouiSliderRootContext,
  sliderVariants,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSliderRootContext()

const props = defineProps<SliderTrackProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { track } = sliderVariants({
    orientation: rootContext.orientation,
  })
  
  return track({ class: props.class })
})
</script>

<template>
  <SliderTrack
    data-slot="slider-track"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SliderTrack>
</template>

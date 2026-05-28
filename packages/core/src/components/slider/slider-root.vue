<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SliderRoot, useForwardPropsEmits } from 'reka-ui'
import {
  provideCentouiSliderRootContext,
  type SliderRootEmits,
  type SliderRootProps,
  type SliderRootSlots,
  sliderVariants,
} from '.'
import { computed, reactive, toRef } from 'vue'

defineSlots<SliderRootSlots>()

const emits = defineEmits<SliderRootEmits>()

const props = defineProps<SliderRootProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { root } = sliderVariants({
    orientation: props.orientation,
  })
  
  return root({ class: props.class })
})

provideCentouiSliderRootContext(reactive({
  orientation: toRef(props, 'orientation'),
}))
</script>

<template>
  <SliderRoot
    v-slot="slotProps"
    data-slot="slider-root"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </SliderRoot>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type SliderEmits, type SliderProps, sliderVariants } from '.'

const emits = defineEmits<SliderEmits>()

const props = defineProps<SliderProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = sliderVariants()
</script>

<template>
  <SliderRoot
    v-slot="{modelValue}"
    data-slot="slider-root"
    v-bind="forwardedPropsEmits"
    :class="variants.root({
      class: normalizeClass(props.class),
      orientation: props.orientation,
    })"
  >
    <SliderTrack
      data-slot="slider-track"
      :class="variants.track({
        orientation: props.orientation,
      })"
    >
      <SliderRange
        data-slot="slider-range"
        :class="variants.range({
          orientation: props.orientation,
        })"
      />
    </SliderTrack>

    <SliderThumb
      v-for="_,key in modelValue"
      :key="key"
      data-slot="slider-thumb"
      :data-index="key"
      :class="variants.thumb({
        orientation: props.orientation,
      })"
    />
  </SliderRoot>
</template>

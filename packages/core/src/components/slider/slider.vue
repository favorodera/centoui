<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { type SliderEmits, type SliderProps, sliderVariants } from '.'

const emits = defineEmits<SliderEmits>()

const props = defineProps<SliderProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { range, root, thumb, track } = sliderVariants({ orientation: props.orientation })

const classNames = computed(() => ({
  range: range({
    orientation: props.orientation,
  }),
  root: root({
    class: props.class,
    orientation: props.orientation,
  }),
  thumb: thumb({
    orientation: props.orientation,
  }),
  track: track({
    orientation: props.orientation,
  }),
}))
</script>

<template>
  <SliderRoot
    v-slot="{modelValue}"
    data-slot="slider-root"
    v-bind="forwardedPropsEmits"
    :class="classNames.root"
  >
    <SliderTrack
      data-slot="slider-track"
      :class="classNames.track"
    >
      <SliderRange
        data-slot="slider-range"
        :class="classNames.range"
      />
    </SliderTrack>

    <SliderThumb
      v-for="_,key in modelValue"
      :key
      data-slot="slider-thumb"
      :data-index="key"
      :class="classNames.thumb"
    />
  </SliderRoot>
</template>

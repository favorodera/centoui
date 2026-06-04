<script setup lang="ts">
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'
import { sliderVariants, type SliderEmits, type SliderProps } from '.'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

const emits = defineEmits<SliderEmits>()

const props = defineProps<SliderProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root, track, range, thumb } = sliderVariants({ orientation: props.orientation })
const classNames = computed(() => ({
  root: root({ orientation: props.orientation, class: props.class }),
  track: track({ orientation: props.orientation }),
  range: range({ orientation: props.orientation }),
  thumb: thumb({ orientation: props.orientation }),
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

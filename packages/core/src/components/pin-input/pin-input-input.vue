<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PinInputInput, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type PinInputInputProps, pinInputVariants } from '.'
import { inputVariants } from '../input'

const props = withDefaults(defineProps<PinInputInputProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = inputVariants()

const { input } = pinInputVariants()

const classNames = computed(() => root({
  class: input({
    class: props.class,
  }),
  size: props.size,
}))
</script>

<template>
  <PinInputInput
    data-slot="pin-input-input"
    :data-size="size"
    :class="classNames"
    v-bind="forwardedProps"
  />
</template>

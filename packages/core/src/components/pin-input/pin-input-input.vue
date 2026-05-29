<script setup lang="ts">
import { computed } from 'vue'
import { PinInputInput, useForwardProps } from 'reka-ui'
import { pinInputVariants, type PinInputInputProps } from '.'
import { reactiveOmit } from '@vueuse/core'
import { inputVariants } from '../input'

const props = withDefaults(defineProps<PinInputInputProps>(), {
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root: inputRoot } = inputVariants({
    size: props.size,
  })

  const { input: pinInputInput } = pinInputVariants({
    inputSize: props.size,
  })

  return inputRoot({
    class: pinInputInput({ class: props.class }),
  })
})
</script>

<template>
  <PinInputInput
    data-slot="pin-input-input"
    :data-size="size"
    :class="classNames"
    v-bind="forwardedProps"
  />
</template>

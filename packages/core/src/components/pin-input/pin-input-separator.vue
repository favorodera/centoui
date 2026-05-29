<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, useForwardProps } from 'reka-ui'
import { pinInputVariants, type PinInputSeparatorProps } from '.'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PinInputSeparatorProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { separator } = pinInputVariants()

  return separator({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="pin-input-separator"
    :class="classNames"
    v-bind="forwardedProps"
  >
    <slot>—</slot>
  </Primitive>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, useForwardProps } from 'reka-ui'
import { pinInputGroupVariants, type PinInputGroupProps } from '.'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PinInputGroupProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = pinInputGroupVariants()

  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="pin-input-group"
    :class="classNames"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

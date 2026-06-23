<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type PinInputGroupProps, pinInputVariants } from '.'

const props = defineProps<PinInputGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { group } = pinInputVariants()

const classNames = computed(() => group({
  class: props.class,
}))
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

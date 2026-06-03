<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { buttonVariants, type ButtonProps } from '.'

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  variant: 'primary',
  size: 'md',
  square: false,
})
const delegatedProps = reactiveOmit(props, 'class', 'variant', 'size', 'square')
const forwardedProps = useForwardProps(delegatedProps)

const { root } = buttonVariants()
const classNames = computed(() => root({
  variant: props.variant,
  size: props.size,
  square: props.square,
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="button"
    :data-variant="variant"
    :data-size="size"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

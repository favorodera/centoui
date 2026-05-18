<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { badgeVariants, type BadgeProps } from '.'

const props = withDefaults(defineProps<BadgeProps>(), {
  as: 'span',
  variant: 'neutral',
  size: 'md',
  square: false,
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'variant',
  'size',
)
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = badgeVariants({
    variant: props.variant,
    size: props.size,
  })
  
  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="badge"
    :data-variant="variant"
    :data-size="size"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

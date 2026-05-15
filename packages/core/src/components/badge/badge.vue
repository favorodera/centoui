<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { badgeVariants, type BadgeProps, type BadgeSlots } from '.'

defineSlots<BadgeSlots>()

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

const styles = computed(() => {
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
    :class="styles"
  >
    <slot />
  </Primitive>
</template>

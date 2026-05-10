<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { badgeVariants, type BadgeProps, type BadgeSlots } from '.'

defineSlots<BadgeSlots>()

const props = withDefaults(defineProps<BadgeProps>(), {
  as: 'span',
  variant: 'solid',
  color: 'primary',
  size: 'md',
  square: false,
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class', 'variant', 'color', 'size', 'square')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { root } = badgeVariants({
    variant: props.variant,
    color: props.color,
    size: props.size,
    square: props.square,
  })
  
  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="badge"
    :data-centoui-variant="variant"
    :data-centoui-size="size"
    :data-centoui-color="color"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </Primitive>
</template>

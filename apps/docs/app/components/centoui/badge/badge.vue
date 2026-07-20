<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type BadgeProps, badgeVariants } from '.'

const props = withDefaults(defineProps<BadgeProps>(), {
  size: 'md',
  variant: 'primary',
})

const delegatedProps = reactiveOmit(props, 'class', 'variant', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const variants = badgeVariants()
</script>

<template>
  <Primitive
    data-slot="badge"
    :data-variant="variant"
    :data-size="size"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
      size: props.size,
      variant: props.variant,
    })"
  >
    <slot />
  </Primitive>
</template>

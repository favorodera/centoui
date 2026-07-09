<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type BadgeProps, badgeVariants } from '.'

const props = withDefaults(defineProps<BadgeProps>(), {
  as: 'span',
  size: 'md',
  variant: 'primary',
})

const delegatedProps = reactiveOmit(props, 'class', 'variant', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = badgeVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
  variant: props.variant,
}))
</script>

<template>
  <Primitive
    data-slot="badge"
    :data-variant="variant"
    v-bind="forwardedProps"
    :class="classNames"
    :data-size="size"
  >
    <slot />
  </Primitive>
</template>

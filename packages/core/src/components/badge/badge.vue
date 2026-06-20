<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type BadgeProps, badgeVariants } from '.'

const props = withDefaults(defineProps<BadgeProps>(), {
  as: 'span',
  variant: 'neutral',
})

const delegatedProps = reactiveOmit(props, 'class', 'variant')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = badgeVariants()

const classNames = computed(() => root({
  class: props.class,
  variant: props.variant,
}))
</script>

<template>
  <Primitive
    data-slot="badge"
    :data-variant="variant"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

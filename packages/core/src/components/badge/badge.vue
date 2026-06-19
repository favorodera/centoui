<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type BadgeProps, badgeVariants } from '.'

const props = withDefaults(defineProps<BadgeProps>(), {
  as: 'span',
  color: 'neutral',
})

const delegatedProps = reactiveOmit(props, 'class', 'color')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = badgeVariants()

const classNames = computed(() => root({
  class: props.class,
  color: props.color,
}))
</script>

<template>
  <Primitive
    data-slot="badge"
    :data-color="color"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type KbdProps, kbdVariants } from './index'

const props = withDefaults(defineProps<KbdProps>(), {
  as: 'kbd',
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = kbdVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
}))
</script>

<template>
  <Primitive
    data-slot="kbd"
    :data-size="size"
    :class="classNames"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

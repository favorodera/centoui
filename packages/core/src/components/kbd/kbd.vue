<script setup lang="ts">
import { Primitive, useForwardProps } from 'reka-ui'
import { kbdVariants, type KbdProps, type KbdSlots } from './index'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

defineSlots<KbdSlots>()

const props = withDefaults(defineProps<KbdProps>(), {
  as: 'kbd',
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { root } = kbdVariants({
    size: props.size,
  })
  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="kbd"
    :data-size="size"
    :class="styles"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

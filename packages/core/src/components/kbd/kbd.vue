<script setup lang="ts">
import { Primitive, useForwardProps } from 'reka-ui'
import { kbdVariants, type KbdProps, type KbdSlots } from './index'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

defineSlots<KbdSlots>()

const props = withDefaults(defineProps<KbdProps>(), {
  as: 'kbd',
  size: 'md',
  variant: 'neutral',
})

const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { root } = kbdVariants({
    size: props.size,
    variant: props.variant,
  })
  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="kbd"
    :data-size="size"
    :data-variant="variant"
    :class="styles"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

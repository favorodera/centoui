<script setup lang="ts">
import { Primitive, useForwardProps } from 'reka-ui'
import { kbdVariants, type KbdProps, type KbdSlots } from './index'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

defineSlots<KbdSlots>()

const props = withDefaults(defineProps<KbdProps>(), {
  as: 'kbd',
  size: 'md',
  color: 'neutral',
  variant: 'solid',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class', 'size', 'color', 'variant')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { root } = kbdVariants({
    size: props.size,
    color: props.color,
    variant: props.variant,
  })

  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="kbd"
    :data-centoui-size="size"
    :data-centoui-color="color"
    :data-centoui-variant="variant"
    :class="styles"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

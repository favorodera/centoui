<script setup lang="ts">
import { Primitive, useForwardProps } from 'reka-ui'
import { kbdVariants, type KbdGroupProps, type KbdGroupSlots } from './index'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

defineSlots<KbdGroupSlots>()

const props = withDefaults(defineProps<KbdGroupProps>(), {
  as: 'kbd',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { root } = kbdVariants()

  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="kbd-group"
    :class="styles"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

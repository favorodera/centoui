<script setup lang="ts">
import { Primitive, useForwardProps } from 'reka-ui'
import { kbdGroupVariants, type KbdGroupProps, type KbdGroupSlots } from './index'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

defineSlots<KbdGroupSlots>()

const props = withDefaults(defineProps<KbdGroupProps>(), {
  as: 'kbd',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { root } = kbdGroupVariants()
  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="kbd-group"
    :class="styles"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

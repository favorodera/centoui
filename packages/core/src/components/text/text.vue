<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { textVariants, type TextProps, type TextSlots } from '.'

defineSlots<TextSlots>()

const props = withDefaults(defineProps<TextProps>(), {
  as: 'span',
  size: 'md',
  weight: 'normal',
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'size',
  'weight',
)
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { root } = textVariants({
    size: props.size,
    weight: props.weight,
  })
  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="text"
    :data-size="size"
    :data-weight="weight"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </Primitive>
</template>

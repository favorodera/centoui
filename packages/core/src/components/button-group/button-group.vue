<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type ButtonGroupProps, buttonGroupVariants } from '.'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  orientation: 'horizontal',
})
const delegatedProps = reactiveOmit(props, 'class', 'orientation')

const forwardedProps = useForwardProps(delegatedProps)

const variants = buttonGroupVariants()
</script>

<template>
  <Primitive
    role="group"
    data-slot="button-group"
    :data-orientation="props.orientation"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
      orientation: props.orientation,
    })"
  >
    <slot />
  </Primitive>
</template>

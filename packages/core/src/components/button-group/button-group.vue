<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { buttonGroupVariants, type ButtonGroupProps } from '.'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  orientation: 'horizontal',
})
const delegatedProps = reactiveOmit(props, 'class', 'orientation')
const forwardedProps = useForwardProps(delegatedProps)

const { root } = buttonGroupVariants()
const classNames = computed(() => root({
  orientation: props.orientation,
  class: props.class,
}))
</script>

<template>
  <Primitive
    role="group"
    data-slot="button-group"
    :data-orientation="props.orientation"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, useForwardProps } from 'reka-ui'
import { buttonGroupContextKey, buttonGroupVariants, type ButtonGroupProps, type ButtonGroupSlots } from '.'
import { reactiveOmit } from '@vueuse/core'
import { computed, provide, reactive, toRef } from 'vue'

defineSlots<ButtonGroupSlots>()

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  as: 'div',
  orientation: 'horizontal',
})

// Strip component-specific props and forward native props.
const delegatedProps = reactiveOmit(props, 'class', 'orientation')
const forwardedProps = useForwardProps(delegatedProps)

// Compute class string for the root slot.
const styles = computed(() => {
  const { root } = buttonGroupVariants({
    orientation: props.orientation,
  })
  return root({ class: props.class })
})

// Provide orientation to child components (e.g. ButtonGroupSeparator).
provide(
  buttonGroupContextKey,
  reactive({
    orientation: toRef(props, 'orientation'),
  }),
)
</script>

<template>
  <Primitive
    role="group"
    data-centoui-slot="button-group"
    :data-centoui-orientation="props.orientation"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </Primitive>
</template>

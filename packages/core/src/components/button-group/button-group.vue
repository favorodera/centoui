<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { buttonGroupVariants, provideButtonGroupContext, type ButtonGroupProps, type ButtonGroupSlots } from '.'

defineSlots<ButtonGroupSlots>()

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  as: 'div',
  orientation: 'horizontal',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class', 'orientation')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { root } = buttonGroupVariants({
    orientation: props.orientation,
  })
  
  return root({ class: props.class })
})

// Provide context to child components.
provideButtonGroupContext(
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

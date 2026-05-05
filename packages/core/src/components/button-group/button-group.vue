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

const delegatedProps = reactiveOmit(props, 'class', 'orientation')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { root } = buttonGroupVariants({
    orientation: props.orientation,
  })
  return root({ class: props.class })
})

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

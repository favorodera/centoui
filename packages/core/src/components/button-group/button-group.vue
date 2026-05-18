<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { buttonGroupVariants, provideCentouiButtonGroupContext, type ButtonGroupProps } from '.'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  as: 'div',
  orientation: 'horizontal',
})
const delegatedProps = reactiveOmit(props, 'class', 'orientation')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = buttonGroupVariants({
    orientation: props.orientation,
  })

  return root({ class: props.class })
})

provideCentouiButtonGroupContext(reactive({
  orientation: toRef(props, 'orientation'),
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

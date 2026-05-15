<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { buttonGroupVariants, provideCentouiButtonGroupContext, type ButtonGroupProps, type ButtonGroupSlots } from '.'

defineSlots<ButtonGroupSlots>()

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  as: 'div',
  orientation: 'horizontal',
})
const delegatedProps = reactiveOmit(props, 'class', 'orientation')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => buttonGroupVariants({
  orientation: props.orientation,
}))

provideCentouiButtonGroupContext(reactive({
  styles,
  orientation: toRef(props, 'orientation'),
}))
</script>

<template>
  <Primitive
    role="group"
    data-slot="button-group"
    :data-orientation="props.orientation"
    v-bind="forwardedProps"
    :class="styles.root({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>

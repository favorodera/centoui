<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type FieldProps, fieldVariants } from '.'

const props = withDefaults(defineProps<FieldProps>(), {
  orientation: 'vertical',
})

const delegatedProps = reactiveOmit(props, 'class', 'orientation')

const forwardedProps = useForwardProps(delegatedProps)

const { field } = fieldVariants()

const classNames = computed(() => field({
  class: props.class,
  fieldOrientation:props.orientation
}))
</script>

<template>
  <Primitive
    role="group"
    data-slot="field"
    :data-orientation="orientation"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

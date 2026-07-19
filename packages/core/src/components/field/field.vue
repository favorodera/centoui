<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type FieldProps, fieldVariants } from '.'

const props = withDefaults(defineProps<FieldProps>(), {
  orientation: 'vertical',
})

const delegatedProps = reactiveOmit(props, 'class', 'orientation')

const forwardedProps = useForwardProps(delegatedProps)

const variants = fieldVariants()
</script>

<template>
  <Primitive
    role="group"
    data-slot="field"
    :data-orientation="orientation"
    v-bind="forwardedProps"
    :class="variants.field({
      class: normalizeClass(props.class),
      fieldOrientation: props.orientation,
    })"
  >
    <slot />
  </Primitive>
</template>

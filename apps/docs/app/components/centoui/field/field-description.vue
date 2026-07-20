<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type FieldDescriptionProps, fieldVariants } from '.'

const props = defineProps<FieldDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = fieldVariants()
</script>

<template>
  <Primitive
    data-slot="field-description"
    v-bind="forwardedProps"
    :class="variants.description({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>

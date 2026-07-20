<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type FieldContentProps, fieldVariants } from '.'

const props = defineProps<FieldContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = fieldVariants()
</script>

<template>
  <Primitive
    data-slot="field-content"
    v-bind="forwardedProps"
    :class="variants.content({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>

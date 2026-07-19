<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type FieldGroupProps, fieldVariants } from '.'

const props = defineProps<FieldGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = fieldVariants()
</script>

<template>
  <Primitive
    data-slot="field-group"
    v-bind="forwardedProps"
    :class="variants.group({
      class: normalizeClass(props.class)
    })"
  >
    <slot />
  </Primitive>
</template>

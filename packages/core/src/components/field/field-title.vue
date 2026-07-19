<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type FieldTitleProps, fieldVariants } from '.'

const props = defineProps<FieldTitleProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = fieldVariants()
</script>

<template>
  <Primitive
    data-slot="field-title"
    v-bind="forwardedProps"
    :class="variants.title({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>

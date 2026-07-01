<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type FieldDescriptionProps, fieldVariants } from '.'

const props = defineProps<FieldDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { description } = fieldVariants()

const classNames = computed(() => description({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="field-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

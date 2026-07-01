<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type FieldContentProps, fieldVariants } from '.'

const props = defineProps<FieldContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { content } = fieldVariants()

const classNames = computed(() => content({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="field-content"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

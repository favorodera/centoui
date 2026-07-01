<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type FieldTitleProps, fieldVariants } from '.'

const props = defineProps<FieldTitleProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { title } = fieldVariants()

const classNames = computed(() => title({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="field-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

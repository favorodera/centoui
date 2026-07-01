<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type FieldGroupProps, fieldVariants } from '.'

const props = defineProps<FieldGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { group } = fieldVariants()

const classNames = computed(() => group({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="field-group"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

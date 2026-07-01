<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type FieldContentProps, fieldVariants } from '.'
import { Label, labelVariants } from '../label'

const props = defineProps<FieldContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = labelVariants()

const { label } = fieldVariants()

const classNames = computed(() => root({
  class: label({
    class: props.class,
  }),
}))
</script>

<template>
  <Label
    data-slot="field-label"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Label>
</template>

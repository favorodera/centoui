<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectLabel } from 'reka-ui'
import {
  selectVariants,
  type SelectLabelProps,
} from '.'
import { computed } from 'vue'

const props = defineProps<SelectLabelProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { label } = selectVariants()
const classNames = computed(() => label({ class: props.class }))
</script>

<template>
  <SelectLabel
    data-slot="select-label"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SelectLabel>
</template>

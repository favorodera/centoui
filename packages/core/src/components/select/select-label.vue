<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectLabel, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SelectLabelProps,
  selectVariants,
} from '.'

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

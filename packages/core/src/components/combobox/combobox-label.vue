<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxLabel, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type ComboboxLabelProps,
  comboboxVariants,
  injectRootContext,
} from '.'

const props = defineProps<ComboboxLabelProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { label } = comboboxVariants()

const classNames = computed(() => label({
  class: props.class,
  size: rootContext?.size,
}))
</script>

<template>
  <ComboboxLabel
    data-slot="combobox-label"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </ComboboxLabel>
</template>

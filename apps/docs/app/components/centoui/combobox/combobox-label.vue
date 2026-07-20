<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxLabel, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type ComboboxLabelProps,
  comboboxVariants,
  injectRootContext,
} from '.'

const props = defineProps<ComboboxLabelProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = comboboxVariants()
</script>

<template>
  <ComboboxLabel
    data-slot="combobox-label"
    v-bind="forwardedProps"
    :class="variants.label({
      size: rootContext?.size,
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </ComboboxLabel>
</template>

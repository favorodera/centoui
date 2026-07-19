<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectLabel, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  injectRootContext,
  type SelectLabelProps,
  selectVariants,
} from '.'

const props = defineProps<SelectLabelProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = selectVariants()
</script>

<template>
  <SelectLabel
    data-slot="select-label"
    v-bind="forwardedProps"
    :class="variants.label({
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
  >
    <slot />
  </SelectLabel>
</template>

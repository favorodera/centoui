<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxEmpty, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type ComboboxEmptyProps,
  comboboxVariants,
  injectRootContext,
} from '.'

const props = defineProps<ComboboxEmptyProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = comboboxVariants()
</script>

<template>
  <ComboboxEmpty
    v-bind="forwardedProps"
    data-slot="combobox-empty"
    :class="variants.empty({
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
  >
    <slot />
  </ComboboxEmpty>
</template>

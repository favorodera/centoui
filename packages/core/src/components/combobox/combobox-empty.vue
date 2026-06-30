<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxEmpty, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type ComboboxEmptyProps,
  comboboxVariants,
  injectRootContext,
} from '.'

const props = defineProps<ComboboxEmptyProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { empty } = comboboxVariants()

const classNames = computed(() => empty({
  class: props.class,
  size: rootContext?.size,
}))
</script>

<template>
  <ComboboxEmpty
    v-bind="forwardedProps"
    data-slot="combobox-empty"
    :class="classNames"
  >
    <slot />
  </ComboboxEmpty>
</template>

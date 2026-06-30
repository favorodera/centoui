<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxGroup, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type ComboboxGroupProps,
  comboboxVariants,
} from '.'

const props = defineProps<ComboboxGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { group } = comboboxVariants()

const classNames = computed(() => group({
  class: props.class,
}))
</script>

<template>
  <ComboboxGroup
    data-slot="combobox-group"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </ComboboxGroup>
</template>

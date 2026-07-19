<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxGroup, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type ComboboxGroupProps,
  comboboxVariants,
} from '.'

const props = defineProps<ComboboxGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = comboboxVariants()
</script>

<template>
  <ComboboxGroup
    data-slot="combobox-group"
    v-bind="forwardedProps"
    :class="variants.group({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </ComboboxGroup>
</template>

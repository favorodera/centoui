<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectGroup, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type SelectGroupProps,
  selectVariants,
} from '.'

const props = defineProps<SelectGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = selectVariants()
</script>

<template>
  <SelectGroup
    data-slot="select-group"
    v-bind="forwardedProps"
    :class="variants.group({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </SelectGroup>
</template>

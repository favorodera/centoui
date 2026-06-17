<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectGroup, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SelectGroupProps,
  selectVariants,
} from '.'

const props = defineProps<SelectGroupProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { group } = selectVariants()
const classNames = computed(() => group({ class: props.class }))
</script>

<template>
  <SelectGroup
    data-slot="select-group"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SelectGroup>
</template>

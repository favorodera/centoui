<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectGroup } from 'reka-ui'
import {
  selectVariants,
  type SelectGroupProps,
} from '.'
import { computed } from 'vue'

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

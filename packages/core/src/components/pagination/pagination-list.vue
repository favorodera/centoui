<script setup lang="ts">
import { PaginationList, useForwardProps } from 'reka-ui'
import {
  type PaginationListProps,
  type PaginationListSlots,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'

defineSlots<PaginationListSlots>()

const props = defineProps<PaginationListProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { list } = paginationVariants()

  return list({ class: props.class })
})
</script>

<template>
  <PaginationList
    v-slot="slotProps"
    data-slot="pagination-list"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </PaginationList>
</template>

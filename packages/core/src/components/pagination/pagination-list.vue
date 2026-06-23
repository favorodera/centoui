<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationList, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type PaginationListProps,
  type PaginationListSlots,
  paginationVariants,
} from '.'

defineSlots<PaginationListSlots>()

const props = defineProps<PaginationListProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { list } = paginationVariants()

const classNames = computed(() => list({
  class: props.class,
}))
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

<script setup lang="ts">
import { PaginationListItem, useForwardProps } from 'reka-ui'
import {
  type PaginationListItemProps,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PaginationListItemProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { listItem } = paginationVariants()

  return listItem({ class: props.class })
})
</script>

<template>
  <PaginationListItem
    data-slot="pagination-list-item"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PaginationListItem>
</template>

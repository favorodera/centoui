<script setup lang="ts">
import { PaginationListItem, useForwardProps } from 'reka-ui'
import {
  type PaginationListItemProps,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { buttonVariants } from '../button'


const props = withDefaults(defineProps<PaginationListItemProps>(), {
  variant: 'ghost',
})
const delegatedProps = reactiveOmit(props, 'class', 'square', 'variant', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const { listItem } = paginationVariants()
const { root } = buttonVariants()
const classNames = computed(() => root({
  variant: props.variant,
  size: props.size,
  square: props.square,
  class: listItem({ class: props.class }),
}))
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

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationListItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type PaginationListItemProps,
  paginationVariants,
} from '.'
import { buttonVariants } from '../button'

const props = withDefaults(defineProps<PaginationListItemProps>(), {
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'class', 'square', 'variant', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const { listItem } = paginationVariants()

const { root } = buttonVariants()

const classNames = computed(() => root({
  class: listItem({
    class: props.class,
  }),
  size: props.size,
  square: props.square,
  variant: props.variant,
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

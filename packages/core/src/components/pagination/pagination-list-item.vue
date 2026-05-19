<script setup lang="ts">
import { PaginationListItem, useForwardProps } from 'reka-ui'
import {
  type PaginationListItemProps,
  injectCentouiPaginationRootContext,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { buttonVariants } from '../button'

const rootContext = injectCentouiPaginationRootContext()

const props = withDefaults(defineProps<PaginationListItemProps>(), {
  active: false,
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'activeVariant',
  'variant',
  'size',
  'active',
)
const forwardedProps = useForwardProps(delegatedProps)

const resolvedVariant = computed(() => {
  const activeVariant = props.activeVariant ?? rootContext.activeVariant
  const variant = props.variant ?? rootContext.variant

  return props.active ? activeVariant : variant
})
const resolvedSize = computed(() => props.size ?? rootContext.size)

const classNames = computed(() => {
  const { root: buttonRoot } = buttonVariants({
    variant: resolvedVariant.value,
    size: resolvedSize.value,
  })

  const { listItem: paginationListItem } = paginationVariants()

  return buttonRoot({
    class: paginationListItem({ class: props.class }),
  })
})
</script>

<template>
  <PaginationListItem
    data-slot="pagination-list-item"
    :data-size="resolvedSize"
    :data-variant="resolvedVariant"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PaginationListItem>
</template>

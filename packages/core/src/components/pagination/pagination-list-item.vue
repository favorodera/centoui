<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationListItem, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
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

const variants = buttonVariants()
</script>

<template>
  <PaginationListItem
    data-slot="pagination-list-item"
    v-bind="forwardedProps"
    :class="variants.root({
      class: paginationVariants().listItem({
        class: normalizeClass(props.class),
      }),
      size: props.size,
      square: props.square,
      variant: props.variant,
    })"
  >
    <slot />
  </PaginationListItem>
</template>

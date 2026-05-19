<script setup lang="ts">
import { PaginationEllipsis, useForwardProps } from 'reka-ui'
import {
  type PaginationEllipsisProps,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PaginationEllipsisProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { ellipsis } = paginationVariants()

  return ellipsis({ class: props.class })
})
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PaginationEllipsis>
</template>

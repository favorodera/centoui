<script setup lang="ts">
import { PaginationNext, useForwardProps } from 'reka-ui'
import {
  type PaginationNextProps,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PaginationNextProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { next } = paginationVariants()

  return next({ class: props.class })
})
</script>

<template>
  <PaginationNext
    data-slot="pagination-next"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PaginationNext>
</template>

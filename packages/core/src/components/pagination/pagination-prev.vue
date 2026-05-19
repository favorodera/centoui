<script setup lang="ts">
import { PaginationPrev, useForwardProps } from 'reka-ui'
import {
  type PaginationPrevProps,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PaginationPrevProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { prev } = paginationVariants()

  return prev({ class: props.class })
})
</script>

<template>
  <PaginationPrev
    data-slot="pagination-prev"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PaginationPrev>
</template>

<script setup lang="ts">
import { PaginationFirst, useForwardProps } from 'reka-ui'
import {
  type PaginationFirstProps,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PaginationFirstProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { first } = paginationVariants()

  return first({ class: props.class })
})
</script>

<template>
  <PaginationFirst
    data-slot="pagination-first"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PaginationFirst>
</template>

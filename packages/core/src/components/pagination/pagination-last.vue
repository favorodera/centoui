<script setup lang="ts">
import { PaginationLast, useForwardProps } from 'reka-ui'
import {
  type PaginationLastProps,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PaginationLastProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { last } = paginationVariants()

  return last({ class: props.class })
})
</script>

<template>
  <PaginationLast
    data-slot="pagination-last"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PaginationLast>
</template>

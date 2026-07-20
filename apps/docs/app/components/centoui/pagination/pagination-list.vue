<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationList, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PaginationListProps,
  type PaginationListSlots,
  paginationVariants,
} from '.'

defineSlots<PaginationListSlots>()

const props = defineProps<PaginationListProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = paginationVariants()
</script>

<template>
  <PaginationList
    v-slot="slotProps"
    data-slot="pagination-list"
    v-bind="forwardedProps"
    :class="variants.list({
      class: normalizeClass(props.class),
    })"
  >
    <slot v-bind="slotProps" />
  </PaginationList>
</template>

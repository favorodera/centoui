<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationEllipsis, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  type PaginationEllipsisProps,
  paginationVariants,
} from '.'
import { Icon } from '../icon'

const props = defineProps<PaginationEllipsisProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { ellipsis } = paginationVariants()

const classNames = computed(() => ellipsis({
  class: props.class,
}))
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :name="config.icons.ellipsis" />
      <span class="sr-only">More pages</span>
    </slot>
  </PaginationEllipsis>
</template>

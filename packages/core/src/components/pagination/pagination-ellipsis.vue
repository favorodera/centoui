<script setup lang="ts">
import { PaginationEllipsis, useForwardProps } from 'reka-ui'
import {
  type PaginationEllipsisProps,
  paginationVariants,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import config from '#centoui/config'
import { Icon } from '../icon'

const props = defineProps<PaginationEllipsisProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { ellipsis } = paginationVariants()
const classNames = computed(() => ellipsis({ class: props.class }))
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.ellipsis" />
      <span class="sr-only">More pages</span>
    </slot>
  </PaginationEllipsis>
</template>

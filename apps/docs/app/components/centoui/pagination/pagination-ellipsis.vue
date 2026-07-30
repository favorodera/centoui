<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationEllipsis, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PaginationEllipsisProps,
  paginationVariants,
} from '.'
import { Icon, iconsConfig } from '../icon'

const props = defineProps<PaginationEllipsisProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = paginationVariants()
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="forwardedProps"
    :class="variants.ellipsis({
      class: normalizeClass(props.class),
    })"
  >
    <slot>
      <Icon :name="iconsConfig.ellipsis" />
      <span class="sr-only">More pages</span>
    </slot>
  </PaginationEllipsis>
</template>

<script setup lang="ts">
import { PaginationPrev, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Icon } from '../icon'
import config from '#centoui/config'
import { buttonVariants } from '../button'
import {
  type PaginationPrevProps,
  paginationVariants,
} from '.'

const props = withDefaults(defineProps<PaginationPrevProps>(), {
  square: true,
  variant: 'ghost',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { root } = buttonVariants()
const { prev } = paginationVariants()
const classNames = computed(() => root({
  variant: props.variant,
  size: props.size,
  square: props.square,
  class: prev({ class: props.class }),
}))
</script>

<template>
  <PaginationPrev
    data-slot="pagination-prev"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronLeft" />
      <span class="sr-only">Previous page</span>
    </slot>
  </PaginationPrev>
</template>

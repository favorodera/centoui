<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationNext, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  type PaginationNextProps,
  paginationVariants,
} from '.'
import { buttonVariants } from '../button'
import { Icon } from '../icon'

const props = withDefaults(defineProps<PaginationNextProps>(), {
  square: true,
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'class', 'square', 'variant', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const { next } = paginationVariants()

const { root } = buttonVariants()

const classNames = computed(() => root({
  class: next({
    class: props.class,
  }),
  size: props.size,
  square: props.square,
  variant: props.variant,
}))
</script>

<template>
  <PaginationNext
    data-slot="pagination-next"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronRight" />
      <span class="sr-only">Next page</span>
    </slot>
  </PaginationNext>
</template>

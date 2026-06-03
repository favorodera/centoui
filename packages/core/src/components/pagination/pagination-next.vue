<script setup lang="ts">
import { PaginationNext, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Icon } from '../icon'
import config from '#centoui/config'
import { buttonVariants } from '../button'
import {
  type PaginationNextProps,
  paginationVariants,
} from '.'

const props = withDefaults(defineProps<PaginationNextProps>(), {
  square: true,
  variant: 'ghost',
})
const delegatedProps = reactiveOmit(props, 'class', 'square', 'variant', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const { next } = paginationVariants()
const { root } = buttonVariants()
const classNames = computed(() => root({
  variant: props.variant,
  size: props.size,
  square: props.square,
  class: next({ class: props.class }),
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

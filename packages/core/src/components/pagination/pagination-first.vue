<script setup lang="ts">
import { PaginationFirst, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Icon } from '../icon'
import config from '#centoui/config'
import { buttonVariants } from '../button'
import {
  type PaginationFirstProps,
  paginationVariants,
} from '.'

const props = withDefaults(defineProps<PaginationFirstProps>(), {
  square: true,
  variant: 'ghost',
})
const delegatedProps = reactiveOmit(props, 'class', 'square', 'variant', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const { first } = paginationVariants()
const { root } = buttonVariants()
const classNames = computed(() => root({
  variant: props.variant,
  size: props.size,
  square: props.square,
  class: first({ class: props.class }),
}))
</script>

<template>
  <PaginationFirst
    data-slot="pagination-first"
    :data-variant="variant"
    :data-size="size"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronDoubleLeft" />
      <span class="sr-only">First page</span>
    </slot>
  </PaginationFirst>
</template>

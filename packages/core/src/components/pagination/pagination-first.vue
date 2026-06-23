<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationFirst, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  type PaginationFirstProps,
  paginationVariants,
} from '.'
import { buttonVariants } from '../button'
import { Icon } from '../icon'

const props = withDefaults(defineProps<PaginationFirstProps>(), {
  square: true,
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'class', 'square', 'variant', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const { first } = paginationVariants()

const { root } = buttonVariants()

const classNames = computed(() => root({
  class: first({
    class: props.class,
  }),
  size: props.size,
  square: props.square,
  variant: props.variant,
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

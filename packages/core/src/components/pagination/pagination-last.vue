<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationLast, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  type PaginationLastProps,
  paginationVariants,
} from '.'
import { buttonVariants } from '../button'
import { Icon } from '../icon'

const props = withDefaults(defineProps<PaginationLastProps>(), {
  square: true,
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'class', 'square', 'variant', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const { last } = paginationVariants()

const { root } = buttonVariants()

const classNames = computed(() => root({
  class: last({
    class: props.class,
  }),
  size: props.size,
  square: props.square,
  variant: props.variant,
}))
</script>

<template>
  <PaginationLast
    data-slot="pagination-last"
    :data-variant="variant"
    :data-size="size"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :name="config.icons.chevronDoubleRight" />
      <span class="sr-only">Last page</span>
    </slot>
  </PaginationLast>
</template>

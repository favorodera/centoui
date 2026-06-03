<script setup lang="ts">
import { PaginationLast, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Icon } from '../icon'
import config from '#centoui/config'
import { buttonVariants } from '../button'
import {
  type PaginationLastProps,
  paginationVariants,
} from '.'

const props = withDefaults(defineProps<PaginationLastProps>(), {
  square: true,
  variant: 'ghost',
})
const delegatedProps = reactiveOmit(props, 'class', 'square', 'variant', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const { last } = paginationVariants()
const { root } = buttonVariants()
const classNames = computed(() => root({
  variant: props.variant,
  size: props.size,
  square: props.square,
  class: last({ class: props.class }),
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
      <Icon :icon="config.icons.chevronDoubleRight" />
      <span class="sr-only">Last page</span>
    </slot>
  </PaginationLast>
</template>

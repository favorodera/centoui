<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationFirst, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
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

const variants = buttonVariants()
</script>

<template>
  <PaginationFirst
    data-slot="pagination-first"
    :data-variant="variant"
    :data-size="size"
    v-bind="forwardedProps"
    :class="variants.root({
      class:paginationVariants().first({
        class: normalizeClass(props.class),
      }),
      size: props.size,
      square: props.square,
      variant: props.variant,
    })"
  >
    <slot>
      <Icon :name="config.icons.chevronDoubleLeft" />
      <span class="sr-only">First page</span>
    </slot>
  </PaginationFirst>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationLast, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
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

const variants = buttonVariants()
</script>

<template>
  <PaginationLast
    data-slot="pagination-last"
    :data-variant="variant"
    :data-size="size"
    v-bind="forwardedProps"
    :class="variants.root({
      class:paginationVariants().last({
        class: normalizeClass(props.class),
      }),
      size: props.size,
      square: props.square,
      variant: props.variant,
    })"
  >
    <slot>
      <Icon :name="config.icons.chevronDoubleRight" />
      <span class="sr-only">Last page</span>
    </slot>
  </PaginationLast>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationPrev, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import config from '#centoui/config'
import {
  type PaginationPrevProps,
  paginationVariants,
} from '.'
import { buttonVariants } from '../button'
import { Icon } from '../icon'

const props = withDefaults(defineProps<PaginationPrevProps>(), {
  square: true,
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = buttonVariants()
</script>

<template>
  <PaginationPrev
    data-slot="pagination-prev"
    v-bind="forwardedProps"
    :class="variants.root({
      class:paginationVariants().prev({
        class: normalizeClass(props.class),
      }),
      size: props.size,
      square: props.square,
      variant: props.variant,
    })"
  >
    <slot>
      <Icon :name="config.icons.chevronLeft" />
      <span class="sr-only">Previous page</span>
    </slot>
  </PaginationPrev>
</template>

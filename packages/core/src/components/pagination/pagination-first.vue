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
  injectCentouiPaginationRootContext,
} from '.'

const rootContext = injectCentouiPaginationRootContext()

const props = withDefaults(defineProps<PaginationFirstProps>(), {
  square: undefined,
})
const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant', 'square')
const forwardedProps = useForwardProps(delegatedProps)

const resolvedVariant = computed(() => props.variant ?? rootContext.variant)
const resolvedSize = computed(() => props.size ?? rootContext.size)
const resolvedSquare = computed(() => props.square ?? rootContext.square)

const classNames = computed(() => {
  const { root: buttonRoot } = buttonVariants({
    variant: resolvedVariant.value,
    size: resolvedSize.value,
    square: resolvedSquare.value,
  })

  const { first: paginationFirst } = paginationVariants()

  return buttonRoot({
    class: paginationFirst({ class: props.class }),
  })
})
</script>

<template>
  <PaginationFirst
    data-slot="pagination-first"
    v-bind="forwardedProps"
    :data-variant="resolvedVariant"
    :data-size="resolvedSize"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronDoubleLeft" />
      <span class="sr-only">First page</span>
    </slot>
  </PaginationFirst>
</template>

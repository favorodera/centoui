<script setup lang="ts">
import { PaginationPrev, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Icon } from '../icon'
import config from '#centoui/config'
import { buttonVariants } from '../button'
import {
  type PaginationPrevProps,
  paginationVariants,
  injectCentouiPaginationRootContext,
} from '.'

const rootContext = injectCentouiPaginationRootContext()

const props = withDefaults(defineProps<PaginationPrevProps>(), {
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

  const { prev: paginationPrev } = paginationVariants()

  return buttonRoot({
    class: paginationPrev({ class: props.class }),
  })
})
</script>

<template>
  <PaginationPrev
    data-slot="pagination-prev"
    v-bind="forwardedProps"
    :data-variant="resolvedVariant"
    :data-size="resolvedSize"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronLeft" />
      <span class="sr-only">Previous page</span>
    </slot>
  </PaginationPrev>
</template>

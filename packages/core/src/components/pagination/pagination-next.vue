<script setup lang="ts">
import { PaginationNext, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import config from '#centoui/config'
import { buttonVariants } from '../button'
import {
  type PaginationNextProps,
  paginationVariants,
  injectCentouiPaginationRootContext,
} from '.'

const rootContext = injectCentouiPaginationRootContext()

const props = withDefaults(defineProps<PaginationNextProps>(), {
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

  const { next: paginationNext } = paginationVariants()

  return buttonRoot({
    class: paginationNext({ class: props.class }),
  })
})
</script>

<template>
  <PaginationNext
    data-slot="pagination-next"
    v-bind="forwardedProps"
    :data-variant="resolvedVariant"
    :data-size="resolvedSize"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronRight" />
      <span class="sr-only">Next page</span>
    </slot>
  </PaginationNext>
</template>

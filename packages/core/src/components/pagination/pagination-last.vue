<script setup lang="ts">
import { PaginationLast, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import config from '#centoui/config'
import { buttonVariants } from '../button'
import {
  type PaginationLastProps,
  paginationVariants,
  injectCentouiPaginationRootContext,
} from '.'

const rootContext = injectCentouiPaginationRootContext()

const props = withDefaults(defineProps<PaginationLastProps>(), {
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

  const { last: paginationLast } = paginationVariants()

  return buttonRoot({
    class: paginationLast({ class: props.class }),
  })
})
</script>

<template>
  <PaginationLast
    data-slot="pagination-last"
    v-bind="forwardedProps"
    :data-variant="resolvedVariant"
    :data-size="resolvedSize"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronsRight" />
      <span class="sr-only">Last page</span>
    </slot>
  </PaginationLast>
</template>

<script setup lang="ts">
import { PaginationRoot, useForwardPropsEmits } from 'reka-ui'
import { reactive, toRef } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
  type PaginationRootProps,
  type PaginationRootEmits,
  type PaginationRootSlots,
  paginationVariants,
  provideCentouiPaginationRootContext,
} from '.'
import { computed } from 'vue'

defineSlots<PaginationRootSlots>()

const emits = defineEmits<PaginationRootEmits>()

const props = withDefaults(defineProps<PaginationRootProps>(), {
  size: 'md',
  variant: 'ghost',
  activeVariant: 'outline',
  square: true,
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'size',
  'variant',
  'activeVariant',
  'square',
)

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

provideCentouiPaginationRootContext(reactive({
  size: toRef(props, 'size'),
  variant: toRef(props, 'variant'),
  activeVariant: toRef(props, 'activeVariant'),
  square: toRef(props, 'square'),
}))

const classNames = computed(() => {
  const { root } = paginationVariants()

  return root({ class: props.class })
})
</script>

<template>
  <PaginationRoot
    v-slot="slotProps"
    data-slot="pagination-root"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </PaginationRoot>
</template>

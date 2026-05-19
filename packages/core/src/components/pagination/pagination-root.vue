<script setup lang="ts">
import { PaginationRoot, useForwardPropsEmits } from 'reka-ui'
import {
  type PaginationRootProps,
  type PaginationRootEmits,
  paginationVariants,
  type PaginationRootSlots,
} from '.'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'

defineSlots<PaginationRootSlots>()

const emits = defineEmits<PaginationRootEmits>()

const props = defineProps<PaginationRootProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

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

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationRoot, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PaginationRootEmits,
  type PaginationRootProps,
  type PaginationRootSlots,
  paginationVariants,
} from '.'

defineSlots<PaginationRootSlots>()

const emits = defineEmits<PaginationRootEmits>()

const props = defineProps<PaginationRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = paginationVariants()
</script>

<template>
  <PaginationRoot
    v-slot="slotProps"
    data-slot="pagination-root"
    v-bind="forwardedPropsEmits"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot v-bind="slotProps" />
  </PaginationRoot>
</template>

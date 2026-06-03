<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PaginationRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
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

const { root } = paginationVariants()
const classNames = computed(() => root({ class: props.class }))
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

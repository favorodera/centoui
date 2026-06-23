<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SheetFooterProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetFooterProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { footer } = sheetVariants()

const classNames = computed(() => footer({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="sheet-footer"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

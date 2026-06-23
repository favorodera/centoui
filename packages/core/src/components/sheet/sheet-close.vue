<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogClose, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SheetCloseProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetCloseProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { close } = sheetVariants()

const classNames = computed(() => close({
  class: props.class,
}))
</script>

<template>
  <DialogClose
    data-slot="sheet-close"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogClose>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogClose, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type SheetCloseProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetCloseProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = sheetVariants()
</script>

<template>
  <DialogClose
    data-slot="sheet-close"
    v-bind="forwardedProps"
    :class="variants.close({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </DialogClose>
</template>

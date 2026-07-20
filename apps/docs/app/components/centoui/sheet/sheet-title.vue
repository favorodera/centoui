<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogTitle, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type SheetTitleProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetTitleProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = sheetVariants()
</script>

<template>
  <DialogTitle
    data-slot="sheet-title"
    v-bind="forwardedProps"
    :class="variants.title({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </DialogTitle>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogDescription, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type SheetDescriptionProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = sheetVariants()
</script>

<template>
  <DialogDescription
    data-slot="sheet-description"
    v-bind="forwardedProps"
    :class="variants.description({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </DialogDescription>
</template>

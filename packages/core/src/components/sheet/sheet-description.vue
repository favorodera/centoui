<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogDescription, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SheetDescriptionProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { description } = sheetVariants()

const classNames = computed(() => description({
  class: props.class,
}))
</script>

<template>
  <DialogDescription
    data-slot="sheet-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogDescription>
</template>

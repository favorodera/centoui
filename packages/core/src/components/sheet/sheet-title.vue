<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogTitle, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SheetTitleProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetTitleProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { title } = sheetVariants()

const classNames = computed(() => title({
  class: props.class,
}))
</script>

<template>
  <DialogTitle
    data-slot="sheet-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogTitle>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SheetTriggerProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { trigger } = sheetVariants()

const classNames = computed(() => trigger({
  class: props.class,
}))
</script>

<template>
  <DialogTrigger
    data-slot="sheet-trigger"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogTrigger>
</template>

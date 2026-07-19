<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogTrigger, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type SheetTriggerProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = sheetVariants()
</script>

<template>
  <DialogTrigger
    data-slot="sheet-trigger"
    v-bind="forwardedProps"
    :class="variants.trigger({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </DialogTrigger>
</template>

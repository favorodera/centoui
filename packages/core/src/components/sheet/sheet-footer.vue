<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type SheetFooterProps,
  sheetVariants,
} from '.'

const props = defineProps<SheetFooterProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = sheetVariants()
</script>

<template>
  <Primitive
    data-slot="sheet-footer"
    v-bind="forwardedProps"
    :class="variants.footer({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>

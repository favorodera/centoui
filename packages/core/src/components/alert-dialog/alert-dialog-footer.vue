<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type AlertDialogFooterProps,
  alertDialogVariants,
} from '.'

const props = defineProps<AlertDialogFooterProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = alertDialogVariants()
</script>

<template>
  <Primitive
    data-slot="alert-dialog-footer"
    v-bind="forwardedProps"
    :class="variants.footer({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>

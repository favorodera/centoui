<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogDescription, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type AlertDialogDescriptionProps,
  alertDialogVariants,
} from '.'

const props = defineProps<AlertDialogDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = alertDialogVariants()
</script>

<template>
  <AlertDialogDescription
    data-slot="alert-dialog-description"
    v-bind="forwardedProps"
    :class="variants.description({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </AlertDialogDescription>
</template>

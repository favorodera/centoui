<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogTitle, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type AlertDialogTitleProps,
  alertDialogVariants,
} from '.'

const props = defineProps<AlertDialogTitleProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = alertDialogVariants()
</script>

<template>
  <AlertDialogTitle
    data-slot="alert-dialog-title"
    v-bind="forwardedProps"
    :class="variants.title({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </AlertDialogTitle>
</template>

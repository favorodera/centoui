<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogContent, AlertDialogOverlay, AlertDialogPortal, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type AlertDialogContentEmits,
  type AlertDialogContentProps,
  alertDialogVariants,
} from '.'

defineOptions({
  inheritAttrs: false,
})

const emits = defineEmits<AlertDialogContentEmits>()

const props = defineProps<AlertDialogContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = alertDialogVariants()
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay
      data-slot="alert-dialog-overlay"
      :class="variants.overlay()"
    />

    <AlertDialogContent
      data-slot="alert-dialog-content"
      v-bind="{ ...$attrs, ...forwardedPropsEmits }"
      :class="variants.content({
        class: normalizeClass(props.class),
      })"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>

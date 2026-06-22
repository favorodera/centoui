<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogContent, AlertDialogOverlay, AlertDialogPortal, useForwardPropsEmits } from 'reka-ui'
import { computed, useAttrs } from 'vue'
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

const attributes = useAttrs()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { content, overlay } = alertDialogVariants()

const classNames = computed(() => ({
  content: content({
    class: props.class,
  }),
  overlay: overlay(),
}))
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay
      data-slot="alert-dialog-overlay"
      :class="classNames.overlay"
    />

    <AlertDialogContent
      data-slot="alert-dialog-content"
      v-bind="{ ...attributes, ...forwardedPropsEmits }"
      :class="classNames.content"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>

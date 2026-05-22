<script setup lang="ts">
import { useForwardProps, DialogPortal } from 'reka-ui'
import {
  type SlideoverPortalProps,
} from '.'

const props = defineProps<SlideoverPortalProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <DialogPortal
    v-bind="forwardedProps"
  >
    <slot />
  </DialogPortal>
</template>

<script setup lang="ts">
import { useForwardProps, PopoverPortal } from 'reka-ui'
import {
  type PopoverPortalSlots,
  type PopoverPortalProps,
} from '.'

defineSlots<PopoverPortalSlots>()

const props = defineProps<PopoverPortalProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <PopoverPortal
    v-bind="forwardedProps"
  >
    <slot />
  </PopoverPortal>
</template>

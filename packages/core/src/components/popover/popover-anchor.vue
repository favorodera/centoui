<script setup lang="ts">
import { useForwardProps, PopoverAnchor } from 'reka-ui'
import {
  type PopoverAnchorSlots,
  type PopoverAnchorProps,
} from '.'

defineSlots<PopoverAnchorSlots>()

const props = defineProps<PopoverAnchorProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <PopoverAnchor
    data-slot="popover-anchor"
    v-bind="forwardedProps"
  >
    <slot />
  </PopoverAnchor>
</template>

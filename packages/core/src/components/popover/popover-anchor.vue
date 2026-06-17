<script setup lang="ts">
import { PopoverAnchor, useForwardProps } from 'reka-ui'
import type { PopoverAnchorProps } from '.'

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

<script setup lang="ts">
import { useForwardProps, SelectPortal } from 'reka-ui'
import {
  type SelectPortalProps,
  type SelectPortalSlots,
} from '.'

defineSlots<SelectPortalSlots>()

const props = defineProps<SelectPortalProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectPortal
    v-bind="forwardedProps"
  >
    <slot />
  </SelectPortal>
</template>

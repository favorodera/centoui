<script setup lang="ts">
import { useForwardProps, SelectPortal } from 'reka-ui'
import {
  type SelectPortalProps,
} from '.'

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

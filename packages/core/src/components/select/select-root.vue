<script setup lang="ts">
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'
import type { SelectRootEmits, SelectRootProps, SelectRootSlots } from '.'

defineSlots<SelectRootSlots>()

const emits = defineEmits<SelectRootEmits>()

const props = defineProps<SelectRootProps>()

const forwardedPropsEmits = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="select-root"
  >
    <slot v-bind="slotProps" />
  </SelectRoot>
</template>

<script setup lang="ts">
import { PopoverRoot, useForwardPropsEmits } from 'reka-ui'
import {
  type PopoverRootSlots,
  type PopoverRootProps,
  type PopoverRootEmits,
  provideCentouiPopoverRootContext,
  popoverVariants,
} from '.'
import { computed, reactive } from 'vue'

defineSlots<PopoverRootSlots>()

const emits = defineEmits<PopoverRootEmits>()

const props = defineProps<PopoverRootProps>()
  
const forwardedPropsEmits = useForwardPropsEmits(props, emits)

const styles = computed(() => popoverVariants())

provideCentouiPopoverRootContext(reactive({
  styles,
}))
</script>

<template>
  <PopoverRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="popover-root"
  >
    <slot v-bind="slotProps" />
  </PopoverRoot>
</template>

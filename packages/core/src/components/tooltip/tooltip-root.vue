<script setup lang="ts">
import { TooltipRoot, useForwardPropsEmits } from 'reka-ui'
import { provideCentouiTooltipRootContext, tooltipVariants, type TooltipRootEmits, type TooltipRootProps, type TooltipRootSlots } from './index'
import { computed, reactive } from 'vue'

defineSlots<TooltipRootSlots>()
  
const emits = defineEmits<TooltipRootEmits>()

const props = defineProps<TooltipRootProps>()

const forwardedPropsEmits = useForwardPropsEmits(props, emits)

const styles = computed(() => tooltipVariants())

provideCentouiTooltipRootContext(reactive({
  styles,
}))
</script>

<template>
  <TooltipRoot
    v-slot="slotProps"
    data-slot="tooltip-root"
    v-bind="forwardedPropsEmits"
  >
    <slot v-bind="slotProps" />
  </TooltipRoot>
</template>

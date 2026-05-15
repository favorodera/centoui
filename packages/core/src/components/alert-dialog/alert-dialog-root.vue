<script setup lang="ts">
import { AlertDialogRoot, useForwardPropsEmits } from 'reka-ui'
import { type AlertDialogRootSlots, type AlertDialogRootProps, type AlertDialogRootEmits, provideCentouiAlertDialogRootContext, alertDialogVariants } from '.'
import { computed, reactive } from 'vue'

defineSlots<AlertDialogRootSlots>()

const emits = defineEmits<AlertDialogRootEmits>()

const props = defineProps<AlertDialogRootProps>()
  
const forwardedPropsEmits = useForwardPropsEmits(props, emits)

const styles = computed(() => alertDialogVariants())

provideCentouiAlertDialogRootContext(reactive({
  styles,
}))
</script>

<template>
  <AlertDialogRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="alert-dialog-root"
  >
    <slot v-bind="slotProps" />
  </AlertDialogRoot>
</template>

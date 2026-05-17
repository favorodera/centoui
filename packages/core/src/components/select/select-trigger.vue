<script setup lang="ts">
import { SelectTrigger, useForwardProps } from 'reka-ui'
import {
  type SelectTriggerSlots,
  type SelectTriggerProps,
  provideCentouiSelectRootContext,
  selectVariants,
} from '.'
import { computed, reactive } from 'vue'
import { reactiveOmit } from '@vueuse/core'

defineSlots<SelectTriggerSlots>()

const props = withDefaults(defineProps<SelectTriggerProps>(), {
  variant: 'outline',
})
const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwardedProps = useForwardProps(delegatedProps)

// Reconstruct the styles accommodate trigger variant-based styles
const styles = computed(() => selectVariants({
  size: props.size,
}))

// Re-provide the context to accommodate trigger variant-based styles
provideCentouiSelectRootContext(reactive({
  styles,
}))
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    data-slot="select-trigger"
    :class="styles.trigger({class:props.class})"
  >
    <slot />
  </SelectTrigger>
</template>

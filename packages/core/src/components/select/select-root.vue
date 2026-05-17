<script setup lang="ts">
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'
import {
  type SelectRootSlots,
  type SelectRootProps,
  type SelectRootEmits,
  provideCentouiSelectRootContext,
  selectVariants,
} from '.'
import { computed, reactive } from 'vue'
import { reactiveOmit } from '@vueuse/core'

defineSlots<SelectRootSlots>()

const emits = defineEmits<SelectRootEmits>()

const props = withDefaults(defineProps<SelectRootProps>(), {
  size: 'md',
})
  
const delegatedProps = reactiveOmit(props, 'size')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const styles = computed(() => selectVariants({
  size: props.size,
}))

provideCentouiSelectRootContext(reactive({
  styles,
}))
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

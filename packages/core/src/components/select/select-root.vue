<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'
import { reactive, toRef } from 'vue'
import { provideRootContext, type SelectRootEmits, type SelectRootProps, type SelectRootSlots } from '.'

defineSlots<SelectRootSlots>()

const emits = defineEmits<SelectRootEmits>()

const props = withDefaults(defineProps<SelectRootProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'size')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

provideRootContext(reactive({
  size: toRef(props, 'size'),
}))
</script>

<template>
  <SelectRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="select-root"
    :data-size="props.size"
  >
    <slot v-bind="slotProps" />
  </SelectRoot>
</template>

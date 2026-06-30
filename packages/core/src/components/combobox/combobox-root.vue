<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { type ComboboxRootEmits, type ComboboxRootProps, type ComboboxRootSlots, comboboxVariants, provideRootContext } from '.'

defineSlots<ComboboxRootSlots>()

const emits = defineEmits<ComboboxRootEmits>()

const props = withDefaults(defineProps<ComboboxRootProps>(), {
  openOnClick: true,
  openOnFocus: true,
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'size', 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root } = comboboxVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
}))

provideRootContext(reactive({
  size: toRef(props, 'size'),
}))
</script>

<template>
  <ComboboxRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    data-slot="combobox-root"
    :data-size="props.size"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </ComboboxRoot>
</template>

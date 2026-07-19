<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxRoot, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass, reactive, toRef } from 'vue'
import { type ComboboxRootEmits, type ComboboxRootProps, type ComboboxRootSlots, comboboxVariants, provideRootContext } from '.'

defineSlots<ComboboxRootSlots>()

const emits = defineEmits<ComboboxRootEmits>()

const props = withDefaults(defineProps<ComboboxRootProps>(), {
  resetModelValueOnClear: true,
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'size', 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = comboboxVariants()

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
    :class="variants.root({
      size: props.size,
      class: normalizeClass(props.class),
    })"
  >
    <slot v-bind="slotProps" />
  </ComboboxRoot>
</template>

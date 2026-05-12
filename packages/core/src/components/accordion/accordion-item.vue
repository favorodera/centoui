<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, injectAccordionRootContext, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  injectCentouiAccordionRootContext,
  type AccordionItemProps,
  type AccordionItemSlots,
} from '.'

const rootContext = computed(() => {
  return { ...injectAccordionRootContext(), ...injectCentouiAccordionRootContext() }
})

defineSlots<AccordionItemSlots>()

const props = defineProps<AccordionItemProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)


// Attributes

const dataCentouiDisabled = computed(() => {
  const isDisabled = props.disabled || rootContext.value.disabled.value

  // Only present when disabled
  return isDisabled ? '' : undefined
})

const dataCentouiState = computed(() => {
// Mirror reka's internal open-state logic so the attribute stays in sync.
  const isOpen = rootContext.value.isSingle.value
    ? props.value === rootContext.value.modelValue.value
    : Array.isArray(rootContext.value.modelValue.value)
      && rootContext.value.modelValue.value.includes(props.value)

  return isOpen ? 'open' : 'closed'
})
</script>

<template>
  <AccordionItem
    v-slot="slotProps"
    data-centoui-slot="accordion-item"
    :data-centoui-state
    :data-centoui-disabled
    :data-centoui-orientation="rootContext.orientation"
    v-bind="forwardedProps"
    :class="rootContext.styles.item({ class: props.class })"
  >
    <slot v-bind="slotProps" />
  </AccordionItem>
</template>

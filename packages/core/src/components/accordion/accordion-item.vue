<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, injectAccordionRootContext, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  accordionVariants,
  type AccordionItemProps,
  type AccordionItemSlots,
} from '.'

defineSlots<AccordionItemSlots>()

const props = defineProps<AccordionItemProps>()

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { item } = accordionVariants()

  return item({ class: props.class })
})

// Inject AccordionRoot's context.
const rootContext = injectAccordionRootContext()

// Computations
const disabled = computed(() => {
  const isDisabled = props.disabled || rootContext.disabled.value

  return isDisabled ? '' : undefined
})
const state = computed(() => {
  // Mirror reka's internal open-state logic so the attribute stays in sync.
  const isOpen = rootContext.isSingle.value
    ? props.value === rootContext.modelValue.value
    : Array.isArray(rootContext.modelValue.value)
      && rootContext.modelValue.value.includes(props.value)

  return isOpen ? 'open' : 'closed'
})
</script>

<template>
  <AccordionItem
    v-slot="slotProps"
    data-centoui-slot="accordion-item"
    :data-centoui-state="state"
    :data-centoui-disabled="disabled"
    :data-centoui-orientation="rootContext.orientation"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot v-bind="slotProps" />
  </AccordionItem>
</template>

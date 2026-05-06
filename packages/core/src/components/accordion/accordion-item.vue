<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  accordionVariants,
  type AccordionItemProps,
  type AccordionItemSlots,
} from '.'

defineSlots<AccordionItemSlots>()

const props = withDefaults(defineProps<AccordionItemProps>(), {
  as: 'div',
})

// Strip component-specific props and forward native props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Compute class string for the item slot.
const styles = computed(() => {
  const { item } = accordionVariants()

  return item({ class: props.class })
})
</script>

<template>
  <AccordionItem
    v-slot="slotProps"
    data-centoui-slot="accordion-item"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot v-bind="slotProps" />
  </AccordionItem>
</template>

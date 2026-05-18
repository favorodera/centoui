<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, useForwardProps } from 'reka-ui'
import {
  accordionVariants,
  type AccordionItemProps,
  type AccordionItemSlots,
} from '.'
import { computed } from 'vue'

defineSlots<AccordionItemSlots>()

const props = defineProps<AccordionItemProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { item } = accordionVariants()
  
  return item({ class: props.class })
})
</script>

<template>
  <AccordionItem
    v-slot="slotProps"
    data-slot="accordion-item"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </AccordionItem>
</template>

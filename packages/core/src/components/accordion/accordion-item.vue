<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, useForwardProps } from 'reka-ui'
import {
  injectCentouiAccordionRootContext,
  type AccordionItemProps,
  type AccordionItemSlots,
} from '.'

const rootContext = injectCentouiAccordionRootContext()

defineSlots<AccordionItemSlots>()

const props = defineProps<AccordionItemProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem
    v-slot="slotProps"
    data-slot="accordion-item"
    v-bind="forwardedProps"
    :class="rootContext.styles.item({ class: props.class })"
  >
    <slot v-bind="slotProps" />
  </AccordionItem>
</template>

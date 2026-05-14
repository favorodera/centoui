<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionHeader, useForwardProps } from 'reka-ui'
import {
  injectCentouiAccordionRootContext,
  type AccordionHeaderProps,
  type AccordionHeaderSlots,
} from '.'

const rootContext = injectCentouiAccordionRootContext()

defineSlots<AccordionHeaderSlots>()

const props = defineProps<AccordionHeaderProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionHeader
    data-slot="accordion-header"
    v-bind="forwardedProps"
    :class="rootContext.styles.header({ class: props.class })"
  >
    <slot />
  </AccordionHeader>
</template>

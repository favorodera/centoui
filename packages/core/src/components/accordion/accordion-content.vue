<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionContent, useForwardProps } from 'reka-ui'
import {
  type AccordionContentProps,
  type AccordionContentSlots,
  injectCentouiAccordionRootContext,
} from '.'

const rootContext = injectCentouiAccordionRootContext()

defineSlots<AccordionContentSlots>()

const props = defineProps<AccordionContentProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="forwardedProps"
    :class="rootContext.styles.content({ class: props.class })"
  >
    <div data-slot="accordion-content-inner">
      <slot />
    </div>
  </AccordionContent>
</template>

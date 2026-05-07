<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionHeader, injectAccordionItemContext, injectAccordionRootContext, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  accordionVariants,
  type AccordionHeaderProps,
  type AccordionHeaderSlots,
} from '.'

defineSlots<AccordionHeaderSlots>()

const props = defineProps<AccordionHeaderProps>()

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { header } = accordionVariants()

  return header({ class: props.class })
})

// Inject AccordionRoot's and AccordionItem's context.
const rootContext = injectAccordionRootContext()
const itemContext = injectAccordionItemContext()

// Computations
// itemContext.disabled already factors in root-level disabled.
const disabled = computed(() => itemContext.disabled.value ? '' : undefined)
const state = computed(() => itemContext.dataState.value)
</script>

<template>
  <AccordionHeader
    data-centoui-slot="accordion-header"
    :data-centoui-state="state"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-disabled="disabled"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </AccordionHeader>
</template>

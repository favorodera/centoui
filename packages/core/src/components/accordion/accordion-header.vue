<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionHeader, injectAccordionItemContext, injectAccordionRootContext, useForwardProps } from 'reka-ui'
import {
  injectCentouiAccordionRootContext,
  type AccordionHeaderProps,
  type AccordionHeaderSlots,
} from '.'
import { computed } from 'vue'

const rootContext = computed(() => {
  return { ...injectAccordionRootContext(), ...injectCentouiAccordionRootContext() }
})
const itemContext = injectAccordionItemContext()

defineSlots<AccordionHeaderSlots>()

const props = defineProps<AccordionHeaderProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionHeader
    data-centoui-slot="accordion-header"
    :data-centoui-state="itemContext.dataState.value"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-disabled="itemContext.dataDisabled.value"
    v-bind="forwardedProps"
    :class="rootContext.styles.header({ class: props.class })"
  >
    <slot />
  </AccordionHeader>
</template>

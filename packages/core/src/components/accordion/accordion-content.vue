<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionContent, injectAccordionItemContext, injectAccordionRootContext, useForwardProps } from 'reka-ui'
import {
  type AccordionContentProps,
  type AccordionContentSlots,
  injectCentouiAccordionRootContext,
} from '.'
import { computed } from 'vue'

const rootContext = computed(() => {
  return { ...injectAccordionRootContext(), ...injectCentouiAccordionRootContext() }
})
const itemContext = injectAccordionItemContext()

defineSlots<AccordionContentSlots>()

const props = defineProps<AccordionContentProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionContent
    data-centoui-slot="accordion-content"
    :data-centoui-state="itemContext.dataState.value"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-disabled="itemContext.dataDisabled.value"
    v-bind="forwardedProps"
    :class="rootContext.styles.content({ class: props.class })"
  >
    <div data-centoui-slot="accordion-content-inner">
      <slot />
    </div>
  </AccordionContent>
</template>

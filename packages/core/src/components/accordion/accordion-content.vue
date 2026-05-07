<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionContent, injectAccordionItemContext, injectAccordionRootContext, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  accordionVariants,
  type AccordionContentProps,
  type AccordionContentSlots,
} from '.'

defineSlots<AccordionContentSlots>()

const props = defineProps<AccordionContentProps>()

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { content } = accordionVariants()

  return content({ class: props.class })
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
  <AccordionContent
    data-centoui-slot="accordion-content"
    :data-centoui-state="state"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-disabled="disabled"
    v-bind="forwardedProps"
    :class="styles"
  >
    <div data-centoui-slot="accordion-content-body">
      <slot />
    </div>
  </AccordionContent>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionTrigger, injectAccordionItemContext, injectAccordionRootContext, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import {
  accordionVariants,
  type AccordionTriggerProps,
  type AccordionTriggerSlots,
} from '.'
import { default as config } from '#centoui/config'

defineSlots<AccordionTriggerSlots>()

const props = defineProps<AccordionTriggerProps>()

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { trigger } = accordionVariants()

  return trigger({ class: props.class })
})

// Inject AccordionRoots's and AccordionItem's context
const rootContext = injectAccordionRootContext()
const itemContext = injectAccordionItemContext()

// Computations
const disabled = computed(() => itemContext.disabled.value ? '' : undefined)
const state = computed(() => itemContext.dataState.value)
</script>

<template>
  <AccordionTrigger
    data-centoui-slot="accordion-trigger"
    v-bind="forwardedProps"
    :data-centoui-state="state"
    :data-centoui-disabled="disabled"
    :data-centoui-orientation="rootContext.orientation"
    :class="styles"
  >
    <slot />

    <Icon :icon="config.icons.chevronDown" />
  </AccordionTrigger>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionTrigger, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import {
  injectCentouiAccordionRootContext,
  type AccordionTriggerProps,
  type AccordionTriggerSlots,
} from '.'
import { default as config } from '#centoui/config'

const rootContext = injectCentouiAccordionRootContext()

defineSlots<AccordionTriggerSlots>()

const props = defineProps<AccordionTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionTrigger
    data-slot="accordion-trigger"
    v-bind="forwardedProps"
    :class="rootContext.styles.trigger({ class: props.class })"
  >
    <slot />

    <slot name="icon">
      <Icon
        data-slot="accordion-trigger-icon"
        :icon="config.icons.chevronDown"
        :class="rootContext.styles.triggerIcon()"
      />
    </slot>
  </AccordionTrigger>
</template>

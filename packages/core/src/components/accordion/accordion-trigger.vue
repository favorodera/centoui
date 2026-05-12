<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionTrigger, injectAccordionItemContext, injectAccordionRootContext, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import {
  injectCentouiAccordionRootContext,
  type AccordionTriggerProps,
  type AccordionTriggerSlots,
} from '.'
import { default as config } from '#centoui/config'
import { computed } from 'vue'

const rootContext = computed(() => {
  return { ...injectAccordionRootContext(), ...injectCentouiAccordionRootContext() }
})
const itemContext = injectAccordionItemContext()

defineSlots<AccordionTriggerSlots>()

const props = defineProps<AccordionTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionTrigger
    data-centoui-slot="accordion-trigger"
    v-bind="forwardedProps"
    :data-centoui-state="itemContext.dataState.value"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-disabled="itemContext.dataDisabled.value"
    :class="rootContext.styles.trigger({ class: props.class })"
  >
    <slot />

    <slot name="icon">
      <Icon
        data-centoui-slot="accordion-trigger-icon"
        :icon="config.icons.chevronDown"
        :class="rootContext.styles.triggerIcon()"
      />
    </slot>
  </AccordionTrigger>
</template>

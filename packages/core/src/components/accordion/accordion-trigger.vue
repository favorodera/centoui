<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionTrigger, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import {
  accordionVariants,
  type AccordionTriggerProps,
  type AccordionTriggerSlots,
} from '.'
import config from '#centoui/config'
import { computed } from 'vue'

defineSlots<AccordionTriggerSlots>()

const props = defineProps<AccordionTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { trigger, triggerIcon } = accordionVariants()
  
  return {
    trigger: trigger({ class: props.class }),
    triggerIcon: triggerIcon(),
  }
})
</script>

<template>
  <AccordionTrigger
    data-slot="accordion-trigger"
    v-bind="forwardedProps"
    :class="classNames.trigger"
  >
    <slot />

    <slot name="icon">
      <Icon
        data-slot="accordion-trigger-icon"
        :icon="config.icons.chevronDown"
        :class="classNames.triggerIcon"
      />
    </slot>
  </AccordionTrigger>
</template>

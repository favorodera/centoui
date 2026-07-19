<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionHeader, AccordionTrigger, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AccordionTriggerProps, accordionVariants } from '.'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<AccordionTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = accordionVariants()
</script>

<template>
  <AccordionHeader data-slot="accordion-header">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="{...$attrs,...forwardedProps}"
      :class="variants.trigger({
        class: normalizeClass(props.class),
      })"
    >
      <slot />
    </AccordionTrigger>
  </AccordionHeader>
</template>

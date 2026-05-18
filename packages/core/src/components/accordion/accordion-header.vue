<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionHeader, useForwardProps } from 'reka-ui'
import { accordionVariants, type AccordionHeaderProps } from '.'
import { computed } from 'vue'

const props = defineProps<AccordionHeaderProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { header } = accordionVariants()
  
  return header({ class: props.class })
})
</script>

<template>
  <AccordionHeader
    data-slot="accordion-header"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AccordionHeader>
</template>

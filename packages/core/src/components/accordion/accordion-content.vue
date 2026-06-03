<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionContent, useForwardProps } from 'reka-ui'
import { accordionVariants, type AccordionContentProps } from '.'
import { computed } from 'vue'

const props = defineProps<AccordionContentProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { content } = accordionVariants()
const classNames = computed(() => content({ class: props.class }))
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <div data-slot="accordion-content-inner">
      <slot />
    </div>
  </AccordionContent>
</template>

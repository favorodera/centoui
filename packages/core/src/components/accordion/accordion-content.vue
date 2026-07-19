<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionContent, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AccordionContentProps, accordionVariants } from '.'

const props = defineProps<AccordionContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = accordionVariants()
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="forwardedProps"
    :class="variants.content({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </AccordionContent>
</template>

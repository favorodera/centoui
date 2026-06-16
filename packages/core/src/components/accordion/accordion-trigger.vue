<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionHeader, AccordionTrigger, useForwardProps } from 'reka-ui'
import {
  accordionVariants,
  type AccordionTriggerProps,
} from '.'
import { computed, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const attributes = useAttrs()

const props = defineProps<AccordionTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { trigger } = accordionVariants()
const classNames = computed(() => trigger({ class: props.class }))
</script>

<template>
  <AccordionHeader data-slot="accordion-header">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="{...attributes,...forwardedProps}"
      :class="classNames"
    >
      <slot />
    </AccordionTrigger>
  </AccordionHeader>
</template>

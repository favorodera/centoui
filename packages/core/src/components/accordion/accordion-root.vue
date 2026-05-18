<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionRoot, useForwardPropsEmits } from 'reka-ui'
import {
  accordionVariants,
  type AccordionRootEmits,
  type AccordionRootProps,
  type AccordionRootSlots,
} from '.'
import { computed } from 'vue'

defineSlots<AccordionRootSlots>()

const emits = defineEmits<AccordionRootEmits>()

const props = defineProps<AccordionRootProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { root } = accordionVariants()
  
  return root({ class: props.class })
})
</script>

<template>
  <AccordionRoot
    v-slot="slotProps"
    data-slot="accordion-root"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </AccordionRoot>
</template>

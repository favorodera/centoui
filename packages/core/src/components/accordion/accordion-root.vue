<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionRoot, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AccordionRootEmits, type AccordionRootProps, type AccordionRootSlots, accordionVariants } from '.'

defineSlots<AccordionRootSlots>()

const emits = defineEmits<AccordionRootEmits>()

const props = defineProps<AccordionRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = accordionVariants()
</script>

<template>
  <AccordionRoot
    v-slot="slotProps"
    data-slot="accordion-root"
    v-bind="forwardedPropsEmits"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot v-bind="slotProps" />
  </AccordionRoot>
</template>

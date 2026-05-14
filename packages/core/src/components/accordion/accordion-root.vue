<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, reactive } from 'vue'
import {
  accordionVariants,
  provideCentouiAccordionRootContext,
  type AccordionRootEmits,
  type AccordionRootProps,
  type AccordionRootSlots,
} from '.'

defineSlots<AccordionRootSlots>()

const emits = defineEmits<AccordionRootEmits>()

const props = defineProps<AccordionRootProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const styles = computed(() => accordionVariants())

provideCentouiAccordionRootContext(reactive({
  styles,
}))
</script>

<template>
  <AccordionRoot
    v-slot="slotProps"
    data-slot="accordion-root"
    v-bind="forwardedPropsEmits"
    :class="styles.root({ class: props.class })"
  >
    <slot v-bind="slotProps" />
  </AccordionRoot>
</template>

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

// Attributes

const dataCentouiOrientation = computed(() => {
// Mirror reka's internal default ('vertical') so the attribute is always present and correct.
  return props.orientation ?? 'vertical'
})

provideCentouiAccordionRootContext(reactive({
  styles,
}))
</script>

<template>
  <AccordionRoot
    v-slot="slotProps"
    data-centoui-slot="accordion-root"
    :data-centoui-orientation
    v-bind="forwardedPropsEmits"
    :class="styles.root({ class: props.class })"
  >
    <slot v-bind="slotProps" />
  </AccordionRoot>
</template>

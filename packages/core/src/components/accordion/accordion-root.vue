<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  accordionVariants,
  type AccordionRootEmits,
  type AccordionRootProps,
  type AccordionRootSlots,
} from '.'

defineSlots<AccordionRootSlots>()
const emits = defineEmits<AccordionRootEmits>()

const props = defineProps<AccordionRootProps>()

// Forward props and emits.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

// Style class string for the component.
const styles = computed(() => {
  const { root } = accordionVariants()

  return root({ class: props.class })
})

// Computations
// Mirror reka's internal default ('vertical') so the attribute is always present and correct.
const orientation = computed(() => props.orientation ?? 'vertical')
const disabled = computed(() => props.disabled ? '' : undefined)
</script>

<template>
  <AccordionRoot
    v-slot="slotProps"
    data-centoui-slot="accordion-root"
    :data-centoui-orientation="orientation"
    :data-centoui-disabled="disabled"
    v-bind="forwardedPropsEmits"
    :class="styles"
  >
    <slot v-bind="slotProps" />
  </AccordionRoot>
</template>

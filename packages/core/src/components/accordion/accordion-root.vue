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

const props = withDefaults(defineProps<AccordionRootProps>(), {
  as: 'div',
  collapsible: false,
  disabled: false,
  orientation: 'vertical',
  unmountOnHide: true,
})

// Strip component-specific props and forward native props and emits.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

// Compute class string for the root slot.
const styles = computed(() => {
  const { root } = accordionVariants()

  return root({ class: props.class })
})
</script>

<template>
  <AccordionRoot
    v-slot="slotProps"
    data-centoui-slot="accordion-root"
    v-bind="forwardedPropsEmits"
    :class="styles"
  >
    <slot v-bind="slotProps" />
  </AccordionRoot>
</template>

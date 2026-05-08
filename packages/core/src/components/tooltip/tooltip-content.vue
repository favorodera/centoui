<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { injectTooltipRootContext, TooltipContent, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { tooltipVariants, type TooltipContentEmits, type TooltipContentProps, type TooltipContentSlots } from './index'

defineSlots<TooltipContentSlots>()

const emits = defineEmits<TooltipContentEmits>()

const props = withDefaults(defineProps<TooltipContentProps>(), {
  sideOffset: 4,
  variant: 'solid',
})

// Forward props and emits.
const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

// Style class string for the component.
const styles = computed(() => {
  const { content } = tooltipVariants({
    variant: props.variant,
  })

  return content({ class: props.class })
})

// Inject TooltipRoot's context
const tooltipRootContext = injectTooltipRootContext()

// Computations
const state = computed(() => tooltipRootContext.stateAttribute.value)
</script>

<template>
  <TooltipContent
    data-centoui-slot="tooltip-content"
    :data-centoui-variant="props.variant"
    :data-centoui-state="state"
    :data-centoui-align="align"
    :data-centoui-side="side"
    v-bind="forwardedPropsEmits"
    :class="styles"
  >
    <slot />
  </TooltipContent>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SelectTriggerProps,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'

const rootContext = injectCentouiSelectRootContext()

const props = withDefaults(defineProps<SelectTriggerProps>(), {
  variant: 'outline',
})
const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { trigger } = selectVariants({
    size: rootContext.size,
    triggerVariant: props.variant,
  })
  
  return trigger({ class: props.class })
})
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    data-slot="select-trigger"
    :class="classNames"
    :data-variant="props.variant"
  >
    <slot />
  </SelectTrigger>
</template>

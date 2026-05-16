<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { injectProgressRootContext, ProgressIndicator, useForwardProps } from 'reka-ui'
import { computed, type CSSProperties } from 'vue'
import {
  injectCentouiProgressRootContext,
  type ProgressIndicatorSlots,
  type ProgressIndicatorProps,
} from '.'

const rootContext = computed(() => {
  return {
    ...injectProgressRootContext(),
    ...injectCentouiProgressRootContext(),
  }
})

defineSlots<ProgressIndicatorSlots>()

const props = defineProps<ProgressIndicatorProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const progressStyle = computed<CSSProperties>(() => {
  const value = rootContext.value.modelValue?.value ?? 0
  const max = rootContext.value.max.value ?? 100

  const percent = (value / max) * 100

  return {
    transform: `translateX(calc(-100% + ${percent}%))`,
  }
})
</script>

<template>
  <ProgressIndicator
    data-slot="progress-indicator"
    v-bind="forwardedProps"
    :class="rootContext.styles.indicator({ class: props.class })"
    :style="progressStyle"
  >
    <slot />
  </ProgressIndicator>
</template>

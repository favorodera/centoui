<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { injectProgressRootContext, ProgressIndicator, useForwardProps } from 'reka-ui'
import { computed, type CSSProperties } from 'vue'
import {
  type ProgressIndicatorProps,
  progressVariants,
} from '.'

const rootContext = injectProgressRootContext()

const props = defineProps<ProgressIndicatorProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { indicator } = progressVariants()
  
  return indicator({ class: props.class })
})

const styles = computed<CSSProperties>(() => {
  const value = rootContext.modelValue?.value ?? 0
  const max = rootContext.max.value ?? 100

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
    :class="classNames"
    :style="styles"
  >
    <slot />
  </ProgressIndicator>
</template>

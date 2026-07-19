<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ProgressIndicator, ProgressRoot, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type ProgressEmits, type ProgressProps, progressVariants } from '.'

const emits = defineEmits<ProgressEmits>()

const props = defineProps<ProgressProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = progressVariants()
</script>

<template>
  <ProgressRoot
    v-slot="{modelValue}"
    data-slot="progress-bar-root"
    v-bind="forwardedPropsEmits"
    :class="variants.root({
      class:normalizeClass(props.class)
    })"
  >
    <ProgressIndicator
      :class="variants.indicator()"
      :style="{
        transform: `translateX(calc(-100% + ${modelValue || 0}%))`,
      }"
    />
  </ProgressRoot>
</template>

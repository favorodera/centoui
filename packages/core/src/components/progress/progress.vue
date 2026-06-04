<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ProgressIndicator, ProgressRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { progressVariants, type ProgressEmits, type ProgressProps } from '.'

const emits = defineEmits<ProgressEmits>()

const props = defineProps<ProgressProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root, indicator } = progressVariants()
const classNames = computed(() => ({
  root: root({ class: props.class }),
  indicator: indicator(),
}))
</script>

<template>
  <ProgressRoot
    v-slot="{modelValue}"
    data-slot="progress-bar-root"
    v-bind="forwardedPropsEmits"
    :class="classNames.root"
  >
    <ProgressIndicator
      :class="classNames.indicator"
      :style="{
        transform: `translateX(calc(-100% + ${modelValue || 0}%))`,
      }"
    />
  </ProgressRoot>
</template>

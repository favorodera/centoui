<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ProgressRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { progressBarVariants, type ProgressBarRootEmits, type ProgressBarRootProps, type ProgressBarRootSlots } from '.'

defineSlots<ProgressBarRootSlots>()

const emits = defineEmits<ProgressBarRootEmits>()

const props = defineProps<ProgressBarRootProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { root } = progressBarVariants()
  
  return root({ class: props.class })
})
</script>

<template>
  <ProgressRoot
    v-slot="slotProps"
    data-slot="progress-bar-root"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </ProgressRoot>
</template>

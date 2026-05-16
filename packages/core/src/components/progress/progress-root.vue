<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ProgressRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, reactive } from 'vue'
import { progressVariants, provideCentouiProgressRootContext, type ProgressRootEmits, type ProgressRootProps, type ProgressRootSlots } from '.'

defineSlots<ProgressRootSlots>()

const emits = defineEmits<ProgressRootEmits>()

const props = defineProps<ProgressRootProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const styles = computed(() => progressVariants())

provideCentouiProgressRootContext(reactive({
  styles,
}))
</script>

<template>
  <ProgressRoot
    v-slot="slotProps"
    data-slot="progress-root"
    v-bind="forwardedPropsEmits"
    :class="styles.root({ class: props.class })"
  >
    <slot v-bind="slotProps" />
  </ProgressRoot>
</template>

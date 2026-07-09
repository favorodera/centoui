<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ToggleGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { type ToggleGroupRootEmits, type ToggleGroupRootProps, type ToggleGroupRootSlots, toggleGroupVariants } from '.'

defineSlots<ToggleGroupRootSlots>()

const emits = defineEmits<ToggleGroupRootEmits>()

const props = withDefaults(defineProps<ToggleGroupRootProps>(), {
  compact: false,
})

const delegatedProps = reactiveOmit(props, 'class', 'compact')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root } = toggleGroupVariants()

const classNames = computed(() => root({
  class: props.class,
  compact: props.compact,
  orientation: props.orientation,
}))
</script>

<template>
  <ToggleGroupRoot
    v-slot="slotProps"
    data-slot="toggle-group-root"
    :data-compact="compact"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </ToggleGroupRoot>
</template>

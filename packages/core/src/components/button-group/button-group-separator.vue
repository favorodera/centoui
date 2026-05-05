<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { computed, inject, useAttrs } from 'vue'
import { buttonGroupContextKey, buttonGroupVariants, type ButtonGroupSeparatorProps } from '.'
import { Separator, type SeparatorProps } from '../separator'

defineOptions({
  inheritAttrs: false,
})

// Raw attrs to merge onto the Separator (inheritAttrs is disabled).
const attributes = useAttrs()

const props = defineProps<ButtonGroupSeparatorProps>()

// Strip component-specific props and forward native props.
const delegatedProps = reactiveOmit(props, 'class')

// Compute class string for the separator slot.
const styles = computed(() => {
  const { separator } = buttonGroupVariants()
  return separator({ class: props.class })
})

// Read the parent ButtonGroup's orientation
const buttonGroupContext = inject(buttonGroupContextKey, { orientation: 'horizontal' })

// Flip orientation so the separator is perpendicular to the group's layout direction.
const orientation = computed<SeparatorProps['orientation']>(() => {
  return buttonGroupContext.orientation === 'vertical' ? 'horizontal' : 'vertical'
})
</script>

<template>
  <Separator
    data-centoui-slot="button-group-separator"
    v-bind="{...delegatedProps, ...attributes}"
    :orientation="orientation"
    :class="styles"
  />
</template>

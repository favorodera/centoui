<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { computed, useAttrs } from 'vue'
import { buttonGroupVariants, injectButtonGroupContext, type ButtonGroupSeparatorProps } from '.'
import { Separator } from '../separator'

defineOptions({
  inheritAttrs: false,
})

const attributes = useAttrs()

const props = defineProps<ButtonGroupSeparatorProps>()

// Delegate props.
const delegatedProps = reactiveOmit(props, 'class')

// Style class string for the component.
const styles = computed(() => {
  const { separator } = buttonGroupVariants()
  return separator({ class: props.class })
})

// Inject ButtonGroup's context
const buttonGroupContext = injectButtonGroupContext()

// Computations
const orientation = computed(() => {
  // Flip orientation so the separator is perpendicular to the group's layout direction.
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

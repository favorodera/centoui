<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { computed, useAttrs } from 'vue'
import { buttonGroupVariants, injectCentouiButtonGroupContext, type ButtonGroupSeparatorProps } from '.'
import { Separator } from '../separator'

defineOptions({
  inheritAttrs: false,
})

const buttonGroupContext = injectCentouiButtonGroupContext()

const attributes = useAttrs()

const props = defineProps<ButtonGroupSeparatorProps>()
const delegatedProps = reactiveOmit(props, 'class')

const classNames = computed(() => {
  const { separator } = buttonGroupVariants({
    orientation: buttonGroupContext.orientation,
  })

  return separator({ class: props.class })
})

const flippedOrientation = computed(() => {
  return buttonGroupContext.orientation === 'vertical' ? 'horizontal' : 'vertical'
})
</script>

<template>
  <Separator
    data-centoui-slot="button-group-separator"
    v-bind="{...delegatedProps, ...attributes}"
    :orientation="flippedOrientation"
    :class="classNames"
  />
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { computed, inject, useAttrs } from 'vue'
import { buttonGroupContextKey, buttonGroupVariants, type ButtonGroupSeparatorProps } from '.'
import { Separator, type SeparatorProps } from '../separator'

defineOptions({
  inheritAttrs: false,
})

const attributes = useAttrs()

const props = defineProps<ButtonGroupSeparatorProps>()
  
const delegatedProps = reactiveOmit(props, 'class')

const styles = computed(() => {
  const { separator } = buttonGroupVariants()
  return separator({ class: props.class })
})

const buttonGroupContext = inject(buttonGroupContextKey, { orientation: 'horizontal' })

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

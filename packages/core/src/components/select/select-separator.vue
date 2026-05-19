<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectSeparator } from 'reka-ui'
import {
  injectCentouiSelectRootContext,
  selectVariants,
  type SelectSeparatorProps,
  type SelectSeparatorSlots,
} from '.'
import { Separator } from '../separator'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const slots = defineSlots<SelectSeparatorSlots>()

const props = withDefaults(defineProps<SelectSeparatorProps>(), {
  asChild: true,
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { separator } = selectVariants({
    size: rootContext.size,
  })
  
  return separator({ class: props.class })
})
</script>

<template>
  <SelectSeparator
    data-slot="select-separator"
    v-bind="forwardedProps"
  >
    <!-- When slot content is provided, render flanking lines around it. -->
    <Separator
      v-if="slots.default"
      :class="classNames"
    >
      <slot />
    </Separator>

    <!-- No content — render a single line. -->
    <Separator
      v-else
      :class="classNames"
    />
  </SelectSeparator>
</template>

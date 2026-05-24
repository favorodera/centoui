<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectScrollUpButton } from 'reka-ui'
import {
  injectCentouiSelectRootContext,
  selectVariants,
  type SelectScrollUpButtonProps,
} from '.'
import { Icon } from '../icon'
import config from '#centoui/config'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = defineProps<SelectScrollUpButtonProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { scrollUpButton } = selectVariants({
    size: rootContext.size,
  })
  
  return scrollUpButton({ class: props.class })
})
</script>

<template>
  <SelectScrollUpButton
    data-slot="select-scroll-up-button"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <span class="sr-only">Scroll up</span>
      <Icon :icon="config.icons.chevronUp" />
    </slot>
  </SelectScrollUpButton>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectIcon } from 'reka-ui'
import {
  type SelectIconProps,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'
import { Icon } from '../icon'
import config from '#centoui/config'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = withDefaults(defineProps<SelectIconProps>(), {
  asChild: true,
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { icon } = selectVariants({
    size: rootContext.size,
  })
  
  return icon({ class: props.class })
})
</script>

<template>
  <SelectIcon
    data-slot="select-icon"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronDown" />
    </slot>
  </SelectIcon>
</template>

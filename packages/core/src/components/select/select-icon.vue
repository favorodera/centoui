<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectIcon } from 'reka-ui'
import {
  type SelectIconProps,
  type SelectIconSlots,
  injectCentouiSelectRootContext,
} from '.'
import { default as config } from '#centoui/config'
import { Icon } from '@iconify/vue'

const rootContext = injectCentouiSelectRootContext()

defineSlots<SelectIconSlots>()

const props = withDefaults(defineProps<SelectIconProps>(), {
  asChild: true,
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectIcon
    data-slot="select-icon"
    v-bind="forwardedProps"
    :class="rootContext.styles.icon({ class: props.class })"
  >
    <slot>
      <Icon :icon="config.icons.chevronDown" />
    </slot>
  </SelectIcon>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  injectRootContext,
  type SelectTriggerProps,
  selectVariants,
} from '.'
import { Icon } from '../icon'

const props = defineProps<SelectTriggerProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { icon, trigger } = selectVariants()

const classNames = computed(() => ({
  icon: icon({
    size: rootContext?.size,
  }),
  trigger: trigger({
    class: props.class,
    size: rootContext?.size,
  }),
}))
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    data-slot="select-trigger"
    :class="classNames.trigger"
  >
    <slot />

    <SelectIcon
      data-slot="select-icon"
      :class="classNames.icon"
      as-child
    >
      <Icon :icon="config.icons.chevronDown" />
    </SelectIcon>
  </SelectTrigger>
</template>

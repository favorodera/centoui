<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  type SelectTriggerProps,
  selectVariants,
} from '.'
import { Icon } from '../icon'

const props = withDefaults(defineProps<SelectTriggerProps>(), {
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const { icon, trigger } = selectVariants()
const classNames = computed(() => ({
  icon: icon({
    triggerSize: props.size,
  }),
  trigger: trigger({
    class: props.class,
    triggerSize: props.size,
  }),
}))
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    data-slot="select-trigger"
    :class="classNames.trigger"
    :data-size="props.size"
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

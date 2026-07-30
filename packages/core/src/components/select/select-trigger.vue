<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  injectRootContext,
  type SelectTriggerProps,
  selectVariants,
} from '.'
import { Icon, iconsConfig } from '../icon'

const props = defineProps<SelectTriggerProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = selectVariants()
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    data-slot="select-trigger"
    :class="variants.trigger({
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
    :data-size="rootContext?.size"
  >
    <slot />

    <SelectIcon
      data-slot="select-icon"
      :class="variants.icon({size: rootContext?.size,})"
    >
      <Icon :name="iconsConfig.chevronDown" />
    </SelectIcon>
  </SelectTrigger>
</template>

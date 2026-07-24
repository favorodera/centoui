<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuTrigger, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import config from '#centoui/config'
import { type NavigationMenuTriggerProps, navigationMenuVariants } from '.'
import { Icon } from '../icon'

const props = withDefaults(defineProps<NavigationMenuTriggerProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = navigationMenuVariants()
</script>

<template>
  <NavigationMenuTrigger
    data-slot="navigation-menu-trigger"
    v-bind="forwardedProps"
    :data-size="props.size"
    :class="variants.trigger({
      class: normalizeClass(props.class),
      triggerSize: props.size,
    })"
  >
    <slot />

    <Icon
      :name="config.icons.chevronDown"
      :class="variants.triggerIcon({
        triggerSize: props.size,
      })"
    />
  </NavigationMenuTrigger>
</template>

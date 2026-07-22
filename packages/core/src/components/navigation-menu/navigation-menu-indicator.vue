<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuIndicator, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type NavigationMenuIndicatorProps, navigationMenuVariants } from '.'

const props = defineProps<NavigationMenuIndicatorProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = navigationMenuVariants()
</script>

<template>
  <NavigationMenuIndicator
    data-slot="navigation-menu-indicator"
    v-bind="forwardedProps"
    :class="variants.indicator({
      class:normalizeClass(props.class)
    })"
  >
    <slot />
  </NavigationMenuIndicator>
</template>

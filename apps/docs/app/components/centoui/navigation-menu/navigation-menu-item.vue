<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuItem, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type NavigationMenuItemProps, navigationMenuVariants } from '.'

const props = defineProps<NavigationMenuItemProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = navigationMenuVariants()
</script>

<template>
  <NavigationMenuItem
    data-slot="navigation-menu-item"
    v-bind="forwardedProps"
    :class="variants.item({
      class:normalizeClass(props.class),
    })"
  >
    <slot />
  </NavigationMenuItem>
</template>

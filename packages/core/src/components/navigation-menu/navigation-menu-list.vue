<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuList, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type NavigationMenuListProps, navigationMenuVariants } from '.'

const props = defineProps<NavigationMenuListProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = navigationMenuVariants()
</script>

<template>
  <NavigationMenuList
    data-slot="navigation-menu-list"
    v-bind="forwardedProps"
    :class="variants.list({
      class:normalizeClass(props.class)
    })"
  >
    <slot />
  </NavigationMenuList>
</template>

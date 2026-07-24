<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuLink, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import {  type NavigationMenuLinkEmits, type NavigationMenuLinkProps, navigationMenuVariants } from '.'

const emits = defineEmits<NavigationMenuLinkEmits>()

const props = defineProps<NavigationMenuLinkProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = navigationMenuVariants()
</script>

<template>
  <NavigationMenuLink
    data-slot="navigation-menu-link"
    v-bind="forwardedPropsEmits"
    :class="variants.link({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </NavigationMenuLink>
</template>

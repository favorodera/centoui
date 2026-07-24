<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuContent, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type NavigationMenuContentEmits, type NavigationMenuContentProps, navigationMenuVariants } from '.'

const emits = defineEmits<NavigationMenuContentEmits>()

const props = defineProps<NavigationMenuContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = navigationMenuVariants()
</script>

<template>
  <NavigationMenuContent
    data-slot="navigation-menu-content"
    v-bind="forwardedPropsEmits"
    :class="variants.content({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </NavigationMenuContent>
</template>

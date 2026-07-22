<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuRoot, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type NavigationMenuRootEmits, type NavigationMenuRootProps, type NavigationMenuRootSlots, navigationMenuVariants } from '.'

defineSlots<NavigationMenuRootSlots>()

const emits = defineEmits<NavigationMenuRootEmits>()

const props = defineProps<NavigationMenuRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = navigationMenuVariants()
</script>

<template>
  <NavigationMenuRoot
    v-slot="slotProps"
    data-slot="navigation-menu-root"
    v-bind="forwardedPropsEmits"
    :class="variants.root({
      class:normalizeClass(props.class),
      orientation:props.orientation
    })"
  >
    <slot v-bind="slotProps" />
  </NavigationMenuRoot>
</template>

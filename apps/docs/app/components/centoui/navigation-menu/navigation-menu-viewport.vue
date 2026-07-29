<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuViewport, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { navigationMenuVariants, type NavigationMenuViewportProps } from '.'

const props = defineProps<NavigationMenuViewportProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = navigationMenuVariants()
</script>

<template>
  <div
    :class="variants.viewportWrapper()"
    data-slot="navigation-menu-viewport-wrapper"
  >
    <NavigationMenuViewport
      data-slot="navigation-menu-viewport"
      v-bind="forwardedProps"
      :class="variants.viewport({
        class: normalizeClass(props.class),
      })"
    />
  </div>
</template>

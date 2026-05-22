<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  SlideoverClose,
  type SlideoverHeaderProps,
  slideoverVariants,
} from '.'
import { computed } from 'vue'
import config from '#centoui/config'
import { Icon } from '@iconify/vue'
import { buttonVariants } from '../button'

const props = defineProps<SlideoverHeaderProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { header: slideoverHeader, headerClose: slideoverHeaderClose } = slideoverVariants()

  const { root: buttonRoot } = buttonVariants({
    variant: 'link',
    size: 'sm',
    square: true,
  })
  
  return {
    header: slideoverHeader({ class: props.class }),
    close: buttonRoot({ class: slideoverHeaderClose() }),
  }
})
</script>

<template>
  <Primitive
    data-slot="slideover-header"
    v-bind="forwardedProps"
    :class="classNames.header"
  >
    <slot />

    <SlideoverClose
      :class="classNames.close"
      aria-label="Close slideover"
    >
      <Icon :icon="config.icons.x" />
    </SlideoverClose>
  </Primitive>
</template>

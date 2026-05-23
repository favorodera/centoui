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

const props = withDefaults(defineProps<SlideoverHeaderProps>(), {
  showClose: true,
})
const delegatedProps = reactiveOmit(props, 'class', 'showClose')
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

    <slot
      v-if="props.showClose"
      name="close"
    >
      <SlideoverClose
        :class="classNames.close"
        aria-label="Close slideover"
        data-slot="slideover-header-close"
      >
        <Icon :icon="config.icons.x" />
      </SlideoverClose>
    </slot>
  </Primitive>
</template>

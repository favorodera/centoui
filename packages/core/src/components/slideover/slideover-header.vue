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
import { Icon } from '../icon'
import { Button } from '../button'

const props = withDefaults(defineProps<SlideoverHeaderProps>(), {
  showClose: true,
})
const delegatedProps = reactiveOmit(props, 'class', 'showClose')
const forwardedProps = useForwardProps(delegatedProps)

const { header, headerClose } = slideoverVariants()
const classNames = computed(() => ({
  header: header({ class: props.class }),
  close: headerClose(),
}))
</script>

<template>
  <Primitive
    data-slot="slideover-header"
    v-bind="forwardedProps"
    :class="classNames.header"
  >
    <slot />

    <SlideoverClose
      v-if="props.showClose"
      :class="classNames.close"
      data-slot="slideover-header-close"
      as-child
    >
      <Button
        variant="ghost"
        size="sm"
        square
      >
        <span class="sr-only">Close slideover</span>
        <Icon :icon="config.icons.close" />
      </Button>
    </SlideoverClose>
  </Primitive>
</template>

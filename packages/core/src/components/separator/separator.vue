<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Separator, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { separatorVariants, type SeparatorProps, type SeparatorSlots } from './index'

const slots = defineSlots<SeparatorSlots>()

const props = defineProps<SeparatorProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root, line, content } = separatorVariants({
    orientation: props.orientation,
  })
  
  return {
    root: root({ class: props.class }),
    line: line(),
    content: content(),
  }
})
</script>

<template>
  <Separator
    data-slot="separator"
    v-bind="forwardedProps"
    :class="classNames.root"
  >
    <!-- When slot content is provided, render flanking lines around it. -->
    <template v-if="!!slots.default">
      <div
        :class="classNames.line"
        data-slot="separator-line-1"
      />

      <div
        :class="classNames.content"
        data-slot="separator-content"
      >
        <slot />
      </div>

      <div
        :class="classNames.line"
        data-slot="separator-line-2"
      />
    </template>

    <!-- No content — render a single line. -->
    <div
      v-else
      data-slot="separator-line"
      :class="classNames.line"
    />
  </Separator>
</template>

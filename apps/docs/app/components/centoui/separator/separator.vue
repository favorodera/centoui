<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Separator, useForwardProps } from 'reka-ui'
import { normalizeClass, useSlots } from 'vue'
import { type SeparatorProps, separatorVariants } from './index'

const props = defineProps<SeparatorProps>()

const slots = useSlots()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = separatorVariants()
</script>

<template>
  <Separator
    data-slot="separator"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
      orientation: props.orientation,
    })"
  >
    <!-- When slot content is provided, render flanking lines around it. -->
    <template v-if="slots.default">
      <div
        :class="variants.line({ orientation: props.orientation })"
        data-slot="separator-line-1"
      />

      <div
        :class="variants.content({ orientation: props.orientation })"
        data-slot="separator-content"
      >
        <slot />
      </div>

      <div
        :class="variants.line({ orientation: props.orientation })"
        data-slot="separator-line-2"
      />
    </template>

    <!-- No content — render a single line. -->
    <div
      v-else
      data-slot="separator-line"
      :class="variants.line({ orientation: props.orientation })"
    />
  </Separator>
</template>

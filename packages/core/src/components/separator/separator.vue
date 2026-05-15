<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Separator, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { separatorVariants, type SeparatorProps, type SeparatorSlots } from './index'

const slots = defineSlots<SeparatorSlots>()

const props = defineProps<SeparatorProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => separatorVariants({
  orientation: props.orientation,
}))
</script>

<template>
  <Separator
    data-slot="separator"
    v-bind="forwardedProps"
    :class="styles.root({ class: props.class })"
  >
    <!-- When slot content is provided, render flanking lines around it. -->
    <template v-if="!!slots.default">
      <div
        :class="styles.line()"
        data-slot="separator-line-1"
      />

      <div
        :class="styles.content()"
        data-slot="separator-content"
      >
        <slot />
      </div>

      <div
        :class="styles.line()"
        data-slot="separator-line-2"
      />
    </template>

    <!-- No content — render a single line. -->
    <div
      v-else
      data-slot="separator-line"
      :class="styles.line()"
    />
  </Separator>
</template>

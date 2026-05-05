<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Separator, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { separatorVariants, type SeparatorProps, type SeparatorSlots } from './index'

const slots = defineSlots<SeparatorSlots>()

const props = withDefaults(defineProps<SeparatorProps>(), {
  as: 'div',
  orientation: 'horizontal',
  size: 'xs',
  variant: 'solid',
  color: 'neutral',
})
const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant', 'color')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => separatorVariants({
  orientation: props.orientation,
  size: props.size,
  variant: props.variant,
  color: props.color,
}))
</script>

<template>
  <Separator
    data-centoui-slot="separator"
    :data-centoui-orientation="orientation"
    v-bind="forwardedProps"
    :class="styles.root({ class: props.class })"
  >
    <template v-if="!!slots.default">
      <div
        :class="styles.line()"
        data-centoui-slot="separator-line-1"
      />

      <div
        :class="styles.content()"
        data-centoui-slot="separator-content"
      >
        <slot />
      </div>

      <div
        :class="styles.line()"
        data-centoui-slot="separator-line-2"
      />
    </template>

    <div
      v-else
      data-centoui-slot="separator-line"
      :class="styles.line()"
    />
  </Separator>
</template>

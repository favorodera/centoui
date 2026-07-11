<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import { type CheckboxEmits, type CheckboxProps, type CheckboxSlots, checkboxVariants } from '.'
import { Icon } from '../icon'

defineSlots<CheckboxSlots>()

const emits = defineEmits<CheckboxEmits>()

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { indicator, root } = checkboxVariants()

const classNames = computed(() => ({
  indicator: indicator({
    size: props.size,
  }),
  root: root({
    class: props.class,
    size: props.size,
  }),
}))
</script>

<template>
  <CheckboxRoot
    v-slot="slotProps"
    :data-size="props.size"
    data-slot="checkbox-root"
    v-bind="forwardedPropsEmits"
    :class="classNames.root"
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      :class="classNames.indicator"
    >
      <slot v-bind="slotProps">
        <Icon
          v-if="slotProps.state === 'indeterminate'"
          :name="config.icons.minus"
        />

        <Icon
          v-else
          :name="config.icons.check"
        />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

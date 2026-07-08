<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TagsInputRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { provideRootContext, type TagsInputRootEmits, type TagsInputRootProps, type TagsInputRootSlots, tagsInputVariants } from '.'

defineSlots<TagsInputRootSlots>()

const emits = defineEmits<TagsInputRootEmits>()

const props = withDefaults(defineProps<TagsInputRootProps>(), {
  addOnPaste: true,
  addOnTab: true,
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'size')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root } = tagsInputVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
}))

provideRootContext(reactive({
  size: toRef(props, 'size'),
}))
</script>

<template>
  <TagsInputRoot
    v-slot="slotProps"
    v-bind="forwardedPropsEmits"
    :class="classNames"
    data-slot="tags-input-root"
    :data-size="size"
  >
    <slot v-bind="slotProps" />
  </TagsInputRoot>
</template>

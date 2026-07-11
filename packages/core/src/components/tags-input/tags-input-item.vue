<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
  useForwardProps,
} from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  injectRootContext,
  type TagsInputItemProps,
  tagsInputVariants,
} from '.'
import { Icon } from '../icon'

const props = defineProps<TagsInputItemProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardProps(delegatedProps)

const { item, itemDelete, itemText } = tagsInputVariants()

const classNames = computed(() => ({
  item: item({
    class: props.class,
    size: rootContext.size,
  }),
  itemDelete: itemDelete({
    size: rootContext.size,
  }),
  itemText: itemText({
    size: rootContext.size,
  }),
}))
</script>

<template>
  <TagsInputItem
    data-slot="tags-input-item"
    v-bind="forwardedPropsEmits"
    :class="classNames.item"
  >
    <TagsInputItemText
      data-slot="tags-input-item-text"
      :class="classNames.itemText"
    />

    <TagsInputItemDelete
      data-slot="tags-input-item-delete"
      :class="classNames.itemDelete"
    >
      <Icon :name="config.icons.x" />
    </TagsInputItemDelete>
  </TagsInputItem>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
  useForwardProps,
} from 'reka-ui'
import { normalizeClass } from 'vue'
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

const variants = tagsInputVariants()
</script>

<template>
  <TagsInputItem
    data-slot="tags-input-item"
    v-bind="forwardedPropsEmits"
    :class="variants.item({
      size: rootContext?.size,
      class: normalizeClass(props.class),
    })"
  >
    <TagsInputItemText
      data-slot="tags-input-item-text"
      :class="variants.itemText({
        size: rootContext?.size,
      })"
    />

    <TagsInputItemDelete
      data-slot="tags-input-item-delete"
      :class="variants.itemDelete({
        size: rootContext?.size,
      })"
    >
      <Icon :name="config.icons.x" />
    </TagsInputItemDelete>
  </TagsInputItem>
</template>

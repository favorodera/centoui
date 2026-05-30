<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import {
  ItemRoot,
  ItemMedia,
  ItemContent,
  ItemHeader,
  ItemTitle,
  ItemDescription,
  ItemBody,
  ItemFooter,
  ItemActions,
  itemVariants,
} from '#centoui/components/item'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Item', {
  variant: {
    type: 'array',
    label: 'Variant',
    options: Object.keys(itemVariants.variants.variant),
    default: itemVariants.defaultVariants.variant,
  },
})

</script>

<template>
  <ViewContainer>
    <ItemRoot
      :variant="values.variant"
      as-child
    >
      <a href="#">
        <ItemMedia>
          <Icon icon="lucide:shield-alert" />
        </ItemMedia>

        <ItemContent>
          <ItemHeader>
            <ItemTitle>Basic Item</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemHeader>

          <ItemBody>
            Item body
          </ItemBody>

          <ItemFooter>
            Item footer
          </ItemFooter>
        </ItemContent>
      
        <ItemActions>
          <Button
            variant="outline"
            size="sm"
          >
            Action
          </Button>
        </ItemActions>
      </a>
    </ItemRoot>
  </ViewContainer>
</template>

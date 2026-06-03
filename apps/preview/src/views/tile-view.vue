<script setup lang="ts">
import { Badge } from '#centoui/components/badge'
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import {
  TileRoot,
  TileMedia,
  TileContent,
  TileTitle,
  TileDescription,
  TileActions,
  tileVariants,
} from '#centoui/components/tile'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Tile', {
  variant: {
    type: 'array',
    label: 'Variant',
    options: Object.keys(tileVariants.variants.variant),
    default: tileVariants.defaultVariants.variant,
  },
})

</script>

<template>
  <ViewContainer>
    <TileRoot :variant="values.variant">
      <TileMedia type="image">
        <img
          src="https://i.pravatar.cc/80?img=22"
          class="size-12"
        >
      </TileMedia>

      <TileContent>
        <TileTitle>Michael Chen</TileTitle>
        <TileDescription>
          Frontend Engineer
        </TileDescription>
      </TileContent>

      <Badge variant="success">
        Online
      </Badge>
    </TileRoot>

    <TileRoot :variant="values.variant">
      <TileMedia type="icon">
        <Icon
          icon="lucide:package"
        />
      </TileMedia>

      <TileContent>
        <TileTitle>Order #84729</TileTitle>
        <TileDescription>
          Shipped • Arriving tomorrow
        </TileDescription>
      </TileContent>
    </TileRoot>

    <TileRoot
      as-child
      :variant="values.variant"
    >
      <a
        href="#"
        class="flex items-center gap-3"
      >
        <TileMedia>
          <Icon
            icon="lucide:shield"
            class="size-4.5"
          />
        </TileMedia>

        <TileContent>
          <TileTitle>Privacy Settings</TileTitle>
        </TileContent>

        <Icon icon="lucide:chevron-right" />
      </a>
    </TileRoot>

    <TileRoot :variant="values.variant">
      <TileContent>
        <TileTitle>Project Phoenix</TileTitle>
        <TileDescription>
          Design system migration
        </TileDescription>
      </TileContent>

      <TileActions>
        <Button
          size="xs"
          variant="outline"
        >
          Edit
        </Button>

        <Button
          size="xs"
          variant="error"
        >
          Delete
        </Button>
      </TileActions>
    </TileRoot>
  </ViewContainer>
</template>

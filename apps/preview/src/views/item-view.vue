<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from '#centoui/components/avatar'
import { Badge } from '#centoui/components/badge'
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import {
  ItemRoot,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  itemVariants,
  ItemGroup,
  ItemSeparator,
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
    <ItemGroup class="w-full">

      <ItemRoot>
        <ItemContent>
          <ItemTitle>Email Notifications</ItemTitle>
          <ItemDescription>
            Receive updates in your inbox
          </ItemDescription>
        </ItemContent>
      </ItemRoot>

      <ItemSeparator />

      <ItemRoot>
        <ItemContent>
          <ItemTitle>Push Notifications</ItemTitle>
          <ItemDescription>
            Real-time mobile alerts
          </ItemDescription>
        </ItemContent>
      </ItemRoot>

      <ItemSeparator />

      <ItemRoot>
        <ItemContent>
          <ItemTitle>Security Alerts</ItemTitle>
          <ItemDescription>
            Important account activity
          </ItemDescription>
        </ItemContent>
      </ItemRoot>

    </ItemGroup>

    <ItemRoot :variant="values.variant">
      <ItemMedia>
        <AvatarRoot>
          <AvatarImage
            src="https://i.pravatar.cc/80?img=12"
          />
          <AvatarFallback>SJ</AvatarFallback>
        </AvatarRoot>
        
      </ItemMedia>

      <ItemContent>
        <ItemTitle>Sarah Johnson</ItemTitle>
        <ItemDescription>
          Senior Product Designer
        </ItemDescription>
      </ItemContent>
      
    </ItemRoot>

    <ItemRoot :variant="values.variant">
      <ItemMedia type="icon">
        <Icon
          icon="lucide:package"
        />
      </ItemMedia>

      <ItemContent>
        <ItemTitle>Order #84729</ItemTitle>
        <ItemDescription>
          Shipped • Arriving tomorrow
        </ItemDescription>
      </ItemContent>
    </ItemRoot>

    <ItemRoot :variant="values.variant">
      <ItemContent>
        <ItemTitle>Billing Address</ItemTitle>
        <ItemDescription>
          Current payment details
        </ItemDescription>
      </ItemContent>

      <Icon icon="lucide:chevron-right" />
    </ItemRoot>

    <ItemRoot :variant="values.variant">
      <ItemContent>
        <ItemTitle>Project Phoenix</ItemTitle>
        <ItemDescription>
          Design system migration
        </ItemDescription>
      </ItemContent>

      <ItemActions>
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
      </ItemActions>
    </ItemRoot>

    <ItemRoot :variant="values.variant">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        class="h-48 w-full object-cover"
      >

      <ItemContent>
        <ItemTitle>
          Summer Collection
        </ItemTitle>

        <ItemDescription>
          Explore our latest seasonal arrivals and curated essentials.
        </ItemDescription>
      </ItemContent>
    </ItemRoot>

    <ItemRoot
      as-child
      :variant="values.variant"
    >
      <a
        href="#"
        class="flex items-center gap-3"
      >
        <ItemMedia>
          <Icon
            icon="lucide:shield"
            class="size-4.5"
          />
        </ItemMedia>

        <ItemContent>
          <ItemTitle>Privacy Settings</ItemTitle>
        </ItemContent>

        <Icon icon="lucide:chevron-right" />
      </a>
    </ItemRoot>

    <ItemRoot :variant="values.variant">
      <ItemMedia type="image">
        <img
          src="https://i.pravatar.cc/80?img=22"
          class="size-12"
        >
      </ItemMedia>

      <ItemContent>
        <ItemTitle>Michael Chen</ItemTitle>
        <ItemDescription>
          Frontend Engineer
        </ItemDescription>
      </ItemContent>

      <Badge variant="success">
        Online
      </Badge>
    </ItemRoot>

    <ItemRoot :variant="values.variant">
      <ItemMedia type="icon">
        <Icon icon="lucide:bell" />
      </ItemMedia>

      <ItemContent>
        <ItemTitle>
          New login detected
        </ItemTitle>

        <ItemDescription>
          Chrome • Lagos, Nigeria
        </ItemDescription>
      </ItemContent>

      <span class="text-xs text-muted-foreground">
        2m ago
      </span>
    </ItemRoot>
  </ViewContainer>
</template>

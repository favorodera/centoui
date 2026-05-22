<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import {
  CardRoot,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from '#centoui/components/card'
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from '#centoui/components/avatar'

useApp().preview.initPreview('Card', {})
</script>

<template>
  <ViewContainer class="max-w-full">
    <CardRoot class="max-w-md">
      <CardHeader class="flex-row">
        <AvatarRoot>
          <AvatarImage src="https://github.com/favorodera.png" />
          <AvatarFallback>FE</AvatarFallback>
        </AvatarRoot>

        <div>
          <CardTitle>Favour Emeka</CardTitle>
          <CardDescription>UI Engineer at CentoUI</CardDescription>
        </div>

        <Button
          size="sm"
          class="ml-auto"
        >
          Connect
        </Button>
      </CardHeader>

      <CardBody>
        Currently working on reusable Vue components, accessibility improvements,
        and documentation for our design system.
      </CardBody>
    </CardRoot>

    <CardRoot class="max-w-sm pt-0">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
        alt="Sneakers"
      >

      <CardHeader>
        <CardTitle>Nike Air Max 270</CardTitle>

        <CardDescription>
          Everyday sneakers built for comfort, breathable support, and long city walks.
        </CardDescription>
      </CardHeader>

      <CardBody class="text-2xl font-bold tabular-nums">
        $189
      </CardBody>

      <CardFooter
        class="
          w-full justify-between gap-4
          *:flex-1
        "
      >
        <Button variant="outline">
          <Icon icon="lucide:heart" />
          Add to Wishlist
        </Button>

        <Button>
          <Icon icon="lucide:shopping-cart" />
          Buy Now
        </Button>
      </CardFooter>
    </CardRoot>
  </ViewContainer>
</template>

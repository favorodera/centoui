<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { ButtonGroup } from '#centoui/components/button-group'
import { Icon } from '#centoui/components/icon'
import { Input } from '#centoui/components/input'
import { Separator } from '#centoui/components/separator'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

useApp().preview.initPreview('Button Group', {})

</script>

<template>
  <ViewContainer>
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">
          1
        </Button>

        <Separator orientation="vertical" />

        <Button variant="secondary">
          2
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button
          variant="secondary"
          square
        >
          <Icon icon="lucide:arrow-left" />
        </Button>

        <Separator orientation="vertical" />

        <Button
          variant="secondary"
          square
        >
          <Icon icon="lucide:arrow-right" />
        </Button>

      </ButtonGroup>

    </ButtonGroup>

    <ButtonGroup>
      <Button variant="secondary">
        <Icon icon="lucide:layout-grid" />
      </Button>

      <Separator orientation="vertical" />

      <Button variant="secondary">
        <Icon icon="lucide:list" />
      </Button>

      <Separator orientation="vertical" />

      <Button variant="secondary">
        <Icon icon="lucide:table" />
      </Button>

    </ButtonGroup>

    <ButtonGroup orientation="vertical">
      <Button
        variant="secondary"
        square
      >
        <Icon icon="lucide:plus" />
      </Button>

      <Separator />

      <Button
        variant="secondary"
        square
      >
        <Icon icon="lucide:minus" />
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button
        variant="outline"
        aria-label="Search"
      >
        <Icon icon="lucide:search" />
      </Button>
    </ButtonGroup>
  </ViewContainer>
</template>

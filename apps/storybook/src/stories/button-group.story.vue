<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { ButtonGroup } from '#centoui/components/button-group'
import { Icon } from '#centoui/components/icon'
import { Separator } from '#centoui/components/separator'
import { useStory } from '@/composables/use-story'

useStory('Button Group', {})
</script>

<template>
  <ButtonGroup>
    <Button>Button 1</Button>
    <Separator orientation="vertical" />
    <Button>Button 2</Button>
  </ButtonGroup>

  <ButtonGroup orientation="vertical">
    <Button variant="secondary">
      <Icon icon="lucide:plus" />
    </Button>

    <Separator />

    <Button variant="secondary">
      <Icon icon="lucide:minus" />
    </Button>
  </ButtonGroup>
</template>

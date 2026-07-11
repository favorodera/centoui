<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { Kbd, KbdGroup, kbdVariants } from '#centoui/components/kbd'

import { useStory } from '@/composables/use-story'

const controls = useStory('Kbd', {
  size: {
    default: kbdVariants.defaultVariants.size,
    options: Object.keys(kbdVariants.variants.size),
    type: 'array',
  },
})
</script>

<template>
  <Kbd :size="controls.size">⌘</Kbd>

  <KbdGroup>
    <Kbd :size="controls.size">Ctrl</Kbd>
    <Kbd :size="controls.size">Alt</Kbd>
    <Kbd :size="controls.size">Del</Kbd>
  </KbdGroup>

  <Button
    variant="outline"
  >
    <Icon name="lucide:search" />
    Search documentation
    <KbdGroup>
      <Kbd :size="controls.size">⌘</Kbd>
      <Kbd :size="controls.size">K</Kbd>
    </KbdGroup>
  </Button>
</template>

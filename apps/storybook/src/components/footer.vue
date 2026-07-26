<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { Separator } from '#centoui/components/separator'
import { SheetContent, SheetDescription, SheetHeader, SheetRoot, SheetTitle, SheetTrigger } from '#centoui/components/sheet'
import { useApp } from '@/composables/use-app'
import Controls from './controls.vue'

const { story } = useApp()
</script>

<template>
  <footer
    class="
      flex items-center justify-between inline-full

      lg:hidden
    "
  >
    <SheetRoot>
      <SheetTrigger as-child>
        <Button
          variant="outline"
          class="inline-full border-be-0 border-x-0 px-4 py-8"
        >
          Controls
          <Icon name="lucide:chevron-up" />
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Controls</SheetTitle>

          <SheetDescription>
            Configure the properties of the story.
          </SheetDescription>
        </SheetHeader>

        <Separator />

        <Controls
          :schema="story.schema.value"
          :values="story.values.value"
          @update:values="story.updateValues"
        />
      </SheetContent>
    </SheetRoot>
  </footer>
</template>

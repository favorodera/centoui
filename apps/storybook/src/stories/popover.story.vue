<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { PopoverContent, PopoverFooter, PopoverHeader, PopoverRoot, PopoverTrigger } from '#centoui/components/popover'
import { useStory } from '@/composables/use-story'

const controls = useStory('Input', {
  align: {
    default: 'center' as any,
    options: [
      'center',
      'start',
      'end',
    ],
    type: 'array',
  },
  showArrow: {
    default: true,
    type: 'boolean',
  },
  side: {
    default: 'bottom' as any,
    options: [
      'top',
      'bottom',
      'left',
      'right',
    ],
    type: 'array',
  },
})
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger as-child>
      <Button variant="secondary">
        Profile
      </Button>
    </PopoverTrigger>

    <PopoverContent
      :side="controls.side"
      :align="controls.align"
      :show-arrow="controls.showArrow"
    >
      <PopoverHeader class="border-be border-border">
        <h4 class="font-medium text-foreground">
          Jane Doe
        </h4>

        <p class="text-xs text-muted-foreground">
          jane.doe@example.com
        </p>
      </PopoverHeader>

      <!-- Body: Quick Stats or Info -->
      <div class="flex flex-col gap-1">
        <p class="text-sm font-medium">
          Pro Plan Active
        </p>

        <p class="text-xs text-muted-foreground">
          Your subscription will renew in 12 days.
        </p>
      </div>

      <PopoverFooter class="flex items-center justify-end">
        <Button
          variant="destructive"
          size="sm"
        >
          Sign out
        </Button>
      </PopoverFooter>
    </PopoverContent>
  </PopoverRoot>
</template>

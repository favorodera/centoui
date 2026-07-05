<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { Input } from '#centoui/components/input'
import { Label } from '#centoui/components/label'
import { Separator } from '#centoui/components/separator'
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetRoot,
  SheetTitle,
  SheetTrigger,
  sheetVariants,
} from '#centoui/components/sheet'
import { useStory } from '@/composables/use-story'

const controls = useStory('Sheet', {
  showClose: {
    default: true,
    type: 'boolean',
  },
  side: {
    default: sheetVariants.defaultVariants.side,
    options: Object.keys(sheetVariants.variants.side),
    type: 'array',
  },
})
</script>

<template>
  <SheetRoot>
    <SheetTrigger as-child>
      <Button variant="outline">
        <Icon icon="lucide:user-plus" />
        Invite Member
      </Button>
    </SheetTrigger>

    <SheetContent :side="controls.side as any">
      <SheetHeader
        :show-close="controls.showClose"
      >
        <SheetTitle>Invite Team Member</SheetTitle>

        <SheetDescription>
          Send an invitation link to add someone to your workspace.
        </SheetDescription>
      </SheetHeader>

      <Separator class="-mx-4" />

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <Label for="email">Email address</Label>

          <Input
            id="email"
            type="email"
            placeholder="colleague@company.com"
          />
        </div>

        <div class="flex flex-col gap-1">
          <Label for="username">Preferred username</Label>

          <Input
            id="username"
            type="text"
            placeholder="colleague"
          />
        </div>

        <p class="text-xs text-muted-foreground">
          The invite link will expire in 7 days. You can resend it at any time from the team settings page.
        </p>
      </div>

      <SheetFooter
        class="justify-between"
        :class="{
          'justify-end': ['top', 'bottom'].includes(controls.side)
        }"
      >
        <SheetClose as-child>
          <Button variant="outline">
            Cancel
          </Button>
        </SheetClose>

        <Button>
          <Icon icon="lucide:send" />
          Send Invite
        </Button>
      </SheetFooter>
    </SheetContent>
  </SheetRoot>
</template>

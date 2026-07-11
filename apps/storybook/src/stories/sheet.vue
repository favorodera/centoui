<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Field, FieldDescription, FieldGroup } from '#centoui/components/field'
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
        <Icon name="lucide:user-plus" />
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

      <FieldGroup>
        <Field>
          <Label for="email">Email address</Label>

          <Input
            id="email"
            type="email"
            placeholder="colleague@company.com"
            autocomplete="email"
          />
        </Field>

        <Field>
          <Label for="username">Preferred username</Label>

          <Input
            id="username"
            type="text"
            placeholder="colleague"
            autocomplete="username"
          />
        </Field>

        <FieldDescription>
          The invite link will expire in 7 days. You can resend it at any time from the team settings page.
        </FieldDescription>
      </FieldGroup>

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
          <Icon name="lucide:send" />
          Send Invite
        </Button>
      </SheetFooter>
    </SheetContent>
  </SheetRoot>
</template>

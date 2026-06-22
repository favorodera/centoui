<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '#centoui/components/alert-dialog'
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

useStory('Alert Dialog', {})
</script>

<template>
  <AlertDialogRoot>
    <AlertDialogTrigger as-child>
      <Button variant="error">
        <Icon icon="lucide:trash-2" />
        Delete Account
      </Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>

        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>
          Cancel
        </AlertDialogCancel>

        <AlertDialogAction variant="error">
          Delete Account
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogRoot>
</template>

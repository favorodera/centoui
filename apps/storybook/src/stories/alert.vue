<script setup lang="ts">
import { AlertContent, AlertDescription, AlertRoot, AlertTitle, alertVariants } from '#centoui/components/alert'
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const controls = useStory('Alert', {
  variant: {
    default: alertVariants.defaultVariants.variant,
    options: Object.keys(alertVariants.variants.variant),
    type: 'array',
  },
})
</script>

<template>
  <AlertRoot :variant="controls.variant">
    <Icon icon="lucide:lightbulb" />

    <AlertContent>
      <AlertTitle>Update Available</AlertTitle>
    </AlertContent>
  </AlertRoot>

  <AlertRoot :variant="controls.variant">
    <Icon icon="lucide:alert-triangle" />

    <AlertContent>
      <AlertTitle>Payment Failed</AlertTitle>
      <AlertDescription>We couldn't process your last payment. Please update your billing details.</AlertDescription>
    </AlertContent>

    <div class="flex items-center gap-2 shrink-0">
      <Button
        variant="outline"
        size="sm"
      >
        Dismiss
      </Button>

      <Button size="sm">
        Update
      </Button>
    </div>
  </AlertRoot>

  <AlertRoot :variant="controls.variant">
    <Icon icon="lucide:x-circle" />

    <AlertContent>
      <AlertTitle>Validation Failed</AlertTitle>

      <AlertDescription>
        Your submission contains errors. Please correct the following items before trying again:

        <ul class="mbs-2 list-disc ps-5 space-y-1 text-sm">
          <li>The email address entered is already associated with an account.</li>
          <li>Password must contain at least one special character.</li>
          <li>You must agree to the privacy policy terms.</li>
        </ul>
      </AlertDescription>
    </AlertContent>
  </AlertRoot>
</template>

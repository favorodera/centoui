<script setup lang="ts">
import { NotField, NotForm, useNotForm } from 'notform'
import { z } from 'zod'
import { Button } from '#centoui/components/button'
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLegend, FieldSet, FieldTitle } from '#centoui/components/field'
import { Input } from '#centoui/components/input'
import { Label } from '#centoui/components/label'
import { RadioGroupItem, RadioGroupRoot } from '#centoui/components/radio-group'
import { SelectContent, SelectGroup, SelectItem, SelectRoot, SelectTrigger, SelectValue } from '#centoui/components/select'
import { Separator } from '#centoui/components/separator'
import { Switch } from '#centoui/components/switch'
import { TagsInputInput, TagsInputItem, TagsInputRoot } from '#centoui/components/tags-input'
import { Textarea } from '#centoui/components/textarea'
import { useStory } from '@/composables/use-story'

useStory('Field', {})

const regionOptions = [
  { label: 'United States', value: 'us' },
  { label: 'Europe (Frankfurt)', value: 'eu' },
  { label: 'Asia Pacific (Singapore)', value: 'ap' },
  { label: 'South America (São Paulo)', value: 'sa' },
] as const

const planOptions = [
  { description: 'For individuals and small teams', label: 'Starter', value: 'starter' },
  { description: 'For growing teams', label: 'Pro', value: 'pro' },
  { description: 'For large teams and enterprises', label: 'Enterprise', value: 'enterprise' },
] as const

const visibilityOptions = [
  {
    description: 'Visible and joinable by anyone in your organization.',
    label: 'Public',
    value: 'public',
  },
  {
    description: 'Only invited members can find and join the workspace.',
    label: 'Private',
    value: 'private',
  },
  {
    description: 'Hidden entirely; members must be added by an admin.',
    label: 'Secret',
    value: 'secret',
  },
] as const

const notificationChannelOptions = [
  { description: 'Receive a daily digest of workspace activity.', label: 'Email digest', value: 'email' },
  { description: 'Get notified in-app for mentions and assignments.', label: 'In-app', value: 'inapp' },
  { description: 'Push critical alerts to connected devices.', label: 'Push', value: 'push' },
] as const

const slugify = (value: string) => value
  .toLowerCase()
  .trim()
  .replaceAll(/[^a-z0-9\s-]/g, '')
  .replaceAll(/\s+/g, '-')
  .replaceAll(/-+/g, '-')

const schema = z
  .object({
    confirmName: z
      .string('Invalid confirmation')
      .trim()
      .nonempty('Please retype the workspace name to confirm'),
    description: z
      .string('Invalid description')
      .trim()
      .max(280, 'Description must not be more than 280 characters')
      .optional(),
    enableNotifications: z.boolean(),
    invites: z
      .array(z.string().trim()
        .email('Enter a valid email address'))
      .max(20, 'You can invite at most 20 members')
      .optional(),
    name: z
      .string('Invalid workspace name')
      .trim()
      .nonempty('Workspace name is required')
      .min(3, 'Workspace name must be at least 3 characters')
      .max(50, 'Workspace name must not be more than 50 characters'),
    notifications: z
      .object({
        email: z.boolean(),
        inapp: z.boolean(),
        push: z.boolean(),
      })
      .optional(),
    plan: z.enum(planOptions.map(option => option.value), 'Please select a subscription plan'),
    region: z.enum(regionOptions.map(option => option.value), 'Please select a data region'),
    slug: z
      .string('Invalid slug')
      .trim()
      .nonempty('Workspace URL slug is required')
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase letters, numbers and hyphens')
      .min(3, 'Slug must be at least 3 characters')
      .max(40, 'Slug must not be more than 40 characters'),
    visibility: z.enum(visibilityOptions.map(option => option.value), 'Please select a visibility level'),
  })
  .refine(data => data.slug === slugify(data.name) || data.slug !== '', {
    message: 'Slug must match the workspace name format (auto-generated if left empty).',
    path: ['slug'],
  })
  .refine(data => data.confirmName === data.name, {
    message: 'Confirmation does not match the workspace name.',
    path: ['confirmName'],
  })
  .refine(
    data => !data.enableNotifications || (data.notifications && (data.notifications.email || data.notifications.inapp || data.notifications.push)),
    {
      message: 'Enable at least one notification channel.',
      path: ['notifications'],
    },
  )

const form = useNotForm({
  initialValues: {
    enableNotifications: false,
    invites: [],
    notifications: {
      email: true,
      inapp: true,
      push: false,
    },
    region: 'us',
    visibility: 'private',
  },
  schema,
})
</script>

<!--NOTE: For disabled add  data-disabled="true" to field and disabled to input -->

<template>
  <FieldDescription>
    Form validation powered by <Button
      as="a"
      href="https://github.com/favorodera/notform"
      target="_blank"
      rel="noopener noreferrer"
      variant="link"
    >
      NotForm
    </Button>
  </FieldDescription>

  <NotForm
    :form
    class="inline-full max-inline-lg"
    @submit.prevent="form.submit"
    @reset="form.reset()"
  >
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Workspace Details</FieldLegend>

        <FieldDescription>
          These details define how your workspace appears across the organization.
        </FieldDescription>

        <FieldGroup>
          <NotField
            v-slot="{path,errors,events,isValid}"
            path="name"
          >
            <Field
              :data-invalid="!isValid"
              data-required
            >
              <Label :for="path">
                Workspace Name
              </Label>

              <Input
                :id="path"
                v-model="form.values.name"
                :aria-invalid="!isValid"
                autocomplete="organization"
                placeholder="Acme Engineering"
                v-bind="events"
              />

              <FieldDescription>
                The display name shown to members of this workspace.
              </FieldDescription>

              <FieldError :errors />
            </Field>
          </NotField>

          <NotField
            v-slot="{path,errors,events,isValid}"
            path="slug"
          >
            <Field
              :data-invalid="!isValid"
              data-required
            >
              <Label :for="path">
                Workspace URL
              </Label>

              <Input
                :id="path"
                v-model="form.values.slug"
                :aria-invalid="!isValid"
                autocomplete="url"
                placeholder="acme-engineering"
                v-bind="events"
              />

              <FieldDescription>
                Lowercase letters, numbers and hyphens only (e.g. app.io/acme-engineering).
              </FieldDescription>

              <FieldError :errors />
            </Field>
          </NotField>

          <NotField
            v-slot="{path,errors,events,isValid}"
            path="description"
          >
            <Field :data-invalid="!isValid">
              <Label :for="path">
                Description
              </Label>

              <Textarea
                :id="path"
                v-model="form.values.description"
                :aria-invalid="!isValid"
                v-bind="events"
                placeholder="What is this workspace used for?"
              />

              <FieldDescription>
                Optional. A short summary of the workspace purpose.
              </FieldDescription>

              <FieldError :errors />
            </Field>
          </NotField>

          <NotField
            v-slot="{path,errors,events,isValid}"
            path="region"
          >
            <Field
              :data-invalid="!isValid"
              data-required
              orientation="auto"
            >
              <FieldContent>
                <Label :for="path">
                  Data Region
                </Label>

                <FieldDescription>
                  Choose where your workspace data is stored.
                </FieldDescription>
              </FieldContent>

              <SelectRoot
                v-model:model-value="form.values.region"
                autocomplete="region"
                @update:model-value="events.onChange()"
              >
                <SelectTrigger
                  :id="path"
                  :aria-invalid="!isValid"
                  @blur="events.onBlur()"
                >
                  <SelectValue placeholder="Select a region" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      v-for="region in regionOptions"
                      :key="region.value"
                      :value="region.value"
                    >
                      {{ region.label }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectRoot>

              <FieldError :errors />
            </Field>
          </NotField>
        </FieldGroup>
      </FieldSet>

      <Separator />

      <FieldSet>
        <FieldLegend variant="label">
          Visibility &amp; Access
        </FieldLegend>

        <FieldDescription>
          Control who can discover and join this workspace.
        </FieldDescription>

        <NotField
          v-slot="{ errors, events, isValid}"
          path="visibility"
        >
          <RadioGroupRoot
            v-model:model-value="form.values.visibility"
            @update:model-value="events.onChange()"
          >
            <Label
              v-for="option in visibilityOptions"
              :key="option.value"
              :for="option.value"
            >
              <Field
                orientation="horizontal"
                :data-invalid="!isValid"
              >
                <FieldContent>
                  <FieldTitle>
                    {{ option.label }}
                  </FieldTitle>

                  <FieldDescription>
                    {{ option.description }}
                  </FieldDescription>
                </FieldContent>

                <RadioGroupItem
                  :id="option.value"
                  :value="option.value"
                  :aria-invalid="!isValid"
                  @blur="events.onBlur()"
                />
              </Field>
            </Label>
          </RadioGroupRoot>

          <FieldError :errors />
        </NotField>

        <NotField
          v-slot="{path,errors,events,isValid}"
          path="invites"
        >
          <Field :data-invalid="!isValid">
            <Label :for="path">
              Invite Members
            </Label>

            <TagsInputRoot
              :id="path"
              v-model:model-value="form.values.invites"
              :aria-invalid="!isValid"
              @update:model-value="events.onChange()"
              @blur="events.onBlur()"
            >
              <TagsInputItem
                v-for="invite in form.values.invites"
                :key="invite"
                :value="invite"
              />

              <TagsInputInput placeholder="Add a member email…" />
            </TagsInputRoot>

            <FieldDescription>
              Type an email and press enter to invite (optional, max 20).
            </FieldDescription>

            <FieldError :errors />
          </Field>
        </NotField>
      </FieldSet>

      <Separator />

      <FieldSet>
        <FieldLegend variant="label">
          Subscription Plan
        </FieldLegend>

        <FieldDescription>
          Select a plan that suits your team's needs.
        </FieldDescription>

        <NotField
          v-slot="{ errors, events, isValid}"
          path="plan"
        >
          <RadioGroupRoot
            v-model:model-value="form.values.plan"
            @update:model-value="events.onChange()"
          >
            <Label
              v-for="plan in planOptions"
              :key="plan.value"
              :for="plan.value"
            >
              <Field
                orientation="horizontal"
                :data-invalid="!isValid"
              >
                <FieldContent>
                  <FieldTitle>
                    {{ plan.label }}
                  </FieldTitle>

                  <FieldDescription>
                    {{ plan.description }}
                  </FieldDescription>
                </FieldContent>

                <RadioGroupItem
                  :id="plan.value"
                  :value="plan.value"
                  :aria-invalid="!isValid"
                  @blur="events.onBlur()"
                />
              </Field>
            </Label>
          </RadioGroupRoot>

          <FieldError :errors />
        </NotField>

        <NotField
          v-slot="{path,errors,events,isValid}"
          path="enableNotifications"
        >
          <Field
            :data-invalid="!isValid"
            orientation="horizontal"
          >
            <FieldContent>
              <Label :for="path">
                Enable Notifications
              </Label>

              <FieldDescription>
                Send workspace activity alerts to members.
              </FieldDescription>
            </FieldContent>

            <Switch
              :id="path"
              v-model:model-value="form.values.enableNotifications"
              :aria-invalid="!isValid"
              @update:model-value="events.onChange()"
              @blur="events.onBlur()"
            />

            <FieldError :errors />
          </Field>
        </NotField>

        <NotField
          v-slot="{path,errors,events,isValid}"
          path="notifications"
        >
          <Field
            :data-invalid="!isValid"
            :data-disabled="!form.values.enableNotifications"
          >
            <FieldContent>
              <Label :for="path">
                Notification Channels
              </Label>

              <FieldDescription>
                Choose how members are notified (required when notifications are enabled).
              </FieldDescription>
            </FieldContent>

            <FieldGroup>
              <Field
                v-for="channel in notificationChannelOptions"
                :key="channel.value"
                orientation="horizontal"
                :data-disabled="!form.values.enableNotifications"
              >
                <FieldContent>
                  <Label :for="`${path}-${channel.value}`">
                    {{ channel.label }}
                  </Label>

                  <FieldDescription>
                    {{ channel.description }}
                  </FieldDescription>
                </FieldContent>

                <Switch
                  :id="`${path}-${channel.value}`"
                  v-model:model-value="form.values.notifications[channel.value]"
                  :disabled="!form.values.enableNotifications"
                  :aria-invalid="!isValid"
                  @update:model-value="events.onChange()"
                  @blur="events.onBlur()"
                />
              </Field>
            </FieldGroup>

            <FieldError :errors />
          </Field>
        </NotField>
      </FieldSet>

      <Separator />

      <FieldSet>
        <FieldLegend variant="label">
          Confirm
        </FieldLegend>

        <NotField
          v-slot="{path,errors,events,isValid}"
          path="confirmName"
        >
          <Field
            :data-invalid="!isValid"
            data-required
          >
            <Label :for="path">
              Retype Workspace Name
            </Label>

            <Input
              :id="path"
              v-model="form.values.confirmName"
              :aria-invalid="!isValid"
              placeholder="Acme Engineering"
              v-bind="events"
            />

            <FieldDescription>
              Type the workspace name again to confirm creation.
            </FieldDescription>

            <FieldError :errors />
          </Field>
        </NotField>
      </FieldSet>

      <Field orientation="horizontal">
        <Button type="submit">
          Create Workspace
        </Button>

        <Button
          variant="outline"
          type="reset"
        >
          Cancel
        </Button>
      </Field>
    </FieldGroup>
  </NotForm>
</template>

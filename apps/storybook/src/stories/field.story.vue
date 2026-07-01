<script setup lang="ts">
import { NotField, NotForm, useNotForm } from 'notform'
import { z } from 'zod'
import { Button } from '#centoui/components/button'
import { Checkbox } from '#centoui/components/checkbox'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '#centoui/components/field'
import { Input } from '#centoui/components/input'
import { SelectContent, SelectGroup, SelectItem, SelectRoot, SelectTrigger, SelectValue } from '#centoui/components/select'
import { Separator } from '#centoui/components/separator'
import { Textarea } from '#centoui/components/textarea'
import { useStory } from '@/composables/use-story'

useStory('Field', {})

const monthOptions = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
] as const

const yearOptions = [
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
] as const

const schema = z.object({
  address: z
    .string('Invalid address')
    .trim()
    .nonempty('Address is required')
    .min(3, 'Address must be at least 3 characters')
    .max(50, 'Address must not be more than 50 characters'),
  cardNumber: z
    .string('Invalid card number')
    .nonempty('Card number is required')
    .regex(/^\d+$/, 'Card number must contain only digits')
    .min(13, 'Card number must be at least 13 digits')
    .max(19, 'Card number must not be more than 19 digits'),
  comments: z
    .string('Invalid comment')
    .trim()
    .max(500, 'Comment must not be more than 500 characters')
    .optional(),
  cvv: z
    .string('Invalid CVV number')
    .trim()
    .nonempty('CVV number is required')
    .regex(/^\d+$/, 'CVV must contain only digits')
    .min(3, 'Must be at least 3 digits')
    .max(4, 'Must be at most 4 digits'),
  month: z.enum(monthOptions, 'Please select a valid month'),
  name: z
    .string('Invalid card name')
    .trim()
    .regex(/^[a-zA-Z\s.\\-]+$/, 'Name contains invalid characters')
    .nonempty('Name on card is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must not be more than 50 characters'),
  sameAsShipping: z.boolean('Please provide a response'),
  year: z.enum(yearOptions, 'Please select a valid expiration year'),
})

const form = useNotForm({
  initialValues: {
    sameAsShipping: false,
  },
  schema,
})
</script>

<template>
  <FieldDescription>
    Form validation powered by <Button
      as="a"
      href="https://github.com/centoui/notform"
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
        <FieldLegend>Payment Method</FieldLegend>

        <FieldDescription>
          All transactions are secure and encrypted
        </FieldDescription>

        <FieldGroup>
          <NotField
            v-slot="{path,errors,events,isValid}"
            path="name"
          >
            <Field :data-invalid="!isValid">
              <FieldLabel :for="path">
                Name on Card
              </FieldLabel>

              <Input
                :id="path"
                v-model:value="form.values.name"
                :aria-invalid="!isValid"
                :name="path"
                autocomplete="cc-name"
                placeholder="John Doe"
                v-bind="events"
              />

              <FieldError :errors />
            </Field>
          </NotField>

          <NotField
            v-slot="{path,errors,events,isValid}"
            path="cardNumber"
          >
            <Field :data-invalid="!isValid">
              <FieldLabel :for="path">
                Card Number
              </FieldLabel>

              <Input
                :id="path"
                v-model:value="form.values.cardNumber"
                :name="path"
                :aria-invalid="!isValid"
                autocomplete="cc-number"
                placeholder="1234 5678 1234 5678"
                v-bind="events"
              />

              <FieldDescription>
                Enter your 16-digit card number
              </FieldDescription>

              <FieldError :errors />
            </Field>
          </NotField>

          <FieldGroup class="grid grid-cols-3 gap-4">
            <NotField
              v-slot="{path,errors,events,isValid}"
              path="month"
            >
              <Field :data-invalid="!isValid">
                <FieldLabel :for="path">
                  Month
                </FieldLabel>

                <SelectRoot
                  v-model:model-value="form.values.month"
                  :name="path"
                  autocomplete="cc-exp"
                  @update:model-value="events.onChange()"
                >
                  <SelectTrigger
                    :id="path"
                    :aria-invalid="!isValid"
                    @blur="events.onBlur()"
                  >
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="month in monthOptions"
                        :key="month"
                        :value="month"
                      >
                        {{ month }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectRoot>

                <FieldError :errors />
              </Field>
            </NotField>

            <NotField
              v-slot="{path, errors,events,isValid}"
              path="year"
            >
              <Field :data-invalid="!isValid">
                <FieldLabel :for="path">
                  Year
                </FieldLabel>

                <SelectRoot
                  v-model:model-value="form.values.year"
                  :name="path"
                  autocomplete="cc-exp"
                  @update:model-value="events.onChange()"
                >
                  <SelectTrigger
                    :id="path"
                    :aria-invalid="!isValid"
                    @blur="events.onBlur()"
                  >
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="year in yearOptions"
                        :key="year"
                        :value="year"
                      >
                        {{ year }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectRoot>

                <FieldError :errors />
              </Field>
            </NotField>

            <NotField
              v-slot="{path, errors,events,isValid}"
              path="cvv"
            >
              <Field :data-invalid="!isValid">
                <FieldLabel :for="path">
                  CVV
                </FieldLabel>

                <Input
                  :id="path"
                  v-model:value="form.values.cvv"
                  :aria-invalid="!isValid"
                  :name="path"
                  autocomplete="cc-csc"
                  placeholder="123"
                  v-bind="events"
                />

                <FieldError :errors />
              </Field>
            </NotField>
          </FieldGroup>
        </FieldGroup>
      </FieldSet>

      <Separator />

      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>

        <FieldDescription>
          The billing address associated with your payment method
        </FieldDescription>

        <FieldGroup>
          <NotField
            v-slot="{path,errors,events,isValid}"
            path="address"
          >
            <Field :data-invalid="!isValid">
              <FieldLabel :for="path">
                Address
              </FieldLabel>

              <Input
                :id="path"
                v-model:value="form.values.address"
                :aria-invalid="!isValid"
                :name="path"
                autocomplete="address"
                placeholder="123 Main St"
                v-bind="events"
              />

              <FieldError :errors />
            </Field>
          </NotField>

          <NotField
            v-slot="{path,errors,events,isValid}"
            path="sameAsShipping"
          >
            <Field
              orientation="horizontal"
              :data-invalid="!isValid"
              class="flex-wrap"
            >
              <Checkbox
                :id="path"
                v-model:model-value="form.values.sameAsShipping"
                :aria-invalid="!isValid"
                v-bind="events"
                default-checked
              />

              <FieldLabel
                :for="path"
                class-name="font-normal"
              >
                Same as shipping address
              </FieldLabel>

              <FieldError
                :errors
                class="basis-full"
              />
            </Field>
          </NotField>
        </FieldGroup>
      </FieldSet>

      <NotField
        v-slot="{path,errors,events,isValid}"
        path="comments"
      >
        <Field :data-invalid="!isValid">
          <FieldLabel :for="path">
            Comments
          </FieldLabel>

          <Textarea
            :id="path"
            v-model:value="form.values.comments"
            :aria-invalid="!isValid"
            :name="path"
            v-bind="events"
            placeholder="Add any additional comments"
            class="resize-none"
          />

          <FieldError :errors />
        </Field>
      </NotField>

      <Field orientation="horizontal">
        <Button type="submit">
          Submit
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

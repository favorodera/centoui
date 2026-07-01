<script setup lang="ts">
import { NotField, NotForm, useNotForm } from 'notform'
import { z } from 'zod'
import { Button } from '#centoui/components/button'
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '#centoui/components/field'
import { Input } from '#centoui/components/input'
import { useStory } from '@/composables/use-story'

useStory('Field', {})

const schema = z.object({
  name: z.string().min(3),
})

const form = useNotForm({
  initialValues: {
    name: 'Ada',
  },
  schema,
})
</script>

<template>
  <NotForm
    :form
    class="inline-full max-inline-md"
    @submit="form.submit"
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
            v-slot="{path}"
            path="name"
          >
            <Field>
              <FieldLabel :for="path">
                Name on Card
              </FieldLabel>

              <Input
                :id="path"
                v-model:value="form.values.name"
                :name="path"
                autocomplete="cc-name"
                placeholder="Evil Rabbit"
                required
              />
            </Field>
          </NotField>
        </FieldGroup>
      </FieldSet>

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

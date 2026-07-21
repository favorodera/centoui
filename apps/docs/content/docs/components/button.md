---
title: Button
description: Displays a button or a component that looks like a button.
---

## Installation

```bash [Terminal]
npx centoui add button
```

## Anatomy

A `Button` is a single primitive element rendered with variant-driven classes. It supports icons via the `data-slot="icon"` attribute convention and exposes a default slot for arbitrary content.

```vue [app.vue]
<script setup lang="ts">
import { Button } from '~/components/ui/button'
</script>

<template>
  <Button
    variant="primary"
    size="md"
  >
    Click me
  </Button>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link' \| 'error'` | `'primary'` | Visual style variant. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Visual size scale. |
| `square` | `boolean` | `false` | When `true`, removes horizontal padding so width equals height. |
| `as` | `string \| Component` | `'button'` | Element or component to render as. Forwarded via Reka UI `Primitive`. |
| `class` | `string` | — | Additional Tailwind classes merged into the root element. |

### Events

| Event | Description |
| ----- | ----------- |
| `click` | Native click event forwarded from the rendered element. |

### Slots

| Slot | Description |
| ---- | ----------- |
| `default` | Button content, text, or icons. |

### Data Attributes

| Attribute | Values | Description |
| ---------- | ------ | ----------- |
| `data-slot` | `button` | Identifies the element as a CentoUI button. |
| `data-variant` | `primary`, `secondary`, `outline`, `ghost`, `link`, `error` | Reflects the active variant. Useful for descendant styling. |
| `data-size` | `xs`, `sm`, `md`, `lg`, `xl` | Reflects the active size. Useful for descendant styling. |

## Variants

| Variant | Use Case |
| ------- | -------- |
| `primary` | Main call-to-action. Uses `bg-primary` and `text-primary-foreground`. |
| `secondary` | Secondary actions. Uses `bg-secondary` and `text-secondary-foreground`. |
| `outline` | Lower-emphasis actions with a visible border. Uses `border-border`. |
| `ghost` | Minimal button with transparent background. Highlights on hover via `bg-muted`. |
| `link` | Inline text link with underline on hover. Removes border and padding. |
| `error` | Destructive or validation-error actions. Uses `bg-error` and `text-error-foreground`. |

## Sizes

| Size | Height | Padding | Text | Icon |
| ---- | ------ | ------- | ---- | ---- |
| `xs` | 1.5rem | 0.375rem | `text-xs` | 0.75rem |
| `sm` | 1.75rem | 0.5rem | `text-sm` | 0.875rem |
| `md` | 2rem | 0.625rem | `text-sm` | 1rem |
| `lg` | 2.25rem | 0.75rem | `text-sm` | 1.125rem |
| `xl` | 2.5rem | 0.875rem | `text-base` | 1.25rem |

All sizes use `rounded-lg` except `xs`, which uses `rounded-md`.

## Accessibility

The `Button` component is built on [Reka UI](https://reka-ui.com/) `Primitive`. This provides:

- Correct focus management and `focus-visible` ring styling via `ring-2 ring-ring`.
- `aria-invalid` and `invalid` state detection, automatically applying `ring-2 ring-error`.
- `disabled` state handling with `cursor-not-allowed` and reduced opacity.
- Keyboard activation behavior inherited from the native element or forwarded to the rendered component.

Because the button renders as a native `button` by default, screen readers announce it correctly without extra configuration.

## Theming Integration

Button colors are derived from the semantic CSS tokens defined in `centoui.css`:

| Token | Role |
|-------|------|
| `--color-primary` / `--color-primary-foreground` | `primary` variant background and text |
| `--color-secondary` / `--color-secondary-foreground` | `secondary` variant |
| `--color-border` | `outline` variant border |
| `--color-muted` | `ghost` variant hover background |
| `--color-error` / `--color-error-foreground` | `error` variant |
| `--color-ring` | Focus ring color |

To re-skin the entire button set, override these tokens in your own theme file before importing `centoui.css`.

## Styling Conventions

When extending or overriding Button styles in your project:

1. **Prefer tokens over hard-coded colors.** Use `bg-primary` instead of `bg-blue-600`.
2. **Use `data-variant` and `data-size` for descendant selectors.** If you need to style an icon differently per variant, target `[data-slot="button"][data-variant="primary"] [data-slot="icon"]`.
3. **Keep `class` merges non-destructive.** The component merges your `class` prop into the root. Avoid overriding `transition-all`, `font-medium`, or `border` unless you intend to change the base behavior.
4. **Square buttons.** When `square` is `true`, horizontal padding is removed and `min-inline-fit` is applied. Ensure your icon or content is sized appropriately.

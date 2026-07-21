---
title: Button
description: Displays a button or a component that looks like a button.
---

## Installation

Install the button component from the CentoUI library.

```bash [Terminal]
npx centoui add button
```

## API

### Props

| Prop | Default | Description |
| ---- | ------- | ----------- |
| `variant` | `primary` | Visual style variant: `primary`, `secondary`, `outline`, `ghost`, `link`, `error` |
| `size` | `md` | Size scale: `xs`, `sm`, `md`, `lg`, `xl` |
| `square` | `false` | Render with equal dimensions |
| `as` | `button` | Element or component to render as |

### Events

| Event | Description |
| ----- | ----------- |
| `click` | Fires when the button is clicked |

### Slots

| Slot | Description |
| ---- | ----------- |
| `default` | Button content |

---
title: Input
description: Displays a form input field or a component that looks like an input.
---

## Installation

Install the input component from the CentoUI library.

```bash [Terminal]
npx centoui add input
```

## API

### Props

| Prop | Default | Description |
| ---- | ------- | ----------- |
| `placeholder` | `undefined` | Placeholder text |
| `disabled` | `false` | Whether the input is disabled |
| `value` | `undefined` | Input value (v-model) |
| `as` | `input` | Element or component to render as |

### Events

| Event | Description |
| ----- | ----------- |
| `update:modelValue` | Fires when the value changes |
| `focus` | Fires when the input gains focus |
| `blur` | Fires when the input loses focus |

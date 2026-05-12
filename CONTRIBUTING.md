# Contributing to CentoUI

By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Setup

**Prerequisites:** Node.js v22+, pnpm v10+

```bash
git clone https://github.com/favorodera/centoui.git
cd centoui
pnpm install
pnpm dev
```

---

## Component Philosophy

Before writing any code:

1. **Function** — what does it do? One sentence.
2. **Real world** — how does it appear in actual shipped products?
3. **Variation** — what genuinely varies in real usage? That determines your props.
4. **Design** — how should it look?
5. **Extension** — `class` prop, editable source, new variant entry.

Prop names reflect purpose. `color` on Button because it's arbitrary. `status` on Alert because that's what actually varies.

---

## Design System

### Tokens

Semantic tokens only — never raw values or Tailwind palette colors.

| Layer | Tokens |
|---|---|
| Surfaces | `background` · `surface` · `overlay` |
| Text & fills | `foreground` · `muted` · `muted-foreground` |
| Strokes | `border` |
| Brand | `primary` · `secondary` · `accent` · `neutral` + `-foreground` pairs |
| Status | `success` · `warning` · `error` · `info` + `-foreground` pairs |

`muted` — fills only. `border` — strokes only. Never swap them.

### border vs ring

**`border`** — box model, takes up space, supports individual sides (`border-b`, `border-l`). Use for static structural strokes — separators, containers, inputs.

**`ring`** — box-shadow, zero layout impact, all sides only. Use for interactive/state-driven strokes — focus indicators, subtle and outline variants, anything that toggles.

Toggling a `border` on hover causes a 1px layout shift. Toggling a `ring` doesn't. That's the rule.

Never use `outline` — radius support is inconsistent across browsers.

### Variants

For general-purpose interactive components (Button, Badge, Kbd) only. Components with a fixed communicative purpose (Alert, Tooltip) define their own visual logic — semantic tokens required, formula not required.

| Variant | Rest bg | Hover | Text |
|---|---|---|---|
| `solid` | full fill | `/80` | `-foreground` |
| `soft` | `/15` | `/25` | colored |
| `subtle` | `/8` + ring inset | `/15` | colored |
| `outline` | transparent + ring inset | `/10` | colored |
| `ghost` | transparent | `/10` | colored |
| `link` | transparent | text `/70` | colored |

Soft and subtle hover deltas are intentionally large — small deltas at low opacity become imperceptible on non-retina screens.

Press feedback (`active:translate-y-px`) — buttons and button-like elements only.

`variant` slot holds structural classes. `color` variant holds `text-{color}` and focus ring color. `compoundVariants` hold per-combination bg, ring, and hover. New color = new `color` entry + new `compoundVariant` entries. Variant logic untouched.

### Interaction States

Change only the property the state owns. Never `hover:opacity-*` or `active:opacity-*` on a root element.

| State | Property |
|---|---|
| Hover | `background-color` or `color` (link only) |
| Press | `transform` — `active:not-aria-[haspopup]:translate-y-px` |
| Focus | `box-shadow` — `focus-visible:ring-2 focus-visible:ring-offset-2` |
| Invalid | `box-shadow` — always `ring-error` |
| Disabled | `opacity` — `disabled:opacity-50`, the only permitted root opacity |

### `data-centoui-*` API

Stable public API — as intentional as Vue props. Attribute names mirror the prop name.

```html
<Button data-centoui-slot="button" data-centoui-variant="solid" data-centoui-color="primary" data-centoui-size="md" />
<AlertRoot data-centoui-slot="alert-root" data-centoui-status="error" />
```

| Attribute | Values |
|---|---|
| `data-centoui-slot` | Component identifier — `button`, `alert-root`, `separator`, etc. |
| `data-centoui-variant` | `solid` · `soft` · `subtle` · `outline` · `ghost` · `link` |
| `data-centoui-color` | `primary` · `secondary` · `accent` · `neutral` · `success` · `warning` · `error` · `info` |
| `data-centoui-status` | `neutral` · `success` · `warning` · `error` · `info` |
| `data-centoui-size` | `xs` · `sm` · `md` · `lg` · `xl` |
| `data-centoui-state` | `idle` · `loading` · `disabled` · `open` · `closed` |

---

## Testing

Vitest + jsdom + Vue Test Utils + axe-core. Every component needs accessibility and state coverage. `pnpm test`.

---

## Pull Request

1. `pnpm ready` — install → lint → typecheck → build → test.
2. [Conventional Commits](https://www.conventionalcommits.org/).
3. Update docs if behaviour changes.

---

[Discussions](https://github.com/favorodera/centoui/discussions) · [Docs](https://centoui.vercel.app/)
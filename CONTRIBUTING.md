# Contributing to CentoUI

---

## Table of Contents

  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [Development Workflow](#development-workflow)
  - [Design System](#design-system)
      - [Token Vocabulary](#token-vocabulary)
      - [The Theme File](#the-theme-file)
      - [Interaction States](#interaction-states)
      - [Shade Levels](#shade-levels)
      - [Variant Anatomy](#variant-anatomy)
      - [centoui-data-* CSS API](#centoui-data--css-api)
  - [Component Structure](#component-structure)
  - [Testing](#testing)
  - [Pull Request Process](#pull-request-process)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)

---

## Code of Conduct

By participating you agree to the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Getting Started

  **Prerequisites:** Node.js v22+, pnpm v10+

```bash
git clone https://github.com/favorodera/centoui.git
cd centoui
pnpm install
pnpm dev
```

---

## Development Workflow

### Branch Naming

| Pattern | Use |
|---|---|
| `feat/<name>` | New features |
| `fix/<description>` | Bug fixes |
| `docs/<what>` | Documentation |
| `chore/<task>` | Maintenance |

### Commit Messages

Follows [Conventional Commits](https://www.conventionalcommits.org/). `relizy` reads these for changelogs.

| Prefix | Use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | No logic change |
| `refactor:` | Neither fix nor feature |
| `perf:` | Performance improvement |
| `test:` | Adding or correcting tests |
| `chore:` | Build process or tooling |

### Commands

```bash
pnpm dev        # start all packages/apps in watch mode
pnpm build      # build all packages
pnpm lint       # lint all
pnpm typecheck  # type-check all
pnpm test       # run all tests
pnpm ready      # full pre-publish gate: install → lint → typecheck → build → test
```

---

## Design System

  The design file and codebase use identical token names, state names, and values — zero translation between them.

### Token Vocabulary

  Components must only reference semantic tokens — never raw values or Tailwind palette colors.

  | Token | Purpose |
  |---|---|
  | `primary` | Main brand color — CTAs, key actions |
  | `secondary` | Supporting brand color — secondary actions |
  | `accent` | Highlight color — decorative, hover states |
  | `neutral` | Subtle non-branded actions |
  | `success` | Positive states — confirmations, completions |
  | `warning` | Caution states — alerts, pending actions |
  | `error` | Destructive states — failures, deletions |
  | `info` | Neutral informational messages |

  Each exposes two tokens: `--color-<category>` (fill) and `--color-<category>-foreground` (text/icons on that fill).

  Structural tokens:

  | Token | Purpose |
  |---|---|
  | `--background` | Page canvas |
  | `--foreground` | Default text |
  | `--surface` | Cards, modals, drawers |
  | `--overlay` | Modal scrim |
  | `--muted` | Subtle fills, input backgrounds |
  | `--muted-foreground` | Secondary text, placeholders, captions |

  Reference these only via Tailwind utilities (`bg-primary`, `text-error-foreground`) or `var(--color-*)`.

---

### The Theme File

`src/theme.css` has three clearly separated blocks.

**`:root`** — Light mode or global default values.

**`.dark`** — Dark mode values. Every token is redefined here — nothing inherits from `:root`. This is intentional and prevents silent fallback bugs.

**`@theme`** — Tailwind mapping layer. Maps CSS variables to utilities.

---

### Interaction States

  CentoUI uses a standard opacity scale rather than separate color tokens per state. Adding a new color automatically inherits correct state behaviour.

  **Apply opacity to the component's root element, never to text nodes in isolation.** This preserves relative contrast between foreground and background. For text-only states (placeholders, captions), use `--muted-foreground`.

#### Core States

  | State | Opacity | Tailwind Utility |
  |---|---|---|
  | Default | 100% | `opacity-100` |
  | Hover | 90% | `hover:opacity-90` |
  | Active | 80% | `active:opacity-80` |
  | Disabled | 40% | `disabled:opacity-40` |

  Disabled is the only state WCAG 2.1 SC 1.4.3 explicitly exempts from contrast requirements.

#### Extended States

  | State | Opacity | Usage |
  |---|---|---|
  | Read-only | 75% | Non-editable but visible content |
  | Loading | 70% | Component awaiting data |
  | Skeleton | 20% | Shape placeholder — no text rendered |

  Read-only and loading states that display readable text must maintain 4.5:1 contrast for normal text (3:1 for large text). Apply opacity to the wrapper, not to text directly, and verify contrast against your token values if you push below these figures.

---

### Shade Levels

Interaction states use opacity on the **root element** to dim the whole component. Shade levels are a different, orthogonal system — they are **color-fill intensities** used only as `background-color` alpha on transparent-background variants (`subtle`, `soft`, `outline`, `ghost`) and their hover/active states.

The scale is expressed as Tailwind color-opacity modifiers and is fixed. Do not invent intermediate values.

| Level | Modifier | Used by |
|---|---|---|
| `subtle` | `/5` | `subtle` — resting background |
| `ghost` | `/10` | `subtle` hover · `outline` hover · `ghost` hover |
| `ghost-active` | `/15` | `subtle` active · `outline` active · `ghost` active |
| `soft` | `/20` | `soft` — resting background |
| `soft-hover` | `/25` | `soft` hover |
| `soft-active` | `/30` | `soft` active |

#### Two systems, two CSS properties — never mix them

| System | CSS property | Scope |
|---|---|---|
| Interaction states | `opacity` | Entire element (fill + text + border) |
| Shade levels | `background-color` alpha | Background only |

#### How variants and compoundVariants share the work

Styles that apply regardless of color belong in the `variant` slot. Styles that depend on a specific color belong in `compoundVariants`. This keeps each piece of logic in exactly one place.

```
variant slot        → structural, color-agnostic classes (border, bg-transparent, padding)
color variant       → text-{color}, focus ring, aria-invalid ring — declared once, inherited by all variants
compoundVariants    → bg-{color}, border-{color}, hover/active backgrounds — only what's unique per color
```

`subtle`, `outline`, and `ghost` share the same hover (`/10`) and active (`/15`) shade levels, so those are declared once using the array syntax rather than repeated three times:

```ts
{
  variant: [
    'subtle',
    'outline',
    'ghost',
  ],
  color: 'primary',
  class: { root: 'hover:bg-primary/10 active:bg-primary/15' }
}
```

---

### Variant Anatomy

  CentoUI ships six variants covering the full range of visual emphasis. They are fully orthogonal with every color token.

  | Variant | Rest background | Hover bg | Active bg | Text | Border | Emphasis |
  |---|---|---|---|---|---|---|
  | `solid` | full fill | `opacity-90` on root | `opacity-80` on root | `-foreground` | — | Highest |
  | `soft` | `/20` | `/25` | `/30` | colored | — | High |
  | `subtle` | `/5` | `/10` | `/15` | colored | — | Medium |
  | `outline` | transparent | `/10` | `/15` | colored | colored | Medium |
  | `ghost` | transparent | `/10` | `/15` | colored | — | Low |
  | `link` | transparent | transparent | transparent | colored | — | Lowest |

```vue
<Button variant="solid"   color="primary" />
<Button variant="soft"    color="success" />
<Button variant="subtle"  color="info"    />
<Button variant="outline" color="error"   />
<Button variant="ghost"   color="warning" />
<Button variant="link"    color="neutral" />
```
---

### `centoui-data-*` CSS API

  Every component element carries `data-centoui-*` attributes. The namespace prevents collisions with host apps and other libraries.

```html
<button
  data-centoui-slot="button"
  data-centoui-variant="solid"
  data-centoui-color="primary"
  data-centoui-size="md"
  data-centoui-state="idle"
/>
```

  | Attribute | Values |
  |---|---|
  | `data-centoui-slot` | Component-specific — e.g. `button`, `card-header`, `dialog-overlay` |
  | `data-centoui-variant` | `solid`, `soft`, `subtle`, `outline`, `ghost`, `link` |
  | `data-centoui-color` | `primary`, `secondary`, `error`, `success`, `warning`, `info`, `accent`, `neutral` |
  | `data-centoui-size` | `xs`, `sm`, `md`, `lg`, `xl` |
  | `data-centoui-state` | `idle`, `loading`, `disabled` |

  Treat these as stable public API — as intentional as Vue props. Document every `data-centoui-slot` value per component.

---

## Component Structure

```
src/components/<name>/
  <name>.vue -> Vue SFC
  index.ts   -> variants, TypeScript types, named re-exports
  utils.ts   -> component utilities if any
```

Compound components ship sub-parts directly:

```
src/components/card/
  card-root.vue
  card-header.vue
  card-body.vue
  card-footer.vue
  index.ts
```

### `index.ts` anatomy

```ts
// 1. tailwind-variants config
export const buttonVariants = tv({ slots, variants, compoundVariants, defaultVariants })

// 2. Named component exports
export { default as CardRoot }   from './card-root.vue'
export { default as CardHeader } from './card-header.vue'
export { default as CardBody }   from './card-body.vue'
export { default as CardFooter } from './card-footer.vue'

// 3. TypeScript types — all exported types and public props must have JSDoc /** */ comments
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type ButtonProps    = PrimitiveProps & { variant, color, size, class }
export type ButtonSlots    = { default: [] }
```

### Variant × Color

```vue
<Button variant="solid"   color="primary" />
<Button variant="outline" color="error"   />
<Button variant="ghost"   color="success" />
<Button variant="soft"    color="warning" />
<Button variant="subtle"  color="info"    />
```

- `variant` — how it looks: `solid`, `soft`, `subtle`, `outline`, `ghost`, `link`
- `color` — what it means: `primary`, `secondary`, `error`, `success`, `warning`, `info`, `accent`, `neutral`

Fully orthogonal — any variant works with any color.

### Accessibility

- **Simple components** (Button, Badge, Label, Card): semantic HTML + correct ARIA attributes.
- **Complex components** (Dialog, Select, Dropdown, Tooltip, Tabs): [Reka UI](https://reka-ui.com) primitives for keyboard navigation, focus trapping, and screen reader behaviour.

Always use `Primitive` from Reka UI as the root element — handles `as`, `asChild`, and native attribute forwarding.

---

## Testing

  Tests use **Vitest** with **jsdom**, **Vue Test Utils**, and **axe-core** for accessibility assertions. No browser runner.

```bash
pnpm test        # run all tests
pnpm test:watch  # watch mode
```

  Cover DOM structure, ARIA attributes, and visual states when adding features or fixing bugs.

---

## Pull Request Process

1. Follow conventions in this file.
2. Update documentation if changing functionality.
3. Add or update tests as appropriate.
4. Run the full validation suite:

```bash
pnpm ready
```

5. Commit using Conventional Commits and open a Pull Request.

---

## Reporting Bugs

  Check existing issues first. When filing, include:

  - A clear, descriptive title
  - Steps to reproduce
  - Expected vs. actual behaviour
  - Environment (OS, Node.js version, pnpm version)

---

## Suggesting Features

Open an issue describing the problem you're solving, your proposed solution, and alternatives considered.

---

## Questions?

  - [Discussions](https://github.com/favorodera/centoui/discussions)
  - [Documentation](https://centoui.vercel.app/)

  Thank you for contributing! 🎉

# Contributing to CentoUI

---

## Table of Contents

  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [Development Workflow](#development-workflow)
  - [Design System](#design-system)
      - [Tokens](#tokens)
      - [Variants](#variants)
      - [Interaction States](#interaction-states)
      - [Selected State](#selected-state)
      - [data-centoui-* API](#data-centoui--api)
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

### Branch naming

| Pattern | Use |
|---|---|
| `feat/<name>` | New features |
| `fix/<description>` | Bug fixes |
| `docs/<what>` | Documentation |
| `chore/<task>` | Maintenance |

### Commit messages

Follows [Conventional Commits](https://www.conventionalcommits.org/).

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

  The design file and codebase share identical token names, state names, and values — no translation layer between them.

---

### Tokens

Components reference **semantic tokens only** — never raw values or Tailwind palette colors.

**Structural tokens** define surfaces and layout:

| Token | Purpose |
|---|---|
| `background` | Page canvas |
| `foreground` | Default text |
| `surface` | Elevated elements — cards, modals, drawers |
| `overlay` | Modal and drawer scrims |
| `muted` | Subtle fills — input backgrounds, skeletons |
| `muted-foreground` | Secondary text — placeholders, captions, helper text |

**Semantic color tokens** communicate intent. Each exposes a fill (`--color-{name}`) and a foreground (`--color-{name}-foreground`) for text/icons rendered on top:

| Token | Purpose |
|---|---|
| `primary` | Main brand color — CTAs, key actions |
| `secondary` | Supporting brand color — secondary actions |
| `accent` | Highlight color — decorative accents, active indicators |
| `neutral` | Non-branded actions — tertiary controls |
| `success` | Positive states — confirmations, completed tasks |
| `warning` | Caution states — alerts, pending actions |
| `error` | Destructive states — failures, deletions, validation errors |
| `info` | Informational states — neutral messages, tips |

Use tokens via Tailwind utilities (`bg-primary`, `text-error-foreground`) or `var(--color-*)`.

---

### Variants

  Six visual variants covering the full range of emphasis, fully orthogonal — any variant works with any color.

  | Variant | Rest bg | Hover | Ring | Text | Emphasis |
  |---|---|---|---|---|---|
  | `solid` | full fill | `/80` | — | `-foreground` | Highest |
  | `soft` | `/15` | `/20` | — | colored | High |
  | `subtle` | `/8` | `/12` | `/25` inset | colored | Medium |
  | `outline` | transparent | `/10` | full inset | colored | Medium |
  | `ghost` | transparent | `/10` | — | colored | Low |
  | `link` | transparent | text `/70` | — | colored | Lowest |

  `subtle` and `outline` both use an inset ring — `subtle` pairs it with a tinted fill, `outline` has none at rest. Press feedback is always `active:translate-y-px` on the root across all variants.

#### How slots divide the work

  **`variant` slot:** structural, color-agnostic classes
  (ring ring-inset for subtle/outline, bg-transparent for ghost/link/outline)

  **`color` variant:** text-{color} and focus-visible ring color
  declared once, inherited by all variants automatically

  **`compoundVariants`:** bg-{color}/{alpha}, ring-{color}/{alpha}, hover classes
  only what differs per color x variant combination

  Adding a new color only requires new `color` and `compoundVariant` entries — no variant logic changes.

---

### Interaction States

CentoUI changes **individual CSS properties** per state — never root element opacity (except `disabled`). Targeting properties independently keeps text crisp while only the intended property responds to each state.

| State | Pseudo | Property | How |
|---|---|---|---|
| Default | — | — | Base classes |
| Hover | `:hover` | `background-color` or `color` | `hover:bg-{color}/{alpha}` · `hover:text-{color}/70` (link only) |
| Press | `:active` | `transform` | `active:translate-y-px` on root |
| Disabled | `:disabled` | `opacity` | `disabled:opacity-50` on root |
| Focus | `:focus-visible` | `box-shadow` | `focus-visible:ring-2 focus-visible:ring-offset-2` |
| Invalid | `[aria-invalid]` | `box-shadow` | `aria-invalid:ring-2 aria-invalid:ring-error aria-invalid:ring-offset-2` |

Rules:
- Change only the property relevant to the state. Hover changes background; it does not touch text or border.
- Never use `hover:opacity-*` or `active:opacity-*` on a root element.
- `disabled:opacity-50` on root is the only permitted root opacity utility. WCAG 2.1 SC 1.4.3 exempts disabled controls from contrast requirements — dimming the whole element correctly communicates unavailability.
- The focus ring color comes from the `color` variant and is inherited automatically.
- The invalid ring is always `error` regardless of the component's color.

---

### Selected State

  Selected state represents a persistent condition — active tab, current nav route, chosen option. It is distinct from `:active` (momentary press) and is expressed by stepping background alpha above the hover level.

  | Variant | Hover bg | Selected bg |
  |---|---|---|
  | `ghost` | `/10` | `/16` |
  | `subtle` | `/12` | `/18` |
  | `soft` | `/20` | `/28` |

  Apply via a boolean prop (`active`, `selected`, or equivalent) mapped to a `compoundVariant`, or via `aria-current="page"` / `aria-selected="true"` CSS selectors where appropriate.

  Selected state applies to components that represent location or persistent selection — nav items, tabs, menu items, segmented controls. It does not apply to trigger components.

---

### `data-centoui-*` API

Every rendered element carries `data-centoui-*` attributes. The namespace prevents collisions with host apps and other libraries. Treat these as stable public API — as intentional as Vue props. Do not remove or rename them.

```html
<!-- Button -->
<Button
  data-centoui-slot="button"
  data-centoui-variant="solid"
  data-centoui-color="primary"
  data-centoui-size="md"
  data-centoui-disabled="true"
/>

<!-- Avatar -->
<AvatarRoot
  data-centoui-slot="avatar-root"
  data-centoui-size="lg"
/>

<!-- Separator -->
<Separator
  data-centoui-slot="separator"
  data-centoui-orientation="horizontal"
  data-centoui-color="neutral"
  data-centoui-size="xs"
/>
```

| Attribute | Values |
|---|---|
| `data-centoui-slot` | Component-specific — e.g. `button`, `avatar-root`, `avatar-fallback`, `separator`, `button-group` |
| `data-centoui-variant` | `solid`, `soft`, `subtle`, `outline`, `ghost`, `link` (component-specific extensions like `dashed`, `dotted` for separators are documented per component) |
| `data-centoui-color` | `primary`, `secondary`, `accent`, `neutral`, `success`, `warning`, `error`, `info` |
| `data-centoui-size` | `xs`, `sm`, `md`, `lg`, `xl` (component-specific extensions like `2xs`, `3xl` are documented per component) |
| `data-centoui-<state>` | `idle`, `loading`, `disabled` |

Document every `data-centoui-slot` value in the component's own docs section. Consumers use these for custom styling without touching source.

---

## Component Structure

```text
src/components/<name>/
  <name>.vue          # Vue SFC
  index.ts            # variants, types, named re-exports
  <name>-utils.ts     # utilities (if needed)
```

  Compound components ship sub-parts directly:

```text
src/components/avatar/
  avatar-root.vue
  avatar-image.vue
  avatar-fallback.vue
  avatar-utils.ts
  index.ts
```

### `index.ts` anatomy

```ts
// 1. tailwind-variants config
export const componentVariants = tv({ slots, variants, compoundVariants, defaultVariants })

// 2. Named component exports
export { default as Component } from './component.vue'

// 3. Utilities (optional)
export { someUtility } from './component-utils'

// 4. TypeScript types — all exported types and public props must have JSDoc /** */ comments
export type ComponentVariants = VariantProps<typeof componentVariants>
export type ComponentProps    = PrimitiveProps & { variant, color, size, class }
export type ComponentSlots    = { default: [] }
```

### Prop forwarding

  Use `reactiveOmit` from `@vueuse/core` to strip props the component consumes itself before forwarding the rest to the primitive. Never use `reactivePick` — it silently drops native attributes like `disabled`, `type`, and event handlers.

```ts
const delegatedProps = reactiveOmit(props, 'class', 'variant', 'color', 'size')
const forwardedProps = useForwardProps(delegatedProps)
```

### Accessibility

  - **Simple components** (Button, Badge, Avatar, Separator): semantic HTML + correct ARIA attributes.
  - **Complex components** (Dialog, Select, Dropdown, Tabs): [Reka UI](https://reka-ui.com) primitives for keyboard navigation, focus trapping, and screen-reader behavior.

  Always use `Primitive` from Reka UI as the root element — it handles `as`, `asChild`, and native attribute forwarding.

---

## Testing

Tests use **Vitest** with **jsdom**, **Vue Test Utils**, and **axe-core** for accessibility assertions.

```bash
pnpm test        # run all tests
pnpm test:watch  # watch mode
```

Cover DOM structure, ARIA attributes, and visual states when adding features or fixing bugs.

---

## Pull Request Process

  1. Follow the conventions in this file.
  2. Update documentation if changing functionality.
  3. Add or update tests as appropriate.
  4. Run the full validation suite: `pnpm ready`
  5. Commit using Conventional Commits and open a Pull Request.

---

## Reporting Bugs

Check existing issues first. When filing, include a clear title, steps to reproduce, expected vs. actual behavior, and your environment (OS, Node.js, pnpm versions).

---

## Suggesting Features

  Open an issue describing the problem you're solving, your proposed solution, and alternatives considered.

---

Questions Feedback? Ideas? Join the conversation in
[Discussions](https://github.com/favorodera/centoui/discussions)
[Docs](https://centoui.vercel.app/)

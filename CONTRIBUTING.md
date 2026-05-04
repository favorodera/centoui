# Contributing to CentoUI

---

## Table of Contents

  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [Development Workflow](#development-workflow)
  - [Design System](#design-system)
      - [Token Vocabulary](#token-vocabulary)
      - [Interaction States](#interaction-states)
      - [Shade Levels](#shade-levels)
      - [Selected State](#selected-state)
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

---

### Token Vocabulary

Components must only reference semantic tokens — never raw values or Tailwind palette colors.

Two categories of tokens exist. **Structural tokens** define surfaces and layout:

| Token | Purpose |
|---|---|
| `background` | Page canvas |
| `foreground` | Default text |
| `surface` | Elevated elements — cards, modals, drawers |
| `overlay` | Modal and drawer scrims |
| `muted` | Subtle fills — input backgrounds, skeleton shapes |
| `muted-foreground` | Secondary text — placeholders, captions, helper text |

**Semantic color tokens** define intent. Each exposes two values — a fill (`--color-{name}`) and a foreground (`--color-{name}-foreground`) for text and icons rendered on top of that fill:

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

Reference tokens only via Tailwind utilities (`bg-primary`, `text-error-foreground`) or `var(--color-*)`. Never use raw oklch values or Tailwind palette colors directly in component code.

---

### Interaction States

  CentoUI changes **individual CSS properties** per state — never the opacity of the root element. Root opacity dims fill, text, and border together uniformly, producing dull results and destroying relative contrast. Targeting properties independently keeps text crisp while only the intended property responds.

  **`disabled` is the sole exception.** WCAG 2.1 SC 1.4.3 explicitly exempts disabled controls from contrast requirements. Dimming the whole element via root opacity correctly communicates unavailability and is appropriate here.

#### Rules

  - Change only the property relevant to the state. Hover changes background; it does not touch text or border.
  - Never apply `hover:opacity-*` or `active:opacity-*` to a root element. Use bg alpha instead.
  - `disabled:opacity-50` on the root is the only permitted root opacity utility.
  - Press feedback is handled universally by `active:scale-98` on the root — not by further background changes. `transition-all` is used (not `transition-colors`) to animate the scale smoothly. The scale is kept minimal (98) so children are not visibly distorted.
  - `link` is the only variant where hover changes text color instead of background — there is no fill to respond to, so text alpha fades to `/70`.

#### State reference

  | State | CSS pseudo | Property changed | How |
  |---|---|---|---|
  | Default | — | — | Base classes |
  | Hover | `:hover` | `background-color` or `color` | `hover:bg-{color}/{alpha}` · `hover:text-{color}/70` (link only) |
  | Press | `:active` | `transform` | `active:scale-98` on root |
  | Disabled | `:disabled` | `opacity` | `disabled:opacity-50` on root |
  | Focus | `:focus-visible` | `box-shadow` | `focus-visible:ring-2 focus-visible:ring-offset-2` |
  | Invalid | `[aria-invalid]` | `box-shadow` | `aria-invalid:ring-2 aria-invalid:ring-offset-2 aria-invalid:ring-error` |

  The focus ring color is set by the `color` variant and inherited by all visual variants automatically. The invalid ring is always `error` regardless of the component's color — invalid state has its own semantic meaning that overrides the component's intent color.

---

### Shade Levels

Shade levels are fixed background-color alpha values that define the resting fill of each visual variant and the single hover step above it. Press feedback is always `active:scale-98` on the root — not a background change.

The scale is fixed. Do not invent intermediate values.

| Variant | Rest bg | Hover bg | Ring | Press |
|---|---|---|---|---|
| `solid` | full | `/80` | — | `scale-98` |
| `soft` | `/15` | `/20` | — | `scale-98` |
| `subtle` | `/8` | `/12` | `/25` inset | `scale-98` |
| `outline` | transparent | `/10` | full inset | `scale-98` |
| `ghost` | transparent | `/10` | — | `scale-98` |
| `link` | transparent | — | — | — |

`subtle` and `outline` both use an inset ring. The distinction is that `subtle` pairs its ring with a tinted background fill, while `outline` has no fill at rest. This gives them clearly different visual weight despite sharing the ring mechanism.

#### How variants and compoundVariants share the work

```
variant slot      → structural, color-agnostic classes
                    (ring ring-inset, bg-transparent, h-auto p-0 for link)

color variant     → text-{color}, focus-visible ring color
                    declared once — inherited automatically by all variants

compoundVariants  → bg-{color}, ring-{color}, hover bg, hover text (link)
                    only what differs per color × variant combination
```

Adding a new color requires only new `color` and `compoundVariant` entries — no variant logic changes.

---

### Selected State

  The selected state represents a persistent condition — the current route in a nav, the active tab, the chosen option in a segmented control. It is distinct from the CSS `:active` pseudo-class which is the momentary press.

  Selected state is expressed by stepping the background alpha up from the hover level, creating a visible persistent highlight that reads as "you are here."

  | Variant | Hover bg | Selected bg |
  |---|---|---|
  | `subtle` | `/12` | `/18` |
  | `soft` | `/20` | `/28` |
  | `ghost` | `/10` | `/16` |

  Apply via a boolean prop (`active`, `selected`, or equivalent) mapped to a `compoundVariant`, or via `aria-current="page"` / `aria-selected="true"` CSS selectors where appropriate.

  Do not use selected state on trigger components like buttons. It applies only to components that represent location or persistent selection — nav items, tabs, menu items, segmented controls.

---

### Variant Anatomy

Six visual variants covering the full range of emphasis. Fully orthogonal — any variant works with any semantic color.

| Variant | Rest | Hover | Press | Ring | Text | Emphasis |
|---|---|---|---|---|---|---|
| `solid` | full fill | `/80` bg | `scale-98` | — | `-foreground` | Highest |
| `soft` | `/15` bg | `/20` bg | `scale-98` | — | colored | High |
| `subtle` | `/8` bg | `/12` bg | `scale-98` | `/25` inset | colored | Medium |
| `outline` | transparent | `/10` bg | `scale-98` | full inset | colored | Medium |
| `ghost` | transparent | `/10` bg | `scale-98` | — | colored | Low |
| `link` | transparent | text `/70` | — | — | colored | Lowest |

Any variant works with any color:

```vue
<Component variant="solid"   color="primary" />
<Component variant="soft"    color="success" />
<Component variant="subtle"  color="info"    />
<Component variant="outline" color="error"   />
<Component variant="ghost"   color="warning" />
<Component variant="link"    color="neutral" />
```

---

### `centoui-data-*` CSS API

  Every component element carries `data-centoui-*` attributes. The namespace prevents collisions with host applications and other libraries. Treat these as stable public API — as intentional as Vue props. Do not remove or rename them.

```html
<button
  data-centoui-slot="button"
  data-centoui-variant="solid"
  data-centoui-color="primary"
  data-centoui-size="md"
  data-centoui-disabled="true"
/>
```

  | Attribute | Values |
  |---|---|
  | `data-centoui-slot` | Component-specific — e.g. `button`, `card-header`, `dialog-overlay` |
  | `data-centoui-variant` | `solid`, `soft`, `subtle`, `outline`, `ghost`, `link` |
  | `data-centoui-color` | `primary`, `secondary`, `accent`, `neutral`, `success`, `warning`, `error`, `info` |
  | `data-centoui-size` | `xs`, `sm`, `md`, `lg`, `xl` |
  | `data-centoui-<state>` | `idle`, `loading`, `disabled` |

  Document every `data-centoui-slot` value in the component's own section of the docs. Consumers use these attributes for custom styling without touching source files.

---

## Component Structure

```
src/components/<name>/
  <name>.vue  > Vue SFC
  index.ts    > variants, TypeScript types, named re-exports
  <name>-utils.ts    > component utilities if any
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
export const componentVariants = tv({ slots, variants, compoundVariants, defaultVariants })

// 2. Named component exports
export { default as Component } from './component.vue'

// 3. Component-specific utilities (optional)
export {someUtility} from './component-utils'

// 4. TypeScript types — all exported types and public props must have JSDoc /** */ comments
export type ComponentVariants = VariantProps<typeof componentVariants>
export type ComponentProps    = PrimitiveProps & { variant, color, size, class }
export type ComponentSlots    = { default: [] }
```

### Prop forwarding

Use `reactiveOmit` from `@vueuse/core` to strip custom props the component consumes itself before forwarding the rest to the primitive. Never use `reactivePick` for forwarding — it silently drops native attributes like `disabled`, `type`, and event handlers.

```ts
// omit only what you read yourself — everything else flows through
const delegatedProps = reactiveOmit(props, 'class', 'variant', 'color', 'size')
const forwardedProps = useForwardProps(delegatedProps)
```

### Accessibility

- **Simple components** (Button, Badge, Label, Card): semantic HTML + correct ARIA attributes.
- **Complex components** (Dialog, Select, Dropdown, Tooltip, Tabs): [Reka UI](https://reka-ui.com) primitives for keyboard navigation, focus trapping, and screen reader behavior.

Always use `Primitive` from Reka UI as the root element — it handles `as`, `asChild`, and native attribute forwarding.

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

1. Follow the conventions in this file.
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
  - Expected vs. actual behavior
  - Environment (OS, Node.js version, pnpm version)

---

## Suggesting Features

Open an issue describing the problem you're solving, your proposed solution, and alternatives considered.

---

## Questions?

  - [Discussions](https://github.com/favorodera/centoui/discussions)
  - [Documentation](https://centoui.vercel.app/)

  Thank you for contributing!

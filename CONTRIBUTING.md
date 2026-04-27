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
  - [Applying the Design System](#applying-the-design-system)
  - [centoui-data-* CSS API](#centoui-data--css-api)
- [Component Structure](#component-structure)
- [CLI](#cli)
- [Nuxt Module](#nuxt-module)
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
git clone https://github.com/<your-username>/centoui.git
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

Each exposes two tokens: `--<category>` (fill) and `--<category>-foreground` (text/icons on that fill).

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

### Applying the Design System

1. Map your brand colors to the semantic categories above.
2. Update `:root` and `.dark` in `theme.css` with your values.
3. Use `data-centoui-*` attributes for brand-specific visual additions (gradients, textures, shimmer) — scoped to your own stylesheet, never requires opening a component file.

```css
/* Example: dotted texture on primary solid buttons */
[data-centoui-slot="button"][data-centoui-variant="solid"][data-centoui-color="primary"] {
  background-image: radial-gradient(circle, oklch(100% 0 0 / 0.15) 1px, transparent 1px);
  background-size: 8px 8px;
}
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
| `data-centoui-variant` | `solid`, `outlined`, `ghost`, `soft`, `link` |
| `data-centoui-color` | `primary`, `secondary`, `error`, `success`, `warning`, `info`, `accent`, `neutral` |
| `data-centoui-size` | `xs`, `sm`, `md`, `lg`, `xl` |
| `data-centoui-state` | `idle`, `loading`, `disabled` |

Treat these as stable public API — as intentional as Vue props. Document every `data-centoui-slot` value per component.

---

## Component Structure

```
src/components/<name>/
  <name>.vue      ← Vue SFC
  index.ts        ← tv() variants, TypeScript types, named re-exports
```

Compound components ship sub-parts directly — no convenience wrappers:

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
// 1. tailwind-variants config — all color classes use @theme tokens, never static colors
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
<Button variant="solid"    color="primary" />
<Button variant="outlined" color="error"   />
<Button variant="ghost"    color="success" />
```

- `variant` — how it looks: `solid`, `outlined`, `ghost`, `soft`, `link`
- `color` — what it means: `primary`, `secondary`, `error`, `success`, `warning`, `info`, `accent`, `neutral`

Fully orthogonal — any variant works with any color.

### Accessibility

- **Simple components** (Button, Badge, Label, Card): semantic HTML + correct ARIA attributes.
- **Complex components** (Dialog, Select, Dropdown, Tooltip, Tabs): [Reka UI](https://reka-ui.com) primitives for keyboard navigation, focus trapping, and screen reader behaviour.

Always use `Primitive` from Reka UI as the root element — handles `as`, `asChild`, and native attribute forwarding.

---

## CLI

| Command | Purpose |
|---|---|
| `centoui init` | Generate `centoui.config.ts`, copy `theme.css` to project |
| `centoui add <component>` | Copy component files, install peer deps |
| `centoui remove <component>` | Remove files + warn on dependents |

```ts
// centoui.config.ts
import { defineConfig } from "centoui"

export default defineConfig({
  version: "1.0.0",
  componentsDir: "./src/components/centoui",
  themeFilePath: "./src/assets/css/centoui.css",
  icons: {
    check: "lucide:check",
    close: "lucide:x",
    menu: "lucide:menu",
  },
})
```
---

## Nuxt Module

```ts
export default defineNuxtConfig({
  modules: ["centoui-nuxt"],
})
```

Auto-imports all installed components and composables. Registers the CSS layer automatically.

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
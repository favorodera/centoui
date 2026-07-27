<!--  eslint-disable md/fenced-code-language  -->

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

## Paragraphs & Line Breaks

This is a plain paragraph with regular text. It should wrap normally and contain no special formatting at all, just to check baseline prose rendering.

This is a second paragraph, separated from the first by a blank line, to confirm the parser correctly detects paragraph breaks.

This line ends with two trailing spaces to force a hard line break.  
And this is the next line, which should appear directly below without an extra blank line gap.

## Emphasis

Plain text, *italic text*, **bold text**, ***bold italic text***, and ~~strikethrough text~~.

Mixed inline: **bold with *nested italic* inside**, and a sentence with `inline code` alongside **bold** and *italic*.

## Blockquotes

> A simple single-line blockquote.

> A multi-line blockquote
> that continues across
> several lines of text.

> Level one blockquote.
>> Level two nested blockquote.
>>> Level three nested blockquote.

> Blockquote containing **bold**, *italic*, and a [link](https://example.com).
>
> - A list item inside a blockquote
> - Another item inside a blockquote
>
> ```
> a code block inside a blockquote
> ```

## Lists

### Unordered

- First item
- Second item
- Third item with **bold** and *italic* text
  - Nested item one
  - Nested item two
    - Deeply nested item
- Fourth item back at top level

### Ordered

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B
4. Fourth step

### Mixed Nesting

1. Ordered item
   - Unordered sub-item
   - Another unordered sub-item
2. Another ordered item
   1. Nested ordered sub-item
      - Deeply nested unordered item

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task
  - [x] Completed sub-task
  - [ ] Incomplete sub-task

### Loose vs Tight Lists

Tight list (no blank lines between items):
- one
- two
- three

Loose list (blank lines between items):

- one

- two

- three

## Links

[Inline link](https://example.com)

[Inline link with title](https://example.com "Example Title")

<https://example.com/autolink>

## Images

![Alt text for image](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=320&fit=crop "Placeholder Image")

## Code

Inline code: `const x = 42;` and `another_variable`.

Fenced code block, no language:

```
plain fenced code block
line two of plain code
```

Fenced code block with language for syntax highlighting:

```js {icon="vscode-icons:file-type-js"}
function greet(name) {
  const message = `Hello, ${name}!`
  console.log(message)
  return message
}
```

Fenced code block with filename and highlighted line:

```ts [nuxt.config.ts] {2}
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'], // This line is highlighted
  modules: ['@nuxt/ui']
})
```

Diff-style code block:

```diff [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
-   '@nuxt/ui-pro'
+   '@nuxt/ui'
  ]
})
```

JSON code block:

```json
{
  "key": "value",
  "list": [
    1,
    2,
    3
  ],
  "nested": { "flag": true }
}
```

## Tables

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:---------------:|--------------:|
| a            | b               | c             |
| longer cell  | x               | 1.00          |
| **bold**     | *italic*        | `code`        |

## Horizontal Rule

---

## Footnotes

Here is a sentence with a footnote reference.[^1]

[^1]: This is the footnote's content, which can include **formatted** text and a [link](https://example.com).

## Definition Lists

Term One
: Definition of term one.

Term Two
: First definition of term two.
: Second definition of term two.

## Special Characters & Entities

Ampersand: A & B, entity: A &amp; B

Less than / greater than: 5 < 10 and 10 > 5

Copyright and trademark entities: &copy; &trade; &mdash; &hellip;

Smart quotes test: "double quotes" and 'single quotes' and an em dash — and an en dash –.

## Emoji & Unicode

Emoji shorthand test: :smile: :rocket: :tada:

Direct unicode emoji: 😀 🚀 🎉

Unicode text: café, naïve, Zürich, 北京, Москва, مرحبا

## Final Paragraph

This closing paragraph confirms the document ends cleanly after a long stretch of mixed markdown elements, tables, code blocks, and lists above.
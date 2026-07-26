<!--  eslint-disable md/fenced-code-language, md/no-space-in-emphasis, md/no-multiple-h1  -->

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

Alternate H1
============

Alternate H2
------------

## Paragraphs & Line Breaks

This is a plain paragraph with regular text. It should wrap normally and contain no special formatting at all, just to check baseline prose rendering.

This is a second paragraph, separated from the first by a blank line, to confirm the parser correctly detects paragraph breaks.

This line ends with two trailing spaces to force a hard line break.  
And this is the next line, which should appear directly below without an extra blank line gap.

You can also force a break using a backslash.\
Like this line right here.

## Emphasis

Plain text, *italic with asterisks*, _italic with underscores_, **bold with asterisks**, __bold with underscores__, ***bold italic asterisks***, ___bold italic underscores___, ~~strikethrough text~~, and ~single tilde strikethrough~ (some parsers only support double tildes).

Mixed inline: **bold with *nested italic* inside**, and *italic with **nested bold** inside*.

Escaped characters: \*not italic\*, \_not italic\_, \`not code\`, \# not a heading, \[not a link\](nowhere).

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

* Item using asterisk marker
* Another asterisk item

+ Item using plus marker
+ Another plus item

### Ordered

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B
4. Fourth step

1) Alternate ordered marker style
2) Second alternate item

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

[Reference-style link][ref1]

[Reference link using number][1]

<https://example.com/autolink>

[ref1]: https://example.com/reference-one "Reference One Title"
[1]: https://example.com/reference-two

Plain bare URL: https://example.com/bare-url (some parsers auto-link this, others don't)

## Images

![Alt text for image](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=320&fit=crop "Placeholder Image")

![Reference-style image][img1]

[img1]: https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=480&h=320&fit=crop "Reference Image"

## Code

Inline code: `const x = 42;` and `another_variable`.
Inline code with language: `nuxt.config.ts`{lang="ts-type"}

Indented code block (four spaces):

    function oldStyle() {
      return "indented code block";
    }

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

```ts [nuxt.config.ts] {2}
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],// This line is highlighted
  modules: ['@nuxt/ui'] 
})
```

```diff [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
-   '@nuxt/ui-pro'
+   '@nuxt/ui'
  ]
})
```

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

Tilde-fenced code block:

~~~
tilde fenced block
~~~

## Tables

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:---------------:|--------------:|
| a            | b               | c             |
| longer cell  | x               | 1.00          |
| **bold**     | *italic*        | `code`        |

| No Alignment Specifiers | Second Column |
| --- | --- |
| row one col one | row one col two |
| row two col one | row two col two |

## Horizontal Rules

Three dashes:

---

Three asterisks:

***

Three underscores:

___

## Footnotes

Here is a sentence with a footnote reference.[^1]

Here is another footnote reference with a named label.[^note]

[^1]: This is the first footnote's content.
[^note]: This is a named footnote with **formatted** content and a [link](https://example.com).

## Definition Lists

Term One
: Definition of term one.

Term Two
: First definition of term two.
: Second definition of term two.

## Inline HTML

This paragraph contains <strong>raw HTML bold</strong> and <em>raw HTML italic</em> mixed with markdown **bold**.

<div>
  <p>A raw HTML block embedded directly in the markdown document.</p>
</div>

Line with a manual line break tag<br>continuing on the next line.

## Special Characters & Entities

Ampersand: A & B, entity: A &amp; B

Less than / greater than: 5 < 10 and 10 > 5

Copyright and trademark entities: &copy; &trade; &mdash; &hellip;

Smart quotes test: "double quotes" and 'single quotes' and an em dash — and an en dash –.

## Emoji & Unicode

Emoji shorthand test: :smile: :rocket: :tada:

Direct unicode emoji: 😀 🚀 🎉

Unicode text: café, naïve, Zürich, 北京, Москва, مرحبا

## Table of Contents Style Links (anchors)

- [Jump to Heading Level 1](#heading-level-1)
- [Jump to Lists](#lists)
- [Jump to Tables](#tables)

## Nested Blockquote with List and Code

> Here's a blockquote containing a list:
> 1. First point
> 2. Second point
>
> And here's a code block inside the same blockquote:
>
> ```
> quoted_code = True
> ```

## Edge Case: Empty Elements

Empty link: [](https://example.com)

Empty emphasis markers: ** ** and * *

## Edge Case: Consecutive Formatting

**Bold***Italic*`Code`~~Strike~~ all touching with no spaces.

## Final Paragraph

This closing paragraph confirms the document ends cleanly after a long stretch of mixed markdown elements, tables, code blocks, and lists above.
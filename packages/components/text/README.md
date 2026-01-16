# @kori-ui/text

A versatile text component with semantic variants, customizable weights, and color options. Automatically renders the appropriate HTML element based on the variant.

## Installation

```bash
npm install @kori-ui/text
# or
pnpm add @kori-ui/text
# or
bun add @kori-ui/text
```

## Usage

```svelte
<script>
  import { Text } from "@kori-ui/text";
</script>

<Text variant="title" color="default">
  Page Title
</Text>

<Text variant="subtitle" weight="semibold">
  Section Subtitle
</Text>

<Text variant="body" color="secondary">
  This is body text with secondary color.
</Text>

<Text variant="caption" color="primary">
  Small caption text
</Text>

<Text variant="headline" tag="h2">
  Custom HTML tag
</Text>
```

## License

This project is licensed under the terms of the MIT license.

# @kori-ui/segmented-control

A segmented control component for selecting between multiple options with a smooth animated indicator. Supports icons, labels, and icon-only modes.

## Installation

```bash
npm install @kori-ui/segmented-control
# or
pnpm add @kori-ui/segmented-control
# or
bun add @kori-ui/segmented-control
```

## Usage

```svelte
<script>
  import { SegmentedControl } from "@kori-ui/segmented-control";
  
  let selected = $state("option1");
  
  const options = [
    { value: "option1", label: "First" },
    { value: "option2", label: "Second" },
    { value: "option3", label: "Third", disabled: true }
  ];
</script>

<SegmentedControl 
  bind:value={selected}
  {options}
  size="md"
  onchange={(value) => console.log(value)}
/>
```

## License

This project is licensed under the terms of the MIT license.

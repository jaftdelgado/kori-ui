# @kori-ui/radio

A radio button component with smooth animations and ripple effects. Must be used within a RadioGroup component for proper functionality.

## Installation

```bash
npm install @kori-ui/radio
# or
pnpm add @kori-ui/radio
# or
bun add @kori-ui/radio
```

## Usage

```svelte
<script>
  import { Radio, RadioGroup } from "@kori-ui/radio";
  
  let selected = $state("option1");
</script>

<RadioGroup bind:value={selected} size="md" orientation="vertical">
  <Radio 
    value="option1" 
    label="First Option"
    description="This is the first option"
  />
  <Radio 
    value="option2" 
    label="Second Option"
    description="This is the second option"
  />
  <Radio 
    value="option3" 
    label="Third Option"
    disabled
  />
</RadioGroup>
```

## License

This project is licensed under the terms of the MIT license.

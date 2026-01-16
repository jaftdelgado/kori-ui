# @kori-ui/checkbox

A beautifully animated checkbox component with support for labels, descriptions, and smooth check animations. Perfect for forms and selection interfaces.

## Installation

```bash
npm install @kori-ui/checkbox
# or
pnpm add @kori-ui/checkbox
# or
bun add @kori-ui/checkbox
```

## Usage

```svelte
<script>
  import { Checkbox } from "@kori-ui/checkbox";
  
  let checked = $state(false);
</script>

<Checkbox 
  bind:checked 
  label="Accept terms and conditions"
  description="You must agree to continue"
/>

<Checkbox 
  bind:checked 
  label="Subscribe to newsletter"
  disabled
/>
```

## License

This project is licensed under the terms of the MIT license.

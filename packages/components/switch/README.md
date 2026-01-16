# @kori-ui/switch

A toggle switch component with smooth animations for binary on/off states. Supports labels, descriptions, and multiple sizes.

## Installation

```bash
npm install @kori-ui/switch
# or
pnpm add @kori-ui/switch
# or
bun add @kori-ui/switch
```

## Usage

```svelte
<script>
  import { Switch } from "@kori-ui/switch";
  
  let enabled = $state(false);
</script>

<Switch 
  bind:checked={enabled}
  size="md"
  label="Enable notifications"
  description="Receive updates about your account"
  onchange={(checked) => console.log(checked)}
/>

<Switch 
  bind:checked={enabled}
  size="lg"
  disabled
/>
```

## License

This project is licensed under the terms of the MIT license.

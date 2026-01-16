# @kori-ui/tabs

A tabs component for organizing content into separate views with a smooth animated indicator. Supports icons, labels, and flexible layouts.

## Installation

```bash
npm install @kori-ui/tabs
# or
pnpm add @kori-ui/tabs
# or
bun add @kori-ui/tabs
```

## Usage

```svelte
<script>
  import { Tabs } from "@kori-ui/tabs";
  
  let activeTab = $state("home");
  
  const tabs = [
    { value: "home", label: "Home" },
    { value: "profile", label: "Profile" },
    { value: "settings", label: "Settings", disabled: true }
  ];
</script>

<Tabs 
  bind:value={activeTab}
  options={tabs}
  size="md"
  fullWidth={false}
  onchange={(value) => console.log(value)}
/>
```

## License

This project is licensed under the terms of the MIT license.

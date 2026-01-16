# @kori-ui/slider

A smooth, interactive slider component for selecting numeric values within a range. Features fluid animations and precise value control.

## Installation

```bash
npm install @kori-ui/slider
# or
pnpm add @kori-ui/slider
# or
bun add @kori-ui/slider
```

## Usage

```svelte
<script>
  import { Slider } from "@kori-ui/slider";
  
  let volume = $state(50);
</script>

<Slider 
  bind:value={volume}
  min={0}
  max={100}
  step={1}
  size="md"
  label="Volume"
  description="Adjust the volume level"
  onchange={(value) => console.log(value)}
/>

<Slider 
  bind:value={volume}
  min={0}
  max={100}
  disabled
/>
```

## License

This project is licensed under the terms of the MIT license.

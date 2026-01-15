export const basicCode = `<script>
  import { Slider } from "@kori-ui/slider";
  let volume = $state(50);
</script>

<Slider 
  bind:value={volume} 
  label="Volume Level" 
  description="Adjust the output volume (0-100)"
/>`;

export const sizesCode = `<Slider size="sm" value={20} label="Small" />
<Slider size="md" value={50} label="Medium" />
<Slider size="lg" value={80} label="Large" />`;

export const stepsCode = `<script>
  import { Slider } from "@kori-ui/slider";
  let brightness = $state(0.5);
</script>

<Slider 
  bind:value={brightness}
  min={0} 
  max={1} 
  step={0.1}
  label="Brightness" 
  description="Precision adjustment: {brightness}"
/>`;

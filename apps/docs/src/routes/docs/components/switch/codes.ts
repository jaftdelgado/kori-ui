export const basicCode = `<script>
  import { Switch } from "@kori-ui/switch";
  let airplaneMode = $state(false);
</script>

<Switch 
  bind:checked={airplaneMode} 
  label="Airplane Mode" 
  description="Disable all wireless connections"
/>`;

export const sizesCode = `<Switch size="sm" label="Small" />
<Switch size="md" label="Medium (Default)" />
<Switch size="lg" label="Large" />`;

export const disabledCode = `<Switch disabled label="Disabled Off" />
<Switch disabled checked label="Disabled On" />`;

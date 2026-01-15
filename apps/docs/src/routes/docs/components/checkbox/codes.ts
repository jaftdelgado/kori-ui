export const basicCode = `<script>
  import { Checkbox } from "@kori-ui/checkbox";
</script>

<div class="flex flex-col gap-4">
  <Checkbox label="Accept terms and conditions" />
  <Checkbox label="Subscribe to newsletter" checked />
</div>`;

export const descriptionCode = `<Checkbox 
  label="Notifications" 
  description="Receive email updates about your account activity." 
/>`;

export const statesCode = `<div class="flex flex-col gap-4">
  <Checkbox disabled label="Disabled unchecked" />
  <Checkbox disabled checked label="Disabled checked" />
</div>`;

export const controlledCode = `<script>
  let checked = $state(true);
</script>

<div class="flex flex-col gap-2">
  <Checkbox 
    label="Simple binding" 
    bind:checked 
  />
  
  <p>Estado actual: {checked ? "Checked" : "Unchecked"}</p>
</div>`;

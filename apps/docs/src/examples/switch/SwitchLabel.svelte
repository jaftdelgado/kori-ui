<script lang="ts">
  import { Switch } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-6 w-full max-w-xs">
  <Switch label="Airplane Mode" description="Disable all wireless connections." size="md" />

  <Switch
    label="Notifications"
    description="Receive alerts about your account activity."
    checked
    size="md"
  />
</div>

<script lang="ts">
  import { Switch } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-8 w-full max-w-sm items-center justify-center">
  <Switch
    label="Developer Mode"
    description="This setting is currently locked by administrator."
    disabled
    size="md"
  />

  <Switch
    label="Two-Factor Authentication"
    description="Required by your organization's security policy."
    checked
    disabled
    size="md"
  />
</div>

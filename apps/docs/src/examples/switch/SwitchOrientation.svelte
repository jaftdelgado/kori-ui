<script lang="ts">
  import { Switch } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-6 w-full max-w-xs items-center justify-center">
  <Switch label="Airplane Mode" labelPosition="before" size="md" />

  <Switch label="Notifications" labelPosition="after" checked size="md" />
</div>

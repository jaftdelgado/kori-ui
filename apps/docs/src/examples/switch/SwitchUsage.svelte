<script lang="ts">
  import { Switch } from "@kori-ui/svelte";
  let isChecked = $state(false);
</script>

<div class="flex flex-col items-center gap-4">
  <Switch bind:checked={isChecked} label="Airplane mode" />
</div>

<script lang="ts">
  import { Switch } from "@kori-ui/switch";
  let checked = $state(false);
</script>

<div class="flex flex-col gap-4">
  <Switch bind:checked label="Airplane Mode" description="Disable all wireless connections" />

  <span class="text-xs text-secondaryText">
    Estado: {checked ? "Activado" : "Desactivado"}
  </span>
</div>

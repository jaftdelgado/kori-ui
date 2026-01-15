<script lang="ts">
  import { Checkbox } from "@kori-ui/checkbox";
  let checked = $state(true);
</script>

<div class="flex flex-col gap-2">
  <Checkbox id="chk-controlled" label="Simple binding" bind:checked />

  <p class="text-sm text-secondaryText">
    Estado actual:
    <span class="font-mono font-bold text-primaryControl">
      {checked ? "Checked" : "Unchecked"}
    </span>
  </p>
</div>

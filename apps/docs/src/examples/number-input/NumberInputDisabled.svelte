<script lang="ts">
  import { NumberInput } from "@kori-ui/svelte";

  let lockedValue = $state(100);
</script>

<div class="flex flex-col gap-6 w-full max-w-xs mx-auto">
  <NumberInput
    bind:value={lockedValue}
    label="Account Balance"
    description="This value cannot be modified"
    disabled
  />
</div>

<script lang="ts">
  import { NumberInput } from "@kori-ui/svelte";

  let age = $state(25);
  let percentage = $state(50);
</script>

<div class="flex flex-col gap-6 w-full max-w-xs mx-auto">
  <NumberInput
    bind:value={age}
    label="Age"
    description="Must be between 18 and 100"
    min={18}
    max={100}
    isRequired
  />

  <NumberInput
    bind:value={percentage}
    label="Discount Percentage"
    description="Enter a value between 0 and 100"
    min={0}
    max={100}
  />
</div>

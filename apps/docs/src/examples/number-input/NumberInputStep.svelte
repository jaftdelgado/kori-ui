<script lang="ts">
  import { NumberInput } from "@kori-ui/svelte";

  let price = $state(99.99);
  let temperature = $state(20);
</script>

<div class="flex flex-col gap-6 w-full max-w-xs mx-auto">
  <NumberInput
    bind:value={price}
    label="Product Price"
    description="Increments by $0.50"
    step={0.5}
    min={0}
  />

  <NumberInput
    bind:value={temperature}
    label="Temperature (°C)"
    description="Adjust in 5° increments"
    step={5}
    min={-50}
    max={50}
  />
</div>

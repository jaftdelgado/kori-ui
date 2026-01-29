<script lang="ts">
  import { NumberInput } from "@kori-ui/svelte";

  let smallValue = $state(10);
  let mediumValue = $state(20);
  let largeValue = $state(30);
</script>

<div class="flex flex-col gap-6 w-full max-w-xs mx-auto">
  <NumberInput size="sm" bind:value={smallValue} label="Small" />
  <NumberInput size="md" bind:value={mediumValue} label="Medium" />
  <NumberInput size="lg" bind:value={largeValue} label="Large" />
</div>

<script lang="ts">
  import { Slider } from "@kori-ui/svelte";

  let val1 = $state(30);
  let val2 = $state(50);
  let val3 = $state(70);
</script>

<div class="flex flex-col gap-8 w-full max-w-xs">
  <Slider label="Small" size="sm" bind:value={val1} />
  <Slider label="Medium" size="md" bind:value={val2} />
  <Slider label="Large" size="lg" bind:value={val3} />
</div>

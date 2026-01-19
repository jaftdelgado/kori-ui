<script lang="ts">
  import { Slider } from "@kori-ui/svelte";

  let val = $state(50);
</script>

<div class="flex items-center justify-center w-full max-w-md">
  <Slider label="Volume" description="Adjust the master output volume" bind:value={val} />
</div>

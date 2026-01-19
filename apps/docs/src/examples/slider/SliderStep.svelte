<script lang="ts">
  import { Slider } from "@kori-ui/svelte";

  let val = $state(20);
</script>

<div class="flex items-center justify-center w-full max-w-md">
  <Slider
    label="Brightness"
    description="Moves in increments of 10"
    min={0}
    max={100}
    step={10}
    bind:value={val}
  />
</div>

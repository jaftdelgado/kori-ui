<script lang="ts">
  import { Slider } from "@kori-ui/slider";
  let value = $state(20);
</script>

<div class="flex flex-col gap-4 max-w-sm w-full">
  <Slider
    id="slider-steps"
    bind:value
    min={0}
    max={100}
    step={10}
    label="Grid Snapping"
    description="Steps of 10 units ({value}/100)"
  />
</div>

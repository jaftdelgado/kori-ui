<script lang="ts">
  import { Slider } from "@kori-ui/slider";
  let value = $state(50);
</script>

<div class="flex flex-col gap-4 max-w-sm w-full">
  <Slider
    id="slider-basic"
    bind:value
    label="Volume Level"
    description="Adjust the output volume"
  />

  <div
    class="text-xs text-secondaryText font-mono bg-gray-50 p-2 rounded border border-secondaryControl"
  >
    Value: {value}
  </div>
</div>

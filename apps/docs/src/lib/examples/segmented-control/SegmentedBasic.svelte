<script lang="ts">
  import { SegmentedControl } from "@kori-ui/segmented-control";

  const options = [
    { value: "map", label: "Map" },
    { value: "transit", label: "Transit" },
    { value: "satellite", label: "Satellite" }
  ];

  let view = $state("map");
</script>

<div class="flex flex-col gap-4 w-full max-w-md">
  <SegmentedControl {options} bind:value={view} />

  <div
    class="text-xs text-secondaryText font-mono bg-gray-50 p-2 rounded border border-secondaryControl"
  >
    Selected: {view}
  </div>
</div>

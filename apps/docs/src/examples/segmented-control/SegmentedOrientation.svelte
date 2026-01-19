<script lang="ts">
  import { SegmentedControl } from "@kori-ui/svelte";

  let value = $state("day");
  const options = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" }
  ];
</script>

<div class="flex items-center justify-center w-full">
  <SegmentedControl {options} bind:value orientation="vertical" class="w-40" />
</div>

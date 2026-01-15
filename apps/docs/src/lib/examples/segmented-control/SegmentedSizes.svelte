<script lang="ts">
  import { SegmentedControl } from "@kori-ui/segmented-control";

  const options = [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" }
  ];

  let val1 = $state("md");
  let val2 = $state("lg");
</script>

<div class="flex flex-col gap-6 w-full max-w-md">
  <div class="space-y-2">
    <span class="text-xs font-medium text-secondaryText uppercase">Size MD (Default)</span>
    <SegmentedControl size="md" {options} bind:value={val1} />
  </div>

  <div class="space-y-2">
    <span class="text-xs font-medium text-secondaryText uppercase">Size LG</span>
    <SegmentedControl size="lg" {options} bind:value={val2} />
  </div>
</div>

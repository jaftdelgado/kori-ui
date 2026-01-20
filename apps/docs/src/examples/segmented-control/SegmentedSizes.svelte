<script lang="ts">
  import { SegmentedControl } from "@kori-ui/svelte";

  let val1 = $state("md");
  let val2 = $state("lg");

  const options = [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" }
  ];
</script>

<div class="flex flex-col items-center gap-6 w-full max-w-xs">
  <SegmentedControl {options} bind:value={val1} size="md" />
  <SegmentedControl {options} bind:value={val2} size="lg" />
</div>

<script lang="ts">
  import { SegmentedControl } from "@kori-ui/svelte";

  let val1 = $state("option1");
  let val2 = $state("option2");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Disabled Option", disabled: true }
  ];
</script>

<div class="flex flex-col items-center gap-6 w-full">
  <SegmentedControl {options} bind:value={val1} />

  <SegmentedControl {options} bind:value={val2} disabled />
</div>

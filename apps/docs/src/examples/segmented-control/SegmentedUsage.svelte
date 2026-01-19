<script lang="ts">
  import { SegmentedControl } from "@kori-ui/svelte";

  let value = $state("preview");
  const options = [
    { value: "preview", label: "Preview" },
    { value: "code", label: "Code" },
    { value: "live", label: "Live" }
  ];
</script>

<div class="flex items-center justify-center w-full">
  <SegmentedControl {options} bind:value />
</div>

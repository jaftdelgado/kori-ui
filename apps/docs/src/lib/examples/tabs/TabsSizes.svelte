<script lang="ts">
  import { Tabs } from "@kori-ui/tabs";

  let val1 = $state("tab1");
  let val2 = $state("tab1");

  const options = [
    { value: "tab1", label: "First Tab" },
    { value: "tab2", label: "Second Tab" }
  ];
</script>

<div class="flex flex-col gap-8">
  <div class="space-y-2">
    <span class="text-xs font-medium text-secondaryText uppercase">Medium (Default)</span>
    <Tabs size="md" {options} bind:value={val1} />
  </div>

  <div class="space-y-2">
    <span class="text-xs font-medium text-secondaryText uppercase">Large</span>
    <Tabs size="lg" {options} bind:value={val2} />
  </div>
</div>

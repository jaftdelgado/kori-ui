<script lang="ts">
  import { RadioGroup, Radio } from "@kori-ui/svelte";

  let selected = $state("horizontal");
</script>

<div class="flex items-center justify-center w-full">
  <RadioGroup bind:value={selected} orientation="horizontal" class="gap-6">
    <Radio value="horizontal" label="Horizontal" />
    <Radio value="vertical" label="Vertical" />
    <Radio value="grid" label="Grid" />
  </RadioGroup>
</div>

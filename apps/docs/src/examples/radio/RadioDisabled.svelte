<script lang="ts">
  import { RadioGroup, Radio } from "@kori-ui/svelte";

  let selected = $state("enabled");
</script>

<div class="flex flex-col gap-8 items-center w-full">
  <RadioGroup bind:value={selected}>
    <Radio value="enabled" label="Available option" />
    <Radio value="disabled" label="Specific disabled" disabled />
  </RadioGroup>

  <RadioGroup value="all-disabled" disabled>
    <Radio value="all-disabled" label="Group disabled" />
    <Radio value="other" label="Also disabled" />
  </RadioGroup>
</div>

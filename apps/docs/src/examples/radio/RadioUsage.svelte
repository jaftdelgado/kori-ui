<script lang="ts">
  import { RadioGroup, Radio } from "@kori-ui/svelte";

  let selected = $state("option-1");
</script>

<div class="flex items-center justify-center w-full">
  <RadioGroup bind:value={selected}>
    <Radio value="option-1" label="Standard Plan" description="Basic features for everyone" />
    <Radio value="option-2" label="Pro Plan" description="Advanced tools for professionals" />
  </RadioGroup>
</div>

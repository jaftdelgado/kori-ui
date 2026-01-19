<script lang="ts">
  import { RadioGroup, Radio } from "@kori-ui/svelte";

  let val1 = $state("sm");
  let val2 = $state("md");
  let val3 = $state("lg");
</script>

<div class="flex flex-col gap-8 w-full items-center">
  <RadioGroup bind:value={val1} size="sm">
    <Radio value="sm" label="Small size" />
  </RadioGroup>

  <RadioGroup bind:value={val2} size="md">
    <Radio value="md" label="Medium size" />
  </RadioGroup>

  <RadioGroup bind:value={val3} size="lg">
    <Radio value="lg" label="Large size" />
  </RadioGroup>
</div>

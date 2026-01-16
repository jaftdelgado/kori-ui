<script lang="ts">
  import { RadioGroup, Radio } from "@kori-ui/radio";
  let plan = $state("hobby");
</script>

<div class="flex flex-col gap-4">
  <RadioGroup bind:value={plan}>
    <Radio value="hobby" label="Hobby Plan" description="Perfect for personal projects" />
    <Radio value="pro" label="Pro Plan" description="Best for growing teams" />
    <Radio value="enterprise" label="Enterprise" description="Advanced security and support" />
  </RadioGroup>

  <div
    class="text-xs text-secondaryText font-mono bg-gray-50 p-2 rounded border border-secondaryControl w-fit"
  >
    Selected: {plan}
  </div>
</div>

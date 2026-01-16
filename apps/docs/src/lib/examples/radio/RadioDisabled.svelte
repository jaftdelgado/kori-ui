<script lang="ts">
  import { RadioGroup, Radio } from "@kori-ui/radio";
</script>

<div class="flex flex-col gap-8">
  <div class="space-y-2">
    <span class="text-xs font-medium text-secondaryText uppercase">Full Group Disabled</span>
    <RadioGroup disabled value="1">
      <Radio value="1" label="Cannot select this" />
      <Radio value="2" label="Nor this one" />
    </RadioGroup>
  </div>

  <div class="space-y-2">
    <span class="text-xs font-medium text-secondaryText uppercase">Individual Item Disabled</span>
    <RadioGroup value="2">
      <Radio value="1" label="Available option" />
      <Radio value="2" label="Disabled option" disabled />
      <Radio value="3" label="Another available" />
    </RadioGroup>
  </div>
</div>

<script lang="ts">
  import { RadioGroup, Radio } from "@kori-ui/radio";
</script>

<div class="flex flex-col gap-6">
  <div class="space-y-2">
    <RadioGroup size="sm" value="1">
      <Radio value="1" label="Small option" />
      <Radio value="2" label="Another small option" />
    </RadioGroup>
  </div>

  <div class="space-y-2">
    <RadioGroup size="md" value="1">
      <Radio value="1" label="Medium option" />
      <Radio value="2" label="Another medium option" />
    </RadioGroup>
  </div>

  <div class="space-y-2">
    <RadioGroup size="lg" value="1">
      <Radio value="1" label="Large option" />
      <Radio value="2" label="Another large option" />
    </RadioGroup>
  </div>
</div>

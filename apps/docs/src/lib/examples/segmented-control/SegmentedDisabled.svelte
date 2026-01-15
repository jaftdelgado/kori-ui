<script lang="ts">
  import { SegmentedControl } from "@kori-ui/segmented-control";

  const options = [
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" },
    { value: "opt3", label: "Option 3" }
  ];

  const optionsWithItemDisabled = [
    { value: "opt1", label: "Enabled" },
    { value: "opt2", label: "Disabled", disabled: true },
    { value: "opt3", label: "Enabled" }
  ];
</script>

<div class="flex flex-col gap-6 w-full max-w-md">
  <div class="space-y-2">
    <span class="text-xs font-medium text-secondaryText uppercase">Component Disabled</span>
    <SegmentedControl disabled {options} value="opt1" />
  </div>

  <div class="space-y-2">
    <span class="text-xs font-medium text-secondaryText uppercase">Option Disabled</span>
    <SegmentedControl options={optionsWithItemDisabled} value="opt1" />
  </div>
</div>

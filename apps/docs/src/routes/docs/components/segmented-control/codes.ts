export const basicCode = `<script>
  import { SegmentedControl } from "@kori-ui/segmented-control";
  
  const options = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" }
  ];

  let view = $state("daily");
</script>

<SegmentedControl {options} bind:value={view} />`;

export const sizesCode = `<SegmentedControl size="md" {options} bind:value={val1} />
<SegmentedControl size="lg" {options} bind:value={val2} />`;

export const disabledCode = `<script>
  const optionsWithDisabled = [
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2", disabled: true },
    { value: "opt3", label: "Option 3" }
  ];
</script>

<SegmentedControl disabled {options} value="opt1" />
<SegmentedControl options={optionsWithDisabled} value="opt1" />`;

export const iconsCode = `<script>
  import { SegmentedControl } from "@kori-ui/segmented-control";
</script>

{#snippet sunIcon()}
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
{/snippet}

{#snippet moonIcon()}
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
{/snippet}

<SegmentedControl 
  value="light"
  options={[
    { value: "light", label: "Light", icon: sunIcon },
    { value: "dark", label: "Dark", icon: moonIcon },
    { value: "system", label: "System" }
  ]} 
/>`;

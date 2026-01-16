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
  import Icon from "$lib/components/ui/Icon.svelte";

  let theme = $state("light");
</script>

{#snippet sunIcon()}
  <Icon name="sun" />
{/snippet}

{#snippet moonIcon()}
  <Icon name="moon" />
{/snippet}

{#snippet monitorIcon()}
  <Icon name="display" />
{/snippet}

<SegmentedControl
  bind:value={theme}
  options={[
    { value: "light", label: "Light", icon: sunIcon },
    { value: "dark", label: "Dark", icon: moonIcon },
    { value: "system", label: "System", icon: monitorIcon }
  ]}
/>`;

export const iconsOnlyCode = `<script>
  import { SegmentedControl } from "@kori-ui/segmented-control";
  import Icon from "$lib/components/ui/Icon.svelte";

  let theme = $state("light");
</script>

{#snippet sunIcon()}
  <Icon name="sun" />
{/snippet}

{#snippet moonIcon()}
  <Icon name="moon" />
{/snippet}

{#snippet monitorIcon()}
  <Icon name="display" />
{/snippet}

<SegmentedControl
  bind:value={theme}
  options={[
    { value: "light", icon: sunIcon, iconOnly: true },
    { value: "dark", icon: moonIcon, iconOnly: true },
    { value: "system", icon: monitorIcon, iconOnly: true }
  ]}
/>`;

export const orientationCode = `<script>
  import { SegmentedControl } from "@kori-ui/segmented-control";

  const options = [
    { value: "profile", label: "Profile" },
    { value: "account", label: "Account" },
    { value: "appearance", label: "Appearance" },
    { value: "notifications", label: "Notifications" }
  ];

  let currentTab = $state("profile");
</script>

<SegmentedControl
  {options}
  bind:value={currentTab}
  orientation="vertical"
  class="w-48"
/>`;
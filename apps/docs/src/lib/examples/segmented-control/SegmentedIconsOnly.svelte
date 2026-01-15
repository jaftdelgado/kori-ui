<script lang="ts">
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

<div class="max-w-md mx-auto">
  <SegmentedControl
    bind:value={theme}
    options={[
      { value: "light", icon: sunIcon, iconOnly: true },
      { value: "dark", icon: moonIcon, iconOnly: true },
      { value: "system", icon: monitorIcon, iconOnly: true }
    ]}
  />
</div>

<script lang="ts">
  import { SegmentedControl } from "@kori-ui/svelte";
  import Icon from "@components/Icon.svelte";
  import type { Snippet } from "svelte";

  let device = $state("desktop");
</script>

{#snippet mobileIcon()}
  <Icon name="smartphone" />
{/snippet}

{#snippet tabletIcon()}
  <Icon name="tablet" />
{/snippet}

{#snippet monitorIcon()}
  <Icon name="monitor" />
{/snippet}

<div class="flex items-center justify-center w-full">
  <SegmentedControl
    bind:value={device}
    options={[
      { value: "mobile", icon: mobileIcon as Snippet, iconOnly: true },
      { value: "tablet", icon: tabletIcon as Snippet, iconOnly: true },
      { value: "desktop", icon: monitorIcon as Snippet, iconOnly: true }
    ]}
  />
</div>

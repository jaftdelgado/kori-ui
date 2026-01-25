<script lang="ts">
  import { Button, Separator, SegmentedControl } from "@kori-ui/svelte";
  import Icon from "@components/ui/Icon.svelte";
  import type { Snippet } from "svelte";

  let device = $state("desktop");
</script>

{#snippet sunIcon()}
  <Icon name="sun" />
{/snippet}

{#snippet moonIcon()}
  <Icon name="moon" />
{/snippet}

{#snippet displayIcon()}
  <Icon name="display" />
{/snippet}

<div class="flex items-center justify-center w-full gap-4">
  <Button variant="ghost">Docs</Button>
  <Separator orientation="vertical" />
  <SegmentedControl
    bind:value={device}
    options={[
      { value: "mobile", icon: sunIcon as Snippet, iconOnly: true },
      { value: "tablet", icon: moonIcon as Snippet, iconOnly: true },
      { value: "desktop", icon: displayIcon as Snippet, iconOnly: true }
    ]}
  />
</div>

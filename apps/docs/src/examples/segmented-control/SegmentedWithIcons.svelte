<script lang="ts">
  import { SegmentedControl } from "@kori-ui/svelte";
  import Icon from "@components/Icon.svelte";
  import type { Snippet } from "svelte";

  let view = $state("grid");
</script>

{#snippet gridIcon()}
  <Icon name="layoutGrid" />
{/snippet}

{#snippet listIcon()}
  <Icon name="list" />
{/snippet}

<div class="flex items-center justify-center w-full">
  <SegmentedControl
    bind:value={view}
    options={[
      { value: "grid", label: "Grid", icon: gridIcon as Snippet },
      { value: "list", label: "List", icon: listIcon as Snippet }
    ]}
  />
</div>

<script lang="ts">
  import { Tooltip, Button } from "@kori-ui/svelte";

  let isOpen = $state(false);
</script>

<div class="flex flex-col items-center gap-4 py-8">
  <Tooltip content="I am controlled via bind:isOpen" bind:isOpen>
    <Button variant="secondary">Hover me</Button>
  </Tooltip>

  <span class="text-sm text-secondaryText">
    Open: {isOpen}
  </span>
</div>

<script lang="ts">
  import { Popover, Button } from "@kori-ui/svelte";
</script>

<div>
  <Popover
    header="Popover "
    subtitle="A floating container for rich info and actions triggered by an element."
    class="max-w-60"
  >
    {#snippet trigger()}
      <Button variant="primary">Open Popover</Button>
    {/snippet}
  </Popover>
</div>

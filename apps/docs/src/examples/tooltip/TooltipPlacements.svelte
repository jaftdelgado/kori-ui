<script lang="ts">
  import { Tooltip, Button } from "@kori-ui/svelte";

  const items = [
    { p: "top", pos: "col-start-2 row-start-1" },
    { p: "left", pos: "col-start-1 row-start-2" },
    { p: "right", pos: "col-start-3 row-start-2" },
    { p: "bottom", pos: "col-start-2 row-start-3" }
  ] as const;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-12 w-fit mx-auto py-12">
  {#each items as { p, pos }}
    <div class="flex justify-center {pos}">
      <Tooltip placement={p} content="{p.charAt(0).toUpperCase() + p.slice(1)} tooltip">
        <Button variant="secondary" class="capitalize min-w-28">
          {p}
        </Button>
      </Tooltip>
    </div>
  {/each}
</div>

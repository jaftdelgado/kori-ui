<script lang="ts">
  import { ScrollArea, Surface } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-6 w-full max-w-md">
  <div>
    <Surface class="p-4">
      <ScrollArea hideScrollBar class="h-32">
        <div class="space-y-2">
          {#each Array(10) as _, i}
            <p class="text-sm">Item {i + 1} - Scrollbar is hidden but still functional</p>
          {/each}
        </div>
      </ScrollArea>
    </Surface>
  </div>
</div>

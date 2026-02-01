<script lang="ts">
  import { ScrollArea, Surface } from "@kori-ui/svelte";
</script>

<Surface class="w-full max-w-sm p-4">
  <ScrollArea class="h-48">
    <div class="space-y-4">
      <h4 class="text-sm font-medium">Notifications</h4>
      {#each Array(15) as _, i}
        <div class="flex items-center gap-3 p-2 rounded-md bg-surface-secondary">
          <div class="h-8 w-8 rounded-full bg-primary/20"></div>
          <div class="flex-1">
            <p class="text-sm font-medium">Notification {i + 1}</p>
            <p class="text-xs text-muted">This is a sample notification message.</p>
          </div>
        </div>
      {/each}
    </div>
  </ScrollArea>
</Surface>

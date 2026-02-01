<script lang="ts">
  import { ScrollArea, Surface } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-6 w-full max-w-md">
  <div>
    <p class="text-sm font-medium mb-2">Small Shadow (20px)</p>
    <Surface class="p-4">
      <ScrollArea size={20} class="h-32">
        <div class="space-y-2">
          {#each Array(10) as _, i}
            <p class="text-sm">Content line {i + 1}</p>
          {/each}
        </div>
      </ScrollArea>
    </Surface>
  </div>

  <div>
    <p class="text-sm font-medium mb-2">Medium Shadow (40px - Default)</p>
    <Surface class="p-4">
      <ScrollArea size={40} class="h-32">
        <div class="space-y-2">
          {#each Array(10) as _, i}
            <p class="text-sm">Content line {i + 1}</p>
          {/each}
        </div>
      </ScrollArea>
    </Surface>
  </div>

  <div>
    <p class="text-sm font-medium mb-2">Large Shadow (60px)</p>
    <Surface class="p-4">
      <ScrollArea size={60} class="h-32">
        <div class="space-y-2">
          {#each Array(10) as _, i}
            <p class="text-sm">Content line {i + 1}</p>
          {/each}
        </div>
      </ScrollArea>
    </Surface>
  </div>
</div>

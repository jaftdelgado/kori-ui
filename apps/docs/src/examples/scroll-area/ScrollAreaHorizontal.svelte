<script lang="ts">
  import { ScrollArea, Surface } from "@kori-ui/svelte";

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
    "Music",
    "Movies",
    "Games",
    "Toys",
    "Health",
    "Beauty",
    "Automotive"
  ];
</script>

<Surface class="w-full max-w-md p-4">
  <ScrollArea orientation="horizontal">
    <div class="flex gap-4">
      {#each categories as category}
        <button
          class="flex-shrink-0 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {category}
        </button>
      {/each}
    </div>
  </ScrollArea>
</Surface>
